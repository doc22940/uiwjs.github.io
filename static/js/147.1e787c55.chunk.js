(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[147],{832:function(n,e,t){!function(n){"use strict";n.defineMode("ntriples",(function(){var n=0,e=1,t=2,i=3,r=4,a=5,u=6,s=7,o=8,l=9,p=10,c=11,f=12;function h(h,v){var b,d=h.location;b=d==n&&"<"==v?e:d==n&&"_"==v?t:d==i&&"<"==v?r:d==a&&"<"==v?u:d==a&&"_"==v?s:d==a&&'"'==v?o:d==e&&">"==v?i:d==t&&" "==v?i:d==r&&">"==v?a:d==u&&">"==v?c:d==s&&" "==v?c:d==o&&'"'==v?c:d==l&&" "==v?c:d==p&&">"==v?c:d==o&&"@"==v?l:d==o&&"^"==v?p:" "!=v||d!=n&&d!=i&&d!=a&&d!=c?d==c&&"."==v?n:f:d,h.location=b}return{startState:function(){return{location:n,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,e){var t=n.next();if("<"==t){h(e,t);var i="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(i+=n,!0)})),e.uris.push(i),n.match("#",!1)?"variable":(n.next(),h(e,">"),"variable")}if("#"==t){var r="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(r+=n,!0)})),e.anchors.push(r),"variable-2"}if(">"==t)return h(e,">"),"variable";if("_"==t){h(e,t);var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),e.bnodes.push(a),n.next(),h(e," "),"builtin"}if('"'==t)return h(e,t),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&h(e,'"'),"string";if("@"==t){h(e,"@");var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),e.langs.push(u),n.next(),h(e," "),"string-2"}if("^"==t){n.next(),h(e,"^");var s="";return n.eatWhile((function(n){return">"!=n&&(s+=n,!0)})),e.types.push(s),n.next(),h(e,">"),"variable"}" "==t&&h(e,t),"."==t&&h(e,t)}}})),n.defineMIME("application/n-triples","ntriples"),n.defineMIME("application/n-quads","ntriples"),n.defineMIME("text/n-triples","ntriples")}(t(102))}}]);