(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1f3986f6"],{"1f3986f6":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return i;}});var n=l("777fffbe"),s=l("f19d2b93");l("108c25ad");var t=n._(l("5b220c3d")),o=l("a9d1a279");let d=["Movies","Books","Music","Sports"];var i=()=>{let[e,a]=t.default.useState(["Movies"]),l=(l,n)=>{let s=n?[...e,l]:e.filter(e=>e!==l);console.log("You are interested in: ",s),a(s);};return(0,s.jsxs)(o.Flex,{gap:4,wrap:!0,align:"center",children:[(0,s.jsx)("span",{children:"Categories:"}),d.map(a=>(0,s.jsx)(o.Tag.CheckableTag,{checked:e.includes(a),onChange:e=>l(a,e),children:a},a))]});};}}]);