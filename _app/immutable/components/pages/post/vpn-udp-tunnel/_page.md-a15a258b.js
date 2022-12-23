import{S as ks,i as Ds,s as Is,Q as rn,v as rs,w as is,x as ls,R as xs,T as ns,f as cs,t as ds,y as us,U as ss,k as n,q as i,a as u,l as s,m as o,r as l,h as t,c as p,n as c,K as ps,b as d,H as a,A as Cs}from"../../../../chunks/index-4ba3a31c.js";import{P as As}from"../../../../chunks/_post-a926bd3f.js";import{I as Ws}from"../../../../chunks/InlineCarousel-b16e77a5.js";function Gs(G){let f,_;return{c(){f=n("img"),this.h()},l(v){f=s(v,"IMG",{alt:!0,src:!0}),this.h()},h(){c(f,"alt","WireGuard tunnel proxy flow"),ps(f.src,_="/images/post/vpn-udp-tunnel/wg-tunnel-flow.svg")||c(f,"src",_)},m(v,b){d(v,f,b)},p:Cs,d(v){v&&t(f)}}}function Ns(G){let f,_,v,b,h,k,C,Ot,at,N,T,Pe,$t,nt,re,Vt,st,S,O,be,Ut,ot,A,ke,gt,Ht,De,Rt,Mt,rt,ie,le,ln,it,$,V,Ie,Bt,lt,P,xe,Lt,jt,Ce,Kt,qt,Ae,Ft,Yt,We,zt,Qt,ct,U,dt,m,Jt,Ge,Xt,Zt,Ne,ea,ta,Te,aa,na,Se,sa,oa,Oe,ra,ia,$e,la,ca,ut,w,da,Ve,ua,pa,Ue,fa,ha,ge,ma,va,He,ya,wa,pt,g,H,Re,Ea,ft,ce,_a,ht,R,M,Me,Pa,mt,de,ba,vt,ue,ka,yt,ee,pe,fs=`When a UDP datagram is received:
    If it was sent from the locally running WireGuard server:
        Encrypt and send it to the client

    If it is the secret message:
        Set the client to the sender
        
    If it was sent from the client:
        Decrypt and send it to the locally running WireGuard peer`,wt,B,L,Be,Da,Et,fe,Ia,_t,he,xa,Pt,te,me,hs=`When a UDP datagram is received:
    If it was sent from the locally running WireGuard server:
        Encrypt and send it to the server
        
    If it was sent from the server:
        Decrypt and send it to the locally running WireGuard peer`,bt,j,K,Le,Ca,kt,q,F,je,Aa,Dt,ae,ve,ms=`<span class="token comment"># wg0.conf</span>
<span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
PrivateKey = REDACTED
Address = 10.55.33.1/32<span class="token punctuation">,</span>fd11<span class="token punctuation">:</span>5ee<span class="token punctuation">:</span>bad<span class="token punctuation">:</span>c0de<span class="token punctuation">:</span><span class="token punctuation">:</span>1/64 <span class="token comment"># it is important to make the IP subnet mask /32 so it is one IP</span>
MTU = 1420
ListenPort = 51820
<span class="token comment">### begin client1 ###</span>
<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey = REDACTED
PresharedKey = REDACTED
Endpoint = 127.0.0.1<span class="token punctuation">:</span><span class="token number">51821</span> <span class="token comment"># the local proxy server is running on this address</span>
AllowedIPs = 10.55.33.2/32<span class="token punctuation">,</span>fd11<span class="token punctuation">:</span>5ee<span class="token punctuation">:</span>bad<span class="token punctuation">:</span>c0de<span class="token punctuation">:</span><span class="token punctuation">:</span>2/128
<span class="token comment">### end client1 ###</span>`,It,Y,z,Ke,Wa,xt,ne,ye,vs=`<span class="token comment"># client1.conf</span>
<span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
PrivateKey = REDACTED
ListenPort = 51820
Address = 10.55.33.2/24<span class="token punctuation">,</span> fd11<span class="token punctuation">:</span>5ee<span class="token punctuation">:</span>bad<span class="token punctuation">:</span>c0de<span class="token punctuation">:</span><span class="token punctuation">:</span>2/64
DNS = 1.1.1.1<span class="token punctuation">,</span> 1.0.0.1
MTU = 1420

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey = REDACTED
PresharedKey = REDACTED
AllowedIPs = 0.0.0.0/0
DisallowedIPs = 127.0.0.1/32<span class="token punctuation">,</span> the.remote.server.address/32 <span class="token comment"># localhost and the remote server address</span>
Endpoint = 127.0.0.1<span class="token punctuation">:</span><span class="token number">51821</span> <span class="token comment"># the local proxy server is running on this address</span>`,Ct,y,Ga,qe,Na,Ta,Fe,Sa,Oa,Ye,$a,Va,se,Ua,ga,ze,Ha,Ra,At,Q,J,Qe,Ma,Wt,I,Ba,Je,La,ja,Xe,Ka,qa,Gt,oe,we,ys=`ufw allow <span class="token number">51820</span>/udp <span class="token comment"># not required unless you also want to connect without the proxy tunnel</span>
ufw allow <span class="token number">51821</span>/udp <span class="token comment"># 51821 is the port that your proxy server runs on</span>

ufw route allow <span class="token keyword">in</span> on wg0 out on eth0
ufw route allow <span class="token keyword">in</span> on eth0 out on wg0`,Nt,X,Z,Ze,Fa,Tt,Ee,Ya,St;return U=new Ws({props:{overflow:.55,$$slots:{default:[Gs]},$$scope:{ctx:G}}}),{c(){f=n("p"),_=i("I was recently faced with an issue of being unable to establish a VPN connection in a country that used Deep Packet Inspection (DPI) to examine datagrams and their common patterns."),v=u(),b=n("p"),h=i("My project started as a simple chat about VPN\u2019s and how simply one could host their own at home, through the use of a small computer (such as a Raspberry Pi). I set up a VPN at home that very evening with an old Raspberry Pi, using a dynamic DNS service (my ISP did not provide a static IP) and a port-forward on my router (to make it reachable over the internet)."),k=u(),C=n("p"),Ot=i("There was just one problem, I was traveling soon and I knew VPNs were hard to connect to, due to the use of DPI, at my destination. I set out to find a way to obfuscate the data, such as using a stunnel (tunnel over SSL), but that was slow and only worked with TCP. I opted not to use a VPN over TCP since OpenVPN is a very large codebase and is quite a bit slower, compared to WireGuard."),at=u(),N=n("h2"),T=n("a"),Pe=n("span"),$t=i("Proxy Concept"),nt=u(),re=n("p"),Vt=i("What if there was a proxy program that could intercept the datagrams, encrypt their data, then send it to a server which is running a similar proxy program to decrypt that data and send it to where it needs to be."),st=u(),S=n("h3"),O=n("a"),be=n("span"),Ut=i("Typical WireGuard Flow"),ot=u(),A=n("p"),ke=n("code"),gt=i("A"),Ht=i(" and "),De=n("code"),Rt=i("D"),Mt=i(" are WireGuard peers."),rt=u(),ie=n("p"),le=n("img"),it=u(),$=n("h3"),V=n("a"),Ie=n("span"),Bt=i("Proxied WireGuard Flow"),lt=u(),P=n("p"),xe=n("code"),Lt=i("A"),jt=i(" and "),Ce=n("code"),Kt=i("D"),qt=i(" are WireGuard peers, they do not communicate directly over the internet, only the proxy servers communicate remotely with the encrypted data. "),Ae=n("code"),Ft=i("B"),Yt=i(" and "),We=n("code"),zt=i("C"),Qt=i(" are the proxy programs running a server on each machine."),ct=u(),rs(U.$$.fragment),dt=u(),m=n("p"),Jt=i("When "),Ge=n("code"),Xt=i("B"),Zt=i(" and "),Ne=n("code"),ea=i("C"),ta=i(" receive data from "),Te=n("code"),aa=i("A"),na=i(" and "),Se=n("code"),sa=i("D"),oa=i(", respectively, they encrypt and send it to each other, "),Oe=n("code"),ra=i("C"),ia=i(" and "),$e=n("code"),la=i("B"),ca=i(", respectively."),ut=u(),w=n("p"),da=i("When "),Ve=n("code"),ua=i("B"),pa=i(" and "),Ue=n("code"),fa=i("C"),ha=i(" receive data from each other, they decrypt it and send it to their local peers, "),ge=n("code"),ma=i("A"),va=i(" and "),He=n("code"),ya=i("D"),wa=i(", respectively."),pt=u(),g=n("h2"),H=n("a"),Re=n("span"),Ea=i("Implementation"),ft=u(),ce=n("p"),_a=i("I loosely say the term encrypt as a means to hide the VPN data from any packet inspection. WireGuard has its own cryptography implementations so we do not need to secure our data. We just need hide the WireGuard protocol pattern (e.g. type bits and reserved bits that are prepended to every WireGuard message) from anything that may be inspecting the data."),ht=u(),R=n("h3"),M=n("a"),Me=n("span"),Pa=i("Server"),mt=u(),de=n("p"),ba=i("Since the server cannot know the client\u2019s address beforehand, it awaits a secret message to set its remote peer. Both the client and server know this secret message."),vt=u(),ue=n("p"),ka=i("The server\u2019s UDP handler flow looks like this:"),yt=u(),ee=n("pre"),pe=n("code"),wt=u(),B=n("h3"),L=n("a"),Be=n("span"),Da=i("Client"),Et=u(),fe=n("p"),Ia=i("The client knows the server\u2019s address beforehand, so there is no need to negotiate it."),_t=u(),he=n("p"),xa=i("The client\u2019s UDP handler flow looks like this:"),Pt=u(),te=n("pre"),me=n("code"),bt=u(),j=n("h2"),K=n("a"),Le=n("span"),Ca=i("WireGuard Configurations"),kt=u(),q=n("h3"),F=n("a"),je=n("span"),Aa=i("Server"),Dt=u(),ae=n("pre"),ve=n("code"),It=u(),Y=n("h3"),z=n("a"),Ke=n("span"),Wa=i("Client"),xt=u(),ne=n("pre"),ye=n("code"),Ct=u(),y=n("p"),Ga=i("You might notice that "),qe=n("code"),Na=i("DisallowedIPs"),Ta=i(" is not a valid WireGuard field. It\u2019s purpose is to allow some IPs to not be routed through WireGuard. Using "),Fe=n("code"),Sa=i("AllowedIPs"),Oa=i(" and "),Ye=n("code"),$a=i("DisallowedIPs"),Va=i(" on this "),se=n("a"),Ua=i("allowed IP calculator"),ga=i(" will give you a valid "),ze=n("code"),Ha=i("AllowedIPs"),Ra=i(" field."),At=u(),Q=n("h2"),J=n("a"),Qe=n("span"),Ma=i("UFW Server Configuration"),Wt=u(),I=n("p"),Ba=i("If you are using "),Je=n("code"),La=i("ufw"),ja=i(" on your server which also runs a WireGuard peer, you should run the following to get the expected behaviour (you may need "),Xe=n("code"),Ka=i("sudo"),qa=i(" if you are not root)."),Gt=u(),oe=n("pre"),we=n("code"),Nt=u(),X=n("h2"),Z=n("a"),Ze=n("span"),Fa=i("Conclusion"),Tt=u(),Ee=n("p"),Ya=i("With the above concepts and configurations, one should be able to hide WireGuard traffic from any DPI and connect to their VPN. It is simple to create such UDP-forwarders with encrypt/decrypt capabilities and any custom obfuscation features that a developer wishes to implement. The resulting traffic appears to be random data with little to no identifying features. Additionally, added overhead for each datagram is up to the developer\u2019s implementation of encryption and/or obfuscation."),this.h()},l(e){f=s(e,"P",{});var r=o(f);_=l(r,"I was recently faced with an issue of being unable to establish a VPN connection in a country that used Deep Packet Inspection (DPI) to examine datagrams and their common patterns."),r.forEach(t),v=p(e),b=s(e,"P",{});var et=o(b);h=l(et,"My project started as a simple chat about VPN\u2019s and how simply one could host their own at home, through the use of a small computer (such as a Raspberry Pi). I set up a VPN at home that very evening with an old Raspberry Pi, using a dynamic DNS service (my ISP did not provide a static IP) and a port-forward on my router (to make it reachable over the internet)."),et.forEach(t),k=p(e),C=s(e,"P",{});var cn=o(C);Ot=l(cn,"There was just one problem, I was traveling soon and I knew VPNs were hard to connect to, due to the use of DPI, at my destination. I set out to find a way to obfuscate the data, such as using a stunnel (tunnel over SSL), but that was slow and only worked with TCP. I opted not to use a VPN over TCP since OpenVPN is a very large codebase and is quite a bit slower, compared to WireGuard."),cn.forEach(t),at=p(e),N=s(e,"H2",{id:!0});var za=o(N);T=s(za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var dn=o(T);Pe=s(dn,"SPAN",{class:!0}),o(Pe).forEach(t),dn.forEach(t),$t=l(za,"Proxy Concept"),za.forEach(t),nt=p(e),re=s(e,"P",{});var un=o(re);Vt=l(un,"What if there was a proxy program that could intercept the datagrams, encrypt their data, then send it to a server which is running a similar proxy program to decrypt that data and send it to where it needs to be."),un.forEach(t),st=p(e),S=s(e,"H3",{id:!0});var Qa=o(S);O=s(Qa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var pn=o(O);be=s(pn,"SPAN",{class:!0}),o(be).forEach(t),pn.forEach(t),Ut=l(Qa,"Typical WireGuard Flow"),Qa.forEach(t),ot=p(e),A=s(e,"P",{});var tt=o(A);ke=s(tt,"CODE",{});var fn=o(ke);gt=l(fn,"A"),fn.forEach(t),Ht=l(tt," and "),De=s(tt,"CODE",{});var hn=o(De);Rt=l(hn,"D"),hn.forEach(t),Mt=l(tt," are WireGuard peers."),tt.forEach(t),rt=p(e),ie=s(e,"P",{});var mn=o(ie);le=s(mn,"IMG",{src:!0,alt:!0}),mn.forEach(t),it=p(e),$=s(e,"H3",{id:!0});var Ja=o($);V=s(Ja,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var vn=o(V);Ie=s(vn,"SPAN",{class:!0}),o(Ie).forEach(t),vn.forEach(t),Bt=l(Ja,"Proxied WireGuard Flow"),Ja.forEach(t),lt=p(e),P=s(e,"P",{});var W=o(P);xe=s(W,"CODE",{});var yn=o(xe);Lt=l(yn,"A"),yn.forEach(t),jt=l(W," and "),Ce=s(W,"CODE",{});var wn=o(Ce);Kt=l(wn,"D"),wn.forEach(t),qt=l(W," are WireGuard peers, they do not communicate directly over the internet, only the proxy servers communicate remotely with the encrypted data. "),Ae=s(W,"CODE",{});var En=o(Ae);Ft=l(En,"B"),En.forEach(t),Yt=l(W," and "),We=s(W,"CODE",{});var _n=o(We);zt=l(_n,"C"),_n.forEach(t),Qt=l(W," are the proxy programs running a server on each machine."),W.forEach(t),ct=p(e),is(U.$$.fragment,e),dt=p(e),m=s(e,"P",{});var E=o(m);Jt=l(E,"When "),Ge=s(E,"CODE",{});var Pn=o(Ge);Xt=l(Pn,"B"),Pn.forEach(t),Zt=l(E," and "),Ne=s(E,"CODE",{});var bn=o(Ne);ea=l(bn,"C"),bn.forEach(t),ta=l(E," receive data from "),Te=s(E,"CODE",{});var kn=o(Te);aa=l(kn,"A"),kn.forEach(t),na=l(E," and "),Se=s(E,"CODE",{});var Dn=o(Se);sa=l(Dn,"D"),Dn.forEach(t),oa=l(E,", respectively, they encrypt and send it to each other, "),Oe=s(E,"CODE",{});var In=o(Oe);ra=l(In,"C"),In.forEach(t),ia=l(E," and "),$e=s(E,"CODE",{});var xn=o($e);la=l(xn,"B"),xn.forEach(t),ca=l(E,", respectively."),E.forEach(t),ut=p(e),w=s(e,"P",{});var x=o(w);da=l(x,"When "),Ve=s(x,"CODE",{});var Cn=o(Ve);ua=l(Cn,"B"),Cn.forEach(t),pa=l(x," and "),Ue=s(x,"CODE",{});var An=o(Ue);fa=l(An,"C"),An.forEach(t),ha=l(x," receive data from each other, they decrypt it and send it to their local peers, "),ge=s(x,"CODE",{});var Wn=o(ge);ma=l(Wn,"A"),Wn.forEach(t),va=l(x," and "),He=s(x,"CODE",{});var Gn=o(He);ya=l(Gn,"D"),Gn.forEach(t),wa=l(x,", respectively."),x.forEach(t),pt=p(e),g=s(e,"H2",{id:!0});var Xa=o(g);H=s(Xa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Nn=o(H);Re=s(Nn,"SPAN",{class:!0}),o(Re).forEach(t),Nn.forEach(t),Ea=l(Xa,"Implementation"),Xa.forEach(t),ft=p(e),ce=s(e,"P",{});var Tn=o(ce);_a=l(Tn,"I loosely say the term encrypt as a means to hide the VPN data from any packet inspection. WireGuard has its own cryptography implementations so we do not need to secure our data. We just need hide the WireGuard protocol pattern (e.g. type bits and reserved bits that are prepended to every WireGuard message) from anything that may be inspecting the data."),Tn.forEach(t),ht=p(e),R=s(e,"H3",{id:!0});var Za=o(R);M=s(Za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Sn=o(M);Me=s(Sn,"SPAN",{class:!0}),o(Me).forEach(t),Sn.forEach(t),Pa=l(Za,"Server"),Za.forEach(t),mt=p(e),de=s(e,"P",{});var On=o(de);ba=l(On,"Since the server cannot know the client\u2019s address beforehand, it awaits a secret message to set its remote peer. Both the client and server know this secret message."),On.forEach(t),vt=p(e),ue=s(e,"P",{});var $n=o(ue);ka=l($n,"The server\u2019s UDP handler flow looks like this:"),$n.forEach(t),yt=p(e),ee=s(e,"PRE",{class:!0});var Vn=o(ee);pe=s(Vn,"CODE",{class:!0});var ws=o(pe);ws.forEach(t),Vn.forEach(t),wt=p(e),B=s(e,"H3",{id:!0});var en=o(B);L=s(en,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Un=o(L);Be=s(Un,"SPAN",{class:!0}),o(Be).forEach(t),Un.forEach(t),Da=l(en,"Client"),en.forEach(t),Et=p(e),fe=s(e,"P",{});var gn=o(fe);Ia=l(gn,"The client knows the server\u2019s address beforehand, so there is no need to negotiate it."),gn.forEach(t),_t=p(e),he=s(e,"P",{});var Hn=o(he);xa=l(Hn,"The client\u2019s UDP handler flow looks like this:"),Hn.forEach(t),Pt=p(e),te=s(e,"PRE",{class:!0});var Rn=o(te);me=s(Rn,"CODE",{class:!0});var Es=o(me);Es.forEach(t),Rn.forEach(t),bt=p(e),j=s(e,"H2",{id:!0});var tn=o(j);K=s(tn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mn=o(K);Le=s(Mn,"SPAN",{class:!0}),o(Le).forEach(t),Mn.forEach(t),Ca=l(tn,"WireGuard Configurations"),tn.forEach(t),kt=p(e),q=s(e,"H3",{id:!0});var an=o(q);F=s(an,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Bn=o(F);je=s(Bn,"SPAN",{class:!0}),o(je).forEach(t),Bn.forEach(t),Aa=l(an,"Server"),an.forEach(t),Dt=p(e),ae=s(e,"PRE",{class:!0});var Ln=o(ae);ve=s(Ln,"CODE",{class:!0});var _s=o(ve);_s.forEach(t),Ln.forEach(t),It=p(e),Y=s(e,"H3",{id:!0});var nn=o(Y);z=s(nn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var jn=o(z);Ke=s(jn,"SPAN",{class:!0}),o(Ke).forEach(t),jn.forEach(t),Wa=l(nn,"Client"),nn.forEach(t),xt=p(e),ne=s(e,"PRE",{class:!0});var Kn=o(ne);ye=s(Kn,"CODE",{class:!0});var Ps=o(ye);Ps.forEach(t),Kn.forEach(t),Ct=p(e),y=s(e,"P",{});var D=o(y);Ga=l(D,"You might notice that "),qe=s(D,"CODE",{});var qn=o(qe);Na=l(qn,"DisallowedIPs"),qn.forEach(t),Ta=l(D," is not a valid WireGuard field. It\u2019s purpose is to allow some IPs to not be routed through WireGuard. Using "),Fe=s(D,"CODE",{});var Fn=o(Fe);Sa=l(Fn,"AllowedIPs"),Fn.forEach(t),Oa=l(D," and "),Ye=s(D,"CODE",{});var Yn=o(Ye);$a=l(Yn,"DisallowedIPs"),Yn.forEach(t),Va=l(D," on this "),se=s(D,"A",{href:!0,rel:!0});var zn=o(se);Ua=l(zn,"allowed IP calculator"),zn.forEach(t),ga=l(D," will give you a valid "),ze=s(D,"CODE",{});var Qn=o(ze);Ha=l(Qn,"AllowedIPs"),Qn.forEach(t),Ra=l(D," field."),D.forEach(t),At=p(e),Q=s(e,"H2",{id:!0});var sn=o(Q);J=s(sn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Jn=o(J);Qe=s(Jn,"SPAN",{class:!0}),o(Qe).forEach(t),Jn.forEach(t),Ma=l(sn,"UFW Server Configuration"),sn.forEach(t),Wt=p(e),I=s(e,"P",{});var _e=o(I);Ba=l(_e,"If you are using "),Je=s(_e,"CODE",{});var Xn=o(Je);La=l(Xn,"ufw"),Xn.forEach(t),ja=l(_e," on your server which also runs a WireGuard peer, you should run the following to get the expected behaviour (you may need "),Xe=s(_e,"CODE",{});var Zn=o(Xe);Ka=l(Zn,"sudo"),Zn.forEach(t),qa=l(_e," if you are not root)."),_e.forEach(t),Gt=p(e),oe=s(e,"PRE",{class:!0});var es=o(oe);we=s(es,"CODE",{class:!0});var bs=o(we);bs.forEach(t),es.forEach(t),Nt=p(e),X=s(e,"H2",{id:!0});var on=o(X);Z=s(on,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ts=o(Z);Ze=s(ts,"SPAN",{class:!0}),o(Ze).forEach(t),ts.forEach(t),Fa=l(on,"Conclusion"),on.forEach(t),Tt=p(e),Ee=s(e,"P",{});var as=o(Ee);Ya=l(as,"With the above concepts and configurations, one should be able to hide WireGuard traffic from any DPI and connect to their VPN. It is simple to create such UDP-forwarders with encrypt/decrypt capabilities and any custom obfuscation features that a developer wishes to implement. The resulting traffic appears to be random data with little to no identifying features. Additionally, added overhead for each datagram is up to the developer\u2019s implementation of encryption and/or obfuscation."),as.forEach(t),this.h()},h(){c(Pe,"class","icon icon-link"),c(T,"aria-hidden","true"),c(T,"tabindex","-1"),c(T,"href","#proxy-concept"),c(N,"id","proxy-concept"),c(be,"class","icon icon-link"),c(O,"aria-hidden","true"),c(O,"tabindex","-1"),c(O,"href","#typical-wireguard-flow"),c(S,"id","typical-wireguard-flow"),ps(le.src,ln="/images/post/vpn-udp-tunnel/wg-flow.svg")||c(le,"src",ln),c(le,"alt","WireGuard tunnel proxy flow"),c(Ie,"class","icon icon-link"),c(V,"aria-hidden","true"),c(V,"tabindex","-1"),c(V,"href","#proxied-wireguard-flow"),c($,"id","proxied-wireguard-flow"),c(Re,"class","icon icon-link"),c(H,"aria-hidden","true"),c(H,"tabindex","-1"),c(H,"href","#implementation"),c(g,"id","implementation"),c(Me,"class","icon icon-link"),c(M,"aria-hidden","true"),c(M,"tabindex","-1"),c(M,"href","#server"),c(R,"id","server"),c(pe,"class","language-text"),c(ee,"class","language-text"),c(Be,"class","icon icon-link"),c(L,"aria-hidden","true"),c(L,"tabindex","-1"),c(L,"href","#client"),c(B,"id","client"),c(me,"class","language-text"),c(te,"class","language-text"),c(Le,"class","icon icon-link"),c(K,"aria-hidden","true"),c(K,"tabindex","-1"),c(K,"href","#wireguard-configurations"),c(j,"id","wireguard-configurations"),c(je,"class","icon icon-link"),c(F,"aria-hidden","true"),c(F,"tabindex","-1"),c(F,"href","#server-1"),c(q,"id","server-1"),c(ve,"class","language-yaml"),c(ae,"class","language-yaml"),c(Ke,"class","icon icon-link"),c(z,"aria-hidden","true"),c(z,"tabindex","-1"),c(z,"href","#client-1"),c(Y,"id","client-1"),c(ye,"class","language-yaml"),c(ne,"class","language-yaml"),c(se,"href","https://www.procustodibus.com/blog/2021/03/wireguard-allowedips-calculator/"),c(se,"rel","nofollow"),c(Qe,"class","icon icon-link"),c(J,"aria-hidden","true"),c(J,"tabindex","-1"),c(J,"href","#ufw-server-configuration"),c(Q,"id","ufw-server-configuration"),c(we,"class","language-bash"),c(oe,"class","language-bash"),c(Ze,"class","icon icon-link"),c(Z,"aria-hidden","true"),c(Z,"tabindex","-1"),c(Z,"href","#conclusion"),c(X,"id","conclusion")},m(e,r){d(e,f,r),a(f,_),d(e,v,r),d(e,b,r),a(b,h),d(e,k,r),d(e,C,r),a(C,Ot),d(e,at,r),d(e,N,r),a(N,T),a(T,Pe),a(N,$t),d(e,nt,r),d(e,re,r),a(re,Vt),d(e,st,r),d(e,S,r),a(S,O),a(O,be),a(S,Ut),d(e,ot,r),d(e,A,r),a(A,ke),a(ke,gt),a(A,Ht),a(A,De),a(De,Rt),a(A,Mt),d(e,rt,r),d(e,ie,r),a(ie,le),d(e,it,r),d(e,$,r),a($,V),a(V,Ie),a($,Bt),d(e,lt,r),d(e,P,r),a(P,xe),a(xe,Lt),a(P,jt),a(P,Ce),a(Ce,Kt),a(P,qt),a(P,Ae),a(Ae,Ft),a(P,Yt),a(P,We),a(We,zt),a(P,Qt),d(e,ct,r),ls(U,e,r),d(e,dt,r),d(e,m,r),a(m,Jt),a(m,Ge),a(Ge,Xt),a(m,Zt),a(m,Ne),a(Ne,ea),a(m,ta),a(m,Te),a(Te,aa),a(m,na),a(m,Se),a(Se,sa),a(m,oa),a(m,Oe),a(Oe,ra),a(m,ia),a(m,$e),a($e,la),a(m,ca),d(e,ut,r),d(e,w,r),a(w,da),a(w,Ve),a(Ve,ua),a(w,pa),a(w,Ue),a(Ue,fa),a(w,ha),a(w,ge),a(ge,ma),a(w,va),a(w,He),a(He,ya),a(w,wa),d(e,pt,r),d(e,g,r),a(g,H),a(H,Re),a(g,Ea),d(e,ft,r),d(e,ce,r),a(ce,_a),d(e,ht,r),d(e,R,r),a(R,M),a(M,Me),a(R,Pa),d(e,mt,r),d(e,de,r),a(de,ba),d(e,vt,r),d(e,ue,r),a(ue,ka),d(e,yt,r),d(e,ee,r),a(ee,pe),pe.innerHTML=fs,d(e,wt,r),d(e,B,r),a(B,L),a(L,Be),a(B,Da),d(e,Et,r),d(e,fe,r),a(fe,Ia),d(e,_t,r),d(e,he,r),a(he,xa),d(e,Pt,r),d(e,te,r),a(te,me),me.innerHTML=hs,d(e,bt,r),d(e,j,r),a(j,K),a(K,Le),a(j,Ca),d(e,kt,r),d(e,q,r),a(q,F),a(F,je),a(q,Aa),d(e,Dt,r),d(e,ae,r),a(ae,ve),ve.innerHTML=ms,d(e,It,r),d(e,Y,r),a(Y,z),a(z,Ke),a(Y,Wa),d(e,xt,r),d(e,ne,r),a(ne,ye),ye.innerHTML=vs,d(e,Ct,r),d(e,y,r),a(y,Ga),a(y,qe),a(qe,Na),a(y,Ta),a(y,Fe),a(Fe,Sa),a(y,Oa),a(y,Ye),a(Ye,$a),a(y,Va),a(y,se),a(se,Ua),a(y,ga),a(y,ze),a(ze,Ha),a(y,Ra),d(e,At,r),d(e,Q,r),a(Q,J),a(J,Qe),a(Q,Ma),d(e,Wt,r),d(e,I,r),a(I,Ba),a(I,Je),a(Je,La),a(I,ja),a(I,Xe),a(Xe,Ka),a(I,qa),d(e,Gt,r),d(e,oe,r),a(oe,we),we.innerHTML=ys,d(e,Nt,r),d(e,X,r),a(X,Z),a(Z,Ze),a(X,Fa),d(e,Tt,r),d(e,Ee,r),a(Ee,Ya),St=!0},p(e,r){const et={};r&2&&(et.$$scope={dirty:r,ctx:e}),U.$set(et)},i(e){St||(cs(U.$$.fragment,e),St=!0)},o(e){ds(U.$$.fragment,e),St=!1},d(e){e&&t(f),e&&t(v),e&&t(b),e&&t(k),e&&t(C),e&&t(at),e&&t(N),e&&t(nt),e&&t(re),e&&t(st),e&&t(S),e&&t(ot),e&&t(A),e&&t(rt),e&&t(ie),e&&t(it),e&&t($),e&&t(lt),e&&t(P),e&&t(ct),us(U,e),e&&t(dt),e&&t(m),e&&t(ut),e&&t(w),e&&t(pt),e&&t(g),e&&t(ft),e&&t(ce),e&&t(ht),e&&t(R),e&&t(mt),e&&t(de),e&&t(vt),e&&t(ue),e&&t(yt),e&&t(ee),e&&t(wt),e&&t(B),e&&t(Et),e&&t(fe),e&&t(_t),e&&t(he),e&&t(Pt),e&&t(te),e&&t(bt),e&&t(j),e&&t(kt),e&&t(q),e&&t(Dt),e&&t(ae),e&&t(It),e&&t(Y),e&&t(xt),e&&t(ne),e&&t(Ct),e&&t(y),e&&t(At),e&&t(Q),e&&t(Wt),e&&t(I),e&&t(Gt),e&&t(oe),e&&t(Nt),e&&t(X),e&&t(Tt),e&&t(Ee)}}}function Ts(G){let f,_;const v=[G[0],os];let b={$$slots:{default:[Ns]},$$scope:{ctx:G}};for(let h=0;h<v.length;h+=1)b=rn(b,v[h]);return f=new As({props:b}),{c(){rs(f.$$.fragment)},l(h){is(f.$$.fragment,h)},m(h,k){ls(f,h,k),_=!0},p(h,[k]){const C=k&1?xs(v,[k&1&&ns(h[0]),k&0&&ns(os)]):{};k&2&&(C.$$scope={dirty:k,ctx:h}),f.$set(C)},i(h){_||(cs(f.$$.fragment,h),_=!0)},o(h){ds(f.$$.fragment,h),_=!1},d(h){us(f,h)}}}const os={title:"Securely Tunneling WireGuard VPN's UDP Traffic",date:"Aug 29, 2022",readmin:0,intro:"It is sometimes not possible to establish a VPN connection due to a country or an organization's restrictions and their counter-measures. This article outlines how UDP traffic can be routed through a proxy to encrypt data, enabling the connection of a UDP-based VPN, such as those using the WireGuard protocol."};function Ss(G,f,_){return G.$$set=v=>{_(0,f=rn(rn({},f),ss(v)))},f=ss(f),[f]}class Us extends ks{constructor(f){super(),Ds(this,f,Ss,Ts,Is,{})}}export{Us as default,os as metadata};