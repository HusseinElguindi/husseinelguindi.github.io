import{S as X,i as Y,s as Z,B as x,k,a as S,q,J as $,l as b,h as u,c as T,m as V,r as A,n as v,H as f,b as y,u as g,C as ee,D as te,E as le,f as se,t as ae,p as ie}from"./index-6e1e08c5.js";function U(a){let l,s,i;return{c(){l=q("\u2022 "),s=q(a[2]),i=q(" min read")},l(e){l=A(e,"\u2022 "),s=A(e,a[2]),i=A(e," min read")},m(e,n){y(e,l,n),y(e,s,n),y(e,i,n)},p(e,n){n&4&&g(s,e[2])},d(e){e&&u(l),e&&u(s),e&&u(i)}}}function W(a){let l,s;return{c(){l=k("p"),s=q(a[3]),this.h()},l(i){l=b(i,"P",{style:!0});var e=V(l);s=A(e,a[3]),e.forEach(u),this.h()},h(){ie(l,"font-style","italic")},m(i,e){y(i,l,e),f(l,s)},p(i,e){e&8&&g(s,i[3])},d(i){i&&u(l)}}}function ne(a){let l,s,i,e,n,m,D,h,c,j,I,M,w,z,C,N,F,H,p,E;document.title=l=a[0]+" | Hussein Elguindi";let o=a[2]&&U(a),r=a[3]!=""&&W(a);const G=a[5].default,d=x(G,a,a[4],null);return{c(){s=k("meta"),i=S(),e=k("main"),n=k("div"),m=k("section"),D=k("div"),h=k("a"),c=q("\u25C0 all articles"),j=S(),I=k("div"),M=q(a[1]),w=S(),o&&o.c(),z=S(),C=k("h1"),N=q(a[0]),F=S(),H=k("div"),r&&r.c(),p=S(),d&&d.c(),this.h()},l(t){const _=$('[data-svelte="svelte-24fe3a"]',document.head);s=b(_,"META",{name:!0,content:!0}),_.forEach(u),i=T(t),e=b(t,"MAIN",{class:!0});var K=V(e);n=b(K,"DIV",{class:!0});var P=V(n);m=b(P,"SECTION",{class:!0});var B=V(m);D=b(B,"DIV",{class:!0});var L=V(D);h=b(L,"A",{href:!0,class:!0});var Q=V(h);c=A(Q,"\u25C0 all articles"),Q.forEach(u),L.forEach(u),j=T(B),I=b(B,"DIV",{class:!0});var J=V(I);M=A(J,a[1]),w=T(J),o&&o.l(J),J.forEach(u),B.forEach(u),z=T(P),C=b(P,"H1",{class:!0});var R=V(C);N=A(R,a[0]),R.forEach(u),F=T(P),H=b(P,"DIV",{class:!0});var O=V(H);r&&r.l(O),p=T(O),d&&d.l(O),O.forEach(u),P.forEach(u),K.forEach(u),this.h()},h(){v(s,"name","description"),v(s,"content",a[3]),v(h,"href","/"),v(h,"class","svelte-k7v9ua"),v(D,"class","svelte-k7v9ua"),v(I,"class","svelte-k7v9ua"),v(m,"class","header svelte-k7v9ua"),v(C,"class","title svelte-k7v9ua"),v(H,"class","content svelte-k7v9ua"),v(n,"class","svelte-k7v9ua"),v(e,"class","svelte-k7v9ua")},m(t,_){f(document.head,s),y(t,i,_),y(t,e,_),f(e,n),f(n,m),f(m,D),f(D,h),f(h,c),f(m,j),f(m,I),f(I,M),f(I,w),o&&o.m(I,null),f(n,z),f(n,C),f(C,N),f(n,F),f(n,H),r&&r.m(H,null),f(H,p),d&&d.m(H,null),E=!0},p(t,[_]){(!E||_&1)&&l!==(l=t[0]+" | Hussein Elguindi")&&(document.title=l),(!E||_&8)&&v(s,"content",t[3]),(!E||_&2)&&g(M,t[1]),t[2]?o?o.p(t,_):(o=U(t),o.c(),o.m(I,null)):o&&(o.d(1),o=null),(!E||_&1)&&g(N,t[0]),t[3]!=""?r?r.p(t,_):(r=W(t),r.c(),r.m(H,p)):r&&(r.d(1),r=null),d&&d.p&&(!E||_&16)&&ee(d,G,t,t[4],E?le(G,t[4],_,null):te(t[4]),null)},i(t){E||(se(d,t),E=!0)},o(t){ae(d,t),E=!1},d(t){u(s),t&&u(i),t&&u(e),o&&o.d(),r&&r.d(),d&&d.d(t)}}}function fe(a,l,s){let{$$slots:i={},$$scope:e}=l,{title:n="Title"}=l,{date:m="Date"}=l,{readmin:D=0}=l,{intro:h=""}=l;return a.$$set=c=>{"title"in c&&s(0,n=c.title),"date"in c&&s(1,m=c.date),"readmin"in c&&s(2,D=c.readmin),"intro"in c&&s(3,h=c.intro),"$$scope"in c&&s(4,e=c.$$scope)},[n,m,D,h,e,i]}class oe extends X{constructor(l){super(),Y(this,l,fe,ne,Z,{title:0,date:1,readmin:2,intro:3})}}export{oe as P};