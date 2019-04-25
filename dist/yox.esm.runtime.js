var t=!0,n=!1,e=null,r=void 0,i="component",o="transition",u="function",c="absoluteKeypath",a="undefined"!=typeof window?window:r,s="undefined"!=typeof document?document:r;function f(){}var p={},v=[],d="";function h(t){return t!==r}var l=Object.prototype.toString;function m(t,n){return"numeric"===n?w(t):l.call(t).toLowerCase()==="[object "+n+"]"}function y(t){return typeof t===u}function g(t){return Array.isArray(t)}function x(t){return t!==e&&"object"==typeof t}function $(t){return"string"==typeof t}function b(t){return"number"==typeof t}function k(t){return"boolean"==typeof t}function w(t){return b(t)||$(t)&&!isNaN(parseFloat(t))&&isFinite(t)}var C={is:m,func:y,array:g,object:x,string:$,number:b,boolean:k,numeric:w};function T(t,n,e){if(y(t))return g(e)?t.apply(n,e):h(n)?t.call(n,e):h(e)?t(e):t()}var E=function(t,n){this.type=t,this.originalEvent=n};function A(t,e,r){var i=t.length;if(i)if(r)for(var o=i-1;o>=0&&e(t[o],o,t)!==n;o--);else for(var u=0;u<i&&e(t[u],u,t)!==n;u++);}function P(t,n){return t.join(n)}function S(t,n){t[t.length]=n}function L(t,n){t.unshift(n)}function O(t,n,e){g(n)?A(n,function(n){e(t,n)}):e(t,n)}function q(t,n){O(t,n,S)}function N(t,n){O(t,n,L)}function z(t){return g(t)?t:T([].slice,t)}function K(t,n,e){var r={};return A(t,function(t){r[n?t[n]:t]=e||t}),r}function j(t,e,r){var i=-1;return A(t,function(t,o){if(r===n?t==e:t===e)return i=o,n}),i}function M(t,n,e){return j(t,n,e)>=0}function I(t){var n=t.length;if(n>0)return t[n-1]}function D(t){return t.pop()}function U(e,r,i){var o=0;return A(e,function(t,u){(i===n?t==r:t===r)&&(e.splice(u,1),o++)},t),o}function B(t){return!g(t)||!t.length}E.prototype.preventDefault=function(){if(!this.isPrevented){var n=this.originalEvent;n&&n.preventDefault(),this.isPrevented=t}return this},E.prototype.stopPropagation=function(){if(!this.isStoped){var n=this.originalEvent;n&&n.stopPropagation(),this.isStoped=t}return this},E.prototype.prevent=function(){return this.preventDefault()},E.prototype.stop=function(){return this.stopPropagation()};var Y={each:A,join:P,push:q,unshift:N,toArray:z,toObject:K,indexOf:j,has:M,last:I,pop:D,remove:U,falsy:B},F=/-([a-z])/gi,H=/\B([A-Z])/g,W={},G={};function J(t,n,e){return b(e)?n===e?d:t.slice(n,e):t.slice(n)}function R(t,n,e){return t.indexOf(n,h(e)?e:0)}function Z(t,n,e){return t.lastIndexOf(n,h(e)?e:t.length)}function _(t,n){return R(t,n)>=0}function Q(t,n){return 0===R(t,n)}function V(t,n){return t.charCodeAt(n||0)}function X(t){return!$(t)||!t.length}var tt={camelize:function(t){return W[t]||(W[t]=t.replace(F,function(t,n){return n.toUpperCase()})),W[t]},hyphenate:function(t){return G[t]||(G[t]=t.replace(H,function(t,n){return"-"+n.toLowerCase()})),G[t]},trim:function(t){return X(t)?d:t.trim()},slice:J,indexOf:R,lastIndexOf:Z,has:_,startsWith:Q,endsWith:function(t,n){var e=t.length-n.length;return e>=0&&Z(t,n)===e},charAt:function(t,n){return t.charAt(n||0)},codeAt:V,falsy:X};function nt(t,n){return void 0===n&&(n=d),t!=e&&t.toString?t.toString():n}var et=".",rt={};function it(t,n){return t===n?n.length:Q(t,n+=et)?n.length:-1}function ot(e,r){if(X(e))r(e,t);else for(var i=0,o=0;t;){if(!((o=R(e,et,i))>0)){r(J(e,i),t);break}if(r(J(e,i,o),n)===n)break;i=o+1}}function ut(t){return $(t)?t:b(t)?nt(t):d}function ct(t,n){return t=ut(t),n=ut(n),t===d?n:n!==d?t+et+n:t}function at(t){return _(t,"*")}function st(t,n){var e=rt[n];e||(e=n.replace(/\./g,"\\.").replace(/\*\*/g,"([.\\w]+?)").replace(/\*/g,"(\\w+)"),e=rt[n]=new RegExp("^"+e+"$"));var r=t.match(e);if(r)return r[1]}function ft(t){return Object.keys(t)}function pt(t){return!x(t)||g(t)||!ft(t).length}function vt(t,n){return t.length-n.length}function dt(t,n){return n.length-t.length}function ht(t,n){return ft(t).sort(n?dt:vt)}function lt(t,e){for(var r in t)if(e(t[r],r)===n)break}function mt(t,n){return h(t[n])||t.hasOwnProperty(n)}function yt(t){lt(t,function(n,e){delete t[e]})}function gt(t){for(var n=[],e=arguments.length-1;e-- >0;)n[e]=arguments[e+1];return A(n,function(n){lt(n,function(n,e){t[e]=n})}),t}function xt(t,n){var e=t;return g(t)?n?(e=[],A(t,function(t,r){e[r]=xt(t,n)})):e=t.slice():x(t)&&(e={},lt(t,function(t,r){e[r]=n?xt(t,n):t})),e}var $t={};function bt(t,i){return ot(i,function(i,o){if(t==e)return t=r,n;var u=t[i],c=h(u)||t.hasOwnProperty(i);u&&y(u.get)&&(u=u.get()),o?c?($t.value=u,t=$t):t=r:t=u}),t}function kt(t,e,r,i){ot(e,function(e,o){if(o)t[e]=r;else if(t[e])t=t[e];else{if(!i)return n;t=t[e]={}}})}var wt={keys:ft,falsy:pt,sort:ht,each:lt,has:mt,clear:yt,extend:gt,copy:xt,get:bt,set:kt},Ct="undefined"!=typeof console?console:e,Tt=/yox/.test(nt(f));function Et(){if(a){var t=a.DEBUG;if(k(t))return t}return Tt}function At(t){Ct&&Et()&&Ct.warn("[Yox warn]: "+t)}var Pt={log:function(t){Ct&&Et()&&Ct.log("[Yox log]: "+t)},warn:At,error:function(t){Ct&&Ct.error("[Yox error]: "+t)},fatal:function(t){throw new Error("[Yox fatal]: "+t)}},St=function(t){this.ns=t||n,this.listeners={}};function Lt(t,n){var e={name:n,ns:d};if(t){var r=R(n,".");r>=0&&(e.name=J(n,0,r),e.ns=J(n,r+1))}return e}function Ot(n){return x(n)?function(t){return n===t}:y(n)?function(t){return n===t.fn}:function(n){return t}}function qt(t,n){return!t.length||t===n.ns}function Nt(t){return y(t)&&/native code/.test(nt(t))}St.prototype.fire=function(e,r,i){var o,u,c;e instanceof E?(o=e,u=e.type,c=x(r)?[o,r]:o):(u=e,r&&(c=r));var a=this,s=Lt(a.ns,u),f=s.name,p=s.ns,v=a.listeners[f],d=t;return v&&A(xt(v),function(t,e,s){if((i?i(t,r):qt(p,t))&&M(s,t)){o&&(o.listener=t.fn);var f=T(t.fn,t.ctx,c);return t.num=t.num?t.num+1:1,t.num===t.max&&a.off(u,t),o&&(f===n?o.prevent().stop():o.isStoped&&(f=n)),f===n?d=n:void 0}}),d},St.prototype.has=function(e,r){var i=this.listeners,o=Lt(this.ns,e),u=o.name,c=o.ns,a=t,s=Ot(r),f=function(t){return A(t,function(t){if(s(t)&&qt(c,t))return a=n}),a};return u?i[u]&&f(i[u]):c&&lt(i,f),!a},St.prototype.on=function(t,n,e){var r=this,i=r.listeners,o=function(t,n){if(t){var o=y(t)?{fn:t}:t;if(x(o)&&y(o.fn)){e&&gt(o,e);var u=Lt(r.ns,n),c=u.name,a=u.ns;return o.ns=a,void q(i[c]||(i[c]=[]),o)}}};$(t)?o(n,t):lt(t,o)},St.prototype.off=function(n,e){var r=this.listeners;if(n){var i=Lt(this.ns,n),o=i.name,u=i.ns,c=Ot(e),a=function(n,e){A(n,function(t,n,e){c(t)&&qt(u,t)&&e.splice(n,1)},t),n.length||delete r[e]};o?r[o]&&a(r[o],o):u&&lt(r,a)}else this.listeners={}},typeof setImmediate===u&&Nt(setImmediate)&&setImmediate;var zt,Kt=typeof MessageChannel===u&&Nt(MessageChannel)?function(t){var n=new MessageChannel;n.port1.onmessage=t,n.port2.postMessage(1)}:setTimeout,jt=function(){this.nextTasks=[]};jt.shared=function(){return zt||(zt=new jt),zt},jt.prototype.append=function(t){q(this.nextTasks,t),this.start()},jt.prototype.prepend=function(t){N(this.nextTasks,t),this.start()},jt.prototype.start=function(){var t=this;1===t.nextTasks.length&&Kt(function(){t.run()})},jt.prototype.clear=function(){this.nextTasks.length=0},jt.prototype.run=function(){var t=this.nextTasks;t.length&&(this.nextTasks=[],A(t,T))};var Mt="$slot_",It="lazy",Dt="model",Ut="event",Bt="binding",Yt="$id",Ft="$vnode",Ht="$loading",Wt="$component",Gt="$leaving";function Jt(t,n,e){var r=n.node,i=n.nativeAttrs,o=e&&e.nativeAttrs;if(i||o){var u=i||p,c=o||p;lt(u,function(n,e){c[e]&&n.value===c[e].value||t.attr(r,e,n.value)}),lt(c,function(n,e){u[e]||t.removeAttr(r,e)})}}function Rt(t,n,e){var r=n.node,i=n.nativeProps,o=e&&e.nativeProps;if(i||o){var u=i||p,c=o||p;lt(u,function(n,e){c[e]&&n.value===c[e].value||t.prop(r,e,n.value)}),lt(c,function(n,e){u[e]||t.removeProp(r,e,n.hint)})}}function Zt(t,n){var e=t.data,r=t.directives,i=n&&n.directives;if(r||i){var o=e[Wt]||t.node,u=n&&t.keypath!==n.keypath,c=r||p,a=i||p;lt(c,function(e,r){var i=e.hooks,c=i.bind,s=i.unbind;a[r]?(e.value!==a[r].value||u)&&(s&&s(o,a[r],n),c(o,e,t)):c(o,e,t)}),lt(a,function(t,e){if(!c[e]){var r=t.hooks.unbind;r&&r(o,t,n)}})}}function _t(t){var n=t.directives;if(n){var e=t.data[Wt]||t.node;lt(n,function(n){var r=n.hooks.unbind;r&&r(e,n,t)})}}function Qt(t,n){var e,r=t.data,i=t.ref,o=t.props,u=t.slots,c=t.context;if(t.isComponent?(e=r[Wt],n&&(o&&e.set(e.checkPropTypes(o)),u&&e.set(u))):e=t.node,i){var a=c.$refs;a&&(a[i]=e)}}function Vt(t,n){return t.tag===n.tag&&t.key===n.key}function Xt(t,n,e){for(var r,i,o;n<=e;)(i=t[n])&&(o=i.key)&&(r||(r={}),r[o]=n),n++;return r||p}function tn(t,n,e,r){r?t.before(n,e,r):t.append(n,e)}function nn(t,e){if(e){var r=(t.parent||t.context).create(e,t,t.node),i=r.$el;return i&&(t.node=i),t.data[Wt]=r,t.data[Ht]=n,Qt(t),Zt(t),r}}var en=0;function rn(){var t={};return t[Yt]=++en,t}function on(e,r){var o=r.tag,u=r.node,c=r.data,a=r.isComponent,s=r.isComment,f=r.isText,p=r.children,v=r.text,d=r.html,l=r.context;if(!u||!c)if(c=rn(),r.data=c,f)r.node=e.createText(v);else if(s)r.node=e.createComment(v);else if(a){var m=t;l.component(o,function(t){h(c[Ht])?c[Ht]&&(c[Ft]&&(r=c[Ft],delete c[Ft]),pn(r,nn(r,t))):(nn(r,t),m=n)}),m&&(r.node=e.createComment(i),c[Ht]=t)}else u=r.node=e.createElement(r.tag),p?un(e,u,p):v?e.append(u,e.createText(v)):d&&e.html(u,d),Jt(e,r),Rt(e,r),Qt(r),Zt(r)}function un(t,n,e,r,i,o){for(var u,c=r||0,a=h(i)?i:e.length-1;c<=a;)on(t,u=e[c]),cn(t,n,u,o),c++}function cn(n,e,r,i){var o=r.node,u=r.data,c=r.context,a=n.parent(o);if(i?n.before(e,o,i.node):n.append(e,o),!a){var s;if(r.isComponent){var f=u[Wt];f&&(s=function(){pn(r,f)})}else r.isStatic||r.isText||r.isComment||(s=function(){pn(r)});s&&c.nextTick(s,t)}}function an(t,n,e,r,i){for(var o,u=r||0,c=h(i)?i:e.length-1;u<=c;)(o=e[u])&&sn(t,n,o),u++}function sn(t,n,e){var i=e.node;if(e.isStatic||e.isText||e.isComment)t.remove(n,i);else{var o,u=function(){fn(t,e),t.remove(n,i)};if(e.isComponent&&!(o=e.data[Wt]))return void u();!function(t,n,e){var i=t.data,o=t.transition;n&&!o&&(o=n.$vnode.transition);if(o){var u=o.leave;if(u)return void u(t.node,i[Gt]=function(){i[Gt]&&(e(),i[Gt]=r)})}e()}(e,o,u)}}function fn(t,e){var r=e.data,i=e.children;if(e.isComponent){var o=r[Wt];o?e.context===e.parent&&(_t(e),o.destroy()):r[Ht]=n}else _t(e),i&&A(i,function(n){fn(t,n)})}function pn(t,n){var e=t.data,r=t.transition;if(n&&!r&&(r=n.$vnode.transition),T(e[Gt]),r){var i=r.enter;if(i)return void i(t.node,f)}}function vn(t,n,e){if(n!==e){var i=e.node,o=e.data;if(!Vt(n,e)){var u=t.parent(i);return on(t,n),void(u&&(cn(t,u,n,e),sn(t,u,e)))}if(n.node=i,n.data=o,e.isComponent&&o[Ht])o[Ft]=n;else if(!n.isStatic||!e.isStatic){Jt(t,n,e),Rt(t,n,e),Qt(n,e),Zt(n,e);var c=n.text,a=n.html,s=n.children,f=e.text,p=e.html,v=e.children;$(c)?c!==f&&t.text(i,c):$(a)?a!==p&&t.html(i,a):s&&v?s!==v&&function(t,n,e,i){for(var o,u,c=0,a=e.length-1,s=e[c],f=e[a],p=0,v=i.length-1,d=i[p],l=i[v];p<=v&&c<=a;)s?f?d?l?Vt(s,d)?(vn(t,s,d),s=e[++c],d=i[++p]):Vt(f,l)?(vn(t,f,l),f=e[--a],l=i[--v]):Vt(f,d)?(vn(t,f,d),tn(t,n,d.node,t.next(l.node)),f=e[--a],d=i[++p]):Vt(s,l)?(vn(t,s,l),tn(t,n,l.node,d.node),s=e[++c],l=i[--v]):(o||(o=Xt(i,p,v)),h(u=s.key?o[s.key]:r)?(vn(t,s,i[u]),i[u]=r):on(t,s),cn(t,n,s,d),s=e[++c]):l=i[--v]:d=i[++p]:f=e[--a]:s=e[++c];p>v?un(t,n,e,c,a,e[a+1]):c>a&&an(t,n,i,p,v)}(t,i,s,v):s?(($(f)||$(p))&&t.text(i,d),un(t,i,s)):v?an(t,i,v):($(f)||$(p))&&t.text(i,d)}}}function dn(t,n){return void 0===n&&(n=0),w(t)?+t:n}var hn={"+":{exec:function(t){return+t}},"-":{exec:function(t){return-t}},"~":{exec:function(t){return~t}},"!":{exec:function(t){return!t}},"!!":{exec:function(t){return!!t}}},ln={"*":{prec:14,exec:function(t,n){return t*n}},"/":{prec:14,exec:function(t,n){return t/n}},"%":{prec:14,exec:function(t,n){return t%n}},"+":{prec:13,exec:function(t,n){return t+n}},"-":{prec:13,exec:function(t,n){return t-n}},"<<":{prec:12,exec:function(t,n){return t<<n}},">>":{prec:12,exec:function(t,n){return t>>n}},">>>":{prec:12,exec:function(t,n){return t>>>n}},"<":{prec:11,exec:function(t,n){return t<n}},"<=":{prec:11,exec:function(t,n){return t<=n}},">":{prec:11,exec:function(t,n){return t>n}},">=":{prec:11,exec:function(t,n){return t>=n}},"==":{prec:10,exec:function(t,n){return t==n}},"!=":{prec:10,exec:function(t,n){return t!=n}},"===":{prec:10,exec:function(t,n){return t===n}},"!==":{prec:10,exec:function(t,n){return t!==n}},"&":{prec:9,exec:function(t,n){return t&n}},"^":{prec:8,exec:function(t,n){return t^n}},"|":{prec:7,exec:function(t,n){return t|n}},"&&":{prec:6,exec:function(t,n){return t&&n}},"||":{prec:5,exec:function(t,n){return t||n}},"->":{prec:0,exec:function(t,n){return t>n?function(e){for(var r=t,i=0;r>n;r--)e(r,i++)}:function(e){for(var r=t,i=0;r<n;r++)e(r,i++)}}},"=>":{prec:0,exec:function(t,n){return t>n?function(e){for(var r=t,i=0;r>=n;r--)e(r,i++)}:function(e){for(var r=t,i=0;r<=n;r++)e(r,i++)}}}},mn=2,yn=3,gn=4,xn=13;function $n(t){return t===r}bn=d,JSON.stringify(bn),P(["c","d","e","f","g","a","h","i","b"],",");var bn,kn={};function wn(t,n,e){return kn[t.type](t,n,e)}function Cn(t,n,e,r){(t[n]||(t[n]={}))[e]=r}function Tn(e,i,u,a,s,f){var v,h=d,l={$keypath:h},m=[h,l],$=[],b={},k=function(t,r,o,u,c,a){var s=ct(t[r],o),f=t[r+1];if(u.absoluteKeypath=s,$n(a)&&(a=s),v&&mt(v,o))return v[o];if(mt(f,o))return f[o];if(mt(f,"$item")){if(f=f.$item,o===d)return f;if(f&&mt(f,o))return f[o]}var p=e.get(s,k,c);if(p===k){if(u.lookup!==n&&r>1)return k(t,r-=2,o,u,c,a);if(!(p=bt(i,o)))return u.absoluteKeypath=a,void At("data ["+u.raw+"] is not found.");p=p.value}return p},w=function(t,n,r){var i=r||m,o=i.length;return wn(t,function(t,e){return k(i,o-2*((e.offset||0)+1),t,e,n)},e)},C=function(n,e){var r=e.expr,i=w(r,t),o=ct(Bt,e.name),u=a[Bt];return u&&Cn(n,"directives",o,{ns:Bt,name:e.name,key:o,hooks:u,binding:r.absoluteKeypath,hint:e.hint}),i},P=function(t){return function(n,r){n.type!==t&&(n=new E(t,n)),e.fire(n,r)}},S=function(t,i,o){return function(u,c){var a,s=e[t];u instanceof E?(i?(v={$event:u,$data:c},a=T(s,e,i(o)),v=r):a=T(s,e,c?[u,c]:u),a===n&&u.prevent().stop()):T(s,e,i?i(o):r)}},L=function(t,n){return function(){return t(n)}},O=function(t,n){var e=w(t);return n?nt(e):e},N=function(t,n){return w(t,r,n)},z=function(t,n){K(O(t,n))},K=function(n){var r=I($);if(r){var i=I(r);i&&i.isText?i.text+=n:q(r,{isText:t,text:n,context:e,keypath:h})}},j=function(n,r,i,u){if(r&&(A(r,function(e){var r=e.name,i=e.value;switch(e.type){case mn:e.binding&&(i=C(n,e)),n.isComponent?Cn(n,"props",r,i):Cn(n,"nativeAttrs",r,{name:r,value:i});break;case gn:Cn(n,"nativeProps",r,{name:r,value:e.binding?C(n,e):i,hint:e.hint});break;case yn:!function(n,e){var r,i,u,c,f,p=e.ns,v=e.name,d=e.value,h=ct(p,v);switch(p){case Ut:i=a[Ut],c=e.event?P(e.event):S(e.method,e.args,m);break;case o:return void((f=s[d])&&(n.transition=f));case Dt:i=a[Dt],n.model=w(e.expr,t),r=e.expr.absoluteKeypath;break;case It:return void Cn(n,"lazy",v,d);default:i=a[v],e.method?c=S(e.method,e.args,m):e.getter&&(u=L(e.getter,m))}i&&Cn(n,"directives",h,{ns:p,name:v,key:h,value:d,binding:r,hooks:i,getter:u,handler:c})}(n,e);break;case xn:!function(t,n){var e=n.expr,r=w(e,n.binding);if(x(r)&&!g(r)){lt(r,function(n,e){Cn(t,"props",e,n)});var i=e[c];if(i){var o=ct(Bt,i),u=a[Bt];u&&Cn(t,"directives",o,{ns:Bt,name:d,key:o,hooks:u,binding:ct(i,"*")})}}else At("["+e.raw+"] 不是对象，延展个毛啊")}(n,e)}}),n.directives&&!n.lazy&&(n.lazy=p)),i)$.push(n.children=[]),i(),D($);else if(u){var f={};lt(u,function(t,n){$.push([]),t(),f[n]=D($)}),n.slots=f}n.context=e,n.keypath=h;var v=I($);return v&&q(v,n),n},M=function(t,n){var r=I($),i=e.get(t);i?A(i,function(t){q(r,t),t.isComponent&&(t.parent=e)}):n&&n()},U=function(t,n){b[t]=n},B=function(t){if(b[t])b[t]();else{var n=u[t];n&&n(O,N,z,K,j,M,U,B,Y)}},Y=function(t,n,e){var i,o;y(n)?(o=n,i=r):(o=e,i=n);var u=w(t),a=t[c],s=a||ct(h,t.raw),f=function(t,n){var e=h,r=l,u=m;h=ct(s,n),l={},q(m=xt(m),h),q(m,l),l.$keypath=h,a||(l.$item=t),i&&(l[i]=n),o(t,n),h=e,l=r,m=u};g(u)?A(u,f):x(u)?lt(u,f):y(u)&&u(f)};return f(O,N,z,K,j,M,U,B,Y)}kn[1]=function(t){return t.value},kn[2]=function(t,n){return n(t.name,t)},kn[3]=function(t,n,e){var i,o,u=t.props,c=t.staticKeypath;if($n(c)){2===(i=u[0]).type?c=i.name:o=wn(i,n,e);for(var a=1,s=u.length;a<s;a++)c=ct(c,wn(u[a],n,e))}return h(o)?(o=bt(o,c))?o.value:r:n?n(c,t):void 0},kn[4]=function(t,n,e){return hn[t.operator].exec(wn(t.arg,n,e))},kn[5]=function(t,n,e){return ln[t.operator].exec(wn(t.left,n,e),wn(t.right,n,e))},kn[6]=function(t,n,e){return wn(t.test,n,e)?wn(t.yes,n,e):wn(t.no,n,e)},kn[7]=function(t,n,e){return t.elements.map(function(t){return wn(t,n,e)})},kn[8]=function(t,n,e){var r={};return A(t.keys,function(i,o){r[i]=wn(t.values[o],n,e)}),r},kn[9]=function(t,n,e){return T(wn(t.callee,n,e),e,t.args.map(function(t){return wn(t,n,e)}))};var En={sync:t},An={sync:n},Pn=function(n,e,r,i,o,u,c){var a=this;a.keypath=n,a.sync=e,a.cache=r,a.deps=[],a.context=o.context,a.observer=o,a.getter=u,a.setter=c,a.unique={},a.callback=function(e,r,i){var u=a.value,c=a.get(t);c!==u&&o.diff(n,c,u)},(a.fixed=!B(i))&&(A(i,function(t){a.add(t)}),a.bind())};function Sn(t,e){var r;return A(t,function(t){var i=it(e,t);if(i>=0)return r={name:t,prop:J(e,i)},n}),r}function Ln(t,n){if(t==e||n===d)return t;var r=bt(t,n);return r?r.value:void 0}function On(n,e,i,o,u){var c=function(t,e,r){if(e!==r){var i=ct(n,t);A(o,function(t){h(st(i,t))&&u(t,i,e,r)}),On(i,e,r,o,u)}};(function(n,e,i){var o=$(n),u=$(e);if(o||u)return i("length",o?n.length:r,u?e.length:r),t})(e,i,c)||function(n,e,i){var o=g(n),u=g(e);if(o||u){var c=o?n.length:r,a=u?e.length:r;i("length",c,a);for(var s=0,f=Math.max(c||0,a||0);s<f;s++)i(s,n?n[s]:r,e?e[s]:r);return t}}(e,i,c)||function(t,n,e){var r=x(t),i=x(n);(r||i)&&(t=r?t:p,n=i?n:p,r&&lt(t,function(t,r){t!==n[r]&&e(r,t,n[r])}),i&&lt(n,function(n,r){n!==t[r]&&e(r,t[r],n)}))}(e,i,c)}function qn(t,n,e,r,i,o){var u;lt(r,function(r,c){if(at(c))h(st(t,c))?o(c,t,n,e):i&&(u?q(u,c):u=[c]);else{var a=it(c,t);if(a>=0){var s=J(c,a),f=Ln(n,s),p=Ln(e,s);f!==p&&o(c,c,f,p)}}}),u&&On(t,n,e,u,o)}function Nn(t,n){if(t.count&&n)return t.count--,n[0]!==n[1]}function zn(n){return n===t?{immediate:t}:x(n)?xt(n):{}}Pn.build=function(n,e,r){var i,o,u=t,c=t,a=v;if(y(r)?i=r:x(r)&&(k(r.cache)&&(u=r.cache),k(r.sync)&&(c=r.sync),g(r.deps)&&(a=r.deps),y(r.get)&&(i=r.get),y(r.set)&&(o=r.set)),i)return new Pn(n,c,u,a,e,i,o)},Pn.prototype.get=function(t){var n=this.getter,e=this.context;if(this.cache){if(t||!mt(this,"value"))if(this.fixed)this.value=T(n,e);else{this.unbind();var r=Pn.current;Pn.current=this,this.value=T(n,e),this.bind(),Pn.current=r}}else this.value=T(n,e);return this.value},Pn.prototype.set=function(t){var n=this.setter,e=this.context;n&&n.call(e,t)},Pn.prototype.add=function(n){this.unique[n]=t},Pn.prototype.bind=function(){var t=this.unique,n=this.deps,e=this.observer,r=this.callback,i=this.sync;lt(t,function(t,o){q(n,o),e.watch(o,r,i?En:An)}),this.unique={}},Pn.prototype.unbind=function(){var n=this.deps,e=this.observer,r=this.callback;A(n,function(t){e.unwatch(t,r)},t),n.length=0};var Kn=function(t,n){this.data=t||{},this.context=n||this,this.nextTask=new jt,this.syncEmitter=new St,this.asyncEmitter=new St,this.asyncChanges={}};Kn.prototype.get=function(t,n,e){var r,i,o=Pn.current,u=this.data,c=this.computed,a=this.reversedComputedKeys;if(t===d)return u;if(o&&!e&&o.add(t),c){if(i=c[t])return i.get();if(a){var s=Sn(a,t);s&&s.prop&&(r=bt(c[s.name].get(),s.prop))}}return r||(r=bt(u,t)),r?r.value:n},Kn.prototype.set=function(t,n){var e=this,r=e.data,i=e.computed,o=e.reversedComputedKeys,u=function(t,n){var u=e.get(n);if(t!==u){var c;if(i&&((c=i[n])&&c.set(t),o)){var a=Sn(o,n);if(a&&a.prop&&(c=i[a.name])){var s=c.get();(x(s)||g(s))&&kt(s,a.prop,t)}}c||kt(r,n,t),e.diff(n,t,u)}};$(t)?u(n,t):x(t)&&lt(t,u)},Kn.prototype.diff=function(n,e,i){var o=this,u=o.syncEmitter,c=o.asyncEmitter,a=o.asyncChanges,s=36!==V(n);qn(n,e,i,u.listeners,s,function(t,n,e,r){u.fire(t,[e,r,n])}),qn(n,e,i,c.listeners,s,function(n,e,i,u){A(c.listeners[n],function(t){t.count++});var s=(a[e]||(a[e]={value:u,list:[]})).list;M(s,n)||q(s,n),o.pending||(o.pending=t,o.nextTask.append(function(){o.pending&&(o.pending=r,o.diffAsync())}))})},Kn.prototype.diffAsync=function(){var t=this,n=t.asyncEmitter,e=t.asyncChanges;t.asyncChanges={},lt(e,function(e,r){var i=[t.get(r),e.value,r];A(e.list,function(t){n.fire(t,i,Nn)})})},Kn.prototype.addComputed=function(n,e){var r=Pn.build(n,this,e);if(r)return this.computed||(this.computed={}),this.computed[n]=r,this.reversedComputedKeys=ht(this.computed,t),r},Kn.prototype.removeComputed=function(n){var e=this.computed;e&&mt(e,n)&&(delete e[n],this.reversedComputedKeys=ht(e,t))},Kn.prototype.watch=function(t,n,e){var i=this,o=i.context,u=i.syncEmitter,c=i.asyncEmitter,a=function(t,n,e){x(n)&&(k(n.immediate)&&(e.immediate=n.immediate),k(n.sync)&&(e.sync=n.sync),k(n.once)&&(e.once=n.once),y(n.watcher)&&(n=n.watcher));var a=e.sync?u:c;if(y(n)){var s={fn:n,ctx:o,count:0};e.once&&(s.max=1),a.on(t,s)}e.immediate&&T(n,o,[i.get(t),r,t])};$(t)?(y(n)||x(n))&&a(t,n,zn(e)):lt(t,function(t,n){a(n,t,{})})},Kn.prototype.unwatch=function(t,n){this.syncEmitter.off(t,n),this.asyncEmitter.off(t,n)},Kn.prototype.toggle=function(t){var n=!this.get(t);return this.set(t,n),n},Kn.prototype.increase=function(t,n,e){var r=dn(this.get(t),0)+(n||1);if(!b(e)||r<=e)return this.set(t,r),r},Kn.prototype.decrease=function(t,n,e){var r=dn(this.get(t),0)-(n||1);if(!b(e)||r>=e)return this.set(t,r),r},Kn.prototype.insert=function(e,r,i){var o=this.get(e),u=(o=g(o)?xt(o):[]).length;if(i===t||i===u)o.push(r);else if(i===n||0===i)o.unshift(r);else{if(!(i>0&&i<u))return;o.splice(i,0,r)}return this.set(e,o),t},Kn.prototype.append=function(n,e){return this.insert(n,e,t)},Kn.prototype.prepend=function(t,e){return this.insert(t,e,n)},Kn.prototype.removeAt=function(n,e){var r=this.get(n);if(g(r)&&e>=0&&e<r.length)return(r=xt(r)).splice(e,1),this.set(n,r),t},Kn.prototype.remove=function(n,e){var r=this.get(n);if(g(r)&&U(r=xt(r),e))return this.set(n,r),t},Kn.prototype.copy=function(t,n){return xt(t,n)},Kn.prototype.destroy=function(){this.syncEmitter.off(),this.asyncEmitter.off(),this.nextTask.clear(),yt(this)};var jn=s,Mn="textContent",In=f,Dn=f,Un=f,Bn=f,Yn=f;jn&&($n(jn.body[Mn])&&(Mn="innerText"),jn.addEventListener?(In=function(t,e,r){t.addEventListener(e,r,n)},Dn=function(t,e,r){t.removeEventListener(e,r,n)}):(In=function(t,n,e){t.attachEvent("on"+n,e)},Dn=function(t,n,e){t.detachEvent("on"+n,e)}),jn.body.classList?(Un=function(t,n){t.classList.add(n)},Bn=function(t,n){t.classList.remove(n)}):(Un=function(t,n){var e=t.className.split(Fn);M(e,n)||(q(e,n),t.className=P(e,Fn))},Bn=function(t,n){var e=t.className.split(Fn);U(e,n)&&(t.className=P(e,Fn))}),Yn=jn.querySelector?function(t){var n=jn.querySelector(t);if(n)return n}:function(t){35===V(t,0)&&(t=J(t,1));var n=jn.getElementById(t);if(n)return n});var Fn=" ",Hn={svg:"http://www.w3.org/2000/svg"},Wn={},Gn={createElement:function(t,n){return n?jn.createElementNS(Hn.svg,t):jn.createElement(t)},createText:function(t){return jn.createTextNode(t)},createComment:function(t){return jn.createComment(t)},createEvent:function(t,n){return t},prop:function(t,e,r){if(!h(r))return bt(t,e);kt(t,e,r,n)},removeProp:function(t,e,r){kt(t,e,3===r?n:d,n)},attr:function(t,n,r){if(h(r))t.setAttribute(n,r);else{var i=t.getAttribute(n);if(i!=e)return i}},removeAttr:function(t,n){t.removeAttribute(n)},before:function(t,n,e){t.insertBefore(n,e)},append:function(t,n){t.appendChild(n)},replace:function(t,n,e){t.replaceChild(n,e)},remove:function(t,n){t.removeChild(n)},parent:function(t){var n=t.parentNode;if(n)return n},next:function(t){var n=t.nextSibling;if(n)return n},find:Yn,tag:function(t){if(1===t.nodeType)return t.tagName.toLowerCase()},text:function(t,n){if(!h(n))return t[Mn];t[Mn]=n},html:function(t,n){if(!h(n))return t.innerHTML;t.innerHTML=n},addClass:Un,removeClass:Bn,on:function(t,n,e,r){var i=t.$emitter||(t.$emitter=new St),o=i.nativeListeners||(i.nativeListeners={});if(!o[n]){var u=Wn[n],c=function(n){i.fire(n instanceof E?n:new E(n.type,Gn.createEvent(n,t)))};o[n]=c,u?u.on(t,c):In(t,n,c)}i.on(n,{fn:e,ctx:r})},off:function(t,n,e){var i=t.$emitter,o=i.listeners,u=i.nativeListeners;if(i.off(n,e),u&&!i.has(n)){var c=Wn[n],a=u[n];c?c.off(t,a):Dn(t,n,a),delete u[n]}pt(o)&&(t.$emitter=r)},specialEvents:Wn};function Jn(t,n,e){var i;return function(){if(!i){var o=z(arguments);e&&T(t,r,o),i=setTimeout(function(){i=0,e||T(t,r,o)},n)}}}Wn.input={on:function(e,r){var i=n;Gn.on(e,"compositionstart",r.compositionstart=function(){i=t}),Gn.on(e,"compositionend",r.compositionend=function(t){i=n,t.type="input",r(t)}),In(e,"input",r.input=function(t){i||r(t)})},off:function(t,n){Gn.off(t,"compositionstart",n.compositionstart),Gn.off(t,"compositionend",n.compositionend),Dn(t,"input",n.input),n.compositionstart=n.compositionend=n.input=r}};var Rn=K(["click","tap"]),Zn={bind:function(n,e,r){var i=e.name,o=e.handler,u=r.lazy[i]||r.lazy[d];if(o)if(u&&(u===t?i="change":o=Jn(o,u,Rn[i])),r.isComponent){var c=n;c.on(i,o),r.data[e.key]=function(){c.off(i,o)}}else{var a=n;Gn.on(a,i,o),r.data[e.key]=function(){Gn.off(a,i,o)}}},unbind:function(t,n,e){T(e.data[n.key])}};function _n(t){return h(t.value)?t.value:t.text}var Qn={sync:t},Vn={set:function(t,n,e){t.value=nt(e.get(n))},sync:function(t,n,e){e.set(n,t.value)},name:"value"},Xn={set:function(t,n,e){t.set(t.$model,e.get(n))},sync:function(t,n,e){e.set(n,t.get(t.$model))},name:"value"},te={radio:{set:function(t,n,e){t.checked=t.value===nt(e.get(n))},sync:function(t,n,e){t.checked&&e.set(n,t.value)},name:"checked"},checkbox:{set:function(t,e,r){var i=r.get(e);t.checked=g(i)?M(i,t.value,n):k(i)?i:!!i},sync:function(t,e,r){var i=r.get(e);g(i)?t.checked?r.append(e,t.value):r.removeAt(e,j(i,t.value,n)):r.set(e,t.checked)},name:"checked"},select:{set:function(t,e,r){var i=r.get(e);A(z(t.options),t.multiple?function(t){t.selected=M(i,_n(t),n)}:function(e,r){if(_n(e)==i)return t.selectedIndex=r,n})},sync:function(t,n,e){var r=z(t.options);if(t.multiple){var i=[];A(r,function(t){t.selected&&q(i,_n(t))}),B(i)&&B(e.get(n))||e.set(n,i)}else e.set(n,_n(r[t.selectedIndex]))},name:"value"}},ne={bind:function(e,r,i){var o,u,c,a,s=r.binding,f=i.context,p=i.nativeProps,v=i.lazy[Dt]||i.lazy[d],h=function(){m||c.set(o||u,s,f)},l=function(){m=t,c.sync(o||u,s,f),m=n},m=n;v&&v!==t&&(l=Jn(l,v)),i.isComponent?(c=Xn,(o=e).watch(o.$model,l)):(c=te[(u=e).type]||te[Gn.tag(u)],a="change",c||(c=Vn,v!==t&&(a="input")),p&&mt(p,c.name)||h(),Gn.on(u,a,l)),f.watch(s,h,Qn),i.data[r.key]=function(){i.isComponent?o.unwatch(o.$model,l):Gn.off(u,a,l),f.unwatch(s,h)}},unbind:function(t,n,e){T(e.data[n.key])}},ee={bind:function(t,n,e){var r=n.binding;if(r){var i=at(r),o=function(o,u,c){var a=i?st(c,r):n.name;e.isComponent?t.set(a,o):h(n.hint)?Gn.prop(t,a,o):Gn.attr(t,a,o)};e.context.watch(r,o),e.data[n.key]=function(){e.context.unwatch(r,o)}}},unbind:function(t,n,e){T(e.data[n.key])}};var re={},ie={},oe={},ue={},ce={},ae=/^[#.][-\w+]+$/,se=function e(u){var c=this;x(u)||(u=p),c.$options=u,T(u.beforeCreate,c,u);var a=u.el,s=u.data,f=u.props,v=u.model,h=u.parent,l=u.replace,m=u.computed,g=u.template,b=u.transitions,k=u.components,w=u.directives,C=u.partials,E=u.filters,A=u.slots,P=u.events,S=u.methods,L=u.watchers,O=u.extensions;O&&gt(c,O),v&&(c.$model=v);var q=f?c.checkPropTypes(f):{};A&&gt(q,A),f&&x(s)&&At('"data" option expected to be a function.');var N=c.$observer=new Kn(q,c);m&&lt(m,function(t,n){N.addComputed(n,t)});var z=y(s)?T(s,c,u):s;x(z)&&lt(z,function(t,n){mt(q,n)?At('"'+n+'" is already defined as a prop. Use prop default value instead.'):q[n]=t}),c.$emitter=new St(t);var K,j=n;if($(g)?ae.test(g)&&(K=Gn.find(g))&&(g=Gn.html(K),K=r):g=r,a)if($(a)){var M=a;ae.test(M)&&(K=Gn.find(M))}else K=a;K&&!l&&(j=t,Gn.append(K,K=Gn.createComment(d))),h&&(c.$parent=h),fe(c,o,b),fe(c,i,k),fe(c,"directive",w),fe(c,"partial",C),fe(c,"filter",E),S&&lt(S,function(t,n){c[n]=t}),T(u.afterCreate,c),g&&(c.$template=e.compile(g),N.addComputed("$template",{sync:n,get:function(){return c.render()}}),(L=L?xt(L):{}).$template=function(t){c.update(t,c.$vnode)},K||(j=t,K=Gn.createComment(d)),c.update(c.get("$template"),function(t,n,e,r,i){return{tag:t.tag(n),data:rn(),isComment:e,node:n,context:r,keypath:i}}(Gn,K,j,c,d))),P&&c.on(P),L&&N.nextTask.prepend(function(){c.$observer&&c.watch(L)})};function fe(t,n,e){y(e)?t[n](T(e,t)):x(e)&&t[n](e)}function pe(n,e,i){if(n&&mt(n,e)){var o=n[e];if(y(o)){var u=o.$queue;u?q(u,i):(u=o.$queue=[i],o(function(t){o.$queue=r,n[e]=t,A(u,function(n){n(t)})}))}else i(o);return t}}function ve(t,n,e){return t&&t[n]?t[n]:e?e(n):void 0}function de(t,n,e,r){$(n)?t[n]=r?r(e):e:lt(n,function(n,e){t[e]=r?r(n):n})}function he(t,n){return t&&n?gt({},n,t):t||n}se.use=function(t){t.install(se)},se.nextTick=function(t){jt.shared().append(t)},se.compile=function(t,n){return new Function("return "+t)()},se.directive=function(t,n){if($(t)&&!n)return ve(re,t);de(re,t,n)},se.transition=function(t,n){if($(t)&&!n)return ve(ie,t);de(ie,t,n)},se.component=function(t,n){if($(t)){if(!n)return ve(oe,t);if(y(n))return void pe(oe,t,n)}de(oe,t,n)},se.partial=function(t,n){if($(t)&&!n)return ve(ue,t);de(ue,t,n,se.compile)},se.filter=function(t,n){if($(t)&&!n)return ve(ce,t);de(ce,t,n)},se.checkPropTypes=function(e,r){var i=xt(e);return lt(r,function(r,o){var c,a=r.type,s=r.value,f=r.required,p=e[o];(y(f)&&(f=f(e)),h(p))?a?(X(a)?B(a)||A(a,function(e){if(m(p,e))return c=t,n}):c=m(p,a),c!==t&&At('The prop "'+o+'" type is not matched.')):At('The prop "'+o+'" in propTypes has no type.'):f?At('The prop "'+o+'" is marked as required, but its value is not found.'):h(s)&&(i[o]=a===u?s:y(s)?s(e):s)}),i},se.prototype.addComputed=function(t,n){return this.$observer.addComputed(t,n)},se.prototype.removeComputed=function(t){this.$observer.removeComputed(t)},se.prototype.get=function(t,n,e){return this.$observer.get(t,n,e)},se.prototype.set=function(t,n){var e=this.$observer;e&&e.set(t,n)},se.prototype.on=function(t,n){return this.$emitter.on(t,n,{ctx:this}),this},se.prototype.once=function(t,n){return this.$emitter.on(t,n,{ctx:this,max:1}),this},se.prototype.off=function(t,n){return this.$emitter.off(t,n),this},se.prototype.fire=function(n,e,r){var i,o,u=n instanceof E?n:new E(n);return u.target||(u.target=this),x(e)?i=e:e===t&&(r=t),(o=this.$emitter.fire(u,i))&&(r?this.$children&&A(this.$children,function(n){return o=n.fire(u,e,t)}):this.$parent&&(o=this.$parent.fire(u,e))),o},se.prototype.watch=function(t,n,e){return this.$observer.watch(t,n,e),this},se.prototype.watchOnce=function(n,e,r){var i=zn(r);return i.once=t,this.$observer.watch(n,e,i),this},se.prototype.unwatch=function(t,n){return this.$observer.unwatch(t,n),this},se.prototype.directive=function(t,n){var e=this.$directives;if($(t)&&!n)return ve(e,t,se.directive);de(e||(this.$directives={}),t,n)},se.prototype.transition=function(t,n){var e=this.$transitions;if($(t)&&!n)return ve(e,t,se.transition);de(e||(this.$transitions={}),t,n)},se.prototype.component=function(t,n){var e=this.$components;if($(t)){if(!n)return ve(e,t,se.component);if(y(n))return void(pe(e,t,n)||pe(oe,t,n))}de(e||(this.$components={}),t,n)},se.prototype.partial=function(t,n){var e=this.$partials;if($(t)&&!n)return ve(e,t,se.partial);de(e||(this.$partials={}),t,n,se.compile)},se.prototype.filter=function(t,n){var e=this.$filters;if($(t)&&!n)return ve(e,t,se.filter);de(e||(this.$filters={}),t,n)},se.prototype.forceUpdate=function(){var n=this.$vnode,e=this.$observer;if(n){var r=e.computed.$template,i=r.get();e.nextTask.run(),i===r.get()&&this.update(r.get(t),n)}},se.prototype.render=function(){return Tn(this,he(this.$filters,ce),he(this.$partials,ue),he(this.$directives,re),he(this.$transitions,ie),this.$template)},se.prototype.update=function(t,n){var e,r=this,i=r.$vnode,o=r.$options;r.$refs={},i?(T(o.beforeUpdate,r),vn(Gn,t,n),e=o.afterUpdate):(T(o.beforeMount,r),vn(Gn,t,n),r.$el=t.node,e=o.afterMount),r.$vnode=t,e&&r.nextTick(function(){r.$vnode&&T(e,r)})},se.prototype.checkPropTypes=function(t){var n=this.$options.propTypes;return n?se.checkPropTypes(t,n):t},se.prototype.create=function(n,e,r){if((n=xt(n)).parent=this,e){r&&(n.el=r,n.replace=t);var i=e.slots,o=e.props,u=e.model;if(i&&(n.slots=i),h(u)){o||(o={});var c=n.model||"value";mt(o,c)||(o[c]=u),n.model=c}n.props=o}var a=new se(n);return q(this.$children||(this.$children=[]),a),a},se.prototype.destroy=function(){var t=this.$options,n=this.$emitter,e=this.$observer;T(t.beforeDestroy,this);var r=this.$vnode,i=this.$parent;i&&i.$children&&U(i.$children,this),r&&function(t,n,e){if(e){var r=t.parent(n.node);r&&sn(t,r,n)}else fn(t,n)}(Gn,r,!i),n.off(),e.destroy(),yt(this),T(t.afterDestroy,this)},se.prototype.nextTick=function(t,n){var e=this.$observer.nextTask;n?e.prepend(t):e.append(t)},se.prototype.toggle=function(t){return this.$observer.toggle(t)},se.prototype.increase=function(t,n,e){return this.$observer.increase(t,n,e)},se.prototype.decrease=function(t,n,e){return this.$observer.decrease(t,n,e)},se.prototype.insert=function(t,n,e){return this.$observer.insert(t,n,e)},se.prototype.append=function(t,n){return this.$observer.append(t,n)},se.prototype.prepend=function(t,n){return this.$observer.prepend(t,n)},se.prototype.removeAt=function(t,n){return this.$observer.removeAt(t,n)},se.prototype.remove=function(t,n){return this.$observer.remove(t,n)},se.prototype.copy=function(t,n){return this.$observer.copy(t,n)},se.version="1.0.0-alpha",se.is=C,se.array=Y,se.object=wt,se.string=tt,se.logger=Pt,se.Event=E,se.Emitter=St,se.dom=Gn,se.directive({event:Zn,model:ne,binding:ee}),se.filter({hasSlot:function(t){return h(this.get(Mt+t))}});export default se;
