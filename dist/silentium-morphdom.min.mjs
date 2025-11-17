import t from"morphdom";import{Applied as e,All as n,TapParent as i,Message as o}from"silentium";function l(l,m){let r=null;const p=e(l,t=>(r=document.createElement("div"),t.appendChild(r),r)),u=n(m,p),c=i(function([e]){null!==r&&(r=t(r,e),this.use(r))});return o(t=>{u.pipe(c.child(t))})}export{l as Render};
//# sourceMappingURL=silentium-morphdom.min.mjs.map
