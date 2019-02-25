(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{332:function(n,t){n.exports="快速上手\n===\n\n[![](https://api.travis-ci.org/uiwjs/uiw.svg?branch=master)](https://travis-ci.org/uiwjs/uiw/builds) [![](https://img.shields.io/github/issues/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/issues) [![](https://img.shields.io/github/forks/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/network) [![](https://img.shields.io/github/stars/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/stargazers) [![](https://img.shields.io/github/release/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiwjs/uiw) [![Packagist](https://img.shields.io/npm/v/uiw.svg)](https://www.npmjs.com/package/uiw) [![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)\n\n## 安装\n\n### 使用 npm 或 yarn 安装#\n\n```bash\n$ npm i uiw # 安装 v2.x.x 最新版本\n```\n\n```bash\n$ yarn add antd\n```\n\n### 浏览器引入\n\n在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 uiw。\n\n我们在 [`npm`](https://www.npmjs.com/package/uiw) 发布包内的 `uiw/dist` 目录下提供了 `uiw.js` `uiw.css` 以及 `uiw.min.js` `uiw.min.css`。你也可以通过 [UNPKG](https://unpkg.com/uiw/dist/) 进行下载。\n\n> ⚠️ 强烈不推荐使用已构建文件，这样无法按需加载。  \n> ⚠️ 浏览器引入只在 uiw v2.x 以上的版本支持。\n\n### 安装 [**v1.x**](https://unpkg.com/uiw/dist/index.html#/cn/quick-start) 旧版本\n\n> ⚠️ `v1.x` 不可以升级到 `v2.x`，`v2`是对 v1 的重构和简化  \n\n安装 [**`v1.x`**](https://unpkg.com/uiw/dist/index.html#/cn/quick-start) 版本\n\n```bash\nnpm install uiw --save\n\n## 通过 GitHub 仓库安装\nnpm i -S uiwjs/uiw\n# 指定版本\nnpm i -S uiwjs/uiw#v1.16.14\n# 或者\nyarn add uiwjs/uiw\n```\n\n>  **通过 GitHub 仓库安装**的 `win` 用户请在 `Git Bash` 下执行，因为需要用到 `git`。\n\n## 对新版本 v2.x 的更新内容\n\n1. 优化大部分组件，让组件变得更小更简单。\n2. 删除大部分组件冗余功能，直接使用样式就可以展现组件效果。\n2. 删除冗余组件，例如组件 `Capsule 胶囊` 与 `Tag 标签` 组件合并。\n3. 抽离组件，需要单独安装，如 `HeatMap 日历热图`\n4. 支持服务端渲染，可以通过 [kkt-ssr](https://github.com/jaywcjlove/kkt-ssr) 工具建立实例。\n\n### 使用\n\n使用过程中不需要引入 `CSS`，但是需要 [`LESS`](http://lesscss.org/) 编译环境，如果对环境使用有障碍，可以通过 [`kkt`](#/guide/kkt) 工具初始化一个工程。\n\n```js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Button } from 'uiw';\n\nReactDOM.render(\n  <Button type=\"primary\">Hello</Button>, \n  document.getElementById('app')\n);\n```\n\n### 组件冲突\n\n重新取一个名字\n\n```js\nimport { Button as ButtonView } from 'uiw';\n```\n\n### VSCode 中文档预览\n\n组件文档可以在 [`VSCode`](https://marketplace.visualstudio.com/items?itemName=uiw.uiw) 中预览，打开下面链接进行安装 [`VSCode`](https://marketplace.visualstudio.com/items?itemName=uiw.uiw) 插件。\n\n[![Open in VSCode](https://jaywcjlove.github.io/sb/open/open-in-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uiw.uiw)\n\n### 开发\n\n使用 [`Gitpod`](https://gitpod.io)，`GitHub` 的免费在线开发环境，点击打开下面链接，自动初始化项目，将开发环境跑起来。\n\n[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/uiw)\n\n要开发，运行自重新构建，获取代码：\n\n```bash\n$ git clone https://github.com/uiwjs/uiw.git\n$ cd uiw\n$ npm install # or  yarn install\n```\n\n要开发，运行自重新构建，这里将要跑两个任务：\n\n```bash\n# Listening compiled component code.\n$ cd ./packages/core\n$ npm run watch\n```\n\n```bash\n# Run the app\n# Restart the app automatically every time code changes. \n# Useful during development.\n$ cd ./\n$ npm start\n```\n\n打开浏览器并访问：http://localhost:19870\n\n## 文件目录说明\n\n```bash\n├── LICENSE\n├── README.md\n├── package.json\n├── packages        # 组件源码\n│   └── core\n├── public          # Document the static file.\n└── src             # D文档网站源码\n```\n\n## License\n\nLicensed under the MIT License.\n"}}]);