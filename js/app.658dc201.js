(function(e){function t(t){for(var a,r,o=t[0],i=t[1],c=t[2],p=0,m=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,o=1;o<l.length;o++){var i=l[o];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},n={app:0},s=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(l,a,function(t){return e[t]}.bind(null,a));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/formulate-el-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;s.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"0ee0":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var a,n=l("2b0e"),s=l("d644"),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimen-list",attrs:{id:"app"}},[l("SpecimenButton"),l("SpecimenBox"),l("SpecimenFile"),l("SpecimenGroup"),l("SpecimenSelect"),l("SpecimenSlider"),l("SpecimenText"),l("SpecimenTextarea"),l("SpecimenElement"),l("SpecimenForm"),l("SpecimenFormInline")],1)},o=[],i=(l("d3b7"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("Text 体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("颜色")]),l("FormulateInput",{attrs:{label:"选择一个颜色?",type:"color",help:"挑选你喜欢的",validation:"required|between:0,10"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("日期")]),l("FormulateInput",{attrs:{label:"选择一天",type:"date",help:"挑选你的生日"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("日期 2021-6-18 之前")]),l("FormulateInput",{attrs:{label:"选择一天",type:"date",help:"挑选你的生日",validation:"before:2021-6-18"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("Datetime-local")]),l("FormulateInput",{attrs:{label:"选择一天和时间",type:"datetime-local",help:"什么时候聚会呢？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("邮箱")]),l("FormulateInput",{attrs:{label:"你的邮箱是？",type:"email",placeholder:"placeholder@example.com",help:"请留下你的邮箱"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("月份")]),l("FormulateInput",{attrs:{label:"感兴趣的月份",type:"month",help:"是圣诞节吗？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("数字")]),l("FormulateInput",{attrs:{label:"你现在多大了？",type:"number",placeholder:"25",help:"选择你的年龄"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("密码")]),l("FormulateInput",{attrs:{label:"输入一个密码",type:"password",help:"请不要输入123456"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("搜索")]),l("FormulateInput",{attrs:{label:"但是我还是没找到。",type:"search",placeholder:"我在找什么...",help:"我爬过最高的山峰。"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("电话")]),l("FormulateInput",{attrs:{label:"哦，你喜欢迈克和艾克斯吗？",type:"tel",placeholder:"我可以给你号码吗...",help:"我可以拥有吗？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("时间")]),l("FormulateInput",{attrs:{label:"什么时间吃晚饭",type:"time",placeholder:"选择一个时间",help:"你什么时候把食物塞进自己的嘴里？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("文本")]),l("FormulateInput",{attrs:{label:"用户名",type:"text",placeholder:"用户名",help:"选择一个用户名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("链接")]),l("FormulateInput",{attrs:{label:"个人网站",type:"url",placeholder:"https://",help:"你网站的网址是多少？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("星期")]),l("FormulateInput",{attrs:{label:"我不知道谁会使用这个字段",type:"week",placeholder:"选择一个周",help:"哪个周？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("element-ui 举例")]),l("FormulateInput",{attrs:{label:"用户名",type:"el-input",value:"张三",clearable:"",help:"你想起名叫张三吗"}}),l("FormulateInput",{attrs:{label:"你喜欢的开源作者是谁",type:"el-input",value:"尤雨溪",maxlength:"10","show-word-limit":"",help:"只能写一个"}})],1)])}),c=[],u={data:function(){return{isDisabled:!1}}},p=u,m=l("2877"),d=Object(m["a"])(p,i,c,!1,null,null,null),v=d.exports,b=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("Textarea 体系")]),l("div",{staticClass:"specimen specimen--single"},[l("h3",[e._v("Textarea")]),l("FormulateInput",{attrs:{label:"可以写下你的人生故事吗？",type:"textarea",help:"我想听听这一切！"}})],1)])},h=[],f={},x=Object(m["a"])(f,b,h,!1,null,null,null),y=x.exports,_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--group"},[l("h2",[e._v("分组体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("一个不可重复的分组")]),l("FormulateInput",{attrs:{type:"group"}},[l("FormulateInput",{attrs:{label:"城市",type:"text",name:"city"}}),l("FormulateInput",{attrs:{label:"区/县",type:"select",options:{NE:"Nebraska",MO:"Missouri",VA:"Virginia"},placeholder:"请选择一个区县"}})],1)],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("简单的可重复分组")]),l("FormulateInput",{attrs:{type:"group",name:"foobar","add-label":"尝试着添加一条",repeatable:!0}},[l("div",{staticClass:"wrap"},[l("FormulateInput",{attrs:{type:"text",name:"name"}})],1)])],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("可重复分组")]),l("FormulateInput",{attrs:{name:"users",label:"邀请一些新用户",type:"group",placeholder:"users",repeatable:!0,minimum:"3",value:[{name:"Justin"},{name:"Bob"}],"add-label":"添加新用户","remove-label":"删除用户"}},[l("FormulateInput",{attrs:{label:"姓名",name:"name",type:"text",placeholder:"用户的姓名",validation:"required","validation-name":"姓名"}}),l("FormulateInput",{attrs:{name:"email",label:"邮箱",type:"email",placeholder:"用户邮箱",validation:"required|email","validation-name":"邮箱"}})],1)],1)])},F=[],w={},I=Object(m["a"])(w,_,F,!1,null,null,null),C=I.exports,g=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("文件体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("单一文件")]),l("FormulateInput",{attrs:{label:"上传一个文件",type:"file","outer-class":["file-input-1"],help:"选择任意文件上传",uploader:e.uploadToS3,"upload-url":"https://cq2cm6d0h6.execute-api.us-east-1.amazonaws.com/signature"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("单一文件（只读）")]),l("FormulateInput",{attrs:{disabled:"",label:"上传一个文件",type:"file","outer-class":["file-input-1"],help:"选择任意文件上传",uploader:e.uploadToS3,"upload-url":"https://cq2cm6d0h6.execute-api.us-east-1.amazonaws.com/signature"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多文件")]),l("FormulateInput",{attrs:{multiple:!0,label:"上传文件",name:"file",type:"file","outer-class":["file-input-2"],value:[{url:"apple.pdf"}],help:"选择任意 pdf 文件上传",validation:"mime:application/pdf"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多文件（只读）")]),l("FormulateInput",{attrs:{disabled:"",multiple:!0,label:"上传文件",name:"file",type:"file","outer-class":["file-input-2"],help:"选择任意 pdf 文件上传",validation:"mime:application/pdf"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("图片")]),l("FormulateForm",{attrs:{name:"demo"},on:{submit:e.sendData},model:{value:e.formValues,callback:function(t){e.formValues=t},expression:"formValues"}},[l("FormulateInput",{attrs:{label:"你长相怎样？",type:"image",name:"avatar",help:"选择一个图片上传",multiple:""}})],1)],1)])},V=[],k=l("1da1"),j=(l("96cf"),l("ac1f"),l("466d"),l("b0c0"),l("e9c4"),l("d9e2"),l("3ca3"),l("ddb0"),l("2b3d"),l("9861"),l("99af"),{data:function(){return{formValues:{avatar2:[]},formResult:{}}},methods:{insertImg:function(){this.formValues.avatar2=[{url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",name:"avatar1.png"}]},sendData:function(e){this.formResult=e},uploadToS3:function(e,t,l,a){return Object(k["a"])(regeneratorRuntime.mark((function n(){var s,r,o,i,c,u,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.name.match(/\.([a-zA-Z0-9]+)$/),r=s?s[1]:"txt",t(5),n.next=5,fetch(a.uploadUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({extension:r,mime:e.type||"application/octet-stream"})});case 5:if(o=n.sent,!o.ok){n.next=26;break}return n.next=9,o.json();case 9:return i=n.sent,c=i.uploadUrl,t(10),u=new XMLHttpRequest,u.open("PUT",c),u.upload.addEventListener("progress",(function(e){return t(Math.round(e.loaded/e.total*90)+10)})),u.setRequestHeader("Content-Type","application/octet-stream"),n.prev=16,n.next=19,new Promise((function(t,l){u.onload=function(){return u.status-200<100?t():l(new Error("Failed to upload"))},u.onerror=function(){return l(new Error("Failed to upload"))},u.send(e)}));case 19:return t(100),p=new URL(c),n.abrupt("return",{url:"".concat(p.protocol,"//").concat(p.host).concat(p.pathname),name:e.name});case 24:n.prev=24,n.t0=n["catch"](16);case 26:l("There was an error uploading your file.");case 27:case"end":return n.stop()}}),n,null,[[16,24]])})))()}}}),S=j,O=Object(m["a"])(S,g,V,!1,null,null,null),T=O.exports,q=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens"},[l("h2",[e._v("按钮体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("Button")]),l("FormulateInput",{attrs:{label:"点击",type:"button"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("Submit")]),l("FormulateInput",{attrs:{label:"提交",type:"submit"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("不可点击的 submit")]),l("FormulateInput",{attrs:{disabled:"",label:"Submit me",type:"submit"}})],1)])},E=[],$={},P=Object(m["a"])($,q,E,!1,null,null,null),A=P.exports,R=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("Box 体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("单一 Checkbox")]),l("FormulateInput",{attrs:{type:"checkbox",label:"你喜欢 vueformulate 吗？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("不可点击的 Checkbox")]),l("FormulateInput",{attrs:{disabled:"",type:"checkbox",label:"你喜欢 vueformulate 吗？"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多个 checkbox")]),l("FormulateInput",{attrs:{type:"checkbox",label:"你最喜欢哪种的水果？",options:{apple:"苹果",banana:"香蕉",orange:"橘子",watermelon:"西瓜"},help:"可以多选，也可以单选"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多可不可点击的 checkbox")]),l("FormulateInput",{attrs:{type:"checkbox",disabled:"",value:["watermelon"],label:"你最喜欢哪种的水果？",options:{apple:"苹果",banana:"香蕉",orange:"橘子",watermelon:"西瓜"},help:"可以多选，也可以单选"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("单选框")]),l("FormulateInput",{attrs:{type:"radio",label:"你想参观什么沉重的物体？",options:{moon:"月球",mars:"火星",venus:"进行",mercury:"水星",sun:"太阳"}}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("单选不可点击的单选框")]),l("FormulateInput",{attrs:{disabled:"",value:"moon",type:"radio",label:"你想参观什么沉重的物体？",options:{moon:"月球",mars:"火星",venus:"进行",mercury:"水星",sun:"太阳"}}})],1)])},M=[],N={},L=Object(m["a"])(N,R,M,!1,null,null,null),z=L.exports,B=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("滑块体系")]),l("div",{staticClass:"specimen specimen--single"},[l("h3",[e._v("带范围的")]),l("FormulateInput",{attrs:{label:"我们应该把它调到多远？",type:"range",min:"0",max:"11","show-value":!0,help:"每当我们被允许再次举办派对时......"}})],1)])},U=[],H={},G=Object(m["a"])(H,B,U,!1,null,null,null),D=G.exports,J=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--text"},[l("h2",[e._v("下拉选择体系")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("下拉选择器")]),l("FormulateInput",{attrs:{label:"哪个星球最热呢？",type:"select",options:{moon:"月球",mars:"火星",venus:"进行",mercury:"水星",sun:"太阳"},help:"星球表面的平均温度"}}),l("FormulateInput",{attrs:{label:"谁制造了最好的火箭呢？",type:"select",options:["SpaceX","United Launch Alliance","Avio","Aerojet Rocketdyne","Russians"],help:"选择你最喜欢的"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("带 placeholder 的下拉选择器")]),l("FormulateInput",{attrs:{label:"哪个星球最热呢？",type:"select",placeholder:"选择一个星球",options:{moon:"月球",mars:"火星",venus:"进行",mercury:"水星",sun:"太阳"},help:"星球表面的平均温度"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("带多选功能的下拉选择器")]),l("FormulateInput",{attrs:{label:"在访问一个炎热的星球时，您最喜欢的冰淇淋口味是什么？",type:"select",multiple:"",size:"3",options:{vanilla:"香草",chocolate:"巧克力",cherry:"樱桃",lemon:"柠檬"},help:"您可以通过按住 command (mac) 或 ctrl (windows) 来选择多个选项。"}})],1)])},W=[],X={},K=Object(m["a"])(X,J,W,!1,null,null,null),Z=K.exports,Q=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--group"},[l("h2",[e._v("element UI 系列表单域演示")]),l("h2",[e._v("el-input 输入框")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("普通")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",value:"你好，Element-UI",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("限制长度")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",maxlength:"5","show-word-limit":"",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("可清空")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",clearable:"",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("禁用")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",disabled:"",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("密码框")]),l("FormulateInput",{attrs:{label:"密码",type:"el-input","el-type":"password","show-password":"",help:"请输入密码"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多行文本框")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input","el-type":"textarea",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多行文本框 带行数")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input","el-type":"textarea",rows:"3",help:"个性签名"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("多行文本框 自定义高度")]),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input","el-type":"textarea",autosize:"",help:"个性签名"}})],1),l("h2",[e._v("el-input-number 计数器")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("普通")]),l("FormulateInput",{attrs:{label:"数量",max:5,type:"el-input-number"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("步数")]),l("FormulateInput",{attrs:{label:"数量",type:"el-input-number",step:2}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("禁用")]),l("FormulateInput",{attrs:{label:"数量",disabled:"",type:"el-input-number"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("严格步数")]),l("FormulateInput",{attrs:{label:"数量",type:"el-input-number",step:2,"step-strictly":""}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("精度")]),l("FormulateInput",{attrs:{label:"数量",type:"el-input-number",precision:2,step:.1,max:10}})],1),l("h2",[e._v("el-switch 开关")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("普通")]),l("FormulateInput",{attrs:{label:"你是否喜欢",type:"el-switch"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("禁用")]),l("FormulateInput",{attrs:{label:"你是否喜欢",type:"el-switch",disabled:""},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("文字描述")]),l("FormulateInput",{attrs:{label:"你是否喜欢",type:"el-switch","active-text":"喜欢","inactive-text":"讨厌"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("颜色")]),l("FormulateInput",{attrs:{label:"你是否喜欢",type:"el-switch","active-text":"喜欢","inactive-text":"讨厌","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),e._m(0),l("h2",[e._v("el-slider 滑块")]),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("默认")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider"},model:{value:e.sliderValue1,callback:function(t){e.sliderValue1=t},expression:"sliderValue1"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("自定义初始值")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider"},model:{value:e.sliderValue2,callback:function(t){e.sliderValue2=t},expression:"sliderValue2"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("隐藏 Tooltip")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider","show-tooltip":!1},model:{value:e.sliderValue2,callback:function(t){e.sliderValue2=t},expression:"sliderValue2"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("格式化 Tooltip")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider","format-tooltip":e.formatTooltip},model:{value:e.sliderValue2,callback:function(t){e.sliderValue2=t},expression:"sliderValue2"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("离散值")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider",step:10},model:{value:e.sliderValue3,callback:function(t){e.sliderValue3=t},expression:"sliderValue3"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("离散值 显示间断点")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider",step:10,"show-stops":""},model:{value:e.sliderValue3,callback:function(t){e.sliderValue3=t},expression:"sliderValue3"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("带输入框")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider","show-input":""},model:{value:e.sliderValue4,callback:function(t){e.sliderValue4=t},expression:"sliderValue4"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("带输入框 不显示控制按钮")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider","show-input":"","show-input-controls":!1},model:{value:e.sliderValue4,callback:function(t){e.sliderValue4=t},expression:"sliderValue4"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("选择范围")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider",range:"","show-stops":"",max:10},model:{value:e.sliderValue5,callback:function(t){e.sliderValue5=t},expression:"sliderValue5"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("竖向模式")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider",vertical:"",height:"200px"},model:{value:e.sliderValue6,callback:function(t){e.sliderValue6=t},expression:"sliderValue6"}})],1),l("div",{staticClass:"specimen preview--el-slider"},[l("h3",[e._v("展示标记")]),l("FormulateInput",{attrs:{label:"分数",type:"el-slider",range:"",marks:e.sliderMarks},model:{value:e.sliderValue7,callback:function(t){e.sliderValue7=t},expression:"sliderValue7"}})],1),l("h2",[e._v("el-rate 评分")]),l("div",{staticClass:"specimen"},[l("h3",[e._v("默认")]),l("FormulateInput",{attrs:{label:"分数",type:"el-rate"},model:{value:e.rateValue,callback:function(t){e.rateValue=t},expression:"rateValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("区分颜色")]),l("FormulateInput",{attrs:{label:"分数",type:"el-rate",colors:e.rateColors},model:{value:e.rateValue,callback:function(t){e.rateValue=t},expression:"rateValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("辅助文字")]),l("FormulateInput",{attrs:{label:"分数",type:"el-rate","show-text":""},model:{value:e.rateValue,callback:function(t){e.rateValue=t},expression:"rateValue"}})],1),l("div",{staticClass:"specimen"},[l("h3",[e._v("显示分数")]),l("FormulateInput",{attrs:{label:"分数",type:"el-rate","show-score":""},model:{value:e.rateValue,callback:function(t){e.rateValue=t},expression:"rateValue"}})],1),l("h2",[e._v("el-color-picker 颜色选择器")]),l("div",{staticClass:"specimen "},[l("h3",[e._v("有默认值")]),l("FormulateInput",{attrs:{label:"背景色",type:"el-color-picker"},model:{value:e.colorValue,callback:function(t){e.colorValue=t},expression:"colorValue"}})],1),l("div",{staticClass:"specimen "},[l("h3",[e._v("无默认值")]),l("FormulateInput",{attrs:{label:"背景色",type:"el-color-picker"}})],1),l("div",{staticClass:"specimen "},[l("h3",[e._v("选择透明度")]),l("FormulateInput",{attrs:{label:"背景色",type:"el-color-picker","show-alpha":""}})],1),l("div",{staticClass:"specimen "},[l("h3",[e._v("预定义颜色")]),l("FormulateInput",{attrs:{label:"背景色",type:"el-color-picker","show-alpha":"",predefine:e.predefineColors}})],1)])},Y=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimen"},[l("h3",[e._v("扩展类型")]),l("span",[e._v("由于 formulate 不支持布尔类型，现在选中的时候，返回 1，反之返回 0，所以不支持扩展类型，开发者可以在表单提交后的事件中再做处理")])])}],ee={data:function(){return{switchValue:1,sliderValue1:0,sliderValue2:33,sliderValue3:10,sliderValue4:10,sliderValue5:[4,8],sliderValue6:50,sliderValue7:[30,60],sliderMarks:{0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:this.$createElement("strong","50%")}},rateValue:0,rateColors:["#99A9BF","#F7BA2A","#FF9900"],colorValue:"#409EFF",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]}},methods:{formatTooltip:function(e){return e/100}}},te=ee,le=Object(m["a"])(te,Q,Y,!1,null,null,null),ae=le.exports,ne=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--group"},[l("h2",[e._v("表单")]),l("div",{},[l("FormulateForm",{model:{value:e.form1,callback:function(t){e.form1=t},expression:"form1"}},[l("FormulateInput",{attrs:{label:"用户名",type:"el-input",name:"username"}}),l("FormulateInput",{attrs:{label:"密码",type:"el-input","show-password":"",name:"password",validation:"required","error-behavior":"blur"}}),l("FormulateInput",{attrs:{label:"确认密码",type:"el-input","show-password":"",name:"password_confirm",validation:"required|confirm","error-behavior":"blur"}}),l("FormulateInput",{attrs:{label:"年龄",type:"el-input",validation:"bail|required|number|max:120|min:18","error-behavior":"blur"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input","el-type":"textarea",maxlength:"100","show-word-limit":"",autosize:""}}),l("FormulateInput",{attrs:{label:"性别",type:"radio",options:{male:"男",female:"女"}}}),l("FormulateInput",{attrs:{label:"擅长的语言",type:"checkbox",options:["javascript","css","vue",{value:"jquery",label:"jquery",disabled:!0}],validation:"required|max:2"}}),l("FormulateInput",{attrs:{label:"擅长的语言",type:"checkbox",requiredTip:!1,options:["javascript","css","vue",{value:"jquery",label:"jquery",disabled:!0}],validation:"required|max:2"}}),l("FormulateInput",{attrs:{label:"用户头像",type:"image",name:"avatar",help:"你长相怎样？"}}),l("FormulateInput",{attrs:{label:"最热的星球",type:"select",placeholder:"选择一个星球",options:{moon:"月球",mars:"火星",venus:"进行",mercury:"水星",sun:"太阳"},help:"星球表面的平均温度"}}),l("FormulateInput",{attrs:{label:"旅行计划",type:"group",repeatable:!0,"add-label":"添加旅行计划",name:"plan",validation:"city","validation-rules":{city:e.cityRule},"validation-messages":{city:e.cityMessage}}},[l("FormulateInput",{attrs:{label:"日期",type:"date",name:"date"}}),l("FormulateInput",{attrs:{label:"城市",name:"city",type:"select",options:{beijing:"北京",shanghai:"上海",shenzhen:"深圳",qingdao:"青岛"}}}),l("FormulateInput",{attrs:{label:"景点",type:"text",name:"content",validation:"required"}})],1),l("FormulateInput",{attrs:{type:"submit",label:"提交"}})],1)],1)])},se=[],re={data:function(){return{form1:{}}},methods:{cityRule:function(e){var t=e.value;if(Array.isArray(t)){if(1==t.length)return!0;if("qingdao"==t[1].city)return!0}return!1},cityMessage:function(){return"第二个城市请选择青岛"}}},oe=re,ie=Object(m["a"])(oe,ne,se,!1,null,null,null),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"specimens specimens--group"},[l("h2",[e._v("行内表单")]),l("div",{},[l("FormulateForm",{attrs:{"form-class":["el-formulate__form-inline"]}},[l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",value:"你好，Element-UI"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input",value:"你好，Element-UI"}}),l("FormulateInput",{attrs:{label:"密码",type:"el-input",validation:"bail|required|number|min:3,length","error-behavior":"live"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input"}}),l("FormulateInput",{attrs:{label:"个性签名",type:"el-input"}})],1)],1)])},pe=[],me={},de=Object(m["a"])(me,ue,pe,!1,null,null,null),ve=de.exports,be=(l("0fae"),{name:"App",components:{SpecimenButton:A,SpecimenBox:z,SpecimenText:v,SpecimenTextarea:y,SpecimenGroup:C,SpecimenFile:T,SpecimenSlider:D,SpecimenSelect:Z,SpecimenElement:ae,SpecimenForm:ce,SpecimenFormInline:ve},data:function(){return{testKey:!1,provingGroundValue:null,provingGroundSubmissionResolver:function(){}}},mounted:function(){var e=this;window.showTest=this.showTest.bind(this),window.getInputValue=this.inputValue.bind(this),window.getSubmittedValue=this.submittedValue.bind(this),window.submitForm=this.submitForm.bind(this),window.getVueInstance=function(){return e}},methods:{showTest:function(){},inputValue:function(){return this.provingGroundValue},submission:function(e){this.provingGroundSubmissionResolver(e)},submittedValue:function(){var e=this;return new Promise((function(t){e.provingGroundSubmissionResolver=t,e.submitForm()}))},submitForm:function(){this.$refs.testForm.formSubmitted()}}}),he=be,fe=(l("dbe9"),Object(m["a"])(he,r,o,!1,null,null,null)),xe=fe.exports,ye=l("ade3"),_e="zh",Fe={accepted:function(e){var t=e.vm;return"请同意".concat(t.context.label)},after:function(e){var t=e.vm,l=e.args;return Array.isArray(l)&&l.length?"".concat(t.context.label," 必须在 ").concat(l[0]," 之后"):"".concat(t.context.label," 必须是以后的日期")},alpha:function(e){var t=e.vm;return"".concat(t.context.label," 只能包含字母")},alphanumeric:function(e){var t=e.vm;return"".concat(t.context.label," 只能包含字母或数字")},before:function(e){var t=e.vm,l=e.args;return Array.isArray(l)&&l.length?"".concat(t.context.label," 必须在 ").concat(l[0]," 之前"):"".concat(t.context.label," 必须是以前的日期")},between:function(e){var t=e.vm,l=e.value,a=e.args,n=!(!Array.isArray(a)||!a[2])&&a[2];return!isNaN(l)&&"length"!==n||"value"===n?"".concat(t.context.label," 必须在 ").concat(a[0]," 和 ").concat(a[1]," 之间"):"".concat(t.context.label," 必须在 ").concat(a[0]," 和 ").concat(a[1]," 字符长度之间")},confirm:function(e){var t=e.vm;return"".concat(t.context.label," 不匹配")},date:function(e){var t=e.vm,l=e.args;return Array.isArray(l)&&l.length?"".concat(t.context.label," 日期无效，请使用 ").concat(l[0]," 格式"):"".concat(t.context.label," 日期无效")},default:function(){return"此输入无效"},email:function(e){var t=e.value;return t?"“".concat(t,"” 不是一个有效的电子邮箱地址"):"请输入有效的电子邮箱地址"},endsWith:function(e){var t=e.value;return t?"“".concat(t,"” 包含无效的结尾值"):"无效的结尾值"},in:function(e){var t=e.vm,l=e.value;return"string"===typeof l&&l?"“".concat(l,"” 是 ").concat(t.context.label," 不允许的值"):"".concat(t.context.label," 包含不允许的值")},matches:function(e){var t=e.vm;return"".concat(t.context.label," 包含不允许的值")},max:function(e){var t=e.vm,l=e.value,a=e.args;if(Array.isArray(l))return"您最多可有 ".concat(a[0]," 个 ").concat(t.context.label,"。");var n=!(!Array.isArray(a)||!a[1])&&a[1];return!isNaN(l)&&"length"!==n||"value"===n?"".concat(t.context.label," 必须小于或等于 ").concat(a[0],"."):"".concat(t.context.label," 必须小于或等于 ").concat(a[0]," 字符长度")},mime:function(e){var t=e.vm,l=e.args;return"".concat(t.context.label," 格式必须是: ").concat(l[0]||"无允许文件格式")},min:function(e){var t=e.vm,l=e.value,a=e.args;if(Array.isArray(l))return"您需要最少 ".concat(a[0]," 个 ").concat(t.context.label,".");var n=!(!Array.isArray(a)||!a[1])&&a[1];return!isNaN(l)&&"length"!==n||"value"===n?"".concat(t.context.label," 最少是 ").concat(a[0]):"".concat(t.context.label," 最少 ").concat(a[0]," 字符长度")},not:function(e){var t=e.vm,l=e.value;return"“".concat(l,"” 是 ").concat(t.context.label," 不被允许的值。")},number:function(e){var t=e.vm;return"".concat(t.context.label," 必须是数字")},required:function(e){var t=e.vm;return"".concat(t.context.label," 是必填项")},startsWith:function(e){var t=e.value;return t?"“".concat(t,"” 包含无效的起始值"):"无效的起始值"},url:function(){return"请输入正确的网址"}},we={locales:Object(ye["a"])({},_e,Fe),locale:_e},Ie=function(e){e.extend(we)},Ce={library:{checkbox:{slotComponents:{help:"div",suffix:"FormulateHelp"}}}},ge=function(e){e.extend(Ce)},Ve=(l("00b4"),function(e){var t=e.value;return/^1[0-9]{10}$/.test(t)}),ke=function(e){var t,l=e.value,a=/^\d{17}(\d|X|x)$/;if(!1===a.test(l))return!1;var n,s=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),r=new Array("1","0","x","9","8","7","6","5","4","3","2"),o=0;for(n=0;n<17;n++)o+=l.substr(n,1)*s[n];return t=r[o%11],t==l.substr(17,1).toLocaleLowerCase()},je={rules:{mobile:Ve,idcard:ke},locales:{zh:{mobile:function(e){var t=e.value;return"".concat(t," 不是一个正确的手机号")},idcard:function(){return"身份证号码格式错误"}}}},Se=function(e){e.extend(je)},Oe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-cascader",e._b({attrs:{label:e.context.slotProps.component.elLabel,value:e.context.slotProps.component.elValue,options:e.context.options},on:{change:function(t){return e.context.rootEmit("change",t)},"expand-change":function(t){return e.context.rootEmit("expand-change",t)},"visible-change":function(t){return e.context.rootEmit("visible-change",t)},blur:e.context.blurHandler,focus:function(t){return e.context.rootEmit("focus",t)}},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-cascader",e.context.slotProps.component,!1))],1)},Te=[],qe=l("5c96"),Ee={name:"fe-cascader",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["Cascader"].name,qe["Cascader"])},$e=Ee,Pe=Object(m["a"])($e,Oe,Te,!1,null,null,null),Ae=Pe.exports,Re=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-color-picker",e._b({on:{"active-change":function(t){return e.context.rootEmit("active-change",t)}},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-color-picker",e.context.slotProps.component,!1))],1)},Me=[],Ne={name:"fe-rate",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["ColorPicker"].name,qe["ColorPicker"])},Le=Ne,ze=Object(m["a"])(Le,Re,Me,!1,null,null,null),Be=ze.exports,Ue=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-input",e._g(e._b({attrs:{type:e.type},on:{blur:e.context.blurHandler},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-input",e.context.slotProps.component,!1),e.$listeners))],1)},He=[],Ge={name:"fe-input",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["Input"].name,qe["Input"]),computed:{type:function(){return this.context.slotProps.component.elType||"text"}}},De=Ge,Je=Object(m["a"])(De,Ue,He,!1,null,null,null),We=Je.exports,Xe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-input-number",e._b({on:{blur:e.context.blurHandler},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-input-number",e.context.slotProps.component,!1))],1)},Ke=[],Ze={name:"fe-input",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["InputNumber"].name,qe["InputNumber"])},Qe=Ze,Ye=Object(m["a"])(Qe,Xe,Ke,!1,null,null,null),et=Ye.exports,tt=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-rate",e._b({model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-rate",e.context.slotProps.component,!1))],1)},lt=[],at={name:"fe-rate",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["Rate"].name,qe["Rate"])},nt=at,st=Object(m["a"])(nt,tt,lt,!1,null,null,null),rt=st.exports,ot=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-select",e._g(e._b({attrs:{options:e.context.options},on:{blur:e.context.blurHandler},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-select",e.context.slotProps.component,!1),e.$listeners),e._l(e.context.options,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)},it=[],ct={name:"fe-select",props:{context:{type:Object,required:!0}},components:(a={},Object(ye["a"])(a,qe["Select"].name,qe["Select"]),Object(ye["a"])(a,qe["Option"].name,qe["Option"]),a)},ut=ct,pt=Object(m["a"])(ut,ot,it,!1,null,null,null),mt=pt.exports,dt=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-switch",e._b({attrs:{"active-value":1,"inactive-value":0},model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-switch",e.context.slotProps.component,!1))],1)},vt=[],bt={name:"fe-switch",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["Switch"].name,qe["Switch"])},ht=bt,ft=Object(m["a"])(ht,dt,vt,!1,null,null,null),xt=ft.exports,yt=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:e.context.classes.element,attrs:{"data-type":e.context.type}},[l("el-slider",e._b({model:{value:e.context.model,callback:function(t){e.$set(e.context,"model",t)},expression:"context.model"}},"el-slider",e.context.slotProps.component,!1))],1)},_t=[],Ft={name:"fe-slider",props:{context:{type:Object,required:!0}},components:Object(ye["a"])({},qe["Slider"].name,qe["Slider"])},wt=Ft,It=Object(m["a"])(wt,yt,_t,!1,null,null,null),Ct=It.exports,gt=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{class:e.classes,attrs:{id:e.context.id+"_label",for:e.context.id},domProps:{textContent:e._s(e.context.label)}})},Vt=[],kt=(l("7db0"),{props:{context:{type:Object,required:!0},requiredTip:{type:Boolean,default:!0}},computed:{hasRequired:function(){if(0==this.requiredTip)return!1;if(0==this.context.rules.length)return!1;var e=this.context.rules.find((function(e){return"required"==e.ruleName}));return!!e},classes:function(){var e=this.context.classes.label;return this.hasRequired&&e.push("formulate-input-label--required"),e}}}),jt=kt,St=Object(m["a"])(jt,gt,Vt,!1,null,null,null),Ot=St.exports,Tt={components:{FeCascader:Ae,FeColorPicker:Be,FeInput:We,FeInputNumber:et,FeLabel:Ot,FeRate:rt,FeSelect:mt,FeSwitch:xt,FeSlider:Ct},library:{"el-cascader":{classification:"text",component:"FeCascader",slotProps:{component:["beforeFilter","clearable","collapseTags","debounce","disabled","filterMethod","elLabel","options","placeholder","popperClass","props","separator","showAllLevels","size","elValue"]}},"el-color-picker":{classification:"text",component:"FeColorPicker",slotProps:{component:["colorFormat","predefine","showAlpha"]}},"el-input":{classification:"text",component:"FeInput",slotProps:{component:["elType","autosize","clearable","disabled","maxlength","minlength","rows","showPassword","showWordLimit"]}},"el-input-number":{classification:"text",component:"FeInputNumber",slotProps:{component:["disabled","min","max","step","stepStrictly","precision"]}},"el-rate":{classification:"rate",component:"FeRate",slotProps:{component:["allowHalf","colors","disabledVoidColor","disabledVoidIconClass","highThreshold","iconClasses","max","lowThreshold","showScore","showText","texts","testColor","voidColor","voidIconClass"]}},"el-select":{classification:"select",component:"FeSelect",slotProps:{component:["allowCreate","clearable","collapseTags","filterable","disabled","multiple"]}},"el-switch":{classification:"switch",component:"FeSwitch",slotProps:{component:["disabled","activeText","inactiveText","activeColor","inactiveColor"]}},"el-slider":{classification:"slider",component:"FeSlider",slotProps:{component:["formatTooltip","min","marks","max","scoreTemplate","showTooltip","step","showStops","showInput","showInputControls","range","vertical","height"]}}},slotComponents:{label:"FeLabel"},slotProps:{label:["requiredTip"]}},qt=function(e){e.extend(Tt)},Et={classes:{outer:"el-formulate-input"}},$t=function(e){e.extend(Et)};n["default"].config.productionTip=!1,n["default"].use(s["a"],{plugins:[$t,ge,Se,qt,Ie]}),new n["default"]({render:function(e){return e(xe)}}).$mount("#app")},dbe9:function(e,t,l){"use strict";l("0ee0")}});