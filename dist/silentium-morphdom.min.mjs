import t from"morphdom";import{Applied as e,All as n,TransportParent as o,Event as i}from"silentium";function l(l,m){let r=null;const u=e(l,t=>(r=document.createElement("div"),t.appendChild(r),r)),c=n(m,u),d=o(function([e]){null!==r&&(r=t(r,e),this.use(r))});return i(t=>{c.event(d.child(t))})}export{l as Render};
//# sourceMappingURL=silentium-morphdom.min.mjs.map
