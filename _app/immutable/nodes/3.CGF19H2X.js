var Ct=Object.defineProperty;var Lt=(s,e,t)=>e in s?Ct(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var y=(s,e,t)=>(Lt(s,typeof e!="symbol"?e+"":e,t),t);import{s as Bt,k as Ke,x as ze,n as ve,r as xe,o as St}from"../chunks/scheduler.BeaK0CkN.js";import{S as Tt,i as Nt,e as g,s as B,c as b,a as N,k as K,f as T,d as _,m as c,g as L,h as f,A as V,B as _e,l as E,C as re,t as ye,b as Ie,j as je,D as oe,p as ce,E as We,w as At,x as Et,y as Ot,n as Vt,o as Dt,z as Gt}from"../chunks/index.Ry5_aQ6Z.js";function q(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const Mt=!0,Yt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Mt},Symbol.toStringTag,{value:"Module"}));class Je{constructor(e,t){y(this,"parentTable");y(this,"level");y(this,"power");y(this,"defense");y(this,"agility");y(this,"attackSpeed");y(this,"attackSize");y(this,"intensity");y(this,"regeneration");y(this,"piercing");y(this,"resistance");y(this,"powerIncrement");y(this,"defenseIncrement");y(this,"agilityIncrement");y(this,"attackSpeedIncrement");y(this,"attackSizeIncrement");y(this,"intensityIncrement");y(this,"regenerationIncrement");y(this,"piercingIncrement");y(this,"resistanceIncrement");y(this,"insanity");y(this,"warding");y(this,"drawback");y(this,"durability");y(this,"magicStorage");y(this,"ramDefense");y(this,"ramStrength");y(this,"resilience");y(this,"speed");y(this,"stability");y(this,"turning");this.parentTable=t,this.level=e,this.power=0,this.defense=0,this.agility=0,this.attackSpeed=0,this.attackSize=0,this.intensity=0,this.regeneration=0,this.piercing=0,this.resistance=0,this.powerIncrement=0,this.defenseIncrement=0,this.agilityIncrement=0,this.attackSpeedIncrement=0,this.attackSizeIncrement=0,this.intensityIncrement=0,this.regenerationIncrement=0,this.piercingIncrement=0,this.resistanceIncrement=0,this.insanity=0,this.warding=0,this.drawback=0,this.durability=0,this.magicStorage=0,this.ramDefense=0,this.ramStrength=0,this.resilience=0,this.speed=0,this.stability=0,this.turning=0}getData(){let e={level:this.level};for(const t in this)["parentTable","level"].includes(t)||this.hasOwnProperty(t)&&this.parentTable.visiBools[t].bool===!0&&this[t]!==0&&(e[t]=this[t]);return e}}class Pt{constructor(e,t,l){y(this,"minLevel");y(this,"maxLevel");y(this,"levelVisibility");y(this,"columns");y(this,"visiBools");y(this,"validModifiers");this.minLevel=e,this.maxLevel=t,this.levelVisibility=l,this.columns=[],this.visiBools={power:{bool:!1,text:"Power",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},defense:{bool:!1,text:"Defense",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/defense.png"},agility:{bool:!1,text:"Agility",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/agility.png"},attackSpeed:{bool:!1,text:"Attack Speed",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSpeed.png"},attackSize:{bool:!1,text:"Attack Size",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSize.png"},intensity:{bool:!1,text:"Intensity",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/intensity.png"},regeneration:{bool:!1,text:"Regeneration",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},piercing:{bool:!1,text:"Piercing",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},resistance:{bool:!1,text:"Resistance",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},powerIncrement:{bool:!1,text:"Power Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},defenseIncrement:{bool:!1,text:"Defense Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/defense.png"},agilityIncrement:{bool:!1,text:"Agility Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/agility.png"},attackSpeedIncrement:{bool:!1,text:"Attack Speed Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSpeed.png"},attackSizeIncrement:{bool:!1,text:"Attack Size Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/attackSize.png"},intensityIncrement:{bool:!1,text:"Intensity Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/intensity.png"},regenerationIncrement:{bool:!1,text:"Regeneration Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},piercingIncrement:{bool:!1,text:"Piercing Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},resistanceIncrement:{bool:!1,text:"Resistance Increment",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/power.png"},insanity:{bool:!1,text:"Insanity",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/insanity.png"},warding:{bool:!1,text:"Warding",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/warding.png"},drawback:{bool:!1,text:"Drawback",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/drawback.png"},durability:{bool:!1,text:"Durability",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/durability.png"},magicStorage:{bool:!1,text:"Magic Storage",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/magicStorage.png"},ramDefense:{bool:!1,text:"Ram Defense",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/ramDefense.png"},ramStrength:{bool:!1,text:"Ram Strength",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/ramStrength.png"},resilience:{bool:!1,text:"Resilience",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/resilience.png"},speed:{bool:!1,text:"Speed",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/speed.png"},stability:{bool:!1,text:"Stability",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/stability.png"},turning:{bool:!1,text:"Turning",imageId:"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/stats/turning.png"}},this.validModifiers={"Atlantean Essence":!1,Frozen:!1,Archaic:!1,Sandy:!1,Superheated:!1,Drowned:!1,Blasted:!1,Crystalline:!1};for(let i=e;i<=t;i+=10)this.columns.push(new Je(i,this));this.updateColumns()}getColumns(){return this.columns}updateColumns(){if(this.levelVisibility){const e=Math.min(this.minLevel,this.maxLevel),t=Math.max(this.minLevel,this.maxLevel),l=this.columns.filter(n=>e<=n.level&&n.level<=t),i=[];for(let n=e;n<=t;n+=10){let r=l.find(u=>u.level===n);r?i.push(r):i.push(new Je(n,this))}this.minLevel=e,this.maxLevel=t,this.columns=i}else this.columns.length>1&&(this.columns=[new Je(0,this)])}getData(){let e=this.columns.map(t=>t.getData());return this.levelVisibility?e:(delete e[0].level,e[0])}}function tt(s,e,t){const l=s.slice();return l[31]=e[t],l[32]=e,l[33]=t,l}function lt(s,e,t){const l=s.slice();return l[34]=e[t],l[35]=e,l[36]=t,l}function st(s,e,t){const l=s.slice();return l[37]=e[t],l}function it(s,e,t){const l=s.slice();return l[34]=e[t],l[40]=e,l[41]=t,l}function nt(s,e,t){const l=s.slice();return l[34]=e[t],l[42]=e,l[43]=t,l}function at(s,e,t){const l=s.slice();return l[44]=e[t],l}function rt(s,e,t){const l=s.slice();return l[47]=e[t],l}function ot(s,e,t){const l=s.slice();return l[47]=e[t],l}function ct(s){let e,t=s[47]+"",l;return{c(){e=g("option"),l=ye(t),this.h()},l(i){e=b(i,"OPTION",{});var n=N(e);l=Ie(n,t),n.forEach(_),this.h()},h(){e.__value=s[47],V(e,e.__value)},m(i,n){L(i,e,n),f(e,l)},p:ve,d(i){i&&_(e)}}}function ut(s){let e,t,l="Sub Type:",i,n,r,u,m=q(s[5].mainType[s[3].mainType].subTypes),p=[];for(let v=0;v<m.length;v+=1)p[v]=ft(rt(s,m,v));return{c(){e=g("div"),t=g("label"),t.textContent=l,i=B(),n=g("select");for(let v=0;v<p.length;v+=1)p[v].c();this.h()},l(v){e=b(v,"DIV",{class:!0});var h=N(e);t=b(h,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(t)!=="svelte-7t9qr9"&&(t.textContent=l),i=T(h),n=b(h,"SELECT",{id:!0,class:!0});var d=N(n);for(let k=0;k<p.length;k+=1)p[k].l(d);d.forEach(_),h.forEach(_),this.h()},h(){c(t,"for","rarity"),c(t,"class","svelte-rlicl9"),c(n,"id","rarity"),c(n,"class","w-full p-2 rounded-sm"),s[3].subType===void 0&&Ke(()=>s[15].call(n)),c(e,"class","flex flex-col w-96 mr-5")},m(v,h){L(v,e,h),f(e,t),f(e,i),f(e,n);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(n,null);_e(n,s[3].subType,!0),r||(u=E(n,"change",s[15]),r=!0)},p(v,h){if(h[0]&40){m=q(v[5].mainType[v[3].mainType].subTypes);let d;for(d=0;d<m.length;d+=1){const k=rt(v,m,d);p[d]?p[d].p(k,h):(p[d]=ft(k),p[d].c(),p[d].m(n,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=m.length}h[0]&40&&_e(n,v[3].subType)},d(v){v&&_(e),re(p,v),r=!1,u()}}}function ft(s){let e,t=s[47]+"",l,i;return{c(){e=g("option"),l=ye(t),this.h()},l(n){e=b(n,"OPTION",{});var r=N(e);l=Ie(r,t),r.forEach(_),this.h()},h(){e.__value=i=s[47],V(e,e.__value)},m(n,r){L(n,e,r),f(e,l)},p(n,r){r[0]&8&&t!==(t=n[47]+"")&&je(l,t),r[0]&40&&i!==(i=n[47])&&(e.__value=i,V(e,e.__value))},d(n){n&&_(e)}}}function mt(s){let e,t,l="Minimum Level:",i,n,r,u,m,p,v="Maximum Level:",h,d,k,Y,W;return{c(){e=g("div"),t=g("label"),t.textContent=l,i=B(),n=g("input"),u=B(),m=g("div"),p=g("label"),p.textContent=v,h=B(),d=g("input"),this.h()},l(C){e=b(C,"DIV",{class:!0});var O=N(e);t=b(O,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1fq6y30"&&(t.textContent=l),i=T(O),n=b(O,"INPUT",{type:!0,id:!0,min:!0,max:!0,step:!0,class:!0}),O.forEach(_),u=T(C),m=b(C,"DIV",{class:!0});var Z=N(m);p=b(Z,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(p)!=="svelte-ef796g"&&(p.textContent=v),h=T(Z),d=b(Z,"INPUT",{type:!0,id:!0,min:!0,step:!0,class:!0}),Z.forEach(_),this.h()},h(){c(t,"for","minLevel"),c(t,"class","svelte-rlicl9"),c(n,"type","number"),c(n,"id","minLevel"),c(n,"min","10"),c(n,"max",r=s[0].maxLevel-10),c(n,"step","10"),c(n,"class","w-full p-2 rounded-sm"),c(e,"class","flex flex-col w-96 mr-5"),c(p,"for","maxLevel"),c(p,"class","svelte-rlicl9"),c(d,"type","number"),c(d,"id","maxLevel"),c(d,"min",k=s[0].minLevel+10),c(d,"step","10"),c(d,"class","w-full p-2 rounded-sm"),c(m,"class","flex flex-col w-96 mr-5")},m(C,O){L(C,e,O),f(e,t),f(e,i),f(e,n),V(n,s[0].minLevel),L(C,u,O),L(C,m,O),f(m,p),f(m,h),f(m,d),V(d,s[0].maxLevel),Y||(W=[E(n,"input",s[16]),E(n,"input",s[17]),E(d,"input",s[18]),E(d,"input",s[19])],Y=!0)},p(C,O){O[0]&1&&r!==(r=C[0].maxLevel-10)&&c(n,"max",r),O[0]&1&&oe(n.value)!==C[0].minLevel&&V(n,C[0].minLevel),O[0]&1&&k!==(k=C[0].minLevel+10)&&c(d,"min",k),O[0]&1&&oe(d.value)!==C[0].maxLevel&&V(d,C[0].maxLevel)},d(C){C&&(_(e),_(u),_(m)),Y=!1,xe(W)}}}function ht(s){let e,t=s[44]+"",l;return{c(){e=g("option"),l=ye(t),this.h()},l(i){e=b(i,"OPTION",{});var n=N(e);l=Ie(n,t),n.forEach(_),this.h()},h(){e.__value=s[44],V(e,e.__value)},m(i,n){L(i,e,n),f(e,l)},p:ve,d(i){i&&_(e)}}}function dt(s){let e,t,l="Gem Number:",i,n,r,u;return{c(){e=g("div"),t=g("label"),t.textContent=l,i=B(),n=g("input"),this.h()},l(m){e=b(m,"DIV",{class:!0});var p=N(e);t=b(p,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(t)!=="svelte-14acux4"&&(t.textContent=l),i=T(p),n=b(p,"INPUT",{type:!0,id:!0,class:!0}),p.forEach(_),this.h()},h(){c(t,"for","gemNo"),c(t,"class","svelte-rlicl9"),c(n,"type","number"),c(n,"id","gemNo"),c(n,"class","w-full p-2 rounded-sm"),c(e,"class","flex flex-col w-96 mr-5")},m(m,p){L(m,e,p),f(e,t),f(e,i),f(e,n),V(n,s[3].gemNo),r||(u=E(n,"input",s[23]),r=!0)},p(m,p){p[0]&40&&oe(n.value)!==m[3].gemNo&&V(n,m[3].gemNo)},d(m){m&&_(e),r=!1,u()}}}function pt(s){let e,t,l,i,n=s[0].visiBools[s[34]].text+"",r,u,m,p;function v(){s[24].call(t,s[34])}return{c(){e=g("div"),t=g("input"),l=B(),i=g("label"),r=ye(n),u=B(),this.h()},l(h){e=b(h,"DIV",{class:!0});var d=N(e);t=b(d,"INPUT",{type:!0}),l=T(d),i=b(d,"LABEL",{for:!0,class:!0});var k=N(i);r=Ie(k,n),k.forEach(_),u=T(d),d.forEach(_),this.h()},h(){c(t,"type","checkbox"),c(i,"for",""),c(i,"class","svelte-rlicl9"),c(e,"class","px-2")},m(h,d){L(h,e,d),f(e,t),t.checked=s[0].visiBools[s[34]].bool,f(e,l),f(e,i),f(i,r),f(e,u),m||(p=[E(t,"change",v),E(t,"input",s[25])],m=!0)},p(h,d){s=h,d[0]&3&&(t.checked=s[0].visiBools[s[34]].bool),d[0]&3&&n!==(n=s[0].visiBools[s[34]].text+"")&&je(r,n)},d(h){h&&_(e),m=!1,xe(p)}}}function gt(s){let e,t=q(Object.keys(s[0].validModifiers)),l=[];for(let i=0;i<t.length;i+=1)l[i]=bt(it(s,t,i));return{c(){e=g("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var n=N(e);for(let r=0;r<l.length;r+=1)l[r].l(n);n.forEach(_),this.h()},h(){c(e,"class","flex flex-wrap items-center")},m(i,n){L(i,e,n);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(i,n){if(n[0]&1){t=q(Object.keys(i[0].validModifiers));let r;for(r=0;r<t.length;r+=1){const u=it(i,t,r);l[r]?l[r].p(u,n):(l[r]=bt(u),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(i){i&&_(e),re(l,i)}}}function bt(s){let e,t,l,i,n=s[34]+"",r,u,m,p;function v(){s[26].call(t,s[34])}return{c(){e=g("div"),t=g("input"),l=B(),i=g("label"),r=ye(n),u=B(),this.h()},l(h){e=b(h,"DIV",{class:!0});var d=N(e);t=b(d,"INPUT",{type:!0}),l=T(d),i=b(d,"LABEL",{for:!0,class:!0});var k=N(i);r=Ie(k,n),k.forEach(_),u=T(d),d.forEach(_),this.h()},h(){c(t,"type","checkbox"),c(i,"for",""),c(i,"class","svelte-rlicl9"),c(e,"class","px-2")},m(h,d){L(h,e,d),f(e,t),t.checked=s[0].validModifiers[s[34]],f(e,l),f(e,i),f(i,r),f(e,u),m||(p=[E(t,"change",v),E(t,"input",s[27])],m=!0)},p(h,d){s=h,d[0]&1&&(t.checked=s[0].validModifiers[s[34]]),d[0]&1&&n!==(n=s[34]+"")&&je(r,n)},d(h){h&&_(e),m=!1,xe(p)}}}function zt(s){let e,t="Stats";return{c(){e=g("div"),e.textContent=t,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-yq3fhg"&&(e.textContent=t),this.h()},h(){c(e,"class","w-full mb-1 text-amber-200")},m(l,i){L(l,e,i)},d(l){l&&_(e)}}}function xt(s){let e,t="Level";return{c(){e=g("div"),e.textContent=t,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1oe7gn3"&&(e.textContent=t),this.h()},h(){c(e,"class","w-full mb-1 text-amber-200")},m(l,i){L(l,e,i)},d(l){l&&_(e)}}}function _t(s){let e,t,l,i,n;return{c(){e=g("div"),t=g("img"),n=B(),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=N(e);t=b(u,"IMG",{alt:!0,src:!0}),n=T(u),u.forEach(_),this.h()},h(){c(t,"alt",l=s[0].visiBools[s[37]].text),ze(t.src,i=s[0].visiBools[s[37]].imageId)||c(t,"src",i),c(e,"class","w-full mb-1 text-amber-200 h-3 items-center")},m(r,u){L(r,e,u),f(e,t),f(e,n)},p(r,u){u[0]&1&&l!==(l=r[0].visiBools[r[37]].text)&&c(t,"alt",l),u[0]&1&&!ze(t.src,i=r[0].visiBools[r[37]].imageId)&&c(t,"src",i)},d(r){r&&_(e)}}}function vt(s){let e,t=s[0].visiBools[s[37]].bool===!0&&_t(s);return{c(){t&&t.c(),e=ce()},l(l){t&&t.l(l),e=ce()},m(l,i){t&&t.m(l,i),L(l,e,i)},p(l,i){l[0].visiBools[l[37]].bool===!0?t?t.p(l,i):(t=_t(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&_(e),t&&t.d(l)}}}function yt(s){let e;function t(n,r){if(n[34]==="level")return Ut;if(n[34]!=="level "&&n[0].visiBools[n[34]].bool===!0)return jt}let l=t(s),i=l&&l(s);return{c(){i&&i.c(),e=ce()},l(n){i&&i.l(n),e=ce()},m(n,r){i&&i.m(n,r),L(n,e,r)},p(n,r){l===(l=t(n))&&i?i.p(n,r):(i&&i.d(1),i=l&&l(n),i&&(i.c(),i.m(e.parentNode,e)))},d(n){n&&_(e),i&&i.d(n)}}}function jt(s){let e,t,l;function i(){s[28].call(e,s[34],s[32],s[33])}return{c(){e=g("input"),this.h()},l(n){e=b(n,"INPUT",{type:!0,class:!0}),this.h()},h(){c(e,"type","number"),c(e,"class","w-full max-w-full")},m(n,r){L(n,e,r),V(e,s[31][s[34]]),t||(l=E(e,"input",i),t=!0)},p(n,r){s=n,r[0]&1&&oe(e.value)!==s[31][s[34]]&&V(e,s[31][s[34]])},d(n){n&&_(e),t=!1,l()}}}function Ut(s){let e;function t(n,r){return n[0].levelVisibility?qt:Rt}let l=t(s),i=l(s);return{c(){i.c(),e=ce()},l(n){i.l(n),e=ce()},m(n,r){i.m(n,r),L(n,e,r)},p(n,r){l===(l=t(n))&&i?i.p(n,r):(i.d(1),i=l(n),i&&(i.c(),i.m(e.parentNode,e)))},d(n){n&&_(e),i.d(n)}}}function Rt(s){let e,t="-";return{c(){e=g("div"),e.textContent=t,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-oagn6o"&&(e.textContent=t),this.h()},h(){c(e,"class","w-full mb-1 text-amber-200")},m(l,i){L(l,e,i)},p:ve,d(l){l&&_(e)}}}function qt(s){let e,t=s[31].level+"",l;return{c(){e=g("div"),l=ye(t),this.h()},l(i){e=b(i,"DIV",{class:!0});var n=N(e);l=Ie(n,t),n.forEach(_),this.h()},h(){c(e,"class","w-full mb-1 text-amber-200")},m(i,n){L(i,e,n),f(e,l)},p(i,n){n[0]&1&&t!==(t=i[31].level+"")&&je(l,t)},d(i){i&&_(e)}}}function It(s){let e,t=s[34]!="parentTable"&&yt(s);return{c(){t&&t.c(),e=ce()},l(l){t&&t.l(l),e=ce()},m(l,i){t&&t.m(l,i),L(l,e,i)},p(l,i){l[34]!="parentTable"?t?t.p(l,i):(t=yt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&_(e),t&&t.d(l)}}}function wt(s){let e,t,l=q(Object.keys(s[31])),i=[];for(let n=0;n<l.length;n+=1)i[n]=It(lt(s,l,n));return{c(){e=g("div");for(let n=0;n<i.length;n+=1)i[n].c();t=B(),this.h()},l(n){e=b(n,"DIV",{class:!0});var r=N(e);for(let u=0;u<i.length;u+=1)i[u].l(r);t=T(r),r.forEach(_),this.h()},h(){c(e,"class","flex flex-col w-10 items-center gap-1 mr-2")},m(n,r){L(n,e,r);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);f(e,t)},p(n,r){if(r[0]&1){l=q(Object.keys(n[31]));let u;for(u=0;u<l.length;u+=1){const m=lt(n,l,u);i[u]?i[u].p(m,r):(i[u]=It(m),i[u].c(),i[u].m(e,t))}for(;u<i.length;u+=1)i[u].d(1);i.length=l.length}},d(n){n&&_(e),re(i,n)}}}function Ft(s){let e,t,l,i,n="Name:",r,u,m,p,v,h="Legend:",d,k,Y,W,C,O="Main Type:",Z,F,we,fe,me,$,ee,Ne="Rarity:",ke,H,Be,te,le,Ce="Image ID:",Te,J,w,Q,X,Le,Ue,ue,Re,Se,ie,se,Ae,qe,Fe,ae,Qe="Generate Table",He,Xe,he=q(Object.keys(s[5].mainType)),D=[];for(let o=0;o<he.length;o+=1)D[o]=ct(ot(s,he,o));let x=s[5].mainType[s[3].mainType].subTypes!=!1&&ut(s),j=s[5].mainType[s[3].mainType].levelVisibility==!0&&mt(s),de=q(s[4]),G=[];for(let o=0;o<de.length;o+=1)G[o]=ht(at(s,de,o));let U=s[5].mainType[s[3].mainType].gemVisibility==!0&&dt(s),pe=q(s[1]),M=[];for(let o=0;o<pe.length;o+=1)M[o]=pt(nt(s,pe,o));let R=s[5].mainType[s[3].mainType].modifiable==!0&&gt(s);function Ye(o,I){return o[0].levelVisibility?xt:zt}let Ee=Ye(s),ne=Ee(s),ge=q(Object.keys(s[0].visiBools)),P=[];for(let o=0;o<ge.length;o+=1)P[o]=vt(st(s,ge,o));let be=q(s[0].columns),z=[];for(let o=0;o<be.length;o+=1)z[o]=wt(tt(s,be,o));return{c(){e=g("div"),t=g("div"),l=g("div"),i=g("label"),i.textContent=n,r=B(),u=g("input"),m=B(),p=g("div"),v=g("label"),v.textContent=h,d=B(),k=g("input"),Y=B(),W=g("div"),C=g("label"),C.textContent=O,Z=B(),F=g("select");for(let o=0;o<D.length;o+=1)D[o].c();we=B(),x&&x.c(),fe=B(),j&&j.c(),me=B(),$=g("div"),ee=g("label"),ee.textContent=Ne,ke=B(),H=g("select");for(let o=0;o<G.length;o+=1)G[o].c();Be=B(),te=g("div"),le=g("label"),le.textContent=Ce,Te=B(),J=g("input"),w=B(),U&&U.c(),Q=B(),X=g("img"),Ue=B(),ue=g("div");for(let o=0;o<M.length;o+=1)M[o].c();Re=B(),R&&R.c(),Se=B(),ie=g("div"),se=g("div"),ne.c(),Ae=B();for(let o=0;o<P.length;o+=1)P[o].c();qe=B();for(let o=0;o<z.length;o+=1)z[o].c();Fe=B(),ae=g("button"),ae.textContent=Qe,this.h()},l(o){e=b(o,"DIV",{class:!0});var I=N(e);t=b(I,"DIV",{class:!0});var a=N(t);l=b(a,"DIV",{class:!0});var S=N(l);i=b(S,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(i)!=="svelte-ir8c70"&&(i.textContent=n),r=T(S),u=b(S,"INPUT",{type:!0,id:!0,class:!0}),S.forEach(_),m=T(a),p=b(a,"DIV",{class:!0});var Oe=N(p);v=b(Oe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(v)!=="svelte-cgdzk4"&&(v.textContent=h),d=T(Oe),k=b(Oe,"INPUT",{type:!0,id:!0,class:!0}),Oe.forEach(_),Y=T(a),W=b(a,"DIV",{class:!0});var Ve=N(W);C=b(Ve,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(C)!=="svelte-11fflvu"&&(C.textContent=O),Z=T(Ve),F=b(Ve,"SELECT",{id:!0,class:!0});var Ze=N(F);for(let A=0;A<D.length;A+=1)D[A].l(Ze);Ze.forEach(_),Ve.forEach(_),we=T(a),x&&x.l(a),fe=T(a),j&&j.l(a),me=T(a),$=b(a,"DIV",{class:!0});var De=N($);ee=b(De,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(ee)!=="svelte-1bbf7rg"&&(ee.textContent=Ne),ke=T(De),H=b(De,"SELECT",{id:!0,class:!0});var $e=N(H);for(let A=0;A<G.length;A+=1)G[A].l($e);$e.forEach(_),De.forEach(_),Be=T(a),te=b(a,"DIV",{class:!0});var Ge=N(te);le=b(Ge,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(le)!=="svelte-leplae"&&(le.textContent=Ce),Te=T(Ge),J=b(Ge,"INPUT",{type:!0,id:!0,class:!0}),Ge.forEach(_),w=T(a),U&&U.l(a),a.forEach(_),Q=T(I),X=b(I,"IMG",{class:!0,alt:!0,src:!0}),Ue=T(I),ue=b(I,"DIV",{class:!0});var et=N(ue);for(let A=0;A<M.length;A+=1)M[A].l(et);et.forEach(_),Re=T(I),R&&R.l(I),Se=T(I),ie=b(I,"DIV",{class:!0});var Me=N(ie);se=b(Me,"DIV",{class:!0});var Pe=N(se);ne.l(Pe),Ae=T(Pe);for(let A=0;A<P.length;A+=1)P[A].l(Pe);Pe.forEach(_),qe=T(Me);for(let A=0;A<z.length;A+=1)z[A].l(Me);Me.forEach(_),Fe=T(I),ae=b(I,"BUTTON",{class:!0,"data-svelte-h":!0}),K(ae)!=="svelte-1wfc69s"&&(ae.textContent=Qe),I.forEach(_),this.h()},h(){c(i,"for","name"),c(i,"class","svelte-rlicl9"),c(u,"type","text"),c(u,"id","name"),c(u,"class","w-full p-2 rounded-sm"),c(l,"class","flex flex-col w-96 mr-5"),c(v,"for","legend"),c(v,"class","svelte-rlicl9"),c(k,"type","text"),c(k,"id","legend"),c(k,"class","w-full p-2 rounded-sm"),c(p,"class","flex flex-col w-96 mr-5"),c(C,"for","rarity"),c(C,"class","svelte-rlicl9"),c(F,"id","rarity"),c(F,"class","w-full p-2 rounded-sm"),s[3].mainType===void 0&&Ke(()=>s[13].call(F)),c(W,"class","flex flex-col w-96 mr-5"),c(ee,"for","rarity"),c(ee,"class","svelte-rlicl9"),c(H,"id","rarity"),c(H,"class","w-full p-2 rounded-sm"),s[3].rarity===void 0&&Ke(()=>s[20].call(H)),c($,"class","flex flex-col w-96 mr-5"),c(le,"for","imageId"),c(le,"class","svelte-rlicl9"),c(J,"type","text"),c(J,"id","imageId"),c(J,"class","w-full p-2 rounded-sm"),c(te,"class","flex flex-col w-96 mr-5"),c(t,"class","flex flex-wrap"),c(X,"class","h-32 w-32"),c(X,"alt","image"),ze(X.src,Le=s[2])||c(X,"src",Le),c(ue,"class","flex flex-wrap items-center"),c(se,"class","flex flex-col w-10 items-center gap-1 mr-2"),c(ie,"class","flex flex-wrap"),c(ae,"class","p-2 bg-amber-500 rounded-sm"),c(e,"class","m-20 w-full h-full")},m(o,I){L(o,e,I),f(e,t),f(t,l),f(l,i),f(l,r),f(l,u),V(u,s[3].name),f(t,m),f(t,p),f(p,v),f(p,d),f(p,k),V(k,s[3].legend),f(t,Y),f(t,W),f(W,C),f(W,Z),f(W,F);for(let a=0;a<D.length;a+=1)D[a]&&D[a].m(F,null);_e(F,s[3].mainType,!0),f(t,we),x&&x.m(t,null),f(t,fe),j&&j.m(t,null),f(t,me),f(t,$),f($,ee),f($,ke),f($,H);for(let a=0;a<G.length;a+=1)G[a]&&G[a].m(H,null);_e(H,s[3].rarity,!0),f(t,Be),f(t,te),f(te,le),f(te,Te),f(te,J),V(J,s[3].imageId),f(t,w),U&&U.m(t,null),f(e,Q),f(e,X),f(e,Ue),f(e,ue);for(let a=0;a<M.length;a+=1)M[a]&&M[a].m(ue,null);f(e,Re),R&&R.m(e,null),f(e,Se),f(e,ie),f(ie,se),ne.m(se,null),f(se,Ae);for(let a=0;a<P.length;a+=1)P[a]&&P[a].m(se,null);f(ie,qe);for(let a=0;a<z.length;a+=1)z[a]&&z[a].m(ie,null);f(e,Fe),f(e,ae),He||(Xe=[E(u,"input",s[11]),E(k,"input",s[12]),E(F,"change",s[13]),E(F,"change",s[14]),E(H,"change",s[20]),E(J,"input",s[21]),E(J,"input",s[22]),E(ae,"click",s[29])],He=!0)},p(o,I){if(I[0]&40&&u.value!==o[3].name&&V(u,o[3].name),I[0]&40&&k.value!==o[3].legend&&V(k,o[3].legend),I[0]&32){he=q(Object.keys(o[5].mainType));let a;for(a=0;a<he.length;a+=1){const S=ot(o,he,a);D[a]?D[a].p(S,I):(D[a]=ct(S),D[a].c(),D[a].m(F,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=he.length}if(I[0]&40&&_e(F,o[3].mainType),o[5].mainType[o[3].mainType].subTypes!=!1?x?x.p(o,I):(x=ut(o),x.c(),x.m(t,fe)):x&&(x.d(1),x=null),o[5].mainType[o[3].mainType].levelVisibility==!0?j?j.p(o,I):(j=mt(o),j.c(),j.m(t,me)):j&&(j.d(1),j=null),I[0]&16){de=q(o[4]);let a;for(a=0;a<de.length;a+=1){const S=at(o,de,a);G[a]?G[a].p(S,I):(G[a]=ht(S),G[a].c(),G[a].m(H,null))}for(;a<G.length;a+=1)G[a].d(1);G.length=de.length}if(I[0]&40&&_e(H,o[3].rarity),I[0]&40&&J.value!==o[3].imageId&&V(J,o[3].imageId),o[5].mainType[o[3].mainType].gemVisibility==!0?U?U.p(o,I):(U=dt(o),U.c(),U.m(t,null)):U&&(U.d(1),U=null),I[0]&4&&!ze(X.src,Le=o[2])&&c(X,"src",Le),I[0]&3){pe=q(o[1]);let a;for(a=0;a<pe.length;a+=1){const S=nt(o,pe,a);M[a]?M[a].p(S,I):(M[a]=pt(S),M[a].c(),M[a].m(ue,null))}for(;a<M.length;a+=1)M[a].d(1);M.length=pe.length}if(o[5].mainType[o[3].mainType].modifiable==!0?R?R.p(o,I):(R=gt(o),R.c(),R.m(e,Se)):R&&(R.d(1),R=null),Ee!==(Ee=Ye(o))&&(ne.d(1),ne=Ee(o),ne&&(ne.c(),ne.m(se,Ae))),I[0]&1){ge=q(Object.keys(o[0].visiBools));let a;for(a=0;a<ge.length;a+=1){const S=st(o,ge,a);P[a]?P[a].p(S,I):(P[a]=vt(S),P[a].c(),P[a].m(se,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=ge.length}if(I[0]&1){be=q(o[0].columns);let a;for(a=0;a<be.length;a+=1){const S=tt(o,be,a);z[a]?z[a].p(S,I):(z[a]=wt(S),z[a].c(),z[a].m(ie,null))}for(;a<z.length;a+=1)z[a].d(1);z.length=be.length}},i:ve,o:ve,d(o){o&&_(e),re(D,o),x&&x.d(),j&&j.d(),re(G,o),U&&U.d(),re(M,o),R&&R.d(),ne.d(),re(P,o),re(z,o),He=!1,xe(Xe)}}}const kt="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/unknown.jpg";function Ht(s,e,t){let{existingItem:l,mode:i}=e;const n={gearStatic:["power","defense","agility","attackSpeed","attackSize","intensity","regeneration","piercing","resistance","insanity","warding","drawback"],gearIncrement:["powerIncrement","defenseIncrement","agilityIncrement","attackSpeedIncrement","attackSizeIncrement","intensityIncrement","regenerationIncrement","piercingIncrement","resistanceIncrement","insanity","warding","drawback"],ship:["durability","magicStorage","ramDefense","ramStrength","resilience","speed","stability","turning"]},r=["None","Common","Uncommon","Rare","Exotic","Legendary","Seasonal"],u={mainType:{Accessory:{levelVisibility:!0,subTypes:["None","Head","Helmet","Hat","Face","Neck","Amulet","Shoulder","Collar","Arms","Arm","Back","Front","Waist","Magic","Strength"],gemVisibility:!0,modifiable:!0},Chestplate:{levelVisibility:!0,subTypes:["None","Magic","Strength"],gemVisibility:!0,modifiable:!0},Pants:{levelVisibility:!0,subTypes:["None","Magic","Strength"],gemVisibility:!0,modifiable:!0},Gem:{levelVisibility:!1,subTypes:!1,gemVisibility:!1,modifiable:!1},Enchant:{levelVisibility:!1,subTypes:!1,gemVisibility:!1,modifiable:!1},Modifier:{levelVisibility:!1,subTypes:!1,gemVisibility:!1,modifiable:!1}}};let m=new Pt(90,130,!0),p=n.gearStatic,v=kt,h={id:0,name:"",legend:"",mainType:"Accessory",subType:"None",rarity:"None",imageId:"",gemNo:0,statsPerLevel:[],validModifiers:[]};if(i=="edit"){h={id:l.id,name:l.name,legend:l.legend,mainType:l.mainType,subType:l.subType,rarity:l.rarity,imageId:l.imageId,gemNo:l.gemNo,statsPerLevel:l.statsPerLevel,validModifiers:l.validModifiers};for(const w in h.validModifiers)m.validModifiers[w]=!0}function d(){t(3,h.subType=u.mainType[h.mainType].subTypes[0],h),["Accessory","Chestplate","Pants","Gem"].includes(h.mainType)?t(1,p=n.gearStatic):["Enchant","Modifier"].includes(h.mainType)?t(1,p=n.gearIncrement):t(1,p=n.ship);for(const w in m.visiBools)p.includes(w)||t(0,m.visiBools[w].bool=!1,m);t(0,m.levelVisibility=u.mainType[h.mainType].levelVisibility,m),m.updateColumns()}function k(){let w=new Image;w.src=h.imageId,w.onerror=function(){t(2,v=kt)},w.onload=function(){t(2,v=h.imageId)}}function Y(){let w={id:h.id,name:h.name,legend:h.legend,mainType:h.mainType,rarity:h.rarity,imageId:v};if(["Accessory","Chestplate","Pants"].includes(h.mainType)){w.subType=h.subType,w.gemNo=h.gemNo,w.statsPerLevel=m.getData(),w.validModifiers=[];for(const Q in m.validModifiers)m.validModifiers[Q]==!0&&w.validModifiers.push(Q)}else for(const Q in m.getData())w[Q]=m.getData()[Q];console.log(w,new Blob([JSON.stringify(w)]).size)}St(()=>{m.updateColumns()});function W(){h.name=this.value,t(3,h),t(5,u)}function C(){h.legend=this.value,t(3,h),t(5,u)}function O(){h.mainType=We(this),t(3,h),t(5,u)}const Z=()=>d();function F(){h.subType=We(this),t(3,h),t(5,u)}function we(){m.minLevel=oe(this.value),t(0,m)}const fe=()=>m.updateColumns();function me(){m.maxLevel=oe(this.value),t(0,m)}const $=()=>m.updateColumns();function ee(){h.rarity=We(this),t(3,h),t(5,u)}function Ne(){h.imageId=this.value,t(3,h),t(5,u)}const ke=()=>k();function H(){h.gemNo=oe(this.value),t(3,h),t(5,u)}function Be(w){m.visiBools[w].bool=this.checked,t(0,m)}const te=()=>{m.updateColumns()};function le(w){m.validModifiers[w]=this.checked,t(0,m)}const Ce=()=>{m.updateColumns()};function Te(w,Q,X){Q[X][w]=oe(this.value),t(0,m)}const J=()=>{Y()};return s.$$set=w=>{"existingItem"in w&&t(9,l=w.existingItem),"mode"in w&&t(10,i=w.mode)},[m,p,v,h,r,u,d,k,Y,l,i,W,C,O,Z,F,we,fe,me,$,ee,Ne,ke,H,Be,te,le,Ce,Te,J]}class Wt extends Tt{constructor(e){super(),Nt(this,e,Ht,Ft,Bt,{existingItem:9,mode:10},null,[-1,-1])}}function Jt(s){let e,t;return e=new Wt({props:{mode:"create",existingItem:{id:0,name:"test",legend:"test",mainType:"Accessory",subType:"None",rarity:"Rare",imageId:"test",gemNo:0,statsPerLevel:[]}}}),{c(){At(e.$$.fragment)},l(l){Et(e.$$.fragment,l)},m(l,i){Ot(e,l,i),t=!0},p:ve,i(l){t||(Vt(e.$$.fragment,l),t=!0)},o(l){Dt(e.$$.fragment,l),t=!1},d(l){Gt(e,l)}}}class Zt extends Tt{constructor(e){super(),Nt(this,e,null,Jt,Bt,{})}}export{Zt as component,Yt as universal};
