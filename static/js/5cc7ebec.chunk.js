(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){"use strict";var a=n(6),r=n(1),c=n.n(r),i=n(18),o=n.n(i),s=n(4),l=n.n(s),u=n(22),p=n(5),f=n(9),d=n(23),m=n(10),h=n(11),y=n(12),v=n(133),b={},O={},w=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={notifys:{}},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"create",value:function(e){var t=this,n=e.placement,a=e.key;b[n]||(b[n]={}),e.isOpen=!1,b[n][a]=e,e.duration&&(O[a]=setTimeout(function(){t.closed(a,n)},e.duration)),this.setState({notifys:b,placement:n},function(){b[n][a].isOpen=!0,t.setState({notifys:b})})}},{key:"closed",value:function(e,t){if(e&&t&&b[t][e]){b[t][e].isOpen=!1;var n=b[t][e];this.setState({notifys:b},function(){clearTimeout(O[e]),delete O[e],delete b[t][e],n&&n.willUnmount&&n.willUnmount(n,b)})}}},{key:"render",value:function(){var e=this,t=this.props.prefixCls,n=this.state.placement;return c.a.createElement(c.a.Fragment,null,n&&Object.keys(this.state.notifys[n]).map(function(a){var r=e.state.notifys[n][a],i=r.description,o=r.isOpen,s=Object(p.a)(r,["description","isOpen"]);return"open"===s.type&&delete s.type,c.a.createElement(v.a,Object(u.a)({className:l()(t),key:a,useButton:!1,width:320},s,{usePortal:!1,hasBackdrop:!1,isOpen:o,content:i}))}))}}]),t}(c.a.Component);w.defaultProps={prefixCls:"w-notify",placement:"topRight"};n(124);n.d(t,"a",function(){return g});var k={},j={};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"open";if(e.placement||(e.placement="topRight"),e.type=t,!e.icon&&null!==e.icon)switch(e.type){case"success":e.icon="circle-check";break;case"warning":e.icon="warning";break;case"info":e.icon="information";break;case"error":e.icon="circle-close"}switch(e.type){case"info":e.type="primary";break;case"error":e.type="danger"}if(e.placement&&!k[e.placement]){var n=document.createElement("div");document.body.appendChild(n),n.className=l()("w-notify-warpper",e.placement),j[e.placement]=n,k[e.placement]=o.a.render(c.a.createElement(w,null),n)}null!==e.duration&&(e.duration=1e3*(e.duration||4.5)),k[e.placement]&&k[e.placement].create(Object(a.a)({},e,{duration:e.duration,key:parseInt(String(1e15*Math.random()),10).toString(36),willUnmount:function(t,n){t&&(t.onClose&&t.onClose(),0===Object.keys(n[e.placement]).length&&k[e.placement]&&(delete k[e.placement],j[e.placement]&&document.body.removeChild(j[e.placement])))}}))}["open","success","warning","info","error"].forEach(function(e){g[e]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(t,e)}})},153:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(22),r=n(26),c=n(5),i=n(9),o=n(23),s=n(10),l=n(11),u=n(12),p=n(1),f=n.n(p),d=n(4),m=n.n(d),h=(n(134),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.vertical,i=e.children,o=e.className,s=Object(c.a)(e,["prefixCls","vertical","children","className"]),l=m()(t,o,Object(r.a)({},"".concat(t,"-vertical"),n));return f.a.createElement("div",Object(a.a)({className:l},s),i)}}]),t}(f.a.Component));h.defaultProps={prefixCls:"w-btn-group",vertical:!1}},716:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n(43),r=n.n(a),c=n(111),i=n.n(c),o=n(13),s=n.n(o),l=n(14),u=n.n(l),p=n(15),f=n.n(p),d=n(16),m=n.n(d),h=n(17),y=n.n(h),v=n(138),b=n(153),O=n(119),w=function(e){function t(){var e,n;s()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=f()(this,(e=m()(t)).call.apply(e,[this].concat(r)))).path="packages/core/src/notify/README.md",n.dependencies={Notify:v.a,ButtonGroup:b.a,Button:O.a},n}var a;return y()(t,e),u()(t,[{key:"renderPage",value:(a=i()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(402).then(n.t.bind(null,670,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)})}]),t}(n(112).a)}}]);