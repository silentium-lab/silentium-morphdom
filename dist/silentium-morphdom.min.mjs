import r from"morphdom";import{Applied as n,All as o,Shared as t,Message as e}from"silentium";function m(m,i){const c=n(m,r=>{const n=document.createElement("div");return r.appendChild(n),n}),d=o(i,c);return t(e(function(n,o){d.then(([t,e])=>{try{n(r(e,t))}catch(r){o("Error in Render function from morphdom "+r.message)}})}))}export{m as Render};
//# sourceMappingURL=silentium-morphdom.min.mjs.map
