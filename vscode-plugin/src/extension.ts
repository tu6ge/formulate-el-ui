// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import {FeCompletionItemProvider} from './completion'

export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "formulate-el-helper" is now active!');

	// 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new FeCompletionItemProvider(),
      '',
      ' ',
      ':',
      '"',
      "'",
      '@',
    )
  )

}

// this method is called when your extension is deactivated
export function deactivate() {}
