import{S as X,i as Y,s as Z,B as x,k as g,a as C,q as H,J as $,l as w,h as u,c as P,m as k,r as V,n as h,H as f,b as S,u as J,C as ee,D as te,E as le,f as se,t as ae,p as ie}from"./index-4ba3a31c.js";function U(a){let l,s,i;return{c(){l=H("\u2022 "),s=H(a[2]),i=H(" min read")},l(e){l=V(e,"\u2022 "),s=V(e,a[2]),i=V(e," min read")},m(e,n){S(e,l,n),S(e,s,n),S(e,i,n)},p(e,n){n&4&&J(s,e[2])},d(e){e&&u(l),e&&u(s),e&&u(i)}}}function W(a){let l,s;return{c(){l=g("p"),s=H(a[3]),this.h()},l(i){l=w(i,"P",{style:!0});var e=k(l);s=V(e,a[3]),e.forEach(u),this.h()},h(){ie(l,"font-style","italic")},m(i,e){S(i,l,e),f(l,s)},p(i,e){e&8&&J(s,i[3])},d(i){i&&u(l)}}}function ne(a){let l,s,i,e,n,m,b,v,c,O,D,T,j,z,q,y,F,I,M,E;document.title=l=a[0]+" | Hussein Elguindi";let o=a[2]&&U(a),r=a[3]!=""&&W(a);const G=a[5].default,d=x(G,a,a[4],null);return{c(){s=g("meta"),i=C(),e=g("main"),n=g("div"),m=g("section"),b=g("div"),v=g("a"),c=H("\u25C0 all articles"),O=C(),D=g("div"),T=H(a[1]),j=C(),o&&o.c(),z=C(),q=g("h1"),y=H(a[0]),F=C(),I=g("div"),r&&r.c(),M=C(),d&&d.c(),this.h()},l(t){const _=$('[data-svelte="svelte-24fe3a"]',document.head);s=w(_,"META",{name:!0,content:!0}),_.forEach(u),i=P(t),e=w(t,"MAIN",{class:!0});var K=k(e);n=w(K,"DIV",{class:!0});var A=k(n);m=w(A,"SECTION",{class:!0});var N=k(m);b=w(N,"DIV",{class:!0});var L=k(b);v=w(L,"A",{href:!0,class:!0});var Q=k(v);c=V(Q,"\u25C0 all articles"),Q.forEach(u),L.forEach(u),O=P(N),D=w(N,"DIV",{class:!0});var p=k(D);T=V(p,a[1]),j=P(p),o&&o.l(p),p.forEach(u),N.forEach(u),z=P(A),q=w(A,"H1",{class:!0});var R=k(q);y=V(R,a[0]),R.forEach(u),F=P(A),I=w(A,"DIV",{class:!0});var B=k(I);r&&r.l(B),M=P(B),d&&d.l(B),B.forEach(u),A.forEach(u),K.forEach(u),this.h()},h(){h(s,"name","description"),h(s,"content",a[3]),h(v,"href","/"),h(v,"class","svelte-4huwg6"),h(b,"class","svelte-4huwg6"),h(D,"class","svelte-4huwg6"),h(m,"class","header svelte-4huwg6"),h(q,"class","title svelte-4huwg6"),h(I,"class","content svelte-4huwg6"),h(n,"class","svelte-4huwg6"),h(e,"class","svelte-4huwg6")},m(t,_){f(document.head,s),S(t,i,_),S(t,e,_),f(e,n),f(n,m),f(m,b),f(b,v),f(v,c),f(m,O),f(m,D),f(D,T),f(D,j),o&&o.m(D,null),f(n,z),f(n,q),f(q,y),f(n,F),f(n,I),r&&r.m(I,null),f(I,M),d&&d.m(I,null),E=!0},p(t,[_]){(!E||_&1)&&l!==(l=t[0]+" | Hussein Elguindi")&&(document.title=l),(!E||_&8)&&h(s,"content",t[3]),(!E||_&2)&&J(T,t[1]),t[2]?o?o.p(t,_):(o=U(t),o.c(),o.m(D,null)):o&&(o.d(1),o=null),(!E||_&1)&&J(y,t[0]),t[3]!=""?r?r.p(t,_):(r=W(t),r.c(),r.m(I,M)):r&&(r.d(1),r=null),d&&d.p&&(!E||_&16)&&ee(d,G,t,t[4],E?le(G,t[4],_,null):te(t[4]),null)},i(t){E||(se(d,t),E=!0)},o(t){ae(d,t),E=!1},d(t){u(s),t&&u(i),t&&u(e),o&&o.d(),r&&r.d(),d&&d.d(t)}}}function fe(a,l,s){let{$$slots:i={},$$scope:e}=l,{title:n="Title"}=l,{date:m="Date"}=l,{readmin:b=0}=l,{intro:v=""}=l;return a.$$set=c=>{"title"in c&&s(0,n=c.title),"date"in c&&s(1,m=c.date),"readmin"in c&&s(2,b=c.readmin),"intro"in c&&s(3,v=c.intro),"$$scope"in c&&s(4,e=c.$$scope)},[n,m,b,v,e,i]}class oe extends X{constructor(l){super(),Y(this,l,fe,ne,Z,{title:0,date:1,readmin:2,intro:3})}}export{oe as P};