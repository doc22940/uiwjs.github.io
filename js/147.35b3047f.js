(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ 664:
/***/ (function(module, exports) {

module.exports = "Avatar 头像\n===\n\n用来代表用户或事物，支持图片、图标或字符展示。\n\n## 基本用法\n\n头像有四种尺寸，两种形状可选。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <div style={{paddingBottom:20}}>\n          <Avatar size=\"large\" icon={<Icon type=\"user\"/>} />\n          <Avatar icon=\"user\" />\n          <Avatar size=\"small\" icon=\"user\" />\n          <Avatar size=\"mini\" icon={<Icon type=\"user\"/>} />\n        </div>\n        <div>\n          <Avatar shape=\"square\" size=\"large\" icon=\"user\" />\n          <Avatar shape=\"square\" icon=\"user\" />\n          <Avatar shape=\"square\" size=\"small\" icon=\"user\" />\n          <Avatar shape=\"square\" size=\"mini\" icon=\"user\" />\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 其它类型\n\n支持三种类型：Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Avatar icon={<Icon type=\"user\"/>} />\n        <Avatar>U</Avatar>\n        <Avatar src=\"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\" />\n        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>\n        <Avatar style={{ backgroundColor: '#87d068' }} icon=\"user\" />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 图片支持\n\n在组件上没有暴露`onError`事件，可以直接使用`<img/>`标签。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Avatar src=\"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\" />\n        <Avatar>\n          <img src=\"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\" onError={()=>{\n            console.log(\"图片加载错误！\")\n          }}/>\n        </Avatar>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 带徽标的头像\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <span style={{ marginRight: 24 }}>\n          <Badge count={1}><Avatar shape=\"square\" icon=\"user\" /></Badge>\n        </span>\n        <span>\n          <Badge dot><Avatar shape=\"square\" icon=\"user\" /></Badge>\n        </span>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n## Avatar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| icon | 设置头像的图标类型，参考 Icon 组件 | String、ReactNode | - |\n| shape | 指定头像的形状`square`正方形或者`circle`圆\t | Enum{'`circle`', '`square`' } | - |\n| size | 设置头像的大小 | Enum{ '`large`', '`small`','`mini`', '`default`' } | `default` |\n| src | 图片类头像的资源地址 | String | - |\n| alt | 规定图像的替代文本 | String | - |"

/***/ })

}]);