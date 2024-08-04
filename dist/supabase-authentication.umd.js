(function(bt,Vt){typeof exports=="object"&&typeof module<"u"?Vt(exports):typeof define=="function"&&define.amd?define(["exports"],Vt):(bt=typeof globalThis<"u"?globalThis:bt||self,Vt(bt.SupabaseAuthentication={}))})(this,function(bt){"use strict";/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vt(t,e){const n=new Set(t.split(","));return o=>n.has(o)}const K=process.env.NODE_ENV!=="production"?Object.freeze({}):{},Vr=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Et=()=>{},Ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),F=Object.assign,Rr=Object.prototype.hasOwnProperty,N=(t,e)=>Rr.call(t,e),x=Array.isArray,gt=t=>re(t)==="[object Map]",In=t=>re(t)==="[object Set]",C=t=>typeof t=="function",z=t=>typeof t=="string",mt=t=>typeof t=="symbol",j=t=>t!==null&&typeof t=="object",Dr=t=>(j(t)||C(t))&&C(t.then)&&C(t.catch),Rn=Object.prototype.toString,re=t=>Rn.call(t),Dn=t=>re(t).slice(8,-1),An=t=>re(t)==="[object Object]",Me=t=>z(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ze=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ar=/-(\w)/g,ie=ze(t=>t.replace(Ar,(e,n)=>n?n.toUpperCase():"")),It=ze(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=ze(t=>t?`on${It(t)}`:""),ot=(t,e)=>!Object.is(t,e),Mr=(t,e,n,o=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:o,value:n})};let Ln;const Mn=()=>Ln||(Ln=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Be(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const o=t[n],r=z(o)?Fr(o):Be(o);if(r)for(const i in r)e[i]=r[i]}return e}else if(z(t)||j(t))return t}const zr=/;(?![^(]*\))/g,Br=/:([^]+)/,Ur=/\/\*[^]*?\*\//g;function Fr(t){const e={};return t.replace(Ur,"").split(zr).forEach(n=>{if(n){const o=n.split(Br);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function Pt(t){let e="";if(z(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const o=Pt(t[n]);o&&(e+=o+" ")}else if(j(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zn=t=>!!(t&&t.__v_isRef===!0),se=t=>z(t)?t:t==null?"":x(t)||j(t)&&(t.toString===Rn||!C(t.toString))?zn(t)?se(t.value):JSON.stringify(t,Bn,2):String(t),Bn=(t,e)=>zn(e)?Bn(t,e.value):gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[o,r],i)=>(n[Ue(o,i)+" =>"]=r,n),{})}:In(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ue(n))}:mt(e)?Ue(e):j(e)&&!x(e)&&!An(e)?String(e):e,Ue=(t,e="")=>{var n;return mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xt(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Hr;function Kr(t,e=Hr){e&&e.active&&e.effects.push(t)}let vt;class Un{constructor(e,n,o,r){this.fn=e,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Kr(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Rt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Wr(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Dt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=rt,n=vt;try{return rt=!0,vt=this,this._runnings++,Fn(this),this.fn()}finally{Hn(this),this._runnings--,vt=n,rt=e}}stop(){this.active&&(Fn(this),Hn(this),this.onStop&&this.onStop(),this.active=!1)}}function Wr(t){return t.value}function Fn(t){t._trackId++,t._depsLength=0}function Hn(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Kn(t.deps[e],t);t.deps.length=t._depsLength}}function Kn(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let rt=!0,Fe=0;const Wn=[];function Rt(){Wn.push(rt),rt=!1}function Dt(){const t=Wn.pop();rt=t===void 0?!0:t}function He(){Fe++}function Ke(){for(Fe--;!Fe&&We.length;)We.shift()()}function Yn(t,e,n){var o;if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Kn(r,t),t.deps[t._depsLength++]=e):t._depsLength++,process.env.NODE_ENV!=="production"&&((o=t.onTrack)==null||o.call(t,F({effect:t},n)))}}const We=[];function Gn(t,e,n){var o;He();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i??(i=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=t.get(r)===r._trackId))&&(process.env.NODE_ENV!=="production"&&((o=r.onTrigger)==null||o.call(r,F({effect:r},n))),r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&We.push(r.scheduler)))}Ke()}const qn=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ye=new WeakMap,yt=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Ge=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");function V(t,e,n){if(rt&&vt){let o=Ye.get(t);o||Ye.set(t,o=new Map);let r=o.get(n);r||o.set(n,r=qn(()=>o.delete(n))),Yn(vt,r,process.env.NODE_ENV!=="production"?{target:t,type:e,key:n}:void 0)}}function it(t,e,n,o,r,i){const s=Ye.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&x(t)){const c=Number(o);s.forEach((u,d)=>{(d==="length"||!mt(d)&&d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(s.get(n)),e){case"add":x(t)?Me(n)&&a.push(s.get("length")):(a.push(s.get(yt)),gt(t)&&a.push(s.get(Ge)));break;case"delete":x(t)||(a.push(s.get(yt)),gt(t)&&a.push(s.get(Ge)));break;case"set":gt(t)&&a.push(s.get(yt));break}He();for(const c of a)c&&Gn(c,4,process.env.NODE_ENV!=="production"?{target:t,type:e,key:n,newValue:o,oldValue:r,oldTarget:i}:void 0);Ke()}const Yr=Vt("__proto__,__v_isRef,__isVue"),Jn=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mt)),Zn=Gr();function Gr(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const o=S(this);for(let i=0,s=this.length;i<s;i++)V(o,"get",i+"");const r=o[e](...n);return r===-1||r===!1?o[e](...n.map(S)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rt(),He();const o=S(this)[e].apply(this,n);return Ke(),Dt(),o}}),t}function qr(t){mt(t)||(t=String(t));const e=S(this);return V(e,"has",t),e.hasOwnProperty(t)}class Xn{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,o){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(r?i?ao:so:i?ci:io).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const s=x(e);if(!r){if(s&&N(Zn,n))return Reflect.get(Zn,n,o);if(n==="hasOwnProperty")return qr}const a=Reflect.get(e,n,o);return(mt(n)?Jn.has(n):Yr(n))||(r||V(e,"get",n),i)?a:B(a)?s&&Me(n)?a:a.value:j(a)?r?Ze(a):co(a):a}}class Jr extends Xn{constructor(e=!1){super(!1,e)}set(e,n,o,r){let i=e[n];if(!this._isShallow){const c=Z(i);if(!X(o)&&!Z(o)&&(i=S(i),o=S(o)),!x(e)&&B(i)&&!B(o))return c?!1:(i.value=o,!0)}const s=x(e)&&Me(n)?Number(n)<e.length:N(e,n),a=Reflect.set(e,n,o,r);return e===S(r)&&(s?ot(o,i)&&it(e,"set",n,o,i):it(e,"add",n,o)),a}deleteProperty(e,n){const o=N(e,n),r=e[n],i=Reflect.deleteProperty(e,n);return i&&o&&it(e,"delete",n,void 0,r),i}has(e,n){const o=Reflect.has(e,n);return(!mt(n)||!Jn.has(n))&&V(e,"has",n),o}ownKeys(e){return V(e,"iterate",x(e)?"length":yt),Reflect.ownKeys(e)}}class Qn extends Xn{constructor(e=!1){super(!0,e)}set(e,n){return process.env.NODE_ENV!=="production"&&xt(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return process.env.NODE_ENV!=="production"&&xt(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const Zr=new Jr,Xr=new Qn,Qr=new Qn(!0),qe=t=>t,ae=t=>Reflect.getPrototypeOf(t);function ce(t,e,n=!1,o=!1){t=t.__v_raw;const r=S(t),i=S(e);n||(ot(e,i)&&V(r,"get",e),V(r,"get",i));const{has:s}=ae(r),a=o?qe:n?tn:At;if(s.call(r,e))return a(t.get(e));if(s.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function le(t,e=!1){const n=this.__v_raw,o=S(n),r=S(t);return e||(ot(t,r)&&V(o,"has",t),V(o,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ue(t,e=!1){return t=t.__v_raw,!e&&V(S(t),"iterate",yt),Reflect.get(t,"size",t)}function to(t,e=!1){!e&&!X(t)&&!Z(t)&&(t=S(t));const n=S(this);return ae(n).has.call(n,t)||(n.add(t),it(n,"add",t,t)),this}function eo(t,e,n=!1){!n&&!X(e)&&!Z(e)&&(e=S(e));const o=S(this),{has:r,get:i}=ae(o);let s=r.call(o,t);s?process.env.NODE_ENV!=="production"&&ro(o,r,t):(t=S(t),s=r.call(o,t));const a=i.call(o,t);return o.set(t,e),s?ot(e,a)&&it(o,"set",t,e,a):it(o,"add",t,e),this}function no(t){const e=S(this),{has:n,get:o}=ae(e);let r=n.call(e,t);r?process.env.NODE_ENV!=="production"&&ro(e,n,t):(t=S(t),r=n.call(e,t));const i=o?o.call(e,t):void 0,s=e.delete(t);return r&&it(e,"delete",t,void 0,i),s}function oo(){const t=S(this),e=t.size!==0,n=process.env.NODE_ENV!=="production"?gt(t)?new Map(t):new Set(t):void 0,o=t.clear();return e&&it(t,"clear",void 0,void 0,n),o}function de(t,e){return function(o,r){const i=this,s=i.__v_raw,a=S(s),c=e?qe:t?tn:At;return!t&&V(a,"iterate",yt),s.forEach((u,d)=>o.call(r,c(u),c(d),i))}}function fe(t,e,n){return function(...o){const r=this.__v_raw,i=S(r),s=gt(i),a=t==="entries"||t===Symbol.iterator&&s,c=t==="keys"&&s,u=r[t](...o),d=n?qe:e?tn:At;return!e&&V(i,"iterate",c?Ge:yt),{next(){const{value:l,done:f}=u.next();return f?{value:l,done:f}:{value:a?[d(l[0]),d(l[1])]:d(l),done:f}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){if(process.env.NODE_ENV!=="production"){const n=e[0]?`on key "${e[0]}" `:"";xt(`${It(t)} operation ${n}failed: target is readonly.`,S(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function ti(){const t={get(i){return ce(this,i)},get size(){return ue(this)},has:le,add:to,set:eo,delete:no,clear:oo,forEach:de(!1,!1)},e={get(i){return ce(this,i,!1,!0)},get size(){return ue(this)},has:le,add(i){return to.call(this,i,!0)},set(i,s){return eo.call(this,i,s,!0)},delete:no,clear:oo,forEach:de(!1,!0)},n={get(i){return ce(this,i,!0)},get size(){return ue(this,!0)},has(i){return le.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:de(!0,!1)},o={get(i){return ce(this,i,!0,!0)},get size(){return ue(this,!0)},has(i){return le.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fe(i,!1,!1),n[i]=fe(i,!0,!1),e[i]=fe(i,!1,!0),o[i]=fe(i,!0,!0)}),[t,n,e,o]}const[ei,ni,oi,ri]=ti();function Je(t,e){const n=e?t?ri:oi:t?ni:ei;return(o,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?o:Reflect.get(N(n,r)&&r in o?n:o,r,i)}const ii={get:Je(!1,!1)},si={get:Je(!0,!1)},ai={get:Je(!0,!0)};function ro(t,e,n){const o=S(n);if(o!==n&&e.call(t,o)){const r=Dn(t);xt(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const io=new WeakMap,ci=new WeakMap,so=new WeakMap,ao=new WeakMap;function li(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ui(t){return t.__v_skip||!Object.isExtensible(t)?0:li(Dn(t))}function co(t){return Z(t)?t:Xe(t,!1,Zr,ii,io)}function Ze(t){return Xe(t,!0,Xr,si,so)}function pe(t){return Xe(t,!0,Qr,ai,ao)}function Xe(t,e,n,o,r){if(!j(t))return process.env.NODE_ENV!=="production"&&xt(`value cannot be made ${e?"readonly":"reactive"}: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const s=ui(t);if(s===0)return t;const a=new Proxy(t,s===2?o:n);return r.set(t,a),a}function kt(t){return Z(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function Z(t){return!!(t&&t.__v_isReadonly)}function X(t){return!!(t&&t.__v_isShallow)}function Qe(t){return t?!!t.__v_raw:!1}function S(t){const e=t&&t.__v_raw;return e?S(e):t}function di(t){return Object.isExtensible(t)&&Mr(t,"__v_skip",!0),t}const At=t=>j(t)?co(t):t,tn=t=>j(t)?Ze(t):t,fi="Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";class pi{constructor(e,n,o,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Un(()=>e(this._value),()=>he(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const e=S(this);return(!e._cacheable||e.effect.dirty)&&ot(e._value,e._value=e.effect.run())&&he(e,4),lo(e),e.effect._dirtyLevel>=2&&(process.env.NODE_ENV!=="production"&&this._warnRecursive&&xt(fi,`

getter: `,this.getter),he(e,2)),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function lo(t){var e;rt&&vt&&(t=S(t),Yn(vt,(e=t.dep)!=null?e:t.dep=qn(()=>t.dep=void 0,t instanceof pi?t:void 0),process.env.NODE_ENV!=="production"?{target:t,type:"get",key:"value"}:void 0))}function he(t,e=4,n,o){t=S(t);const r=t.dep;r&&Gn(r,e,process.env.NODE_ENV!=="production"?{target:t,type:"set",key:"value",newValue:n,oldValue:o}:void 0)}function B(t){return!!(t&&t.__v_isRef===!0)}function be(t){return hi(t,!1)}function hi(t,e){return B(t)?t:new bi(t,e)}class bi{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:S(e),this._value=n?e:At(e)}get value(){return lo(this),this._value}set value(e){const n=this.__v_isShallow||X(e)||Z(e);if(e=n?e:S(e),ot(e,this._rawValue)){const o=this._rawValue;this._rawValue=e,this._value=n?e:At(e),he(this,4,e,o)}}}function gi(t){return B(t)?t.value:t}const mi={get:(t,e,n)=>gi(Reflect.get(t,e,n)),set:(t,e,n,o)=>{const r=t[e];return B(r)&&!B(n)?(r.value=n,!0):Reflect.set(t,e,n,o)}};function vi(t){return kt(t)?t:new Proxy(t,mi)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _t=[];function yi(t){_t.push(t)}function _i(){_t.pop()}let en=!1;function P(t,...e){if(en)return;en=!0,Rt();const n=_t.length?_t[_t.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=Si();if(o)St(o,n,11,[t+e.map(i=>{var s,a;return(a=(s=i.toString)==null?void 0:s.call(i))!=null?a:JSON.stringify(i)}).join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${Wo(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...$i(r)),console.warn(...i)}Dt(),en=!1}function Si(){let t=_t[_t.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return e}function $i(t){const e=[];return t.forEach((n,o)=>{e.push(...o===0?[]:[`
`],...wi(n))}),e}function wi({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",o=t.component?t.component.parent==null:!1,r=` at <${Wo(t.component,t.type,o)}`,i=">"+n;return t.props?[r,...Oi(t.props),i]:[r+i]}function Oi(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(o=>{e.push(...uo(o,t[o]))}),n.length>3&&e.push(" ..."),e}function uo(t,e,n){return z(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:B(e)?(e=uo(t,S(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):C(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=S(e),n?e:[`${t}=`,e])}const nn={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update"};function St(t,e,n,o){try{return o?t(...o):t()}catch(r){on(r,e,n)}}function Lt(t,e,n,o){if(C(t)){const r=St(t,e,n,o);return r&&Dr(r)&&r.catch(i=>{on(i,e,n)}),r}if(x(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Lt(t[i],e,n,o));return r}else process.env.NODE_ENV!=="production"&&P(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`)}function on(t,e,n,o=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,a=process.env.NODE_ENV!=="production"?nn[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,s,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rt(),St(c,null,10,[t,s,a]),Dt();return}}Ei(t,n,r,o)}function Ei(t,e,n,o=!0){if(process.env.NODE_ENV!=="production"){const r=nn[e];if(n&&yi(n),P(`Unhandled error${r?` during execution of ${r}`:""}`),n&&_i(),o)throw t;console.error(t)}else console.error(t)}let ge=!1,rn=!1;const W=[];let at=0;const Ct=[];let ct=null,$t=0;const fo=Promise.resolve();let sn=null;const Pi=100;function po(t){const e=sn||fo;return t?e.then(this?t.bind(this):t):e}function xi(t){let e=at+1,n=W.length;for(;e<n;){const o=e+n>>>1,r=W[o],i=Mt(r);i<t||i===t&&r.pre?e=o+1:n=o}return e}function an(t){(!W.length||!W.includes(t,ge&&t.allowRecurse?at+1:at))&&(t.id==null?W.push(t):W.splice(xi(t.id),0,t),ho())}function ho(){!ge&&!rn&&(rn=!0,sn=fo.then(go))}function bo(t){x(t)?Ct.push(...t):(!ct||!ct.includes(t,t.allowRecurse?$t+1:$t))&&Ct.push(t),ho()}function ki(t){if(Ct.length){const e=[...new Set(Ct)].sort((n,o)=>Mt(n)-Mt(o));if(Ct.length=0,ct){ct.push(...e);return}for(ct=e,process.env.NODE_ENV!=="production"&&(t=t||new Map),$t=0;$t<ct.length;$t++){const n=ct[$t];process.env.NODE_ENV!=="production"&&mo(t,n)||n.active!==!1&&n()}ct=null,$t=0}}const Mt=t=>t.id==null?1/0:t.id,Ci=(t,e)=>{const n=Mt(t)-Mt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function go(t){rn=!1,ge=!0,process.env.NODE_ENV!=="production"&&(t=t||new Map),W.sort(Ci);const e=process.env.NODE_ENV!=="production"?n=>mo(t,n):Et;try{for(at=0;at<W.length;at++){const n=W[at];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&e(n))continue;St(n,n.i,n.i?15:14)}}}finally{at=0,W.length=0,ki(t),ge=!1,sn=null,(W.length||Ct.length)&&go(t)}}function mo(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Pi){const o=e.i,r=o&&mn(o.type);return on(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else t.set(e,n+1)}}const cn=new Map;process.env.NODE_ENV!=="production"&&(Mn().__VUE_HMR_RUNTIME__={createRecord:ln(Ni),rerender:ln(Ti),reload:ln(ji)});const me=new Map;function Ni(t,e){return me.has(t)?!1:(me.set(t,{initialDef:ve(e),instances:new Set}),!0)}function ve(t){return Yo(t)?t.__vccOpts:t}function Ti(t,e){const n=me.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(o=>{e&&(o.render=e,ve(o.type).render=e),o.renderCache=[],o.effect.dirty=!0,o.update()}))}function ji(t,e){const n=me.get(t);if(!n)return;e=ve(e),vo(n.initialDef,e);const o=[...n.instances];for(let r=0;r<o.length;r++){const i=o[r],s=ve(i.type);let a=cn.get(s);a||(s!==n.initialDef&&vo(s,e),cn.set(s,a=new Set)),a.add(i),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(a.add(i),i.ceReload(e.styles),a.delete(i)):i.parent?(i.parent.effect.dirty=!0,an(()=>{i.parent.update(),a.delete(i)})):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}bo(()=>{cn.clear()})}function vo(t,e){F(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function ln(t){return(e,n)=>{try{return t(e,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let lt,zt=[],un=!1;function Vi(t,...e){lt?lt.emit(t,...e):un||zt.push({event:t,args:e})}function yo(t,e){var n,o;lt=t,lt?(lt.enabled=!0,zt.forEach(({event:r,args:i})=>lt.emit(r,...i)),zt=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{yo(i,e)}),setTimeout(()=>{lt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,un=!0,zt=[])},3e3)):(un=!0,zt=[])}const Ii=Ri("component:updated");/*! #__NO_SIDE_EFFECTS__ */function Ri(t){return e=>{Vi(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}let T=null,_o=null;function So(t){const e=T;return T=t,_o=t&&t.type.__scopeId||null,e}function Di(t,e=T,n){if(!e||t._n)return t;const o=(...r)=>{o._d&&Do(-1);const i=So(e);let s;try{s=t(...r)}finally{So(i),o._d&&Do(1)}return process.env.NODE_ENV!=="production"&&Ii(e),s};return o._n=!0,o._c=!0,o._d=!0,o}function Ai(t,e){if(T===null)return process.env.NODE_ENV!=="production"&&P("withDirectives can only be used inside render functions."),t;const n=Ko(T),o=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,s,a,c=K]=e[r];i&&(C(i)&&(i={mounted:i,updated:i}),i.deep&&ut(s),o.push({dir:i,instance:n,value:s,oldValue:void 0,arg:a,modifiers:c}))}return t}function $o(t,e){t.shapeFlag&6&&t.component?$o(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wo(t,e){return C(t)?F({name:t.name},e,{setup:t}):t}const Li=t=>!!t.type.__asyncLoader;function Mi(t,e,n=dt,o=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{Rt();const a=Ho(n),c=Lt(e,n,t,s);return a(),Dt(),c});return o?r.unshift(i):r.push(i),i}else if(process.env.NODE_ENV!=="production"){const r=Lr(nn[t].replace(/ hook$/,""));P(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const zi=(t=>(e,n=dt)=>{(!gn||t==="sp")&&Mi(t,(...o)=>e(...o),n)})("m"),ye="components",Bi="directives";function Oo(t,e){return dn(ye,t,!0,e)||t}const Eo=Symbol.for("v-ndc");function Ui(t){return z(t)?dn(ye,t,!1)||t:t||Eo}function Fi(t){return dn(Bi,t)}function dn(t,e,n=!0,o=!1){const r=T||dt;if(r){const i=r.type;if(t===ye){const a=mn(i,!1);if(a&&(a===e||a===ie(e)||a===It(ie(e))))return i}const s=Po(r[t]||i[t],e)||Po(r.appContext[t],e);if(!s&&o)return i;if(process.env.NODE_ENV!=="production"&&n&&!s){const a=t===ye?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";P(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return s}else process.env.NODE_ENV!=="production"&&P(`resolve${It(t.slice(0,-1))} can only be used in render() or setup().`)}function Po(t,e){return t&&(t[e]||t[ie(e)]||t[It(ie(e))])}function Bt(t,e,n={},o,r){if(T.isCE||T.parent&&Li(T.parent)&&T.parent.isCE)return e!=="default"&&(n.name=e),ke("slot",n,o&&o());let i=t[e];process.env.NODE_ENV!=="production"&&i&&i.length>1&&(P("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),Q();const s=i&&xo(i(n)),a=Kt($e,{key:(n.key||s&&s.key||`_${e}`)+(!s&&o?"_fb":"")},s||(o?o():[]),s&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function xo(t){return t.some(e=>Lo(e)?!(e.type===we||e.type===$e&&!xo(e.children)):!0)?t:null}const fn=t=>t?ds(t)?Ko(t):fn(t.parent):null,Ut=F(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>process.env.NODE_ENV!=="production"?pe(t.props):t.props,$attrs:t=>process.env.NODE_ENV!=="production"?pe(t.attrs):t.attrs,$slots:t=>process.env.NODE_ENV!=="production"?pe(t.slots):t.slots,$refs:t=>process.env.NODE_ENV!=="production"?pe(t.refs):t.refs,$parent:t=>fn(t.parent),$root:t=>fn(t.root),$emit:t=>t.emit,$options:t=>Wi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,an(t.update)}),$nextTick:t=>t.n||(t.n=po.bind(t.proxy)),$watch:t=>ns.bind(t)}),Hi=t=>t==="_"||t==="$",pn=(t,e)=>t!==K&&!t.__isScriptSetup&&N(t,e),Ki={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:i,accessCache:s,type:a,appContext:c}=t;if(process.env.NODE_ENV!=="production"&&e==="__isVue")return!0;let u;if(e[0]!=="$"){const p=s[e];if(p!==void 0)switch(p){case 1:return o[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(pn(o,e))return s[e]=1,o[e];if(r!==K&&N(r,e))return s[e]=2,r[e];if((u=t.propsOptions[0])&&N(u,e))return s[e]=3,i[e];if(n!==K&&N(n,e))return s[e]=4,n[e];s[e]=0}}const d=Ut[e];let l,f;if(d)return e==="$attrs"?(V(t.attrs,"get",""),process.env.NODE_ENV!=="production"&&void 0):process.env.NODE_ENV!=="production"&&e==="$slots"&&V(t,"get",e),d(t);if((l=a.__cssModules)&&(l=l[e]))return l;if(n!==K&&N(n,e))return s[e]=4,n[e];if(f=c.config.globalProperties,N(f,e))return f[e];process.env.NODE_ENV!=="production"&&T&&(!z(e)||e.indexOf("__v")!==0)&&(r!==K&&Hi(e[0])&&N(r,e)?P(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===T&&P(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:o,setupState:r,ctx:i}=t;return pn(r,e)?(r[e]=n,!0):process.env.NODE_ENV!=="production"&&r.__isScriptSetup&&N(r,e)?(P(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):o!==K&&N(o,e)?(o[e]=n,!0):N(t.props,e)?(process.env.NODE_ENV!=="production"&&P(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(process.env.NODE_ENV!=="production"&&P(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(process.env.NODE_ENV!=="production"&&e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:o,appContext:r,propsOptions:i}},s){let a;return!!n[s]||t!==K&&N(t,s)||pn(e,s)||(a=i[0])&&N(a,s)||N(o,s)||N(Ut,s)||N(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:N(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};process.env.NODE_ENV!=="production"&&(Ki.ownKeys=t=>(P("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t)));function ko(t){return x(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Wi(t){const e=t.type,{mixins:n,extends:o}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!o?c=e:(c={},r.length&&r.forEach(u=>_e(c,u,s,!0)),_e(c,e,s)),j(e)&&i.set(e,c),c}function _e(t,e,n,o=!1){const{mixins:r,extends:i}=e;i&&_e(t,i,n,!0),r&&r.forEach(s=>_e(t,s,n,!0));for(const s in e)if(o&&s==="expose")process.env.NODE_ENV!=="production"&&P('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Yi[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Yi={data:Co,props:To,emits:To,methods:Ft,computed:Ft,beforeCreate:D,created:D,beforeMount:D,mounted:D,beforeUpdate:D,updated:D,beforeDestroy:D,beforeUnmount:D,destroyed:D,unmounted:D,activated:D,deactivated:D,errorCaptured:D,serverPrefetch:D,components:Ft,directives:Ft,watch:qi,provide:Co,inject:Gi};function Co(t,e){return e?t?function(){return F(C(t)?t.call(this,this):t,C(e)?e.call(this,this):e)}:e:t}function Gi(t,e){return Ft(No(t),No(e))}function No(t){if(x(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function D(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?F(Object.create(null),t,e):e}function To(t,e){return t?x(t)&&x(e)?[...new Set([...t,...e])]:F(Object.create(null),ko(t),ko(e??{})):e}function qi(t,e){if(!t)return e;if(!e)return t;const n=F(Object.create(null),t);for(const o in e)n[o]=D(t[o],e[o]);return n}let jo=null;function Ji(t,e,n=!1){const o=dt||T;if(o||jo){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:jo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&C(e)?e.call(o&&o.proxy):e;process.env.NODE_ENV!=="production"&&P(`injection "${String(t)}" not found.`)}else process.env.NODE_ENV!=="production"&&P("inject() can only be used inside setup() or functional components.")}const Zi={},Vo=t=>Object.getPrototypeOf(t)===Zi,Xi=t=>t.__isTeleport,Io=is,Qi=Symbol.for("v-scx"),ts=()=>{{const t=Ji(Qi);return t||process.env.NODE_ENV!=="production"&&P("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}},Se={};function es(t,e,n){return process.env.NODE_ENV!=="production"&&!C(e)&&P("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ro(t,e,n)}function Ro(t,e,{immediate:n,deep:o,flush:r,once:i,onTrack:s,onTrigger:a}=K){if(e&&i){const _=e;e=(...H)=>{_(...H),M()}}process.env.NODE_ENV!=="production"&&o!==void 0&&typeof o=="number"&&P('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),process.env.NODE_ENV!=="production"&&!e&&(n!==void 0&&P('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&P('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&P('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const c=_=>{P("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=dt,d=_=>o===!0?_:ut(_,o===!1?1:void 0);let l,f=!1,p=!1;if(B(t)?(l=()=>t.value,f=X(t)):kt(t)?(l=()=>d(t),f=!0):x(t)?(p=!0,f=t.some(_=>kt(_)||X(_)),l=()=>t.map(_=>{if(B(_))return _.value;if(kt(_))return d(_);if(C(_))return St(_,u,2);process.env.NODE_ENV!=="production"&&c(_)})):C(t)?e?l=()=>St(t,u,2):l=()=>(h&&h(),Lt(t,u,3,[g])):(l=Et,process.env.NODE_ENV!=="production"&&c(t)),e&&o){const _=l;l=()=>ut(_())}let h,g=_=>{h=E.onStop=()=>{St(_,u,4),h=E.onStop=void 0}},$;if(gn)if(g=Et,e?n&&Lt(e,u,3,[l(),p?[]:void 0,g]):l(),r==="sync"){const _=ts();$=_.__watcherHandles||(_.__watcherHandles=[])}else return Et;let y=p?new Array(t.length).fill(Se):Se;const b=()=>{if(!(!E.active||!E.dirty))if(e){const _=E.run();(o||f||(p?_.some((H,nt)=>ot(H,y[nt])):ot(_,y)))&&(h&&h(),Lt(e,u,3,[_,y===Se?void 0:p&&y[0]===Se?[]:y,g]),y=_)}else E.run()};b.allowRecurse=!!e;let m;r==="sync"?m=b:r==="post"?m=()=>Io(b,u&&u.suspense):(b.pre=!0,u&&(b.id=u.uid),m=()=>an(b));const E=new Un(l,Et,m),M=()=>{E.stop()};return process.env.NODE_ENV!=="production"&&(E.onTrack=s,E.onTrigger=a),e?n?b():y=E.run():r==="post"?Io(E.run.bind(E),u&&u.suspense):E.run(),$&&$.push(M),M}function ns(t,e,n){const o=this.proxy,r=z(t)?t.includes(".")?os(o,t):()=>o[t]:t.bind(o,o);let i;C(e)?i=e:(i=e.handler,n=e);const s=Ho(this),a=Ro(r,i.bind(o),n);return s(),a}function os(t,e){const n=e.split(".");return()=>{let o=t;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function ut(t,e=1/0,n){if(e<=0||!j(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,B(t))ut(t.value,e,n);else if(x(t))for(let o=0;o<t.length;o++)ut(t[o],e,n);else if(In(t)||gt(t))t.forEach(o=>{ut(o,e,n)});else if(An(t)){for(const o in t)ut(t[o],e,n);for(const o of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,o)&&ut(t[o],e,n)}return t}function Ja(){}const rs=t=>t.__isSuspense;function is(t,e){e&&e.pendingBranch?x(t)?e.effects.push(...t):e.effects.push(t):bo(t)}const $e=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Oe=[];let U=null;function Q(t=!1){Oe.push(U=t?null:[])}function as(){Oe.pop(),U=Oe[Oe.length-1]||null}let Ht=1;function Do(t){Ht+=t,t<0&&U&&(U.hasOnce=!0)}function Ao(t){return t.dynamicChildren=Ht>0?U||Vr:null,as(),Ht>0&&U&&U.push(t),t}function Ee(t,e,n,o,r,i){return Ao(xe(t,e,n,o,r,i,!0))}function Kt(t,e,n,o,r){return Ao(ke(t,e,n,o,r,!0))}function Lo(t){return t?t.__v_isVNode===!0:!1}const cs=(...t)=>zo(...t),Mo=({key:t})=>t??null,Pe=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?z(t)||B(t)||C(t)?{i:T,r:t,k:e,f:!!n}:t:null);function xe(t,e=null,n=null,o=0,r=null,i=t===$e?0:1,s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mo(e),ref:e&&Pe(e),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:T};return a?(hn(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=z(n)?8:16),process.env.NODE_ENV!=="production"&&c.key!==c.key&&P("VNode created with invalid key (NaN). VNode type:",c.type),Ht>0&&!s&&U&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&U.push(c),c}const ke=process.env.NODE_ENV!=="production"?cs:zo;function zo(t,e=null,n=null,o=0,r=null,i=!1){if((!t||t===Eo)&&(process.env.NODE_ENV!=="production"&&!t&&P(`Invalid vnode type when creating vnode: ${t}.`),t=we),Lo(t)){const a=Ce(t,e,!0);return n&&hn(a,n),Ht>0&&!i&&U&&(a.shapeFlag&6?U[U.indexOf(t)]=a:U.push(a)),a.patchFlag=-2,a}if(Yo(t)&&(t=t.__vccOpts),e){e=ls(e);let{class:a,style:c}=e;a&&!z(a)&&(e.class=Pt(a)),j(c)&&(Qe(c)&&!x(c)&&(c=F({},c)),e.style=Be(c))}const s=z(t)?1:rs(t)?128:Xi(t)?64:j(t)?4:C(t)?2:0;return process.env.NODE_ENV!=="production"&&s&4&&Qe(t)&&(t=S(t),P("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),xe(t,e,n,o,r,s,i,!0)}function ls(t){return t?Qe(t)||Vo(t)?F({},t):t:null}function Ce(t,e,n=!1,o=!1){const{props:r,ref:i,patchFlag:s,children:a,transition:c}=t,u=e?A(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Mo(u),ref:e&&e.ref?n&&i?x(i)?i.concat(Pe(e)):[i,Pe(e)]:Pe(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:process.env.NODE_ENV!=="production"&&s===-1&&x(a)?a.map(Bo):a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&o&&$o(d,c.clone(d)),d}function Bo(t){const e=Ce(t);return x(t.children)&&(e.children=t.children.map(Bo)),e}function Uo(t=" ",e=0){return ke(ss,null,t,e)}function Fo(t="",e=!1){return e?(Q(),Kt(we,null,t)):ke(we,null,t)}function hn(t,e){let n=0;const{shapeFlag:o}=t;if(e==null)e=null;else if(x(e))n=16;else if(typeof e=="object")if(o&65){const r=e.default;r&&(r._c&&(r._d=!1),hn(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Vo(e)?e._ctx=T:r===3&&T&&(T.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else C(e)?(e={default:e,_ctx:T},n=32):(e=String(e),o&64?(n=16,e=[Uo(e)]):n=8);t.children=e,t.shapeFlag|=n}function A(...t){const e={};for(let n=0;n<t.length;n++){const o=t[n];for(const r in o)if(r==="class")e.class!==o.class&&(e.class=Pt([e.class,o.class]));else if(r==="style")e.style=Be([e.style,o.style]);else if(Ir(r)){const i=e[r],s=o[r];s&&i!==s&&!(x(i)&&i.includes(s))&&(e[r]=i?[].concat(i,s):s)}else r!==""&&(e[r]=o[r])}return e}let dt=null;const us=()=>dt||T;let bn;{const t=Mn(),e=(n,o)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(o),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};bn=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),e("__VUE_SSR_SETTERS__",n=>gn=n)}const Ho=t=>{const e=dt;return bn(t),t.scope.on(),()=>{t.scope.off(),bn(e)}};function ds(t){return t.vnode.shapeFlag&4}let gn=!1;process.env.NODE_ENV;function Ko(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vi(di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ut)return Ut[n](t)},has(e,n){return n in e||n in Ut}})):t.proxy}const fs=/(?:^|[-_])(\w)/g,ps=t=>t.replace(fs,e=>e.toUpperCase()).replace(/[-_]/g,"");function mn(t,e=!0){return C(t)?t.displayName||t.name:t.name||e&&t.__name}function Wo(t,e,n=!1){let o=mn(e);if(!o&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&t&&t.parent){const r=i=>{for(const s in i)if(i[s]===e)return s};o=r(t.components||t.parent.type.components)||r(t.appContext.components)}return o?ps(o):n?"App":"Anonymous"}function Yo(t){return C(t)&&"__vccOpts"in t}function hs(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#1677ff"},n={style:"color:#f5222d"},o={style:"color:#eb2f96"},r={__vue_custom_formatter:!0,header(l){return j(l)?l.__isVue?["div",t,"VueInstance"]:B(l)?["div",{},["span",t,d(l)],"<",a(l.value),">"]:kt(l)?["div",{},["span",t,X(l)?"ShallowReactive":"Reactive"],"<",a(l),`>${Z(l)?" (readonly)":""}`]:Z(l)?["div",{},["span",t,X(l)?"ShallowReadonly":"Readonly"],"<",a(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...i(l.$)]}};function i(l){const f=[];l.type.props&&l.props&&f.push(s("props",S(l.props))),l.setupState!==K&&f.push(s("setup",l.setupState)),l.data!==K&&f.push(s("data",S(l.data)));const p=c(l,"computed");p&&f.push(s("computed",p));const h=c(l,"inject");return h&&f.push(s("injected",h)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),f}function s(l,f){return f=F({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(p=>["div",{},["span",o,p+": "],a(f[p],!1)])]]:["span",{}]}function a(l,f=!0){return typeof l=="number"?["span",e,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",o,l]:j(l)?["object",{object:f?S(l):l}]:["span",n,String(l)]}function c(l,f){const p=l.type;if(C(p))return;const h={};for(const g in l.ctx)u(p,g,f)&&(h[g]=l.ctx[g]);return h}function u(l,f,p){const h=l[p];if(x(h)&&h.includes(f)||j(h)&&f in h||l.extends&&u(l.extends,f,p)||l.mixins&&l.mixins.some(g=>u(g,f,p)))return!0}function d(l){return X(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}process.env.NODE_ENV,process.env.NODE_ENV,process.env.NODE_ENV;/**
* vue v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(){hs()}process.env.NODE_ENV!=="production"&&bs();function Nt(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function vn(t){return!!(t&&t.constructor&&t.call&&t.apply)}function I(t){return!Nt(t)}function ft(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function q(t,...e){return vn(t)?t(...e):t}function L(t,e=!0){return typeof t=="string"&&(e||t!=="")}function Y(t){return L(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function yn(t,e="",n={}){const o=Y(e).split("."),r=o.shift();return r?ft(t)?yn(q(t[Object.keys(t).find(i=>Y(i)===r)||""],n),o.join("."),n):void 0:q(t,n)}function _n(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function Go(t){return I(t)&&!isNaN(t)}function tt(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function Wt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function gs(t){return L(t,!1)?t[0].toUpperCase()+t.slice(1):t}function qo(t){return L(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function Jo(t){return L(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}function Zo(){const t=new Map;return{on(e,n){let o=t.get(e);return o?o.push(n):o=[n],t.set(e,o),this},off(e,n){let o=t.get(e);return o&&o.splice(o.indexOf(n)>>>0,1),this},emit(e,n){let o=t.get(e);o&&o.slice().map(r=>{r(n)})},clear(){t.clear()}}}var ms=Object.defineProperty,vs=Object.defineProperties,ys=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,Xo=Object.prototype.hasOwnProperty,Qo=Object.prototype.propertyIsEnumerable,tr=(t,e,n)=>e in t?ms(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yt=(t,e)=>{for(var n in e||(e={}))Xo.call(e,n)&&tr(t,n,e[n]);if(Ne)for(var n of Ne(e))Qo.call(e,n)&&tr(t,n,e[n]);return t},Sn=(t,e)=>vs(t,ys(e)),Gt=(t,e)=>{var n={};for(var o in t)Xo.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Ne)for(var o of Ne(t))e.indexOf(o)<0&&Qo.call(t,o)&&(n[o]=t[o]);return n},_s=Zo(),et=_s;function er(t,e){_n(t)?t.push(...e||[]):ft(t)&&Object.assign(t,e)}function Ss(t){return ft(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function nr(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(o=>e.endsWith(o))?t:`${t}`.trim().split(" ").map(i=>Go(i)?`${i}px`:i).join(" ")}function $s(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function $n(t="",e=""){return $s(`${L(t,!1)&&L(e,!1)?`${t}-`:t}${e}`)}function or(t="",e=""){return`--${$n(t,e)}`}function rr(t,e="",n="",o=[],r){if(L(t)){const i=/{([^}]*)}/g,s=t.trim();if(tt(s,i)){const a=s.replaceAll(i,d=>{const f=d.replace(/{|}/g,"").split(".").filter(p=>!o.some(h=>tt(p,h)));return`var(${or(n,qo(f.join("-")))}${I(r)?`, ${r}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return tt(a.replace(u,"0"),c)?`calc(${a})`:a}return nr(s,e)}else if(Go(t))return nr(t,e)}function ws(t,e,n){L(e,!1)&&t.push(`${e}:${n};`)}function qt(t,e){return t?`${t}{${e}}`:""}var wn=(...t)=>Os(k.getTheme(),...t),Os=(t={},e,n,o="variable")=>{if(e){const{variable:r,options:i}=k.defaults||{},{prefix:s,transform:a}=(t==null?void 0:t.options)||i||{},u=tt(e,/{([^}]*)}/g)?e:`{${e}}`;return o==="value"||a==="strict"?k.getTokenValue(e):rr(u,void 0,s,[r.excludedKeyRegex],n)}return""};function Es(t,e={}){const n=k.defaults.variable,{prefix:o=n.prefix,selector:r=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=e,s=(u,d="")=>Object.entries(u).reduce((l,[f,p])=>{const h=tt(f,i)?$n(d):$n(d,qo(f)),g=Ss(p);if(ft(g)){const{variables:$,tokens:y}=s(g,h);er(l.tokens,y),er(l.variables,$)}else l.tokens.push((o?h.replace(`${o}-`,""):h).replaceAll("-",".")),ws(l.variables,or(h),rr(g,h,o,[i]));return l},{variables:[],tokens:[]}),{variables:a,tokens:c}=s(t,o);return{value:a,tokens:c,declarations:a.join(""),css:qt(r,a.join(""))}}var G={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var o;return(o=e.map(r=>r.resolve(n)).find(r=>r.matched))!=null?o:this.rules.custom.resolve(n)})}},_toVariables(t,e){return Es(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:o,defaults:r}){var i,s,a,c;const{preset:u,options:d}=e;let l,f,p,h;if(I(u)){const{primitive:g,semantic:$}=u,y=$||{},{colorScheme:b}=y,m=Gt(y,["colorScheme"]),E=b||{},{dark:M}=E,_=Gt(E,["dark"]),H=I(g)?this._toVariables({primitive:g},d):{},nt=I(m)?this._toVariables({semantic:m},d):{},ht=I(_)?this._toVariables({light:_},d):{},wt=I(M)?this._toVariables({dark:M},d):{},[Ot,Tt]=[(i=H.declarations)!=null?i:"",H.tokens],[Cn,De]=[(s=nt.declarations)!=null?s:"",nt.tokens||[]],[Ae,Nn]=[(a=ht.declarations)!=null?a:"",ht.tokens||[]],[Le,Tn]=[(c=wt.declarations)!=null?c:"",wt.tokens||[]];l=this.transformCSS(t,Ot,"light","variable",d,o,r),f=Tt;const jn=this.transformCSS(t,`${Cn}${Ae}color-scheme:light`,"light","variable",d,o,r),jt=this.transformCSS(t,`${Le}color-scheme:dark`,"dark","variable",d,o,r);p=`${jn}${jt}`,h=[...new Set([...De,...Nn,...Tn])]}return{primitive:{css:l,tokens:f},semantic:{css:p,tokens:h}}},getPreset({name:t="",preset:e={},options:n,params:o,set:r,defaults:i,selector:s}){var a,c,u;const d=t.replace("-directive",""),l=e,{colorScheme:f}=l,p=Gt(l,["colorScheme"]),h=f||{},{dark:g}=h,$=Gt(h,["dark"]),y=I(p)?this._toVariables({[d]:p},n):{},b=I($)?this._toVariables({[d]:$},n):{},m=I(g)?this._toVariables({[d]:g},n):{},[E,M]=[(a=y.declarations)!=null?a:"",y.tokens||[]],[_,H]=[(c=b.declarations)!=null?c:"",b.tokens||[]],[nt,ht]=[(u=m.declarations)!=null?u:"",m.tokens||[]],wt=[...new Set([...M,...H,...ht])],Ot=this.transformCSS(d,`${E}${_}`,"light","variable",n,r,i,s),Tt=this.transformCSS(d,nt,"dark","variable",n,r,i,s);return{css:`${Ot}${Tt}`,tokens:wt}},getPresetC({name:t="",theme:e={},params:n,set:o,defaults:r}){var i;const{preset:s,options:a}=e,c=(i=s==null?void 0:s.components)==null?void 0:i[t];return this.getPreset({name:t,preset:c,options:a,params:n,set:o,defaults:r})},getPresetD({name:t="",theme:e={},params:n,set:o,defaults:r}){var i;const s=t.replace("-directive",""),{preset:a,options:c}=e,u=(i=a==null?void 0:a.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:u,options:c,params:n,set:o,defaults:r})},getColorSchemeOption(t,e){var n;return this.regex.resolve((n=t.darkModeSelector)!=null?n:e.options.darkModeSelector)},getLayerOrder(t,e={},n,o){const{cssLayer:r}=e;return r?`@layer ${q(r.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:o={},set:r,defaults:i}){const s=this.getCommon({name:t,theme:e,params:n,set:r,defaults:i}),a=Object.entries(o).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[u,d])=>{if(d!=null&&d.css){const l=Wt(d==null?void 0:d.css),f=`${u}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${l}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:o={},set:r,defaults:i}){var s;const a={name:t,theme:e,params:n,set:r,defaults:i},c=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(o).reduce((d,[l,f])=>d.push(`${l}="${f}"`)&&d,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Wt(c)}</style>`:""},createTokens(t={},e,n="",o="",r={}){return Object.entries(t).forEach(([i,s])=>{const a=tt(i,e.variable.excludedKeyRegex)?n:n?`${n}.${Jo(i)}`:Jo(i),c=o?`${o}.${i}`:i;ft(s)?this.createTokens(s,e,a,c,r):(r[a]||(r[a]={paths:[],computed(u,d={}){if(u){const l=this.paths.find(f=>f.scheme===u)||this.paths.find(f=>f.scheme==="none");return l==null?void 0:l.computed(u,d.binding)}return this.paths.map(l=>l.computed(l.scheme,d[l.scheme]))}}),r[a].paths.push({path:c,value:s,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(u,d={}){const l=/{([^}]*)}/g;let f=s;if(d.name=this.path,d.binding||(d.binding={}),tt(s,l)){const h=s.trim().replaceAll(l,y=>{var b,m;const E=y.replace(/{|}/g,"");return(m=(b=r[E])==null?void 0:b.computed(u,d))==null?void 0:m.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,$=/var\([^)]+\)/g;f=tt(h.replace($,"0"),g)?`calc(${h})`:h}return Nt(d.binding)&&delete d.binding,{colorScheme:u,path:this.path,paths:d,value:f.includes("undefined")?void 0:f}}}))}),r},getTokenValue(t,e,n){var o;const i=(c=>c.split(".").filter(d=>!tt(d.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(o=t[i])==null?void 0:o.computed(s)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},u)=>{const d=u,{colorScheme:l}=d,f=Gt(d,["colorScheme"]);return c[l]=f,c},void 0)},transformCSS(t,e,n,o,r={},i,s,a){if(I(e)){const{cssLayer:c}=r;if(o!=="style"){const u=this.getColorSchemeOption(r,s),d=a?qt(a,e):e;e=n==="dark"?u.reduce((l,{selector:f})=>(I(f)&&(l+=f.includes("[CSS]")?f.replace("[CSS]",d):qt(f,d)),l),""):qt(a??":root",e)}if(c){const u={name:"primeui",order:"primeui"};ft(c)&&(u.name=q(c.name,{name:t,type:o})),I(u.name)&&(e=qt(`@layer ${u.name}`,e),i==null||i.layerNames(u.name))}return e}return""}},k={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=Sn(Yt({},e),{options:Yt(Yt({},this.defaults.options),e.options)}),this._tokens=G.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),et.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Sn(Yt({},this.theme),{preset:t}),this._tokens=G.createTokens(t,this.defaults),this.clearLoadedStyleNames(),et.emit("preset:change",t),et.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Sn(Yt({},this.theme),{options:t}),this.clearLoadedStyleNames(),et.emit("options:change",t),et.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return G.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return G.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetD(n)},getCustomPreset(t="",e,n,o){const r={name:t,preset:e,options:this.options,selector:n,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPreset(r)},getLayerOrderCSS(t=""){return G.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",o){return G.transformCSS(t,e,o,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return G.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return G.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),et.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&et.emit("theme:load"))}};function Ps(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function xs(t,e){if(t&&e){const n=o=>{Ps(t,o)||(t.classList?t.classList.add(o):t.className+=" "+o)};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function On(t,e){if(t&&e){const n=o=>{t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function ks(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function Te(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function je(t,e={}){if(Te(t)){const n=(o,r)=>{var i,s;const a=(i=t==null?void 0:t.$attrs)!=null&&i[o]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[o]]:[];return[r].flat().reduce((c,u)=>{if(u!=null){const d=typeof u;if(d==="string"||d==="number")c.push(u);else if(d==="object"){const l=Array.isArray(u)?n(o,u):Object.entries(u).map(([f,p])=>o==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);c=l.length?c.concat(l.filter(f=>!!f)):c}}return c},a)};Object.entries(e).forEach(([o,r])=>{if(r!=null){const i=o.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),r):o==="p-bind"?je(t,r):(r=o==="class"?[...new Set(n("class",r))].join(" ").trim():o==="style"?n("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=r),t.setAttribute(o,r))}})}}function Cs(t,e={},...n){{const o=document.createElement(t);return je(o,e),o.append(...n),o}}function Ns(t,e){return Te(t)?t.matches(e)?t:t.querySelector(e):null}function Ts(t,e){if(Te(t)){const n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function ir(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0}function js(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Vs(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Is(t,e){return t?t.offsetHeight:0}function Rs(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&js(t))}function sr(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0}function Ds(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function As(t,e="",n){Te(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}var pt={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Jt(t){"@babel/helpers - typeof";return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(t)}function ar(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ar(Object(n),!0).forEach(function(o){Ls(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ar(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Ls(t,e,n){return(e=Ms(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ms(t){var e=zs(t,"string");return Jt(e)=="symbol"?e:e+""}function zs(t,e){if(Jt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Jt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Bs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;us()?zi(t):e?t():po(t)}var Us=0;function Fs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=be(!1),o=be(t),r=be(null),i=Ds()?window.document:void 0,s=e.document,a=s===void 0?i:s,c=e.immediate,u=c===void 0?!0:c,d=e.manual,l=d===void 0?!1:d,f=e.name,p=f===void 0?"style_".concat(++Us):f,h=e.id,g=h===void 0?void 0:h,$=e.media,y=$===void 0?void 0:$,b=e.nonce,m=b===void 0?void 0:b,E=e.first,M=E===void 0?!1:E,_=e.onMounted,H=_===void 0?void 0:_,nt=e.onUpdated,ht=nt===void 0?void 0:nt,wt=e.onLoad,Ot=wt===void 0?void 0:wt,Tt=e.props,Cn=Tt===void 0?{}:Tt,De=function(){},Ae=function(Tn){var jn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var jt=cr(cr({},Cn),jn),oe=jt.name||p,jr=jt.id||g,Ga=jt.nonce||m;r.value=a.querySelector('style[data-primevue-style-id="'.concat(oe,'"]'))||a.getElementById(jr)||a.createElement("style"),r.value.isConnected||(o.value=Tn||t,je(r.value,{type:"text/css",id:jr,media:y,nonce:Ga}),M?a.head.prepend(r.value):a.head.appendChild(r.value),As(r.value,"data-primevue-style-id",oe),je(r.value,jt),r.value.onload=function(Vn){return Ot==null?void 0:Ot(Vn,{name:oe})},H==null||H(oe)),!n.value&&(De=es(o,function(Vn){r.value.textContent=Vn,ht==null||ht(oe)},{immediate:!0}),n.value=!0)}},Nn=function(){!a||!n.value||(De(),Rs(r.value)&&a.head.removeChild(r.value),n.value=!1)};return u&&!l&&Bs(Ae),{id:g,name:p,el:r,css:o,unload:Nn,load:Ae,isLoaded:Ze(n)}}function Zt(t){"@babel/helpers - typeof";return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zt(t)}function lr(t,e){return Ys(t)||Ws(t,e)||Ks(t,e)||Hs()}function Hs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(t,e){if(t){if(typeof t=="string")return ur(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ur(t,e):void 0}}function ur(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function Ws(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,s,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(c=(o=i.call(n)).done)&&(a.push(o.value),a.length!==e);c=!0);}catch(d){u=!0,r=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return a}}function Ys(t){if(Array.isArray(t))return t}function dr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function En(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dr(Object(n),!0).forEach(function(o){Gs(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Gs(t,e,n){return(e=qs(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qs(t){var e=Js(t,"string");return Zt(e)=="symbol"?e:e+""}function Js(t,e){if(Zt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Zt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Zs=function(e){var n=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},Xs=function(e){var n=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},Qs={},ta={},R={name:"base",css:Xs,theme:Zs,classes:Qs,inlineStyles:ta,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},r=o(q(e,{dt:wn}));return r?Fs(Wt(r),En({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(o){return k.transformCSS(n.name||e.name,o)})},getCommonTheme:function(e){return k.getCommon(this.name,e)},getComponentTheme:function(e){return k.getComponent(this.name,e)},getDirectiveTheme:function(e){return k.getDirective(this.name,e)},getPresetTheme:function(e,n,o){return k.getCustomPreset(this.name,e,n,o)},getLayerOrderThemeCSS:function(){return k.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=q(this.css,{dt:wn}),r=Wt("".concat(o).concat(e)),i=Object.entries(n).reduce(function(s,a){var c=lr(a,2),u=c[0],d=c[1];return s.push("".concat(u,'="').concat(d,'"'))&&s},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(r,"</style>")}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return k.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[k.getStyleSheet(this.name,e,n)];if(this.theme){var r=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=q(this.theme,{dt:wn}),s=Wt(k.transformCSS(r,i)),a=Object.entries(n).reduce(function(c,u){var d=lr(u,2),l=d[0],f=d[1];return c.push("".concat(l,'="').concat(f,'"'))&&c},[]).join(" ");o.push('<style type="text/css" data-primevue-style-id="'.concat(r,'" ').concat(a,">").concat(s,"</style>"))}return o.join("")},extend:function(e){return En(En({},this),{},{css:void 0,theme:void 0},e)}},Ve={};function ea(t="pui_id_"){return Ve.hasOwnProperty(t)||(Ve[t]=0),Ve[t]++,`${t}${Ve[t]}`}function fr(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ea(t)}var pr=R.extend({name:"common"});function Xt(t){"@babel/helpers - typeof";return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt(t)}function na(t){return mr(t)||oa(t)||br(t)||hr()}function oa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ie(t,e){return mr(t)||ra(t,e)||br(t,e)||hr()}function hr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(t,e){if(t){if(typeof t=="string")return gr(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gr(t,e):void 0}}function gr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function ra(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,s,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(a.push(o.value),a.length!==e);c=!0);}catch(d){u=!0,r=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return a}}function mr(t){if(Array.isArray(t))return t}function vr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vr(Object(n),!0).forEach(function(o){Re(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vr(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Re(t,e,n){return(e=ia(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ia(t){var e=sa(t,"string");return Xt(e)=="symbol"?e:e+""}function sa(t,e){if(Xt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Xt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Pn={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,beforeCreate:function(){var e,n,o,r,i,s,a,c,u,d,l,f=(e=this.pt)===null||e===void 0?void 0:e._usept,p=f?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,h=f?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(r=h||p)===null||r===void 0||(r=r.hooks)===null||r===void 0||(i=r.onBeforeCreate)===null||i===void 0||i.call(r);var g=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,$=g?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,y=g?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(d=y||$)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(l=d.onBeforeCreate)===null||l===void 0||l.call(d)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this.rootEl=Ns(this.$el,'[data-pc-name="'.concat(Y(this.$.type.name),'"]')),this.rootEl&&(this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=w({name:this.$.type.name},this.$params)),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),o==null||o()}},_mergeProps:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return vn(e)?e.apply(void 0,o):A.apply(void 0,o)},_loadStyles:function(){var e=this,n=function(){pt.isStyleNameLoaded("base")||(R.loadCSS(e.$styleOptions),e._loadGlobalStyles(),pt.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!pt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(pr.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),pt.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);I(e)&&R.load(e,w({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!this.isUnstyled){if(!k.isStyleNameLoaded("common")){var o,r,i=((o=this.$style)===null||o===void 0||(r=o.getCommonTheme)===null||r===void 0?void 0:r.call(o))||{},s=i.primitive,a=i.semantic;R.load(s==null?void 0:s.css,w({name:"primitive-variables"},this.$styleOptions)),R.load(a==null?void 0:a.css,w({name:"semantic-variables"},this.$styleOptions)),R.loadTheme(w({name:"global-style"},this.$styleOptions)),k.setLoadedStyleName("common")}if(!k.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var c,u,d,l,f=((c=this.$style)===null||c===void 0||(u=c.getComponentTheme)===null||u===void 0?void 0:u.call(c))||{},p=f.css;(d=this.$style)===null||d===void 0||d.load(p,w({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(l=this.$style)===null||l===void 0||l.loadTheme(w({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),k.setLoadedStyleName(this.$style.name)}if(!k.isStyleNameLoaded("layer-order")){var h,g,$=(h=this.$style)===null||h===void 0||(g=h.getLayerOrderThemeCSS)===null||g===void 0?void 0:g.call(h);R.load($,w({name:"layer-order",first:!0},this.$styleOptions)),k.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,o,r,i=((n=this.$style)===null||n===void 0||(o=n.getPresetTheme)===null||o===void 0?void 0:o.call(n,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(r=this.$style)===null||r===void 0?void 0:r.load(s,w({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};pt.clearLoadedStyleNames(),et.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return yn(e,n,o)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(o)&&!!r[o.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},c=a.mergeSections,u=c===void 0?!0:c,d=a.mergeProps,l=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,o,r):this._useDefaultPT(this._getPTClassValue,o,r):void 0,p=s?void 0:this._getPTSelf(n,this._getPTClassValue,o,w(w({},r),{},{global:f||{}})),h=this._getPTDatasets(o);return u||!u&&p?l?this._mergeProps(l,f,p,h):w(w(w({},f),p),h):w(w({},p),h)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return A(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",i=o==="root"&&I((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return o!=="transition"&&w(w({},o==="root"&&w(Re({},"".concat(r,"name"),Y(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&Re({},"".concat(r,"extend"),Y(this.$.type.name)))),{},Re({},"".concat(r,"section"),Y(o)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return L(e)||_n(e)?{class:e}:e},_getPT:function(e){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(a){var c,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=r?r(a):a,l=Y(o),f=Y(n.$name);return(c=u?l!==f?d==null?void 0:d[l]:void 0:d==null?void 0:d[l])!==null&&c!==void 0?c:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,n,o,r){var i=function(g){return n(g,o,r)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},c=a.mergeSections,u=c===void 0?!0:c,d=a.mergeProps,l=d===void 0?!1:d,f=i(e.originalValue),p=i(e.value);return f===void 0&&p===void 0?void 0:L(p)?p:L(f)?f:u||!u&&p?l?this._mergeProps(l,f,p):w(w({},f),p):p}return i(e)},_useGlobalPT:function(e,n,o){return this._usePT(this.globalPT,e,n,o)},_useDefaultPT:function(e,n,o){return this._usePT(this.defaultPT,e,n,o)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,w(w({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return A(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,w({instance:this},o),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,w(w({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,e,w(w({},this.$params),o)),i=this._getOptionValue(pr.inlineStyles,e,w(w({},this.$params),o));return[i,r]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return q(o,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return n._getOptionValue(o,n.$name,w({},n.$params))||q(o,w({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return w(w({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Ie(e,1),o=n[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(e,n){var o=Ie(n,2),r=o[0],i=o[1],s=r.split(":"),a=na(s),c=a.slice(1);return c==null||c.reduce(function(u,d,l,f){return!u[d]&&(u[d]=l===f.length-1?i:{}),u[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Ie(e,1),o=n[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(e,n){var o=Ie(n,2),r=o[0],i=o[1];return e[r]=i,e},{})},$attrSelector:function(){return fr("pc")}}},aa=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ca=R.extend({name:"baseicon",css:aa});function Qt(t){"@babel/helpers - typeof";return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt(t)}function yr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function _r(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yr(Object(n),!0).forEach(function(o){la(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function la(t,e,n){return(e=ua(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ua(t){var e=da(t,"string");return Qt(e)=="symbol"?e:e+""}function da(t,e){if(Qt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Qt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var fa={name:"BaseIcon",extends:Pn,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:ca,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Nt(this.label);return _r(_r({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Sr={name:"SpinnerIcon",extends:fa},pa=xe("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),ha=[pa];function ba(t,e,n,o,r,i){return Q(),Ee("svg",A({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),ha,16)}Sr.render=ba;var ga=function(e){var n=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
}
`)},ma={root:function(e){var n=e.props,o=e.instance;return["p-badge p-component",{"p-badge-circle":I(n.value)&&String(n.value).length===1,"p-badge-dot":Nt(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},va=R.extend({name:"badge",theme:ga,classes:ma}),ya={name:"BaseBadge",extends:Pn,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:va,provide:function(){return{$pcBadge:this,$parentInstance:this}}},$r={name:"Badge",extends:ya,inheritAttrs:!1};function _a(t,e,n,o,r,i){return Q(),Ee("span",A({class:t.cx("root")},t.ptmi("root")),[Bt(t.$slots,"default",{},function(){return[Uo(se(t.value),1)]})],16)}$r.render=_a;var wr=Zo();function te(t){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(t)}function Or(t,e){return Oa(t)||wa(t,e)||$a(t,e)||Sa()}function Sa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $a(t,e){if(t){if(typeof t=="string")return Er(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Er(t,e):void 0}}function Er(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function wa(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,s,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(c=(o=i.call(n)).done)&&(a.push(o.value),a.length!==e);c=!0);}catch(d){u=!0,r=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return a}}function Oa(t){if(Array.isArray(t))return t}function Pr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pr(Object(n),!0).forEach(function(o){xn(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pr(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function xn(t,e,n){return(e=Ea(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ea(t){var e=Pa(t,"string");return te(e)=="symbol"?e:e+""}function Pa(t,e){if(te(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(te(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var v={_getMeta:function(){return[ft(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],q(ft(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var o,r,i;return(o=(e==null||(r=e.instance)===null||r===void 0?void 0:r.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:yn,_getPTValue:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var b=v._getOptionValue.apply(v,arguments);return L(b)||_n(b)?{class:b}:b},u=((e=o.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=o.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},d=u.mergeSections,l=d===void 0?!0:d,f=u.mergeProps,p=f===void 0?!1:f,h=a?v._useDefaultPT(o,o.defaultPT(),c,i,s):void 0,g=v._usePT(o,v._getPT(r,o.$name),c,i,O(O({},s),{},{global:h||{}})),$=v._getPTDatasets(o,i);return l||!l&&g?p?v._mergeProps(o,p,h,g,$):O(O(O({},h),g),$):O(O({},g),$)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return O(O({},n==="root"&&xn({},"".concat(o,"name"),Y(e.$name))),{},xn({},"".concat(o,"section"),Y(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=function(s){var a,c=o?o(s):s,u=Y(n);return(a=c==null?void 0:c[u])!==null&&a!==void 0?a:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function($){return o($,r,i)};if(n!=null&&n.hasOwnProperty("_usept")){var a,c=n._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,l=c.mergeProps,f=l===void 0?!1:l,p=s(n.originalValue),h=s(n.value);return p===void 0&&h===void 0?void 0:L(h)?h:L(p)?p:d||!d&&h?f?v._mergeProps(e,f,p,h):O(O({},p),h):h}return s(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return v._usePT(e,n,o,r,i)},_loadStyles:function(e,n,o){var r,i=v._getConfig(n,o),s={nonce:i==null||(r=i.csp)===null||r===void 0?void 0:r.nonce};v._loadCoreStyles(e.$instance,s),v._loadThemeStyles(e.$instance,s),v._loadScopedThemeStyles(e.$instance,s),v._themeChangeListener(function(){return v._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!pt.isStyleNameLoaded((e=o.$style)===null||e===void 0?void 0:e.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var i;R.loadCSS(r),o.isUnstyled()&&((i=o.$style)===null||i===void 0||i.loadCSS(r)),pt.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled())){if(!k.isStyleNameLoaded("common")){var i,s,a=((i=o.$style)===null||i===void 0||(s=i.getCommonTheme)===null||s===void 0?void 0:s.call(i))||{},c=a.primitive,u=a.semantic;R.load(c==null?void 0:c.css,O({name:"primitive-variables"},r)),R.load(u==null?void 0:u.css,O({name:"semantic-variables"},r)),R.loadTheme(O({name:"global-style"},r)),k.setLoadedStyleName("common")}if(!k.isStyleNameLoaded((e=o.$style)===null||e===void 0?void 0:e.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var d,l,f,p,h=((d=o.$style)===null||d===void 0||(l=d.getDirectiveTheme)===null||l===void 0?void 0:l.call(d))||{},g=h.css;(f=o.$style)===null||f===void 0||f.load(g,O({name:"".concat(o.$style.name,"-variables")},r)),(p=o.$style)===null||p===void 0||p.loadTheme(O({name:"".concat(o.$style.name,"-style")},r)),k.setLoadedStyleName(o.$style.name)}if(!k.isStyleNameLoaded("layer-order")){var $,y,b=($=o.$style)===null||$===void 0||(y=$.getLayerOrderThemeCSS)===null||y===void 0?void 0:y.call($);R.load(b,O({name:"layer-order",first:!0},r)),k.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=e.preset();if(o&&e.$attrSelector){var r,i,s,a=((r=e.$style)===null||r===void 0||(i=r.getPresetTheme)===null||i===void 0?void 0:i.call(r,o,"[".concat(e.$attrSelector,"]")))||{},c=a.css,u=(s=e.$style)===null||s===void 0?void 0:s.load(c,O({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=u.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};pt.clearLoadedStyleNames(),et.on("theme:change",e)},_hook:function(e,n,o,r,i,s){var a,c,u="on".concat(gs(n)),d=v._getConfig(r,i),l=o==null?void 0:o.$instance,f=v._usePT(l,v._getPT(r==null||(a=r.value)===null||a===void 0?void 0:a.pt,e),v._getOptionValue,"hooks.".concat(u)),p=v._useDefaultPT(l,d==null||(c=d.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],v._getOptionValue,"hooks.".concat(u)),h={el:o,binding:r,vnode:i,prevVnode:s};f==null||f(l,h),p==null||p(l,h)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return vn(e)?e.apply(void 0,o):A.apply(void 0,o)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(s,a,c,u,d){var l,f,p;a._$instances=a._$instances||{};var h=v._getConfig(c,u),g=a._$instances[e]||{},$=Nt(g)?O(O({},n),n==null?void 0:n.methods):{};a._$instances[e]=O(O({},g),{},{$name:e,$host:a,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:g.$el||a||void 0,$style:O({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:h,$attrSelector:a.$attrSelector,defaultPT:function(){return v._getPT(h==null?void 0:h.pt,void 0,function(b){var m;return b==null||(m=b.directives)===null||m===void 0?void 0:m[e]})},isUnstyled:function(){var b,m;return((b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(m=a.$instance)===null||m===void 0||(m=m.$binding)===null||m===void 0||(m=m.value)===null||m===void 0?void 0:m.unstyled:h==null?void 0:h.unstyled},theme:function(){var b;return(b=a.$instance)===null||b===void 0||(b=b.$primevueConfig)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return v._getPTValue(a.$instance,(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,m,O({},E))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v._getPTValue(a.$instance,b,m,E,!1)},cx:function(){var b,m,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=a.$instance)!==null&&b!==void 0&&b.isUnstyled()?void 0:v._getOptionValue((m=a.$instance)===null||m===void 0||(m=m.$style)===null||m===void 0?void 0:m.classes,E,O({},M))},sx:function(){var b,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E?v._getOptionValue((b=a.$instance)===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,m,O({},M)):void 0}},$),a.$instance=a._$instances[e],(l=(f=a.$instance)[s])===null||l===void 0||l.call(f,a,c,u,d),a["$".concat(e)]=a.$instance,v._hook(e,s,a,c,u,d),a.$pd||(a.$pd={}),a.$pd[e]=O(O({},(p=a.$pd)===null||p===void 0?void 0:p[e]),{},{name:e,instance:a.$instance})},r=function(s){var a,c,u,d,l,f=(a=s.$instance)===null||a===void 0?void 0:a.watch;f==null||(c=f.config)===null||c===void 0||c.call(s.$instance,(u=s.$instance)===null||u===void 0?void 0:u.$primevueConfig),wr.on("config:change",function(p){var h,g=p.newValue,$=p.oldValue;return f==null||(h=f.config)===null||h===void 0?void 0:h.call(s.$instance,g,$)}),f==null||(d=f["config.ripple"])===null||d===void 0||d.call(s.$instance,(l=s.$instance)===null||l===void 0||(l=l.$primevueConfig)===null||l===void 0?void 0:l.ripple),wr.on("config:ripple:change",function(p){var h,g=p.newValue,$=p.oldValue;return f==null||(h=f["config.ripple"])===null||h===void 0?void 0:h.call(s.$instance,g,$)})};return{created:function(s,a,c,u){o("created",s,a,c,u)},beforeMount:function(s,a,c,u){s.$attrSelector=fr("pd"),v._loadStyles(s,a,c),o("beforeMount",s,a,c,u),r(s)},mounted:function(s,a,c,u){v._loadStyles(s,a,c),o("mounted",s,a,c,u)},beforeUpdate:function(s,a,c,u){o("beforeUpdate",s,a,c,u)},updated:function(s,a,c,u){v._loadStyles(s,a,c),o("updated",s,a,c,u)},beforeUnmount:function(s,a,c,u){o("beforeUnmount",s,a,c,u)},unmounted:function(s,a,c,u){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),o("unmounted",s,a,c,u)}}},extend:function(){var e=v._getMeta.apply(v,arguments),n=Or(e,2),o=n[0],r=n[1];return O({extend:function(){var s=v._getMeta.apply(v,arguments),a=Or(s,2),c=a[0],u=a[1];return v.extend(c,O(O(O({},r),r==null?void 0:r.methods),u))}},v._extend(o,r))}},xa=function(e){var n=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},ka={root:"p-ink"},Ca=R.extend({name:"ripple-directive",theme:xa,classes:ka}),Na=v.extend({style:Ca});function ee(t){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(t)}function Ta(t){return Ra(t)||Ia(t)||Va(t)||ja()}function ja(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Va(t,e){if(t){if(typeof t=="string")return kn(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kn(t,e):void 0}}function Ia(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ra(t){if(Array.isArray(t))return kn(t)}function kn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function xr(t,e,n){return(e=Da(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Da(t){var e=Aa(t,"string");return ee(e)=="symbol"?e:e+""}function Aa(t,e){if(ee(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(ee(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var La=Na.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=Cs("span",xr(xr({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,o=e.currentTarget,r=this.getInk(o);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&On(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!ir(r)&&!sr(r)){var i=Math.max(ks(o),Is(o));r.style.height=i+"px",r.style.width=i+"px"}var s=Vs(o),a=e.pageX-s.left+document.body.scrollTop-sr(r)/2,c=e.pageY-s.top+document.body.scrollLeft-ir(r)/2;r.style.top=c+"px",r.style.left=a+"px",!this.isUnstyled()&&xs(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.isUnstyled()&&On(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&On(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Ta(e.children).find(function(n){return Ts(n,"data-pc-name")==="ripple"}):void 0}}});function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function J(t,e,n){return(e=Ma(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ma(t){var e=za(t,"string");return ne(e)=="symbol"?e:e+""}function za(t,e){if(ne(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(ne(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ba=function(e){var n=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: `).concat(n("button.padding.y")," ").concat(n("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"),", color ").concat(n("button.transition.duration"),", border-color ").concat(n("button.transition.duration"),`,
            outline-color `).concat(n("button.transition.duration"),", box-shadow ").concat(n("button.transition.duration"),`;
    border-radius: `).concat(n("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(n("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"),`;
    padding: `).concat(n("button.sm.padding.y")," ").concat(n("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"),`;
    padding: `).concat(n("button.lg.padding.y")," ").concat(n("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"),`;
    outline: `).concat(n("button.focus.ring.width")," ").concat(n("button.focus.ring.style")," ").concat(n("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(n("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"),`;
    height: `).concat(n("button.badge.size"),`;
    line-height: `).concat(n("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"),`;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"),`;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"),`;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}
`)},Ua={root:function(e){var n=e.instance,o=e.props;return["p-button p-component",J(J(J(J(J(J(J(J(J({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text),"p-button-outlined",o.outlined),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var n=e.props;return["p-button-icon",J({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},Fa=R.extend({name:"button",theme:Ba,classes:Ua}),Ha={name:"BaseButton",extends:Pn,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:Fa,provide:function(){return{$pcButton:this,$parentInstance:this}}},kr={name:"Button",extends:Ha,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return A(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Nt(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Sr,Badge:$r},directives:{ripple:La}};function Ka(t,e,n,o,r,i){var s=Oo("SpinnerIcon"),a=Oo("Badge"),c=Fi("ripple");return t.asChild?Bt(t.$slots,"default",{key:1,class:Pt(t.cx("root")),a11yAttrs:i.a11yAttrs}):Ai((Q(),Kt(Ui(t.as),A({key:0,class:t.cx("root")},i.attrs),{default:Di(function(){return[Bt(t.$slots,"default",{},function(){return[t.loading?Bt(t.$slots,"loadingicon",{key:0,class:Pt([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(Q(),Ee("span",A({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(Q(),Kt(s,A({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Bt(t.$slots,"icon",{key:1,class:Pt([t.cx("icon")])},function(){return[t.icon?(Q(),Ee("span",A({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):Fo("",!0)]}),xe("span",A({class:t.cx("label")},t.ptm("label")),se(t.label||" "),17),t.badge?(Q(),Kt(a,A({key:2,value:t.badge,class:t.badgeClass,severity:t.badgeSeverity,unstyled:t.unstyled},t.ptm("pcBadge")),null,16,["value","class","severity","unstyled"])):Fo("",!0)]})]}),_:3},16,["class"])),[[c]])}kr.render=Ka;const Cr=wo({...wo({name:"sa-navbar-addon"}),setup(t){console.log(kr);const e=be("Test");return(n,o)=>se(e.value)}}),Nr="sa-",Wa=(t=>(t.install=e=>{const n=t.name;n.startsWith(Nr)||console.warn(`THis component name need to start with ${Nr}`),e.component(n,t)},t))(Cr),Tr=Object.freeze(Object.defineProperty({__proto__:null,NavbarAddonRegister:Wa},Symbol.toStringTag,{value:"Module"})),Ya={install(t,{register:e}){if(e)for(let n in Tr)t.use(Tr[n])}};bt.NavbarAddon=Cr,bt.default=Ya,Object.defineProperties(bt,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
