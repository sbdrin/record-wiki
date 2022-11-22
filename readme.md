## 参考文档

https://vuepress.vuejs.org/zh/

## 项目结构

.
├── docs(主体目录)
│ ├── .vuepress(用于存放全局的配置、组件、静态资源等)
│ │ ├── components (该目录中的 Vue 组件将会被自动注册为全局组件)
│ │ ├── public (静态资源目录)
│ │ ├── styles (样式资源)
│ │ ├── config.js (配置项)
│ │ └── enhanceApp.js ()
│ ├── README.md(首页)
│ ├── xxx1(组件 1)
│ │ └── README.md(组件 1 下默认页面)
│ ├── xxx2(组件 2)
│ │ └── README.md(组件 2 下默认页面)
│ └── config.md
│
└── package.json

## 注意

VuePress 需要 Node.js (opens new window)>= 11 && <16 建议版本 14
请保持 sass-loader 版本为 7.3.1
