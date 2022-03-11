function e(e){for(var t=e[0],r=1,n=arguments.length;r<n;r++)t+=arguments[r]+e[r];return t}const{isArray:t}=Array;class r extends String{}const{defineProperty:n}=Object,o=(e,n)=>(o,...s)=>new Promise(((c,a)=>{if(o.some((e=>e.includes("?")))){const e=new Error("SQLITE_ERROR: SQL injection hazard");e.code="SQLITE_ERROR",a(e)}else{const[l,...i]=((e,...n)=>{const o=[e[0]],s=[o];for(let c=0;c<n.length;c++)n[c]instanceof r?o[o.length-1]+=n[c]+e[c+1]:(t(n[c])?(o.push(...n[c].slice(1).map((e=>","))),s.push(...n[c])):s.push(n[c]),o.push(e[c+1]));return s})(o,...s);e[n](l.join("?"),i,((e,t)=>{e?a(e):c(t)}))}}));function s(t){const s=o(t,"run");return{transaction(){let e=s(["BEGIN TRANSACTION"]);return n(((...t)=>{e=e.then((()=>s(...t)))}),"commit",{value:()=>e=e.then((()=>s(["COMMIT"])))})},all:o(t,"all"),get:o(t,"get"),raw:(t,...n)=>{return o=e(t,...n),new r(o);var o},close:()=>t.close(),query:s}}const{assign:c}=Object,a="function"==typeof importScripts,l=a?".":import.meta.url.replace(/\/[^/]*$/,""),i=e=>new Promise(((t,r)=>{const n=()=>{const e=self.module.exports;delete self.exports,self.module=void 0,t(e)};if(self.exports={},self.module={exports:exports},a)importScripts(e),n();else{const{head:t}=document;c(t.appendChild(document.createElement("script")),{onload(){t.removeChild(this),n()},onerror:r,src:e})}})),u=(e,t=1)=>new Promise(((r,n)=>{c(indexedDB.open(e,t),{onupgradeneeded({target:{result:e,transaction:t}}){e.objectStoreNames.contains("sqlite")||e.createObjectStore("sqlite").createIndex("buffer","buffer",{unique:!0}),c(t,{oncomplete(){r(e)}})},onsuccess({target:{result:e}}){r(e)},onerror:n})})),p=(e={})=>new Promise(((t,r)=>{const n=e.dist||l;i(n+"/sql-wasm.js").then((({default:o})=>{Promise.all([u(e.name||"sqlite-worker"),o({locateFile:e=>n+"/"+e})]).then((([n,{Database:o}])=>{const a=e=>n.transaction(["sqlite"],e).objectStore("sqlite");c(a("readonly").get("buffer"),{onsuccess(){let r=Promise.resolve();const{result:n}=this,l=new o(n||e.database||new Uint8Array(0)),i=()=>{r=r.then((()=>new Promise(((t,r)=>{const n=l.export();c(a("readwrite").put(n,"buffer").transaction,{oncomplete(){t(),e.update&&e.update(n)},onabort:r,onerror:r})}))))};n||i();const{all:u,get:p,query:m,raw:f,transaction:h}=s({all(e,t,r){try{const n=l.exec(e,t),o=[];n.forEach(d,o),r(null,o)}catch(e){r(e)}},get(e,t,r){try{const n=l.exec(e+" LIMIT 1",t),o=[];n.forEach(d,o),r(null,o.shift()||null)}catch(e){r(e)}},run(e,t,r){try{r(null,l.run(e,t))}catch(e){r(e)}}});let g=0;t({all:u,get:p,raw:f,transaction:h,query(t){return/\b(?:INSERT|DELETE|UPDATE)\b/i.test(t[0])&&(clearTimeout(g),g=setTimeout(i,e.timeout||250)),m.apply(this,arguments)}})},onerror:r})}),r)}))}));function d({columns:e,values:t}){for(let{length:r}=t,n=0;n<r;n++){const r=t[n],o={};for(let{length:t}=e,n=0;n<t;n++)o[e[n]]=r[n];this.push(o)}}const m=new WeakMap,f=(e,t)=>{const r=[e[0]],n=[];for(let o=0,s=0,c=0,{length:a}=t;s<a;s++)t[s]instanceof h?r[o]+=t[s].v+e[s+1]:(n[c++]=s,r[++o]=e[s+1]);return{t:r,v:n}};function h(e){this.v=e}const{defineProperty:g}=Object,w=new Map,b=(t,...r)=>new h(e(t,...r));let y=0;function v(e={}){const{credentials:t}=e,r=e.dist||l,n=e.worker||r+"/worker.js",o=e=>(t,...r)=>{const[n,...o]=((e,...t)=>{const{t:r,v:n}=f(e,t),o=m.get(e)||m.set(e,{}).get(e);return(o[r]||(o[r]=[r])).concat(n.map((e=>t[e])))})(t,...r);return s(e,{template:n,values:o})},s=(e,t)=>new Promise(((r,n)=>{const o=y++;w.set(o,{resolve:r,reject:n}),a.postMessage({id:o,action:e,options:t})})),a=c(new Worker(/^(?:\.|\/)/.test(n)?n:(e=>URL.createObjectURL(new Blob([`importScripts('${e}')`],{type:"text/javascript"})))(n),{credentials:t}),{onmessage({data:{id:e,result:t,error:r}}){const{resolve:n,reject:o}=w.get(e);w.delete(e),r?o(r):n(t)}}),i=o("query");return s("init",c({dist:r,library:r+"/init.js"},e)).then((()=>({transaction(){let e=i(["BEGIN TRANSACTION"]);return g(((...t)=>{e=e.then((()=>i(...t)))}),"commit",{value:()=>e=e.then((()=>i(["COMMIT"])))})},all:o("all"),get:o("get"),query:i,raw:b})))}export{v as SQLiteWorker,p as init};
