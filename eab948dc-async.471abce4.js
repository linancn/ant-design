(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["eab948dc"],{eab948dc:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var l=n("f19d2b93");n("9f5ee73a");var s=n("5b220c3d"),a=n("a9d1a279"),o=()=>{let[e,t]=(0,s.useState)([]),[n,o]=(0,s.useState)([]),i=()=>{let e=[],n=[];for(let t=0;t<20;t++){let l={key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,chosen:t%2==0};l.chosen&&e.push(l.key),n.push(l);}t(n),o(e);};return(0,s.useEffect)(()=>{i();},[]),(0,l.jsx)(a.Transfer,{dataSource:e,listStyle:{width:300,height:300},targetKeys:n,onChange:(e,t,n)=>{console.log(e,t,n),o(e);},render:e=>{let t=(0,l.jsxs)("span",{className:"custom-item",children:[e.title," - ",e.description]});return{label:t,value:e.title};}});};}}]);