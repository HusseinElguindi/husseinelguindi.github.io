import{S as h,i as v,s as w,B as m,k as p,l as g,m as b,h as _,n as u,b as C,C as y,D as I,E as S,f as E,t as k,o as A,O as D}from"./index-7c3592c8.js";function j(n){let l,i,o;const r=n[5].default,t=m(r,n,n[4],null);return{c(){l=p("div"),t&&t.c(),this.h()},l(e){l=g(e,"DIV",{class:!0});var a=b(l);t&&t.l(a),a.forEach(_),this.h()},h(){u(l,"class",i="inline-carousel "+(n[1]?"wrap":"")+" "+(n[0]>0?`overflow-${n[3]}`:"")+" svelte-1x9hlt8")},m(e,a){C(e,l,a),t&&t.m(l,null),n[6](l),o=!0},p(e,[a]){t&&t.p&&(!o||a&16)&&y(t,r,e,e[4],o?S(r,e[4],a,null):I(e[4]),null),(!o||a&3&&i!==(i="inline-carousel "+(e[1]?"wrap":"")+" "+(e[0]>0?`overflow-${e[3]}`:"")+" svelte-1x9hlt8"))&&u(l,"class",i)},i(e){o||(E(t,e),o=!0)},o(e){k(t,e),o=!1},d(e){e&&_(l),t&&t.d(e),n[6](null)}}}function q(n,l,i){let{$$slots:o={},$$scope:r}=l,{overflow:t=0}=l;const e=t.toString().replaceAll(".","-");let{wrap:a=!1}=l,c=`
        @media (min-width: ${640/t}px) { 
            div.overflow-${e} { 
                --width: calc(${t} * 100vw); 
                width: var(--width) !important; 
                margin-left: calc((var(--width) - 100%) / -2) !important; 
            } 
        }
    `,f;A(()=>{if(t<=0)return;let s=document.createElement("style");s.insertAdjacentText("afterbegin",c),f.appendChild(s)});function d(s){D[s?"unshift":"push"](()=>{f=s,i(2,f)})}return n.$$set=s=>{"overflow"in s&&i(0,t=s.overflow),"wrap"in s&&i(1,a=s.wrap),"$$scope"in s&&i(4,r=s.$$scope)},[t,a,f,e,r,o,d]}class M extends h{constructor(l){super(),v(this,l,q,j,w,{overflow:0,wrap:1})}}export{M as I};
