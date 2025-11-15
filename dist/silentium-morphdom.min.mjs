import t from"morphdom";import{Applied as n,All as o,TransportParent as e,Message as i}from"silentium";function l(l,m){let r=null;const u=n(l,t=>(r=document.createElement("div"),t.appendChild(r),r)),c=o(m,u),d=e(function([n]){null!==r&&(r=t(r,n),this.use(r))});return i(t=>{c.to(d.child(t))})}export{l as Render};
//# sourceMappingURL=silentium-morphdom.min.mjs.map
