import {
  CompletionItemProvider,
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Range,
  CompletionItem,
  CompletionContext,
  CompletionList,
  CompletionItemKind,
  workspace,
  MarkdownString,
  SnippetString,
  env
} from 'vscode'
import * as vscode from 'vscode'

import { options as InputOptions, optionsType, library } from './inputs/index.js'

export class FeCompletionItemProvider implements CompletionItemProvider<CompletionItem> {
  private _document!: TextDocument
  private _position!: Position
  private tagReg: RegExp = /<([\w-]+)\s*/g
  private attrReg: RegExp = /(?:|\s*)([\w-]+)=['"][^'"]*/
  private tagStartReg: RegExp = /<([\w-]*)$/
  private typeReg: RegExp = /type=\"([^\"]*)\"/

  /**
   * 获取前置标签
   */
   getPreTag(): TagObject | undefined {
    let line = this._position.line
    let tag: TagObject | string | undefined
    let txt = this.getTextBeforePosition(this._position)

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)
      if (tag === 'break') {
        return undefined
      }
      if (tag) {
        return <TagObject>tag
      }
      line--
    }
    return undefined
  }

  getFormulateType(): string {
    let line = this._position.line
    let txt = this._document.lineAt(line).text
    let match: RegExpExecArray | null
    if ((match = this.typeReg.exec(txt))) {
      return match[1]
    }
    return ''
  }

  /**
   * 获取前置属性
   */
  getPreAttr(): string {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '')
    let end = this._position.character
    let start = txt.lastIndexOf(' ', end) + 1
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end))
    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 匹配属性
   *
   * @param reg 匹配模式
   * @param txt 匹配文本
   */
   matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null
    match = reg.exec(txt)
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1]
    }
    return ''
  }

  /**
   * 匹配标签
   * @param reg 匹配模式
   * @param txt 匹配文本
   * @param line 当前行
   */
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string | undefined {
    let match: RegExpExecArray | null
    let arr: TagObject[] = []

    if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
      return 'break'
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      })
    }
    return arr.pop()
  }

  /**
   * 获取当前位置之前的字符串
   *
   * @param position 位置
   */
  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0)
    var range = new Range(start, position)
    return this._document.getText(range)
  }

  /**
   * 是否位属性值的开始
   * @param tag 标签
   * @param attr 属性
   */
  isAttrValueStart(tag: Object | undefined, attr: string) {
    return !!tag && !!attr
  }

  /**
   * 是否位属性的开始
   * @param tag 标签
   */
  isAttrStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position)
    return tag && /\ :?[\w-]*$/.test(preText)
  }

  /**
   * 是否为方法的开始
   * @param tag 标签
   */
  isEventStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position)
    return tag && /\ \@[\w-]*$/.test(preText)
  }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    this._document = document
    this._position = position

    let tag: TagObject | undefined = this.getPreTag()
    let attr = this.getPreAttr()
    
    if (!tag || !/^[F|f]ormulate/.test(tag.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null
    }else if(this.isAttrValueStart(tag, attr) && attr === 'type'){
      return this.getFeTypeList()
    } else if (this.isAttrStart(tag)) {
      return this.getFeAttrList()
    }

    return null
  }

  getFeType(): string[]{
    return Object.keys(InputOptions.library || {})
  }

  getFeTypeList(): CompletionItem[] {
    let completionItems:CompletionItem[] = []

    this.getFeType().map(value=>{
      completionItems.push({
        label: `${value}`,
        sortText: `0${value}`,
        detail: `formulate-el-ui Type`,
        kind: CompletionItemKind.Value,
        insertText: value,
        documentation: 
          new MarkdownString('[gitee 文档](https://gitee.com/tu6ge/formulate_el_ui#%E5%8F%AA%E6%89%A9%E5%B1%95-element-ui-%E5%B8%B8%E7%94%A8%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%E7%BB%84%E4%BB%B6)')
          .appendMarkdown('\n\n')
          .appendMarkdown('[github 文档](https://github.com/tu6ge/formulate-el-ui#%E5%8F%AA%E6%89%A9%E5%B1%95-element-ui-%E5%B8%B8%E7%94%A8%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%E7%BB%84%E4%BB%B6)')
      })
    })
    return completionItems
  }

  getFeAttrList(): CompletionItem[] {
    let completionItems:CompletionItem[] = [] 
    let formulateType = this.getFormulateType()
    if(formulateType === ''){
      return completionItems
    }
    if(
      this.getFeType().indexOf(formulateType) === -1
    ){
      return completionItems
    }

    let library:library = InputOptions.library || {}
    
    let slots:string[] = library[formulateType]?.slotProps?.component || []

    slots.map(value=>{
      completionItems.push({
        label: `${value}`,
        sortText: `0${value}`,
        detail: `formulate-el-ui Type`,
        kind: CompletionItemKind.Value,
        insertText: value,
        documentation: 
          new MarkdownString('[gitee 文档](https://gitee.com/tu6ge/formulate_el_ui#%E5%8F%AA%E6%89%A9%E5%B1%95-element-ui-%E5%B8%B8%E7%94%A8%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%E7%BB%84%E4%BB%B6)')
          .appendMarkdown('\n\n')
          .appendMarkdown('[github 文档](https://github.com/tu6ge/formulate-el-ui#%E5%8F%AA%E6%89%A9%E5%B1%95-element-ui-%E5%B8%B8%E7%94%A8%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%E7%BB%84%E4%BB%B6)')
      })
    })

    return completionItems
  }
}

interface TagObject {
  text: string
  offset: number
}
