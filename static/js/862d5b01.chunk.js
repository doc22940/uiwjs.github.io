(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{106:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var a=n(8),r=n(19),c=n(14),l=n(22),o=n(15),i=n(16),s=n(17),u=n(4),p=n(5),f=n(3),d=n.n(f),b=n(2),v=n.n(b),h=n(18),m=n.n(h),y=n(110),g=(n(107),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(u.a)(Object(u.a)(n)),"renderSvgPaths",function(e){var t=y[e];return null==t?null:t.map(function(e,t){return d.a.createElement("path",{key:t,d:e,fillRule:"evenodd"})})}),n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,c=e.color,l=e.type,o=e.spin,i=e.verticalAlign,s=e.tagName,u=void 0===s?"span":s,f=Object(r.a)(e,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),b=null;if(null==l||"boolean"==typeof l)return null;b="string"!=typeof l?d.a.cloneElement(l,{fill:c}):d.a.createElement("svg",{fill:c,viewBox:"0 0 20 20"},this.renderSvgPaths(l)),f.style=Object(a.a)({fill:"currentColor"},f.style);var v=Object(a.a)({},f,{className:m()(t,n,"".concat(t,"-").concat(i),Object(p.a)({},"".concat(t,"-spin"),o))});return d.a.createElement(u,v,b)}}]),t}(d.a.PureComponent));g.propTypes={prefixCls:v.a.string,type:v.a.oneOfType([v.a.element,v.a.string]),style:v.a.object,verticalAlign:v.a.oneOf(["middle","baseline"]),spin:v.a.bool},g.defaultProps={prefixCls:"w-icon",style:{},verticalAlign:"middle",spin:!1}},107:function(e,t,n){},146:function(e,t,n){},189:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(25),r=n(5),c=n(19),l=n(14),o=n(22),i=n(15),s=n(16),u=n(17),p=n(3),f=n.n(p),d=n(2),b=n.n(d),v=n(18),h=n.n(v),m=(n(146),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,l=e.title,o=e.children,i=(e.capsule,e.color),s=e.titleColor,u=e.disabled,p=Object(c.a)(e,["prefixCls","className","title","children","capsule","color","titleColor","disabled"]),d=h()("".concat(t),n,Object(r.a)({"w-disabled":u},"".concat(t,"-capsule"),l&&o)),b={borderColor:i};l&&i?(b.backgroundColor=i,b.color="#fff"):b.color=i;var v={};return s&&(v.backgroundColor=s||i,v.borderColor=s||i),f.a.createElement("span",Object(a.a)({className:d},p),l&&f.a.createElement("span",{style:v,className:"".concat(t,"-title")},l),o&&f.a.createElement("span",{style:b,className:"".concat(t,"-content")},o))}}]),t}(f.a.Component));m.propTypes={prefixCls:b.a.string,color:b.a.string,disabled:b.a.bool,title:b.a.oneOfType([b.a.node,b.a.string])},m.defaultProps={prefixCls:"w-tag",disabled:!1,title:""}},643:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return x});var a=n(61),r=n.n(a),c=n(62),l=n.n(c),o=n(9),i=n.n(o),s=n(12),u=n.n(s),p=n(10),f=n.n(p),d=n(11),b=n.n(d),v=n(13),h=n.n(v),m=n(32),y=n.n(m),g=n(27),O=n.n(g),j=n(189),C=n(621),w=n(106),x=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=f()(this,(e=b()(t)).call.apply(e,[this].concat(r))),O()(y()(y()(n)),"path","packages/core/src/tag/README.md"),O()(y()(y()(n)),"dependencies",{Tag:j.a,Divider:C.a,Icon:w.a}),n}return h()(t,e),u()(t,[{key:"renderPage",value:function(){var e=l()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(365).then(n.t.bind(null,608,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n(108).a)}}]);