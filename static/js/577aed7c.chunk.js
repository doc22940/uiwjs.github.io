(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{603:function(n,i){n.exports="Split 面板分割\n===\n\n可将一块内容，分割为可以拖拽调整宽度或高度的区域。\n\n```jsx\nimport { Split } from 'uiw';\n```\n\n### 基础用法\n\n通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。通过设置子节点样式 `flexBasis` 样式即可设置默认分割内容的占比宽度。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ minWidth: 30, flexBasis: '20%' }}>\n      Left Pane\n    </div>\n    <div style={{ minWidth: 30 }}>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 多栏分割\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ minWidth: 20, maxWidth: 30 }}>\n      Left Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 垂直分割\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split mode=\"vertical\" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div>\n      Top Pane\n    </div>\n    <div>\n      Bottom Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 嵌套使用\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <Split mode=\"vertical\">\n      <div>\n        Top Pane\n      </div>\n      <Split>\n        <div>\n          Left Pane\n        </div>\n        <div>\n          Right Pane\n        </div>\n      </Split>\n    </Split>\n    <div>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 拖拽工具不显示\n\n下面实例通过设置 `visiable` 的值来设置拖拽工具是否可见\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <div>\n        Right Pane\n      </div>\n    </Split>\n    <Split visiable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 禁用拖拽\n\n通过设置 `disable` 的值，禁用拖拽工具拖拽。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Split disable style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <Split disable mode=\"vertical\">\n        <div>\n          Top Pane\n        </div>\n        <div>\n          Bottom Pane\n        </div>\n      </Split>\n      <div>\n        Right Pane\n      </div>\n    </Split>\n    <Split disable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| visiable | 设置拖拽的工具，是否可见 | Boolean/Array | `true` |\n| disable | 设置拖拽的工具，禁用 | Boolean/Array | - |\n| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |\n| onDragging | 拖拽宽度/高度变化回调函数，宽度或者高度根据 mode 参数来确定 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |\n| onDragEnd | 拖拽结束的回调函数 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |\n"}}]);