import{i as l,y as d,c as N,E as S,X as U,aZ as P,H as R,ae as M,Y as v,R as C,e as I,aS as A}from"./index.ab0d47a4.js";var _=!1;try{var f=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}catch{}const O=_;function p(n,t,a,s){if(n&&n.addEventListener){var i=s;i===void 0&&O&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(i={passive:!1}),n.addEventListener(t,a,i)}return{remove:function(){n&&n.removeEventListener&&n.removeEventListener(t,a)}}}function H(n,t){return n?n.contains(t):!1}var L=Symbol("TriggerContextKey"),h=function(){return l(L,{setPortal:function(){},popPortal:!1})},T=Symbol("PortalContextKey"),K=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inTriggerContext:!0};d(T,{inTriggerContext:a.inTriggerContext,shouldRender:N(function(){var s=t||{},i=s.sPopupVisible,r=s.popupRef,c=s.forceRender,o=s.autoDestroy,u=!1;return(i||r||c)&&(u=!0),!i&&o&&(u=!1),u})})},g=function(){K({},{inTriggerContext:!1});var t=l(T,{shouldRender:N(function(){return!1}),inTriggerContext:!1});return{shouldRender:N(function(){return t.shouldRender.value||t.inTriggerContext===!1})}};const m=S({name:"Portal",inheritAttrs:!1,props:{getContainer:U.func.isRequired,didUpdate:Function},setup:function(t,a){var s=a.slots,i=!0,r,c=g(),o=c.shouldRender;P(function(){i=!1,o.value&&(r=t.getContainer())});var u=R(o,function(){o.value&&!r&&(r=t.getContainer()),r&&u()});return M(function(){v(function(){var E;o.value&&((E=t.didUpdate)===null||E===void 0||E.call(t,t))})}),C(function(){r&&r.parentNode&&r.parentNode.removeChild(r)}),function(){var E;return o.value?i?(E=s.default)===null||E===void 0?void 0:E.call(s):r?I(A,{to:r},s):null:null}}});var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var a=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||a>=e.F1&&a<=e.F12)return!1;switch(a){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=e.ZERO&&t<=e.NINE||t>=e.NUM_ZERO&&t<=e.NUM_MULTIPLY||t>=e.A&&t<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const D=e;export{D as K,m as P,p as a,K as b,H as c,O as s,h as u};
