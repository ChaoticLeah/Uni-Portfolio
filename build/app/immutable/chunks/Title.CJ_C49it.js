import{s as b,f as _,n as u}from"./scheduler.D3hV8Tfu.js";import{S as P,i as p,e as d,s as I,p as q,a as h,f as T,b as m,q as j,d as o,j as c,k as f,l as g,r as k,w as v}from"./index.uzxu_-qU.js";function U(l){let e,a,i,s,r;return{c(){e=d("img"),i=I(),s=d("p"),r=q(l[1]),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),i=T(t),s=h(t,"P",{});var n=m(s);r=j(n,l[1]),n.forEach(o),this.h()},h(){_(e.src,a=`${l[2]?"":"/Uni-Portfolio/"}${l[0]}`)||c(e,"src",a),c(e,"alt",l[1]),c(e,"class","svelte-1ckyp3x")},m(t,n){f(t,e,n),f(t,i,n),f(t,s,n),g(s,r)},p(t,[n]){n&1&&!_(e.src,a=`${t[2]?"":"/Uni-Portfolio/"}${t[0]}`)&&c(e,"src",a),n&2&&c(e,"alt",t[1]),n&2&&k(r,t[1])},i:u,o:u,d(t){t&&(o(e),o(i),o(s))}}}function w(l,e,a){let{src:i=""}=e,{alt:s=""}=e;const r=process.argv.includes("dev");return l.$$set=t=>{"src"in t&&a(0,i=t.src),"alt"in t&&a(1,s=t.alt)},[i,s,r]}class C extends P{constructor(e){super(),p(this,e,w,U,b,{src:0,alt:1})}}function y(l){let e,a,i;return{c(){e=d("div"),a=d("h1"),i=q(l[0]),this.h()},l(s){e=h(s,"DIV",{class:!0,style:!0});var r=m(e);a=h(r,"H1",{class:!0});var t=m(a);i=j(t,l[0]),t.forEach(o),r.forEach(o),this.h()},h(){c(a,"class","xl:!text-8xl sm:!text-6xl drop-shadow-2xl"),c(e,"class","rounded-lg w-full h-64 bg-cover flex items-center justify-center svelte-lq3q3b"),v(e,"background-image","linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("+(l[2]?"":"/Uni-Portfolio")+"/ProjectThumbnails/"+l[1]+")")},m(s,r){f(s,e,r),g(e,a),g(a,i)},p(s,[r]){r&1&&k(i,s[0]),r&2&&v(e,"background-image","linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("+(s[2]?"":"/Uni-Portfolio")+"/ProjectThumbnails/"+s[1]+")")},i:u,o:u,d(s){s&&o(e)}}}function E(l,e,a){let{title:i}=e,{src:s}=e;const r=process.argv.includes("dev");return l.$$set=t=>{"title"in t&&a(0,i=t.title),"src"in t&&a(1,s=t.src)},[i,s,r]}class D extends P{constructor(e){super(),p(this,e,E,y,b,{title:0,src:1})}}export{C as I,D as T};
