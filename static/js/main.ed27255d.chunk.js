(this["webpackJsonptodo-draggable"]=this["webpackJsonptodo-draggable"]||[]).push([[0],{19:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),i=n(8),s=n(9),l=(n(19),n(31)),u=n(13),d=n(14),f=n.n(d),j=n(0);var b=function(){var t=c.a.useState(""),e=Object(s.a)(t,2),n=e[0],a=e[1],r=c.a.useState(JSON.parse(localStorage.getItem("items"))||[]),d=Object(s.a)(r,2),b=d[0],m=d[1];Object(o.useEffect)((function(){localStorage.setItem("items",JSON.stringify(b))}),[b]);var O=function(){if(""!==n.trim()){var t={id:Object(l.a)(),item:n,color:Object(u.randomColor)({luminosity:"light"}),defaultPos:{x:500,y:-500}};m([].concat(Object(i.a)(b),[t])),a("")}else alert("Enter something")};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter something",value:n,onChange:function(t){return a(t.target.value)},onKeyPress:function(t){return function(t){13===(t.keyCode||t.which)&&O()}(t)}}),Object(j.jsx)("button",{className:"enter",onClick:O,children:"Enter"})]}),b.map((function(t,e){return Object(j.jsx)(f.a,{defaultPosition:t.defaultPos,onStop:function(t,n){!function(t,e){var n=Object(i.a)(b);n[e].defaultPos={x:t.x,y:t.y},m(n)}(n,e)},children:Object(j.jsxs)("div",{className:"todo__item",style:{backgroundColor:t.color},children:["".concat(t.item),Object(j.jsx)("button",{className:"delete",onClick:function(){return e=t.id,void m(b.filter((function(t){return t.id!==e})));var e},children:"X"})]})},t.id)}))]})};n(28);r.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ed27255d.chunk.js.map