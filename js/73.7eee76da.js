(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ 589:
/***/ (function(module, exports) {

module.exports = "Loading 加载中\n===\n\n用于页面和区块的加载中状态。\n\n### 各种大小\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n        <Loading size=\"small\" />\n        <Loading />\n        <Loading size=\"large\" />\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 卡片加载中\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    loading:true\n  }\n}\nrender() {\n  return (\n    <div>\n        <Loading loading={this.state.loading}>\n          <Alert \n            message=\"Alert message title\"\n            description=\"Further details about the context of this alert.\"\n            type=\"default\"\n            onClose={()=>{\n                console.log(\"onClose::\")  \n            }}\n            />\n        </Loading>\n        <br/>\n        <Button size=\"small\" type=\"default\" onClick={()=>{\n\n          let isload = !this.state.loading;\n          this.setState({\n            loading:isload\n          })\n\n        }}>点击切换加载状态</Button>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 自定义描述\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    loading:true\n  }\n}\nrender() {\n  return (\n    <div>\n        <Loading tip=\"正在加载...\">\n          <Alert \n            message=\"Error Text\"\n            description=\"Error Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error Description\"\n            type=\"error\"\n          />\n        </Loading>\n        <Loading tip=\"loading...\">\n          <Alert \n            message=\"Error Text\"\n            type=\"default\"\n            description=\"Error Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error DescriptionError Description Error Description Error Description Error Description Error Description Error Description\"\n          />\n        </Loading>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### Loading Attributes\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| loading | 是否旋转 | boolean | true |\n| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |"

/***/ })

}]);