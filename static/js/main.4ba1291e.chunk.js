(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},14:function(t,n,o){"use strict";o.r(n);var e=o(3),r=o.n(e),c=o(4),i=o(5),s=o(7),u=o(6),a=o(1),d=o.n(a);o(12);function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return l().then((function(t){return t.filter((function(t){return t.id<=5}))}))},h=function(){return l().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},j=o(0),b=function(t){Object(s.a)(o,t);var n=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.setGoods=function(n){n().then((function(n){return t.setState({goods:n})}))},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t.setGoods(l)},children:"Load All goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t.setGoods(f)},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t.setGoods(h)},children:"Load red goods"}),Object(j.jsx)("ul",{children:n.map((function(t){return Object(j.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})]})}}]),o}(d.a.Component),g=b;r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4ba1291e.chunk.js.map