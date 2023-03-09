(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{363:function(t,e,s){"use strict";s.r(e);var v=s(7),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("使用vuepress-theme-vdoing主题辅助开发")])]),t._v(" "),e("h2",{attrs:{id:"_1-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1.安装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("下载项目\n# clone the project\ngit clone https://github.com/xugaoyi/vuepress-theme-vdoing-doc.git\n\n# enter the project directory\ncd vuepress-theme-vdoing-doc\n\n# install dependency 注意：如安装不成功请关闭淘宝源。\nnpm install # or yarn install\n\n# develop\nnpm run dev # or yarn dev\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("使用Vdoing主题\nnpm install vuepress-theme-vdoing -D\n\n在.vuepress/config.js中配置使用主题\n// config.js\nmodule.exports = {\n  theme: 'vdoing'\n}\n")])])]),e("h2",{attrs:{id:"_2-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[t._v("#")]),t._v(" 2.配置")]),t._v(" "),e("h3",{attrs:{id:"_2-1侧边栏和目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1侧边栏和目录"}},[t._v("#")]),t._v(" 2.1侧边栏和目录")]),t._v(" "),e("p",[t._v("按照目录约定自动生成一个结构化的"),e("strong",[t._v("侧边栏、目录页")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("命名约定")])]),t._v(" "),e("ul",[e("li",[t._v("无论是"),e("strong",[t._v("文件")]),t._v("还是"),e("strong",[t._v("文件夹")]),t._v("，请为其名称添加上正确的"),e("strong",[t._v("正整数序号")]),t._v("和"),e("code",[t._v(".")]),t._v("，从"),e("code",[t._v("00")]),t._v("或"),e("code",[t._v("01")]),t._v("开始累计，如"),e("code",[t._v("01.文件夹")]),t._v("、"),e("code",[t._v("02.文件.md")]),t._v("，我们将会按照序号的顺序来决定其在侧边栏当中的顺序。")]),t._v(" "),e("li",[t._v("同一级别目录别内即使只有一个文件或文件夹也要为其加上序号。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("序号只是用于决定先后顺序，并不一定需要连着，如"),e("code",[t._v("01、02、03...")]),t._v("，实际工作中可能会在两个文章中间插入一篇新的文章，因此为了方便可以采用间隔序号"),e("code",[t._v("10、20、30...")]),t._v("，后面如果需要在"),e("code",[t._v("10")]),t._v("和"),e("code",[t._v("20")]),t._v("中间插入一篇新文章，可以给定序号"),e("code",[t._v("15")]),t._v("。")])]),t._v(" "),e("p",[e("strong",[t._v("级别")])]),t._v(" "),e("p",[t._v("源目录（一般是"),e("code",[t._v("docs")]),t._v("）底下的级别现在我们称之为"),e("code",[t._v("一级目录")]),t._v("，"),e("code",[t._v("一级目录")]),t._v("的下一级为"),e("code",[t._v("二级目录")]),t._v("，以此类推，最多只能到"),e("code",[t._v("四级目录")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("侧边栏")])]),t._v(" "),e("p",[t._v("在源目录（一般是"),e("code",[t._v("docs")]),t._v("）文件夹中，除了"),e("code",[t._v(".vuepress")]),t._v("、"),e("code",[t._v("@pages")]),t._v("、"),e("code",[t._v("_posts")]),t._v("、"),e("code",[t._v("index.md 或 README.md")]),t._v("之外的"),e("strong",[t._v("文件夹")]),t._v("将会为其生成对应的侧边栏。生成的顺序取自序号，标题取自文件（夹）名称。")]),t._v(" "),e("h3",{attrs:{id:"_2-2自动生成front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2自动生成front-matter"}},[t._v("#")]),t._v(" 2.2自动生成front matter")]),t._v(" "),e("p",[t._v("当你没有给"),e("code",[t._v(".md")]),t._v("文件的"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("front matter (opens new window)"),e("OutboundLink")],1),t._v("指定标题("),e("code",[t._v("title")]),t._v(")、时间("),e("code",[t._v("date")]),t._v(")、永久链接("),e("code",[t._v("permalink")]),t._v(")、分类("),e("code",[t._v("categories")]),t._v(")、标签("),e("code",[t._v("tags")]),t._v(")、主题配置中"),e("a",{attrs:{href:"http://localhost:8080/pages/a20ce8/#extendfrontmatte",target:"_blank",rel:"noopener noreferrer"}},[t._v("extendFrontmatter"),e("OutboundLink")],1),t._v("配置的字段时，在运行开发服务"),e("code",[t._v("npm run dev")]),t._v("或打包"),e("code",[t._v("npm run build")]),t._v("时将自动为你生成这些数据，你也可以自己手动设置这些数据，当你手动设置之后，相应的数据就不会再自动生成。")]),t._v(" "),e("p",[e("strong",[t._v("格式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("title\n\t类型: string\n\t默认：.md文件的名称\n\t当前页面的标题\ndate\n\t类型: string\n\t格式：YYYY-MM-DD HH:MM:SS\n\t默认：.md文件在系统中创建的时间\n\t当前页面的创建时间，如需手动添加或修改该字段时请按照格式添加或修改\npermalink\n    类型: string\n    默认：/pages/+ 6位字母加数字的随机码\n    当前页面的永久链接\ncategories\n    类型: array\n    默认：\n    .md所在的文件夹名称。\ntags\n    类型: array\n    默认：空数组\n    如果在 config.js配置 设置了tag: false 将不会自动生成该字段\n    当前页面的标签，默认值是空数组，自动生成该字段只是为了方便后面添加标签值\t\n")])])]),e("h3",{attrs:{id:"_2-3markdown-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3markdown-容器"}},[t._v("#")]),t._v(" 2.3Markdown 容器")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("参考文档 "),e("a",{attrs:{href:"https://doc.xugaoyi.com/pages/d0d7eb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-vdoing"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("这是一条提示")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("这是一条注意")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("这是一条警告")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),e("p",[t._v("这是笔记容器，在 "),e("Badge",{attrs:{text:"v1.5.0 +"}}),t._v(" 版本才支持哦~")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("我的提示")]),t._v(" "),e("p",[t._v("自定义标题的提示框")])]),t._v(" "),e("div",{staticClass:"center-container"},[e("p",[t._v("​          我是居中的内容")]),t._v(" "),e("p",[t._v("（可用于标题、图片等的居中）")])])])}),[],!1,null,null,null);e.default=a.exports}}]);