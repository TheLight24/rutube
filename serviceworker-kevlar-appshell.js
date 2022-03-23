/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var u=this||self;function v(a,b){a=a.split(".");b=b||u;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(){}
function ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la=ja:la=ka;return la.apply(null,arguments)}
function w(a,b){a=a.split(".");var c=u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ma(a,b){function c(){}
c.prototype=b.prototype;a.Ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.sa=b)}
ma(na,Error);na.prototype.name="CustomError";function oa(){}
;function pa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function qa(a,b){return Array.prototype.map.call(a,b,void 0)}
function ra(a,b){for(let d=1;d<arguments.length;d++){const e=arguments[d];var c=ia(e);if("array"==c||"object"==c&&"number"==typeof e.length){c=a.length||0;const f=e.length||0;a.length=c+f;for(let g=0;g<f;g++)a[c+g]=e[g]}else a.push(e)}}
;function sa(a){for(const b in a)return!1;return!0}
function ta(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ta(a[c]);return b}
const ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function wa(){}
function xa(a){return new wa(ya,a)}
var ya={};xa("");var za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Aa(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}
function x(a){return-1!=Aa().indexOf(a)}
;function Ba(){return(x("Chrome")||x("CriOS"))&&!x("Edge")||x("Silk")}
;var A=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ca(a){return a?decodeURI(a):a}
function Da(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Da(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fa(a){var b=[],c;for(c in a)Da(c,a[c],b);return b.join("&")}
;function Ga(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function Ha(){return Error("Failed to read varint, encoding is invalid.")}
function Ia(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function Ja(){throw Error("Invalid UTF8");}
function Ka(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let La;const Ma="undefined"!==typeof TextDecoder;!x("Android")||Ba();Ba();var Na=x("Safari")&&!(Ba()||x("Coast")||x("Opera")||x("Edge")||x("Edg/")||x("OPR")||x("Firefox")||x("FxiOS")||x("Silk")||x("Android"))&&!(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"));var Oa={},Pa=null;function Qa(a,b){void 0===b&&(b=0);Ra();b=Oa[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Sa(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ta(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ta(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Pa[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ra();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ra(){if(!Pa){Pa={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Oa[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Pa[f]&&(Pa[f]=e)}}}}
;var Ua="undefined"!==typeof Uint8Array;function Va(a){return Ua&&null!=a&&a instanceof Uint8Array}
let Wa;var Xa={};let Ya;function Za(a){if(a!==Xa)throw Error("illegal external caller");}
var $a=class{constructor(a,b){Za(b);this.N=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}isEmpty(){return null==this.N}};function ab(a){if("string"===typeof a)return{buffer:Sa(a),J:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),J:!1};if(a.constructor===Uint8Array)return{buffer:a,J:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),J:!1};if(a.constructor===$a){Za(Xa);var b=a.N;b=null==b||Va(b)?b:"string"===typeof b?Sa(b):null;return{buffer:(a.N=b)||Wa||(Wa=new Uint8Array(0)),J:!0}}if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),J:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const bb="function"===typeof Uint8Array.prototype.slice;function cb(a){if(a.h>a.i)throw Ia(a.i,a.h);}
function db(a){const b=a.j;let c=b[a.h+0],d=c&127;if(128>c)return a.h+=1,cb(a),d;c=b[a.h+1];d|=(c&127)<<7;if(128>c)return a.h+=2,cb(a),d;c=b[a.h+2];d|=(c&127)<<14;if(128>c)return a.h+=3,cb(a),d;c=b[a.h+3];d|=(c&127)<<21;if(128>c)return a.h+=4,cb(a),d;c=b[a.h+4];a.h+=5;d|=(c&15)<<28;if(128>c)return cb(a),d;if(128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++])throw Ha();cb(a);return d}
function eb(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);if(a.h+b>a.i)throw Ia(b,a.i-a.h);}
var fb=class{constructor(a){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,void 0)}init(a,b,c,{Y:d=!1}={}){this.Y=d;a&&(a=ab(a),this.j=a.buffer,this.m=a.J,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.Y=!1}reset(){this.h=this.l}advance(a){this.h+=a;cb(this)}},gb=[];function hb(a,{la:b=!1}={}){a.la=b}
function ib(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=db(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Ga(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function jb(a){switch(a.i){case 0:if(0!=a.i)jb(a);else a:{a=a.h;var b=a.h;const c=b+10;for(;b<c;)if(0===(a.j[b++]&128)){a.h=b;cb(a);break a}throw Ha();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?jb(a):(b=db(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!ib(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}jb(a)}while(1);break;default:throw Ga(a.i,a.j);}}
var kb=class{constructor(a){if(gb.length){const b=gb.pop();b.init(a,void 0,void 0,void 0);a=b}else a=new fb(a);this.h=a;this.j=this.h.h;this.i=this.l=-1;hb(this,void 0)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},lb=[];const mb="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function nb(a,b){Object.isFrozen(a)||(mb?a[mb]|=b:void 0!==a.S?a.S|=b:Object.defineProperties(a,{S:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function ob(a){let b;mb?b=a[mb]:b=a.S;return null==b?0:b}
function pb(a){return Array.isArray(a)?!!(ob(a)&1):!1}
function qb(a){nb(a,1);return a}
function rb(a){return Array.isArray(a)?!!(ob(a)&2):!1}
function sb(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");nb(a,2)}
;function tb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let ub;var vb=Object.freeze(qb([]));function wb(a){if(rb(a.o))throw Error("Cannot mutate an immutable Message");}
var xb="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function yb(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function zb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Va(a))return Qa(a);if(a instanceof $a){var b=a.N;b=null==b||"string"===typeof b?b:Ua&&b instanceof Uint8Array?Qa(b):null;return(a.N=b)||""}}}return a}
;function Ab(a,b=Bb){return Cb(a,b)}
function Db(a,b){if(null!=a){if(Array.isArray(a))a=Cb(a,b);else if(tb(a)){const c={};for(let d in a)c[d]=Db(a[d],b);a=c}else a=b(a);return a}}
function Cb(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=Db(c[d],b);pb(a)&&qb(c);return c}
function Eb(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=zb(a);return Array.isArray(a)?Ab(a,Eb):a}
function Bb(a){return Va(a)?new Uint8Array(a):a}
;function B(a,b,c=!1){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:c&&a.i&&(c=a.i[b],null!=c)?c:a.o[b+a.j]}
function C(a,b,c,d=!1,e=!1){e||wb(a);b<a.l&&!d?a.o[b+a.j]=c:(a.i||(a.i=a.o[a.l+a.j]={}))[b]=c;return a}
function Fb(a,b,c=!0,d=!1){let e=B(a,b,d);null==e&&(e=vb);if(rb(a.o))c&&(sb(e),Object.freeze(e));else if(e===vb||rb(e))e=qb(e.slice()),C(a,b,e,d);return e}
function Gb(a,b,c,d){wb(a);(c=Hb(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),C(a,c,void 0));return C(a,b,d)}
function Hb(a,b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];null!=B(a,e)&&(0!==c&&C(a,c,void 0,!1,!0),c=e)}return c}
function Ib(a,b,c,d,e=!1){if(-1===c)return null;a.h||(a.h={});const f=a.h[c];if(f)return f;e=B(a,c,e);if(null==e&&!d)return f;b=new b(e);rb(a.o)&&sb(b.o);return a.h[c]=b}
function Jb(a,b,c,d=!1){a.h||(a.h={});var e=rb(a.o);let f=a.h[c];if(!f){d=Fb(a,c,!0,d);f=[];e=e||rb(d);for(let g=0;g<d.length;g++)f[g]=new b(d[g]),e&&sb(f[g].o);e&&(sb(f),Object.freeze(f));a.h[c]=f}return f}
function D(a,b,c,d=!1){wb(a);a.h||(a.h={});let e=c?c.o:c;a.h[b]=c;return C(a,b,e,d)}
function E(a,b,c,d){wb(a);a.h||(a.h={});let e=d?d.o:d;a.h[b]=d;Gb(a,b,c,e)}
function Kb(a,b,c,d,e){wb(a);const f=Jb(a,c,b,!1);c=d?d:new c;a=Fb(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.o)):(f.push(c),a.push(c.o));return c}
function Lb(a,b,c,d){Kb(a,b,c,d,void 0)}
function Mb(a,b){a=B(a,b);return null==a?"":a}
;function Nb(a){ub=!0;try{return JSON.stringify(a.toJSON(),Ob)}finally{ub=!1}}
var Sb=class{constructor(a,b,c){a||(a=Pb);Pb=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.i||0);this.h=void 0;this.o=a;a:{d=this.o.length;a=d-1;if(d&&(d=this.o[a],tb(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.o[a])?Array.isArray(d)&&qb(d):this.o[a]=vb;else{d=this.i||(this.i=this.o[this.l+this.j]={});let e=d[a];e?Array.isArray(e)&&
qb(e):d[a]=vb}}toJSON(){const a=Qb(this.o);return ub?a:Ab(a,Eb)}clone(){var a=Ab(this.o);Pb=a;a=new this.constructor(a);Pb=null;Rb(a,this);return a}};function Ob(a,b){return zb(b)}
function Qb(a){let b,c=a.length,d=!1;for(let g=a.length;g--;){let h=a[g];if(Array.isArray(h)){var e=h;Array.isArray(h)&&pb(h)&&!h.length?h=null:h=Qb(h);h!=e&&(d=!0)}else if(g===a.length-1&&tb(h)){a:{var f=h;e={};let k=!1;for(let l in f){let m=f[l];if(Array.isArray(m)){let p=m;Array.isArray(m)&&pb(m)&&!m.length?m=null:m=Qb(m);m!=p&&(k=!0)}null!=m?e[l]=m:k=!0}if(k){for(let l in e){f=e;break a}f=null}}f!=h&&(d=!0);c--;continue}null==h&&c==g+1?(d=!0,c--):d&&(b||(b=a.slice(0,c)),b[g]=h)}if(!d)return a;
b||(b=a.slice(0,c));f&&b.push(f);return b}
function Rb(a,b){b.m&&(a.m=b.m.slice());const c=b.h;if(c){b=b.i;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=Jb(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)Rb(d[e],g[e])}else(d=Ib(a,g.constructor,e,void 0,d))&&Rb(d,g)}}}}
let Pb;var Tb=class extends Sb{};xb&&Object.defineProperties(Tb,{[Symbol.hasInstance]:yb(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});const Ub=Symbol();function Vb(a,b,c){return a[Ub]||(a[Ub]=(d,e)=>b(d,e,c))}
function Wb(a){let b=a[Ub];if(!b){const c=Xb(a);b=(d,e)=>Yb(d,e,c);
a[Ub]=b}return b}
function Zb(a){var b=a.pb;if(b)return Wb(b);if(b=a.wb)return Vb(a.wa.h,b,a.vb)}
function $b(a){const b=Zb(a),c=a.wa,d=a.Bb.V;return b?(e,f)=>d(e,f,c,b):(e,f)=>d(e,f,c)}
const ac=Symbol();function bc(a,b){a[0]=b}
function cc(a,b,c,d){const e=c.V;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function dc(a,b,c,d,e,f){const g=c.V,h=Wb(e);a[b]=(k,l,m)=>g(k,l,m,d,h,f)}
function ec(a,b,c,d,e,f,g){const h=c.V,k=Vb(d,e,f);a[b]=(l,m,p)=>h(l,m,p,d,k,g)}
function Xb(a){var b=a[ac];if(!b){b=a[ac]={};var c=bc,d=cc,e=dc,f=ec;a=a();let h=0;a.length&&"number"!==typeof a[0]&&(c(b,a[0]),h++);for(;h<a.length;){c=a[h++];for(var g=h+1;g<a.length&&"number"!==typeof a[g];)g++;const k=a[h++];g-=h;switch(g){case 0:d(b,c,k);break;case 1:d(b,c,k,a[h++]);break;case 2:e(b,c,k,a[h++],a[h++]);break;case 3:g=a[h++];const l=a[h++],m=a[h++];Array.isArray(m)?e(b,c,k,g,l,m):f(b,c,k,g,l,m);break;case 4:f(b,c,k,a[h++],a[h++],a[h++],a[h++]);break;default:throw Error("unexpected number of binary field arguments: "+
g);}}}return b}
function Yb(a,b,c){for(;ib(b)&&4!=b.i;){var d=b.l,e=c[d];if(!e){var f=c[0];f&&(f=f[d])&&(e=c[d]=$b(f))}if(!e||!e(b,a,d))if(f=b,d=a,e=f.j,jb(f),!f.la){var g=f.h.h-e;f.h.h=e;e=f.h;f=g;eb(e,f);if(0==f)e=Ya||(Ya=new $a(null,Xa));else{if(e.Y&&e.m)g=e.j.subarray(e.h,e.h+f);else{g=e.j;var h=e.h,k=e.h+f;g=h===k?Wa||(Wa=new Uint8Array(0)):bb?g.slice(h,k):new Uint8Array(g.subarray(h,k))}e.h+=f;e=g;e=0==e.length?Ya||(Ya=new $a(null,Xa)):new $a(e,Xa)}(f=d.m)?f.push(e):d.m=[e]}}return a}
var hc=a=>{var b=fc,c=gc;if(lb.length){const d=lb.pop();hb(d,void 0);d.h.init(a,void 0,void 0,void 0);a=d}else a=new kb(a);try{return Yb(new b,a,Xb(c))}finally{a.h.clear(),a.l=-1,a.i=-1,100>lb.length&&lb.push(a)}};
function ic(a,b){return{V:a,Hb:b}}
var jc=ic(function(a,b,c){if(2!==a.i)return!1;var d=db(a.h)>>>0;a=a.h;eb(a,d);var e=a.h;a.h+=d;a=a.j;var f;if(Ma)(f=La)||(f=La=new TextDecoder("utf-8",{fatal:!0})),f=f.decode(a.subarray(e,e+d));else{d=e+d;const h=[];let k=null;let l,m;for(;e<d;){var g=a[e++];128>g?h.push(g):224>g?e>=d?Ja(h):(l=a[e++],194>g||128!==(l&192)?(e--,Ja(h)):h.push((g&31)<<6|l&63)):240>g?e>=d-1?Ja(h):(l=a[e++],128!==(l&192)||224===g&&160>l||237===g&&160<=l||128!==((f=a[e++])&192)?(e--,Ja(h)):h.push((g&15)<<12|(l&63)<<6|f&
63)):244>=g?e>=d-2?Ja(h):(l=a[e++],128!==(l&192)||0!==(g<<28)+(l-144)>>30||128!==((f=a[e++])&192)||128!==((m=a[e++])&192)?(e--,Ja(h)):(g=(g&7)<<18|(l&63)<<12|(f&63)<<6|m&63,g-=65536,h.push((g>>10&1023)+55296,(g&1023)+56320))):Ja(h);8192<=h.length&&(k=Ka(k,h),h.length=0)}f=Ka(k,h)}C(b,c,f);return!0},function(a,b,c){a.i(c,B(b,c))}),kc=ic(function(a,b,c,d,e){if(2!==a.i)return!1;
b=Kb(b,c,d);c=a.h.i;d=db(a.h)>>>0;const f=a.h.h+d;let g=f-c;0>=g&&(a.h.i=f,e(b,a),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0},function(a,b,c,d,e){a.h(c,Jb(b,d,c),e)});class lc{constructor(){var a=mc,b=nc;this.fieldName={tb:0};this.h=a;this.isRepeated=0;this.i=b}};function nc(a,b){if(this.isRepeated){wb(a);let c;if(b){c=qb([]);for(let d=0;d<b.length;d++)c[d]=b[d].o;a.h||(a.h={});a.h[406606992]=b}else a.h&&(a.h[406606992]=void 0),c=vb;a=C(a,406606992,c,!0)}else a=D(a,406606992,b,!0);return a}
;class F extends Tb{}xb&&Object.defineProperties(F,{[Symbol.hasInstance]:yb(Object[Symbol.hasInstance])});xa("csi.gstatic.com");xa("googleads.g.doubleclick.net");xa("partner.googleadservices.com");xa("pubads.g.doubleclick.net");xa("securepubads.g.doubleclick.net");xa("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function oc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var pc="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" ");function qc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,n=0;64>n;n+=4)t[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;80>n;n++)p=t[n-3]^t[n-8]^t[n-14]^t[n-16],t[n]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],H=e[3],Ea=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var I=H^y&(z^H);var Z=1518500249}else I=y^z^H,Z=1859775393;else 60>n?(I=y&z|H&(y|z),Z=2400959708):(I=y^z^H,Z=3395469782);I=((p<<5|p>>>27)&4294967295)+I+Ea+Z+t[n]&4294967295;Ea=H;H=z;z=(y<<30|y>>>2)&4294967295;y=p;p=I}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;
e[2]=e[2]+z&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+Ea&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var n=[],y=0,z=p.length;y<z;++y)n.push(p.charCodeAt(y));p=n}t||(t=p.length);n=0;if(0==l)for(;n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<t;)if(f[l++]=p[n++],m++,64==l)for(l=0,b(f);n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=t&255,t>>>=8;b(f);for(n=t=0;5>n;n++)for(var y=24;0<=y;y-=8)p[t++]=e[n]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ta:function(){for(var p=d(),t="",n=0;n<p.length;n++)t+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return t}}}
;function rc(a,b,c){var d=String(u.location.href);return d&&a&&b?[b,sc(oc(d),a,c||null)].join(" "):null}
function sc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],pa(d,function(h){e.push(h)}),tc(e.join(" "));
var f=[],g=[];pa(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];pa(d,function(h){e.push(h)});
a=tc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function tc(a){var b=qc();b.update(a);return b.ta().toLowerCase()}
;const uc={};function vc(){this.h=document||{cookie:""}}
q=vc.prototype;q.isEnabled=function(){if(!u.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{pa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d;var e=!1;let f;if("object"===typeof c){f=c.Fb;e=c.Gb||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.pa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+e+(null!=f?";samesite="+
f:"")};
q.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{pa:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.h.cookie};
q.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function wc(){return!!uc.FPA_SAMESITE_PHASE2_MOD||!1}
function xc(a,b,c,d){(a=u[a])||(a=(new vc).get(b));return a?rc(a,c,d):null}
function yc(){var a=[],b=oc(String(u.location.href));const c=[];var d=u.__SAPISID||u.__APISID||u.__3PSAPISID||u.__OVERRIDE_SID;wc()&&(d=d||u.__1PSAPISID);if(d)var e=!0;else e=new vc,d=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("SID"),wc()&&(d=d||e.get("__Secure-1PAPISID")),e=!!d;e&&(d=(e=b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?u.__SAPISID:u.__APISID,d||(d=new vc,d=d.get(e?"SAPISID":"APISID")||d.get("__Secure-3PAPISID")),
(e=d?rc(d,e?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&wc()&&((b=xc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=xc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return 0==c.length?null:c.join(" ")}
;function zc(a){xb&&Object.defineProperties(a,{[Symbol.hasInstance]:yb(Object[Symbol.hasInstance])})}
;function Ac(){this.j=this.j;this.l=this.l}
Ac.prototype.j=!1;Ac.prototype.dispose=function(){this.j||(this.j=!0,this.Z())};
Ac.prototype.Z=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Bc(a){var b=v("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||u.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dc[c])c=Dc[c];else{c=String(c);if(!Dc[c]){var f=/function\s+([^\(]+)/m.exec(c);Dc[c]=f?f[1]:"[Anonymous]"}c=Dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cc(a,b){b||(b={});b[Ec(a)]=!0;var c=a.stack||"";(a=a.sa)&&!b[Ec(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cc(a,b));return c}
function Ec(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dc={};function Fc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
var Gc=class{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};function Hc(a){u.setTimeout(()=>{throw a;},0)}
;class Ic{constructor(){this.i=this.h=null}add(a,b){const c=Jc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Jc=new Gc(()=>new Kc,a=>a.reset());
class Kc{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};function Lc(a,b){Mc||Nc();Oc||(Mc(),Oc=!0);Pc.add(a,b)}
var Mc;function Nc(){var a=u.Promise.resolve(void 0);Mc=function(){a.then(Qc)}}
var Oc=!1,Pc=new Ic;function Qc(){for(var a;a=Pc.remove();){try{a.h.call(a.scope)}catch(b){Hc(b)}Fc(Jc,a)}Oc=!1}
;class Rc{constructor(){this.promise=new Promise((a,b)=>{this.reject=b})}}
;function G(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=ha)try{var b=this;a.call(void 0,function(c){Sc(b,2,c)},function(c){Sc(b,3,c)})}catch(c){Sc(this,3,c)}}
function Tc(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Tc.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Uc=new Gc(function(){return new Tc},function(a){a.reset()});
function Vc(a,b,c){var d=Uc.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Wc(a){if(a instanceof G)return a;var b=new G(ha);Sc(b,2,a);return b}
G.prototype.then=function(a,b,c){return Xc(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
G.prototype.$goog_Thenable=!0;q=G.prototype;q.Ja=function(a,b){return Xc(this,null,a,b)};
q.catch=G.prototype.Ja;q.cancel=function(a){if(0==this.h){var b=new Yc(a);Lc(function(){Zc(this,b)},this)}};
function Zc(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$c(c),ad(c,e,3,b)))}a.j=null}else Sc(a,3,b)}
function bd(a,b){a.i||2!=a.h&&3!=a.h||cd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Xc(a,b,c,d){var e=Vc(null,null,null);e.h=new G(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yc?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;bd(a,e);return e.h}
q.Ka=function(a){this.h=0;Sc(this,2,a)};
q.La=function(a){this.h=0;Sc(this,3,a)};
function Sc(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ka,f=a.La;if(d instanceof G){bd(d,Vc(e||ha,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var k=d.then;if("function"===typeof k){dd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.C=c,a.h=b,a.j=null,cd(a),3!=b||c instanceof Yc||ed(a,c))}}
function dd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function cd(a){a.s||(a.s=!0,Lc(a.va,a))}
function $c(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
q.va=function(){for(var a;a=$c(this);)ad(this,a,this.h,this.C);this.s=!1};
function ad(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,fd(b,c,d);else try{b.j?b.i.call(b.context):fd(b,c,d)}catch(e){gd.call(null,e)}Fc(Uc,b)}
function fd(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ed(a,b){a.m=!0;Lc(function(){a.m&&gd.call(null,b)})}
var gd=Hc;function Yc(a){na.call(this,a)}
ma(Yc,na);Yc.prototype.name="cancel";function J(a){Ac.call(this);this.C=1;this.m=[];this.s=0;this.h=[];this.i={};this.M=!!a}
ma(J,Ac);q=J.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.C;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.C=e+3;d.push(e);return e};
q.ha=function(a){var b=this.h[a];if(b){var c=this.i[b];if(0!=this.s)this.m.push(a),this.h[a+1]=ha;else{if(c){var d=Array.prototype.indexOf.call(c,a,void 0);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.h[a];delete this.h[a+1];delete this.h[a+2]}}return!!b};
q.ea=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.M)for(e=0;e<c.length;e++){var g=c[e];hd(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.ha(c)}}return 0!=e}return!1};
function hd(a,b,c){Lc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ha,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Z=function(){J.Ga.Z.call(this);this.clear();this.m.length=0};/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var id="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var kd=class extends F{constructor(a){super(a)}getKey(){return B(this,1)}aa(){return B(this,2===Hb(this,jd)?2:-1)}setValue(a){return Gb(this,2,jd,a)}},jd=[2,3,4,5,6];var ld=class extends F{constructor(a){super(a)}};var nd=class extends F{constructor(){super(void 0,-1,md)}getPlayerType(){return B(this,36)}setHomeGroupInfo(a){return D(this,81,a)}},md=[9,66,24,32,86,100,101];var pd=class extends F{constructor(){super(void 0,-1,od)}},od=[15,26,28];var qd=class extends F{constructor(a){super(a)}setToken(a){return C(this,2,a)}};var sd=class extends F{constructor(a){super(a,-1,rd)}setSafetyMode(a){return C(this,5,a)}},rd=[12];var ud=class extends F{constructor(a){super(a,-1,td)}},td=[12];var wd=class extends F{constructor(){super(void 0,-1,vd)}},xd=class extends F{constructor(a){super(a)}getKey(){return Mb(this,1)}aa(){return Mb(this,2)}setValue(a){return C(this,2,a)}},vd=[4,5];var yd=class extends F{constructor(){super(void 0)}};var zd=class extends F{constructor(){super(void 0)}},Ad=[2,3];var Bd=class extends F{constructor(){super(void 0)}};var Cd=class extends F{constructor(){super(void 0)}};var Dd=class extends F{constructor(){super(void 0)}};var Fd=class extends F{constructor(){super(void 0,-1,Ed)}},Ed=[10,17];var Gd=class extends F{constructor(){super(void 0)}};var Hd=class extends F{constructor(a){super(a)}};var Id=class extends F{constructor(){super(void 0)}};function Jd(a,b){D(a,1,b)}
var Kd=class extends F{constructor(){super(void 0)}B(a){C(this,2,a)}};function Ld(a,b){D(a,1,b)}
var Md=class extends F{constructor(){super(void 0)}};function Nd(a,b){D(a,2,b)}
var Pd=class extends F{constructor(){super(void 0,-1,Od)}B(a){C(this,1,a)}},Od=[3];var Qd=class extends F{constructor(){super(void 0)}B(a){C(this,1,a)}};var Rd=class extends F{constructor(){super(void 0)}B(a){C(this,1,a)}};var Sd=class extends F{constructor(){super(void 0)}B(a){C(this,1,a)}};var Td=class extends F{constructor(){super(void 0)}};var Ud=class extends F{constructor(){super(void 0)}};var K=class extends F{constructor(a){super(a,428)}},Vd=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,
356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,427,117];var Wd={gb:0,Qa:1,Wa:2,Xa:4,cb:8,Ya:16,Za:32,fb:64,eb:128,Sa:256,Ua:512,bb:1024,Ta:2048,Va:4096,Ra:8192,ab:16384};var Xd=class extends F{constructor(){super(void 0)}};var Zd=class extends F{constructor(){super(void 0)}setVideoId(a){return Gb(this,1,Yd,a)}getPlaylistId(){return B(this,2===Hb(this,Yd)?2:-1)}},Yd=[1,2];var ae=class extends F{constructor(){super(void 0,-1,$d)}},$d=[3];var be=class extends F{constructor(a){super(a,1)}};var mc=class extends F{constructor(a){super(a)}},ce;ce=new lc;var de=class extends mc{};zc(de);const ee=u.window;let fe,ge;const L=(null==ee?void 0:null==(fe=ee.yt)?void 0:fe.config_)||(null==ee?void 0:null==(ge=ee.ytcfg)?void 0:ge.data_)||{};let he;const ie=(null==ee?void 0:null==(he=ee.ytcfg)?void 0:he.obfuscatedData_)||[];var je=class extends be{};zc(je);let ke=new je(ie);const le=L.EXPERIMENT_FLAGS;if(!le||!le.jspb_i18n_extension){var me=new de;ce.i(ke,me)}w("yt.config_",L);w("yt.configJspb_",ie);function M(...a){a=arguments;1<a.length?L[a[0]]=a[1]:1===a.length&&Object.assign(L,a[0])}
function N(a,b){return a in L?L[a]:b}
function ne(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0)}
function oe(){const a=L.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function O(a){a=pe(a);return"string"===typeof a&&"false"===a?!1:!!a}
function qe(a,b){a=pe(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function re(){return N("EXPERIMENTS_TOKEN","")}
function pe(a){const b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function se(){const a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(var c in b)a.push({key:c,value:String(b[c])});c=N("EXPERIMENT_FLAGS",{});for(let d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var te=["notification/convert_endpoint_to_url"],ue=["notification/record_interactions"],ve=["notification_registration/set_registration"];const we=[];function xe(a){we.forEach(b=>b(a))}
function ye(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ze(b)}}:a}
function ze(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),M("ERRORS",b));xe(a)}
function Ae(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),M("ERRORS",b))}
;const Be=/^[\w.]*$/,Ce={q:!0,search_query:!0};function De(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=Ee(h[0]||""),l=Ee(h[1]||"");k in c?Array.isArray(c[k])?ra(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(De);d.args=[{key:e,value:h[1],query:a,method:Fe==l?"unchanged":l}];Ce.hasOwnProperty(e)||Ae(d)}}return c}
const Fe=String(De);function Ge(a){"?"==a.charAt(0)&&(a=a.substr(1));return De(a,"&")}
function He(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ge(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Fa(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Ie(a){if(!b)var b=window.location.href;const c=a.match(A)[1]||null,d=Ca(a.match(A)[3]||null);c&&d?(a=a.match(A),b=b.match(A),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ca(b.match(A)[3]||null)==d&&(Number(b.match(A)[4]||null)||null)==(Number(a.match(A)[4]||null)||null):!0;return a}
function Ee(a){return a&&a.match(Be)?a:decodeURIComponent(a.replace(/\+/g," "))}
;Date.now();function Je(a,b){"function"===typeof a&&(a=ye(a));return window.setTimeout(a,b)}
;[...pc];let Ke=!1;function Le(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Me(a,b);const d=Ne(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||u;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
b.onFetchTimeout&&0<b.timeout&&(g=Je(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||u))},b.timeout))}
function Me(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=N("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=He(a,b||{},!0);return a}
function Ne(a,b){const c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0);var e=b.postBody||"",f=b.postParams;const g=N("XSRF_FIELD_NAME",void 0);let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ca(a.match(A)[3]||null)&&!b.withCredentials&&Ca(a.match(A)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ge(e),va(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Fa(e));f=e||f&&!sa(f);!Ke&&f&&"POST"!=b.method&&(Ke=!0,ze(Error("AJAX request with postData should use POST")));return e}
;w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function Oe(){return"INNERTUBE_API_KEY"in L&&"INNERTUBE_API_VERSION"in L}
function Pe(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),ba:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ya:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),za:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),oa:N("INNERTUBE_CONTEXT_HL",void 0),na:N("INNERTUBE_CONTEXT_GL",void 0),Aa:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ca:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ba:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Qe(a){const b={client:{hl:a.oa,gl:a.na,clientName:a.ya,clientVersion:a.innertubeContextClientVersion,configInfo:a.ba}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=u.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=re();""!==c&&(b.client.experimentsToken=c);c=se();0<c.length&&(b.request={internalExperimentFlags:c});Re(a,void 0,b);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;
c=a.assign;var d=b.client,e=N("DEVICE","");const f={};for(const [g,h]of Object.entries(Ge(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Se(a){const b=new ud,c=new nd;C(c,1,a.oa);C(c,2,a.na);C(c,16,a.za);C(c,17,a.innertubeContextClientVersion);if(a.ba){var d=a.ba,e=new ld;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);D(c,62,e)}(d=u.devicePixelRatio)&&1!=d&&C(c,65,d);d=re();""!==d&&C(c,54,d);d=se();if(0<d.length){e=new pd;for(let f=0;f<d.length;f++){const g=new kd;C(g,1,d[f].key);g.setValue(d[f].value);Lb(e,15,kd,
g)}D(b,5,e)}Re(a,c);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(a=new sd,C(a,3,N("DELEGATED_SESSION_ID")));a=N("DEVICE","");for(const [f,g]of Object.entries(Ge(a)))a=f,d=g,"cbrand"===a?C(c,12,d):"cmodel"===a?C(c,13,d):"cbr"===a?C(c,87,d):"cbrver"===a?C(c,88,d):"cos"===a?C(c,18,d):"cosver"===a?C(c,19,d):"cplatform"===a&&C(c,42,d);D(b,1,c);return b}
function Re(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=Ib(b,ld,62))?d:new ld;C(c,6,a.appInstallData);D(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Te(a,b,c={}){let d={};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.nb||N("AUTHORIZATION"))||(a?b=`Bearer ${v("gapi.auth.getToken")().mb}`:b=yc());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;const Ue=window;var P=Ue.ytcsi&&Ue.ytcsi.now?Ue.ytcsi.now:Ue.performance&&Ue.performance.timing&&Ue.performance.now&&Ue.performance.timing.navigationStart?()=>Ue.performance.timing.navigationStart+Ue.performance.now():()=>(new Date).getTime();function Ve(a,b){We(a,2,b)}
var Xe=class{h(a){We(a,1,void 0)}};function We(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():Je(a,c||0)}
var Ye=class extends Xe{start(){const a=v("yt.scheduler.instance.start");a&&a()}};Ye.h||(Ye.h=new Ye);var Ze=Ye.h;const $e=[];let af,bf=!1;function cf(a){bf||(af?af.handleError(a):($e.push({type:"ERROR",payload:a}),10<$e.length&&$e.shift()))}
function df(a,b){bf||(af?af.T(a,b):($e.push({type:"EVENT",eventType:a,payload:b}),10<$e.length&&$e.shift()))}
;var Q=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};function ef(){if(void 0!==N("DATASYNC_ID",void 0))return N("DATASYNC_ID",void 0);throw new Q("Datasync ID not set","unknown");}
;function ff(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function gf(a){return a.substr(0,a.indexOf(":"))||a}
;const hf={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},jf={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},kf={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var R=class extends Q{constructor(a,b={},c=hf[a],d=jf[a],e=kf[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,R.prototype)}},lf=class extends R{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},hf.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,lf.prototype)}},mf=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,mf.prototype)}};const nf=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function of(a,b,c,d){b=gf(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof R)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new R("QUOTA_EXCEEDED",a);if(Na&&"UnknownError"===e.name)return new R("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof mf)return new R("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&nf.some(f=>e.message.includes(f)))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new R("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",yb:e.name})];e.level="WARNING";return e}
function pf(a,b,c){return new R("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function qf(a){if(!a)throw Error();throw a;}
function rf(a){return a}
var sf=class{constructor(a){this.h=a}};function tf(a){return new uf(new sf((b,c)=>{a instanceof uf?a.then(b,c):b(a)}))}
function vf(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof uf?wf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function xf(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof uf?wf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function wf(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof uf?wf(a,b,f,d,e):d(f)},f=>{e(f)})}
var uf=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.onRejected)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new uf(new sf((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)tf(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static reject(a){return new uf(new sf((b,c)=>{c(a)}))}then(a,b){const c=null!=a?a:rf,d=null!=b?b:qf;
return new uf(new sf((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{vf(this,this,c,e,f)}),this.onRejected.push(()=>{xf(this,this,d,e,f)})):"FULFILLED"===this.state.status?vf(this,this,c,e,f):"REJECTED"===this.state.status&&xf(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function yf(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function zf(a){return new Promise((b,c)=>{yf(a,b,c)})}
function S(a){return new uf(new sf((b,c)=>{yf(a,b,c)}))}
;function Af(a,b){return new uf(new sf((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function Bf(a,b,c,d){return r(function*(){const e={mode:"readonly",H:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.H?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(P());try{const m=a.h.transaction(b,e.mode);var k=d;const p=new Cf(m),t=yield Df(p,k),n=Math.round(P());Ef(a,l,n,g,void 0,b.join(),e);return t}catch(m){k=Math.round(P());const p=of(m,a.h.name,b.join(),a.h.version);if(p instanceof R&&!p.h||g>=f)Ef(a,l,k,g,p,b.join(),e),
h=p}}return Promise.reject(h)})}
function Ff(a,b,c){a=a.h.createObjectStore(b,c);return new Gf(a)}
function Hf(a,b,c,d){return Bf(a,[b],{mode:"readwrite",H:!0},e=>{e=e.objectStore(b);return S(e.h.put(c,d))})}
function Ef(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&df("QUOTA_EXCEEDED",{dbName:gf(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),df("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),If(a,!1,d,f,b,g.tag),cf(e)):If(a,!0,d,f,b,g.tag)}
function If(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){df("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Jf=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}add(a,b,c){return Bf(this,[a],{mode:"readwrite",H:!0},d=>d.objectStore(a).add(b,c))}clear(a){return Bf(this,[a],{mode:"readwrite",
H:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return Bf(this,[a],{mode:"readonly",H:!0},c=>c.objectStore(a).count(b))}delete(a,b){return Bf(this,[a],{mode:"readwrite",
H:!0},c=>c.objectStore(a).delete(b))}get(a,b){return Bf(this,[a],{mode:"readonly",
H:!0},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Kf(a,b,c){a=a.h.openCursor(b.query,b.direction);return Lf(a).then(d=>Af(d,c))}
function Mf(a,b){return Kf(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var Gf=class{constructor(a){this.h=a}add(a,b){return S(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return S(this.h.clear()).then(()=>{})}count(a){return S(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Mf(this,a):S(this.h.delete(a))}get(a){return S(this.h.get(a))}index(a){try{return new Nf(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new mf(a,this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Df(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Cf=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=R;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new R("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Gf(a),this.j.set(a,b));return b}};function Of(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Lf(a).then(f=>Af(f,c))}
var Nf=class{constructor(a){this.h=a}count(a){return S(this.h.count(a))}delete(a){return Of(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return S(this.h.get(a))}getKey(a){return S(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Lf(a){return S(a).then(b=>b?new Pf(a,b):null)}
var Pf=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Lf(this.request)}continue(a){this.cursor.continue(a);return Lf(this.request)}delete(){return S(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}aa(){return this.cursor.value}update(a){return S(this.cursor.update(a))}};function Qf(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.blocked,h=c.blocking,k=c.Ia,l=c.upgrade,m=c.closed;let p;const t=()=>{p||(p=new Jf(f.result,{closed:m}));return p};
f.addEventListener("upgradeneeded",n=>{try{if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&"none"!==n.dataLoss&&df("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:gf(a)});const y=t(),z=new Cf(f.transaction);l&&l(y,H=>n.oldVersion<H&&n.newVersion>=H,z);
z.done.catch(H=>{e(H)})}catch(y){e(y)}});
f.addEventListener("success",()=>{const n=f.result;h&&n.addEventListener("versionchange",()=>{h(t())});
n.addEventListener("close",()=>{df("IDB_UNEXPECTEDLY_CLOSED",{dbName:gf(a),dbVersion:n.version});k&&k()});
d(t())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Rf(a,b,c={}){return Qf(a,b,c)}
function Sf(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",()=>{d()});
yield zf(c)}catch(c){throw of(c,a,"",-1);}})}
;function Tf(a){return new Promise(b=>{Ve(()=>{b()},a)})}
function Uf(a,b){return new R("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Vf(a){if(!a.l)throw Uf(a);if(a.h)return a.h;let b;const c=()=>{a.h===b&&(a.h=void 0)},d={blocking:f=>{f.close()},
closed:c,Ia:c,upgrade:a.options.upgrade},e=()=>r(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield a.j(a.name,a.options.version,d);f=k;var h=a.options;const l=[];for(const m of Object.keys(h.L)){const {O:p,Cb:t=Number.MAX_VALUE}=h.L[m];!(f.h.version>=p)||f.h.version>=t||f.h.objectStoreNames.contains(m)||l.push(m)}if(0!==l.length){const m=Object.keys(a.options.L),p=k.objectStoreNames();if(a.s<qe("ytidb_reopen_db_retries",0))return a.s++,k.close(),cf(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),e();if(a.m<qe("ytidb_remake_db_retries",1))return a.m++,O("ytidb_remake_db_enable_backoff_delay")&&(yield Tf(a.i),a.i*=2),yield a.delete(),cf(new R("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),e();throw new lf(p,m);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&
"An attempt was made to open a database using a lower version than the existing version."===k.message){g=yield a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0}));h=g.h.version;if(void 0!==a.options.version&&h>a.options.version+1)throw g.close(),a.l=!1,Uf(a,h);return g}c();k instanceof Error&&!O("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw of(k,a.name,"",null!=(l=a.options.version)?l:-1);}});
b=e();a.h=b;return a.h}
function Wf(a,b){if(!b)throw pf("openWithToken",gf(a.name));return Vf(a)}
var Xf=class{constructor(a,b){this.name=a;this.options=b;this.l=!0;this.s=this.m=0;this.i=500}j(a,b,c={}){return Rf(a,b,c)}delete(a={}){return Sf(this.name,a)}};const Yf=new Xf("YtIdbMeta",{L:{databases:{O:1}},upgrade(a,b){b(1)&&Ff(a,"databases",{keyPath:"actualName"})}});function Zf(a,b){return r(function*(){return Bf(yield Wf(Yf,b),["databases"],{H:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return S(d.h.put(a,void 0)).then(()=>{})})})})}
function bg(a,b){return r(function*(){if(a)return(yield Wf(Yf,b)).delete("databases",a)})}
;let cg;const dg=new class{constructor(){}}(new class{constructor(){}});function eg(){return r(function*(){return!0})}
function fg(){if(void 0!==cg)return cg;bf=!0;return cg=eg().then(a=>{bf=!1;return a})}
function gg(){const a=v("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):fg().then(b=>{(b=b?dg:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Rc;function hg(a){try{ef();var b=!0}catch(c){b=!1}if(!b)throw a=new R("AUTH_INVALID",{dbName:a}),cf(a),a;b=ef();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function ig(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield gg();if(!e)throw e=pf("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),cf(e),e;ff(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:hg(a);try{return yield Zf(f,e),yield Rf(f.actualName,b,d)}catch(g){try{yield bg(f.actualName,e)}catch(h){}throw g;}})}
function jg(a,b,c={}){return ig(a,b,!1,c)}
function kg(a,b,c={}){return ig(a,b,!0,c)}
function lg(a,b={}){return r(function*(){const c=yield gg();if(c){ff(a);var d=hg(a);yield Sf(d.actualName,b);yield bg(d.actualName,c)}})}
function mg(a,b={}){return r(function*(){const c=yield gg();c&&(ff(a),yield Sf(a,b),yield bg(a,c))})}
;function ng(a){this.version=1;this.args=a}
;function og(){var a=pg;this.topic="screen-created";this.h=a}
og.prototype.toString=function(){return this.topic};const qg=v("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.ha;J.prototype.publish=J.prototype.ea;J.prototype.clear=J.prototype.clear;w("ytPubsub2Pubsub2Instance",qg);const rg=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",rg);const sg=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",sg);const tg=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",tg);
w("ytPubsub2Pubsub2SkipSubKey",null);function ug(a){var b=vg;const c=wg();c&&c.publish.call(c,b.toString(),b,a)}
function xg(a){var b=vg;const c=wg();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(rg[d])try{if(f&&b instanceof og&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.qa){const n=new h;h.qa=n.version}var l=h.qa}catch(n){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var p=k.args;const n=p.length;if(0<n){const y=Array(n);for(k=0;k<n;k++)y[k]=p[k];var t=y}else t=[]}f=m.call(l,h,t)}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){ze(n)}},tg[b.toString()]?v("yt.scheduler.instance")?Ze.h(g):Je(g,0):g())});
rg[d]=!0;sg[b.toString()]||(sg[b.toString()]=[]);sg[b.toString()].push(d);return d}
function yg(){var a=zg;const b=xg(function(c){a.apply(void 0,arguments);Ag(b)});
return b}
function Ag(a){const b=wg();b&&("number"===typeof a&&(a=[a]),pa(a,c=>{b.unsubscribeByKey(c);delete rg[c]}))}
function wg(){return v("ytPubsub2Pubsub2Instance")}
;function Bg(a,b){let c;return()=>{c||(c=new Cg(a,b));return c}}
var Cg=class extends Xf{constructor(a,b){super(a,b);this.options=b;ff(a)}j(a,b,c={}){return(this.options.fa?kg:jg)(a,b,Object.assign({},c))}delete(a={}){return(this.options.fa?mg:lg)(this.name,a)}};const Dg=["client.name","client.version"];function Eg(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Dg.includes(b.key):!1);
return a}
;var Fg;Fg=Bg("ServiceWorkerLogsDatabase",{L:{SWHealthLog:{O:1}},fa:!0,upgrade:(a,b)=>{b(1)&&Ff(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Gg(a,b){return r(function*(){var c=yield Wf(Fg(),b),d=N("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Eg(e.clientError));e.interface=d;return Hf(c,"SWHealthLog",e)})}
;const Hg=u.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:0};w("ytNetworklessLoggingInitializationOptions",Hg);function Ig(a,b,c){!N("VISITOR_DATA")&&.01>Math.random()&&Ae(new Q("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new Q("innertube xhrclient not ready","log_event",b,c),ze(a),a;const d={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(m,p)=>{if(c.onSuccess)c.onSuccess(p)},
onFetchSuccess:m=>{if(c.onSuccess)c.onSuccess(m)},
onError:(m,p)=>{if(c.onError)c.onError(p)},
onFetchError:m=>{if(c.onError)c.onError(m)},
timeout:c.timeout,withCredentials:!0};d.headers["Content-Type"]||(d.headers["Content-Type"]="application/json");b="";var e=a.config_.Aa;e&&(b=e);e=Te(a.config_.Ca||!1,b,c);Object.assign(d.headers,e);(e=d.headers.Authorization)&&!b&&(d.headers["x-origin"]=window.location.origin);const f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Ba&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);const k=He(`${b}${f}`,g||{},!0),l=()=>{try{Le(k,
d)}catch(m){if("InvalidAccessError"==m.name)Ae(Error("An extension is blocking network request."));else throw m;}};
!O("use_new_nwl")&&v("ytNetworklessLoggingInitializationOptions")&&Hg.isNwlInitialized?fg().then(m=>{l(m)}):l(!1)}
class Jg{constructor(a){this.config_=null;a?this.config_=a:Oe()&&(this.config_=Pe())}isReady(){!this.config_&&Oe()&&(this.config_=Pe());return!!this.config_}};let Kg=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++Kg));w("ytEventsEventsListeners",u.ytEventsEventsListeners||{});w("ytEventsEventsCounter",u.ytEventsEventsCounter||{count:0});function Lg(){const a=v("_lact",window);var b;null==a?b=-1:b=Math.max(Date.now()-a,0);return b}
;u.ytPubsubPubsubInstance||new J;const Mg=qe("initial_gel_batch_timeout",2E3),Ng=Math.pow(2,16)-1;let T=void 0;class Og{constructor(){this.j=this.h=this.i=0}}const Pg=new Og,Qg=new Og;let Rg=!0;const Sg=u.ytLoggingTransportGELQueue_||new Map,Tg=u.ytLoggingTransportGELProtoQueue_||new Map,Ug=u.ytLoggingTransportTokensToCttTargetIds_||{},Vg=u.ytLoggingTransportTokensToJspbCttTargetIds_||{};function Wg(a,b){if("log_event"===a.endpoint){var c=Xg(a),d=Sg.get(c)||[];Sg.set(c,d);d.push(a.payload);Yg(b,d,c)}}
function Zg(a,b){if("log_event"===a.endpoint){var c=Xg(a,!0),d=Tg.get(c)||[];Tg.set(c,d);a=Nb(a.payload);d.push(a);Yg(b,d,c,!0)}}
function Yg(a,b,c,d=!1){a&&(T=new a);a=qe("tvhtml5_logging_max_batch")||qe("web_logging_max_batch")||100;const e=P(),f=d?Qg.j:Pg.j;b.length>=a?$g({writeThenSend:!0},O("flush_only_full_queue")?c:void 0,d):10<=e-f&&(ah(d),d?Qg.j=e:Pg.j=e)}
function bh(a,b){if("log_event"===a.endpoint){var c=Xg(a),d=new Map;d.set(c,[a.payload]);b&&(T=new b);return new G(e=>{T&&T.isReady()?ch(d,e,{bypassNetworkless:!0},!0):e()})}}
function dh(a,b){if("log_event"===a.endpoint){var c=Xg(a,!0),d=new Map;d.set(c,[Nb(a.payload)]);b&&(T=new b);return new G(e=>{T&&T.isReady()?eh(d,e,{bypassNetworkless:!0},!0):e()})}}
function Xg(a,b=!1){var c="";if(a.K)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new Zd;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Gb(d,2,Yd,c.playlistId);Vg[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Ug[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function $g(a={},b,c=!1){new G(d=>{c?(window.clearTimeout(Qg.i),window.clearTimeout(Qg.h),Qg.h=0):(window.clearTimeout(Pg.i),window.clearTimeout(Pg.h),Pg.h=0);if(T&&T.isReady())if(void 0!==b)if(c){var e=new Map,f=Tg.get(b)||[];e.set(b,f);eh(e,d,a);Tg.delete(b)}else e=new Map,f=Sg.get(b)||[],e.set(b,f),ch(e,d,a),Sg.delete(b);else c?(eh(Tg,d,a),Tg.clear()):(ch(Sg,d,a),Sg.clear());else ah(c),d()})}
function ah(a=!1){if(O("web_gel_timeout_cap")&&(!a&&!Pg.h||a&&!Qg.h)){var b=Je(()=>{$g({writeThenSend:!0},void 0,a)},6E4);
a?Qg.h=b:Pg.h=b}window.clearTimeout(a?Qg.i:Pg.i);b=N("LOGGING_BATCH_TIMEOUT",qe("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Rg&&(b=Mg);b=Je(()=>{$g({writeThenSend:!0},void 0,a)},b);
a?Qg.i=b:Pg.i=b}
function ch(a,b,c={},d){var e=T;const f=Math.round(P());let g=a.size;for(const [l,m]of a){var h=l,k=m;a=ta({context:Qe(e.config_||Pe())});a.events=k;(k=Ug[h])&&fh(a,h,k);delete Ug[h];h="visitorOnlyApprovedKey"===h;gh(a,f,h);hh(c);Ig(e,a,ih(c,h,()=>{g--;g||b()},()=>{g--;
g||b()},d));
Rg=!1}}
function eh(a,b,c={},d){var e=T;const f=Math.round(P());let g=a.size;for(const [m,p]of a){var h=m,k=p;a=new ae;var l=Se(e.config_||Pe());D(a,1,l);k=jh(k);for(l=0;l<k.length;l++)Lb(a,3,K,k[l]);(k=Vg[h])&&kh(a,h,k);delete Vg[h];h="visitorOnlyApprovedKey"===h;lh(a,f,h);hh(c);a=Nb(a);h=ih(c,h,()=>{g--;g||b()},()=>{g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=a;Ig(e,"",h);Rg=!1}}
function hh(a){O("always_send_and_write")&&(a.writeThenSend=!1)}
function ih(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,xb:a,K:b,qb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function gh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID",void 0))&&(c=mh(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function lh(a,b,c){C(a,2,b);if(!c&&(b=N("EVENT_ID",void 0))){c=mh();const d=new Xd;C(d,1,b);C(d,2,c);D(a,5,d)}}
function mh(){let a=N("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Ng/2));a++;a>Ng&&(a=1);M("BATCH_CLIENT_COUNTER",a);return a}
function fh(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function kh(a,b,c){let d;if(B(c,1===Hb(c,Yd)?1:-1))d=1;else if(c.getPlaylistId())d=2;else return;D(a,4,c);a=Ib(a,ud,1)||new ud;c=Ib(a,sd,3)||new sd;const e=new qd;e.setToken(b);C(e,1,d);Lb(c,12,qd,e);D(a,3,c)}
function jh(a){const b=[];for(let h=0;h<a.length;h++)try{var c=b,d=c.push;a:{var e=String(a[h]),f=K;if(null==e||""==e){var g=new f;break a}const k=JSON.parse(e);if(!Array.isArray(k))throw Error("Expected to deserialize an Array but got "+ia(k)+": "+k);Pb=k;const l=new f(k);Pb=null;g=l}d.call(c,g)}catch(k){ze(new Q("Transport failed to deserialize "+String(a[h])))}return b}
;const nh=u.ytLoggingGelSequenceIdObj_||{};function U(a,b,c,d={}){const e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Lg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.A&&(a=e.context,b=d.A,b={index:oh(b),groupKey:b},a.sequence=b,d.ma&&delete nh[d.A]);(d.Fa?bh:Wg)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,K:d.K},c)}
function oh(a){nh[a]=a in nh?nh[a]+1:0;return nh[a]}
;let ph=Jg;function V(a,b,c={}){let d=ph;N("ytLoggingEventsDefaultDisabled",!1)&&ph==Jg&&(d=null);U(a,b,d,c)}
;let qh=Date.now().toString();const rh=u.ytLoggingGelSequenceIdObj_||{};function sh(a,b,c={}){var d=Math.round(c.timestamp||P());C(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Lg();d=new Ud;C(d,1,c.timestamp||!isFinite(e)?-1:e);if(O("log_sequence_info_on_gel_web")&&c.A){e=c.A;const f=oh(e),g=new Td;C(g,2,f);C(g,1,e);D(d,3,g);c.ma&&delete rh[c.A]}D(a,33,d);(c.Fa?dh:Zg)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,K:c.K},b)}
;function th(a,b={}){let c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&ph===Jg&&(c=!0);sh(a,c?null:ph,b)}
;function uh(a,b,c){const d=new K;E(d,72,Vd,a);c?sh(d,c,b):th(d,b)}
function vh(a,b,c){const d=new K;E(d,73,Vd,a);c?sh(d,c,b):th(d,b)}
function wh(a,b,c){const d=new K;E(d,78,Vd,a);c?sh(d,c,b):th(d,b)}
function xh(a,b,c){const d=new K;E(d,208,Vd,a);c?sh(d,c,b):th(d,b)}
function yh(a,b,c){const d=new K;E(d,156,Vd,a);c?sh(d,c,b):th(d,b)}
function zh(a,b,c){const d=new K;E(d,215,Vd,a);c?sh(d,c,b):th(d,b)}
function Ah(a,b,c){const d=new K;E(d,111,Vd,a);c?sh(d,c,b):th(d,b)}
;let Bh=u.ytLoggingDocDocumentNonce_;
if(!Bh){var Ch;a:{if(window.crypto&&window.crypto.getRandomValues)try{const d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(let f=0;f<d.length;f++)d[f]=e[f];Ch=d;break a}catch(d){}const c=Array(16);for(let d=0;16>d;d++){const e=Date.now();for(let f=0;f<e%23;f++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(qh){let d=1;for(let e=0;e<qh.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^qh.charCodeAt(e),d++}Ch=c}const a=Ch,b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&
63));Bh=b.join("")}var Dh=Bh;let Eh=Jg;var Fh={Oa:0,Ma:1,Na:2,hb:3,Pa:4,lb:5,ib:6,kb:7,jb:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};let Gh=1;function Hh(a){return new Ih({trackingParams:a})}
function Jh(a){const b=Gh++;return new Ih({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0})}
var Ih=class{constructor(a){this.h=a}getAsJson(){const a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a}getAsJspb(){const a=new Hd;void 0!==this.h.trackingParams?C(a,1,this.h.trackingParams):
(void 0!==this.h.veType&&C(a,2,this.h.veType),void 0!==this.h.veCounter&&C(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&C(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();D(a,7,b)}void 0!==this.h.youtubeData&&D(a,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&!!this.h.veType}};function Kh(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function Lh(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Mh(a=0){return N(Lh(a),void 0)}
function Nh(a=0){return(a=Mh(a))?new Ih({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Oh(){let a=N("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function W(a=0){a=N(Kh(a));if(!a&&!N("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function Ph(a,b,c){const d=Oh();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Qh(a){return Oh()[a]}
function Rh(a,b,c=0,d){if(a!==N(Kh(c))||b!==N(Lh(c)))Ph(a,d,c),M(Kh(c),a),M(Lh(c),b),b=()=>{setTimeout(()=>{if(a)if(O("web_time_via_jspb")){var e=new Id;C(e,1,Dh);C(e,2,a);O("use_default_heartbeat_client")?Ah(e):Ah(e,void 0,Eh)}else e={clientDocumentNonce:Dh,clientScreenNonce:a},O("use_default_heartbeat_client")?V("foregroundHeartbeatScreenAssociated",e):U("foregroundHeartbeatScreenAssociated",e,Eh)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
;const Sh=[{da:a=>`Cannot read property '${a.key}'`,
U:{Error:[{v:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{v:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{v:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{v:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{v:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{v:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{v:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{da:a=>`Cannot call '${a.key}'`,
U:{TypeError:[{v:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{v:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{v:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{v:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{v:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{v:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{da:a=>`${a.key} is not defined`,
U:{ReferenceError:[{v:/(.*) is not defined/,groups:["key"]},{v:/Can't find variable: (.*)/,groups:["key"]}]}}];var Uh={G:[],D:[{ra:Th,weight:500}]};function Th(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vh(){if(!Wh){var a=Wh=new Xh;a.G.length=0;a.D.length=0;Yh(a,Uh)}return Wh}
function Yh(a,b){b.G&&a.G.push.apply(a.G,b.G);b.D&&a.D.push.apply(a.D,b.D)}
var Xh=class{constructor(){this.D=[];this.G=[]}},Wh;const Zh=new J;function $h(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=ai(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=ai(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=ai(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function ai(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function bi(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ci(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=$h(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?ci(`${f}.ve`,g,h,k):0;d+=f;d+=ci(e,a[e],b,c);if(500<d)break}}else c[b]=di(a),d+=c[b].length;else c[b]=di(a),d+=c[b].length;return d}
function ci(a,b,c,d){c+=`.${a}`;a=di(b);d[c]=a;return c.length+a.length}
function di(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;var ei=new Set,fi=0,gi=0,hi=0,ii=[];const ji=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ki(a){li(a)}
function mi(a){li(a,"WARNING")}
function li(a,b="ERROR"){var c={};c.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);ni(a,c||{},b)}
function ni(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(O("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=fi)){d=ii;var e=Bc(a);const H=e.message||"Unknown Error",
Ea=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${Ea}: ${H}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let I=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(I=bi(a.args[h],`params.${h}`,b,I),500<=I);h++);else if(a.hasOwnProperty("params")&&a.params){const Z=a.params;if("object"===typeof a.params)for(h in Z){if(!Z[h])continue;const $f=`params.${h}`,ag=di(Z[h]);b[$f]=
ag;I+=$f.length+ag.length;if(500<I)break}else b.params=di(Z)}if(d.length)for(h=0;h<d.length&&!(I=bi(d[h],`params.context.${h}`,b,I),500<=I);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:H,name:Ea,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=Vh();d=b;for(k of a.G)if(d.message&&d.message.match(k.Da)){k=k.weight;break a}for(var l of a.D)if(l.ra(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of Sh)if(m.U[k.name]){l=m.U[k.name];for(var p of l)if(l=k.message.match(p.v)){k.params["params.error.original"]=l[0];a=p.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.da(b);break}}k.params||(k.params={});m=Vh();k.params["params.errorServiceSignature"]=`msg=${m.G.length}&cb=${m.D.length}`;k.params["params.serviceWorker"]="true";u.document&&u.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));xa("sample").constructor!==wa&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);if(0!==k.sampleWeight&&!ei.has(k.message)){"ERROR"===c?(Zh.ea("handleError",k),O("record_app_crashed_web")&&0===hi&&1===k.sampleWeight&&(hi++,O("errors_via_jspb")?(m=new Gd,C(m,1,1),O("report_client_error_with_app_crash_ks")||(l=new Bd,C(l,1,k.message),p=new Cd,D(p,3,l),l=new Dd,D(l,5,p),p=new Fd,D(p,9,l),
D(m,4,p)),p=new K,E(p,20,Vd,m),th(p,void 0)):(m={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},O("report_client_error_with_app_crash_ks")||(m.systemHealth={crashData:{clientError:{logMessage:{message:k.message}}}}),V("appCrashed",m))),gi++):"WARNING"===c&&Zh.ea("handleWarning",k);a:{if(O("errors_via_jspb")){if(oi())var t=void 0;else{m=new yd;C(m,1,k.stack);k.fileName&&C(m,4,k.fileName);var n=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==n.length&&(1!==n.length||isNaN(Number(n[0]))?2!==
n.length||isNaN(Number(n[0]))||isNaN(Number(n[1]))||(C(m,2,Number(n[0])),C(m,3,Number(n[1]))):C(m,2,Number(n[0])));n=new Bd;C(n,1,k.message);C(n,3,k.name);C(n,6,k.sampleWeight);"ERROR"===c?C(n,2,2):"WARNING"===c?C(n,2,1):C(n,2,0);var y=new zd;C(y,1,!0);E(y,3,Ad,m);m=new wd;C(m,3,window.location.href);p=N("FEXP_EXPERIMENTS",[]);for(b=0;b<p.length;b++)l=m,a=p[b],wb(l),Fb(l,5).push(a);p=ne();if(!oe()&&p)for(var z of Object.keys(p))l=new xd,C(l,1,z),l.setValue(String(p[z])),Lb(m,4,xd,l);if(z=k.params)for(t of Object.keys(z))p=
new xd,C(p,1,`client.${t}`),p.setValue(String(z[t])),Lb(m,4,xd,p);z=N("SERVER_NAME",void 0);t=N("SERVER_VERSION",void 0);z&&t&&(p=new xd,C(p,1,"server.name"),p.setValue(z),Lb(m,4,xd,p),z=new xd,C(z,1,"server.version"),z.setValue(t),Lb(m,4,xd,z));t=new Cd;D(t,1,m);D(t,2,y);D(t,3,n)}if(!t)break a;z=new K;E(z,163,Vd,t);th(z,void 0)}else{if(oi())t=void 0;else{z={stackTrace:k.stack};k.fileName&&(z.filename=k.fileName);t=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==t.length&&(1!==t.length||
isNaN(Number(t[0]))?2!==t.length||isNaN(Number(t[0]))||isNaN(Number(t[1]))||(z.lineNumber=Number(t[0]),z.columnNumber=Number(t[1])):z.lineNumber=Number(t[0]));t={level:"ERROR_LEVEL_UNKNOWN",message:k.message,errorClassName:k.name,sampleWeight:k.sampleWeight};"ERROR"===c?t.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(t.level="ERROR_LEVEL_WARNNING");z={isObfuscated:!0,browserStackInfo:z};m={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(m.experimentIds=N("FEXP_EXPERIMENTS"));p=ne();if(!oe()&&
p)for(y of Object.keys(p))m.kvPairs.push({key:y,value:String(p[y])});if(y=k.params)for(n of Object.keys(y))m.kvPairs.push({key:`client.${n}`,value:String(y[n])});n=N("SERVER_NAME",void 0);y=N("SERVER_VERSION",void 0);n&&y&&(m.kvPairs.push({key:"server.name",value:n}),m.kvPairs.push({key:"server.version",value:y}));t={errorMetadata:m,stackTrace:z,logMessage:t}}if(!t)break a;V("clientError",t)}("ERROR"===c||O("errors_flush_gel_always_killswitch"))&&$g()}try{ei.add(k.message)}catch(Z){}fi++}}}}
function oi(){for(const a of ji){const b=Aa();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
;class pg extends ng{constructor(a){super(arguments);this.csn=a}}const vg=new og,pi=[];let ri=qi,si=0;function ti(a,b,c,d,e,f,g){const h=ri();f=new Ih({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,A:h};const k=()=>{mi(new Q("newScreen() parent element does not have a VE - rootVe",b))};
if(O("il_via_jspb")){const l=new Kd;l.B(h);Jd(l,f.getAsJspb());c&&c.visualElement?(f=new Md,c.clientScreenNonce&&C(f,2,c.clientScreenNonce),Ld(f,c.visualElement.getAsJspb()),g&&C(f,4,Wd[g]),D(l,5,f)):c&&k();d&&C(l,3,d);yh(l,e,a)}else f={csn:h,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):c&&k(),d&&(f.cloneCsn=d),a?U("screenCreated",f,a,e):V("screenCreated",f,e);ug(new pg(h));
return h}
function ui(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:Qh(b),
A:b};for(const g of d)d=g.getAsJson(),(sa(d)||!d.trackingParams&&!d.veType)&&mi(Error("Child VE logged with no data"));if(O("il_via_jspb")){const g=new Pd;g.B(b);Nd(g,c.getAsJspb());qa(e,h=>{h=h.getAsJspb();Lb(g,3,Hd,h)});
"UNDEFINED_CSN"==b?X("visualElementAttached",g,f):zh(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:qa(e,g=>g.getAsJson())},"UNDEFINED_CSN"==b?X("visualElementAttached",c,f):a?U("visualElementAttached",c,a,f):V("visualElementAttached",c,f)}
function vi(a,b,c,d,e){const f={cttAuthInfo:Qh(b),A:b};if(O("il_via_jspb")){const g=new Rd;g.B(b);c=c.getAsJspb();D(g,2,c);C(g,4,1);d&&D(g,3,e);"UNDEFINED_CSN"==b?X("visualElementShown",g,f):uh(g,f,a)}else e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"==b?X("visualElementShown",e,f):a?U("visualElementShown",e,a,f):V("visualElementShown",e,f)}
function wi(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:Qh(b),A:b,ma:d};O("il_via_jspb")?(e=new Rd,e.B(b),c=c.getAsJspb(),D(e,2,c),C(e,4,d?16:8),"UNDEFINED_CSN"==b?X("visualElementHidden",e,f):vh(e,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"==b?X("visualElementHidden",d,f):a?U("visualElementHidden",d,a,f):V("visualElementHidden",d,f))}
function xi(a,b,c,d){var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f={cttAuthInfo:Qh(b),A:b};if(O("il_via_jspb")){const g=new Qd;g.B(b);c=c.getAsJspb();D(g,2,c);C(g,4,Wd[e]);d&&D(g,3,void 0);"UNDEFINED_CSN"==b?X("visualElementGestured",g,f):wh(g,f,a)}else e={csn:b,ve:c.getAsJson(),gestureType:e},d&&(e.clientData=d),"UNDEFINED_CSN"==b?X("visualElementGestured",e,f):a?U("visualElementGestured",e,a,f):V("visualElementGestured",e,f)}
function qi(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Qa(b,3)}
function X(a,b,c){pi.push({payloadName:a,payload:b,options:c});si||(si=yg())}
function zg(a){if(pi){for(let b of pi)if(b.payload)if(O("il_via_jspb"))switch(b.payload.B(a.csn),b.payloadName){case "screenCreated":yh(b.payload,b.options);break;case "visualElementAttached":zh(b.payload,b.options);break;case "visualElementShown":uh(b.payload,b.options);break;case "visualElementHidden":vh(b.payload,b.options);break;case "visualElementGestured":wh(b.payload,b.options);break;case "visualElementStateChanged":xh(b.payload,b.options);break;default:mi(new Q("flushQueue unable to map payloadName to JSPB setter"))}else b.payload.csn=
a.csn,U(b.payloadName,b.payload,null,b.options);pi.length=0}si=0}
;function yi(a,b){return b.data&&b.data.loggingDirectives?b.data.loggingDirectives.trackingParams||"":b.h&&b.h.trackingParams?b.h.trackingParams:b.data&&b.data.trackingParams||""}
function zi(a,b){const c=W(void 0);return null!==a.j&&c!=a.j?(mi(new Q("VisibilityLogger called before newScreen()",{caller:b.tagName,previous_csn:a.csn,current_csn:c})),null):c}
function Ai(a){return parseInt(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||"",10)||1}
function Bi(a,b){var c=yi(0,b),d=b.visualElement?b.visualElement:c,e=a.m.has(d);const f=a.i.get(d);a.m.add(d);a.i.set(d,!0);b.i&&!e&&b.i();if(c||b.visualElement)if(d=zi(a,b)){var g=!(!b.data||!b.data.loggingDirectives);if(Ai(b)||g){var h=b.visualElement?b.visualElement:Hh(c);c=b.j;var k=b.l;g||e?Ai(b)&4?f||(a=a.h,b={cttAuthInfo:Qh(d),A:d},O("il_via_jspb")?(e=new Rd,e.B(d),h=h.getAsJspb(),D(e,2,h),C(e,4,4),c&&D(e,3,k),"UNDEFINED_CSN"==d?X("visualElementShown",e,b):uh(e,b,a)):(k={csn:d,ve:h.getAsJson(),
eventType:4},c&&(k.clientData=c),"UNDEFINED_CSN"==d?X("visualElementShown",k,b):a?U("visualElementShown",k,a,b):V("visualElementShown",k,b))):Ai(b)&1&&!e&&vi(a.h,d,h,c,k):vi(a.h,d,h,c)}}}
function Ci(a,b){var c=yi(0,b),d=b.visualElement?b.visualElement:c,e=a.l.has(d);const f=a.i.get(d);a.l.add(d);a.i.set(d,!1);!1!==f&&(c||b.visualElement)&&(!(d=zi(a,b))||!Ai(b)&&b.data&&b.data.loggingDirectives||(c=b.visualElement?b.visualElement:Hh(c),Ai(b)&8?wi(a.h,d,c):Ai(b)&2&&!e&&(a=a.h,b={cttAuthInfo:Qh(d),A:d},O("il_via_jspb")?(e=new Rd,e.B(d),c=c.getAsJspb(),D(e,2,c),C(e,4,2),"UNDEFINED_CSN"==d?X("visualElementHidden",e,b):vh(e,b,a)):(e={csn:d,ve:c.getAsJson(),eventType:2},"UNDEFINED_CSN"==
d?X("visualElementHidden",e,b):a?U("visualElementHidden",e,a,b):V("visualElementHidden",e,b)))))}
class Di{constructor(){this.m=new Set;this.l=new Set;this.i=new Map;this.j=null;this.h=Jg}clear(){this.m.clear();this.l.clear();this.i.clear();this.j=null}}(function(){var a=Di;a.ca=void 0;a.u=function(){return a.ca?a.ca:a.ca=new a}})();var Ei=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Fi=["notifications_register","notifications_check_registration"];let Gi=null;function Y(a,b){const c={};c.key=a;c.value=b;return Hi().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Ii(){return Y("IndexedDBCheck","testing IndexedDB").then(()=>Ji("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Ji(a){const b=new Q("Error accessing DB");return Hi().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Hi(){return Gi?Promise.resolve(Gi):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Gi=d,a(Gi);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Hi()};
c.onupgradeneeded=Ki})}
function Ki(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Li={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Mi(a){if(1===a.length)return a[0];var b=Li.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Li).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Ni(a){return`/youtubei/v1/${Mi(a)}`}
;const Oi=window;class Pi{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Qi=Oi.performance||Oi.mozPerformance||Oi.msPerformance||Oi.webkitPerformance||new Pi;la(Qi.clearResourceTimings||Qi.webkitClearResourceTimings||Qi.mozClearResourceTimings||Qi.msClearResourceTimings||Qi.oClearResourceTimings||oa,Qi);w("ytLoggingLatencyUsageStats_",u.ytLoggingLatencyUsageStats_||{});function Ri(){Si.h||(Si.h=new Si);return Si.h}
function Ti(a,b,c={}){a.i.add(c.layer||0);a.j=()=>{Ui(a,b,c);var d=Nh(c.layer);if(d){for(var e of a.m)Vi(a,e[0],e[1]||d,c.layer);for(const k of a.C){e=W(0);var f=k[0]||Nh(0);if(e&&f){d=a.client;var g=f,h=k[1];f={cttAuthInfo:Qh(e),A:e};O("il_via_jspb")?(h=new Sd,h.B(e),g=g.getAsJspb(),D(h,2,g),"UNDEFINED_CSN"==e?X("visualElementStateChanged",h,f):xh(h,f,d)):(g={csn:e,ve:g.getAsJson(),clientData:h},"UNDEFINED_CSN"==e?X("visualElementStateChanged",g,f):d?U("visualElementStateChanged",g,d,f):V("visualElementStateChanged",
g,f))}}}};
W(c.layer)||a.j();if(c.ka)for(const d of c.ka)Wi(a,d,c.layer);else li(Error("Delayed screen needs a data promise."))}
function Ui(a,b,c={}){c.layer||(c.layer=0);var d=void 0!==c.Ea?c.Ea:c.layer;var e=W(d);d=Nh(d);let f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=N("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});let k;try{k=ti(a.client,b,f,c.ja,c.cttAuthInfo,g,c.ub)}catch(l){a=l;c=[{Eb:b,rootVe:d,parentVisualElement:void 0,sb:e,zb:f,ja:c.ja}];a.args||(a.args=[]);a.args.push(...c);
li(l);return}Rh(k,b,c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{for(const l of Object.values(Fh))if(W(l)===e){b=!0;break a}b=!1}b=!b}b&&wi(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");d=Di.u();d.clear();d.j=W();d=Nh(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&vi(void 0,k,d,void 0);a.i.delete(c.layer||0);a.j=void 0;for(const [l,m]of a.M)e=l,m.has(c.layer)&&d&&Vi(a,e,d,c.layer);for(c=0;c<
a.l.length;c++){e=a.l[c];try{e()}catch(l){li(l)}}a.l.length=0;for(c=0;c<a.s.length;c++){e=a.s[c];try{e()}catch(l){li(l)}}}
function Xi(a){var b=28631,c={layer:8};[28631].includes(b)||(mi(new Q("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.m=[];a.C=[];c.ka?Ti(a,b,c):Ui(a,b,c)}
function Wi(a,b,c=0){b.then(d=>{a.i.has(c)&&a.j&&a.j();const e=W(c),f=Nh(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&ui(a.client,e,f,[Hh(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&ui(a.client,e,f,[Hh(d.playerResponse.trackingParams)])}})}
function Vi(a,b,c,d=0){if(a.i.has(d))a.m.push([b,c]);else{var e=W(d);c=c||Nh(d);e&&c&&ui(a.client,e,c,[b])}}
function Yi(a,b,c=0){(c=W(c))&&xi(a.client,c,b,void 0)}
function Zi(a,b,c,d=0){if(!b)return!1;d=W(d);if(!d)return!1;xi(a.client,d,Hh(b),c);return!0}
function $i(a,b){const c=b.xa&&b.xa();b.visualElement?Yi(a,b.visualElement,c):(b=yi(Di.u(),b),Zi(a,b,void 0,c))}
var Si=class{constructor(){this.m=[];this.C=[];this.h=[];this.l=[];this.s=[];this.i=new Set;this.M=new Map}clickCommand(a,b,c=0){return Zi(this,a.clickTrackingParams,b,c)}};var aj=class extends F{constructor(a){super(a)}};var bj=class extends F{constructor(a){super(a)}};bj.h="yt.sw.adr";function cj(a){return r(function*(){var b=yield u.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new bj).constructor.h){b=new bj(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function dj(a=!1){const b=ej.h;return r(function*(){if(a||!b.h)b.h=cj(b).then(b.j).catch(c=>{delete b.h;li(c)});
return b.h})}
var ej=class{constructor(){this.i=`${self.location.origin}/sw.js_data`}j(a){const b=Ib(a,aj,2);if(b){const c=B(b,5);c&&(u.__SAPISID=c);O("enable_web_eom_visitor_data")&&null!=B(b,10)?M("EOM_VISITOR_DATA",B(b,10)):null!=B(b,7)&&M("VISITOR_DATA",B(b,7));null!=B(b,4)&&M("SESSION_INDEX",String(B(b,4)));null!=B(b,8)&&M("DELEGATED_SESSION_ID",B(b,8))}return a}};function fj(a){const b={};var c=yc();c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(N("SESSION_INDEX",0)),c=isNaN(c)?0:c),O("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in L||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in L&&(b["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return b}
var gj=class{constructor(){this.Ha=!0}};var hj={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ij(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var jj=class{constructor(){this.h={}}handleResponse(a,b){let c,d;b=(null==(c=b.I.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];ij(this,a)}}};function kj(){var a=N("INNERTUBE_CONTEXT");if(!a)return li(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ta(a);O("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=re();c?b.experimentsToken=c:delete b.experimentsToken;jj.h||(jj.h=new jj);b=jj.h.h;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);return a}
;function lj(a){var b=a;if(a=N("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(A);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var mj=class{};const nj={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends mj{})};function oj(a){var b={rb:{}};gj.h||(gj.h=new gj);var c=gj.h;if(void 0!==pj.h){const d=pj.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new Q("InnerTubeTransportService is already initialized",a);
}else pj.h=new pj(b,a,c)}
function qj(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.ia)?void 0:c.sessionIndex};c=yield Wc(fj(d));return Promise.resolve(Object.assign({},rj(b),c))})}
function sj(a,b,c){return r(function*(){var d;const e=null==(d=b.config)?void 0:d.Db;if(e&&a.h.has(e)&&O("web_memoize_inflight_requests"))return a.h.get(e);var f;if(null==b?0:null==(f=b.I)?0:f.context)for(const k of[])k.Ab(b.I.context);let g;if(null==(g=a.i)?0:g.l(b.input,b.I))return a.i.j(b.input,b.I);d=JSON.stringify(b.I);b.W=Object.assign({},b.W,{headers:c});f=Object.assign({},b.W);"POST"===b.W.method&&(f=Object.assign({},f,{body:d}));d=a.l.fetch(b.input,f,b.config);e&&a.h.set(e,d);d=yield d;e&&
a.h.has(e)&&a.h.delete(e);let h;!d&&(null==(h=a.i)?0:h.h(b.input,b.I))&&(d=yield a.i.i(b.input,b.I));return d})}
function tj(a,b,c){var d={ia:{identity:hj}};b.context||(b.context=kj());return new G(e=>r(function*(){var f=lj(c);f=Ie(f)?"same-origin":"cors";if(a.j.Ha){var g,h=null==d?void 0:null==(g=d.ia)?void 0:g.sessionIndex;g=fj({sessionIndex:h});f=Object.assign({},rj(f),g)}else f=yield qj(d,f);g=lj(c);h={};N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=N("INNERTUBE_API_KEY"));O("json_condensed_response")&&(h.prettyPrint="false");g=He(g,h||{},!1);h={method:"POST",
mode:Ie(g)?"same-origin":"cors",credentials:Ie(g)?"same-origin":"include"};e(sj(a,{input:g,W:h,I:b,config:d},f))}))}
function rj(a){const b={"Content-Type":"application/json"};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=N("EOM_VISITOR_DATA"):N("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=N("VISITOR_DATA"));"cors"!==a&&((a=N("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=N("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=N("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),O("forward_domain_admin_state_on_embeds")&&(a=
N("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
var pj=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.ga||(a.ga={});a.ga=Object.assign({},nj,a.ga)}};let uj;function vj(){uj||(oj({fetch:(a,b)=>Wc(fetch(new Request(a,b)))}),uj=pj.h);
return uj}
;function wj(a){return r(function*(){yield xj();mi(a)})}
function yj(a){r(function*(){var b=yield gg();b?yield Gg(a,b):(yield dj(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{payloadName:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{payloadName:"clientError",payload:a.clientError,options:b}:void 0,b&&V(b.payloadName,b.payload))})}
function xj(){return r(function*(){try{yield dj()}catch(a){}})}
;const zj={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},Aj=RegExp("^(?:[a-z]+:)?//","i");function Bj(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(Y("IDToken",b),Cj()):"notifications_check_registration"===a&&Dj(b)}
function Ej(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function Fj(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function Gj(a){return r(function*(){const b=Fj(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Ni(te);return Hj().then(e=>tj(e,c,d).then(f=>{f.json().then(g=>{if(!g||!g.endpointUrl)return Promise.resolve();a.payload.chrome.postedEndpoint&&!O("web_log_push_impressions_after_show")&&Ij(a.payload.chrome.postedEndpoint);return Jj(a,g.endpointUrl)})}))})}
function Kj(a,b){var c=W(8);if(null==c||!b)return a;if(!O("web_use_url_api_to_add_params"))return`${a}&parentCsn=${c}&parentTrackingParams=${b}`;a=Aj.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function Jj(a,b){a.deviceId&&Y("DeviceId",a.deviceId);a.timestampSec&&Y("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Ri();Xi(d);var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:Kj(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&O("web_log_push_impressions_after_show")&&Ij(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h=Hh(g.data.clickTrackingParams),Vi(d,h,void 0,8),h={X:8,visualElement:h},Bi(Di.u(),h);Lj(a.displayCap)}).catch(()=>{})}
function Ij(a){if(!a.recordNotificationInteractionsEndpoint)return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest},c=Ni(ue);return Hj().then(d=>tj(d,b,c))}
function Lj(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if(null==(e=b[d].data)?0:e.clickTrackingParams){let f;var c=Hh(null==(f=b[d].data)?void 0:f.clickTrackingParams);const g={X:8,visualElement:c},h=Jh(82046),k=Ri();Vi(k,h,c,8);c={X:8,visualElement:h};Bi(Di.u(),c);$i(k,c);Ci(Di.u(),g)}}})}
function Dj(a){const b=[Mj(a),Ji("RegistrationTimestamp").then(Nj),Oj(),Pj(),Qj()];Promise.all(b).catch(()=>{Y("IDToken",a);Cj();return Promise.resolve()})}
function Nj(a){a=a||0;return 9E7>=Date.now()-a?Promise.resolve():Promise.reject()}
function Mj(a){return Ji("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Oj(){return Ji("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Pj(){return Ji("Endpoint").then(a=>Rj().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Qj(){return Ji("application_server_key").then(a=>Sj().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Tj(){var a=Notification.permission;if(zj[a])return zj[a]}
function Cj(){Y("RegistrationTimestamp",0);Promise.all([Rj(),Uj(),Vj(),Sj()]).then(([a,b,c,d])=>{b=b?Ei(b):null;c=c?Ei(c):null;d=d?Qa(new Uint8Array(d),4):null;Wj(a,b,c,d)}).catch(()=>{Wj()})}
function Wj(a=null,b=null,c=null,d=null){Ii().then(e=>{e&&(Y("Endpoint",a),Y("P256dhKey",b),Y("AuthKey",c),Y("application_server_key",d),Y("Permission",Notification.permission),Promise.all([Ji("DeviceId"),Ji("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||id.length;for(k=0;256>k;k++)f[k]=id[0|Math.random()*h];h=f.join("")}Xj(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function Xj(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Tj()}}},h=Ni(ve);return Hj().then(k=>tj(k,g,h).then(()=>{Y("DeviceId",a);Y("RegistrationTimestamp",Date.now());Y("TimestampLowerBound",Date.now())},l=>{wj(l)}))})}
function Rj(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Uj(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Vj(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Sj(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function Hj(){return r(function*(){try{return yield dj(!0),vj()}catch(a){return yield wj(a),Promise.reject(a)}})}
;let Yj=void 0;function Zj(a){return r(function*(){Yj||(Yj=yield a.open("yt-appshell-assets"));return Yj})}
function ak(a,b){return r(function*(){const c=yield Zj(a),d=b.map(e=>bk(c,e));
return Promise.all(d)})}
function ck(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function dk(a,b){return r(function*(){const c=yield Zj(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function ek(a,b,c){return r(function*(){yield(yield Zj(a)).put(b,c)})}
function fk(a,b){r(function*(){yield(yield Zj(a)).delete(b)})}
function bk(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var gk;gk=Bg("yt-serviceworker-metadata",{L:{auth:{O:1},["resource-manifest-assets"]:{O:2}},fa:!0,upgrade(a,b){b(1)&&Ff(a,"resource-manifest-assets");b(2)&&Ff(a,"auth")},version:2});let hk=null;function ik(a){return Wf(gk(),a)}
function jk(){const a=Date.now();return IDBKeyRange.bound(0,a)}
function kk(a,b){return r(function*(){yield Bf(yield ik(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return S(d.h.put(b,e)).then(()=>{hk=e;let f=!0;return Kf(d,{query:jk(),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function lk(a,b){return r(function*(){let c=!1,d=0;yield Bf(yield ik(a.token),["resource-manifest-assets"],"readonly",e=>Kf(e.objectStore("resource-manifest-assets"),{query:jk(),direction:"prev"},f=>{if(f.aa().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function mk(a){return r(function*(){hk||(yield Bf(yield ik(a.token),["resource-manifest-assets"],"readonly",b=>Kf(b.objectStore("resource-manifest-assets"),{query:jk(),direction:"prev"},c=>{hk=c.getKey()})));
return hk})}
var nk=class{constructor(a){this.token=a}static u(){return r(function*(){const a=yield gg();if(a)return nk.h||(nk.h=new nk(a)),nk.h})}};function ok(a,b){return r(function*(){yield Hf(yield ik(a.token),"auth",b,"shell_identifier_key")})}
function pk(a){return r(function*(){return(yield(yield ik(a.token)).get("auth","shell_identifier_key"))||""})}
function qk(a){return r(function*(){yield(yield ik(a.token)).clear("auth")})}
var rk=class{constructor(a){this.token=a}static u(){return r(function*(){const a=yield gg();if(a)return rk.h||(rk.h=new rk(a)),rk.h})}};function sk(){r(function*(){const a=yield rk.u();a&&(yield qk(a))})}
;function tk(){return[1,jc]}
var uk=class extends F{constructor(a){super(a)}};function gc(){return[1,kc,uk,tk]}
var fc=class extends F{constructor(a){super(a,-1,vk)}},vk=[1];function wk(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(xk(b)):Promise.reject(Error("No resource manifest header"))})}
function xk(a){return Jb(hc(decodeURIComponent(a)),uk,1).reduce((b,c)=>{(c=B(c,1))&&b.push(c);return b},[])}
;function yk(a){return r(function*(){const b=yield dj();if(b&&null!=B(b,3)){var c=yield rk.u();c&&(c=yield pk(c),B(b,3)!==c&&(fk(a.h,a.i),sk()))}})}
function zk(a){return r(function*(){let b,c;try{c=yield Ak(a.j),b=yield wk(c),yield ak(a.h,b)}catch(d){return Promise.reject(d)}try{yield Bk(),yield ek(a.h,a.i,c)}catch(d){return Promise.reject(d)}if(b)try{yield Ck(a,b,a.i)}catch(d){}return Promise.resolve()})}
function Dk(a){return r(function*(){yield yk(a);return zk(a)})}
function Ak(a){return r(function*(){try{return yield u.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function Bk(){return r(function*(){var a=yield dj();let b;a&&null!=B(a,3)&&(b=B(a,3));return b?(a=yield rk.u())?Promise.resolve(ok(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function Ck(a,b,c){return r(function*(){const d=yield nk.u();if(d)try{yield kk(d,b)}catch(e){yield wj(e)}b.push(c);try{yield dk(a.h,b)}catch(e){yield wj(e)}return Promise.resolve()})}
function Ek(a,b){return r(function*(){return ck(a.h,b)})}
function Fk(a){return r(function*(){return ck(a.h,a.i)})}
var Gk=class{constructor(){var a=self.location.origin+"/app_shell",b=self.location.origin+"/app_shell_home";this.h=self.caches;this.j=a;this.i=b}};function Hk(a,b){return r(function*(){const c=b.request,d=yield Ek(a.h,c.url);if(d)return yj({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:P()}),d;Ik(c);return Jk(b)})}
function Kk(a,b){return r(function*(){const c=yield Lk(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield Fk(a.h);if(d)return Mk(a),d;Nk(a);return c.response?c.response:Promise.reject(c.error)})}
function Ok(a,b){b=new URL(b);if(!a.i.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.l)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function Pk(a,b){return r(function*(){const c=yield Fk(a.h);if(!c)return Nk(a),Jk(b);Mk(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(P()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return c;d=yield Lk(b);return d.response&&d.response.ok?d.response:c})}
function Jk(a){return Promise.resolve(a.preloadResponse).then(b=>b||u.fetch(a.request))}
function Ik(a){const b={assetPath:a.url,cacheHit:!1};nk.u().then(c=>{if(c){var d=mk(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=lk(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{wj(e)}).finally(()=>{yj({appShellAssetLoadReport:b,
timestamp:P()})})}else yj({appShellAssetLoadReport:b,
timestamp:P()})})}
function Mk(a){yj({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!0},timestamp:P()})}
function Nk(a){yj({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!1},timestamp:P()})}
function Lk(a){return r(function*(){try{return{response:yield Jk(a)}}catch(b){return{error:b}}})}
var Vk=class{constructor(){var a=Qk,b=Rk,c=Sk,d=Tk;const e=[];e.push({key:"feature",value:"ytca"});for(var f of pc)e.push({key:f});f=Uk();this.h=a;this.m=b;this.s=c;this.i=d;this.l=e;this.j=f}};var Tk=["/","/feed/downloads"];const Wk=[/^\/$/,/^\/feed\/downloads$/],Xk=[/^\/$/,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function Uk(){return new RegExp((O("kevlar_sw_app_wide_fallback")?Xk:Wk).map(a=>a.source).join("|"))}
var Rk=/^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,Sk=/^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;var Yk=class{constructor(){var a=Qk,b=new Vk;this.h=self;this.i=a;this.m=b;this.M=Fi}init(){this.h.oninstall=this.s.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.C.bind(this)}s(a){this.h.skipWaiting();const b=Dk(this.i).catch(c=>{wj(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()];this.h.registration.navigationPreload&&b.push(this.h.registration.navigationPreload.enable());a.waitUntil(Promise.all(b))}l(a){const b=this;return r(function*(){var c=b.m,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.s.test(e.url))ej.h&&(delete ej.h.h,u.__SAPISID=void 0,M("VISITOR_DATA",void 0),M("SESSION_INDEX",void 0),M("DELEGATED_SESSION_ID",void 0)),d=a.respondWith,c=c.h,fk(c.h,c.i),sk(),c=Jk(a),d.call(a,c);else if(c.m.test(e.url))a.respondWith(Hk(c,
a));else if("navigate"===e.mode){if(O("sw_nav_request_network_first")){var f=new URL(e.url);f=c.j.test(f.pathname)}else f=!1;f?a.respondWith(Kk(c,a)):Ok(c,e.url)?a.respondWith(Pk(c,a)):d&&a.respondWith(Jk(a))}})}C(a){const b=a.data;
this.M.includes(b.type)?Bj(a):"refresh_shell"===b.type&&zk(this.i).catch(c=>{wj(c)})}};var Zk=class{static u(){let a=v("ytglobal.storage_");a||(a=new Zk,w("ytglobal.storage_",a));return a}estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return $k()})}};
function $k(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",Zk);function al(a,b){Zk.u().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:bl(null==c?void 0:c.usage),deviceStorageQuotaMbytes:bl(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class cl{constructor(){var a=dl;this.handleError=el;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=qe("ytidb_transaction_ended_event_rate_limit",.02)}T(a,b){switch(a){case "IDB_DATA_CORRUPTED":O("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":O("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":al(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function bl(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;Yh(Vh(),{G:[{Da:/Failed to fetch/,weight:500}],D:[]});var {handleError:el=ki,T:dl=V}={handleError:function(a){return r(function*(){yield xj();li(a)})},
T:function(a,b){return r(function*(){yield xj();V(a,b)})}};
for(af=new cl;0<$e.length;){const a=$e.shift();switch(a.type){case "ERROR":af.handleError(a.payload);break;case "EVENT":af.T(a.eventType,a.payload)}}ej.h=new ej;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Ij(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=Hh(b.clickTrackingParams);a={X:8,visualElement:c};if(b.isDismissed){const d=Jh(74726);b=Ri();Vi(b,d,c,8);c={X:8,visualElement:d};Bi(Di.u(),c);$i(b,c)}Ci(Di.u(),a)}};
self.onpush=function(a){a.waitUntil(Ji("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return Gj(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(Ej())};
self.onpushsubscriptionchange=function(){Cj()};
const Qk=new Gk;(new Yk).init();
