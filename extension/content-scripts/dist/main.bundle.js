!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){return{options:["👻","snap","Snap","snapchat","Snapchat","sc:","Sc:","SNAP","SNAPCHAT"],snapchats:[],likeCounter:0,dislikeCounter:0,message_counter:0,GeneralInterval:null,text:"",botStatus:!1,startTimerValue:[],deletedMessages:0,initCounter:0,updateCalendarCounter:0,like_button:document.querySelector(".profile-action--yes"),people_to_message:[],message_bot_interval:null,last_message:""}},o=function(e,t){chrome.runtime.onMessage.addListener(function(n){n.greeting==e&&t()})},u=function(e,t){e.click(),t.likeCounter++},i=null,c={interval:null},a=setInterval(function(){document.querySelector(".profile-action--yes")&&(i=r(),clearInterval(a))},1e3);o("start_liking",function(){c.interval=setInterval(function(){u(document.querySelector(".profile-action--yes"),i)},400)}),o("stop_liking",function(){clearInterval(c.interval)});var l=function(){return!!document.querySelector(".js-messenger-wrap")};function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f,m=function(){return s(document.querySelectorAll(".contact-card__message")).map(function(e){if("You matched"===e.innerText.substring(0,11))return e.parentElement.parentElement}).filter(function(e){return void 0!==e})},g=function(e){chrome.storage.sync.get([e],function(t){localStorage.setItem(e,JSON.stringify(t))})},p=function(e,t){g("last_message"),e[t]&&e[t].click()},d=function(){document.querySelector(".messenger-tools__input").innerText=JSON.parse(localStorage.getItem("last_message")).last_message},_=function(){document.querySelector(".messenger-tools__btn")&&document.querySelector(".messenger-tools__btn").click()},y=function(e){var t=0;r.message_bot_interval=setInterval(function(){d(),setTimeout(function(){_()},200),setTimeout(function(){p(e,t),t++},700),e.length<=t&&clearInterval(r.message_bot_interval)},800)},v=function(){!0===l()&&(clearInterval(r.message_bot_interval),document.querySelector(".messenger-ovl__close").click())};(function(){o("start_messaging",function(){!1===l()&&(document.querySelector('.sidebar-menu__item[href="/messenger/open"]').click(),setTimeout(function(){f=m(),y(f)},2e3))}),o("stop_messaging",function(){v()})})()}]);
//# sourceMappingURL=main.bundle.js.map