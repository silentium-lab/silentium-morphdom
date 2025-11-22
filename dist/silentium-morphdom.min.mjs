import n from"morphdom";import{Applied as t,All as e,Message as o}from"silentium";function m(m,r){let i=null;const l=t(m,n=>(i=document.createElement("div"),n.appendChild(i),i)),u=e(r,l);return o(function(t){u.then(([e])=>{null!==i&&(i=n(i,e),t(i))})})}export{m as Render};
//# sourceMappingURL=silentium-morphdom.min.mjs.map
