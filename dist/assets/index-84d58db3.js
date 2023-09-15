(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function L(){}function je(t){return t()}function we(){return Object.create(null)}function ce(t){t.forEach(je)}function ze(t){return typeof t=="function"}function fe(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Te(t){return Object.keys(t).length===0}function qe(t,...n){if(t==null)return L;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function De(t,n,r){t.$$.on_destroy.push(qe(n,r))}function h(t,n){t.appendChild(n)}function R(t,n,r){t.insertBefore(n,r||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function He(t,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(n)}function B(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function de(t){return document.createTextNode(t)}function Ne(){return de(" ")}function ke(t,n,r,l){return t.addEventListener(n,r,l),()=>t.removeEventListener(n,r,l)}function e(t,n,r){r==null?t.removeAttribute(n):t.getAttribute(n)!==r&&t.setAttribute(n,r)}function Be(t){return Array.from(t.childNodes)}function Ae(t,n){n=""+n,t.data!==n&&(t.data=n)}function E(t,n,r,l){r==null?t.style.removeProperty(n):t.style.setProperty(n,r,l?"important":"")}let ve;function oe(t){ve=t}const le=[],be=[];let ie=[];const Ee=[],Re=Promise.resolve();let ye=!1;function Fe(){ye||(ye=!0,Re.then(Pe))}function _e(t){ie.push(t)}const $e=new Set;let re=0;function Pe(){if(re!==0)return;const t=ve;do{try{for(;re<le.length;){const n=le[re];re++,oe(n),Ie(n.$$)}}catch(n){throw le.length=0,re=0,n}for(oe(null),le.length=0,re=0;be.length;)be.pop()();for(let n=0;n<ie.length;n+=1){const r=ie[n];$e.has(r)||($e.add(r),r())}ie.length=0}while(le.length);for(;Ee.length;)Ee.pop()();ye=!1,$e.clear(),oe(t)}function Ie(t){if(t.fragment!==null){t.update(),ce(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_e)}}function Ge(t){const n=[],r=[];ie.forEach(l=>t.indexOf(l)===-1?n.push(l):r.push(l)),r.forEach(l=>l()),ie=n}const he=new Set;let Ke;function p(t,n){t&&t.i&&(he.delete(t),t.i(n))}function y(t,n,r,l){if(t&&t.o){if(he.has(t))return;he.add(t),Ke.c.push(()=>{he.delete(t),l&&(r&&t.d(1),l())}),t.o(n)}else l&&l()}function _(t){t&&t.c()}function $(t,n,r,l){const{fragment:s,after_update:i}=t.$$;s&&s.m(n,r),l||_e(()=>{const f=t.$$.on_mount.map(je).filter(ze);t.$$.on_destroy?t.$$.on_destroy.push(...f):ce(f),t.$$.on_mount=[]}),i.forEach(_e)}function b(t,n){const r=t.$$;r.fragment!==null&&(Ge(r.after_update),ce(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function Ve(t,n){t.$$.dirty[0]===-1&&(le.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function me(t,n,r,l,s,i,f,c=[-1]){const u=ve;oe(t);const o=t.$$={fragment:null,ctx:[],props:i,update:L,not_equal:s,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:we(),dirty:c,skip_bound:!1,root:n.target||u.$$.root};f&&f(o.root);let a=!1;if(o.ctx=r?r(t,n.props||{},(m,x,...w)=>{const k=w.length?w[0]:x;return o.ctx&&s(o.ctx[m],o.ctx[m]=k)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](k),a&&Ve(t,m)),x}):[],o.update(),a=!0,ce(o.before_update),o.fragment=l?l(o.ctx):!1,n.target){if(n.hydrate){const m=Be(n.target);o.fragment&&o.fragment.l(m),m.forEach(H)}else o.fragment&&o.fragment.c();n.intro&&p(t.$$.fragment),$(t,n.target,n.anchor,n.customElement),Pe()}oe(u)}class pe{$destroy(){b(this,1),this.$destroy=L}$on(n,r){if(!ze(r))return L;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(r),()=>{const s=l.indexOf(r);s!==-1&&l.splice(s,1)}}$set(n){this.$$set&&!Te(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const se=[];function Je(t,n=L){let r;const l=new Set;function s(c){if(fe(t,c)&&(t=c,r)){const u=!se.length;for(const o of l)o[1](),se.push(o,t);if(u){for(let o=0;o<se.length;o+=2)se[o][0](se[o+1]);se.length=0}}}function i(c){s(c(t))}function f(c,u=L){const o=[c,u];return l.add(o),l.size===1&&(r=n(s)||L),c(t),()=>{l.delete(o),l.size===0&&r&&(r(),r=null)}}return{set:s,update:i,subscribe:f}}const Ce=Je([]);function Le(t,n,r){const l=t.slice();return l[1]=n[r],l}function Oe(t){let n,r=t[1]+"",l;return{c(){n=B("li"),l=de(r),e(n,"class","svelte-eb150j")},m(s,i){R(s,n,i),h(n,l)},p(s,i){i&1&&r!==(r=s[1]+"")&&Ae(l,r)},d(s){s&&H(n)}}}function Qe(t){let n,r,l=t[0],s=[];for(let i=0;i<l.length;i+=1)s[i]=Oe(Le(t,l,i));return{c(){n=B("div"),r=B("ul");for(let i=0;i<s.length;i+=1)s[i].c();e(n,"class","svelte-eb150j")},m(i,f){R(i,n,f),h(n,r);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(r,null)},p(i,[f]){if(f&1){l=i[0];let c;for(c=0;c<l.length;c+=1){const u=Le(i,l,c);s[c]?s[c].p(u,f):(s[c]=Oe(u),s[c].c(),s[c].m(r,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}},i:L,o:L,d(i){i&&H(n),He(s,i)}}}function Ue(t,n,r){let l;return De(t,Ce,s=>r(0,l=s)),[l]}class We extends pe{constructor(n){super(),me(this,n,Ue,Qe,fe,{})}}function Xe(t){let n,r,l,s,i,f,c,u;return{c(){n=d("ellipse"),r=Ne(),l=d("text"),s=de(t[0]),e(n,"cx",t[1]),e(n,"cy",t[2]),e(n,"rx","20"),e(n,"ry","20"),e(n,"stroke","rgb(0, 0, 0)"),e(n,"pointer-events","all"),e(n,"class","svelte-1mzrk75"),e(l,"x",i=t[1]-4),e(l,"y",f=t[2]+8),e(l,"class","svelte-1mzrk75")},m(o,a){R(o,n,a),t[5](n),R(o,r,a),R(o,l,a),h(l,s),c||(u=[ke(n,"click",t[4]),ke(l,"click",t[4])],c=!0)},p(o,[a]){a&2&&e(n,"cx",o[1]),a&4&&e(n,"cy",o[2]),a&1&&Ae(s,o[0]),a&2&&i!==(i=o[1]-4)&&e(l,"x",i),a&4&&f!==(f=o[2]+8)&&e(l,"y",f)},i:L,o:L,d(o){o&&H(n),t[5](null),o&&H(r),o&&H(l),c=!1,ce(u)}}}const Se="red",Ye="white";function Ze(t,n,r){let{no:l=0}=n,{cx:s=0}=n,{cy:i=0}=n,f;const c=a=>{Ce.update(m=>(console.log(l,a,new Date().toLocaleTimeString()),m.push(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}  [ ${l} ]  ${a}`),m))},u=a=>{f.style.fill==Se?(r(3,f.style.fill=Ye,f),c("non active")):(r(3,f.style.fill=Se,f),c("active"))};function o(a){be[a?"unshift":"push"](()=>{f=a,r(3,f)})}return t.$$set=a=>{"no"in a&&r(0,l=a.no),"cx"in a&&r(1,s=a.cx),"cy"in a&&r(2,i=a.cy)},[l,s,i,f,u,o]}class v extends pe{constructor(n){super(),me(this,n,Ze,Xe,fe,{no:0,cx:1,cy:2})}}function et(t){let n,r,l,s,i,f,c,u,o,a,m,x,w,k,O,S,z,N,A,P,C,M,T,F,I,G,K,V,J,Q,U,W,X,Y,Z,ee,te,ne,ue,ae,q,j,D,xe,ge;return F=new v({props:{cx:110,cy:384,no:1}}),I=new v({props:{cx:360,cy:384,no:2}}),G=new v({props:{cx:580,cy:384,no:3}}),K=new v({props:{cx:820,cy:384,no:4}}),V=new v({props:{cx:110,cy:290,no:5}}),J=new v({props:{cx:360,cy:290,no:6}}),Q=new v({props:{cx:580,cy:290,no:7}}),U=new v({props:{cx:820,cy:290,no:8}}),W=new v({props:{cx:110,cy:200,no:9}}),X=new v({props:{cx:360,cy:200,no:10}}),Y=new v({props:{cx:580,cy:200,no:11}}),Z=new v({props:{cx:820,cy:200,no:12}}),ee=new v({props:{cx:580,cy:120,no:13}}),te=new v({props:{cx:820,cy:120,no:14}}),ne=new v({props:{cx:110,cy:30,no:40}}),{c(){n=B("div"),r=d("svg"),l=d("defs"),s=d("g"),i=d("rect"),f=d("rect"),c=d("rect"),u=d("rect"),o=d("rect"),a=d("rect"),m=d("rect"),x=d("rect"),w=d("rect"),k=d("rect"),O=d("rect"),S=d("rect"),z=d("rect"),N=d("rect"),A=d("rect"),P=d("rect"),C=d("rect"),M=d("rect"),T=d("rect"),_(F.$$.fragment),_(I.$$.fragment),_(G.$$.fragment),_(K.$$.fragment),_(V.$$.fragment),_(J.$$.fragment),_(Q.$$.fragment),_(U.$$.fragment),_(W.$$.fragment),_(X.$$.fragment),_(Y.$$.fragment),_(Z.$$.fragment),_(ee.$$.fragment),_(te.$$.fragment),_(ne.$$.fragment),ue=d("g"),ae=d("switch"),q=d("foreignObject"),j=B("div"),j.innerHTML=`<div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">教卓</div></div> 
                        `,D=d("text"),xe=de("教卓"),e(i,"x","70"),e(i,"y","440"),e(i,"width","350"),e(i,"height","60"),e(i,"fill","rgb(255, 255, 255)"),e(i,"stroke","rgb(0, 0, 0)"),e(i,"pointer-events","all"),e(i,"class","svelte-1fm6bco"),e(f,"x","0"),e(f,"y","354"),e(f,"width","420"),e(f,"height","60"),e(f,"fill","rgb(255, 255, 255)"),e(f,"stroke","rgb(0, 0, 0)"),e(f,"pointer-events","all"),e(f,"class","svelte-1fm6bco"),e(c,"x","0"),e(c,"y","260"),e(c,"width","420"),e(c,"height","60"),e(c,"fill","rgb(255, 255, 255)"),e(c,"stroke","rgb(0, 0, 0)"),e(c,"pointer-events","all"),e(c,"class","svelte-1fm6bco"),e(u,"x","70"),e(u,"y","170"),e(u,"width","350"),e(u,"height","60"),e(u,"fill","rgb(255, 255, 255)"),e(u,"stroke","rgb(0, 0, 0)"),e(u,"pointer-events","all"),e(u,"class","svelte-1fm6bco"),e(o,"x","70"),e(o,"y","80"),e(o,"width","350"),e(o,"height","60"),e(o,"fill","rgb(255, 255, 255)"),e(o,"stroke","rgb(0, 0, 0)"),e(o,"pointer-events","all"),e(o,"class","svelte-1fm6bco"),e(a,"x","70"),e(a,"y","0"),e(a,"width","350"),e(a,"height","60"),e(a,"fill","rgb(255, 255, 255)"),e(a,"stroke","rgb(0, 0, 0)"),e(a,"pointer-events","all"),e(a,"class","svelte-1fm6bco"),e(m,"x","450"),e(m,"y","440"),e(m,"width","420"),e(m,"height","60"),e(m,"fill","rgb(255, 255, 255)"),e(m,"stroke","rgb(0, 0, 0)"),e(m,"pointer-events","all"),e(m,"class","svelte-1fm6bco"),e(x,"x","450"),e(x,"y","354"),e(x,"width","420"),e(x,"height","60"),e(x,"fill","rgb(255, 255, 255)"),e(x,"stroke","rgb(0, 0, 0)"),e(x,"pointer-events","all"),e(x,"class","svelte-1fm6bco"),e(w,"x","450"),e(w,"y","174"),e(w,"width","420"),e(w,"height","60"),e(w,"fill","rgb(255, 255, 255)"),e(w,"stroke","rgb(0, 0, 0)"),e(w,"pointer-events","all"),e(w,"class","svelte-1fm6bco"),e(k,"x","450"),e(k,"y","260"),e(k,"width","420"),e(k,"height","60"),e(k,"fill","rgb(255, 255, 255)"),e(k,"stroke","rgb(0, 0, 0)"),e(k,"pointer-events","all"),e(k,"class","svelte-1fm6bco"),e(O,"x","450"),e(O,"y","0"),e(O,"width","420"),e(O,"height","60"),e(O,"fill","rgb(255, 255, 255)"),e(O,"stroke","rgb(0, 0, 0)"),e(O,"pointer-events","all"),e(O,"class","svelte-1fm6bco"),e(S,"x","450"),e(S,"y","86"),e(S,"width","420"),e(S,"height","60"),e(S,"fill","rgb(255, 255, 255)"),e(S,"stroke","rgb(0, 0, 0)"),e(S,"pointer-events","all"),e(S,"class","svelte-1fm6bco"),e(z,"x","900"),e(z,"y","440"),e(z,"width","220"),e(z,"height","60"),e(z,"stroke","rgb(0, 0, 0)"),e(z,"pointer-events","all"),e(z,"class","svelte-1fm6bco"),e(N,"x","900"),e(N,"y","354"),e(N,"width","220"),e(N,"height","60"),e(N,"stroke","rgb(0, 0, 0)"),e(N,"pointer-events","all"),e(N,"class","svelte-1fm6bco"),e(A,"x","900"),e(A,"y","260"),e(A,"width","220"),e(A,"height","60"),e(A,"stroke","rgb(0, 0, 0)"),e(A,"pointer-events","all"),e(A,"class","svelte-1fm6bco"),e(P,"x","900"),e(P,"y","174"),e(P,"width","220"),e(P,"height","60"),e(P,"stroke","rgb(0, 0, 0)"),e(P,"pointer-events","all"),e(P,"class","svelte-1fm6bco"),e(C,"x","900"),e(C,"y","86"),e(C,"width","220"),e(C,"height","60"),e(C,"stroke","rgb(0, 0, 0)"),e(C,"pointer-events","all"),e(C,"class","svelte-1fm6bco"),e(M,"x","900"),e(M,"y","0"),e(M,"width","220"),e(M,"height","60"),e(M,"stroke","rgb(0, 0, 0)"),e(M,"pointer-events","all"),e(M,"class","svelte-1fm6bco"),e(T,"x","480"),e(T,"y","540"),e(T,"width","220"),e(T,"height","60"),e(T,"stroke","rgb(0, 0, 0)"),e(T,"pointer-events","all"),e(T,"class","svelte-1fm6bco"),E(j,"display","flex"),E(j,"align-items","unsafe center"),E(j,"justify-content","unsafe center"),E(j,"width","218px"),E(j,"height","1px"),E(j,"padding-top","570px"),E(j,"margin-left","481px"),e(q,"pointer-events","none"),e(q,"width","100%"),e(q,"height","100%"),e(q,"requiredFeatures","http://www.w3.org/TR/SVG11/feature#Extensibility"),E(q,"overflow","visible"),E(q,"text-align","left"),e(D,"x","590"),e(D,"y","574"),e(D,"fill","rgb(0, 0, 0)"),e(D,"font-family","Helvetica"),e(D,"font-size","12px"),e(D,"text-anchor","middle"),e(ue,"transform","translate(-0.5 -0.5)"),e(r,"xmlns","http://www.w3.org/2000/svg"),e(r,"xmlns:xlink","http://www.w3.org/1999/xlink"),e(r,"version","1.1"),e(r,"width","1121px"),e(r,"height","601px"),e(r,"viewBox","-0.5 -0.5 1121 601"),E(r,"background-color","rgb(255, 255, 255)"),e(r,"class","svelte-1fm6bco")},m(g,Me){R(g,n,Me),h(n,r),h(r,l),h(r,s),h(s,i),h(s,f),h(s,c),h(s,u),h(s,o),h(s,a),h(s,m),h(s,x),h(s,w),h(s,k),h(s,O),h(s,S),h(s,z),h(s,N),h(s,A),h(s,P),h(s,C),h(s,M),h(s,T),$(F,s,null),$(I,s,null),$(G,s,null),$(K,s,null),$(V,s,null),$(J,s,null),$(Q,s,null),$(U,s,null),$(W,s,null),$(X,s,null),$(Y,s,null),$(Z,s,null),$(ee,s,null),$(te,s,null),$(ne,s,null),h(s,ue),h(ue,ae),h(ae,q),h(q,j),h(ae,D),h(D,xe),ge=!0},p:L,i(g){ge||(p(F.$$.fragment,g),p(I.$$.fragment,g),p(G.$$.fragment,g),p(K.$$.fragment,g),p(V.$$.fragment,g),p(J.$$.fragment,g),p(Q.$$.fragment,g),p(U.$$.fragment,g),p(W.$$.fragment,g),p(X.$$.fragment,g),p(Y.$$.fragment,g),p(Z.$$.fragment,g),p(ee.$$.fragment,g),p(te.$$.fragment,g),p(ne.$$.fragment,g),ge=!0)},o(g){y(F.$$.fragment,g),y(I.$$.fragment,g),y(G.$$.fragment,g),y(K.$$.fragment,g),y(V.$$.fragment,g),y(J.$$.fragment,g),y(Q.$$.fragment,g),y(U.$$.fragment,g),y(W.$$.fragment,g),y(X.$$.fragment,g),y(Y.$$.fragment,g),y(Z.$$.fragment,g),y(ee.$$.fragment,g),y(te.$$.fragment,g),y(ne.$$.fragment,g),ge=!1},d(g){g&&H(n),b(F),b(I),b(G),b(K),b(V),b(J),b(Q),b(U),b(W),b(X),b(Y),b(Z),b(ee),b(te),b(ne)}}}function tt(t){return[]}class nt extends pe{constructor(n){super(),me(this,n,tt,et,fe,{})}}function rt(t){let n,r,l,s,i,f,c;return l=new nt({}),f=new We({}),{c(){n=B("main"),r=B("div"),_(l.$$.fragment),s=Ne(),i=B("div"),_(f.$$.fragment),E(r,"height","50vh"),E(i,"height","50vh"),E(n,"height","100vh")},m(u,o){R(u,n,o),h(n,r),$(l,r,null),h(n,s),h(n,i),$(f,i,null),c=!0},p:L,i(u){c||(p(l.$$.fragment,u),p(f.$$.fragment,u),c=!0)},o(u){y(l.$$.fragment,u),y(f.$$.fragment,u),c=!1},d(u){u&&H(n),b(l),b(f)}}}class st extends pe{constructor(n){super(),me(this,n,null,rt,fe,{})}}new st({target:document.getElementById("app")});
