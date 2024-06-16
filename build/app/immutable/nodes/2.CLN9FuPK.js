import{s as F,f as Y,n as z}from"../chunks/scheduler.D3hV8Tfu.js";import{S as J,i as K,e as y,s as E,p as x,a as w,b as T,d as g,f as A,q as H,j as u,k as G,l as h,r as B,z as re,c as O,g as V,m as R,t as U,n as P,o as S,h as Z,w as ie}from"../chunks/index.uzxu_-qU.js";function ee(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function te(r,e,t){const n=r.slice();return n[5]=e[t],n}function ne(r){let e,t;return{c(){e=y("a"),t=x("Read More"),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,target:!0});var i=T(e);t=H(i,"Read More"),i.forEach(g),this.h()},h(){u(e,"class","btn btn-primary"),u(e,"href",r[3]),u(e,"target","_blank")},m(n,i){G(n,e,i),h(e,t)},p(n,i){i&8&&u(e,"href",n[3])},d(n){n&&g(e)}}}function ae(r){let e,t=r[5]+"",n;return{c(){e=y("div"),n=x(t),this.h()},l(i){e=w(i,"DIV",{class:!0});var d=T(e);n=H(d,t),d.forEach(g),this.h()},h(){u(e,"class","badge badge-primary")},m(i,d){G(i,e,d),h(e,n)},p(i,d){d&16&&t!==(t=i[5]+"")&&B(n,t)},d(i){i&&g(e)}}}function se(r){let e,t,n,i,d,j,l,c,p,_,b,$,k,I,s,m,a=r[3]!=null&&ne(r),L=ee(r[4]),o=[];for(let f=0;f<L.length;f+=1)o[f]=ae(te(r,L,f));return{c(){e=y("div"),t=y("figure"),n=y("img"),j=E(),l=y("div"),c=y("h2"),p=x(r[0]),_=E(),b=y("p"),$=x(r[1]),k=E(),I=y("div"),a&&a.c(),s=E(),m=y("div");for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var D=T(e);t=w(D,"FIGURE",{});var v=T(t);n=w(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(g),j=A(D),l=w(D,"DIV",{class:!0});var M=T(l);c=w(M,"H2",{class:!0});var N=T(c);p=H(N,r[0]),N.forEach(g),_=A(M),b=w(M,"P",{class:!0});var Q=T(b);$=H(Q,r[1]),Q.forEach(g),k=A(M),I=w(M,"DIV",{class:!0});var W=T(I);a&&a.l(W),W.forEach(g),s=A(M),m=w(M,"DIV",{class:!0});var X=T(m);for(let q=0;q<o.length;q+=1)o[q].l(X);X.forEach(g),M.forEach(g),D.forEach(g),this.h()},h(){Y(n.src,i="/ProjectThumbnails/"+r[2].name)||u(n,"src",i),u(n,"alt",d=r[2].alt),u(n,"class","group-hover:blur transition-all duration-500"),u(c,"class","card-title !justify-center"),u(b,"class","md:opacity-0 group-hover:opacity-100 transition-all duration-500"),u(I,"class","card-actions justify-end md:opacity-0 group-hover:opacity-100 transition-all duration-500"),u(m,"class","card-actions group-hover:opacity-0 transition-all duration-500"),u(l,"class","card-body"),u(e,"class","card w-96 bg-base-100 shadow-xl image-full group")},m(f,D){G(f,e,D),h(e,t),h(t,n),h(e,j),h(e,l),h(l,c),h(c,p),h(l,_),h(l,b),h(b,$),h(l,k),h(l,I),a&&a.m(I,null),h(l,s),h(l,m);for(let v=0;v<o.length;v+=1)o[v]&&o[v].m(m,null)},p(f,[D]){if(D&4&&!Y(n.src,i="/ProjectThumbnails/"+f[2].name)&&u(n,"src",i),D&4&&d!==(d=f[2].alt)&&u(n,"alt",d),D&1&&B(p,f[0]),D&2&&B($,f[1]),f[3]!=null?a?a.p(f,D):(a=ne(f),a.c(),a.m(I,null)):a&&(a.d(1),a=null),D&16){L=ee(f[4]);let v;for(v=0;v<L.length;v+=1){const M=te(f,L,v);o[v]?o[v].p(M,D):(o[v]=ae(M),o[v].c(),o[v].m(m,null))}for(;v<o.length;v+=1)o[v].d(1);o.length=L.length}},i:z,o:z,d(f){f&&g(e),a&&a.d(),re(o,f)}}}function oe(r,e,t){let{title:n}=e,{desc:i}=e,{image:d}=e,{moreInfoURL:j=null}=e,{tags:l=[]}=e;return r.$$set=c=>{"title"in c&&t(0,n=c.title),"desc"in c&&t(1,i=c.desc),"image"in c&&t(2,d=c.image),"moreInfoURL"in c&&t(3,j=c.moreInfoURL),"tags"in c&&t(4,l=c.tags)},[n,i,d,j,l]}class C extends J{constructor(e){super(),K(this,e,oe,se,F,{title:0,desc:1,image:2,moreInfoURL:3,tags:4})}}function le(r){let e,t,n,i,d,j,l,c,p,_,b,$,k,I,s,m;return n=new C({props:{title:"The Orbetorian",desc:"A sandbox game where everything is procedurally generated. Its like terraria and no mans sky combined. I worked with a friend on this and handled a lot of the UI, some items, rendering, and other things.",image:{name:"TheOrbetorian.png",alt:"A sceenshot of The Orbetorian in an underground cave in a glow tree biome"},moreInfoURL:"/projects/TheOrbetorian",tags:[r[0].GAME]}}),d=new C({props:{title:"Desolate Dominion",desc:"A procedural sandbox survival game pushing robox to its limits. I worked on everything but I especially enjoyed working on algorithms for the terrain.",image:{name:"DesolateDominion.png",alt:"Some procedurally generated snow mountains and a rocky grassy cliff with some trees below"},moreInfoURL:"/projects/DesolateDominion",tags:[r[0].GAME]}}),l=new C({props:{title:"Bundle Art Generator",desc:"An online tool that allows you to paint whatever you want and copy a command that you can run in minecraft that will bring the art into your inventory. I really enjoyed combining games and tools for this one.",image:{name:"BundleArtGenerator.png",alt:"A 2d grid of minecraft stained glass and some paint tools to paint a picture in it"},tags:[r[0].TOOL]}}),p=new C({props:{title:"The Devils Dungeon",desc:"An online puzzle game I made alone for the 2020 Devtober gamejam inspired by helltaker.",image:{name:"TheDevilsDungeon.png",alt:"A 2D puzzle game with a pixel art robot escaping a maze"},moreInfoURL:"/projects/TheDevilsDungeon",tags:[r[0].GAME]}}),b=new C({props:{title:"Aether Engine",desc:"This is my second attempt at a little game engine project that runs in the browser allowing you to made games for the browser. I worked on this project alone during covid as a passion project and made the whole thing on my own.",image:{name:"AetherEngine.png",alt:"A sceenshot of the Aether Engine interface and a game running with a little robot standing on a platform"},tags:[r[0].TOOL]}}),k=new C({props:{title:"Sharkey & Cutiekey",desc:`Sharkey and Cutiekey and 2 fediverse projects I work on with a small team of other people. They are both opensource social media sites.
My role in this was frontend and backend coder.`,image:{name:"Sharkey.png",alt:"The cutiekey and sharkey interface"}}}),s=new C({props:{title:"Image Tool",desc:"This self hosted open source tool allows you to sort images by tags. Think of it like jellyfin more for images. I am the owner of this project and have planned, coded, and done almost everything there so far.",image:{name:"Sharkey.png",alt:"The cutiekey and sharkey interface"},tags:[r[0].TOOL]}}),{c(){e=y("div"),t=y("div"),O(n.$$.fragment),i=E(),O(d.$$.fragment),j=E(),O(l.$$.fragment),c=E(),O(p.$$.fragment),_=E(),O(b.$$.fragment),$=E(),O(k.$$.fragment),I=E(),O(s.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var L=T(e);t=w(L,"DIV",{class:!0});var o=T(t);V(n.$$.fragment,o),i=A(o),V(d.$$.fragment,o),j=A(o),V(l.$$.fragment,o),c=A(o),V(p.$$.fragment,o),_=A(o),V(b.$$.fragment,o),$=A(o),V(k.$$.fragment,o),I=A(o),V(s.$$.fragment,o),o.forEach(g),L.forEach(g),this.h()},h(){u(t,"class","w-10/12 flex flex-wrap gap-2"),u(e,"class","flex justify-center items-center")},m(a,L){G(a,e,L),h(e,t),R(n,t,null),h(t,i),R(d,t,null),h(t,j),R(l,t,null),h(t,c),R(p,t,null),h(t,_),R(b,t,null),h(t,$),R(k,t,null),h(t,I),R(s,t,null),m=!0},p:z,i(a){m||(U(n.$$.fragment,a),U(d.$$.fragment,a),U(l.$$.fragment,a),U(p.$$.fragment,a),U(b.$$.fragment,a),U(k.$$.fragment,a),U(s.$$.fragment,a),m=!0)},o(a){P(n.$$.fragment,a),P(d.$$.fragment,a),P(l.$$.fragment,a),P(p.$$.fragment,a),P(b.$$.fragment,a),P(k.$$.fragment,a),P(s.$$.fragment,a),m=!1},d(a){a&&g(e),S(n),S(d),S(l),S(p),S(b),S(k),S(s)}}}function ce(r){return[{GAME:"Game",TOOL:"Tool"}]}class de extends J{constructor(e){super(),K(this,e,ce,le,F,{})}}function me(r){let e,t,n,i,d=`<div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">Leah</h1> <p class="mb-5">My name is Leah, and I&#39;m a self driven creative student studying CMGT. In my free time I
				will probably be working on personal projects, drawing, or other creative things. I do a lot
				of opensource work and love making people smile. I love working with people, trying new
				things, and being creative. My Desire to learn enables me to do various different projects.
				I am good at coding, modeling, and texturing among other things.</p> <a class="btn btn-primary" href="#projects">My Projects</a></div>`,j,l,c,p,_,b,$,k='<div class="join"><a class="btn join-item" href="https://github.com/ChaoticLeah">Github</a> <a class="btn join-item" href="https://kevinwho.itch.io/">Itch.io</a></div>',I;return _=new de({}),{c(){e=y("div"),t=y("div"),n=E(),i=y("div"),i.innerHTML=d,j=E(),l=y("br"),c=E(),p=y("div"),O(_.$$.fragment),b=E(),$=y("div"),$.innerHTML=k,this.h()},l(s){e=w(s,"DIV",{class:!0,style:!0});var m=T(e);t=w(m,"DIV",{class:!0}),T(t).forEach(g),n=A(m),i=w(m,"DIV",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-17kb3x5"&&(i.innerHTML=d),m.forEach(g),j=A(s),l=w(s,"BR",{}),c=A(s),p=w(s,"DIV",{id:!0});var a=T(p);V(_.$$.fragment,a),a.forEach(g),b=A(s),$=w(s,"DIV",{class:!0,"data-svelte-h":!0}),Z($)!=="svelte-1iznsrs"&&($.innerHTML=k),this.h()},h(){u(t,"class","hero-overlay bg-opacity-60"),u(i,"class","hero-content text-center text-neutral-content"),u(e,"class","hero min-h-screen"),ie(e,"background-image","url("+(r[0]?"":"/Uni-Portfolio")+"/ProjectThumbnails/DesolateDominion.png)"),u(p,"id","projects"),u($,"class","w-full flex justify-center p-10")},m(s,m){G(s,e,m),h(e,t),h(e,n),h(e,i),G(s,j,m),G(s,l,m),G(s,c,m),G(s,p,m),R(_,p,null),G(s,b,m),G(s,$,m),I=!0},p:z,i(s){I||(U(_.$$.fragment,s),I=!0)},o(s){P(_.$$.fragment,s),I=!1},d(s){s&&(g(e),g(j),g(l),g(c),g(p),g(b),g($)),S(_)}}}function fe(r){return[process.argv.includes("dev")]}class ue extends J{constructor(e){super(),K(this,e,fe,me,F,{})}}export{ue as component};
