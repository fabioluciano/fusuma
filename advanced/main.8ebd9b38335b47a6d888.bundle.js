(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[179],{1405:(e,t,n)=>{"use strict";n.d(t,{X:()=>j});var a=n(3058),r=n(162),s=n.n(r),o=n(2452),i=n(3793),m=n(2813),l=n(4894),c=n(4457),u=n(3886);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=[o.Z,i.Z,m.Z];l.Z.use(h);var y=function(e){var t=e.slides,n=e.onChangeSlideIndex;return a.createElement(c.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,keyboard:{enabled:!0},hashNavigation:{watchState:!0},pagination:f({},{}),onSlideChange:function(e){var t=e.realIndex;return n(t)}},t.map((function(e,t){var n=e.slide,r=e.fusumaProps;return a.createElement(u.o,{key:t,className:s()("slide-box","slide-background",r.classes,r.sectionTitle?"section-title":void 0),"data-hash":"slide-".concat(t+1)},a.createElement("div",{className:"slide-internal-box slide-background"},a.createElement(n,null)))})))};function k(e,t,n,a,r,s,o){try{var i=e[s](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){k(s,a,r,o,i,"next",e)}function i(e){k(s,a,r,o,i,"throw",e)}o(void 0)}))}}function v(){return(v=N(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(9).then(n.bind(n,8009));case 2:return e.next=4,n.e(226).then(n.t.bind(n,1969,23));case 4:t=e.sent,a=t.createContext,r=t.runInNewContext,Array.from(document.querySelectorAll(".executable-code-button")).forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.nextSibling;"none"===t.style.display&&(t.style.display="block");var n=a({console:{log:function(){for(var e=document.createElement("p"),n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.innerText="- ".concat(a.join(" ")),t.appendChild(e)}}});r(e.target.dataset.value,n)}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(5851);function g(e,t,n,a,r,s,o){try{var i=e[s](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function S(){var e=w((0,a.useState)(null),2),t=e[0],r=e[1];return(0,b.Q)().get("ssr")||(0,a.useEffect)((function(){var e;(e=regeneratorRuntime.mark((function e(){var t,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(726),n.e(877)]).then(n.bind(n,3518));case 2:t=e.sent,a=t.Mermaid,(s=new a).init(),r(s);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){g(s,a,r,o,i,"next",e)}function i(e){g(s,a,r,o,i,"throw",e)}o(void 0)}))})()}),[]),[t]}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}(0,b.Q)().get("ssr")||n.e(988).then(n.bind(n,6244));var j=(0,a.memo)((function(e){var t=e.slides,n=e.onChangeSlideIndex,r=(e.hash,A(S(),1)[0]);return(0,a.useEffect)((function(){t.some((function(e){return!!e.fusumaProps.hasExecutableCode}))&&function(){v.apply(this,arguments)}(),null==r||r.reload()}),[]),a.createElement(y,{slides:t,onChangeSlideIndex:n})}),(function(e,t){return e.hash===t.hash}))},1196:(e,t,n)=>{"use strict";var a=n(3058),r=n(7848);function s(e){return{id:(t=e).id,slides:t.keys().sort().map((function(e){return t(e)}))};var t}var o=n(2242);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(){var e=i((0,a.useState)(function(){var e=new URL(window.location.href).hash.match(/^#slide=(.+?)$/);return null!==e?e[1]-1:0}()),2),t=e[0],n=e[1];return(0,a.useEffect)((function(){n(t)}),[n]),[t,n]}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(){var e=c((0,a.useState)(location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"),2),t=e[0],n=e[1];return(0,a.useEffect)((function(){n(t)}),[n]),[t,n]}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e){var t=e.originalSlides,n=e.hash;e.currentIndex;return(0,a.useMemo)((function(){return e=[],n=[],r={},t.forEach((function(t){var a=t.slides,r=t.fusumaProps;e.push.apply(e,f(a)),n.push.apply(n,f(r))})),n.reduce((function(e,t,n){var a=t.sectionTitle;return a&&e.push({title:a,index:n+1}),e}),r.contentsList=[]),r.slides=e.map((function(e,t){var s,o,i=n[t];return{slide:i.contents?(s={list:r.contentsList},o=s.list,function(){return a.createElement("div",{className:"toc"},a.createElement("ol",null,o.map((function(e){var t=e.index,n=e.title;return a.createElement("li",{key:n},a.createElement("a",{href:"#slide-".concat(t),title:n},a.createElement("span",{className:"chapter"},n)))}))))}):e,fusumaProps:i}})),r;var e,n,r}),[n])}var y=n(1405);function k(e,t,n,a,r,s,o){try{var i=e[s](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(e){var t=N((0,a.useState)(null),2),r=t[0],s=t[1];return(0,a.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var a,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=4;break}s(y.X),t.next=21;break;case 4:if("view"!==e){t.next=12;break}return t.next=7,n.e(291).then(n.bind(n,291));case 7:a=t.sent,r=a.default,s(r),t.next=21;break;case 12:if("host"!==e){t.next=20;break}return t.next=15,Promise.all([n.e(298),n.e(33),n.e(59)]).then(n.bind(n,6059));case 15:o=t.sent,i=o.default,s(i),t.next=21;break;case 20:s(null);case 21:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(e){k(s,a,r,o,i,"next",e)}function i(e){k(s,a,r,o,i,"throw",e)}o(void 0)}))})()}),[e]),r}var g=n(5851);function w(e,t,n,a,r,s,o){try{var i=e[s](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function A(e){var t=x((0,a.useState)(null),2),r=t[0],s=t[1];return(0,a.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=11;break}if("false"===(0,g.Q)().get("sidebar")){t.next=9;break}return t.next=6,Promise.all([n.e(298),n.e(986),n.e(58)]).then(n.bind(n,8058));case 6:a=t.sent,r=a.Sidebar,s(r);case 9:t.next=12;break;case 11:s(null);case 12:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(e){w(s,a,r,o,i,"next",e)}function i(e){w(s,a,r,o,i,"throw",e)}o(void 0)}))})()}),[e]),r}function O(e,t,n,a,r,s,o){try{var i=e[s](o),m=i.value}catch(e){return void n(e)}i.done?t(m):Promise.resolve(m).then(a,r)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function C(e){var t=j((0,a.useState)(null),2),n=t[0],r=t[1];return(0,a.useEffect)((function(){var t;"host"===e?(t=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,g.Q)(),e.next=7;break;case 4:t=e.sent,n=t.CommentsList,r(n);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(e){O(s,a,r,o,i,"next",e)}function i(e){O(s,a,r,o,i,"throw",e)}o(void 0)}))})():r(null)})),n}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var M=function(e){var t=e.slides,n=e.hash,r=P((0,a.useState)(!1),2),s=r[0],i=r[1],m=P(l(),2),c=m[0],u=m[1],f=h({originalSlides:t,hash:n,currentIndex:c}),d=f.slides,y=f.contentsList,k=P(p(),2),N=k[0],v=k[1],g=b(N),w=A(N),x=C(N),S=function(e){i(!1),v("start"===e?"host":"common")};return a.createElement(a.Fragment,null,w&&a.createElement(a.Fragment,null,a.createElement(w,{goTo:function(e){var t,n;null===(t=document.querySelector(".swiper-container"))||void 0===t||null===(n=t.swiper)||void 0===n||n.slideTo(e),u(e)},isOpen:s,totalSlides:d.length,terminate:function(){return S("terminate")},contents:y,onStateChange:function(e){var t=e.isOpen;return i(t)},currentIndex:c,runPresentationMode:function(){return S("start")}}),a.createElement(o.xXU,{className:"btn-sidebar",onClick:function(){return i(!0)}})),g&&a.createElement(g,{hash:n,slides:d,isJumpPage:0!==c,terminate:function(){return S("terminate")},currentIndex:c,onChangeSlideIndex:u}),x&&a.createElement(x,null))},D=n(9274),T=n.n(D),R=n(7751),z={insert:"head",singleton:!1};T()(R.Z,z);R.Z.locals;var F;function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=r.hydrate;n(a.createElement(M,{slides:e,hash:t}),document.getElementById("root"))}var U=s(n(3447));null===(F=void 0)||void 0===F||F.accept(U.id,(function(){L((U=s(n(3447))).slides,Math.random())})),L(U.slides),document.addEventListener("click",(function(e){if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},5851:(e,t,n)=>{"use strict";function a(){return new URL(window.location.href).searchParams}n.d(t,{Q:()=>a})},9292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>i,fusumaProps:()=>m,default:()=>c});var a=n(3058),r=n(4127);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=[function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Advanced"))}],m=[{}],l={};function c(e){var t=e.components,n=o(e,["components"]);return(0,r.kt)("wrapper",s({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Advanced"))}c.isMDXComponent=!0},3730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>i,fusumaProps:()=>m,default:()=>c});var a=n(3058),r=n(4127);function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=[function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Charts"),(0,r.kt)("br",null),(0,r.kt)("div",{className:"mermaid",id:"mermaid-1","data-value":"graph TD;\nA--\x3eB;\nA--\x3eC;\nB--\x3eD;\nC--\x3eD;",style:{visibility:"hidden"}},"graph TD; A--\x3eB; A--\x3eC; B--\x3eD; C--\x3eD;"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/knsv/mermaid"}),"https://github.com/knsv/mermaid")))},function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h3",null,"Markdown"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-txt"}),"\\`\\`\\`chart\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n\\`\\`\\`\n")),(0,r.kt)("br",null),(0,r.kt)("h3",null,".fusumarc"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"slide\n  chart: true  # the default is false\n")))},function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Diagrams"),(0,r.kt)("br",null),(0,r.kt)("div",{className:"mermaid",id:"mermaid-2","data-value":"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10 section A section\nCompleted task:done,des1, 2014-01-06,2014-01-08\nActive task   :active,  des2, 2014-01-09, 3d\nFuture task   : des3, after des2, 5d\nFuture task2   : des4, after des3, 5d",style:{visibility:"hidden"}},"gantt dateFormat  YYYY-MM-DD title Adding GANTT diagram to mermaid excludes weekdays 2014-01-10 section A section Completed task:done,des1, 2014-01-06,2014-01-08 Active task   :active,  des2, 2014-01-09, 3d Future task   : des3, after des2, 5d Future task2   : des4, after des3, 5d"))}],m=[{sectionTitle:"Charts"},{},{}],l={};function c(e){var t=e.components,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Charts"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-chart"}),"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/knsv/mermaid"}),"https://github.com/knsv/mermaid")),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Markdown"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-txt"}),"\\`\\`\\`chart\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n\\`\\`\\`\n")),(0,r.kt)("br",null),(0,r.kt)("h3",null,".fusumarc"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"slide\n  chart: true  # the default is false\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Diagrams"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-chart"}),"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d\n")))}c.isMDXComponent=!0},1349:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>i,fusumaProps:()=>m,default:()=>c});var a=n(3058),r=n(4127);function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=[function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h2",null,"Math"),(0,r.kt)("br",null),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",o({parentName:"div"},{className:"katex-display"}),(0,r.kt)("span",o({parentName:"span"},{className:"katex"}),(0,r.kt)("span",o({parentName:"span"},{className:"katex-mathml"}),(0,r.kt)("math",o({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"padSize"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"⌈"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mo"},"log"),(0,r.kt)("mo",{parentName:"mo"},"⁡")),(0,r.kt)("mn",{parentName:"msub"},"10")),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"("),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"a"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"r"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"r"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"a"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"y"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"S"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"i"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"z"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"e")),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),")"),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"⌉")),(0,r.kt)("annotation",o({parentName:"semantics"},{encoding:"application/x-tex"}),"\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil")))),(0,r.kt)("span",o({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mord text"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord textrm"}),"padSize")),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mrel"}),"="),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mopen"}),"⌈"),(0,r.kt)("span",o({parentName:"span"},{className:"mop"}),(0,r.kt)("span",o({parentName:"span"},{className:"mop"}),"lo",(0,r.kt)("span",o({parentName:"span"},{style:{marginRight:"0.01389em"}}),"g")),(0,r.kt)("span",o({parentName:"span"},{className:"msupsub"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-r"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist",style:{height:"0.20696799999999996em"}}),(0,r.kt)("span",o({parentName:"span"},{style:{top:"-2.4558600000000004em",marginRight:"0.05em"}}),(0,r.kt)("span",o({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),"1"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),"0"))))),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-s"}),"​")),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-r"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist",style:{height:"0.24414em"}}),(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",o({parentName:"span"},{className:"mopen"}),"("),(0,r.kt)("span",o({parentName:"span"},{className:"mord"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"a"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"r"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"r"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"a"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf",style:{marginRight:"0.01597em"}}),"y"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"S"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"i"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"z"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"e")),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mbin"}),"+"),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mord"}),"1"),(0,r.kt)("span",o({parentName:"span"},{className:"mclose"}),")"),(0,r.kt)("span",o({parentName:"span"},{className:"mclose"}),"⌉")))))))},function(e){return(0,r.kt)(a.Fragment,null,(0,r.kt)("h3",null,"fusumarc"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"slide\n  math: true\n")))}],m=[{sectionTitle:"Math"},{}],l={};function c(e){var t=e.components,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Math"),(0,r.kt)("br",null),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",o({parentName:"div"},{className:"katex-display"}),(0,r.kt)("span",o({parentName:"span"},{className:"katex"}),(0,r.kt)("span",o({parentName:"span"},{className:"katex-mathml"}),(0,r.kt)("math",o({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"padSize"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"⌈"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mo"},"log"),(0,r.kt)("mo",{parentName:"mo"},"⁡")),(0,r.kt)("mn",{parentName:"msub"},"10")),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"("),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"a"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"r"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"r"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"a"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"y"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"S"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"i"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"z"),(0,r.kt)("mi",o({parentName:"mrow"},{mathvariant:"bold"}),"e")),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),")"),(0,r.kt)("mo",o({parentName:"mrow"},{stretchy:"false"}),"⌉")),(0,r.kt)("annotation",o({parentName:"semantics"},{encoding:"application/x-tex"}),"\\textrm{padSize} = \\lceil \\log_{10}(\\mathbf{arraySize} + 1) \\rceil")))),(0,r.kt)("span",o({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mord text"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord textrm"}),"padSize")),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mrel"}),"="),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mopen"}),"⌈"),(0,r.kt)("span",o({parentName:"span"},{className:"mop"}),(0,r.kt)("span",o({parentName:"span"},{className:"mop"}),"lo",(0,r.kt)("span",o({parentName:"span"},{style:{marginRight:"0.01389em"}}),"g")),(0,r.kt)("span",o({parentName:"span"},{className:"msupsub"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-r"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist",style:{height:"0.20696799999999996em"}}),(0,r.kt)("span",o({parentName:"span"},{style:{top:"-2.4558600000000004em",marginRight:"0.05em"}}),(0,r.kt)("span",o({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),"1"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mtight"}),"0"))))),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-s"}),"​")),(0,r.kt)("span",o({parentName:"span"},{className:"vlist-r"}),(0,r.kt)("span",o({parentName:"span"},{className:"vlist",style:{height:"0.24414em"}}),(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",o({parentName:"span"},{className:"mopen"}),"("),(0,r.kt)("span",o({parentName:"span"},{className:"mord"}),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"a"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"r"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"r"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"a"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf",style:{marginRight:"0.01597em"}}),"y"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"S"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"i"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"z"),(0,r.kt)("span",o({parentName:"span"},{className:"mord mathbf"}),"e")),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mbin"}),"+"),(0,r.kt)("span",o({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),(0,r.kt)("span",o({parentName:"span"},{className:"base"}),(0,r.kt)("span",o({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",o({parentName:"span"},{className:"mord"}),"1"),(0,r.kt)("span",o({parentName:"span"},{className:"mclose"}),")"),(0,r.kt)("span",o({parentName:"span"},{className:"mclose"}),"⌉")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"fusumarc"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"slide\n  math: true\n")))}c.isMDXComponent=!0},7751:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(3746),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const s=r},3447:(e,t,n)=>{var a={"./0-title.md":9292,"./01-chart.md":3730,"./02-math.md":1349};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=3447}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[298,986,58].map(e.E),n}},[[8493,666,736],[1196,666,736]]]);