(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(a,b,c){"use strict";c.d(b,{BH:function(){return n},L:function(){return j},LL:function(){return y},Mn:function(){return u},ZR:function(){return x},"b$":function(){return r},d:function(){return s},eu:function(){return w},hl:function(){return v},m9:function(){return M},ne:function(){return I},pd:function(){return H},ru:function(){return q},tV:function(){return k},uI:function(){return p},vZ:function(){return D},w1:function(){return t},xO:function(){return F},xb:function(){return C},"z$":function(){return o},zd:function(){return G}});/* unused harmony exports CONSTANTS, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, areCookiesEnabled, assert, assertionError, async, base64, base64Encode, calculateBackoffMillis, contains, createMockUserToken, decode, deepCopy, deepExtend, errorPrefix, getGlobal, isAdmin, isBrowser, isNode, isNodeSdk, isSafari, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, promiseWithTimeout, safeGet, stringLength, stringToByteArray, stringify, uuidv4, validateArgCount, validateCallback, validateContextObject, validateNamespace */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let d={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},e=function(a){return Error("Firebase Database ("+d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},f=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},g=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(f(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):g(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,j=i?c[a.charAt(e)]:64;++e;let k=e<a.length,l=k?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==j||null==l)throw Error();let m=f<<2|h>>4;if(d.push(m),64!==j){let n=h<<4&240|j>>2;if(d.push(n),64!==l){let o=j<<6&192|l;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},i=function(a){let b=f(a);return h.encodeByteArray(b,!0)},j=function(a){return i(a).replace(/\./g,"")},k=function(a){try{return h.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function l(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&m(d)&&(a[d]=l(a[d],b[d]));return a}function m(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function r(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function s(){return o().indexOf("Electron/")>=0}function t(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function u(){return o().indexOf("MSAppHost/")>=0}function v(){return"object"==typeof indexedDB}function w(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}class x extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?z(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new x(d,g,c);return h}}function z(a,b){return a.replace(A,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let A=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function B(a){return JSON.parse(a)}function C(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function D(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(E(f)&&E(g)){if(!D(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function E(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function F(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function G(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function H(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function I(a,b){let c=new J(a,b);return c.subscribe.bind(c)}class J{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=K(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=L),void 0===d.error&&(d.error=L),void 0===d.complete&&(d.complete=L);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function L(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(a){return a&&a._delegate?a._delegate:a}},65:function(a,b,c){"use strict";c.d(b,{hJ:function(){return aT},v0:function(){return cj},Aj:function(){return a6},rh:function(){return bK},w7:function(){return a7}});var d,e=c(4444),f=c(5816),g=function(a,b){return(g=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function i(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function j(a){return this instanceof j?(this.v=a,this):new j(a)}var k=c(3333),l=c(8463);function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let n=m,o=new e.LL("auth","Firebase",m()),p=new k.Yd("@firebase/auth");function q(a,...b){p.logLevel<=k.in.ERROR&&p.error(`Auth (${f.Jn}): ${a}`,...b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function r(a,...b){throw v(a,...b)}function s(a,...b){return v(a,...b)}function t(a,b,c){let d=Object.assign(Object.assign({},n()),{[b]:c}),f=new e.LL("auth","Firebase",d);return f.create(b,{appName:a.name})}function u(a,b,c){let d=c;if(!(b instanceof d))throw d.name!==b.constructor.name&&r(a,"argument-error"),t(a,"argument-error",`Type of ${b.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(a,...b){if("string"!=typeof a){let c=b[0],d=[...b.slice(1)];return d[0]&&(d[0].appName=a.name),a._errorFactory.create(c,...d)}return o.create(a,...b)}function w(a,b,...c){if(!a)throw v(b,...c)}function x(a){let b="INTERNAL ASSERTION FAILED: "+a;throw q(b),Error(b)}function y(a,b){a||x(b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let z=new Map;function A(a){y(a instanceof Function,"Expected a class definition");let b=z.get(a);return b?(y(b instanceof a,"Instance stored in cache mismatched with class"),b):(b=new a,z.set(a,b),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function C(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class D{constructor(a,b){this.shortDelay=a,this.longDelay=b,y(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,e.uI)()||(0,e.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===C()||"https:"===C()||(0,e.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(a,b){y(a.emulator,"Emulator should always be set here");let{url:c}=a.emulator;return b?`${c}${b.startsWith("/")?b.slice(1):b}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F{static initialize(a,b,c){this.fetchImpl=a,b&&(this.headersImpl=b),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let G={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},H=new D(3e4,6e4);function I(a,b){return a.tenantId&&!b.tenantId?Object.assign(Object.assign({},b),{tenantId:a.tenantId}):b}async function J(a,b,c,d,f={}){return K(a,f,async()=>{let f={},g={};d&&("GET"===b?g=d:f={body:JSON.stringify(d)});let h=(0,e.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),i=await a._getAdditionalHeaders();return i["Content-Type"]="application/json",a.languageCode&&(i["X-Firebase-Locale"]=a.languageCode),F.fetch()(M(a,a.config.apiHost,c,h),Object.assign({method:b,headers:i,referrerPolicy:"no-referrer"},f))})}async function K(a,b,c){a._canInitEmulator=!1;let d=Object.assign(Object.assign({},G),b);try{let f=new N(a),g=await Promise.race([c(),f.promise]);f.clearNetworkTimeout();let h=await g.json();if("needConfirmation"in h)throw O(a,"account-exists-with-different-credential",h);if(g.ok&&!("errorMessage"in h))return h;{let i=g.ok?h.errorMessage:h.error.message,[j,k]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===j)throw O(a,"credential-already-in-use",h);if("EMAIL_EXISTS"===j)throw O(a,"email-already-in-use",h);if("USER_DISABLED"===j)throw O(a,"user-disabled",h);let l=d[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw t(a,l,k);r(a,l)}}catch(m){if(m instanceof e.ZR)throw m;r(a,"network-request-failed")}}async function L(a,b,c,d,e={}){let f=await J(a,b,c,d,e);return"mfaPendingCredential"in f&&r(a,"multi-factor-auth-required",{_serverResponse:f}),f}function M(a,b,c,d){let e=`${b}${c}?${d}`;return a.config.emulator?E(a.config,e):`${a.config.apiScheme}://${e}`}class N{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(s(this.auth,"network-request-failed")),H.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(a,b,c){let d={appName:a.name};c.email&&(d.email=c.email),c.phoneNumber&&(d.phoneNumber=c.phoneNumber);let e=s(a,b,d);return e.customData._tokenResponse=c,e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function P(a,b){return J(a,"POST","/v1/accounts:delete",b)}async function Q(a,b){return J(a,"POST","/v1/accounts:lookup",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function S(a,b=!1){let c=(0,e.m9)(a),d=await c.getIdToken(b),f=U(d);w(f&&f.exp&&f.auth_time&&f.iat,c.auth,"internal-error");let g="object"==typeof f.firebase?f.firebase:void 0,h=null==g?void 0:g.sign_in_provider;return{claims:f,token:d,authTime:R(T(f.auth_time)),issuedAtTime:R(T(f.iat)),expirationTime:R(T(f.exp)),signInProvider:h||null,signInSecondFactor:(null==g?void 0:g.sign_in_second_factor)||null}}function T(a){return 1e3*Number(a)}function U(a){var b;let[c,d,f]=a.split(".");if(void 0===c|| void 0===d|| void 0===f)return q("JWT malformed, contained fewer than 3 sections"),null;try{let g=(0,e.tV)(d);if(!g)return q("Failed to decode base64 JWT payload"),null;return JSON.parse(g)}catch(h){return q("Caught error parsing JWT payload as JSON",null===(b=h)|| void 0===b?void 0:b.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function V(a,b,c=!1){if(c)return b;try{return await b}catch(d){throw d instanceof e.ZR&&W(d)&&a.auth.currentUser===a&&await a.auth.signOut(),d}}function W({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=R(this.lastLoginAt),this.creationTime=R(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Y(a){var b;let c=a.auth,d=await a.getIdToken(),e=await V(a,Q(c,{idToken:d}));w(null==e?void 0:e.users.length,c,"internal-error");let f=e.users[0];a._notifyReloadListener(f);let g=(null===(b=f.providerUserInfo)|| void 0===b?void 0:b.length)?_(f.providerUserInfo):[],h=$(a.providerData,g),i=a.isAnonymous,j=!(a.email&&f.passwordHash)&&!(null==h?void 0:h.length),k={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new X(f.createdAt,f.lastLoginAt),isAnonymous:!!i&&j};Object.assign(a,k)}async function Z(a){let b=(0,e.m9)(a);await Y(b),await b.auth._persistUserIfCurrent(b),b.auth._notifyListenersIfCurrent(b)}function $(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function _(a){return a.map(a=>{var{providerId:b}=a,c=i(a,["providerId"]);return{providerId:b,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aa(a,b){let c=await K(a,{},async()=>{let c=(0,e.xO)({grant_type:"refresh_token",refresh_token:b}).slice(1),{tokenApiHost:d,apiKey:f}=a.config,g=M(a,d,"/v1/token",`key=${f}`),h=await a._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(g,{method:"POST",headers:h,body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class ab{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){w(a.idToken,"internal-error"),w(void 0!==a.idToken,"internal-error"),w(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(a){let b=U(a);return w(b,"internal-error"),w(void 0!==b.exp,"internal-error"),w(void 0!==b.iat,"internal-error"),Number(b.exp)-Number(b.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(w(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await aa(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(a,b){let{refreshToken:c,accessToken:d,expirationTime:e}=b,f=new ab;return c&&(w("string"==typeof c,"internal-error",{appName:a}),f.refreshToken=c),d&&(w("string"==typeof d,"internal-error",{appName:a}),f.accessToken=d),e&&(w("number"==typeof e,"internal-error",{appName:a}),f.expirationTime=e),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new ab,this.toJSON())}_performRefresh(){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ac(a,b){w("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class ad{constructor(a){var{uid:b,auth:c,stsTokenManager:d}=a,e=i(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var b;if(a){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(b=this.user.stsTokenManager.expirationTime)&& void 0!==b?b:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){var a;try{await this.user.getIdToken(!0)}catch(b){(null===(a=b)|| void 0===a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=b,this.auth=c,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new X(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(a){let b=await V(this,this.stsTokenManager.getToken(this.auth,a));return w(b,this.auth,"internal-error"),this.accessToken!==b&&(this.accessToken=b,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),b}getIdTokenResult(a){return S(this,a)}reload(){return Z(this)}_assign(a){this!==a&&(w(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new ad(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,b=!1){let c=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),c=!0),b&&await Y(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await V(this,P(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let k=null!==(c=b.displayName)&& void 0!==c?c:void 0,l=null!==(d=b.email)&& void 0!==d?d:void 0,m=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,n=null!==(f=b.photoURL)&& void 0!==f?f:void 0,o=null!==(g=b.tenantId)&& void 0!==g?g:void 0,p=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,q=null!==(i=b.createdAt)&& void 0!==i?i:void 0,r=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:s,emailVerified:t,isAnonymous:u,providerData:v,stsTokenManager:x}=b;w(s&&x,a,"internal-error");let y=ab.fromJSON(this.name,x);w("string"==typeof s,a,"internal-error"),ac(k,a.name),ac(l,a.name),w("boolean"==typeof t,a,"internal-error"),w("boolean"==typeof u,a,"internal-error"),ac(m,a.name),ac(n,a.name),ac(o,a.name),ac(p,a.name),ac(q,a.name),ac(r,a.name);let z=new ad({uid:s,auth:a,email:l,emailVerified:t,displayName:k,isAnonymous:u,photoURL:n,phoneNumber:m,tenantId:o,stsTokenManager:y,createdAt:q,lastLoginAt:r});return v&&Array.isArray(v)&&(z.providerData=v.map(a=>Object.assign({},a))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(a,b,c=!1){let d=new ab;d.updateFromServerResponse(b);let e=new ad({uid:b.localId,auth:a,stsTokenManager:d,isAnonymous:c});return await Y(e),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(a){let b=this.storage[a];return void 0===b?null:b}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}ae.type="NONE";let af=ae;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ag(a,b,c){return`firebase:${a}:${b}:${c}`}class ah{constructor(a,b,c){this.persistence=a,this.auth=b,this.userKey=c;let{config:d,name:e}=this.auth;this.fullUserKey=ag(this.userKey,d.apiKey,e),this.fullPersistenceKey=ag("persistence",d.apiKey,e),this.boundEventHandler=b._onStorageEvent.bind(b),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?ad._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,b,c="authUser"){if(!b.length)return new ah(A(af),a,c);let d=(await Promise.all(b.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),e=d[0]||A(af),f=ag(c,a.config.apiKey,a.name),g=null;for(let h of b)try{let i=await h._get(f);if(i){let j=ad._fromJSON(a,i);h!==e&&(g=j),e=h;break}}catch(k){}let l=d.filter(a=>a._shouldAllowMigration);return e._shouldAllowMigration&&l.length&&(e=l[0],g&&await e._set(f,g.toJSON()),await Promise.all(b.map(async a=>{if(a!==e)try{await a._remove(f)}catch(b){}}))),new ah(e,a,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function ai(a){let b=a.toLowerCase();if(b.includes("opera/")||b.includes("opr/")||b.includes("opios/"))return"Opera";if(am(b))return"IEMobile";if(b.includes("msie")||b.includes("trident/"))return"IE";{if(b.includes("edge/"))return"Edge";if(aj(b))return"Firefox";if(b.includes("silk/"))return"Silk";if(ao(b))return"Blackberry";if(ap(b))return"Webos";if(ak(b))return"Safari";if((b.includes("chrome/")||al(b))&&!b.includes("edge/"))return"Chrome";if(an(b))return"Android";let c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,d=a.match(c);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function aj(a=(0,e.z$)()){return/firefox\//i.test(a)}function ak(a=(0,e.z$)()){let b=a.toLowerCase();return b.includes("safari/")&&!b.includes("chrome/")&&!b.includes("crios/")&&!b.includes("android")}function al(a=(0,e.z$)()){return/crios\//i.test(a)}function am(a=(0,e.z$)()){return/iemobile/i.test(a)}function an(a=(0,e.z$)()){return/android/i.test(a)}function ao(a=(0,e.z$)()){return/blackberry/i.test(a)}function ap(a=(0,e.z$)()){return/webos/i.test(a)}function aq(a=(0,e.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function ar(a=(0,e.z$)()){return aq(a)||an(a)||ap(a)||ao(a)||/windows phone/i.test(a)||am(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function as(a,b=[]){let c;switch(a){case"Browser":c=ai((0,e.z$)());break;case"Worker":c=`${ai((0,e.z$)())}-${a}`;break;default:c=a}let d=b.length?b.join(","):"FirebaseCore-web";return`${c}/JsCore/${f.Jn}/${d}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(a,b,c){this.app=a,this.heartbeatServiceProvider=b,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,b){let c=b=>new Promise((c,d)=>{try{let e=a(b);c(e)}catch(f){d(f)}});c.onAbort=b,this.queue.push(c);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(a){var b;if(this.auth.currentUser===a)return;let c=[];try{for(let d of this.queue)await d(a),d.onAbort&&c.push(d.onAbort)}catch(e){for(let f of(c.reverse(),c))try{f()}catch(g){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(b=e)|| void 0===b?void 0:b.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(a,b){return b&&(this._popupRedirectResolver=A(b)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await ah.create(this,a),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(b),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(a){var b;let c=await this.assertedPersistence.getCurrentUser(),d=c,e=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,g=null==d?void 0:d._redirectEventId,h=await this.tryRedirectSignIn(a);(!f||f===g)&&(null==h?void 0:h.user)&&(d=h.user,e=!0)}if(!d)return this.directlySetCurrentUser(null);if(!d._redirectEventId){if(e)try{await this.beforeStateQueue.runMiddleware(d)}catch(i){d=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return d?this.reloadAndSetCurrentUserOrClear(d):this.directlySetCurrentUser(null)}return(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===d._redirectEventId)?this.directlySetCurrentUser(d):this.reloadAndSetCurrentUserOrClear(d)}async tryRedirectSignIn(a){let b=null;try{b=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(c){await this._setRedirectUser(null)}return b}async reloadAndSetCurrentUserOrClear(a){var b;try{await Y(a)}catch(c){if((null===(b=c)|| void 0===b?void 0:b.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(a){let b=a?(0,e.m9)(a):null;return b&&w(b.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(b&&b._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&w(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(A(a))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new e.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,b){let c=await this.getOrInitRedirectPersistenceManager(b);return null===a?c.removeCurrentUser():c.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&A(a)||this._popupRedirectResolver;w(b,this,"argument-error"),this.redirectPersistenceManager=await ah.create(this,[A(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var b,c;return(this._isInitialized&&await this.queue(async()=>{}),(null===(b=this._currentUser)|| void 0===b?void 0:b._redirectEventId)===a)?this._currentUser:(null===(c=this.redirectUser)|| void 0===c?void 0:c._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,b,c,d){if(this._deleted)return()=>{};let e="function"==typeof b?b:b.next.bind(b),f=this._isInitialized?Promise.resolve():this._initializationPromise;return(w(f,this,"internal-error"),f.then(()=>e(this.currentUser)),"function"==typeof b)?a.addObserver(b,c,d):a.addObserver(b)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&(this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh()),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());return c&&(b["X-Firebase-Client"]=c),b}}function au(a){return(0,e.m9)(a)}class av{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,e.ne)(a=>this.observer=a)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aw(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class ax{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return x("not implemented")}_getIdTokenResponse(a){return x("not implemented")}_linkToIdToken(a,b){return x("not implemented")}_getReauthenticationResolver(a){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(a,b){return J(a,"POST","/v1/accounts:resetPassword",I(a,b))}async function az(a,b){return J(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aA(a,b){return L(a,"POST","/v1/accounts:signInWithPassword",I(a,b))}async function aB(a,b){return J(a,"POST","/v1/accounts:sendOobCode",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aC(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}async function aD(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aE extends ax{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aE(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aE(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a;if((null==b?void 0:b.email)&&(null==b?void 0:b.password)){if("password"===b.signInMethod)return this._fromEmailAndPassword(b.email,b.password);if("emailLink"===b.signInMethod)return this._fromEmailAndCode(b.email,b.password,b.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return aA(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aC(a,{email:this._email,oobCode:this._password});default:r(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return az(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aD(a,{idToken:b,email:this._email,oobCode:this._password});default:r(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aF(a,b){return L(a,"POST","/v1/accounts:signInWithIdp",I(a,b))}class aG extends ax{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aG(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):r("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d}=b,e=i(b,["providerId","signInMethod"]);if(!c||!d)return null;let f=new aG(c,d);return f.idToken=e.idToken||void 0,f.accessToken=e.accessToken||void 0,f.secret=e.secret,f.nonce=e.nonce,f.pendingToken=e.pendingToken||null,f}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}buildRequest(){let a={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{let b={};this.idToken&&(b.id_token=this.idToken),this.accessToken&&(b.access_token=this.accessToken),this.secret&&(b.oauth_token_secret=this.secret),b.providerId=this.providerId,this.nonce&&!this.pendingToken&&(b.nonce=this.nonce),a.postBody=(0,e.xO)(b)}return a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aH(a,b){return J(a,"POST","/v1/accounts:sendVerificationCode",I(a,b))}async function aI(a,b){return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b))}async function aJ(a,b){let c=await L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b));if(c.temporaryProof)throw O(a,"account-exists-with-different-credential",c);return c}let aK={USER_NOT_FOUND:"user-not-found"};async function aL(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,c),aK)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class aM extends ax{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new aM({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new aM({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return aI(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return aJ(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return aL(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new aM({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class aN{constructor(a){var b,c,d,f,g,h;let i=(0,e.zd)((0,e.pd)(a)),j=null!==(b=i.apiKey)&& void 0!==b?b:null,k=null!==(c=i.oobCode)&& void 0!==c?c:null,l=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=i.mode)&& void 0!==d?d:null);w(j&&k&&l,"argument-error"),this.apiKey=j,this.operation=l,this.code=k,this.continueUrl=null!==(f=i.continueUrl)&& void 0!==f?f:null,this.languageCode=null!==(g=i.languageCode)&& void 0!==g?g:null,this.tenantId=null!==(h=i.tenantId)&& void 0!==h?h:null}static parseLink(a){let b=function(a){let b=(0,e.zd)((0,e.pd)(a)).link,c=b?(0,e.zd)((0,e.pd)(b)).deep_link_id:null,d=(0,e.zd)((0,e.pd)(a)).deep_link_id,f=d?(0,e.zd)((0,e.pd)(d)).link:null;return f||d||c||b||a}(a);try{return new aN(b)}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class aO{constructor(){this.providerId=aO.PROVIDER_ID}static credential(a,b){return aE._fromEmailAndPassword(a,b)}static credentialWithLink(a,b){let c=aN.parseLink(b);return w(c,"argument-error"),aE._fromEmailAndCode(a,c.code,c.tenantId)}}aO.PROVIDER_ID="password",aO.EMAIL_PASSWORD_SIGN_IN_METHOD="password",aO.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class aP{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class aQ extends aP{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class aR extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return w("providerId"in b&&"signInMethod"in b,"argument-error"),aG._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return w(a.idToken||a.accessToken,"argument-error"),aG._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return aR.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return aR.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:e,nonce:f,providerId:g}=a;if(!c&&!d&&!b&&!e||!g)return null;try{return new aR(g)._credential({idToken:b,accessToken:c,nonce:f,pendingToken:e})}catch(h){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aS extends aQ{constructor(){super("facebook.com")}static credential(a){return aG._fromParams({providerId:aS.PROVIDER_ID,signInMethod:aS.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aS.credentialFromTaggedObject(a)}static credentialFromError(a){return aS.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aS.credential(a.oauthAccessToken)}catch(b){return null}}}aS.FACEBOOK_SIGN_IN_METHOD="facebook.com",aS.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aT extends aQ{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aG._fromParams({providerId:aT.PROVIDER_ID,signInMethod:aT.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return aT.credentialFromTaggedObject(a)}static credentialFromError(a){return aT.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return aT.credential(b,c)}catch(d){return null}}}aT.GOOGLE_SIGN_IN_METHOD="google.com",aT.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class aU extends aQ{constructor(){super("github.com")}static credential(a){return aG._fromParams({providerId:aU.PROVIDER_ID,signInMethod:aU.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aU.credentialFromTaggedObject(a)}static credentialFromError(a){return aU.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aU.credential(a.oauthAccessToken)}catch(b){return null}}}aU.GITHUB_SIGN_IN_METHOD="github.com",aU.PROVIDER_ID="github.com";class aV extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d,pendingToken:e}=b;return c&&d&&e&&c===d?new aV(c,e):null}static _create(a,b){return new aV(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class aW extends null{constructor(a){w(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return aW.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return aW.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(a){let b=aV.fromJSON(a);return w(b,"argument-error"),b}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return aV._create(c,b)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class aX extends aQ{constructor(){super("twitter.com")}static credential(a,b){return aG._fromParams({providerId:aX.PROVIDER_ID,signInMethod:aX.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return aX.credentialFromTaggedObject(a)}static credentialFromError(a){return aX.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return aX.credential(b,c)}catch(d){return null}}}aX.TWITTER_SIGN_IN_METHOD="twitter.com",aX.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aY{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,b,c,d=!1){let e=await ad._fromIdTokenResponse(a,c,d),f=aZ(c),g=new aY({user:e,providerId:f,_tokenResponse:c,operationType:b});return g}static async _forOperation(a,b,c){await a._updateTokensIfNecessary(c,!0);let d=aZ(c);return new aY({user:a,providerId:d,_tokenResponse:c,operationType:b})}}function aZ(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a$ extends e.ZR{constructor(a,b,c,d){var e;super(b.code,b.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,a$.prototype),this.customData={appName:a.name,tenantId:null!==(e=a.tenantId)&& void 0!==e?e:void 0,_serverResponse:b.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(a,b,c,d){return new a$(a,b,c,d)}}function a_(a,b,c,d){let e="reauthenticate"===b?c._getReauthenticationResolver(a):c._getIdTokenResponse(a);return e.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw a$._fromErrorAndOperation(a,c,b,d);throw c})}async function a0(a,b,c=!1){let d=await V(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return aY._forOperation(a,"link",d)}async function a1(a,b,c){var d;await Y(b);let e=(d=b.providerData,new Set(d.map(({providerId:a})=>a).filter(a=>!!a)));w(e.has(c)===a,b.auth,!1===a?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a2(a,b,c=!1){var d;let{auth:e}=a,f="reauthenticate";try{let g=await V(a,a_(e,f,b,a),c);w(g.idToken,e,"internal-error");let h=U(g.idToken);w(h,e,"internal-error");let{sub:i}=h;return w(a.uid===i,e,"user-mismatch"),aY._forOperation(a,f,g)}catch(j){throw(null===(d=j)|| void 0===d?void 0:d.code)==="auth/user-not-found"&&r(e,"user-mismatch"),j}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a3(a,b,c=!1){let d="signIn",e=await a_(a,d,b),f=await aY._fromIdTokenResponse(a,d,e);return c||await a._updateCurrentUser(f.user),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a4{constructor(a,b){this.factorId=a,this.uid=b.mfaEnrollmentId,this.enrollmentTime=new Date(b.enrolledAt).toUTCString(),this.displayName=b.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?a5._fromServerResponse(a,b):r(a,"internal-error")}}class a5 extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(a,b){return new a5(b)}}function a6(a,b,c,d){return(0,e.m9)(a).onAuthStateChanged(b,c,d)}function a7(a){return(0,e.m9)(a).signOut()}class a8{constructor(a,b){this.type=a,this.credential=b}static _fromIdtoken(a){return new a8("enroll",a)}static _fromMfaPendingCredential(a){return new a8("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return a8._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return a8._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a9{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(a,b){let c=au(a),d=b.customData._serverResponse,e=(d.mfaInfo||[]).map(a=>a4._fromServerResponse(c,a));w(d.mfaPendingCredential,c,"internal-error");let f=a8._fromMfaPendingCredential(d.mfaPendingCredential);return new a9(f,e,async a=>{let e=await a._process(c,f);delete d.mfaInfo,delete d.mfaPendingCredential;let g=Object.assign(Object.assign({},d),{idToken:e.idToken,refreshToken:e.refreshToken});switch(b.operationType){case"signIn":let h=await aY._fromIdTokenResponse(c,b.operationType,g);return await c._updateCurrentUser(h.user),h;case"reauthenticate":return w(b.user,c,"internal-error"),aY._forOperation(b.user,b.operationType,g);default:r(c,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class ba{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>a4._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new ba(a)}async getSession(){return a8._fromIdtoken(await this.user.getIdToken())}async enroll(a,b){let c=await this.getSession(),d=await V(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){var b,c,d;let e="string"==typeof a?a:a.uid,f=await this.user.getIdToken(),g=await V(this.user,(c=this.user.auth,J(c,"POST","/v2/accounts/mfaEnrollment:withdraw",I(c,d={idToken:f,mfaEnrollmentId:e}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==e),await this.user._updateTokensIfNecessary(g);try{await this.user.reload()}catch(h){if((null===(b=h)|| void 0===b?void 0:b.code)!=="auth/user-token-expired")throw h}}}new WeakMap;let bb="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class bc{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(bb,"1"),this.storage.removeItem(bb),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(a){let b=this.storage.getItem(a);return Promise.resolve(b?JSON.parse(b):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class bd extends bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let a=(0,e.z$)();return ak(a)||aq(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(let b of Object.keys(this.listeners)){let c=this.storage.getItem(b),d=this.localCache[b];c!==d&&a(b,d,c)}}onStorageEvent(a,b=!1){if(!a.key){this.forAllChangedKeys((a,b,c)=>{this.notifyListeners(a,c)});return}let c=a.key;if(b?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let d=this.storage.getItem(c);if(a.newValue!==d)null!==a.newValue?this.storage.setItem(c,a.newValue):this.storage.removeItem(c);else if(this.localCache[c]===a.newValue&&!b)return}let f=()=>{let a=this.storage.getItem(c);(b||this.localCache[c]!==a)&&this.notifyListeners(c,a)},g=this.storage.getItem(c);(0,e.w1)()&&10===document.documentMode&&g!==a.newValue&&a.newValue!==a.oldValue?setTimeout(f,10):f()}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b?JSON.parse(b):b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}bd.type="LOCAL";let be=bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bf extends bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}bf.type="SESSION";let bg=bf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class bh{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){let b=this.receivers.find(b=>b.isListeningto(a));if(b)return b;let c=new bh(a);return this.receivers.push(c),c}isListeningto(a){return this.eventTarget===a}async handleEvent(a){var b;let c=a,{eventId:d,eventType:e,data:f}=c.data,g=this.handlersMap[e];if(!(null==g?void 0:g.size))return;c.ports[0].postMessage({status:"ack",eventId:d,eventType:e});let h=Array.from(g).map(async a=>a(c.origin,f)),i=await Promise.all((b=h).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));c.ports[0].postMessage({status:"done",eventId:d,eventType:e,response:i})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bi(a="",b=10){let c="";for(let d=0;d<b;d++)c+=Math.floor(10*Math.random());return a+c}bh.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bj{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,b,c=50){let d="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!d)throw Error("connection_unavailable");let e,f;return new Promise((g,h)=>{let i=bi("",20);d.port1.start();let j=setTimeout(()=>{h(Error("unsupported_event"))},c);f={messageChannel:d,onMessage(a){let b=a;if(b.data.eventId===i)switch(b.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{h(Error("timeout"))},3e3);break;case"done":clearTimeout(e),g(b.data.response);break;default:clearTimeout(j),clearTimeout(e),h(Error("invalid_response"))}}},this.handlers.add(f),d.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:a,eventId:i,data:b},[d.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function bk(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bl(){return void 0!==bk().WorkerGlobalScope&&"function"==typeof bk().importScripts}async function bm(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bn="firebaseLocalStorageDb",bo="firebaseLocalStorage",bp="fbase_key";class bq{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function br(a,b){return a.transaction([bo],b?"readwrite":"readonly").objectStore(bo)}function bs(){let a=indexedDB.open(bn,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bo,{keyPath:bp})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bo)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(bn);return new bq(a).toPromise()}(),b(await bs()))})})}async function bt(a,b,c){let d=br(a,!0).put({[bp]:b,value:c});return new bq(d).toPromise()}async function bu(a,b){let c=br(a,!1).get(b),d=await new bq(c).toPromise();return void 0===d?null:d.value}function bv(a,b){let c=br(a,!0).delete(b);return new bq(c).toPromise()}class bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await bs()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(bl()?self:null),this.receiver._subscribe("keyChanged",async(a,b)=>{let c=await this._poll();return{keyProcessed:c.includes(b.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new bj(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){var b;if(this.sender&&this.activeServiceWorker&&((null===(b=null==navigator?void 0:navigator.serviceWorker)|| void 0===b?void 0:b.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await bs();return await bt(a,bb,"1"),await bv(a,bb),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>bt(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(a){let b=await this._withRetries(b=>bu(b,a));return this.localCache[a]=b,b}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bv(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let a=await this._withRetries(a=>{let b=br(a,!1).getAll();return new bq(b).toPromise()});if(!a||0!==this.pendingWrites)return[];let b=[],c=new Set;for(let{fbase_key:d,value:e}of a)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(e)&&(this.notifyListeners(d,e),b.push(d));for(let f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),b.push(f));return b}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bw.type="LOCAL";let bx=bw;function by(a){return`__${a}${Math.floor(1e6*Math.random())}`}class bz{constructor(a,b,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let d="string"==typeof a?document.getElementById(a):a;w(d,"argument-error",{appName:b}),this.container=d,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bA(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function bA(a){let b=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let d=0;d<a;d++)b.push(c.charAt(Math.floor(Math.random()*c.length)));return b.join("")}by("rcb"),new D(3e4,6e4);async function bB(a,b,c){var d,e,f,g,h;let i=await c.verify();try{w("string"==typeof i,a,"argument-error"),w("recaptcha"===c.type,a,"argument-error");let j;if(j="string"==typeof b?{phoneNumber:b}:b,"session"in j){let k=j.session;if("phoneNumber"in j){w("enroll"===k.type,a,"internal-error");let l=await (e=a,f={idToken:k.credential,phoneEnrollmentInfo:{phoneNumber:j.phoneNumber,recaptchaToken:i}},J(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,f)));return l.phoneSessionInfo.sessionInfo}{w("signin"===k.type,a,"internal-error");let m=(null===(d=j.multiFactorHint)|| void 0===d?void 0:d.uid)||j.multiFactorUid;w(m,a,"missing-multi-factor-info");let n=await (g=a,h={mfaPendingCredential:k.credential,mfaEnrollmentId:m,phoneSignInInfo:{recaptchaToken:i}},J(g,"POST","/v2/accounts/mfaSignIn:start",I(g,h)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await aH(a,{phoneNumber:j.phoneNumber,recaptchaToken:i});return o}}finally{c._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class bC{constructor(a){this.providerId=bC.PROVIDER_ID,this.auth=au(a)}verifyPhoneNumber(a,b){return bB(this.auth,a,(0,e.m9)(b))}static credential(a,b){return aM._fromVerification(a,b)}static credentialFromResult(a){return bC.credentialFromTaggedObject(a)}static credentialFromError(a){return bC.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?aM._fromTokenResponse(b,c):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bD(a,b){return b?A(b):(w(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}bC.PROVIDER_ID="phone",bC.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bE extends ax{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aF(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aF(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aF(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bF(a){return a3(a.auth,new bE(a),a.bypassAuthState)}function bG(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a2(c,new bE(a),a.bypassAuthState)}async function bH(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a0(c,new bE(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class bI{constructor(a,b,c,d,e=!1){this.auth=a,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(b)?b:[b]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(a){let{urlResponse:b,sessionId:c,postBody:d,tenantId:e,error:f,type:g}=a;if(f){this.reject(f);return}let h={auth:this.auth,requestUri:b,sessionId:c,tenantId:e||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bF;case"linkViaPopup":case"linkViaRedirect":return bH;case"reauthViaPopup":case"reauthViaRedirect":return bG;default:r(this.auth,"internal-error")}}resolve(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bJ=new D(2e3,1e4);async function bK(a,b,c){let d=au(a);u(a,b,aP);let e=bD(d,c),f=new bL(d,"signInViaPopup",b,e);return f.executeNotNull()}class bL extends bI{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,bL.currentPopupAction&&bL.currentPopupAction.cancel(),bL.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return w(a,this.auth,"internal-error"),a}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");let a=bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(s(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(s(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bL.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(s(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(a,bJ.get())};a()}}bL.currentPopupAction=null;let bM=new Map;class bN extends bI{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bM.get(this.auth._key());if(!a){try{let b=await bO(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bM.set(this.auth._key(),a)}return this.bypassAuthState||bM.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bO(a,b){let c=bR(b),d=bQ(a);if(!await d._isAvailable())return!1;let e=await d._get(c)==="true";return await d._remove(c),e}async function bP(a,b){return bQ(a)._set(bR(b),"true")}function bQ(a){return A(a._redirectPersistence)}function bR(a){return ag("pendingRedirect",a.config.apiKey,a.name)}async function bS(a,b,c=!1){let d=au(a),e=bD(d,b),f=new bN(d,e,c),g=await f.execute();return g&&!c&&(delete g.user._redirectEventId,await d._persistUserIfCurrent(g.user),await d._setRedirectUser(null,b)),g}async function bT(a){let b=bi(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class bU{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!bX(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,b){var c;if(a.error&&!bW(a)){let d=(null===(c=a.error.code)|| void 0===c?void 0:c.split("auth/")[1])||"internal-error";b.onError(s(this.auth,d))}else b.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bV(a))}saveEventToCache(a){this.cachedEventUids.add(bV(a)),this.lastProcessedEventTime=Date.now()}}function bV(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function bW({type:a,error:b}){return"unknown"===a&&(null==b?void 0:b.code)==="auth/no-auth-event"}function bX(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bW(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bY(a,b={}){return J(a,"GET","/v1/projects",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bZ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b$=/^https?/;async function b_(a){if(a.config.emulator)return;let{authorizedDomains:b}=await bY(a);for(let c of b)try{if(b0(c))return}catch(d){}r(a,"unauthorized-domain")}function b0(a){let b=B(),{protocol:c,hostname:d}=new URL(b);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===d?"chrome-extension:"===c&&a.replace("chrome-extension://","")===b.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===d}if(!b$.test(c))return!1;if(bZ.test(a))return d===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(d)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b1=new D(3e4,6e4);function b2(){let a=bk().___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let b3=null,b4=new D(5e3,15e3),b5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function b7(a){var b,c;let d=await (b=a,b3=b3||(c=b,new Promise((a,b)=>{var d,e,f,g;function h(){b2(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{b2(),b(s(c,"network-request-failed"))},timeout:b1.get()})}if(null===(e=null===(d=bk().gapi)|| void 0===d?void 0:d.iframes)|| void 0===e?void 0:e.Iframe)a(gapi.iframes.getContext());else if(null===(f=bk().gapi)|| void 0===f?void 0:f.load)h();else{let i=by("iframefcb");return bk()[i]=()=>{gapi.load?h():b(s(c,"network-request-failed"))},(g=`https://apis.google.com/js/api.js?onload=${i}`,new Promise((a,b)=>{var c,d;let e=document.createElement("script");e.setAttribute("src",g),e.onload=a,e.onerror=a=>{let c=s("internal-error");c.customData=a,b(c)},e.type="text/javascript",e.charset="UTF-8",(null!==(d=null===(c=document.getElementsByTagName("head"))|| void 0===c?void 0:c[0])&& void 0!==d?d:document).appendChild(e)})).catch(a=>b(a))}}).catch(a=>{throw b3=null,a}))),g=bk().gapi;return w(g,a,"internal-error"),d.open({where:document.body,url:function(a){let b=a.config;w(b.authDomain,a,"auth-domain-config-required");let c=b.emulator?E(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:f.Jn},g=b6.get(a.config.apiHost);g&&(d.eid=g);let h=a._getFrameworks();return h.length&&(d.fw=h.join(",")),`${c}?${(0,e.xO)(d).slice(1)}`}(a),messageHandlersFilter:g.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b5,dontclear:!0},b=>new Promise(async(c,d)=>{await b.restyle({setHideOnLeave:!1});let e=s(a,"network-request-failed"),f=bk().setTimeout(()=>{d(e)},b4.get());function g(){bk().clearTimeout(f),c(b)}b.ping(g).then(g,()=>{d(e)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class b9{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function ca(a,b,c,d,g,h){w(a.config.authDomain,a,"auth-domain-config-required"),w(a.config.apiKey,a,"invalid-api-key");let i={apiKey:a.config.apiKey,appName:a.name,authType:c,redirectUrl:d,v:f.Jn,eventId:g};if(b instanceof aP)for(let[j,k]of(b.setDefaultLanguage(a.languageCode),i.providerId=b.providerId||"",(0,e.xb)(b.getCustomParameters())||(i.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(h||{})))i[j]=k;if(b instanceof aQ){let l=b.getScopes().filter(a=>""!==a);l.length>0&&(i.scopes=l.join(","))}a.tenantId&&(i.tid=a.tenantId);let m=i;for(let n of Object.keys(m))void 0===m[n]&&delete m[n];return`${cb(a)}?${(0,e.xO)(m).slice(1)}`}function cb({config:a}){return a.emulator?E(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ let cc="webStorageSupport",cd=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bg,this._completeRedirectFn=bS,this._overrideRedirectResult=function(a,b){bM.set(a._key(),b)}}async _openPopup(a,b,c,d){var f;y(null===(f=this.eventManagers[a._key()])|| void 0===f?void 0:f.manager,"_initialize() not called before _openPopup()");let g=ca(a,b,c,B(),d);return function(a,b,c,d=500,f=600){let g=Math.max((window.screen.availHeight-f)/2,0).toString(),h=Math.max((window.screen.availWidth-d)/2,0).toString(),i="",j=Object.assign(Object.assign({},b8),{width:d.toString(),height:f.toString(),top:g,left:h}),k=(0,e.z$)().toLowerCase();c&&(i=al(k)?"_blank":c),aj(k)&&(b=b||"http://localhost",j.scrollbars="yes");let l=Object.entries(j).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(a=(0,e.z$)()){var b;return aq(a)&&!!(null===(b=window.navigator)|| void 0===b?void 0:b.standalone)}(k)&&"_self"!==i)return function a(b,c){let d=document.createElement("a");d.href=b,d.target=c;let e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(e)}(b||"",i),new b9(null);let m=window.open(b||"",i,l);w(m,a,"popup-blocked");try{m.focus()}catch(n){}return new b9(m)}(a,g,bi())}async _openRedirect(a,b,c,d){var e;return await this._originValidation(a),e=ca(a,b,c,B(),d),bk().location.href=e,new Promise(()=>{})}_initialize(a){let b=a._key();if(this.eventManagers[b]){let{manager:c,promise:d}=this.eventManagers[b];return c?Promise.resolve(c):(y(d,"If manager is not set, promise should be"),d)}let e=this.initAndGetManager(a);return this.eventManagers[b]={promise:e},e.catch(()=>{delete this.eventManagers[b]}),e}async initAndGetManager(a){let b=await b7(a),c=new bU(a);return b.register("authEvent",b=>{w(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,b){let c=this.iframes[a._key()];c.send(cc,{type:cc},c=>{var d;let e=null===(d=null==c?void 0:c[0])|| void 0===d?void 0:d[cc];void 0!==e&&b(!!e),r(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){let b=a._key();return this.originValidationPromises[b]||(this.originValidationPromises[b]=b_(a)),this.originValidationPromises[b]}get _shouldInitProactively(){return ar()||ak()||aq()}};class ce{constructor(a){this.factorId=a}_process(a,b,c){switch(b.type){case"enroll":return this._finalizeEnroll(a,b.credential,c);case"signin":return this._finalizeSignIn(a,b.credential);default:return x("unexpected MultiFactorSessionType")}}}class cf extends ce{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new cf(a)}_finalizeEnroll(a,b,c){var d,e;return d=a,J(d,"POST","/v2/accounts/mfaEnrollment:finalize",I(d,e={idToken:b,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(a,b){var c,d;return c=a,J(c,"POST","/v2/accounts/mfaSignIn:finalize",I(c,d={mfaPendingCredential:b,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return cf._fromCredential(a)}}).FACTOR_ID="phone";var cg="@firebase/auth",ch="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ci{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(b=>{var c;a((null===(c=b)|| void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function cj(a=(0,f.Mq)()){let b=(0,f.qX)(a,"auth");return b.isInitialized()?b.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(a,b){let c=(0,f.qX)(a,"auth");if(c.isInitialized()){let d=c.getImmediate(),g=c.getOptions();if((0,e.vZ)(g,null!=b?b:{}))return d;r(d,"already-initialized")}let h=c.initialize({options:b});return h}(a,{popupRedirectResolver:cd,persistence:[bx,be,bg]})}d="Browser",(0,f.Xd)(new l.wA("auth",(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),e=a.getProvider("heartbeat"),{apiKey:f,authDomain:g}=c.options;return((a,c)=>{w(f&&!f.includes(":"),"invalid-api-key",{appName:a.name}),w(!(null==g?void 0:g.includes(":")),"argument-error",{appName:a.name});let e={apiKey:f,authDomain:g,clientPlatform:d,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(d)},h=new at(a,c,e);return function(a,b){let c=(null==b?void 0:b.persistence)||[],d=(Array.isArray(c)?c:[c]).map(A);(null==b?void 0:b.errorMap)&&a._updateErrorMap(b.errorMap),a._initializeWithPersistence(d,null==b?void 0:b.popupRedirectResolver)}(h,b),h})(c,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,b,c)=>{let d=a.getProvider("auth-internal");d.initialize()})),(0,f.Xd)(new l.wA("auth-internal",a=>{var b;let c=au(a.getProvider("auth").getImmediate());return b=c,new ci(b)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,f.KN)(cg,ch,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(d)),(0,f.KN)(cg,ch,"esm2017")},5321:function(a,b,c){"use strict";c.d(b,{ET:function(){return lb},hJ:function(){return ki},JU:function(){return kj},ad:function(){return ko},cf:function(){return lc},Xo:function(){return k1},IO:function(){return kZ},iE:function(){return kl},Eo:function(){return kk},Bt:function(){return lf},pl:function(){return la},ar:function(){return k_}});var d,e,f,g,h,i,j,k,l,m,n=c(5816),o=c(8463),p=c(3333),q=c(4444),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c.g?c.g:"undefined"!=typeof self?self:{},s={},t=t||{},u=r||self;function v(){}function w(a){var b=typeof a;return"array"==(b="object"!=b?b:a?Array.isArray(a)?"array":b:"null")||"object"==b&&"number"==typeof a.length}function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function y(a,b,c){return a.call.apply(a.bind,arguments)}function z(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function A(a,b,c){return(A=Function.prototype.bind&& -1!=Function.prototype.bind.toString().indexOf("native code")?y:z).apply(null,arguments)}function B(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function C(a,b){function c(){}c.prototype=b.prototype,a.Z=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.Vb=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return b.prototype[c].apply(a,e)}}function D(){this.s=this.s,this.o=this.o}D.prototype.s=!1,D.prototype.na=function(){this.s||(this.s=!0,this.M())},D.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let E=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){let d=a.length,e="string"==typeof a?a.split(""):a;for(let f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function G(a){return Array.prototype.concat.apply([],arguments)}function H(a){let b=a.length;if(0<b){let c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}function I(a){return/^[\s\xa0]*$/.test(a)}var J=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function K(a,b){return -1!=a.indexOf(b)}function L(a,b){return a<b?-1:a>b?1:0}a:{var M=u.navigator;if(M){var N=M.userAgent;if(N){f=N;break a}}f=""}function O(a,b,c){for(let d in a)b.call(c,a[d],d,a)}function P(a){let b={};for(let c in a)b[c]=a[c];return b}var Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,b){let c,d;for(let e=1;e<arguments.length;e++){for(c in d=arguments[e])a[c]=d[c];for(let f=0;f<Q.length;f++)c=Q[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function S(a){return S[" "](a),a}S[" "]=v;var T=K(f,"Opera"),U=K(f,"Trident")||K(f,"MSIE"),V=K(f,"Edge"),W=V||U,X=K(f,"Gecko")&&!(K(f.toLowerCase(),"webkit")&&!K(f,"Edge"))&&!(K(f,"Trident")||K(f,"MSIE"))&&!K(f,"Edge"),Y=K(f.toLowerCase(),"webkit")&&!K(f,"Edge");function Z(){var a=u.document;return a?a.documentMode:void 0}a:{var $,_="",aa=($=f,X?/rv:([^\);]+)(\)|;)/.exec($):V?/Edge\/([\d\.]+)/.exec($):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($):Y?/WebKit\/(\S+)/.exec($):T?/(?:Version)[ \/]?(\S+)/.exec($):void 0);if(aa&&(_=aa?aa[1]:""),U){var ab=Z();if(null!=ab&&ab>parseFloat(_)){g=String(ab);break a}}g=_}var ac={};if(u.document&&U){h=Z()||parseInt(g,10)||void 0}else h=void 0;var ad=h,ae=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{u.addEventListener("test",v,b),u.removeEventListener("test",v,b)}catch(c){}return a}();function af(a,b){this.type=a,this.g=this.target=b,this.defaultPrevented=!1}function ag(a,b){if(af.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=b,b=a.relatedTarget){if(X){a:{try{S(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b,d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"==typeof a.pointerType?a.pointerType:ah[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ag.Z.h.call(this)}}af.prototype.h=function(){this.defaultPrevented=!0},C(ag,af);var ah={2:"touch",3:"pen",4:"mouse"};ag.prototype.h=function(){ag.Z.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ai="closure_listenable_"+(1e6*Math.random()|0),aj=0;function ak(a,b,c,d,e){this.listener=a,this.proxy=null,this.src=b,this.type=c,this.capture=!!d,this.ia=e,this.key=++aj,this.ca=this.fa=!1}function al(a){a.ca=!0,a.listener=null,a.proxy=null,a.src=null,a.ia=null}function am(a){this.src=a,this.g={},this.h=0}function an(a,b){var c=b.type;if(c in a.g){var d,e=a.g[c],f=E(e,b);(d=0<=f)&&Array.prototype.splice.call(e,f,1),d&&(al(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}function ao(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&& !!c==f.capture&&f.ia==d)return e}return -1}am.prototype.add=function(a,b,c,d,e){var f=a.toString();(a=this.g[f])||(a=this.g[f]=[],this.h++);var g=ao(a,b,d,e);return -1<g?(b=a[g],c||(b.fa=!1)):((b=new ak(b,this.src,f,!!d,e)).fa=c,a.push(b)),b};var ap="closure_lm_"+(1e6*Math.random()|0),aq={};function ar(a,b,c,d,e){if(d&&d.once)return au(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)ar(a,b[f],c,d,e);return null}return c=aB(c),a&&a[ai]?a.N(b,c,x(d)?!!d.capture:!!d,e):as(a,b,c,!1,d,e)}function as(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=x(e)?!!e.capture:!!e,h=az(a);if(h||(a[ap]=h=new am(a)),(c=h.add(b,c,d,g,f)).proxy)return c;if(d=at(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener)ae||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ax(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function at(){function a(c){return b.call(a.src,a.listener,c)}var b=ay;return a}function au(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)au(a,b[f],c,d,e);return null}return c=aB(c),a&&a[ai]?a.O(b,c,x(d)?!!d.capture:!!d,e):as(a,b,c,!0,d,e)}function av(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)av(a,b[f],c,d,e);else(d=x(d)?!!d.capture:!!d,c=aB(c),a&&a[ai])?(a=a.i,(b=String(b).toString())in a.g&& -1<(c=ao(f=a.g[b],c,d,e))&&(al(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--))):a&&(a=az(a))&&(b=a.g[b.toString()],a=-1,b&&(a=ao(b,c,d,e)),(c=-1<a?b[a]:null)&&aw(c))}function aw(a){if("number"!=typeof a&&a&&!a.ca){var b=a.src;if(b&&b[ai])an(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ax(c),d):b.addListener&&b.removeListener&&b.removeListener(d),(c=az(b))?(an(c,a),0==c.h&&(c.src=null,b[ap]=null)):al(a)}}}function ax(a){return a in aq?aq[a]:aq[a]="on"+a}function ay(a,b){if(a.ca)a=!0;else{b=new ag(b,this);var c=a.listener,d=a.ia||a.src;a.fa&&aw(a),a=c.call(d,b)}return a}function az(a){return(a=a[ap])instanceof am?a:null}var aA="__closure_events_fn_"+(1e9*Math.random()>>>0);function aB(a){return"function"==typeof a?a:(a[aA]||(a[aA]=function(b){return a.handleEvent(b)}),a[aA])}function aC(){D.call(this),this.i=new am(this),this.P=this,this.I=null}function aD(a,b){var c,d=a.I;if(d)for(c=[];d;d=d.I)c.push(d);if(a=a.P,d=b.type||b,"string"==typeof b)b=new af(b,a);else if(b instanceof af)b.target=b.target||a;else{var e=b;R(b=new af(d,a),e)}if(e=!0,c)for(var f=c.length-1;0<=f;f--){var g=b.g=c[f];e=aE(g,d,!0,b)&&e}if(e=aE(g=b.g=a,d,!0,b)&&e,e=aE(g,d,!1,b)&&e,c)for(f=0;f<c.length;f++)e=aE(g=b.g=c[f],d,!1,b)&&e}function aE(a,b,c,d){if(!(b=a.i.g[String(b)]))return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ca&&g.capture==c){var h=g.listener,i=g.ia||g.src;g.fa&&an(a.i,g),e=!1!==h.call(i,d)&&e}}return e&&!d.defaultPrevented}C(aC,D),aC.prototype[ai]=!0,aC.prototype.removeEventListener=function(a,b,c,d){av(this,a,b,c,d)},aC.prototype.M=function(){if(aC.Z.M.call(this),this.i){var a,b=this.i;for(a in b.g){for(var c=b.g[a],d=0;d<c.length;d++)al(c[d]);delete b.g[a],b.h--}}this.I=null},aC.prototype.N=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)},aC.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};var aF=u.JSON.stringify;function aG(){var a=aN;let b=null;return a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null),b}var aH=new class{constructor(a,b){this.i=a,this.j=b,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}(()=>new aI,a=>a.reset());class aI{constructor(){this.next=this.g=this.h=null}set(a,b){this.h=a,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}function aJ(a){u.setTimeout(()=>{throw a},0)}function aK(a,b){i||aL(),aM||(i(),aM=!0),aN.add(a,b)}function aL(){var a=u.Promise.resolve(void 0);i=function(){a.then(aO)}}var aM=!1,aN=new class{constructor(){this.h=this.g=null}add(a,b){let c=aH.get();c.set(a,b),this.h?this.h.next=c:this.g=c,this.h=c}};function aO(){for(var a;a=aG();){try{a.h.call(a.g)}catch(b){aJ(b)}var c=aH;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}aM=!1}function aP(a,b){aC.call(this),this.h=a||1,this.g=b||u,this.j=A(this.kb,this),this.l=Date.now()}function aQ(a){a.da=!1,a.S&&(a.g.clearTimeout(a.S),a.S=null)}function aR(a,b,c){if("function"==typeof a)c&&(a=A(a,c));else if(a&&"function"==typeof a.handleEvent)a=A(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:u.setTimeout(a,b||0)}function aS(a){a.g=aR(()=>{a.g=null,a.i&&(a.i=!1,aS(a))},a.j);let b=a.h;a.h=null,a.m.apply(null,b)}C(aP,aC),(m=aP.prototype).da=!1,m.S=null,m.kb=function(){if(this.da){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-a):(this.S&&(this.g.clearTimeout(this.S),this.S=null),aD(this,"tick"),this.da&&(aQ(this),this.start()))}},m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},m.M=function(){aP.Z.M.call(this),aQ(this),delete this.g};class aT extends D{constructor(a,b){super(),this.m=a,this.j=b,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:aS(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aU(a){D.call(this),this.h=a,this.g={}}C(aU,D);var aV=[];function aW(a,b,c,d){Array.isArray(c)||(c&&(aV[0]=c.toString()),c=aV);for(var e=0;e<c.length;e++){var f=ar(b,c[e],d||a.handleEvent,!1,a.h||a);if(!f)break;a.g[f.key]=f}}function aX(a){O(a.g,function(a,b){this.g.hasOwnProperty(b)&&aw(a)},a),a.g={}}function aY(){this.g=!0}function aZ(a,b,c,d){a.info(function(){return"XMLHTTP TEXT ("+b+"): "+a$(a,c)+(d?" "+d:"")})}function a$(a,b){if(!a.g)return b;if(!b)return null;try{var c=JSON.parse(b);if(c){for(a=0;a<c.length;a++)if(Array.isArray(c[a])){var d=c[a];if(!(2>d.length)){var e=d[1];if(Array.isArray(e)&&!(1>e.length)){var f=e[0];if("noop"!=f&&"stop"!=f&&"close"!=f)for(var g=1;g<e.length;g++)e[g]=""}}}}return aF(c)}catch(h){return b}}aU.prototype.M=function(){aU.Z.M.call(this),aX(this)},aU.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},aY.prototype.Aa=function(){this.g=!1},aY.prototype.info=function(){};var a_={},a0=null;function a1(){return a0=a0||new aC}function a2(a){af.call(this,a_.Ma,a)}function a3(a){let b=a1();aD(b,new a2(b,a))}function a4(a,b){af.call(this,a_.STAT_EVENT,a),this.stat=b}function a5(a){let b=a1();aD(b,new a4(b,a))}function a6(a,b){af.call(this,a_.Na,a),this.size=b}function a7(a,b){if("function"!=typeof a)throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},b)}a_.Ma="serverreachability",C(a2,af),a_.STAT_EVENT="statevent",C(a4,af),a_.Na="timingevent",C(a6,af);var a8={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},a9={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ba(){}function bb(a){return a.h||(a.h=a.i())}function bc(){}ba.prototype.h=null;var bd={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function be(){af.call(this,"d")}function bf(){af.call(this,"c")}function bg(){}function bh(a,b,c,d){this.l=a,this.j=b,this.m=c,this.X=d||1,this.V=new aU(this),this.P=bj,a=W?125:void 0,this.W=new aP(a),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bi}function bi(){this.i=null,this.g="",this.h=!1}C(be,af),C(bf,af),C(bg,ba),bg.prototype.g=function(){return new XMLHttpRequest},bg.prototype.i=function(){return{}},j=new bg;var bj=45e3,bk={},bl={};function bm(a,b,c){a.K=1,a.v=bJ(bD(b)),a.s=c,a.U=!0,bn(a,null)}function bn(a,b){a.F=Date.now(),br(a),a.A=bD(a.v);var c=a.A,d=a.X;Array.isArray(d)||(d=[String(d)]),bW(c.h,"t",d),a.C=0,c=a.l.H,a.h=new bi,a.g=cO(a.l,c?b:null,!a.s),0<a.O&&(a.L=new aT(A(a.Ia,a,a.g),a.O)),aW(a.V,a.g,"readystatechange",a.gb),b=a.H?P(a.H):{},a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.s,b)):(a.u="GET",a.g.ea(a.A,a.u,null,b)),a3(1),function(a,b,c,d,e,f){a.info(function(){if(a.g){if(f)for(var g="",h=f.split("&"),i=0;i<h.length;i++){var j=h[i].split("=");if(1<j.length){var k=j[0];j=j[1];var l=k.split("_");g=2<=l.length&&"type"==l[1]?g+(k+"=")+j+"&":g+(k+"=redacted&")}}else g=null}else g=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+g})}(a.j,a.u,a.A,a.m,a.X,a.s)}function bo(a){return!!a.g&&"GET"==a.u&&2!=a.K&&a.l.Ba}function bp(a,b,c){let d=!0,e;for(;!a.I&&a.C<c.length;)if((e=bq(a,c))==bl){4==b&&(a.o=4,a5(14),d=!1),aZ(a.j,a.m,null,"[Incomplete Response]");break}else if(e==bk){a.o=4,a5(15),aZ(a.j,a.m,c,"[Invalid Chunk]"),d=!1;break}else aZ(a.j,a.m,e,null),bw(a,e);bo(a)&&e!=bl&&e!=bk&&(a.h.g="",a.C=0),4!=b||0!=c.length||a.h.h||(a.o=1,a5(16),d=!1),a.i=a.i&&d,d?0<c.length&&!a.aa&&(a.aa=!0,(b=a.l).g==a&&b.$&&!b.L&&(b.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),cG(b),b.L=!0,a5(11))):(aZ(a.j,a.m,c,"[Invalid Chunked Response]"),bv(a),bu(a))}function bq(a,b){var c=a.C,d=b.indexOf("\n",c);return -1==d?bl:isNaN(c=Number(b.substring(c,d)))?bk:(d+=1)+c>b.length?bl:(b=b.substr(d,c),a.C=d+c,b)}function br(a){a.Y=Date.now()+a.P,bs(a,a.P)}function bs(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=a7(A(a.eb,a),b)}function bt(a){a.B&&(u.clearTimeout(a.B),a.B=null)}function bu(a){0==a.l.G||a.I||cJ(a.l,a)}function bv(a){bt(a);var b=a.L;b&&"function"==typeof b.na&&b.na(),a.L=null,aQ(a.W),aX(a.V),a.g&&(b=a.g,a.g=null,b.abort(),b.na())}function bw(a,b){try{var c=a.l;if(0!=c.G&&(c.g==a||b2(c.i,a))){if(c.I=a.N,!a.J&&b2(c.i,a)&&3==c.G){try{var d=c.Ca.g.parse(b)}catch(e){d=null}if(Array.isArray(d)&&3==d.length){var f=d;if(0==f[0]){a:if(!c.u){if(c.g){if(c.g.F+3e3<a.F)cI(c),cx(c);else break a}cF(c),a5(18)}}else c.ta=f[1],0<c.ta-c.U&&37500>f[2]&&c.N&&0==c.A&&!c.v&&(c.v=a7(A(c.ab,c),6e3));if(1>=b1(c.i)&&c.ka){try{c.ka()}catch(g){}c.ka=void 0}}else cL(c,11)}else if((a.J||c.g==a)&&cI(c),!I(b))for(f=c.Ca.g.parse(b),b=0;b<f.length;b++){let h=f[b];if(c.U=h[0],h=h[1],2==c.G){if("c"==h[0]){c.J=h[1],c.la=h[2];let i=h[3];null!=i&&(c.ma=i,c.h.info("VER="+c.ma));let j=h[4];null!=j&&(c.za=j,c.h.info("SVER="+c.za));let k=h[5];null!=k&&"number"==typeof k&&0<k&&(d=1.5*k,c.K=d,c.h.info("backChannelRequestTimeoutMs_="+d)),d=c;let l=a.g;if(l){let m=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var n=d.i;!n.g&&(K(m,"spdy")||K(m,"quic")||K(m,"h2"))&&(n.j=n.l,n.g=new Set,n.h&&(b3(n,n.h),n.h=null))}if(d.D){let o=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;o&&(d.sa=o,bI(d.F,d.D,o))}}c.G=3,c.j&&c.j.xa(),c.$&&(c.O=Date.now()-a.F,c.h.info("Handshake RTT: "+c.O+"ms")),d=c;var p=a;if(d.oa=cN(d,d.H?d.la:null,d.W),p.J){b4(d.i,p);var q=p,r=d.K;r&&q.setTimeout(r),q.B&&(bt(q),br(q)),d.g=p}else cE(d);0<c.l.length&&cA(c)}else"stop"!=h[0]&&"close"!=h[0]||cL(c,7)}else 3==c.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?cL(c,7):cw(c):"noop"!=h[0]&&c.j&&c.j.wa(h),c.A=0)}}a3(4)}catch(s){}}function bx(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(w(a)||"string"==typeof a)F(a,b,void 0);else{if(a.T&&"function"==typeof a.T)var c=a.T();else if(a.R&&"function"==typeof a.R)c=void 0;else if(w(a)||"string"==typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else for(e in c=[],d=0,a)c[d++]=e;e=(d=function(a){if(a.R&&"function"==typeof a.R)return a.R();if("string"==typeof a)return a.split("");if(w(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}for(d in b=[],c=0,a)b[c++]=a[d];return b}(a)).length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}}function by(a,b){this.h={},this.g=[],this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){if(a instanceof by)for(c=a.T(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}}function bz(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];bA(a.h,d)&&(a.g[c++]=d),b++}a.g.length=c}if(a.i!=a.g.length){var e={};for(c=b=0;b<a.g.length;)bA(e,d=a.g[b])||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}function bA(a,b){return Object.prototype.hasOwnProperty.call(a,b)}(m=bh.prototype).setTimeout=function(a){this.P=a},m.gb=function(a){a=a.target;let b=this.L;b&&3==cr(a)?b.l():this.Ia(a)},m.Ia=function(a){try{if(a==this.g)a:{let b=cr(this.g);var c=this.g.Da();let d=this.g.ba();if(!(3>b)&&(3!=b||W||this.g&&(this.h.h||this.g.ga()||cs(this.g)))){this.I||4!=b||7==c||(8==c||0>=d?a3(3):a3(2)),bt(this);var e=this.g.ba();this.N=e;b:if(bo(this)){var f=cs(this.g);a="";var g=f.length,h=4==cr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bv(this),bu(this);var i="";break b}this.h.i=new u.TextDecoder}for(c=0;c<g;c++)this.h.h=!0,a+=this.h.i.decode(f[c],{stream:h&&c==g-1});f.splice(0,g),this.h.g+=a,this.C=0,i=this.h.g}else i=this.g.ga();if(this.i=200==e,function(a,b,c,d,e,f,g){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+g})}(this.j,this.u,this.A,this.m,this.X,b,e),this.i){if(this.$&&!this.J){b:{if(this.g){var j,k=this.g;if((j=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(j)){var l=j;break b}}l=null}if(e=l)aZ(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bw(this,e);else{this.i=!1,this.o=3,a5(12),bv(this),bu(this);break a}}this.U?(bp(this,b,i),W&&this.i&&3==b&&(aW(this.V,this.W,"tick",this.fb),this.W.start())):(aZ(this.j,this.m,i,null),bw(this,i)),4==b&&bv(this),this.i&&!this.I&&(4==b?cJ(this.l,this):(this.i=!1,br(this)))}else 400==e&&0<i.indexOf("Unknown SID")?(this.o=3,a5(12)):(this.o=0,a5(13)),bv(this),bu(this)}}}catch(m){}finally{}},m.fb=function(){if(this.g){var a=cr(this.g),b=this.g.ga();this.C<b.length&&(bt(this),bp(this,a,b),this.i&&4!=a&&br(this))}},m.cancel=function(){this.I=!0,bv(this)},m.eb=function(){this.B=null;let a=Date.now();0<=a-this.Y?(function(a,b){a.info(function(){return"TIMEOUT: "+b})}(this.j,this.A),2!=this.K&&(a3(3),a5(17)),bv(this),this.o=2,bu(this)):bs(this,this.Y-a)},(m=by.prototype).R=function(){bz(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a},m.T=function(){return bz(this),this.g.concat()},m.get=function(a,b){return bA(this.h,a)?this.h[a]:b},m.set=function(a,b){bA(this.h,a)||(this.i++,this.g.push(a)),this.h[a]=b},m.forEach=function(a,b){for(var c=this.T(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};var bB=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bC(a,b){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,a instanceof bC){this.g=void 0!==b?b:a.g,bE(this,a.j),this.s=a.s,bF(this,a.i),bG(this,a.m),this.l=a.l,b=a.h;var c=new bS;c.i=b.i,b.g&&(c.g=new by(b.g),c.h=b.h),bH(this,c),this.o=a.o}else a&&(c=String(a).match(bB))?(this.g=!!b,bE(this,c[1]||"",!0),this.s=bK(c[2]||""),bF(this,c[3]||"",!0),bG(this,c[4]),this.l=bK(c[5]||"",!0),bH(this,c[6]||"",!0),this.o=bK(c[7]||"")):(this.g=!!b,this.h=new bS(null,this.g))}function bD(a){return new bC(a)}function bE(a,b,c){a.j=c?bK(b,!0):b,a.j&&(a.j=a.j.replace(/:$/,""))}function bF(a,b,c){a.i=c?bK(b,!0):b}function bG(a,b){if(b){if(isNaN(b=Number(b))||0>b)throw Error("Bad port number "+b);a.m=b}else a.m=null}function bH(a,b,c){b instanceof bS?(a.h=b,bY(a.h,a.g)):(c||(b=bL(b,bQ)),a.h=new bS(b,a.g))}function bI(a,b,c){a.h.set(b,c)}function bJ(a){return bI(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bK(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bL(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,bM),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bM(a){return"%"+((a=a.charCodeAt(0))>>4&15).toString(16)+(15&a).toString(16)}bC.prototype.toString=function(){var a=[],b=this.j;b&&a.push(bL(b,bN,!0),":");var c=this.i;return(c||"file"==b)&&(a.push("//"),(b=this.s)&&a.push(bL(b,bN,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(c=this.m)&&a.push(":",String(c))),(c=this.l)&&(this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(bL(c,"/"==c.charAt(0)?bP:bO,!0))),(c=this.h.toString())&&a.push("?",c),(c=this.o)&&a.push("#",bL(c,bR)),a.join("")};var bN=/[#\/\?@]/g,bO=/[#\?:]/g,bP=/[#\?]/g,bQ=/[#\?@]/g,bR=/#/g;function bS(a,b){this.h=this.g=null,this.i=a||null,this.j=!!b}function bT(a){a.g||(a.g=new by,a.h=0,a.i&&function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function bU(a,b){bT(a),b=bX(a,b),bA(a.g.h,b)&&(a.i=null,a.h-=a.g.get(b).length,bA((a=a.g).h,b)&&(delete a.h[b],a.i--,a.g.length>2*a.i&&bz(a)))}function bV(a,b){return bT(a),b=bX(a,b),bA(a.g.h,b)}function bW(a,b,c){bU(a,b),0<c.length&&(a.i=null,a.g.set(bX(a,b),H(c)),a.h+=c.length)}function bX(a,b){return b=String(b),a.j&&(b=b.toLowerCase()),b}function bY(a,b){b&&!a.j&&(bT(a),a.i=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(bU(this,b),bW(this,c,a))},a)),a.j=b}(m=bS.prototype).add=function(a,b){bT(this),this.i=null,a=bX(this,a);var c=this.g.get(a);return c||this.g.set(a,c=[]),c.push(b),this.h+=1,this},m.forEach=function(a,b){bT(this),this.g.forEach(function(c,d){F(c,function(c){a.call(b,c,d,this)},this)},this)},m.T=function(){bT(this);for(var a=this.g.R(),b=this.g.T(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c},m.R=function(a){bT(this);var b=[];if("string"==typeof a)bV(this,a)&&(b=G(b,this.g.get(bX(this,a))));else{a=this.g.R();for(var c=0;c<a.length;c++)b=G(b,a[c])}return b},m.set=function(a,b){return bT(this),this.i=null,a=bX(this,a),bV(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[b]),this.h+=1,this},m.get=function(a,b){return a&&0<(a=this.R(a)).length?String(a[0]):b},m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var a=[],b=this.g.T(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.R(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f]))),a.push(g)}}return this.i=a.join("&")};var bZ=class{constructor(a,b){this.h=a,this.g=b}};function b$(a){this.l=a||b_,a=u.PerformanceNavigationTiming?0<(a=u.performance.getEntriesByType("navigation")).length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol):!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b_=10;function b0(a){return!!a.h|| !!a.g&&a.g.size>=a.j}function b1(a){return a.h?1:a.g?a.g.size:0}function b2(a,b){return a.h?a.h==b:!!a.g&&a.g.has(b)}function b3(a,b){a.g?a.g.add(b):a.h=b}function b4(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b)}function b5(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let b=a.i;for(let c of a.g.values())b=b.concat(c.D);return b}return H(a.i)}function b6(){}function b7(){this.g=new b6}function b8(a,b,c){let d=c||"";try{bx(a,function(a,c){let e=a;x(a)&&(e=aF(a)),b.push(d+c+"="+encodeURIComponent(e))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e}}function b9(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}}function ca(a){this.l=a.$b||null,this.j=a.ib||!1}function cb(a,b){aC.call(this),this.D=a,this.u=b,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b$.prototype.cancel=function(){if(this.i=b5(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let a of this.g.values())a.cancel();this.g.clear()}},b6.prototype.stringify=function(a){return u.JSON.stringify(a,void 0)},b6.prototype.parse=function(a){return u.JSON.parse(a,void 0)},C(ca,ba),ca.prototype.g=function(){return new cb(this.l,this.j)},ca.prototype.i=(e={},function(){return e}),C(cb,aC);var cc=0;function cd(a){a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a))}function ce(a){a.readyState=4,a.l=null,a.j=null,a.A=null,cf(a)}function cf(a){a.onreadystatechange&&a.onreadystatechange.call(a)}(m=cb.prototype).open=function(a,b){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=b,this.readyState=1,cf(this)},m.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a),(this.D||u).fetch(new Request(this.B,b)).then(this.Va.bind(this),this.ha.bind(this))},m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ce(this)),this.readyState=cc},m.Va=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cf(this)),this.g&&(this.readyState=3,cf(this),this.g))){if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==u.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cd(this)}else a.text().then(this.Ua.bind(this),this.ha.bind(this))}},m.Sa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);(b=this.A.decode(b,{stream:!a.done}))&&(this.response=this.responseText+=b)}a.done?ce(this):cf(this),3==this.readyState&&cd(this)}},m.Ua=function(a){this.g&&(this.response=this.responseText=a,ce(this))},m.Ta=function(a){this.g&&(this.response=a,ce(this))},m.ha=function(){this.g&&ce(this)},m.setRequestHeader=function(a,b){this.v.append(a,b)},m.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},m.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],b=this.h.entries();for(var c=b.next();!c.done;)a.push((c=c.value)[0]+": "+c[1]),c=b.next();return a.join("\r\n")},Object.defineProperty(cb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var cg=u.JSON.parse;function ch(a){aC.call(this),this.headers=new by,this.u=a||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ci,this.K=this.L=!1}C(ch,aC);var ci="",cj=/^https?$/i,ck=["POST","PUT"];function cl(a){return"content-type"==a.toLowerCase()}function cm(a,b){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=b,a.m=5,cn(a),cp(a)}function cn(a){a.D||(a.D=!0,aD(a,"complete"),aD(a,"error"))}function co(a){if(a.h&& void 0!==t&&(!a.C[1]||4!=cr(a)||2!=a.ba())){if(a.v&&4==cr(a))aR(a.Fa,0,a);else if(aD(a,"readystatechange"),4==cr(a)){a.h=!1;try{let b=a.ba();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c,d,e=!0;break a;default:e=!1}if(!(c=e)){if(d=0===b){var f=String(a.H).match(bB)[1]||null;if(!f&&u.self&&u.self.location){var g=u.self.location.protocol;f=g.substr(0,g.length-1)}d=!cj.test(f?f.toLowerCase():"")}c=d}if(c)aD(a,"complete"),aD(a,"success");else{a.m=6;try{var h=2<cr(a)?a.g.statusText:""}catch(i){h=""}a.j=h+" ["+a.ba()+"]",cn(a)}}finally{cp(a)}}}}function cp(a,b){if(a.g){cq(a);let c=a.g,d=a.C[0]?v:null;a.g=null,a.C=null,b||aD(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function cq(a){a.g&&a.K&&(a.g.ontimeout=null),a.A&&(u.clearTimeout(a.A),a.A=null)}function cr(a){return a.g?a.g.readyState:0}function cs(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case ci:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}function ct(a,b,c){a:{for(e in c){var d,e=!1;break a}e=!0}let f;e||(c=(f="",O(d=c,function(a,b){f+=b,f+=":",f+=a,f+="\r\n"}),f),"string"==typeof a?null!=c&&encodeURIComponent(String(c)):bI(a,b,c))}function cu(a,b,c){return c&&c.internalChannelParams&&c.internalChannelParams[a]||b}function cv(a){this.za=0,this.l=[],this.h=new aY,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cu("failFast",!1,a),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cu("baseRetryDelayMs",5e3,a),this.$a=cu("retryDelaySeedMs",1e4,a),this.Ya=cu("forwardChannelMaxRetries",2,a),this.ra=cu("forwardChannelRequestTimeoutMs",2e4,a),this.qa=a&&a.xmlHttpFactory||void 0,this.Ba=a&&a.Yb||!1,this.K=void 0,this.H=a&&a.supportsCrossDomainXhr||!1,this.J="",this.i=new b$(a&&a.concurrentRequestLimit),this.Ca=new b7,this.ja=a&&a.fastHandshake||!1,this.Ra=a&&a.Wb||!1,a&&a.Aa&&this.h.Aa(),a&&a.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&a&&a.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!a|| !1!==a.Xb}function cw(a){if(cy(a),3==a.G){var b=a.V++,c=bD(a.F);bI(c,"SID",a.J),bI(c,"RID",b),bI(c,"TYPE","terminate"),cC(a,c),(b=new bh(a,a.h,b,void 0)).K=2,b.v=bJ(bD(c)),c=!1,u.navigator&&u.navigator.sendBeacon&&(c=u.navigator.sendBeacon(b.v.toString(),"")),!c&&u.Image&&((new Image).src=b.v,c=!0),c||(b.g=cO(b.l,null),b.g.ea(b.v)),b.F=Date.now(),br(b)}cM(a)}function cx(a){a.g&&(cG(a),a.g.cancel(),a.g=null)}function cy(a){cx(a),a.u&&(u.clearTimeout(a.u),a.u=null),cI(a),a.i.cancel(),a.m&&("number"==typeof a.m&&u.clearTimeout(a.m),a.m=null)}function cz(a,b){a.l.push(new bZ(a.Za++,b)),3==a.G&&cA(a)}function cA(a){b0(a.i)||a.m||(a.m=!0,aK(a.Ha,a),a.C=0)}function cB(a,b){var c;c=b?b.m:a.V++;let d=bD(a.F);bI(d,"SID",a.J),bI(d,"RID",c),bI(d,"AID",a.U),cC(a,d),a.o&&a.s&&ct(d,a.o,a.s),c=new bh(a,a.h,c,a.C+1),null===a.o&&(c.H=a.s),b&&(a.l=b.D.concat(a.l)),b=cD(a,c,1e3),c.setTimeout(Math.round(.5*a.ra)+Math.round(.5*a.ra*Math.random())),b3(a.i,c),bm(c,d,b)}function cC(a,b){a.j&&bx({},function(a,c){bI(b,c,a)})}function cD(a,b,c){c=Math.min(a.l.length,c);var d=a.j?A(a.j.Oa,a.j,a):null;a:{var e=a.l;let f=-1;for(;;){let g=["count="+c];-1==f?0<c?(f=e[0].h,g.push("ofs="+f)):f=0:g.push("ofs="+f);let h=!0;for(let i=0;i<c;i++){let j=e[i].h,k=e[i].g;if(0>(j-=f))f=Math.max(0,e[i].h-100),h=!1;else try{b8(k,g,"req"+j+"_")}catch(l){d&&d(k)}}if(h){d=g.join("&");break a}}}return a=a.l.splice(0,c),b.D=a,d}function cE(a){a.g||a.u||(a.Y=1,aK(a.Ga,a),a.A=0)}function cF(a){return!a.g&&!a.u&&!(3<=a.A)&&(a.Y++,a.u=a7(A(a.Ga,a),cK(a,a.A)),a.A++,!0)}function cG(a){null!=a.B&&(u.clearTimeout(a.B),a.B=null)}function cH(a){a.g=new bh(a,a.h,"rpc",a.Y),null===a.o&&(a.g.H=a.s),a.g.O=0;var b=bD(a.oa);bI(b,"RID","rpc"),bI(b,"SID",a.J),bI(b,"CI",a.N?"0":"1"),bI(b,"AID",a.U),cC(a,b),bI(b,"TYPE","xmlhttp"),a.o&&a.s&&ct(b,a.o,a.s),a.K&&a.g.setTimeout(a.K);var c=a.g;a=a.la,c.K=1,c.v=bJ(bD(b)),c.s=null,c.U=!0,bn(c,a)}function cI(a){null!=a.v&&(u.clearTimeout(a.v),a.v=null)}function cJ(a,b){var c=null;if(a.g==b){cI(a),cG(a),a.g=null;var d=2}else{if(!b2(a.i,b))return;c=b.D,b4(a.i,b),d=1}if(a.I=b.N,0!=a.G){if(b.i){if(1==d){c=b.s?b.s.length:0,b=Date.now()-b.F;var e,f,g=a.C;d=a1(),aD(d,new a6(d,c,b,g)),cA(a)}else cE(a)}else if(3==(g=b.o)||0==g&&0<a.I||!(1==d&&(e=a,f=b,!(b1(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=f.D.concat(e.l),!0):1!=e.G&&2!=e.G&&!(e.C>=(e.Xa?0:e.Ya))&&(e.m=a7(A(e.Ha,e,f),cK(e,e.C)),e.C++,!0)))||2==d&&cF(a)))switch(c&&0<c.length&&((b=a.i).i=b.i.concat(c)),g){case 1:cL(a,5);break;case 4:cL(a,10);break;case 3:cL(a,6);break;default:cL(a,2)}}}function cK(a,b){let c=a.Pa+Math.floor(Math.random()*a.$a);return a.j||(c*=2),c*b}function cL(a,b){if(a.h.info("Error code "+b),2==b){var c=null;a.j&&(c=null);var d=A(a.jb,a);c||(c=new bC("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||bE(c,"https"),bJ(c)),function(a,b){let c=new aY;if(u.Image){let d=new Image;d.onload=B(b9,c,d,"TestLoadImage: loaded",!0,b),d.onerror=B(b9,c,d,"TestLoadImage: error",!1,b),d.onabort=B(b9,c,d,"TestLoadImage: abort",!1,b),d.ontimeout=B(b9,c,d,"TestLoadImage: timeout",!1,b),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else b(!1)}(c.toString(),d)}else a5(2);a.G=0,a.j&&a.j.va(b),cM(a),cy(a)}function cM(a){a.G=0,a.I=-1,a.j&&((0!=b5(a.i).length||0!=a.l.length)&&(a.i.i.length=0,H(a.l),a.l.length=0),a.j.ua())}function cN(a,b,c){var d,e,f,g,h,i;let j=(d=c)instanceof bC?bD(d):new bC(d,void 0);if(""!=j.i)b&&bF(j,b+"."+j.i),bG(j,j.m);else{let k=u.location;j=(e=k.protocol,f=b?b+"."+k.hostname:k.hostname,g=+k.port,h=c,i=new bC(null,void 0),e&&bE(i,e),f&&bF(i,f),g&&bG(i,g),h&&(i.l=h),i)}return a.aa&&O(a.aa,function(a,b){bI(j,b,a)}),b=a.D,c=a.sa,b&&c&&bI(j,b,c),bI(j,"VER",a.ma),cC(a,j),j}function cO(a,b,c){if(b&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");return(b=new ch(c&&a.Ba&&!a.qa?new ca({ib:!0}):a.qa)).L=a.H,b}function cP(){}function cQ(){if(U&&!(10<=Number(ad)))throw Error("Environmental error: no available transport.")}function cR(a,b){aC.call(this),this.g=new cv(b),this.l=a,this.h=b&&b.messageUrlParams||null,a=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.s=a,a=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.ya&&(a?a["X-WebChannel-Client-Profile"]=b.ya:a={"X-WebChannel-Client-Profile":b.ya}),this.g.P=a,(a=b&&b.httpHeadersOverwriteParam)&&!I(a)&&(this.g.o=a),this.A=b&&b.supportsCrossDomainXhr||!1,this.v=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!I(b)&&(this.g.D=b,null!==(a=this.h)&&b in a&&b in(a=this.h)&&delete a[b]),this.j=new cU(this)}function cS(a){be.call(this);var b=a.__sm__;if(b){a:{for(let c in b){a=c;break a}a=void 0}(this.i=a)&&(a=this.i,b=null!==b&&a in b?b[a]:void 0),this.data=b}else this.data=a}function cT(){bf.call(this),this.status=1}function cU(a){this.g=a}(m=ch.prototype).ea=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET",this.H=a,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():j.g(),this.C=this.u?bb(this.u):bb(j),this.g.onreadystatechange=A(this.Fa,this);try{this.F=!0,this.g.open(b,String(a),!0),this.F=!1}catch(e){cm(this,e);return}a=c||"";let f=new by(this.headers);d&&bx(d,function(a,b){f.set(b,a)}),d=function(a){a:{var b=cl;let c=a.length,d="string"==typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"==typeof a?a.charAt(b):a[b]}(f.T()),c=u.FormData&&a instanceof u.FormData,!(0<=E(ck,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),f.forEach(function(a,b){this.g.setRequestHeader(b,a)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var h;cq(this),0<this.B&&((this.K=(h=this.g,U&&function(a){var b=ac;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}(function(){let a=0,b=J(String(g)).split("."),c=J("9").split("."),d=Math.max(b.length,c.length);for(let e=0;0==a&&e<d;e++){var f=b[e]||"",h=c[e]||"";do{if(f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""],h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""],0==f[0].length&&0==h[0].length)break;a=L(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||L(0==f[2].length,0==h[2].length)||L(f[2],h[2]),f=f[3],h=h[3]}while(0==a)}return 0<=a})&&"number"==typeof h.timeout&& void 0!==h.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=A(this.pa,this)):this.A=aR(this.pa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(i){cm(this,i)}},m.pa=function(){void 0!==t&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,aD(this,"timeout"),this.abort(8))},m.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,aD(this,"complete"),aD(this,"abort"),cp(this))},m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cp(this,!0)),ch.Z.M.call(this)},m.Fa=function(){this.s||(this.F||this.v||this.l?co(this):this.cb())},m.cb=function(){co(this)},m.ba=function(){try{return 2<cr(this)?this.g.status:-1}catch(a){return -1}},m.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},m.Qa=function(a){if(this.g){var b=this.g.responseText;return a&&0==b.indexOf(a)&&(b=b.substring(a.length)),cg(b)}},m.Da=function(){return this.m},m.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(m=cv.prototype).ma=8,m.G=1,m.hb=function(a){try{this.h.info("Origin Trials invoked: "+a)}catch(b){}},m.Ha=function(a){if(this.m){if(this.m=null,1==this.G){if(!a){this.V=Math.floor(1e5*Math.random()),a=this.V++;let b=new bh(this,this.h,a,void 0),c=this.s;if(this.P&&(c?R(c=P(c),this.P):c=this.P),null===this.o&&(b.H=c),this.ja)a:{for(var d=0,e=0;e<this.l.length;e++){b:{var f=this.l[e];if("__data__"in f.g&&"string"==typeof(f=f.g.__data__)){f=f.length;break b}f=void 0}if(void 0===f)break;if(4096<(d+=f)){d=e;break a}if(4096===d||e===this.l.length-1){d=e+1;break a}}d=1e3}else d=1e3;d=cD(this,b,d),e=bD(this.F),bI(e,"RID",a),bI(e,"CVER",22),this.D&&bI(e,"X-HTTP-Session-Id",this.D),cC(this,e),this.o&&c&&ct(e,this.o,c),b3(this.i,b),this.Ra&&bI(e,"TYPE","init"),this.ja?(bI(e,"$req",d),bI(e,"SID","null"),b.$=!0,bm(b,e,null)):bm(b,e,d),this.G=2}}else 3==this.G&&(a?cB(this,a):0==this.l.length||b0(this.i)||cB(this))}},m.Ga=function(){if(this.u=null,cH(this),this.$&&!(this.L||null==this.g||0>=this.O)){var a=2*this.O;this.h.info("BP detection timer enabled: "+a),this.B=a7(A(this.bb,this),a)}},m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,a5(10),cx(this),cH(this))},m.ab=function(){null!=this.v&&(this.v=null,cx(this),cF(this),a5(19))},m.jb=function(a){a?(this.h.info("Successfully pinged google.com"),a5(2)):(this.h.info("Failed to ping google.com"),a5(1))},(m=cP.prototype).xa=function(){},m.wa=function(){},m.va=function(){},m.ua=function(){},m.Oa=function(){},cQ.prototype.g=function(a,b){return new cR(a,b)},C(cR,aC),cR.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var a=this.g,b=this.l,c=this.h||void 0;a.Wa&&(a.h.info("Origin Trials enabled."),aK(A(a.hb,a,b))),a5(0),a.W=b,a.aa=c||{},a.N=a.X,a.F=cN(a,null,a.W),cA(a)},cR.prototype.close=function(){cw(this.g)},cR.prototype.u=function(a){if("string"==typeof a){var b={};b.__data__=a,cz(this.g,b)}else this.v?((b={}).__data__=aF(a),cz(this.g,b)):cz(this.g,a)},cR.prototype.M=function(){this.g.j=null,delete this.j,cw(this.g),delete this.g,cR.Z.M.call(this)},C(cS,be),C(cT,bf),C(cU,cP),cU.prototype.xa=function(){aD(this.g,"a")},cU.prototype.wa=function(a){aD(this.g,new cS(a))},cU.prototype.va=function(a){aD(this.g,new cT(a))},cU.prototype.ua=function(){aD(this.g,"b")},cQ.prototype.createWebChannel=cQ.prototype.g,cR.prototype.send=cR.prototype.u,cR.prototype.open=cR.prototype.m,cR.prototype.close=cR.prototype.close,a8.NO_ERROR=0,a8.TIMEOUT=8,a8.HTTP_ERROR=6,a9.COMPLETE="complete",bc.EventType=bd,bd.OPEN="a",bd.CLOSE="b",bd.ERROR="c",bd.MESSAGE="d",aC.prototype.listen=aC.prototype.N,ch.prototype.listenOnce=ch.prototype.O,ch.prototype.getLastError=ch.prototype.La,ch.prototype.getLastErrorCode=ch.prototype.Da,ch.prototype.getStatus=ch.prototype.ba,ch.prototype.getResponseJson=ch.prototype.Qa,ch.prototype.getResponseText=ch.prototype.ga,ch.prototype.send=ch.prototype.ea;var cV=s.createWebChannelTransport=function(){return new cQ},cW=s.getStatEventTarget=function(){return a1()},cX=s.ErrorCode=a8,cY=s.EventType=a9,cZ=s.Event=a_,c$=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},c_=s.FetchXmlHttpFactory=ca,c0=s.WebChannel=bc,c1=s.XhrIo=ch,c2=c(3454);let c3="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class c4{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}c4.UNAUTHENTICATED=new c4(null),c4.GOOGLE_CREDENTIALS=new c4("google-credentials-uid"),c4.FIRST_PARTY=new c4("first-party-uid"),c4.MOCK_USER=new c4("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let c5="9.9.2",c6=new p.Yd("@firebase/firestore");function c7(){return c6.logLevel}function c8(a,...b){if(c6.logLevel<=p.in.DEBUG){let c=b.map(db);c6.debug(`Firestore (${c5}): ${a}`,...c)}}function c9(a,...b){if(c6.logLevel<=p.in.ERROR){let c=b.map(db);c6.error(`Firestore (${c5}): ${a}`,...c)}}function da(a,...b){if(c6.logLevel<=p.in.WARN){let c=b.map(db);c6.warn(`Firestore (${c5}): ${a}`,...c)}}function db(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function dc(a="Unexpected state"){let b=`FIRESTORE (${c5}) INTERNAL ASSERTION FAILED: `+a;throw c9(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends q.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class df{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dg{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(c4.UNAUTHENTICATED))}shutdown(){}}class di{constructor(a){this.t=a,this.currentUser=c4.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new df;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new df,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{c8("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(c8("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new df)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(c8("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||dc(),new dg(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||dc(),new c4(b)}}class dj{constructor(a,b,c){this.type="FirstParty",this.user=c4.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",b);let d=a.auth.getAuthHeaderValueForFirstParty([]);d&&this.headers.set("Authorization",d),c&&this.headers.set("X-Goog-Iam-Authorization-Token",c)}}class dk{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new dj(this.h,this.l,this.m))}start(a,b){a.enqueueRetryable(()=>b(c4.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dl{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dm{constructor(a){this.g=a,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(a,b){let c=a=>{null!=a.error&&c8("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.p;return this.p=a.token,c8("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{c8("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.g.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.g.getImmediate({optional:!0});a?d(a):c8("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||dc(),this.p=a.token,new dl(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function dn(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dp{static I(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=dn(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function dq(a,b){return a<b?-1:a>b?1:0}function dr(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function ds(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class dt{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new de(dd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new de(dd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return dt.fromMillis(Date.now())}static fromDate(a){return dt.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new dt(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?dq(this.nanoseconds,a.nanoseconds):dq(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class du{constructor(a){this.timestamp=a}static fromTimestamp(a){return new du(a)}static min(){return new du(new dt(0,0))}static max(){return new du(new dt(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class dv{constructor(a,b,c){void 0===b?b=0:b>a.length&&dc(),void 0===c?c=a.length-b:c>a.length-b&&dc(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===dv.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof dv?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class dw extends dv{construct(a,b,c){return new dw(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new de(dd.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new dw(b)}static emptyPath(){return new dw([])}}let dx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dy extends dv{construct(a,b,c){return new dy(a,b,c)}static isValidIdentifier(a){return dx.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dy.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dy(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new de(dd.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new de(dd.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new de(dd.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new de(dd.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new dy(b)}static emptyPath(){return new dy([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class dz{constructor(a){this.path=a}static fromPath(a){return new dz(dw.fromString(a))}static fromName(a){return new dz(dw.fromString(a).popFirst(5))}static empty(){return new dz(dw.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===dw.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return dw.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new dz(new dw(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class dA{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function dB(a){return a.fields.find(a=>2===a.kind)}function dC(a){return a.fields.filter(a=>2!==a.kind)}dA.UNKNOWN_ID=-1;class dD{constructor(a,b){this.fieldPath=a,this.kind=b}}function dE(a,b){let c=dy.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:dq(a.kind,b.kind)}class dF{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new dF(0,dI.min())}}function dG(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=du.fromTimestamp(1e9===d?new dt(c+1,0):new dt(c,d));return new dI(e,dz.empty(),b)}function dH(a){return new dI(a.readTime,a.key,-1)}class dI{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new dI(du.min(),dz.empty(),-1)}static max(){return new dI(du.max(),dz.empty(),-1)}}function dJ(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=dz.comparator(a.documentKey,b.documentKey))?c:dq(a.largestBatchId,b.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dK="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function dM(a){if(a.code!==dd.FAILED_PRECONDITION||a.message!==dK)throw a;c8("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class dN{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&dc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new dN((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof dN?b:dN.resolve(b)}catch(c){return dN.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):dN.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):dN.reject(b)}static resolve(a){return new dN((b,c)=>{b(a)})}static reject(a){return new dN((b,c)=>{c(a)})}static waitFor(a){return new dN((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=dN.resolve(!1);for(let c of a)b=b.next(a=>a?dN.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new dN((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new dN((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class dO{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.T=new df,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{b.error?this.T.reject(new dR(a,b.error)):this.T.resolve()},this.transaction.onerror=b=>{let c=dW(b.target.error);this.T.reject(new dR(a,c))}}static open(a,b,c,d){try{return new dO(b,a.transaction(d,c))}catch(e){throw new dR(b,e)}}get A(){return this.T.promise}abort(a){a&&this.T.reject(a),this.aborted||(c8("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new dT(b)}}class dP{constructor(a,b,c){this.name=a,this.version=b,this.P=c,12.2===dP.v(getUA())&&c9("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return c8("SimpleDb","Removing database:",a),dU(window.indexedDB.deleteDatabase(a)).toPromise()}static V(){if(!isIndexedDBAvailable())return!1;if(dP.S())return!0;let a=getUA(),b=dP.v(a),c=0<b&&b<10,d=dP.D(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static S(){var a;return void 0!==c2&&"YES"===(null===(a=c2.env)|| void 0===a?void 0:a.C)}static N(a,b){return a.store(b)}static v(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static D(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async k(a){return this.db||(c8("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new dR(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new de(dd.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new de(dd.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new dR(a,d))},d.onupgradeneeded=a=>{c8("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.P.M(b,d.transaction,a.oldVersion,this.version).next(()=>{c8("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.O&&(this.db.onversionchange=a=>this.O(a)),this.db}F(a){this.O=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.k(a);let g=dO.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.R(),a)).catch(a=>(g.abort(a),dN.reject(a))).toPromise();return h.catch(()=>{}),await g.A,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(c8("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dQ{constructor(a){this.$=a,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(a){this.$=a}done(){this.B=!0}q(a){this.L=a}delete(){return dU(this.$.delete())}}class dR extends null{constructor(a,b){super(dd.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function dS(a){return"IndexedDbTransactionError"===a.name}class dT{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(c8("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(c8("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),dU(c)}add(a){return c8("SimpleDb","ADD",this.store.name,a,a),dU(this.store.add(a))}get(a){return dU(this.store.get(a)).next(b=>(void 0===b&&(b=null),c8("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return c8("SimpleDb","DELETE",this.store.name,a),dU(this.store.delete(a))}count(){return c8("SimpleDb","COUNT",this.store.name),dU(this.store.count())}K(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.G(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new dN((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}j(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new dN((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}W(a,b){c8("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.H=!1;let d=this.cursor(c);return this.G(d,(a,b,c)=>c.delete())}J(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.G(d,b)}Y(a){let b=this.cursor({});return new dN((c,d)=>{b.onerror=a=>{let b=dW(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}G(a,b){let c=[];return new dN((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new dQ(e),g=b(e.primaryKey,e.value,f);if(g instanceof dN){let h=g.catch(a=>(f.done(),dN.reject(a)));c.push(h)}f.isDone?d():null===f.U?e.continue():e.continue(f.U)}}).next(()=>dN.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.H?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function dU(a){return new dN((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=dW(a.target.error);c(b)}})}let dV=null;function dW(a){let b=dP.v(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new de("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dV||(dV=!0,setTimeout(()=>{throw d},0)),d}}return a}class dX{constructor(a,b){this.asyncQueue=a,this.X=b,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(a){c8("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{c8("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(a){dS(a)?c8("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await dM(a)}await this.Z(1)})}}class dY{constructor(a,b){this.localStore=a,this.persistence=b}async tt(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.et(b,a))}et(a,b){let c=new Set,d=b,e=!0;return dN.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return c8("IndexBackiller",`Processing collection: ${b}`),this.nt(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}nt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.st(d,c)).next(c=>(c8("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}st(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=dH(b);dJ(d,c)>0&&(c=d)}),new dI(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class dZ{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.it(a),this.rt=a=>b.writeSequenceNumber(a))}it(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.rt&&this.rt(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d$(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function d_(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function d0(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
dZ.ot=-1;class d1{constructor(a,b){this.comparator=a,this.root=b||d3.EMPTY}insert(a,b){return new d1(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,d3.BLACK,null,null))}remove(a){return new d1(this.comparator,this.root.remove(a,this.comparator).copy(null,null,d3.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new d2(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new d2(this.root,a,this.comparator,!1)}getReverseIterator(){return new d2(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new d2(this.root,a,this.comparator,!0)}}class d2{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class d3{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:d3.RED,this.left=null!=d?d:d3.EMPTY,this.right=null!=e?e:d3.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new d3(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return d3.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return d3.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,d3.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,d3.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw dc();let a=this.left.check();if(a!==this.right.check())throw dc();return a+(this.isRed()?0:1)}}d3.EMPTY=null,d3.RED=!0,d3.BLACK=!1,d3.EMPTY=new class{constructor(){this.size=0}get key(){throw dc()}get value(){throw dc()}get color(){throw dc()}get left(){throw dc()}get right(){throw dc()}copy(a,b,c,d,e){return this}insert(a,b,c){return new d3(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class d4{constructor(a){this.comparator=a,this.data=new d1(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new d5(this.data.getIterator())}getIteratorFrom(a){return new d5(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof d4)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new d4(this.comparator);return b.data=a,b}}class d5{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function d6(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class d7{constructor(a){this.fields=a,a.sort(dy.comparator)}static empty(){return new d7([])}unionWith(a){let b=new d4(dy.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new d7(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return dr(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class d8{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new d8(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new d8(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return dq(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}d8.EMPTY_BYTE_STRING=new d8("");let d9=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(a){var b,c;if(!a&&dc(),"string"==typeof a){let d=0,e=d9.exec(a);if(!e&&dc(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:eb(a.seconds),nanos:eb(a.nanos)}}function eb(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function ec(a){return"string"==typeof a?d8.fromBase64String(a):d8.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function ed(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function ee(a){let b=a.mapValue.fields.__previous_value__;return ed(b)?ee(b):b}function ef(a){let b=ea(a.mapValue.fields.__local_write_time__.timestampValue);return new dt(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eg{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class eh{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new eh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof eh&&a.projectId===this.projectId&&a.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Sentinel value that sorts before any Mutation Batch ID. */ /**
 * Returns whether a variable is either undefined or null.
 */ function ei(a){return null==a}function ej(a){return 0===a&&1/a== -1/0}function ek(a){return"number"==typeof a&&Number.isInteger(a)&&!ej(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},em={nullValue:"NULL_VALUE"};function en(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?ed(a)?4:eA(a)?9007199254740991:10:dc()}function eo(a,b){var c,d,e,f;if(a===b)return!0;let g=en(a);if(g!==en(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return ef(a).isEqual(ef(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=ea(a.timestampValue),d=ea(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,ec(c.bytesValue).isEqual(ec(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,eb(e.geoPointValue.latitude)===eb(f.geoPointValue.latitude)&&eb(e.geoPointValue.longitude)===eb(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return eb(a.integerValue)===eb(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=eb(a.doubleValue),d=eb(b.doubleValue);return c===d?ej(c)===ej(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return dr(a.arrayValue.values||[],b.arrayValue.values||[],eo);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(d$(c)!==d$(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!eo(c[e],d[e])))return!1;return!0}(a,b);default:return dc()}}function ep(a,b){return void 0!==(a.values||[]).find(a=>eo(a,b))}function eq(a,b){if(a===b)return 0;let c=en(a),d=en(b);if(c!==d)return dq(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return dq(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=eb(a.integerValue||a.doubleValue),d=eb(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return er(a.timestampValue,b.timestampValue);case 4:return er(ef(a),ef(b));case 5:return dq(a.stringValue,b.stringValue);case 6:return function(a,b){let c=ec(a),d=ec(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=dq(c[e],d[e]);if(0!==f)return f}return dq(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=dq(eb(a.latitude),eb(b.latitude));return 0!==c?c:dq(eb(a.longitude),eb(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=eq(c[e],d[e]);if(f)return f}return dq(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===el.mapValue&&b===el.mapValue)return 0;if(a===el.mapValue)return 1;if(b===el.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=dq(d[g],f[g]);if(0!==h)return h;let i=eq(c[d[g]],e[f[g]]);if(0!==i)return i}return dq(d.length,f.length)}(a.mapValue,b.mapValue);default:throw dc()}}function er(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return dq(a,b);let c=ea(a),d=ea(b),e=dq(c.seconds,d.seconds);return 0!==e?e:dq(c.nanos,d.nanos)}function es(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=ea(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?ec(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,dz.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=es(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${es(a.fields[e])}`;return c+"}"}(a.mapValue):dc()}function et(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function eu(a){return!!a&&"integerValue"in a}function ev(a){return!!a&&"arrayValue"in a}function ew(a){return!!a&&"nullValue"in a}function ex(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function ey(a){return!!a&&"mapValue"in a}function ez(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return d_(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=ez(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=ez(a.arrayValue.values[d]);return c}return Object.assign({},a)}function eA(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function eB(a){return"nullValue"in a?em:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?et(eh.empty(),dz.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:dc()}function eC(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?et(eh.empty(),dz.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?el:dc()}function eD(a,b){let c=eq(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function eE(a,b){let c=eq(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class eF{constructor(a){this.value=a}static empty(){return new eF({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!ey(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=ez(b)}setAll(a){let b=dy.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=ez(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());ey(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return eo(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];ey(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(d_(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new eF(ez(this.value))}}function eG(a){let b=[];return d_(a.fields,(a,c)=>{let d=new dy([a]);if(ey(c)){let e=eG(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new d7(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class eH{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new eH(a,0,du.min(),du.min(),eF.empty(),0)}static newFoundDocument(a,b,c){return new eH(a,1,b,du.min(),c,0)}static newNoDocument(a,b){return new eH(a,2,b,du.min(),eF.empty(),0)}static newUnknownDocument(a,b){return new eH(a,3,b,du.min(),eF.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=eF.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=eF.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=du.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof eH&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new eH(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class eI{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ut=null}}function eJ(a,b=null,c=[],d=[],e=null,f=null,g=null){return new eI(a,b,c,d,e,f,g)}function eK(a){var b;let c=b=a;if(null===c.ut){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>{var b,c;return(b=a).field.canonicalString()+b.op.toString()+es(c=b.value)}).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),ei(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return es(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return es(b=a)}).join(",")),c.ut=d}return c.ut}function eL(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!e_(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!eo(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!e1(a.startAt,b.startAt)&&e1(a.endAt,b.endAt)}function eM(a){return dz.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function eN(a,b){return a.filters.filter(a=>a instanceof eQ&&a.field.isEqual(b))}function eO(a,b,c){let d=em,e=!0;for(let f of eN(a,b)){let g=em,h=!0;switch(f.op){case"<":case"<=":g=eB(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=em}0>eD({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>eD({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function eP(a,b,c){let d=el,e=!0;for(let f of eN(a,b)){let g=el,h=!0;switch(f.op){case">=":case">":g=eC(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=el}eE({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];eE({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}class eQ extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.ct(a,b,c):new eR(a,b,c):"array-contains"===b?new eV(a,c):"in"===b?new eW(a,c):"not-in"===b?new eX(a,c):"array-contains-any"===b?new eY(a,c):new eQ(a,b,c)}static ct(a,b,c){return"in"===b?new eS(a,c):new eT(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.at(eq(b,this.value)):null!==b&&en(this.value)===en(b)&&this.at(eq(b,this.value))}at(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return dc()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eR extends eQ{constructor(a,b,c){super(a,b,c),this.key=dz.fromName(c.referenceValue)}matches(a){let b=dz.comparator(a.key,this.key);return this.at(b)}}class eS extends eQ{constructor(a,b){super(a,"in",b),this.keys=eU("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class eT extends eQ{constructor(a,b){super(a,"not-in",b),this.keys=eU("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function eU(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>dz.fromName(a.referenceValue))}class eV extends eQ{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return ev(b)&&ep(b.arrayValue,this.value)}}class eW extends eQ{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&ep(this.value.arrayValue,b)}}class eX extends eQ{constructor(a,b){super(a,"not-in",b)}matches(a){if(ep(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!ep(this.value.arrayValue,b)}}class eY extends eQ{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!ev(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>ep(this.value.arrayValue,a))}}class eZ{constructor(a,b){this.position=a,this.inclusive=b}}class e${constructor(a,b="asc"){this.field=a,this.dir=b}}function e_(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function e0(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?dz.comparator(dz.fromName(g.referenceValue),c.key):eq(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function e1(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!eo(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class e2{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.lt=null,this.ft=null,this.startAt,this.endAt}}function e3(a,b,c,d,e,f,g,h){return new e2(a,b,c,d,e,f,g,h)}function e4(a){return new e2(a)}function e5(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function e6(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function e7(a){for(let b of a.filters)if(b.ht())return b.field;return null}function e8(a){return null!==a.collectionGroup}function e9(a){var b;let c=b=a;if(null===c.lt){c.lt=[];let d=e7(c),e=e6(c);if(null!==d&&null===e)d.isKeyField()||c.lt.push(new e$(d)),c.lt.push(new e$(dy.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c.lt.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c.lt.push(new e$(dy.keyField(),h))}}}return c.lt}function fa(a){var b;let c=b=a;if(!c.ft){if("F"===c.limitType)c.ft=eJ(c.path,c.collectionGroup,e9(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of e9(c)){let f="desc"===e.dir?"asc":"desc";d.push(new e$(e.field,f))}let g=c.endAt?new eZ(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new eZ(c.startAt.position,c.startAt.inclusive):null;c.ft=eJ(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.ft}function fb(a,b,c){return new e2(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function fc(a,b){return eL(fa(a),fa(b))&&a.limitType===b.limitType}function fd(a){return`${eK(fa(a))}|lt:${a.limitType}`}function fe(a){var b;let c;return`Query(target=${c=(b=fa(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>{var b,c;return`${(b=a).field.canonicalString()} ${b.op} ${es(c=b.value)}`}).join(", ")}]`),ei(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return es(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return es(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function ff(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):dz.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of a.explicitOrderBy)if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=e0(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,e9(c),d))&&(!c.endAt||!!function(a,b,c){let d=e0(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,e9(c),d)))}function fg(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function fh(a){return(b,c)=>{let d=!1;for(let e of e9(a)){let f=fi(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function fi(a,b,c){let d=a.field.isKeyField()?dz.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?eq(d,e):dc()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return dc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function fj(a,b){if(a.dt){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ej(b)?"-0":b}}function fk(a){return{integerValue:""+a}}function fl(a,b){return ek(b)?fk(b):fj(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class fm{constructor(){this._=void 0}}function fn(a,b,c){return a instanceof fq?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof fr?fs(a,b):a instanceof ft?fu(a,b):function(a,b){let c=fp(a,b),d=fw(c)+fw(a._t);return eu(c)&&eu(a._t)?fk(d):fj(a.wt,d)}(a,b)}function fo(a,b,c){return a instanceof fr?fs(a,b):a instanceof ft?fu(a,b):c}function fp(a,b){var c,d;return a instanceof fv?eu(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class fq extends fm{}class fr extends fm{constructor(a){super(),this.elements=a}}function fs(a,b){let c=fx(b);for(let d of a.elements)c.some(a=>eo(a,d))||c.push(d);return{arrayValue:{values:c}}}class ft extends fm{constructor(a){super(),this.elements=a}}function fu(a,b){let c=fx(b);for(let d of a.elements)c=c.filter(a=>!eo(a,d));return{arrayValue:{values:c}}}class fv extends fm{constructor(a,b){super(),this.wt=a,this._t=b}}function fw(a){return eb(a.integerValue||a.doubleValue)}function fx(a){return ev(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class fy{constructor(a,b){this.field=a,this.transform=b}}class fz{constructor(a,b){this.version=a,this.transformResults=b}}class fA{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new fA}static exists(a){return new fA(void 0,a)}static updateTime(a){return new fA(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function fB(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class fC{}function fD(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new fN(a.key,fA.none()):new fI(a.key,a.data,fA.none());{let c=a.data,d=eF.empty(),e=new d4(dy.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new fJ(a.key,d,new d7(e.toArray()),fA.none())}}function fE(a,b,c){a instanceof fI?function(a,b,c){let d=a.value.clone(),e=fL(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof fJ?function(a,b,c){if(!fB(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=fL(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(fK(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function fF(a,b,c,d){var e,f,g;return a instanceof fI?function(a,b,c,d){if(!fB(a.precondition,b))return c;let e=a.value.clone(),f=fM(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof fJ?function(a,b,c,d){if(!fB(a.precondition,b))return c;let e=fM(a.fieldTransforms,d,b),f=b.data;return(f.setAll(fK(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,fB(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function fG(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=fp(d.transform,e||null);null!=f&&(null===c&&(c=eF.empty()),c.set(d.field,f))}return c||null}function fH(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&dr(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof fr&&f instanceof fr||e instanceof ft&&f instanceof ft?dr(e.elements,f.elements,eo):e instanceof fv&&f instanceof fv?eo(e._t,f._t):e instanceof fq&&f instanceof fq)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class fI extends fC{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class fJ extends fC{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function fK(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function fL(a,b,c){var d;let e=new Map;(d=a.length===c.length)||dc();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,fo(h,i,c[f]))}return e}function fM(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,fn(f,g,b))}return d}class fN extends fC{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fO extends fC{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fP{constructor(a){this.count=a}}function fQ(a){switch(a){default:return dc();case dd.CANCELLED:case dd.UNKNOWN:case dd.DEADLINE_EXCEEDED:case dd.RESOURCE_EXHAUSTED:case dd.INTERNAL:case dd.UNAVAILABLE:case dd.UNAUTHENTICATED:return!1;case dd.INVALID_ARGUMENT:case dd.NOT_FOUND:case dd.ALREADY_EXISTS:case dd.PERMISSION_DENIED:case dd.FAILED_PRECONDITION:case dd.ABORTED:case dd.OUT_OF_RANGE:case dd.UNIMPLEMENTED:case dd.DATA_LOSS:return!0}}function fR(a){if(void 0===a)return c9("GRPC error has no .code"),dd.UNKNOWN;switch(a){case k.OK:return dd.OK;case k.CANCELLED:return dd.CANCELLED;case k.UNKNOWN:return dd.UNKNOWN;case k.DEADLINE_EXCEEDED:return dd.DEADLINE_EXCEEDED;case k.RESOURCE_EXHAUSTED:return dd.RESOURCE_EXHAUSTED;case k.INTERNAL:return dd.INTERNAL;case k.UNAVAILABLE:return dd.UNAVAILABLE;case k.UNAUTHENTICATED:return dd.UNAUTHENTICATED;case k.INVALID_ARGUMENT:return dd.INVALID_ARGUMENT;case k.NOT_FOUND:return dd.NOT_FOUND;case k.ALREADY_EXISTS:return dd.ALREADY_EXISTS;case k.PERMISSION_DENIED:return dd.PERMISSION_DENIED;case k.FAILED_PRECONDITION:return dd.FAILED_PRECONDITION;case k.ABORTED:return dd.ABORTED;case k.OUT_OF_RANGE:return dd.OUT_OF_RANGE;case k.UNIMPLEMENTED:return dd.UNIMPLEMENTED;case k.DATA_LOSS:return dd.DATA_LOSS;default:return dc()}}(l=k||(k={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class fS{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){d_(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return d0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fT=new d1(dz.comparator),fU=new d1(dz.comparator);function fV(...a){let b=fU;for(let c of a)b=b.insert(c.key,c);return b}function fW(a){let b=fU;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function fX(){return fZ()}function fY(){return fZ()}function fZ(){return new fS(a=>a.toString(),(a,b)=>a.isEqual(b))}let f$=new d1(dz.comparator),f_=new d4(dz.comparator);function f0(...a){let b=f_;for(let c of a)b=b.add(c);return b}let f1=new d4(dq);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class f2{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b){let c=new Map;return c.set(a,f3.createSynthesizedTargetChangeForCurrentChange(a,b)),new f2(du.min(),c,f1,fT,f0())}}class f3{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b){return new f3(d8.EMPTY_BYTE_STRING,b,f0(),f0(),f0())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class f4{constructor(a,b,c,d){this.gt=a,this.removedTargetIds=b,this.key=c,this.yt=d}}class f5{constructor(a,b){this.targetId=a,this.It=b}}class f6{constructor(a,b,c=d8.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class f7{constructor(){this.Tt=0,this.Et=ga(),this.At=d8.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(a){a.approximateByteSize()>0&&(this.bt=!0,this.At=a)}St(){let a=f0(),b=f0(),c=f0();return this.Et.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:dc()}}),new f3(this.At,this.Rt,a,b,c)}Dt(){this.bt=!1,this.Et=ga()}Ct(a,b){this.bt=!0,this.Et=this.Et.insert(a,b)}xt(a){this.bt=!0,this.Et=this.Et.remove(a)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class f8{constructor(a){this.Ot=a,this.Ft=new Map,this.$t=fT,this.Bt=f9(),this.Lt=new d4(dq)}Ut(a){for(let b of a.gt)a.yt&&a.yt.isFoundDocument()?this.qt(b,a.yt):this.Kt(b,a.key,a.yt);for(let c of a.removedTargetIds)this.Kt(c,a.key,a.yt)}Gt(a){this.forEachTarget(a,b=>{let c=this.Qt(b);switch(a.state){case 0:this.jt(b)&&c.Vt(a.resumeToken);break;case 1:c.kt(),c.Pt||c.Dt(),c.Vt(a.resumeToken);break;case 2:c.kt(),c.Pt||this.removeTarget(b);break;case 3:this.jt(b)&&(c.Mt(),c.Vt(a.resumeToken));break;case 4:this.jt(b)&&(this.Wt(b),c.Vt(a.resumeToken));break;default:dc()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Ft.forEach((a,c)=>{this.jt(c)&&b(c)})}zt(a){let b=a.targetId,c=a.It.count,d=this.Ht(b);if(d){let e=d.target;if(eM(e)){if(0===c){let f=new dz(e.path);this.Kt(b,f,eH.newNoDocument(f,du.min()))}else{var g;(g=1===c)||dc()}}else this.Jt(b)!==c&&(this.Wt(b),this.Lt=this.Lt.add(b))}}Yt(a){let b=new Map;this.Ft.forEach((c,d)=>{let e=this.Ht(d);if(e){if(c.current&&eM(e.target)){let f=new dz(e.target.path);null!==this.$t.get(f)||this.Xt(d,f)||this.Kt(d,f,eH.newNoDocument(f,a))}c.vt&&(b.set(d,c.St()),c.Dt())}});let c=f0();this.Bt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.Ht(a);return!b||2===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.$t.forEach((b,c)=>c.setReadTime(a));let d=new f2(a,b,this.Lt,this.$t,c);return this.$t=fT,this.Bt=f9(),this.Lt=new d4(dq),d}qt(a,b){if(!this.jt(a))return;let c=this.Xt(a,b.key)?2:0;this.Qt(a).Ct(b.key,c),this.$t=this.$t.insert(b.key,b),this.Bt=this.Bt.insert(b.key,this.Zt(b.key).add(a))}Kt(a,b,c){if(!this.jt(a))return;let d=this.Qt(a);this.Xt(a,b)?d.Ct(b,1):d.xt(b),this.Bt=this.Bt.insert(b,this.Zt(b).delete(a)),c&&(this.$t=this.$t.insert(b,c))}removeTarget(a){this.Ft.delete(a)}Jt(a){let b=this.Qt(a).St();return this.Ot.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Nt(a){this.Qt(a).Nt()}Qt(a){let b=this.Ft.get(a);return b||(b=new f7,this.Ft.set(a,b)),b}Zt(a){let b=this.Bt.get(a);return b||(b=new d4(dq),this.Bt=this.Bt.insert(a,b)),b}jt(a){let b=null!==this.Ht(a);return b||c8("WatchChangeAggregator","Detected inactive target",a),b}Ht(a){let b=this.Ft.get(a);return b&&b.Pt?null:this.Ot.te(a)}Wt(a){this.Ft.set(a,new f7),this.Ot.getRemoteKeysForTarget(a).forEach(b=>{this.Kt(a,b,null)})}Xt(a,b){return this.Ot.getRemoteKeysForTarget(a).has(b)}}function f9(){return new d1(dz.comparator)}function ga(){return new d1(dz.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gb={asc:"ASCENDING",desc:"DESCENDING"},gc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gd{constructor(a,b){this.databaseId=a,this.dt=b}}function ge(a,b){return a.dt?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function gf(a,b){return a.dt?b.toBase64():b.toUint8Array()}function gg(a){var b;return!a&&dc(),du.fromTimestamp(function(a){let b=ea(a);return new dt(b.seconds,b.nanos)}(a))}function gh(a,b){var c;return(c=a,new dw(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function gi(a){var b;let c=dw.fromString(a);return gC(c)||dc(),c}function gj(a,b){return gh(a.databaseId,b.path)}function gk(a,b){let c=gi(b);if(c.get(1)!==a.databaseId.projectId)throw new de(dd.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new de(dd.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new dz(go(c))}function gl(a,b){return gh(a.databaseId,b)}function gm(a){let b=gi(a);return 4===b.length?dw.emptyPath():go(b)}function gn(a){return new dw(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function go(a){var b;return a.length>4&&"documents"===a.get(4)||dc(),a.popFirst(5)}function gp(a,b,c){return{name:gj(a,b),fields:c.value.mapValue.fields}}function gq(a,b,c){let d=gk(a,b.name),e=gg(b.updateTime),f=new eF({mapValue:{fields:b.fields}}),g=eH.newFoundDocument(d,e,f);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}function gr(a,b){var c,d,e,f;let g;if(b instanceof fI)g={update:gp(a,b.key,b.value)};else if(b instanceof fN)g={delete:gj(a,b.key)};else if(b instanceof fJ)g={update:gp(a,b.key,b.data),updateMask:gB(b.fieldMask)};else{if(!(b instanceof fO))return dc();g={verify:gj(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof fq)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fr)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ft)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fv)return{fieldPath:b.field.canonicalString(),increment:c._t};throw dc()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,ge(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:dc())),g}function gs(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?fA.updateTime(gg(c.updateTime)):void 0!==c.exists?fA.exists(c.exists):fA.none():fA.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||dc(),c=new fq}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new fr(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new ft(f)}else"increment"in b?c=new fv(a,b.increment):dc();let g=dy.fromServerFormat(b.fieldPath);return new fy(g,c)})(a,b)):[];if(b.update){b.update.name;let f=gk(a,b.update.name),g=new eF({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new d7(b.map(a=>dy.fromServerFormat(a)))}(b.updateMask);return new fJ(f,g,h,d,e)}return new fI(f,g,d,e)}if(b.delete){let i=gk(a,b.delete);return new fN(i,d)}if(b.verify){let j=gk(a,b.verify);return new fO(j,d)}return dc()}function gt(a,b){return{documents:[gl(a,b.path)]}}function gu(a,b){var c,d,e,f;let g={structuredQuery:{}},h=b.path;null!==b.collectionGroup?(g.parent=gl(a,h),g.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(g.parent=gl(a,h.popLast()),g.structuredQuery.from=[{collectionId:h.lastSegment()}]);let i=function(a){if(0===a.length)return;let b=a.map(a=>(function(a){var b;if("=="===a.op){if(ex(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NAN"}};if(ew(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(ex(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NOT_NAN"}};if(ew(a.value))return{unaryFilter:{field:gx(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gx(a.field),op:(b=a.op,gc[b]),value:a.value}}})(a));return 1===b.length?b[0]:{compositeFilter:{op:"AND",filters:b}}}(b.filters);i&&(g.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:gx((b=a).field),direction:(c=b.dir,gb[c])}})}(b.orderBy);j&&(g.structuredQuery.orderBy=j);let k=(d=a,e=b.limit,d.dt||ei(e)?e:{value:e});return null!==k&&(g.structuredQuery.limit=k),b.startAt&&(g.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(g.structuredQuery.endAt={before:!(f=b.endAt).inclusive,values:f.position}),g}function gv(a){var b,c;let d=gm(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||dc();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=gw(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new e$(gy(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=ei(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new eZ(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new eZ(c,b)}(e.endAt)),e3(d,g,j,i,k,"F",m,n)}function gw(a){return a?void 0!==a.unaryFilter?[gA(a)]:void 0!==a.fieldFilter?[gz(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>gw(a)).reduce((a,b)=>a.concat(b)):dc():[]}function gx(a){return{fieldPath:a.canonicalString()}}function gy(a){return dy.fromServerFormat(a.fieldPath)}function gz(a){return eQ.create(gy(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return dc()}}(a.fieldFilter.op),a.fieldFilter.value)}function gA(a){switch(a.unaryFilter.op){case"IS_NAN":let b=gy(a.unaryFilter.field);return eQ.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=gy(a.unaryFilter.field);return eQ.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=gy(a.unaryFilter.field);return eQ.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=gy(a.unaryFilter.field);return eQ.create(e,"!=",{nullValue:"NULL_VALUE"});default:return dc()}}function gB(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function gC(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function gD(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=gF(b)),b=gE(a.get(c),b);return gF(b)}function gE(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function gF(a){return a+"\x01\x01"}function gG(a){var b,c;let d=a.length;if(d>=2||dc(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||dc(),dw.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&dc(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:dc()}h=i+2}return new dw(f)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function gH(a,b){return[a,gD(b)]}function gI(a,b,c){return[a,gD(b),c]}let gJ={},gK=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gL=[...gK,"documentOverlays"],gM=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gN=gM,gO=[...gN,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gP extends null{constructor(a,b){super(),this.ee=a,this.currentSequenceNumber=b}}function gQ(a,b){var c;let d=c=a;return dP.N(d.ee,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class gR{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&fE(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=fF(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=fF(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=fY();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=fD(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(du.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),f0())}isEqual(a){return this.batchId===a.batchId&&dr(this.mutations,a.mutations,(a,b)=>fH(a,b))&&dr(this.baseMutations,a.baseMutations,(a,b)=>fH(a,b))}}class gS{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||dc();let e=f$,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new gS(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class gT{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class gU{constructor(a,b,c,d,e=du.min(),f=du.min(),g=d8.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new gU(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new gU(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new gU(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class gV{constructor(a){this.ne=a}}function gW(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:gX(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.ne,{name:gj(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:ge(e,f.version.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:gY(b.version)};else{if(!b.isUnknownDocument())return dc();d.unknownDocument={path:c.path.toArray(),version:gY(b.version)}}return d}function gX(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function gY(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function gZ(a){let b=new dt(a.seconds,a.nanoseconds);return du.fromTimestamp(b)}function g$(a,b){let c=(b.baseMutations||[]).map(b=>gs(a.ne,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>gs(a.ne,b)),h=dt.fromMillis(b.localWriteTimeMs);return new gR(b.batchId,h,c,g)}function g_(a){var b,c,d;let e=gZ(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?gZ(a.lastLimboFreeSnapshotVersion):du.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||dc(),g=fa(e4(gm(b.documents[0])))):g=fa(gv(d=a.query)),new gU(g,a.targetId,0,a.lastListenSequenceNumber,e,f,d8.fromBase64String(a.resumeToken))}function g0(a,b){let c=gY(b.snapshotVersion),d=gY(b.lastLimboFreeSnapshotVersion),e;e=eM(b.target)?gt(a.ne,b.target):gu(a.ne,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:eK(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function g1(a){let b=gv({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?fb(b,b.limit,"L"):b}function g2(a,b){return new gT(b.largestBatchId,gs(a.ne,b.overlayMutation))}function g3(a,b){let c=b.path.lastSegment();return[a,gD(b.path.popLast()),c]}function g4(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:gY(d.readTime),documentKey:gD(d.documentKey.path),largestBatchId:d.largestBatchId}}function g5(a){return gQ(a,"bundles")}function g6(a){return gQ(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class g7{constructor(a,b){this.wt=a,this.userId=b}static se(a,b){let c=b.uid||"";return new g7(a,c)}getOverlay(a,b){return g8(a).get(g3(this.userId,b)).next(a=>a?g2(this.wt,a):null)}getOverlays(a,b){let c=fX();return dN.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new gT(b,e);d.push(this.ie(a,f))}),dN.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(gD(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(g8(a).W("collectionPathOverlayIndex",d))}),dN.waitFor(e)}getOverlaysForCollection(a,b,c){let d=fX(),e=gD(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return g8(a).K("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=g2(this.wt,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=fX(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return g8(a).J({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=g2(this.wt,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}ie(a,b){return g8(a).put(function(a,b,c){let[d,e,f]=g3(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:gr(a.ne,c.mutation)}}(this.wt,this.userId,b))}}function g8(a){return gQ(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class g9{constructor(){}re(a,b){this.oe(a,b),b.ue()}oe(a,b){if("nullValue"in a)this.ce(b,5);else if("booleanValue"in a)this.ce(b,10),b.ae(a.booleanValue?1:0);else if("integerValue"in a)this.ce(b,15),b.ae(eb(a.integerValue));else if("doubleValue"in a){let c=eb(a.doubleValue);isNaN(c)?this.ce(b,13):(this.ce(b,15),ej(c)?b.ae(0):b.ae(c))}else if("timestampValue"in a){let d=a.timestampValue;this.ce(b,20),"string"==typeof d?b.he(d):(b.he(`${d.seconds||""}`),b.ae(d.nanos||0))}else if("stringValue"in a)this.le(a.stringValue,b),this.fe(b);else if("bytesValue"in a)this.ce(b,30),b.de(ec(a.bytesValue)),this.fe(b);else if("referenceValue"in a)this._e(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.ce(b,45),b.ae(e.latitude||0),b.ae(e.longitude||0)}else"mapValue"in a?eA(a)?this.ce(b,Number.MAX_SAFE_INTEGER):(this.we(a.mapValue,b),this.fe(b)):"arrayValue"in a?(this.me(a.arrayValue,b),this.fe(b)):dc()}le(a,b){this.ce(b,25),this.ge(a,b)}ge(a,b){b.he(a)}we(a,b){let c=a.fields||{};for(let d of(this.ce(b,55),Object.keys(c)))this.le(d,b),this.oe(c[d],b)}me(a,b){let c=a.values||[];for(let d of(this.ce(b,50),c))this.oe(d,b)}_e(a,b){this.ce(b,37),dz.fromName(a).path.forEach(a=>{this.ce(b,60),this.ge(a,b)})}ce(a,b){a.ae(b)}fe(a){a.ae(2)}}function ha(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function hb(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=ha(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}g9.ye=new g9;class hc{constructor(){this.Oe=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ie(c.value),c=b.next();this.Te()}Ee(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ae(c.value),c=b.next();this.Re()}be(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ie(c);else if(c<2048)this.Ie(960|c>>>6),this.Ie(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ie(480|c>>>12),this.Ie(128|63&c>>>6),this.Ie(128|63&c);else{let d=b.codePointAt(0);this.Ie(240|d>>>18),this.Ie(128|63&d>>>12),this.Ie(128|63&d>>>6),this.Ie(128|63&d)}}this.Te()}Pe(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ae(c);else if(c<2048)this.Ae(960|c>>>6),this.Ae(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c);else{let d=b.codePointAt(0);this.Ae(240|d>>>18),this.Ae(128|63&d>>>12),this.Ae(128|63&d>>>6),this.Ae(128|63&d)}}this.Re()}ve(a){let b=this.Ve(a),c=hb(b);this.Se(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}De(a){let b=this.Ve(a),c=hb(b);this.Se(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(a){this.Se(a.length),this.buffer.set(a,this.position),this.position+=a.length}Me(){return this.buffer.slice(0,this.position)}Ve(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}Ie(a){let b=255&a;0===b?(this.xe(0),this.xe(255)):255===b?(this.xe(255),this.xe(0)):this.xe(b)}Ae(a){let b=255&a;0===b?(this.ke(0),this.ke(255)):255===b?(this.ke(255),this.ke(0)):this.ke(a)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(a){this.Se(1),this.buffer[this.position++]=a}ke(a){this.Se(1),this.buffer[this.position++]=~a}Se(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.Fe=new class{constructor(a){this.Oe=a}de(a){this.Oe.pe(a)}he(a){this.Oe.be(a)}ae(a){this.Oe.ve(a)}ue(){this.Oe.Ce()}}(this.Oe),this.$e=new class{constructor(a){this.Oe=a}de(a){this.Oe.Ee(a)}he(a){this.Oe.Pe(a)}ae(a){this.Oe.De(a)}ue(){this.Oe.Ne()}}(this.Oe)}seed(a){this.Oe.seed(a)}Be(a){return 0===a?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class hd{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Le(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new hd(this.indexId,this.documentKey,this.arrayValue,c)}}function he(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=hf(a.arrayValue,b.arrayValue))?c:0!==(c=hf(a.directionalValue,b.directionalValue))?c:dz.comparator(a.documentKey,b.documentKey)}function hf(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class hg{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ue=a.orderBy,this.qe=[],a.filters)){let c=b;c.ht()?this.Ke=c:this.qe.push(c)}}Ge(a){let b=dB(a);if(void 0!==b&&!this.Qe(b))return!1;let c=dC(a),d=0,e=0;for(;d<c.length&&this.Qe(c[d]);++d);if(d===c.length)return!0;if(void 0!==this.Ke){let f=c[d];if(!this.je(this.Ke,f)||!this.We(this.Ue[e++],f))return!1;++d}for(;d<c.length;++d){let g=c[d];if(e>=this.Ue.length||!this.We(this.Ue[e++],g))return!1}return!0}Qe(a){for(let b of this.qe)if(this.je(b,a))return!0;return!1}je(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}We(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class hh{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new d4(dw.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new d4(dw.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hi=new Uint8Array(0);class hj{constructor(a,b){this.user=a,this.databaseId=b,this.He=new hh,this.Je=new fS(a=>eK(a),(a,b)=>eL(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.He.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.He.add(b)});let e={collectionId:c,parent:gD(d)};return hk(a).put(e)}return dN.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[ds(b),""],!1,!0);return hk(a).K(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(gG(d.parent))}return c})}addFieldIndex(a,b){var c;let d=hm(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=hn(a);return f.next(a=>{g.put(g4(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=hm(a),d=hn(a),e=hl(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=hl(a),d=!0,e=new Map;return dN.forEach(this.Ye(b),b=>this.Xe(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=f0(),f=[];return dN.forEach(e,(d,e)=>{var g;c8("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${eK(b)}`);let h=function(a,b){let c=dB(b);if(void 0===c)return null;for(let d of eN(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of dC(b))for(let e of eN(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of dC(b)){let f=0===e.kind?eO(a,e.fieldPath,a.startAt):eP(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new eZ(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of dC(b)){let f=0===e.kind?eP(a,e.fieldPath,a.endAt):eO(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new eZ(c,d)}(e,d),l=this.Ze(d,e,j),m=this.Ze(d,e,k),n=this.tn(d,e,i),o=this.en(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return dN.forEach(o,d=>c.j(d,b.limit).next(b=>{b.forEach(b=>{let c=dz.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return dN.resolve(null)})}Ye(a){let b=this.Je.get(a);return b||(b=[a],this.Je.set(a,b),b)}en(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.nn(b[k/i]):hi,m=this.sn(a,l,c[k%i],d),n=this.rn(a,l,e[k%i],f),o=g.map(b=>this.sn(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}sn(a,b,c,d){let e=new hd(a,dz.empty(),b,c);return d?e:e.Le()}rn(a,b,c,d){let e=new hd(a,dz.empty(),b,c);return d?e.Le():e}Xe(a,b){let c=new hg(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.Ge(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2;return dN.forEach(this.Ye(b),b=>this.Xe(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new d4(dy.comparator),c=!1;for(let d of a.filters){let e=d;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field))}for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>c)}on(a,b){let c=new hc;for(let d of dC(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.Be(d.kind);g9.ye.re(e,f)}return c.Me()}nn(a){let b=new hc;return g9.ye.re(a,b.Be(0)),b.Me()}un(a,b){let c=new hc;return g9.ye.re(et(this.databaseId,b),c.Be(function(a){let b=dC(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.Me()}tn(a,b,c){if(null===c)return[];let d=[];d.push(new hc);let e=0;for(let f of dC(a)){let g=c[e++];for(let h of d)if(this.cn(b,f.fieldPath)&&ev(g))d=this.an(d,f,g);else{let i=h.Be(f.kind);g9.ye.re(g,i)}}return this.hn(d)}Ze(a,b,c){return this.tn(a,b,c.position)}hn(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].Me();return b}an(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new hc;h.seed(g.Me()),g9.ye.re(f,h.Be(b.kind)),e.push(h)}return e}cn(a,b){return!!a.filters.find(a=>a instanceof eQ&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=hm(a),d=hn(a);return(b?c.K("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.K()).next(a=>{let b=[];return dN.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new dF(b.sequenceNumber,new dI(gZ(b.readTime),new dz(gG(b.documentKey)),b.largestBatchId)):dF.empty(),d=a.fields.map(([a,b])=>new dD(dy.fromServerFormat(a),b));return new dA(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:dq(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=hm(a),e=hn(a);return this.ln(a).next(a=>d.K("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>dN.forEach(b,b=>e.put(g4(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return dN.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?dN.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),dN.forEach(e,c=>this.fn(a,b,c).next(b=>{let e=this.dn(d,c);return b.isEqual(e)?dN.resolve():this._n(a,d,c,b,e)}))))})}wn(a,b,c,d){return hl(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.un(c,b.key),documentKey:b.key.path.toArray()})}mn(a,b,c,d){return hl(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.un(c,b.key),b.key.path.toArray()])}fn(a,b,c){let d=hl(a),e=new d4(he);return d.J({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.un(c,b)])},(a,d)=>{e=e.add(new hd(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}dn(a,b){let c=new d4(he),d=this.on(b,a);if(null==d)return c;let e=dB(b);if(null!=e){let f=a.data.field(e.fieldPath);if(ev(f))for(let g of f.arrayValue.values||[])c=c.add(new hd(b.indexId,a.key,this.nn(g),d))}else c=c.add(new hd(b.indexId,a.key,hi,d));return c}_n(a,b,c,d,e){c8("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=d6(f),i=d6(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=d6(g)):k?(e(h),h=d6(f)):(h=d6(f),i=d6(g))}}(d,e,he,d=>{f.push(this.wn(a,b,c,d))},d=>{f.push(this.mn(a,b,c,d))}),dN.waitFor(f)}ln(a){let b=1;return hn(a).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>he(a,b)).filter((a,b,c)=>!b||0!==he(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=he(e,a),g=he(e,b);if(0===f)d[0]=a.Le();else if(f>0&&g<0)d.push(e),d.push(e.Le());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2)h.push(IDBKeyRange.bound([d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,hi,[]],[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,hi,[]]));return h}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(ho)}getMinOffset(a,b){return dN.mapArray(this.Ye(b),b=>this.Xe(a,b).next(a=>a||dc())).next(ho)}}function hk(a){return gQ(a,"collectionParents")}function hl(a){return gQ(a,"indexEntries")}function hm(a){return gQ(a,"indexConfiguration")}function hn(a){return gQ(a,"indexState")}function ho(a){var b;(b=0!==a.length)||dc();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>dJ(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new dI(c.readTime,c.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hq{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new hq(a,hq.DEFAULT_COLLECTION_PERCENTILE,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function hr(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.J({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||dc()}));let j=[];for(let k of c.mutations){let l=gI(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return dN.waitFor(f).next(()=>j)}function hs(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw dc();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ hq.DEFAULT_COLLECTION_PERCENTILE=10,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hq.DEFAULT=new hq(41943040,hq.DEFAULT_COLLECTION_PERCENTILE,hq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hq.DISABLED=new hq(-1,0,0);class ht{constructor(a,b,c,d){this.userId=a,this.wt=b,this.indexManager=c,this.referenceDelegate=d,this.gn={}}static se(a,b,c,d){var e;(e=""!==a.uid)||dc();let f=a.isAuthenticated()?a.uid:"";return new ht(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hv(a).J({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=hw(a),f=hv(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||dc();let i=new gR(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>gr(a.ne,b)),e=c.mutations.map(b=>gr(a.ne,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.wt,this.userId,i),k=[],l=new d4((a,b)=>dq(a.canonicalString(),b.canonicalString()));for(let m of d){let n=gI(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,gJ))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.gn[g]=i.keys()}),dN.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return hv(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||dc(),g$(this.wt,a)):null})}yn(a,b){return this.gn[b]?dN.resolve(this.gn[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.gn[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return hv(a).J({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||dc(),e=g$(this.wt,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return hv(a).J({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return hv(a).K("userMutationsIndex",b).next(a=>a.map(a=>g$(this.wt,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=gH(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return hw(a).J({range:d},(c,d,f)=>{let[g,h,i]=c,j=gG(h);if(g===this.userId&&b.path.isEqual(j))return hv(a).get(i).next(a=>{var b;if(!a)throw dc();a.userId===this.userId||dc(),e.push(g$(this.wt,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new d4(dq),d=[];return b.forEach(b=>{let e=gH(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=hw(a).J({range:f},(a,d,e)=>{let[f,g,h]=a,i=gG(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),dN.waitFor(d).next(()=>this.pn(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=gH(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new d4(dq);return hw(a).J({range:f},(a,b,e)=>{let[f,h,i]=a,j=gG(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.pn(a,g))}pn(a,b){let c=[],d=[];return b.forEach(b=>{d.push(hv(a).get(b).next(a=>{var b;if(null===a)throw dc();a.userId===this.userId||dc(),c.push(g$(this.wt,a))}))}),dN.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return hr(a.ee,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.In(b.batchId)}),dN.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}In(a){delete this.gn[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return dN.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return hw(a).J({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=gG(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||dc()})})}containsKey(a,b){return hu(a,this.userId,b)}Tn(a){return hx(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hu(a,b,c){let d=gH(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return hw(a).J({range:f,H:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function hv(a){return gQ(a,"mutations")}function hw(a){return gQ(a,"documentMutations")}function hx(a){return gQ(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class hy{constructor(a){this.En=a}next(){return this.En+=2,this.En}static An(){return new hy(0)}static Rn(){return new hy(-1)}}function hz(a){return gQ(a,"targets")}function hA(a){return gQ(a,"targetGlobal")}function hB(a){return gQ(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hC([a,b],[c,d]){let e=dq(a,c);return 0===e?dq(b,d):e}class hD{constructor(a){this.Sn=a,this.buffer=new d4(hC),this.Dn=0}Cn(){return++this.Dn}xn(a){let b=[a,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>hC(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class hE{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(a){c8("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){dS(a)?c8("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await dM(a)}await this.kn(3e5)})}}function hF(a,b){var c,d;return hB(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:gD(c.path),sequenceNumber:d}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class hG{constructor(){this.changes=new fS(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,eH.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?dN.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class hH{constructor(a){this.wt=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return hL(a).put(c)}removeEntry(a,b,c){return hL(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],gX(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.qn(a,c)))}getEntry(a,b){let c=eH.newInvalidDocument(b);return hL(a).J({index:"documentKeyIndex",range:IDBKeyRange.only(hM(b))},(a,d)=>{c=this.Kn(b,d)}).next(()=>c)}Gn(a,b){let c={size:0,document:eH.newInvalidDocument(b)};return hL(a).J({index:"documentKeyIndex",range:IDBKeyRange.only(hM(b))},(a,d)=>{c={document:this.Kn(b,d),size:hs(d)}}).next(()=>c)}getEntries(a,b){let c=fT;return this.Qn(a,b,(a,b)=>{let d=this.Kn(a,b);c=c.insert(a,d)}).next(()=>c)}jn(a,b){let c=fT,d=new d1(dz.comparator);return this.Qn(a,b,(a,b)=>{let e=this.Kn(a,b);c=c.insert(a,e),d=d.insert(a,hs(b))}).next(()=>({documents:c,Wn:d}))}Qn(a,b,c){if(b.isEmpty())return dN.resolve();let d=new d4(hO);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(hM(d.first()),hM(d.last())),f=d.getIterator(),g=f.getNext();return hL(a).J({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=dz.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>hO(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.q(hM(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getAllFromCollection(a,b,c){let d=[b.popLast().toArray(),b.lastSegment(),gX(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],e=[b.popLast().toArray(),b.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hL(a).K(IDBKeyRange.bound(d,e,!0)).next(a=>{let b=fT;for(let c of a){let d=this.Kn(dz.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);b=b.insert(d.key,d)}return b})}getAllFromCollectionGroup(a,b,c,d){let e=fT,f=hN(b,c),g=hN(b,dI.max());return hL(a).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.Kn(dz.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new hJ(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return hK(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&dc(),a})}qn(a,b){return hK(a).put("remoteDocumentGlobalKey",b)}Kn(a,b){if(b){let c=function(a,b){let c;if(b.document)c=gq(a.ne,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=dz.fromSegments(b.noDocument.path),e=gZ(b.noDocument.readTime);c=eH.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return dc();{let f=dz.fromSegments(b.unknownDocument.path),g=gZ(b.unknownDocument.version);c=eH.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new dt(a[0],a[1]);return du.fromTimestamp(b)}(b.readTime)),c}(this.wt,b);if(!(c.isNoDocument()&&c.version.isEqual(du.min())))return c}return eH.newInvalidDocument(a)}}function hI(a){return new hH(a)}class hJ extends null{constructor(a,b){super(),this.zn=a,this.trackRemovals=b,this.Hn=new fS(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new d4((a,b)=>dq(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Hn.get(e);if(b.push(this.zn.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=gW(this.zn.wt,f);d=d.add(e.path.popLast());let i=hs(h);c+=i-g.size,b.push(this.zn.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=gW(this.zn.wt,f.convertToNoDocument(du.min()));b.push(this.zn.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.zn.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.zn.updateMetadata(a,c)),dN.waitFor(b)}getFromCache(a,b){return this.zn.Gn(a,b).next(a=>(this.Hn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.zn.jn(a,b).next(({documents:a,Wn:b})=>(b.forEach((b,c)=>{this.Hn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function hK(a){return gQ(a,"remoteDocumentGlobal")}function hL(a){return gQ(a,"remoteDocumentsV14")}function hM(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function hN(a,b){let c=b.documentKey.path.toArray();return[a,gX(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function hO(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=dq(c[f],d[f]))return e;return(e=dq(c.length,d.length))||(e=dq(c[c.length-2],d[d.length-2]))||dq(c[c.length-1],d[d.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class hP{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class hQ{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&fF(c.mutation,a,d7.empty(),dt.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,f0()).next(()=>b))}getLocalViewOfDocuments(a,b,c=f0()){let d=fX();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=fV();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=fX();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,f0()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=fT,f=fZ(),g=fZ();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof fJ)?e=e.insert(b.key,b):void 0!==g&&(f.set(b.key,g.mutation.getFieldMask()),fF(g.mutation,b,g.mutation.getFieldMask(),dt.now()))}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new hP(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=fZ(),d=new d1((a,b)=>a-b),e=f0();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||d7.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||f0()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=fY();j.forEach(a=>{if(!e.has(a)){let d=fD(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return dN.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,dz.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):e8(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):dN.resolve(fX()),g=-1,h=e;return f.next(b=>dN.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?dN.resolve():this.getBaseDocument(a,b,c).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,f0())).next(a=>({batchId:g,changes:fW(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new dz(b)).next(a=>{let b=fV();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=fV();return this.indexManager.getCollectionParents(a,d).next(f=>dN.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new e2(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((a,b)=>{let c=b.getKey();null===d.get(c)&&(d=d.insert(c,eH.newInvalidDocument(c)))});let c=fV();return d.forEach((d,e)=>{let f=a.get(d);void 0!==f&&fF(f.mutation,e,d7.empty(),dt.now()),ff(b,e)&&(c=c.insert(d,e))}),c})}getBaseDocument(a,b,c){return null===c||1===c.mutation.type?this.remoteDocumentCache.getEntry(a,b):dN.resolve(eH.newInvalidDocument(b))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class hR{constructor(){this.overlays=new d1(dz.comparator),this.Xn=new Map}getOverlay(a,b){return dN.resolve(this.overlays.get(b))}getOverlays(a,b){let c=fX();return dN.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.ie(a,b,d)}),dN.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.Xn.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.Xn.delete(c)),dN.resolve()}getOverlaysForCollection(a,b,c){let d=fX(),e=b.length+1,f=new dz(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return dN.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new d1((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=fX(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=fX(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return dN.resolve(i)}ie(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.Xn.get(d.largestBatchId).delete(c.key);this.Xn.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new gT(b,c));let f=this.Xn.get(b);void 0===f&&(f=f0(),this.Xn.set(b,f)),this.Xn.set(b,f.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class hS{constructor(){this.Zn=new d4(hT.ts),this.es=new d4(hT.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(a,b){let c=new hT(a,b);this.Zn=this.Zn.add(c),this.es=this.es.add(c)}ss(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.rs(new hT(a,b))}os(a,b){a.forEach(a=>this.removeReference(a,b))}us(a){let b=new dz(new dw([])),c=new hT(b,a),d=new hT(b,a+1),e=[];return this.es.forEachInRange([c,d],a=>{this.rs(a),e.push(a.key)}),e}cs(){this.Zn.forEach(a=>this.rs(a))}rs(a){this.Zn=this.Zn.delete(a),this.es=this.es.delete(a)}hs(a){let b=new dz(new dw([])),c=new hT(b,a),d=new hT(b,a+1),e=f0();return this.es.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new hT(a,0),c=this.Zn.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class hT{constructor(a,b){this.key=a,this.ls=b}static ts(a,b){return dz.comparator(a.key,b.key)||dq(a.ls,b.ls)}static ns(a,b){return dq(a.ls,b.ls)||dz.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hU{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.fs=1,this.ds=new d4(hT.ts)}checkEmpty(a){return dN.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new gR(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.ds=this.ds.add(new hT(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return dN.resolve(f)}lookupMutationBatch(a,b){return dN.resolve(this._s(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.ws(b+1),d=c<0?0:c;return dN.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return dN.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(a){return dN.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new hT(b,0),d=new hT(b,Number.POSITIVE_INFINITY),e=[];return this.ds.forEachInRange([c,d],a=>{let b=this._s(a.ls);e.push(b)}),dN.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new d4(dq);return b.forEach(a=>{let b=new hT(a,0),d=new hT(a,Number.POSITIVE_INFINITY);this.ds.forEachInRange([b,d],a=>{c=c.add(a.ls)})}),dN.resolve(this.gs(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;dz.isDocumentKey(e)||(e=e.child(""));let f=new hT(new dz(e),0),g=new d4(dq);return this.ds.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a.ls)),!0)},f),dN.resolve(this.gs(g))}gs(a){let b=[];return a.forEach(a=>{let c=this._s(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.ys(b.batchId,"removed")||dc(),this.mutationQueue.shift();let d=this.ds;return dN.forEach(b.mutations,c=>{let e=new hT(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.ds=d})}In(a){}containsKey(a,b){let c=new hT(b,0),d=this.ds.firstAfterOrEqual(c);return dN.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,dN.resolve()}ys(a,b){return this.ws(a)}ws(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}_s(a){let b=this.ws(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class hV{constructor(a){this.ps=a,this.docs=new d1(dz.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.ps(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return dN.resolve(c?c.document.mutableCopy():eH.newInvalidDocument(b))}getEntries(a,b){let c=fT;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():eH.newInvalidDocument(a))}),dN.resolve(c)}getAllFromCollection(a,b,c){let d=fT,e=new dz(b.child("")),f=this.docs.getIteratorFrom(e);for(;f.hasNext();){let{key:g,value:{document:h}}=f.getNext();if(!b.isPrefixOf(g.path))break;g.path.length>b.length+1||0>=dJ(dH(h),c)||(d=d.insert(h.key,h.mutableCopy()))}return dN.resolve(d)}getAllFromCollectionGroup(a,b,c,d){dc()}Is(a,b){return dN.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new hW(this)}getSize(a){return dN.resolve(this.size)}}class hW extends hG{constructor(a){super(),this.zn=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.zn.addEntry(a,d)):this.zn.removeEntry(c)}),dN.waitFor(b)}getFromCache(a,b){return this.zn.getEntry(a,b)}getAllFromCache(a,b){return this.zn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class hX{constructor(a,b){this.bs={},this.overlays={},this.Ps=new dZ(0),this.vs=!1,this.vs=!0,this.referenceDelegate=a(this),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Ts=new fS(a=>eK(a),eL),this.lastRemoteSnapshotVersion=du.min(),this.highestTargetId=0,this.Es=0,this.As=new hS,this.targetCount=0,this.Rs=hy.An()}forEachTarget(a,b){return this.Ts.forEach((a,c)=>b(c)),dN.resolve()}getLastRemoteSnapshotVersion(a){return dN.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return dN.resolve(this.Es)}allocateTargetId(a){return this.highestTargetId=this.Rs.next(),dN.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.Es&&(this.Es=b),dN.resolve()}vn(a){this.Ts.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.Rs=new hy(b),this.highestTargetId=b),a.sequenceNumber>this.Es&&(this.Es=a.sequenceNumber)}addTargetData(a,b){return this.vn(b),this.targetCount+=1,dN.resolve()}updateTargetData(a,b){return this.vn(b),dN.resolve()}removeTargetData(a,b){return this.Ts.delete(b.target),this.As.us(b.targetId),this.targetCount-=1,dN.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.Ts.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.Ts.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),dN.waitFor(e).next(()=>d)}getTargetCount(a){return dN.resolve(this.targetCount)}getTargetData(a,b){let c=this.Ts.get(b)||null;return dN.resolve(c)}addMatchingKeys(a,b,c){return this.As.ss(b,c),dN.resolve()}removeMatchingKeys(a,b,c){this.As.os(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),dN.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.As.us(b),dN.resolve()}getMatchingKeysForTargetId(a,b){let c=this.As.hs(b);return dN.resolve(c)}containsKey(a,b){return dN.resolve(this.As.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.ze=new hh}addToCollectionParentIndex(a,b){return this.ze.add(b),dN.resolve()}getCollectionParents(a,b){return dN.resolve(this.ze.getEntries(b))}addFieldIndex(a,b){return dN.resolve()}deleteFieldIndex(a,b){return dN.resolve()}getDocumentsMatchingTarget(a,b){return dN.resolve(null)}getIndexType(a,b){return dN.resolve(0)}getFieldIndexes(a,b){return dN.resolve([])}getNextCollectionGroupToUpdate(a){return dN.resolve(null)}getMinOffset(a,b){return dN.resolve(dI.min())}getMinOffsetFromCollectionGroup(a,b){return dN.resolve(dI.min())}updateCollectionGroup(a,b,c){return dN.resolve()}updateIndexEntries(a,b){return dN.resolve()}},this.remoteDocumentCache=function(a){return new hV(a)}(a=>this.referenceDelegate.Ss(a)),this.wt=new gV(b),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.wt=a,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(a,b){return dN.resolve(this.Jn.get(b))}saveBundleMetadata(a,b){var c;return this.Jn.set(b.id,{id:(c=b).id,version:c.version,createTime:gg(c.createTime)}),dN.resolve()}getNamedQuery(a,b){return dN.resolve(this.Yn.get(b))}saveNamedQuery(a,b){var c;return this.Yn.set(b.name,{name:(c=b).name,query:g1(c.bundledQuery),readTime:gg(c.readTime)}),dN.resolve()}}(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new hR,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.bs[a.toKey()];return c||(c=new hU(b,this.referenceDelegate),this.bs[a.toKey()]=c),c}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(a,b,c){c8("MemoryPersistence","Starting transaction:",a);let d=new hY(this.Ps.next());return this.referenceDelegate.Cs(),c(d).next(a=>this.referenceDelegate.xs(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Ns(a,b){return dN.or(Object.values(this.bs).map(c=>()=>c.containsKey(a,b)))}}class hY extends dL{constructor(a){super(),this.currentSequenceNumber=a}}class hZ{constructor(a){this.persistence=a,this.ks=new hS,this.Ms=null}static Os(a){return new hZ(a)}get Fs(){if(this.Ms)return this.Ms;throw dc()}addReference(a,b,c){return this.ks.addReference(c,b),this.Fs.delete(c.toString()),dN.resolve()}removeReference(a,b,c){return this.ks.removeReference(c,b),this.Fs.add(c.toString()),dN.resolve()}markPotentiallyOrphaned(a,b){return this.Fs.add(b.toString()),dN.resolve()}removeTarget(a,b){this.ks.us(b.targetId).forEach(a=>this.Fs.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Fs.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}Cs(){this.Ms=new Set}xs(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dN.forEach(this.Fs,c=>{let d=dz.fromPath(c);return this.$s(a,d).next(a=>{a||b.removeEntry(d,du.min())})}).next(()=>(this.Ms=null,b.apply(a)))}updateLimboDocument(a,b){return this.$s(a,b).next(a=>{a?this.Fs.delete(b.toString()):this.Fs.add(b.toString())})}Ss(a){return 0}$s(a,b){return dN.or([()=>dN.resolve(this.ks.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Ns(a,b)])}}function h$(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let h_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class h0{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.js=e,this.window=f,this.document=g,this.Ws=i,this.zs=j,this.Hs=k,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=a=>Promise.resolve(),!h0.V())throw new de(dd.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){var c,d;this.db=a,this.garbageCollector=(c=this,d=b,new class a{constructor(a,b){this.Mn=a,this.params=b}calculateTargetCount(a,b){return this.Mn.On(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return dN.resolve(dZ.ot);let c=new hD(b);return this.Mn.forEachTarget(a,a=>c.xn(a.sequenceNumber)).next(()=>this.Mn.Fn(a,a=>c.xn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.Mn.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.Mn.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(c8("LruGarbageCollector","Garbage collection skipped; disabled"),dN.resolve(hp)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(c8("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hp):this.$n(a,b))}getCacheSize(a){return this.Mn.getCacheSize(a)}$n(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(c8("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),c7()<=LogLevel.DEBUG&&c8("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),dN.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(c,d))}On(a){let b=this.Bn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Bn(a){let b=0;return this.Fn(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Fn(a,b){return this.Ln(a,(a,c)=>b(c))}addReference(a,b,c){return hF(a,c)}removeReference(a,b,c){return hF(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return hF(a,b)}Un(a,b){var c,d;let e;return c=a,d=b,e=!1,hx(c).Y(a=>hu(c,a,d).next(a=>(a&&(e=!0),dN.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Ln(a,(f,g)=>{if(g<=b){let h=this.Un(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,du.min()),hB(a).delete([0,gD(f.path)])))});d.push(h)}}).next(()=>dN.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return hF(a,b)}Ln(a,b){let c=hB(a),d,e=dZ.ot;return c.J({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==dZ.ot&&b(new dz(gG(d)),e),e=g,d=f):e=dZ.ot}).next(()=>{e!==dZ.ot&&b(new dz(gG(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.ei=b+"main",this.wt=new gV(h),this.ni=new dP(this.ei,this.Hs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.wt=a}M(a,b,c,d){var e,f;let g=new dO("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),h$(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=dN.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),h$(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:du.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").K().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return dN.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.Bs(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Ls(g)))),c<7&&d>=7&&(h=h.next(()=>this.Us(g))),c<8&&d>=8&&(h=h.next(()=>this.qs(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.Ks(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.Gs(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.Qs(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Ls(a){let b=0;return a.store("remoteDocuments").J((a,c)=>{b+=hs(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}Bs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.K().next(b=>dN.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.K("userMutationsIndex",d).next(c=>dN.forEach(c,c=>{var d;(d=c.userId===b.userId)||dc();let e=g$(this.wt,c);return hr(a,b.userId,e).next(()=>{})}))}))}Us(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.J((c,e)=>{var f;let g=new dw(c),h=[0,gD(f=g)];d.push(b.get(h).next(c=>{var d;return c?dN.resolve():(d=g,b.put({targetId:0,path:gD(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>dN.waitFor(d))})}qs(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new hh,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:gD(e)})}};return b.store("remoteDocuments").J({H:!0},(a,b)=>{let c=new dw(a);return e(c.popLast())}).next(()=>b.store("documentMutations").J({H:!0},([a,b,c],d)=>{let f=gG(b);return e(f.popLast())}))}Ks(a){let b=a.store("targets");return b.J((a,c)=>{let d=g_(c),e=g0(this.wt,d);return b.put(e)})}Gs(a,b){let c=b.store("remoteDocuments"),d=[];return c.J((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new dz(dw.fromString(e.document.name).popFirst(5)):e.noDocument?dz.fromSegments(e.noDocument.path):e.unknownDocument?dz.fromSegments(e.unknownDocument.path):dc()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>dN.waitFor(d))}Qs(a,b){let c=b.store("mutations"),d=hI(this.wt),e=new hX(hZ.Os,this.wt.ne);return c.K().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:f0();g$(this.wt,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),dN.forEach(c,(a,c)=>{let f=new c4(c),g=g7.se(this.wt,f),h=e.getIndexManager(f),i=ht.se(f,this.wt,h,e.referenceDelegate);return new hQ(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new gP(b,dZ.ot),a).next()})})}}(this.wt)),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.wt=b}allocateTargetId(a){return this.bn(a).next(b=>{let c=new hy(b.highestTargetId);return b.highestTargetId=c.next(),this.Pn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.bn(a).next(a=>du.fromTimestamp(new dt(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.bn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.bn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Pn(a,d)))}addTargetData(a,b){return this.vn(a,b).next(()=>this.bn(a).next(c=>(c.targetCount+=1,this.Vn(b,c),this.Pn(a,c))))}updateTargetData(a,b){return this.vn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>hz(a).delete(b.targetId)).next(()=>this.bn(a)).next(b=>{var c;return b.targetCount>0||dc(),b.targetCount-=1,this.Pn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return hz(a).J((f,g)=>{let h=g_(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>dN.waitFor(e)).next(()=>d)}forEachTarget(a,b){return hz(a).J((a,c)=>{let d=g_(c);b(d)})}bn(a){return hA(a).get("targetGlobalKey").next(a=>{var b;return null!==a||dc(),a})}Pn(a,b){return hA(a).put("targetGlobalKey",b)}vn(a,b){return hz(a).put(g0(this.wt,b))}Vn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.bn(a).next(a=>a.targetCount)}getTargetData(a,b){let c=eK(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return hz(a).J({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=g_(c);eL(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=hB(a);return b.forEach(b=>{let f=gD(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),dN.waitFor(d)}removeMatchingKeys(a,b,c){let d=hB(a);return dN.forEach(b,b=>{let e=gD(b.path);return dN.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=hB(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=hB(a),e=f0();return d.J({range:c,H:!0},(a,b,c)=>{let d=gG(a[1]),f=new dz(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=gD(b.path),d=IDBKeyRange.bound([c],[ds(c)],!1,!0),e=0;return hB(a).J({index:"documentTargetsIndex",H:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}te(a,b){return hz(a).get(b).next(a=>a?g_(a):null)}}(this.referenceDelegate,this.wt),this.remoteDocumentCache=hI(this.wt),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return g5(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:gZ(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return g5(a).put({bundleId:(c=b).id,createTime:gY(gg(c.createTime)),version:c.version})}getNamedQuery(a,b){return g6(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:g1(b.bundledQuery),readTime:gZ(b.readTime)}})}saveNamedQuery(a,b){var c;return g6(a).put({name:(c=b).name,readTime:gY(gg(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===j&&c9("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new de(dd.FAILED_PRECONDITION,h_);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Vs.getHighestSequenceNumber(a))}).then(a=>{this.Ps=new dZ(a,this.Ws)}).then(()=>{this.vs=!0}).catch(a=>(this.ni&&this.ni.close(),Promise.reject(a)))}ci(a){return this.ti=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ni.F(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>h2(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(a).next(a=>{a||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(a)).next(b=>this.isPrimary&&!b?this.li(a).next(()=>!1):!!b&&this.fi(a).next(()=>!0))).catch(a=>{if(dS(a))return c8("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return c8("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.js.enqueueRetryable(()=>this.ti(a)),this.isPrimary=a})}ai(a){return h1(a).get("owner").next(a=>dN.resolve(this.di(a)))}_i(a){return h2(a).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=gQ(a,"clientMetadata");return b.K().next(a=>{let c=this.gi(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return dN.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this.si)for(let b of a)this.si.removeItem(this.yi(b.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(a){return!!a&&a.ownerId===this.clientId}hi(a){return this.zs?dN.resolve(!0):h1(a).get("owner").next(b=>{if(null!==b&&this.mi(b.leaseTimestampMs,5e3)&&!this.pi(b.ownerId)){if(this.di(b)&&this.networkEnabled)return!0;if(!this.di(b)){if(!b.allowTabSynchronization)throw new de(dd.FAILED_PRECONDITION,h_);return!1}}return!(!this.networkEnabled||!this.inForeground)||h2(a).K().next(a=>void 0===this.gi(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&c8("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new gP(a,dZ.ot);return this.li(b).next(()=>this._i(b))}),this.ni.close(),this.Ai()}gi(a,b){return a.filter(a=>this.mi(a.updateTimeMs,b)&&!this.pi(a.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",a=>h2(a).K().next(a=>this.gi(a,18e5).map(a=>a.clientId)))}get started(){return this.vs}getMutationQueue(a,b){return ht.se(a,this.wt,b,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new hj(a,this.wt.ne.databaseId)}getDocumentOverlayCache(a){return g7.se(this.wt,a)}getBundleCache(){return this.Ds}runTransaction(a,b,c){var d;c8("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.Hs)?gO:14===d?gN:13===d?gM:12===d?gL:11===d?gK:void dc(),f;return this.ni.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new gP(d,this.Ps?this.Ps.next():dZ.ot),"readwrite-primary"===b?this.ai(f).next(a=>!!a||this.hi(f)).next(b=>{if(!b)throw c9(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new de(dd.FAILED_PRECONDITION,dK);return c(f)}).next(a=>this.fi(f).next(()=>a)):this.bi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}bi(a){return h1(a).get("owner").next(a=>{if(null!==a&&this.mi(a.leaseTimestampMs,5e3)&&!this.pi(a.ownerId)&&!this.di(a)&&!(this.zs||this.allowTabSynchronization&&a.allowTabSynchronization))throw new de(dd.FAILED_PRECONDITION,h_)})}fi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return h1(a).put("owner",b)}static V(){return dP.V()}li(a){let b=h1(a);return b.get("owner").next(a=>this.di(a)?(c8("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):dN.resolve())}mi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(c9(`Detected an update time that is in the future: ${a} > ${c}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Js=()=>{this.Ii(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(a){var b;try{let c=null!==(null===(b=this.si)|| void 0===b?void 0:b.getItem(this.yi(a)));return c8("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return c9("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(a){c9("Failed to set zombie client id.",a)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(a){}}yi(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function h1(a){return gQ(a,"owner")}function h2(a){return gQ(a,"clientMetadata")}function h3(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class h4{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Pi=c,this.vi=d}static Vi(a,b){let c=f0(),d=f0();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new h4(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class h5{constructor(){this.Si=!1}initialize(a,b){this.Di=a,this.indexManager=b,this.Si=!0}getDocumentsMatchingQuery(a,b,c,d){return this.Ci(a,b).next(e=>e||this.xi(a,b,d,c)).next(c=>c||this.Ni(a,b))}Ci(a,b){if(e5(b))return dN.resolve(null);let c=fa(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=fb(b,null,"F"),c=fa(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=f0(...d);return this.Di.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.ki(b,d);return this.Mi(b,f,e,c.readTime)?this.Ci(a,fb(b,null,"F")):this.Oi(a,f,b,c)}))})))}xi(a,b,c,d){return e5(b)||d.isEqual(du.min())?this.Ni(a,b):this.Di.getDocuments(a,c).next(e=>{let f=this.ki(b,e);return this.Mi(b,f,c,d)?this.Ni(a,b):(c7()<=p.in.DEBUG&&c8("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),fe(b)),this.Oi(a,f,b,dG(d,-1)))})}ki(a,b){let c=new d4(fh(a));return b.forEach((b,d)=>{ff(a,d)&&(c=c.add(d))}),c}Mi(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Ni(a,b){return c7()<=p.in.DEBUG&&c8("QueryEngine","Using full collection scan to execute query:",fe(b)),this.Di.getDocumentsMatchingQuery(a,b,dI.min())}Oi(a,b,c,d){return this.Di.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class h6{constructor(a,b,c,d){this.persistence=a,this.Fi=b,this.wt=d,this.$i=new d1(dq),this.Bi=new fS(a=>eK(a),eL),this.Li=new Map,this.Ui=a.getRemoteDocumentCache(),this.Vs=a.getTargetCache(),this.Ds=a.getBundleCache(),this.qi(c)}qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new hQ(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.$i))}}function h7(a,b,c,d){return new h6(a,b,c,d)}async function h8(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.qi(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=f0();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({Ki:a,removedBatchIds:e,addedBatchIds:f}))})})}function h9(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Vs.getLastRemoteSnapshotVersion(a))}function ia(a,b,c){let d=f0(),e=f0();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=fT;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(du.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):c8("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{Gi:d,Qi:e}})}function ib(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function ic(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Vs.getTargetData(a,b).next(e=>e?(c=e,dN.resolve(c)):d.Vs.allocateTargetId(a).next(e=>(c=new gU(b,e,0,a.currentSequenceNumber),d.Vs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.$i.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.$i=d.$i.insert(a.targetId,a),d.Bi.set(b,a.targetId)),a})}async function id(a,b,c){var d;let e=d=a,f=e.$i.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!dS(g))throw g;c8("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.$i=e.$i.remove(b),e.Bi.delete(f.target)}function ie(a,b,c){var d;let e=d=a,f=du.min(),g=f0();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.Bi.get(c);return void 0!==f?dN.resolve(e.$i.get(f)):e.Vs.getTargetData(b,c)})(e,a,fa(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Vs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Fi.getDocumentsMatchingQuery(a,b,c?f:du.min(),c?g:f0())).next(a=>(ii(e,fg(b),a),{documents:a,ji:g})))}function ig(a,b){var c,d;let e=c=a,f=d=e.Vs,g=e.$i.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.te(a,b).next(a=>a?a.target:null))}function ih(a,b){var c;let d=c=a,e=d.Li.get(b)||du.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Ui.getAllFromCollectionGroup(a,b,dG(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(ii(d,b,a),a))}function ii(a,b,c){let d=du.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Li.set(b,d)}async function ij(a,b,c,d){var e,f;let g=e=a,h=f0(),i=fT;for(let j of c){let k=b.Wi(j.metadata.name);j.document&&(h=h.add(k));let l=b.zi(j);l.setReadTime(b.Hi(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Ui.newChangeBuffer({trackRemovals:!0}),n=await ic(g,(f=d,fa(e4(dw.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>ia(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Vs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Vs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.Gi,b.Qi)).next(()=>b.Gi)))}async function ik(a,b,c=f0()){var d;let e=await ic(a,fa(g1(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=gg(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.Ds.saveNamedQuery(a,b);let g=e.withResumeToken(d8.EMPTY_BYTE_STRING,d);return f.$i=f.$i.insert(g.targetId,g),f.Vs.updateTargetData(a,g).next(()=>f.Vs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Vs.addMatchingKeys(a,c,e.targetId)).next(()=>f.Ds.saveNamedQuery(a,b))})}function il(a,b){return`firestore_clients_${a}_${b}`}function im(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function io(a,b){return`firestore_targets_${a}_${b}`}class ip{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Ji(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new de(d.error.code,d.error.message)),f?new ip(a,b,d.state,e):(c9("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class iq{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Ji(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new de(c.error.code,c.error.message)),e?new iq(a,c.state,d):(c9("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class ir{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Ji(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=f1;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=ek(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new ir(a,e):(c9("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class is{constructor(a,b){this.clientId=a,this.onlineState=b}static Ji(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new is(b.clientId,b.onlineState):(c9("SharedClientState",`Failed to parse online state: ${a}`),null)}}class it{constructor(){this.activeTargetIds=f1}Xi(a){this.activeTargetIds=this.activeTargetIds.add(a)}Zi(a){this.activeTargetIds=this.activeTargetIds.delete(a)}Yi(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class iu{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.js=b,this.persistenceKey=c,this.tr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new d1(dq),this.started=!1,this.ir=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.rr=il(this.persistenceKey,this.tr),this.ur=`firestore_sequence_number_${f=this.persistenceKey}`,this.sr=this.sr.insert(this.tr,new it),this.cr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=`firestore_online_state_${g=this.persistenceKey}`,this.dr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this.er)}static V(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.Ri();for(let b of a){if(b===this.tr)continue;let c=this.getItem(il(this.persistenceKey,b));if(c){let d=ir.Ji(b,c);d&&(this.sr=this.sr.insert(d.clientId,d))}}this._r();let e=this.storage.getItem(this.lr);if(e){let f=this.wr(e);f&&this.mr(f)}for(let g of this.ir)this.nr(g);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.ur,JSON.stringify(a))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(a){let b=!1;return this.sr.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.yr(a,"pending")}updateMutationState(a,b,c){this.yr(a,b,c),this.pr(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(io(this.persistenceKey,a));if(c){let d=iq.Ji(a,c);d&&(b=d.state)}}return this.Ir.Xi(a),this._r(),b}removeLocalQueryTarget(a){this.Ir.Zi(a),this._r()}isLocalQueryTarget(a){return this.Ir.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(io(this.persistenceKey,a))}updateQueryState(a,b,c){this.Tr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.pr(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Er(a)}notifyBundleLoaded(a){this.Ar(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return c8("SharedClientState","READ",a,b),b}setItem(a,b){c8("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){c8("SharedClientState","REMOVE",a),this.storage.removeItem(a)}nr(a){let b=a;if(b.storageArea===this.storage){if(c8("SharedClientState","EVENT",b.key,b.newValue),b.key===this.rr)return void c9("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.cr.test(b.key)){if(null==b.newValue){let a=this.Rr(b.key);return this.br(a,null)}{let c=this.Pr(b.key,b.newValue);if(c)return this.br(c.clientId,c)}}else if(this.ar.test(b.key)){if(null!==b.newValue){let d=this.vr(b.key,b.newValue);if(d)return this.Vr(d)}}else if(this.hr.test(b.key)){if(null!==b.newValue){let e=this.Sr(b.key,b.newValue);if(e)return this.Dr(e)}}else if(b.key===this.lr){if(null!==b.newValue){let f=this.wr(b.newValue);if(f)return this.mr(f)}}else if(b.key===this.ur){let g=function(a){let b=dZ.ot;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||dc(),b=d}catch(e){c9("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==dZ.ot&&this.sequenceNumberHandler(g)}else if(b.key===this.dr){let h=this.Cr(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Nr(a)))}}}else this.ir.push(b)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(a,b,c){let d=new ip(this.currentUser,a,b,c),e=im(this.persistenceKey,this.currentUser,a);this.setItem(e,d.Yi())}pr(a){let b=im(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Er(a){let b={clientId:this.tr,onlineState:a};this.storage.setItem(this.lr,JSON.stringify(b))}Tr(a,b,c){let d=io(this.persistenceKey,a),e=new iq(a,b,c);this.setItem(d,e.Yi())}Ar(a){let b=JSON.stringify(Array.from(a));this.setItem(this.dr,b)}Rr(a){let b=this.cr.exec(a);return b?b[1]:null}Pr(a,b){let c=this.Rr(a);return ir.Ji(c,b)}vr(a,b){let c=this.ar.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return ip.Ji(new c4(e),d,b)}Sr(a,b){let c=this.hr.exec(a),d=Number(c[1]);return iq.Ji(d,b)}wr(a){return is.Ji(a)}Cr(a){return JSON.parse(a)}async Vr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.kr(a.batchId,a.state,a.error);c8("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}Dr(a){return this.syncEngine.Mr(a.targetId,a.state,a.error)}br(a,b){let c=b?this.sr.insert(a,b):this.sr.remove(a),d=this.gr(this.sr),e=this.gr(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Or(f,g).then(()=>{this.sr=c})}mr(a){this.sr.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}gr(a){let b=f1;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class iv{constructor(){this.Fr=new it,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Fr.Xi(a),this.$r[a]||"not-current"}updateQueryState(a,b,c){this.$r[a]=b}removeLocalQueryTarget(a){this.Fr.Zi(a)}isLocalQueryTarget(a){return this.Fr.activeTargetIds.has(a)}clearQueryState(a){delete this.$r[a]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(a){return this.Fr.activeTargetIds.has(a)}start(){return this.Fr=new it,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iw{Br(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class ix{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(a){this.Gr.push(a)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){for(let a of(c8("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Gr))a(0)}Kr(){for(let a of(c8("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Gr))a(1)}static V(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class iz{constructor(a){this.jr=a.jr,this.Wr=a.Wr}zr(a){this.Hr=a}Jr(a){this.Yr=a}onMessage(a){this.Xr=a}close(){this.Wr()}send(a){this.jr(a)}Zr(){this.Hr()}eo(a){this.Yr(a)}no(a){this.Xr(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iA extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.so=b+"://"+a.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(a,b,c,d,e){let f=this.oo(a,b);c8("RestConnection","Sending: ",f,c);let g={};return this.uo(g,d,e),this.co(a,f,g,c).then(a=>(c8("RestConnection","Received: ",a),a),b=>{throw da("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}ao(a,b,c,d,e,f){return this.ro(a,b,c,d,e)}uo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+c5,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}oo(a,b){let c=iy[a];return`${this.so}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}co(a,b,c,d){return new Promise((e,f)=>{let g=new c1;g.listenOnce(cY.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cX.NO_ERROR:let b=g.getResponseJson();c8("Connection","XHR received:",JSON.stringify(b)),e(b);break;case cX.TIMEOUT:c8("Connection",'RPC "'+a+'" timed out'),f(new de(dd.DEADLINE_EXCEEDED,"Request time out"));break;case cX.HTTP_ERROR:let c=g.getStatus();if(c8("Connection",'RPC "'+a+'" failed with status:',c,"response text:",g.getResponseText()),c>0){let d=g.getResponseJson().error;if(d&&d.status&&d.message){let h=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(dd).indexOf(b)>=0?b:dd.UNKNOWN}(d.status);f(new de(h,d.message))}else f(new de(dd.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new de(dd.UNAVAILABLE,"Connection failed."));break;default:dc()}}finally{c8("Connection",'RPC "'+a+'" completed.')}});let h=JSON.stringify(d);g.send(b,"POST",h,c,15)})}ho(a,b,c){let d=[this.so,"/","google.firestore.v1.Firestore","/",a,"/channel"],e=cV(),f=cW(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(g.xmlHttpFactory=new c_({})),this.uo(g.initMessageHeaders,b,c),(0,q.uI)()||(0,q.b$)()||(0,q.d)()||(0,q.w1)()||(0,q.Mn)()||(0,q.ru)()||(g.httpHeadersOverwriteParam="$httpHeaders");let h=d.join("");c8("Connection","Creating WebChannel: "+h,g);let i=e.createWebChannel(h,g),j=!1,l=!1,m=new iz({jr:a=>{l?c8("Connection","Not sending because WebChannel is closed:",a):(j||(c8("Connection","Opening WebChannel transport."),i.open(),j=!0),c8("Connection","WebChannel sending:",a),i.send(a))},Wr:()=>i.close()}),n=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return n(i,c0.EventType.OPEN,()=>{l||c8("Connection","WebChannel transport opened.")}),n(i,c0.EventType.CLOSE,()=>{l||(l=!0,c8("Connection","WebChannel transport closed"),m.eo())}),n(i,c0.EventType.ERROR,a=>{l||(l=!0,da("Connection","WebChannel transport errored:",a),m.eo(new de(dd.UNAVAILABLE,"The operation could not be completed")))}),n(i,c0.EventType.MESSAGE,a=>{var b,c;if(!l){let d=a.data[0];(c=!!d)||dc();let e=d,f=e.error||(null===(b=e[0])|| void 0===b?void 0:b.error);if(f){c8("Connection","WebChannel received error:",f);let g=f.status,h=function(a){let b=k[a];if(void 0!==b)return fR(b)}(g),j=f.message;void 0===h&&(h=dd.INTERNAL,j="Unknown error status: "+g+" with message "+f.message),l=!0,m.eo(new de(h,j)),i.close()}else c8("Connection","WebChannel received:",d),m.no(d)}}),n(f,cZ.STAT_EVENT,a=>{a.stat===c$.PROXY?c8("Connection","Detected buffering proxy"):a.stat===c$.NOPROXY&&c8("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function iB(){return"undefined"!=typeof window?window:null}function iC(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iD(a){return new gd(a,!0)}class iE{constructor(a,b,c=1e3,d=1.5,e=6e4){this.js=a,this.timerId=b,this.lo=c,this.fo=d,this._o=e,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(a){this.cancel();let b=Math.floor(this.wo+this.To()),c=Math.max(0,Date.now()-this.yo),d=Math.max(0,b-c);d>0&&c8("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.wo} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,d,()=>(this.yo=Date.now(),a())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class iF{constructor(a,b,c,d,e,f,g,h){this.js=a,this.Ao=c,this.Ro=d,this.bo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new iE(a,b)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(a){this.Fo(),this.stream.send(a)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(a,b){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==a?this.So.reset():b&&b.code===dd.RESOURCE_EXHAUSTED?(c9(b.toString()),c9("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):b&&b.code===dd.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.Jr(b)}Bo(){}auth(){this.state=1;let a=this.Lo(this.Po),b=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.Po===b&&this.Uo(a,c)},b=>{a(()=>{let a=new de(dd.UNKNOWN,"Fetching auth token failed: "+b.message);return this.qo(a)})})}Uo(a,b){let c=this.Lo(this.Po);this.stream=this.Ko(a,b),this.stream.zr(()=>{c(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(a=>{c(()=>this.qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(a){return c8("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Lo(a){return b=>{this.js.enqueueAndForget(()=>this.Po===a?b():(c8("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iG extends iF{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.wt=e}Ko(a,b){return this.bo.ho("Listen",a,b)}onMessage(a){this.So.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:dc(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.dt?(void 0===f||"string"==typeof f||dc(),d8.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||dc(),d8.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?dd.UNKNOWN:fR(a.code);return new de(b,a.message||"")}(l);c=new f6(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=gk(a,n.document.name),p=gg(n.document.updateTime),q=new eF({mapValue:{fields:n.document.fields}}),r=eH.newFoundDocument(o,p,q),s=n.targetIds||[],t=n.removedTargetIds||[];c=new f4(s,t,r.key,r)}else if("documentDelete"in b){b.documentDelete;let u=b.documentDelete;u.document;let v=gk(a,u.document),w=u.readTime?gg(u.readTime):du.min(),x=eH.newNoDocument(v,w),y=u.removedTargetIds||[];c=new f4([],y,x.key,x)}else if("documentRemove"in b){b.documentRemove;let z=b.documentRemove;z.document;let A=gk(a,z.document),B=z.removedTargetIds||[];c=new f4([],B,A,null)}else{if(!("filter"in b))return dc();{b.filter;let C=b.filter;C.targetId;let D=C.count||0,E=new fP(D),F=C.targetId;c=new f5(F,E)}}return c}(this.wt,a),c=function(a){if(!("targetChange"in a))return du.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?du.min():b.readTime?gg(b.readTime):du.min()}(a);return this.listener.Go(b,c)}Qo(a){let b={};b.database=gn(this.wt),b.addTarget=function(a,b){let c,d=b.target;return(c=eM(d)?{documents:gt(a,d)}:{query:gu(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0?c.resumeToken=gf(a,b.resumeToken):b.snapshotVersion.compareTo(du.min())>0&&(c.readTime=ge(a,b.snapshotVersion.toTimestamp())),c}(this.wt,a);let c=function(a,b){let c=function(a,b){switch(b){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return dc()}}(0,b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.wt,a);c&&(b.labels=c),this.Oo(b)}jo(a){let b={};b.database=gn(this.wt),b.removeTarget=a,this.Oo(b)}}class iH extends iF{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.wt=e,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(a,b){return this.bo.ho("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&dc(),this.lastStreamToken=a.streamToken,this.Wo){this.So.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||dc(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?gg(b.updateTime):gg(c)).isEqual(du.min())&&(e=gg(c)),new fz(e,b.transformResults||[])})):[]),h=gg(a.commitTime);return this.listener.Jo(h,g)}return a.writeResults&&0!==a.writeResults.length&&dc(),this.Wo=!0,this.listener.Yo()}Xo(){let a={};a.database=gn(this.wt),this.Oo(a)}Ho(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>gr(this.wt,a))};this.Oo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class iI extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.bo=c,this.wt=d,this.Zo=!1}tu(){if(this.Zo)throw new de(dd.FAILED_PRECONDITION,"The client has already been terminated.")}ro(a,b,c){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.bo.ro(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(dd.UNKNOWN,a.toString())})}ao(a,b,c,d){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.bo.ao(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(dd.UNKNOWN,a.toString())})}terminate(){this.Zo=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iJ{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=e,this.du.Br(a=>{c.enqueueAndForget(async()=>{iS(this)&&(c8("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c.lu.add(4),await iL(c),c._u.set("Unknown"),c.lu.delete(4),await iK(c)}(this))})}),this._u=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(a){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.ru("Offline")))}set(a){this.cu(),this.eu=0,"Online"===a&&(this.su=!1),this.ru(a)}ru(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}ou(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(c9(b),this.su=!1):c8("OnlineStateTracker",b)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}(c,d)}}async function iK(a){if(iS(a))for(let b of a.fu)await b(!0)}async function iL(a){for(let b of a.fu)await b(!1)}function iM(a,b){var c;let d=c=a;d.hu.has(b.targetId)||(d.hu.set(b.targetId,b),iR(d)?iQ(d):i8(d).Co()&&iO(d,b))}function iN(a,b){var c;let d=c=a,e=i8(d);d.hu.delete(b),e.Co()&&iP(d,b),0===d.hu.size&&(e.Co()?e.ko():iS(d)&&d._u.set("Unknown"))}function iO(a,b){a.wu.Nt(b.targetId),i8(a).Qo(b)}function iP(a,b){a.wu.Nt(b),i8(a).jo(b)}function iQ(a){a.wu=new f8({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),te:b=>a.hu.get(b)||null}),i8(a).start(),a._u.iu()}function iR(a){return iS(a)&&!i8(a).Do()&&a.hu.size>0}function iS(a){var b;return 0===(b=a).lu.size}function iT(a){a.wu=void 0}async function iU(a){a.hu.forEach((b,c)=>{iO(a,b)})}async function iV(a,b){iT(a),iR(a)?(a._u.uu(b),iQ(a)):a._u.set("Unknown")}async function iW(a,b,c){if(a._u.set("Online"),b instanceof f6&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.hu.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.hu.delete(d),a.wu.removeTarget(d))}(a,b)}catch(d){c8("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await iX(a,d)}else if(b instanceof f4?a.wu.Ut(b):b instanceof f5?a.wu.zt(b):a.wu.Gt(b),!c.isEqual(du.min()))try{let e=await h9(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.wu.Yt(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.hu.get(d);e&&a.hu.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach(b=>{let c=a.hu.get(b);if(!c)return;a.hu.set(b,c.withResumeToken(d8.EMPTY_BYTE_STRING,c.snapshotVersion)),iP(a,b);let d=new gU(c.target,b,1,c.sequenceNumber);iO(a,d)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){c8("RemoteStore","Failed to raise snapshot:",f),await iX(a,f)}}async function iX(a,b,c){if(!dS(b))throw b;a.lu.add(1),await iL(a),a._u.set("Offline"),c||(c=()=>h9(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{c8("RemoteStore","Retrying IndexedDB access"),await c(),a.lu.delete(1),await iK(a)})}function iY(a,b){return b().catch(c=>iX(a,c,b))}async function iZ(a){var b;let c=b=a,d=i9(c),e=c.au.length>0?c.au[c.au.length-1].batchId:-1;for(;i$(c);)try{let f=await ib(c.localStore,e);if(null===f){0===c.au.length&&d.ko();break}e=f.batchId,i_(c,f)}catch(g){await iX(c,g)}i0(c)&&i1(c)}function i$(a){return iS(a)&&a.au.length<10}function i_(a,b){a.au.push(b);let c=i9(a);c.Co()&&c.zo&&c.Ho(b.mutations)}function i0(a){return iS(a)&&!i9(a).Do()&&a.au.length>0}function i1(a){i9(a).start()}async function i2(a){i9(a).Xo()}async function i3(a){let b=i9(a);for(let c of a.au)b.Ho(c.mutations)}async function i4(a,b,c){let d=a.au.shift(),e=gS.from(d,b,c);await iY(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await iZ(a)}async function i5(a,b){b&&i9(a).zo&&await async function(a,b){var c;if(fQ(c=b.code)&&c!==dd.ABORTED){let d=a.au.shift();i9(a).No(),await iY(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await iZ(a)}}(a,b),i0(a)&&i1(a)}async function i6(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),c8("RemoteStore","RemoteStore received new credentials");let e=iS(d);d.lu.add(3),await iL(d),e&&d._u.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d.lu.delete(3),await iK(d)}async function i7(a,b){var c;let d=c=a;b?(d.lu.delete(2),await iK(d)):b||(d.lu.add(2),await iL(d),d._u.set("Unknown"))}function i8(a){return a.mu||(a.mu=function(a,b,c){var d;let e=d=a;return e.tu(),new iG(b,e.bo,e.authCredentials,e.appCheckCredentials,e.wt,c)}(a.datastore,a.asyncQueue,{zr:iU.bind(null,a),Jr:iV.bind(null,a),Go:iW.bind(null,a)}),a.fu.push(async b=>{b?(a.mu.No(),iR(a)?iQ(a):a._u.set("Unknown")):(await a.mu.stop(),iT(a))})),a.mu}function i9(a){return a.gu||(a.gu=function(a,b,c){var d;let e=d=a;return e.tu(),new iH(b,e.bo,e.authCredentials,e.appCheckCredentials,e.wt,c)}(a.datastore,a.asyncQueue,{zr:i2.bind(null,a),Jr:i5.bind(null,a),Yo:i3.bind(null,a),Jo:i4.bind(null,a)}),a.fu.push(async b=>{b?(a.gu.No(),await iZ(a)):(await a.gu.stop(),a.au.length>0&&(c8("RemoteStore",`Stopping write stream with ${a.au.length} pending writes`),a.au=[]))})),a.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class ja{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new df,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new ja(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new de(dd.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jb(a,b){if(c9("AsyncQueue",`${b}: ${a}`),dS(a))return new de(dd.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class jc{constructor(a){this.comparator=a?(b,c)=>a(b,c)||dz.comparator(b.key,c.key):(a,b)=>dz.comparator(a.key,b.key),this.keyedMap=fV(),this.sortedSet=new d1(this.comparator)}static emptySet(a){return new jc(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof jc)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new jc;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class jd{constructor(){this.yu=new d1(dz.comparator)}track(a){let b=a.doc.key,c=this.yu.get(b);c?0!==a.type&&3===c.type?this.yu=this.yu.insert(b,a):3===a.type&&1!==c.type?this.yu=this.yu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.yu=this.yu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.yu=this.yu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.yu=this.yu.remove(b):1===a.type&&2===c.type?this.yu=this.yu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.yu=this.yu.insert(b,{type:2,doc:a.doc}):dc():this.yu=this.yu.insert(b,a)}pu(){let a=[];return this.yu.inorderTraversal((b,c)=>{a.push(c)}),a}}class je{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(a,b,c,d){let e=[];return b.forEach(a=>{e.push({type:0,doc:a})}),new je(a,b,jc.emptySet(b),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&fc(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class jf{constructor(){this.Iu=void 0,this.listeners=[]}}class jg{constructor(){this.queries=new fS(a=>fd(a),fc),this.onlineState="Unknown",this.Tu=new Set}}async function jh(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new jf),f)try{g.Iu=await d.onListen(e)}catch(h){let i=jb(h,`Initialization of query '${fe(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.Eu(d.onlineState),g.Iu&&b.Au(g.Iu)&&jl(d)}async function ji(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function jj(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.Au(f)&&(e=!0);h.Iu=f}}e&&jl(d)}function jk(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function jl(a){a.Tu.forEach(a=>{a.next()})}class jm{constructor(a,b,c){this.query=a,this.Ru=b,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=c||{}}Au(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new je(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let d=!1;return this.bu?this.vu(a)&&(this.Ru.next(a),d=!0):this.Vu(a,this.onlineState)&&(this.Su(a),d=!0),this.Pu=a,d}onError(a){this.Ru.error(a)}Eu(a){this.onlineState=a;let b=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,a)&&(this.Su(this.Pu),b=!0),b}Vu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Du||!c)&&(!a.docs.isEmpty()||"Offline"===b)}vu(a){if(a.docChanges.length>0)return!0;let b=this.Pu&&this.Pu.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}Su(a){a=je.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.bu=!0,this.Ru.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class jn{constructor(a,b){this.payload=a,this.byteLength=b}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class jo{constructor(a){this.wt=a}Wi(a){return gk(this.wt,a)}zi(a){return a.metadata.exists?gq(this.wt,a.document,!1):eH.newNoDocument(this.Wi(a.metadata.name),this.Hi(a.metadata.readTime))}Hi(a){return gg(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jp{constructor(a){this.key=a}}class jq{constructor(a){this.key=a}}class jr{constructor(a,b){this.query=a,this.Fu=b,this.$u=null,this.current=!1,this.Bu=f0(),this.mutatedKeys=f0(),this.Lu=fh(a),this.Uu=new jc(this.Lu)}get qu(){return this.Fu}Ku(a,b){let c=b?b.Gu:new jd,d=b?b.Uu:this.Uu,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=ff(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.Qu(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.Lu(k,h)>0||i&&0>this.Lu(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{Uu:f,Gu:c,Mi:g,mutatedKeys:e}}Qu(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.Uu;this.Uu=a.Uu,this.mutatedKeys=a.mutatedKeys;let e=a.Gu.pu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dc()}};return c(a)-c(b)})(a.type,b.type)||this.Lu(a.doc,b.doc)),this.ju(c);let f=b?this.Wu():[],g=0===this.Bu.size&&this.current?1:0,h=g!==this.$u;return(this.$u=g,0!==e.length||h)?{snapshot:new je(this.query,a.Uu,d,e,a.mutatedKeys,0===g,h,!1),zu:f}:{zu:f}}Eu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new jd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(a){return!this.Fu.has(a)&&!!this.Uu.has(a)&&!this.Uu.get(a).hasLocalMutations}ju(a){a&&(a.addedDocuments.forEach(a=>this.Fu=this.Fu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Fu=this.Fu.delete(a)),this.current=a.current)}Wu(){if(!this.current)return[];let a=this.Bu;this.Bu=f0(),this.Uu.forEach(a=>{this.Hu(a.key)&&(this.Bu=this.Bu.add(a.key))});let b=[];return a.forEach(a=>{this.Bu.has(a)||b.push(new jq(a))}),this.Bu.forEach(c=>{a.has(c)||b.push(new jp(c))}),b}Ju(a){this.Fu=a.ji,this.Bu=f0();let b=this.Ku(a.documents);return this.applyChanges(b,!0)}Yu(){return je.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class js{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class jt{constructor(a){this.key=a,this.Xu=!1}}class ju{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.Zu={},this.tc=new fS(a=>fd(a),fc),this.ec=new Map,this.nc=new Set,this.sc=new d1(dz.comparator),this.ic=new Map,this.rc=new hS,this.oc={},this.uc=new Map,this.cc=hy.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function jv(a,b){let c=jX(a),d,e,f=c.tc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.Yu();else{let g=await ic(c.localStore,fa(b));c.isPrimaryClient&&iM(c.remoteStore,g);let h=c.sharedClientState.addLocalQueryTarget(g.targetId);e=await jw(c,b,d=g.targetId,"current"===h)}return e}async function jw(a,b,c,d){a.hc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.Ku(c);e.Mi&&(e=await ie(a.localStore,b.query,!1).then(({documents:a})=>b.view.Ku(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return jI(a,b.targetId,g.zu),g.snapshot})(a,b,c,d);let e=await ie(a.localStore,b,!0),f=new jr(b,e.ji),g=f.Ku(e.documents),h=f3.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState),i=f.applyChanges(g,a.isPrimaryClient,h);jI(a,c,i.zu);let j=new js(b,c,f);return a.tc.set(b,j),a.ec.has(c)?a.ec.get(c).push(b):a.ec.set(c,[b]),i.snapshot}async function jx(a,b){var c;let d=c=a,e=d.tc.get(b),f=d.ec.get(e.targetId);if(f.length>1)return d.ec.set(e.targetId,f.filter(a=>!fc(a,b))),void d.tc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await id(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),iN(d.remoteStore,e.targetId),jG(d,e.targetId)}).catch(dM)):(jG(d,e.targetId),await id(d.localStore,e.targetId,!0))}async function jy(a,b,c){let d=jY(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=dt.now(),f=b.reduce((a,b)=>a.add(b.key),f0()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=fT,i=f0();return d.Ui.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=fG(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new fJ(h.key,i,eG(i.value.mapValue),fA.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:fW(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.oc[e.currentUser.toKey()])||(i=new d1(dq)),i=i.insert(f,g),e.oc[e.currentUser.toKey()]=i,await jL(d,h.changes),await iZ(d.remoteStore)}catch(j){let k=jb(j,"Failed to persist write");c.reject(k)}}async function jz(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.$i;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Ui.newChangeBuffer({trackRemovals:!0});f=d.$i;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Vs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Vs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);b.targetMismatches.has(h)?m=m.withResumeToken(d8.EMPTY_BYTE_STRING,du.min()).withLastLimboFreeSnapshotVersion(du.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Vs.updateTargetData(a,m))});let h=fT,i=f0();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(ia(a,c,b.documentUpdates).next(a=>{h=a.Gi,i=a.Qi})),!e.isEqual(du.min())){let j=d.Vs.getLastRemoteSnapshotVersion(a).next(b=>d.Vs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return dN.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.$i=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.ic.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||dc(),a.addedDocuments.size>0?g.Xu=!0:a.modifiedDocuments.size>0?(e=g.Xu)||dc():a.removedDocuments.size>0&&(g.Xu||dc(),g.Xu=!1))}),await jL(d,e,b)}catch(f){await dM(f)}}function jA(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.tc.forEach((a,c)=>{let d=c.view.Eu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.Eu(b)&&(e=!0)}),e&&jl(d)}(e.eventManager,b),f.length&&e.Zu.Go(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function jB(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.ic.get(b),g=f&&f.key;if(g){let h=new d1(dz.comparator);h=h.insert(g,eH.newNoDocument(g,du.min()));let i=f0().add(g),j=new f2(du.min(),new Map,new d4(dq),h,i);await jz(e,j),e.sc=e.sc.remove(g),e.ic.delete(b),jK(e)}else await id(e.localStore,b,!1).then(()=>jG(e,b,c)).catch(dM)}async function jC(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Ui.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=dN.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||dc(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=f0();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);jF(d,e,null),jE(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await jL(d,f)}catch(g){await dM(g)}}async function jD(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||dc(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);jF(e,b,c),jE(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await jL(e,f)}catch(g){await dM(g)}}function jE(a,b){(a.uc.get(b)||[]).forEach(a=>{a.resolve()}),a.uc.delete(b)}function jF(a,b,c){var d;let e=d=a,f=e.oc[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.oc[e.currentUser.toKey()]=f}}function jG(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.ec.get(b)))a.tc.delete(d),c&&a.Zu.lc(d,c);a.ec.delete(b),a.isPrimaryClient&&a.rc.us(b).forEach(b=>{a.rc.containsKey(b)||jH(a,b)})}function jH(a,b){a.nc.delete(b.path.canonicalString());let c=a.sc.get(b);null!==c&&(iN(a.remoteStore,c),a.sc=a.sc.remove(b),a.ic.delete(c),jK(a))}function jI(a,b,c){for(let d of c)d instanceof jp?(a.rc.addReference(d.key,b),jJ(a,d)):d instanceof jq?(c8("SyncEngine","Document no longer in limbo: "+d.key),a.rc.removeReference(d.key,b),a.rc.containsKey(d.key)||jH(a,d.key)):dc()}function jJ(a,b){let c=b.key,d=c.path.canonicalString();a.sc.get(c)||a.nc.has(d)||(c8("SyncEngine","New document in limbo: "+c),a.nc.add(d),jK(a))}function jK(a){for(;a.nc.size>0&&a.sc.size<a.maxConcurrentLimboResolutions;){let b=a.nc.values().next().value;a.nc.delete(b);let c=new dz(dw.fromString(b)),d=a.cc.next();a.ic.set(d,new jt(c)),a.sc=a.sc.insert(c,d),iM(a.remoteStore,new gU(fa(e4(c.path)),d,2,dZ.ot))}}async function jL(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.tc.isEmpty()||(e.tc.forEach((a,d)=>{h.push(e.hc(d,b,c).then(a=>{if(a){e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,a.fromCache?"not-current":"current"),f.push(a);let b=h4.Vi(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.Zu.Go(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>dN.forEach(b,b=>dN.forEach(b.Pi,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>dN.forEach(b.vi,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!dS(e))throw e;c8("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.$i.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.$i=d.$i.insert(g,j)}}}(e.localStore,g))}async function jM(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){c8("SyncEngine","User change. New user:",b.toKey());let g=await h8(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).uc.forEach(a=>{a.forEach(a=>{a.reject(new de(dd.CANCELLED,e))})}),d.uc.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await jL(f,g.Ki)}}function jN(a,b){var c;let d=c=a,e=d.ic.get(b);if(e&&e.Xu)return f0().add(e.key);{let f=f0(),g=d.ec.get(b);if(!g)return f;for(let h of g){let i=d.tc.get(h);f=f.unionWith(i.view.qu)}return f}}async function jO(a,b){var c;let d=c=a,e=await ie(d.localStore,b.query,!0),f=b.view.Ju(e);return d.isPrimaryClient&&jI(d,b.targetId,f.zu),f}async function jP(a,b){var c;let d=c=a;return ih(d.localStore,b).then(a=>jL(d,a))}async function jQ(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.yn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):dN.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await iZ(f.remoteStore):"acknowledged"===c||"rejected"===c?(jF(f,b,d||null),jE(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).In(b)}(f.localStore,b)):dc(),await jL(f,g)):c8("SyncEngine","Cannot apply mutation batch with id: "+b)}async function jR(a,b){var c;let d=c=a;if(jX(d),jY(d),!0===b&& !0!==d.ac){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await jS(d,e.toArray());for(let g of(d.ac=!0,await i7(d.remoteStore,!0),f))iM(d.remoteStore,g)}else if(!1===b&& !1!==d.ac){let h=[],i=Promise.resolve();d.ec.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(jG(d,b),id(d.localStore,b,!0))),iN(d.remoteStore,b)}),await i,await jS(d,h),function(a){var b;let c=b=a;c.ic.forEach((a,b)=>{iN(c.remoteStore,b)}),c.rc.cs(),c.ic=new Map,c.sc=new d1(dz.comparator)}(d),d.ac=!1,await i7(d.remoteStore,!1)}}async function jS(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e.ec.get(h);if(j&&0!==j.length)for(let k of(i=await ic(e.localStore,fa(j[0])),j)){let l=e.tc.get(k),m=await jO(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await ig(e.localStore,h);i=await ic(e.localStore,n),await jw(e,jT(n),h,!1)}f.push(i)}return e.Zu.Go(g),f}function jT(a){return e3(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function jU(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).Ri()}async function jV(a,b,c,d){var e;let f=e=a;if(f.ac)return void c8("SyncEngine","Ignoring unexpected query state notification.");let g=f.ec.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await ih(f.localStore,fg(g[0])),i=f2.createSynthesizedRemoteEventForCurrentChange(b,"current"===c);await jL(f,h,i);break}case"rejected":await id(f.localStore,b,!0),jG(f,b,d);break;default:dc()}}async function jW(a,b,c){let d=jX(a);if(d.ac){for(let e of b){if(d.ec.has(e)){c8("SyncEngine","Adding an already active target "+e);continue}let f=await ig(d.localStore,e),g=await ic(d.localStore,f);await jw(d,jT(f),g.targetId,!1),iM(d.remoteStore,g)}for(let h of c)d.ec.has(h)&&await id(d.localStore,h,!1).then(()=>{iN(d.remoteStore,h),jG(d,h)}).catch(dM)}}function jX(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=jz.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=jN.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=jB.bind(null,c),c.Zu.Go=jj.bind(null,c.eventManager),c.Zu.lc=jk.bind(null,c.eventManager),c}function jY(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=jD.bind(null,c),c}class jZ{constructor(){this.synchronizeTabs=!1}async initialize(a){this.wt=iD(a.databaseInfo.databaseId),this.sharedClientState=this.dc(a),this.persistence=this._c(a),await this.persistence.start(),this.localStore=this.wc(a),this.gcScheduler=this.mc(a,this.localStore),this.indexBackfillerScheduler=this.gc(a,this.localStore)}mc(a,b){return null}gc(a,b){return null}wc(a){return h7(this.persistence,new h5,a.initialUser,this.wt)}_c(a){return new hX(hZ.Os,this.wt)}dc(a){return new iv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j${async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>jA(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await i7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new jg}createDatastore(a){var b,c,d,e,f;let g=iD(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new iA(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new iI(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>jA(this.syncEngine,a,0),f=ix.V()?new ix:new iw,new iJ(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new ju(a,b,c,d,e,f);return g&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;c8("RemoteStore","RemoteStore shutting down."),c.lu.add(5),await iL(c),c.du.shutdown(),c._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class j_{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Ic(this.observer.next,a)}error(a){this.observer.error?this.Ic(this.observer.error,a):c9("Uncaught Error in snapshot listener:",a)}Tc(){this.muted=!0}Ic(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class j0{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new de(dd.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=gn(d.wt)+"/documents",f={documents:b.map(a=>gj(d.wt,a))},g=await d.ao("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.wt,"found"in(c=a)?function(a,b){var c;b.found||dc(),b.found.name,b.found.updateTime;let d=gk(a,b.found.name),e=gg(b.found.updateTime),f=new eF({mapValue:{fields:b.found.fields}});return eH.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||dc(),!b.readTime&&dc();let e=gk(a,b.missing),f=gg(b.readTime);return eH.newNoDocument(e,f)}(b,c):dc());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||dc(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new fN(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=dz.fromPath(b);this.mutations.push(new fO(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=gn(d.wt)+"/documents",f={writes:b.map(a=>gr(d.wt,a))};await d.ro("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw dc();b=du.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new de(dd.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?fA.updateTime(b):fA.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(du.min()))throw new de(dd.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fA.updateTime(b)}return fA.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class j1{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=c4.UNAUTHENTICATED,this.clientId=dp.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{c8("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(c8("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new de(dd.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new df;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=jb(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function j2(a,b){a.asyncQueue.verifyOperationInProgress(),c8("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await h8(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function j3(a,b){a.asyncQueue.verifyOperationInProgress();let c=await j4(a);c8("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>i6(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>i6(b.remoteStore,c)),a.onlineComponents=b}async function j4(a){return a.offlineComponents||(c8("FirestoreClient","Using default OfflineComponentProvider"),await j2(a,new jZ)),a.offlineComponents}async function j5(a){return a.onlineComponents||(c8("FirestoreClient","Using default OnlineComponentProvider"),await j3(a,new j$)),a.onlineComponents}async function j6(a){let b=await j5(a),c=b.eventManager;return c.onListen=jv.bind(null,b.syncEngine),c.onUnlisten=jx.bind(null,b.syncEngine),c}let j7=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j8(a,b,c){if(!c)throw new de(dd.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function j9(a){if(!dz.isDocumentKey(a))throw new de(dd.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function ka(a){if(dz.isDocumentKey(a))throw new de(dd.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function kb(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":dc()}function kc(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new de(dd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=kb(a);throw new de(dd.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class kd{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new de(dd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new de(dd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new de(dd.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class ke{constructor(a,b,c){this._authCredentials=b,this._appCheckCredentials=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1,a instanceof eh?this._databaseId=a:(this._app=a,this._databaseId=function(a){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new de(dd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eh(a.options.projectId)}(a))}get app(){if(!this._app)throw new de(dd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new de(dd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new dh;switch(a.type){case"gapi":var b;let c=a.client;return("object"!=typeof c||null===c||!c.auth||!c.auth.getAuthHeaderValueForFirstParty)&&dc(),new dk(c,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new de(dd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=j7.get(a);b&&(c8("ComponentProvider","Removing Datastore"),j7.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class kf{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kh(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new kf(this.firestore,a,this._key)}}class kg{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new kg(this.firestore,a,this._query)}}class kh extends kg{constructor(a,b,c){super(a,b,e4(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new kf(this.firestore,null,new dz(a))}withConverter(a){return new kh(this.firestore,a,this._path)}}function ki(a,b,...c){if(a=(0,q.m9)(a),j8("collection","path",b),a instanceof ke){let d=dw.fromString(b,...c);return ka(d),new kh(a,null,d)}{if(!(a instanceof kf||a instanceof kh))throw new de(dd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dw.fromString(b,...c));return ka(e),new kh(a.firestore,null,e)}}function kj(a,b,...c){if(a=(0,q.m9)(a),1===arguments.length&&(b=dp.I()),j8("doc","path",b),a instanceof ke){let d=dw.fromString(b,...c);return j9(d),new kf(a,null,new dz(d))}{if(!(a instanceof kf||a instanceof kh))throw new de(dd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dw.fromString(b,...c));return j9(e),new kf(a.firestore,a instanceof kh?a.converter:null,new dz(e))}}function kk(a,b){return a=(0,q.m9)(a),b=(0,q.m9)(b),(a instanceof kf||a instanceof kh)&&(b instanceof kf||b instanceof kh)&&a.firestore===b.firestore&&a.path===b.path&&a.converter===b.converter}function kl(a,b){return a=(0,q.m9)(a),b=(0,q.m9)(b),a instanceof kg&&b instanceof kg&&a.firestore===b.firestore&&fc(a._query,b._query)&&a.converter===b.converter}function km(a){return function(a,b){if("object"!=typeof a||null===a)return!1;let c=a;for(let d of b)if(d in c&&"function"==typeof c[d])return!0;return!1}(a,["next","error","complete"])}class kn extends ke{constructor(a,b,c){super(a,b,c),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new iE(this,"async_queue_retry"),this.Kc=()=>{let a=iC();a&&c8("AsyncQueue","Visibility state changed to "+a.visibilityState),this.So.Eo()};let a=iC();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Gc(),this.Qc(a)}enterRestrictedMode(a){if(!this.Fc){this.Fc=!0,this.Uc=a||!1;let b=iC();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.Kc)}}enqueue(a){if(this.Gc(),this.Fc)return new Promise(()=>{});let b=new df;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Oc.push(a),this.jc()))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(a){if(!dS(a))throw a;c8("AsyncQueue","Operation failed with retryable error: "+a)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(a){let b=this.Mc.then(()=>(this.Lc=!0,a().catch(a=>{var b;this.Bc=a,this.Lc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw c9("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Lc=!1,a))));return this.Mc=b,b}enqueueAfterDelay(a,b,c){this.Gc(),this.qc.indexOf(a)> -1&&(b=0);let d=ja.createAndSchedule(this,a,b,c,a=>this.Wc(a));return this.$c.push(d),d}Gc(){this.Bc&&dc()}verifyOperationInProgress(){}async zc(){let a;do await (a=this.Mc);while(a!==this.Mc)}Hc(a){for(let b of this.$c)if(b.timerId===a)return!0;return!1}Jc(a){return this.zc().then(()=>{for(let b of(this.$c.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.$c))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.zc()})}Yc(a){this.qc.push(a)}Wc(a){let b=this.$c.indexOf(a);this.$c.splice(b,1)}},this._persistenceKey="name"in a?a.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||kq(this),this._firestoreClient.terminate()}}function ko(a=(0,n.Mq)()){return(0,n.qX)(a,"firestore").getImmediate()}function kp(a){return a._firestoreClient||kq(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function kq(a){var b,c,d,e,f;let g=a._freezeSettings(),h=(c=a._databaseId,d=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",e=a._persistenceKey,f=g,new eg(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams));a._firestoreClient=new j1(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class kr{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new de(dd.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dy(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class ks{constructor(a){this._byteString=a}static fromBase64String(a){try{return new ks(d8.fromBase64String(a))}catch(b){throw new de(dd.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new ks(d8.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class kt{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class ku{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new de(dd.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new de(dd.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return dq(this._lat,a._lat)||dq(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let kv=/^__.*__$/;class kw{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new fJ(a,this.data,this.fieldMask,b,this.fieldTransforms):new fI(a,this.data,b,this.fieldTransforms)}}class kx{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new fJ(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function ky(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dc()}}class kz{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.wt=c,this.ignoreUndefinedProperties=d,void 0===e&&this.Xc(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(a){return new kz(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.ta({path:c,na:!1});return d.sa(a),d}ia(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.ta({path:c,na:!1});return d.Xc(),d}ra(a){return this.ta({path:void 0,na:!0})}oa(a){return kO(a,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}Xc(){if(this.path)for(let a=0;a<this.path.length;a++)this.sa(this.path.get(a))}sa(a){if(0===a.length)throw this.oa("Document fields must not be empty");if(ky(this.Zc)&&kv.test(a))throw this.oa('Document fields cannot begin and end with "__"')}}class kA{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.wt=c||iD(a)}aa(a,b,c,d=!1){return new kz({Zc:a,methodName:b,ca:c,path:dy.emptyPath(),na:!1,ua:d},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function kB(a){let b=a._freezeSettings(),c=iD(a._databaseId);return new kA(a._databaseId,!!b.ignoreUndefinedProperties,c)}function kC(a,b,c,d,e,f={}){let g=a.aa(f.merge||f.mergeFields?2:0,b,c,e);kK("Data must be an object, but it was:",g,d);let h=kI(d,g),i,j;if(f.merge)i=new d7(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=kL(b,l,c);if(!g.contains(m))throw new de(dd.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kP(k,m)||k.push(m)}i=new d7(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new kw(new eF(h),i,j)}class kD extends null{_toFieldTransform(a){if(2!==a.Zc)throw 1===a.Zc?a.oa(`${this._methodName}() can only appear at the top level of your update data`):a.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof kD}}function kE(a,b,c){return new kz({Zc:3,ca:b.settings.ca,methodName:a._methodName,na:c},b.databaseId,b.wt,b.ignoreUndefinedProperties)}class kF extends kt{_toFieldTransform(a){return new fy(a.path,new fq)}isEqual(a){return a instanceof kF}}function kG(a,b,c,d=!1){return kH(c,a.aa(d?4:3,b))}function kH(a,b){if(kJ(a=(0,q.m9)(a)))return kK("Unsupported field value:",b,a),kI(a,b);if(a instanceof kt)return function(a,b){if(!ky(b.Zc))throw b.oa(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.oa(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.na&&4!==b.Zc)throw b.oa("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=kH(e,b.ra(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,q.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return fl(b.wt,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=dt.fromDate(a);return{timestampValue:ge(b.wt,c)}}if(a instanceof dt){let d=new dt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ge(b.wt,d)}}if(a instanceof ku)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof ks)return{bytesValue:gf(b.wt,a._byteString)};if(a instanceof kf){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b.oa(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:gh(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.oa(`Unsupported field value: ${kb(a)}`)}(a,b)}function kI(a,b){let c={};return d0(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):d_(a,(a,d)=>{let e=kH(d,b.ea(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function kJ(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof dt||a instanceof ku||a instanceof ks||a instanceof kf||a instanceof kt)}function kK(a,b,c){var d;if(!kJ(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=kb(c);throw"an object"===e?b.oa(a+" a custom object"):b.oa(a+" "+e)}}function kL(a,b,c){if((b=(0,q.m9)(b))instanceof kr)return b._internalPath;if("string"==typeof b)return kN(a,b);throw kO("Field path arguments must be of type string or ",a,!1,void 0,c)}let kM=RegExp("[~\\*/\\[\\]]");function kN(a,b,c){if(b.search(kM)>=0)throw kO(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new kr(...b.split("."))._internalPath}catch(d){throw kO(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function kO(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new de(dd.INVALID_ARGUMENT,h+a+i)}function kP(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class kQ{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new kf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new kR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(kS("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class kR extends kQ{data(){return super.data()}}function kS(a,b){return"string"==typeof b?kN(a,b):b instanceof kr?b._internalPath:b._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class kT{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class kU extends kQ{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new kV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(kS("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class kV extends kU{data(a={}){return super.data(a)}}class kW{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new kT(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new kV(this._firestore,this._userDataWriter,c.key,c,new kT(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new de(dd.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>({type:"added",doc:new kV(a._firestore,a._userDataWriter,b.doc.key,b.doc,new kT(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),oldIndex:-1,newIndex:c++}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new kV(a._firestore,a._userDataWriter,b.doc.key,b.doc,new kT(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:kX(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function kX(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dc()}}class kY{}function kZ(a,...b){for(let c of b)a=c._apply(a);return a}class k$ extends kY{constructor(a,b,c){super(),this.fa=a,this.da=b,this._a=c,this.type="where"}_apply(a){let b=kB(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new de(dd.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){k4(g,f);let i=[];for(let j of g)i.push(k3(d,a,j));h={arrayValue:{values:i}}}else h=k3(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||k4(g,f),h=kG(c,b,g,"in"===f||"not-in"===f);let k=eQ.create(e,f,h);return function(a,b){if(b.ht()){let c=e7(a);if(null!==c&&!c.isEqual(b.field))throw new de(dd.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${b.field.toString()}'`);let d=e6(a);null!==d&&k5(a,b.field,d)}let e=function(a,b){for(let c of a.filters)if(b.indexOf(c.op)>=0)return c.op;return null}(a,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==e)throw e===b.op?new de(dd.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new de(dd.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${e.toString()}' filters.`)}(a,k),k}(a._query,"where",b,a.firestore._databaseId,this.fa,this.da,this._a);return new kg(a.firestore,a.converter,function(a,b){let c=a.filters.concat([b]);return new e2(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}(a._query,c))}}function k_(a,b,c){let d=kS("where",a);return new k$(d,b,c)}class k0 extends kY{constructor(a,b){super(),this.fa=a,this.wa=b,this.type="orderBy"}_apply(a){let b=function(a,b,c){if(null!==a.startAt)throw new de(dd.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==a.endAt)throw new de(dd.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let d=new e$(b,c);return function(a,b){if(null===e6(a)){let c=e7(a);null!==c&&k5(a,c,b.field)}}(a,d),d}(a._query,this.fa,this.wa);return new kg(a.firestore,a.converter,function(a,b){let c=a.explicitOrderBy.concat([b]);return new e2(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(a._query,b))}}function k1(a,b="asc"){let c=kS("orderBy",a);return new k0(c,b)}function k2(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof kQ)return function(a,b,c,d,e){if(!d)throw new de(dd.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of e9(a))if(g.field.isKeyField())f.push(et(b,d.key));else{let h=d.data.field(g.field);if(ed(h))throw new de(dd.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new de(dd.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new eZ(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=kB(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new de(dd.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new de(dd.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!e8(a)&& -1!==j.indexOf("/"))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(dw.fromString(j));if(!dz.isDocumentKey(k))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new dz(k);h.push(et(b,l))}else{let m=kG(c,d,j);h.push(m)}}return new eZ(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function k3(a,b,c){if("string"==typeof(c=(0,q.m9)(c))){if(""===c)throw new de(dd.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e8(b)&& -1!==c.indexOf("/"))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(dw.fromString(c));if(!dz.isDocumentKey(d))throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return et(a,new dz(d))}if(c instanceof kf)return et(a,c._key);throw new de(dd.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kb(c)}.`)}function k4(a,b){if(!Array.isArray(a)||0===a.length)throw new de(dd.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new de(dd.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function k5(a,b,c){if(!c.isEqual(b))throw new de(dd.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class k6{convertValue(a,b="none"){switch(en(a)){case 0:return null;case 1:return a.booleanValue;case 2:return eb(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(ec(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw dc()}}convertObject(a,b){let c={};return d_(a.fields,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new ku(eb(a.latitude),eb(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=ee(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(ef(a));default:return null}}convertTimestamp(a){let b=ea(a);return new dt(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=dw.fromString(a);(c=gC(d))||dc();let e=new eh(d.get(1),d.get(3)),f=new dz(d.popFirst(5));return e.isEqual(b)||c9(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function k7(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}function k8(a,b){if((a=getModularInstance(a)).firestore!==b)throw new de(dd.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}class k9 extends k6{constructor(a){super(),this.firestore=a}convertBytes(a){return new ks(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new kf(this.firestore,null,b)}}function la(a,b,c){a=kc(a,kf);let d=kc(a.firestore,kn),e=k7(a.converter,b,c);return ld(d,[kC(kB(d),"setDoc",a._key,e,null!==a.converter,c).toMutation(a._key,fA.none())])}function lb(a,b){let c=kc(a.firestore,kn),d=kj(a),e=k7(a.converter,b);return ld(c,[kC(kB(a.firestore),"addDoc",d._key,e,null!==a.converter,{}).toMutation(d._key,fA.exists(!1))]).then(()=>d)}function lc(a,...b){var c,d,e;a=(0,q.m9)(a);let f={includeMetadataChanges:!1},g=0;"object"!=typeof b[g]||km(b[g])||(f=b[g],g++);let h={includeMetadataChanges:f.includeMetadataChanges};if(km(b[g])){let i=b[g];b[g]=null===(c=i.next)|| void 0===c?void 0:c.bind(i),b[g+1]=null===(d=i.error)|| void 0===d?void 0:d.bind(i),b[g+2]=null===(e=i.complete)|| void 0===e?void 0:e.bind(i)}let j,k,l;if(a instanceof kf)k=kc(a.firestore,kn),l=e4(a._key.path),j={next:c=>{b[g]&&b[g](le(k,a,c))},error:b[g+1],complete:b[g+2]};else{let m=kc(a,kg);k=kc(m.firestore,kn),l=m._query;let n=new k9(k);j={next:a=>{b[g]&&b[g](new kW(k,n,m,a))},error:b[g+1],complete:b[g+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a(b){if("L"===b.limitType&&0===b.explicitOrderBy.length)throw new de(dd.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(a._query)}return function(a,b,c,d){let e=new j_(d),f=new jm(b,e,c);return a.asyncQueue.enqueueAndForget(async()=>jh(await j6(a),f)),()=>{e.Tc(),a.asyncQueue.enqueueAndForget(async()=>ji(await j6(a),f))}}(kp(k),l,h,j)}function ld(a,b){return function(a,b){let c=new df;return a.asyncQueue.enqueueAndForget(async()=>{var d;return jy(await (d=a,j5(d).then(a=>a.syncEngine)),b,c)}),c.promise}(kp(a),b)}function le(a,b,c){let d=c.docs.get(b._key),e=new k9(a);return new kU(a,e,b._key,d,new kT(c.hasPendingWrites,c.fromCache),b.converter)}function lf(){return new kF("serverTimestamp")}!function(a,b=!0){var c;c5=n.Jn,(0,n.Xd)(new o.wA("firestore",(a,{options:c})=>{let d=a.getProvider("app").getImmediate(),e=new kn(d,new di(a.getProvider("auth-internal")),new dm(a.getProvider("app-check-internal")));return c=Object.assign({useFetchStreams:b},c),e._setSettings(c),e},"PUBLIC")),(0,n.KN)(c3,"3.4.14",void 0),(0,n.KN)(c3,"3.4.14","esm2017")}()},8679:function(a,b,c){"use strict";var d=c(1296),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={"$$typeof":!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={"$$typeof":!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;function p(a,b,c){if("string"!=typeof b){if(o){var d=n(b);d&&d!==o&&p(a,d,c)}var e=k(b);l&&(e=e.concat(l(b)));for(var g=i(a),h=i(b),q=0;q<e.length;++q){var r=e[q];if(!f[r]&&!(c&&c[r])&&!(h&&h[r])&&!(g&&g[r])){var s=m(b,r);try{j(a,r,s)}catch(t){}}}}return a}a.exports=p},6103:function(a,b){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103,e=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,g=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,i=c?Symbol.for("react.provider"):60109,j=c?Symbol.for("react.context"):60110,k=c?Symbol.for("react.async_mode"):60111,l=c?Symbol.for("react.concurrent_mode"):60111,m=c?Symbol.for("react.forward_ref"):60112,n=c?Symbol.for("react.suspense"):60113,o=c?Symbol.for("react.suspense_list"):60120,p=c?Symbol.for("react.memo"):60115,q=c?Symbol.for("react.lazy"):60116,r=c?Symbol.for("react.block"):60121,s=c?Symbol.for("react.fundamental"):60117,t=c?Symbol.for("react.responder"):60118,u=c?Symbol.for("react.scope"):60119;function v(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:switch(a=a.type){case k:case l:case f:case h:case g:case n:return a;default:switch(a=a&&a.$$typeof){case j:case m:case q:case p:case i:return a;default:return b}}case e:return b}}}function w(a){return v(a)===l}b.AsyncMode=k,b.ConcurrentMode=l,b.ContextConsumer=j,b.ContextProvider=i,b.Element=d,b.ForwardRef=m,b.Fragment=f,b.Lazy=q,b.Memo=p,b.Portal=e,b.Profiler=h,b.StrictMode=g,b.Suspense=n,b.isAsyncMode=function(a){return w(a)||v(a)===k},b.isConcurrentMode=w,b.isContextConsumer=function(a){return v(a)===j},b.isContextProvider=function(a){return v(a)===i},b.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===d},b.isForwardRef=function(a){return v(a)===m},b.isFragment=function(a){return v(a)===f},b.isLazy=function(a){return v(a)===q},b.isMemo=function(a){return v(a)===p},b.isPortal=function(a){return v(a)===e},b.isProfiler=function(a){return v(a)===h},b.isStrictMode=function(a){return v(a)===g},b.isSuspense=function(a){return v(a)===n},b.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===f||a===l||a===h||a===g||a===n||a===o||"object"==typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===i||a.$$typeof===j||a.$$typeof===m||a.$$typeof===s||a.$$typeof===t||a.$$typeof===u||a.$$typeof===r)},b.typeOf=v},1296:function(a,b,c){"use strict";a.exports=c(6103)},3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(6270)}])},6170:function(a,b,c){"use strict";c.d(b,{I:function(){return h},db:function(){return i}});var d=c(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,d.KN)("firebase","9.9.3","app");var e=c(5321),f=c(65),g=(0,d.ZF)({apiKey:"AIzaSyCZjvWRV4HgU4ehn6JfbdxuXnOOsj01nsk",authDomain:"messenger-sv-whatsup.firebaseapp.com",projectId:"messenger-sv-whatsup",storageBucket:"messenger-sv-whatsup.appspot.com",messagingSenderId:"397884871292",appId:"1:397884871292:web:ae483d6a022a65d8bdeff9"}),h=(0,f.v0)(),i=(0,e.ad)(g);new f.hJ},6270:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(1799),e=c(603),f=c(5893);c(906);var g=c(3349),h=c(7294),i=c(6170),j=c(7297),k=c(9008),l=c.n(k),m=c(9521);function n(){var a=(0,j.Z)(["\ndisplay: grid;\nplace-items: center;\nheight: 100vh;\nbackground-color: whitesmoke;\n"]);return n=function(){return a},a}function o(){var a=(0,j.Z)(["\npadding: 100px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nbackground-color: white;\nborder-radius: 50px;\nbox-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);\n"]);return o=function(){return a},a}function p(){var a=(0,j.Z)(["\nheight:200px;\nwidth: 200px;\nmargin-bottom: 50px;\n"]);return p=function(){return a},a}function q(){var a=(0,j.Z)(["\nfont-size: 16px;\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\npadding:15px;\nborder: 1px solid whitesmoke;\nbackground-color: whitesmoke;\nborder-radius: 15px;\ntext-transform: uppercase;\n:hover {\n  transform: scale(102%);\n}\n"]);return q=function(){return a},a}var r=function(){var a=(0,e.Z)((0,g.Kp)(i.I),4),b=a[0];return a[1],a[2],a[3],(0,f.jsxs)(s,{children:[(0,f.jsx)(l(),{children:(0,f.jsx)("title",{children:"Login"})}),(0,f.jsxs)(t,{children:[(0,f.jsx)(u,{src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"}),(0,f.jsx)(v,{onClick:function(){return b("",{prompt:"select_account"})},variant:"outlined",children:"Sign in with Google"})]})]})},s=m.ZP.div(n()),t=m.ZP.div(o()),u=m.ZP.img(p()),v=m.ZP.button(q()),w=c(5321),x=function(a){var b=a.Component,c=a.pageProps,j=(0,e.Z)((0,g.F_)(i.I),2),k=j[0],l=j[1];return((0,h.useEffect)(function(){if(k){var a=(0,w.JU)(i.db,"users",k.uid);(0,w.pl)(a,{userName:k.displayName,email:k.email,lastSeen:(0,w.Bt)(),photoURL:k.photoURL},{merge:!0})}},[k]),l)?(0,f.jsx)("div",{children:"Loading"}):k?(0,f.jsx)(b,(0,d.Z)({},c)):(0,f.jsx)(r,{})}},906:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9008:function(a,b,c){a.exports=c(5443)},3349:function(a,b,c){"use strict";c.d(b,{F_:function(){return k},Kp:function(){return l}});var d=c(65),e=c(7294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function f(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d.throw(a))}catch(b){f(b)}}function i(a){var b;a.done?e(a.value):((b=a.value)instanceof c?b:new c(function(a){a(b)})).then(g,h)}i((d=d.apply(a,b||[])).next())})}function g(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},i=function(a){return{loading:null==a,value:a}},j=function(a){var b=a?a():void 0,c=(0,e.useReducer)(function(a,b){switch(b.type){case"error":return h(h({},a),{error:b.error,loading:!1,value:void 0});case"reset":return i(b.defaultValue);case"value":return h(h({},a),{error:void 0,loading:!1,value:b.value});default:return a}},i(b)),d=c[0],f=c[1],g=function(){var b=a?a():void 0;f({type:"reset",defaultValue:b})},j=function(a){f({type:"error",error:a})},k=function(a){f({type:"value",value:a})};return(0,e.useMemo)(function(){return{error:d.error,loading:d.loading,reset:g,setError:j,setValue:k,value:d.value}},[d.error,d.loading,g,j,k,d.value])},k=function(a,b){var c=j(function(){return a.currentUser}),h=c.error,i=c.loading,k=c.setError,l=c.setValue,m=c.value;(0,e.useEffect)(function(){var c=(0,d.Aj)(a,function(a){return f(void 0,void 0,void 0,function(){var c;return g(this,function(d){switch(d.label){case 0:if(!(null==b?void 0:b.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,b.onUserChanged(a)];case 2:return d.sent(),[3,4];case 3:return k(c=d.sent()),[3,4];case 4:return l(a),[2]}})})},k);return function(){c()}},[a]);var n=[m,i,h];return(0,e.useMemo)(function(){return n},n)},l=function(a){return m(a,function(a,b){var c=new d.hJ;return a&&a.forEach(function(a){return c.addScope(a)}),b&&c.setCustomParameters(b),c})},m=function(a,b){var c=(0,e.useState)(),h=c[0],i=c[1],j=(0,e.useState)(),k=j[0],l=j[1],m=(0,e.useState)(!1),n=m[0],o=m[1],p=function(c,e){return f(void 0,void 0,void 0,function(){var f,h,j;return g(this,function(g){switch(g.label){case 0:o(!0),i(void 0),g.label=1;case 1:return g.trys.push([1,3,4,5]),f=b(c,e),[4,(0,d.rh)(a,f)];case 2:return l(h=g.sent()),[3,5];case 3:return i(j=g.sent()),[3,5];case 4:return o(!1),[7];case 5:return[2]}})})},q=[p,k,n,h,];return(0,e.useMemo)(function(){return q},q)}},9921:function(a,b){"use strict";/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c=60103,d=60106,e=60107,f=60108,g=60114,h=60109,i=60110,j=60112,k=60113,l=60120,m=60115,n=60116,o=60121,p=60122,q=60117,r=60129,s=60131;if("function"==typeof Symbol&&Symbol.for){var t=Symbol.for;c=t("react.element"),d=t("react.portal"),e=t("react.fragment"),f=t("react.strict_mode"),g=t("react.profiler"),h=t("react.provider"),i=t("react.context"),j=t("react.forward_ref"),k=t("react.suspense"),l=t("react.suspense_list"),m=t("react.memo"),n=t("react.lazy"),o=t("react.block"),p=t("react.server.block"),q=t("react.fundamental"),r=t("react.debug_trace_mode"),s=t("react.legacy_hidden")}b.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===g||a===r||a===f||a===k||a===l||a===s||"object"==typeof a&&null!==a&&(a.$$typeof===n||a.$$typeof===m||a.$$typeof===h||a.$$typeof===i||a.$$typeof===j||a.$$typeof===q||a.$$typeof===o||a[0]===p)},b.typeOf=function a(b){if("object"==typeof b&&null!==b){var o=b.$$typeof;switch(o){case c:switch(b=b.type){case e:case g:case f:case k:case l:return b;default:switch(b=b&&b.$$typeof){case i:case j:case n:case m:case h:return b;default:return o}}case d:return o}}}},9864:function(a,b,c){"use strict";a.exports=c(9921)},6774:function(a){a.exports=function(a,b,c,d){var e=c?c.call(d,a,b):void 0;if(void 0!==e)return!!e;if(a===b)return!0;if("object"!=typeof a||!a||"object"!=typeof b||!b)return!1;var f=Object.keys(a),g=Object.keys(b);if(f.length!==g.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(b),i=0;i<f.length;i++){var j=f[i];if(!h(j))return!1;var k=a[j],l=b[j];if(!1===(e=c?c.call(d,k,l,j):void 0)|| void 0===e&&k!==l)return!1}return!0}},9521:function(a,b,c){"use strict";c.d(b,{ZP:function(){return aF}});var d=c(9864),e=c(7294),f=c(6774),g=c.n(f),h=function(a){function b(a,d,i,j,k){for(var n,o,p,q,r,v=0,x=0,y=0,z=0,A=0,B=0,H=p=n=0,J=0,L=0,M=0,N=0,O=i.length,P=O-1,Q="",R="",S="",T="";J<O;){if(o=i.charCodeAt(J),J===P&&0!==x+z+y+v&&(0!==x&&(o=47===x?10:47),z=y=v=0,O++,P++),0===x+z+y+v){if(J===P&&(0<L&&(Q=Q.replace(m,"")),0<Q.trim().length)){switch(o){case 32:case 9:case 59:case 13:case 10:break;default:Q+=i.charAt(J)}o=59}switch(o){case 123:for(n=(Q=Q.trim()).charCodeAt(0),p=1,N=++J;J<O;){switch(o=i.charCodeAt(J)){case 123:p++;break;case 125:p--;break;case 47:switch(o=i.charCodeAt(J+1)){case 42:case 47:a:{for(H=J+1;H<P;++H)switch(i.charCodeAt(H)){case 47:if(42===o&&42===i.charCodeAt(H-1)&&J+2!==H){J=H+1;break a}break;case 10:if(47===o){J=H+1;break a}}J=H}}break;case 91:o++;case 40:o++;case 34:case 39:for(;(J++)<P&&i.charCodeAt(J)!==o;);}if(0===p)break;J++}if(p=i.substring(N,J),0===n&&(n=(Q=Q.replace(l,"").trim()).charCodeAt(0)),64===n){switch(0<L&&(Q=Q.replace(m,"")),o=Q.charCodeAt(1)){case 100:case 109:case 115:case 45:L=d;break;default:L=G}if(N=(p=b(d,L,p,o,k+1)).length,0<I&&(L=c(G,Q,M),r=h(3,p,L,d,D,C,N,o,k,j),Q=L.join(""),void 0!==r&&0===(N=(p=r.trim()).length)&&(o=0,p="")),0<N)switch(o){case 115:Q=Q.replace(w,g);case 100:case 109:case 45:p=Q+"{"+p+"}";break;case 107:p=(Q=Q.replace(s,"$1 $2"))+"{"+p+"}",p=1===F||2===F&&f("@"+p,3)?"@-webkit-"+p+"@"+p:"@"+p;break;default:p=Q+p,112===j&&(p=(R+=p,""))}else p=""}else p=b(d,c(d,Q,M),p,j,k+1);S+=p,p=M=L=H=n=0,Q="",o=i.charCodeAt(++J);break;case 125:case 59:if(1<(N=(Q=(0<L?Q.replace(m,""):Q).trim()).length))switch(0===H&&(45===(n=Q.charCodeAt(0))||96<n&&123>n)&&(N=(Q=Q.replace(" ",":")).length),0<I&& void 0!==(r=h(1,Q,d,a,D,C,R.length,j,k,j))&&0===(N=(Q=r.trim()).length)&&(Q="\0\0"),n=Q.charCodeAt(0),o=Q.charCodeAt(1),n){case 0:break;case 64:if(105===o||99===o){T+=Q+i.charAt(J);break}default:58!==Q.charCodeAt(N-1)&&(R+=e(Q,n,o,Q.charCodeAt(2)))}M=L=H=n=0,Q="",o=i.charCodeAt(++J)}}switch(o){case 13:case 10:47===x?x=0:0===1+n&&107!==j&&0<Q.length&&(L=1,Q+="\0"),0<I*K&&h(0,Q,d,a,D,C,R.length,j,k,j),C=1,D++;break;case 59:case 125:if(0===x+z+y+v){C++;break}default:switch(C++,q=i.charAt(J),o){case 9:case 32:if(0===z+v+x)switch(A){case 44:case 58:case 9:case 32:q="";break;default:32!==o&&(q=" ")}break;case 0:q="\\0";break;case 12:q="\\f";break;case 11:q="\\v";break;case 38:0===z+x+v&&(L=M=1,q="\f"+q);break;case 108:if(0===z+x+v+E&&0<H)switch(J-H){case 2:112===A&&58===i.charCodeAt(J-3)&&(E=A);case 8:111===B&&(E=B)}break;case 58:0===z+x+v&&(H=J);break;case 44:0===x+y+z+v&&(L=1,q+="\r");break;case 34:case 39:0===x&&(z=z===o?0:0===z?o:z);break;case 91:0===z+x+y&&v++;break;case 93:0===z+x+y&&v--;break;case 41:0===z+x+v&&y--;break;case 40:0===z+x+v&&(0===n&&(2*A+3*B==533||(n=1)),y++);break;case 64:0===x+y+z+v+H+p&&(p=1);break;case 42:case 47:if(!(0<z+v+y))switch(x){case 0:switch(2*o+3*i.charCodeAt(J+1)){case 235:x=47;break;case 220:N=J,x=42}break;case 42:47===o&&42===A&&N+2!==J&&(33===i.charCodeAt(N+2)&&(R+=i.substring(N,J+1)),q="",x=0)}}0===x&&(Q+=q)}B=A,A=o,J++}if(0<(N=R.length)){if(L=d,0<I&& void 0!==(r=h(2,R,L,a,D,C,N,j,k,j))&&0===(R=r).length)return T+R+S;if(R=L.join(",")+"{"+R+"}",0!=F*E){switch(2!==F||f(R,2)||(E=0),E){case 111:R=R.replace(u,":-moz-$1")+R;break;case 112:R=R.replace(t,"::-webkit-input-$1")+R.replace(t,"::-moz-$1")+R.replace(t,":-ms-input-$1")+R}E=0}}return T+R+S}function c(a,b,c){var e=b.trim().split(q);b=e;var f=e.length,g=a.length;switch(g){case 0:case 1:var h=0;for(a=0===g?"":a[0]+" ";h<f;++h)b[h]=d(a,b[h],c).trim();break;default:var i=h=0;for(b=[];h<f;++h)for(var j=0;j<g;++j)b[i++]=d(a[j]+" ",e[h],c).trim()}return b}function d(a,b,c){var d=b.charCodeAt(0);switch(33>d&&(d=(b=b.trim()).charCodeAt(0)),d){case 38:return b.replace(r,"$1"+a.trim());case 58:return a.trim()+b.replace(r,"$1"+a.trim());default:if(0<1*c&&0<b.indexOf("\f"))return b.replace(r,(58===a.charCodeAt(0)?"":"$1")+a.trim())}return a+b}function e(a,b,c,d){var g=a+";",h=2*b+3*c+4*d;if(944===h){a=g.indexOf(":",9)+1;var i=g.substring(a,g.length-1).trim();return i=g.substring(0,a).trim()+i+";",1===F||2===F&&f(i,1)?"-webkit-"+i+i:i}if(0===F||2===F&&!f(g,1))return g;switch(h){case 1015:return 97===g.charCodeAt(10)?"-webkit-"+g+g:g;case 951:return 116===g.charCodeAt(3)?"-webkit-"+g+g:g;case 963:return 110===g.charCodeAt(5)?"-webkit-"+g+g:g;case 1009:if(100!==g.charCodeAt(4))break;case 969:case 942:return"-webkit-"+g+g;case 978:return"-webkit-"+g+"-moz-"+g+g;case 1019:case 983:return"-webkit-"+g+"-moz-"+g+"-ms-"+g+g;case 883:if(45===g.charCodeAt(8))return"-webkit-"+g+g;if(0<g.indexOf("image-set(",11))return g.replace(B,"$1-webkit-$2")+g;break;case 932:if(45===g.charCodeAt(4))switch(g.charCodeAt(5)){case 103:return"-webkit-box-"+g.replace("-grow","")+"-webkit-"+g+"-ms-"+g.replace("grow","positive")+g;case 115:return"-webkit-"+g+"-ms-"+g.replace("shrink","negative")+g;case 98:return"-webkit-"+g+"-ms-"+g.replace("basis","preferred-size")+g}return"-webkit-"+g+"-ms-"+g+g;case 964:return"-webkit-"+g+"-ms-flex-"+g+g;case 1023:if(99!==g.charCodeAt(8))break;return"-webkit-box-pack"+(i=g.substring(g.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+g+"-ms-flex-pack"+i+g;case 1005:return o.test(g)?g.replace(n,":-webkit-")+g.replace(n,":-moz-")+g:g;case 1e3:switch(b=(i=g.substring(13).trim()).indexOf("-")+1,i.charCodeAt(0)+i.charCodeAt(b)){case 226:i=g.replace(v,"tb");break;case 232:i=g.replace(v,"tb-rl");break;case 220:i=g.replace(v,"lr");break;default:return g}return"-webkit-"+g+"-ms-"+i+g;case 1017:if(-1===g.indexOf("sticky",9))break;case 975:switch(b=(g=a).length-10,i=(33===g.charCodeAt(b)?g.substring(0,b):g).substring(a.indexOf(":",7)+1).trim(),h=i.charCodeAt(0)+(0|i.charCodeAt(7))){case 203:if(111>i.charCodeAt(8))break;case 115:g=g.replace(i,"-webkit-"+i)+";"+g;break;case 207:case 102:g=g.replace(i,"-webkit-"+(102<h?"inline-":"")+"box")+";"+g.replace(i,"-webkit-"+i)+";"+g.replace(i,"-ms-"+i+"box")+";"+g}return g+";";case 938:if(45===g.charCodeAt(5))switch(g.charCodeAt(6)){case 105:return i=g.replace("-items",""),"-webkit-"+g+"-webkit-box-"+i+"-ms-flex-"+i+g;case 115:return"-webkit-"+g+"-ms-flex-item-"+g.replace(y,"")+g;default:return"-webkit-"+g+"-ms-flex-line-pack"+g.replace("align-content","").replace(y,"")+g}break;case 973:case 989:if(45!==g.charCodeAt(3)||122===g.charCodeAt(4))break;case 931:case 953:if(!0===A.test(a))return 115===(i=a.substring(a.indexOf(":")+1)).charCodeAt(0)?e(a.replace("stretch","fill-available"),b,c,d).replace(":fill-available",":stretch"):g.replace(i,"-webkit-"+i)+g.replace(i,"-moz-"+i.replace("fill-",""))+g;break;case 962:if(g="-webkit-"+g+(102===g.charCodeAt(5)?"-ms-"+g:"")+g,211===c+d&&105===g.charCodeAt(13)&&0<g.indexOf("transform",10))return g.substring(0,g.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+g}return g}function f(a,b){var c=a.indexOf(1===b?":":"{"),d=a.substring(0,3!==b?c:10);return c=a.substring(c+1,a.length-1),J(2!==b?d:d.replace(z,"$1"),c,b)}function g(a,b){var c=e(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return c!==b+";"?c.replace(x," or ($1)").substring(4):"("+b+")"}function h(a,b,c,d,e,f,g,h,i,j){for(var l,m=0,n=b;m<I;++m)switch(l=H[m].call(k,a,n,c,d,e,f,g,h,i,j)){case void 0:case!1:case!0:case null:break;default:n=l}if(n!==b)return n}function i(a){switch(a){case void 0:case null:I=H.length=0;break;default:if("function"==typeof a)H[I++]=a;else if("object"==typeof a)for(var b=0,c=a.length;b<c;++b)i(a[b]);else K=0| !!a}return i}function j(a){return void 0!==(a=a.prefix)&&(J=null,a?"function"!=typeof a?F=1:(F=2,J=a):F=0),j}function k(a,c){var d=a;if(33>d.charCodeAt(0)&&(d=d.trim()),d=[L=d],0<I){var e=h(-1,c,d,d,D,C,0,0,0,0);void 0!==e&&"string"==typeof e&&(c=e)}var f=b(G,d,c,0,0);return 0<I&& void 0!==(e=h(-2,f,d,d,D,C,f.length,0,0,0))&&(f=e),L="",E=0,C=D=1,f}var l=/^\0+/g,m=/[\0\r\f]/g,n=/: */g,o=/zoo|gra/,p=/([,: ])(transform)/g,q=/,\r+?/g,r=/([\t\r\n ])*\f?&/g,s=/@(k\w+)\s*(\S*)\s*/,t=/::(place)/g,u=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,y=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,C=1,D=1,E=0,F=1,G=[],H=[],I=0,J=null,K=0,L="";return k.use=i,k.set=j,void 0!==a&&j(a),k},i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,k=function(a){var b=Object.create(null);return function(c){return void 0===b[c]&&(b[c]=a(c)),b[c]}}(function(a){return j.test(a)||111===a.charCodeAt(0)&&110===a.charCodeAt(1)&&91>a.charCodeAt(2)}),l=c(8679),m=c.n(l),n=c(3454);function o(){return(o=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var p=function(a,b){for(var c=[a[0]],d=0,e=b.length;d<e;d+=1)c.push(b[d],a[d+1]);return c},q=function(a){return null!==a&&"object"==typeof a&&"[object Object]"===(a.toString?a.toString():Object.prototype.toString.call(a))&&!(0,d.typeOf)(a)},r=Object.freeze([]),s=Object.freeze({});function t(a){return"function"==typeof a}function u(a){return a.displayName||a.name||"Component"}function v(a){return a&&"string"==typeof a.styledComponentId}var w=void 0!==n&&(n.env.REACT_APP_SC_ATTR||n.env.SC_ATTR)||"data-styled",x="undefined"!=typeof window&&"HTMLElement"in window,y=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==n&& void 0!==n.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==n.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==n.env.REACT_APP_SC_DISABLE_SPEEDY&&n.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==n&& void 0!==n.env.SC_DISABLE_SPEEDY&&""!==n.env.SC_DISABLE_SPEEDY&&"false"!==n.env.SC_DISABLE_SPEEDY&&n.env.SC_DISABLE_SPEEDY);function z(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];throw Error("An error occurred. See https://git.io/JUIaE#"+a+" for more information."+(c.length>0?" Args: "+c.join(", "):""))}var A=function(){function a(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var b=a.prototype;return b.indexOfGroup=function(a){for(var b=0,c=0;c<a;c++)b+=this.groupSizes[c];return b},b.insertRules=function(a,b){if(a>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,e=d;a>=e;)(e<<=1)<0&&z(16,""+a);this.groupSizes=new Uint32Array(e),this.groupSizes.set(c),this.length=e;for(var f=d;f<e;f++)this.groupSizes[f]=0}for(var g=this.indexOfGroup(a+1),h=0,i=b.length;h<i;h++)this.tag.insertRule(g,b[h])&&(this.groupSizes[a]++,g++)},b.clearGroup=function(a){if(a<this.length){var b=this.groupSizes[a],c=this.indexOfGroup(a),d=c+b;this.groupSizes[a]=0;for(var e=c;e<d;e++)this.tag.deleteRule(c)}},b.getGroup=function(a){var b="";if(a>=this.length||0===this.groupSizes[a])return b;for(var c=this.groupSizes[a],d=this.indexOfGroup(a),e=d+c,f=d;f<e;f++)b+=this.tag.getRule(f)+"/*!sc*/\n";return b},a}(),B=new Map,C=new Map,D=1,E=function(a){if(B.has(a))return B.get(a);for(;C.has(D);)D++;var b=D++;return B.set(a,b),C.set(b,a),b},F=function(a,b){b>=D&&(D=b+1),B.set(a,b),C.set(b,a)},G="style["+w+'][data-styled-version="5.3.5"]',H=RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),I=function(a,b,c){for(var d,e=c.split(","),f=0,g=e.length;f<g;f++)(d=e[f])&&a.registerName(b,d)},J=function(a,b){for(var c=(b.textContent||"").split("/*!sc*/\n"),d=[],e=0,f=c.length;e<f;e++){var g=c[e].trim();if(g){var h=g.match(H);if(h){var i=0|parseInt(h[1],10),j=h[2];0!==i&&(F(j,i),I(a,j,h[3]),a.getTag().insertRules(i,d)),d.length=0}else d.push(g)}}},K=function(){return"undefined"!=typeof window&& void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},L=function(a){var b=document.head,c=a||b,d=document.createElement("style"),e=function(a){for(var b=a.childNodes,c=b.length;c>=0;c--){var d=b[c];if(d&&1===d.nodeType&&d.hasAttribute(w))return d}}(c),f=void 0!==e?e.nextSibling:null;d.setAttribute(w,"active"),d.setAttribute("data-styled-version","5.3.5");var g=K();return g&&d.setAttribute("nonce",g),c.insertBefore(d,f),d},M=function(){function a(a){var b=this.element=L(a);b.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var b=document.styleSheets,c=0,d=b.length;c<d;c++){var e=b[c];if(e.ownerNode===a)return e}z(17)}(b),this.length=0}var b=a.prototype;return b.insertRule=function(a,b){try{return this.sheet.insertRule(b,a),this.length++,!0}catch(c){return!1}},b.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},b.getRule=function(a){var b=this.sheet.cssRules[a];return void 0!==b&&"string"==typeof b.cssText?b.cssText:""},a}(),N=function(){function a(a){var b=this.element=L(a);this.nodes=b.childNodes,this.length=0}var b=a.prototype;return b.insertRule=function(a,b){if(a<=this.length&&a>=0){var c=document.createTextNode(b),d=this.nodes[a];return this.element.insertBefore(c,d||null),this.length++,!0}return!1},b.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},b.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},a}(),O=function(){function a(a){this.rules=[],this.length=0}var b=a.prototype;return b.insertRule=function(a,b){return a<=this.length&&(this.rules.splice(a,0,b),this.length++,!0)},b.deleteRule=function(a){this.rules.splice(a,1),this.length--},b.getRule=function(a){return a<this.length?this.rules[a]:""},a}(),P=x,Q={isServer:!x,useCSSOMInjection:!y},R=function(){function a(a,b,c){void 0===a&&(a=s),void 0===b&&(b={}),this.options=o({},Q,{},a),this.gs=b,this.names=new Map(c),this.server=!!a.isServer,!this.server&&x&&P&&(P=!1,function(a){for(var b=document.querySelectorAll(G),c=0,d=b.length;c<d;c++){var e=b[c];e&&"active"!==e.getAttribute(w)&&(J(a,e),e.parentNode&&e.parentNode.removeChild(e))}}(this))}a.registerId=function(a){return E(a)};var b=a.prototype;return b.reconstructWithOptions=function(b,c){return void 0===c&&(c=!0),new a(o({},this.options,{},b),this.gs,c&&this.names||void 0)},b.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},b.getTag=function(){var a,b,c,d,e;return this.tag||(this.tag=(c=(b=this.options).isServer,d=b.useCSSOMInjection,e=b.target,a=c?new O(e):d?new M(e):new N(e),new A(a)))},b.hasNameForId=function(a,b){return this.names.has(a)&&this.names.get(a).has(b)},b.registerName=function(a,b){if(E(a),this.names.has(a))this.names.get(a).add(b);else{var c=new Set;c.add(b),this.names.set(a,c)}},b.insertRules=function(a,b,c){this.registerName(a,b),this.getTag().insertRules(E(a),c)},b.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},b.clearRules=function(a){this.getTag().clearGroup(E(a)),this.clearNames(a)},b.clearTag=function(){this.tag=void 0},b.toString=function(){return function(a){for(var b=a.getTag(),c=b.length,d="",e=0;e<c;e++){var f,g=(f=e,C.get(f));if(void 0!==g){var h=a.names.get(g),i=b.getGroup(e);if(h&&i&&h.size){var j=w+".g"+e+'[id="'+g+'"]',k="";void 0!==h&&h.forEach(function(a){a.length>0&&(k+=a+",")}),d+=""+i+j+'{content:"'+k+'"}/*!sc*/\n'}}}return d}(this)},a}(),S=/(a)(d)/gi,T=function(a){return String.fromCharCode(a+(a>25?39:97))};function U(a){var b,c="";for(b=Math.abs(a);b>52;b=b/52|0)c=T(b%52)+c;return(T(b%52)+c).replace(S,"$1-$2")}var V=function(a,b){for(var c=b.length;c;)a=33*a^b.charCodeAt(--c);return a},W=function(a){return V(5381,a)};function X(a){for(var b=0;b<a.length;b+=1){var c=a[b];if(t(c)&&!v(c))return!1}return!0}var Y=W("5.3.5"),Z=function(){function a(a,b,c){this.rules=a,this.staticRulesId="",this.isStatic=(void 0===c||c.isStatic)&&X(a),this.componentId=b,this.baseHash=V(Y,b),this.baseStyle=c,R.registerId(b)}return a.prototype.generateAndInjectStyles=function(a,b,c){var d=this.componentId,e=[];if(this.baseStyle&&e.push(this.baseStyle.generateAndInjectStyles(a,b,c)),this.isStatic&&!c.hash){if(this.staticRulesId&&b.hasNameForId(d,this.staticRulesId))e.push(this.staticRulesId);else{var f=ao(this.rules,a,b,c).join(""),g=U(V(this.baseHash,f)>>>0);if(!b.hasNameForId(d,g)){var h=c(f,"."+g,void 0,d);b.insertRules(d,g,h)}e.push(g),this.staticRulesId=g}}else{for(var i=this.rules.length,j=V(this.baseHash,c.hash),k="",l=0;l<i;l++){var m=this.rules[l];if("string"==typeof m)k+=m;else if(m){var n=ao(m,a,b,c),o=Array.isArray(n)?n.join(""):n;j=V(j,o+l),k+=o}}if(k){var p=U(j>>>0);if(!b.hasNameForId(d,p)){var q=c(k,"."+p,void 0,d);b.insertRules(d,p,q)}e.push(p)}}return e.join(" ")},a}(),$=/^\s*\/\/.*$/gm,_=[":","[",".","#"];function aa(a){var b,c,d,e,f=void 0===a?s:a,g=f.options,i=f.plugins,j=void 0===i?r:i,k=new h(void 0===g?s:g),l=[],m=function(a){function b(b){if(b)try{a(b+"}")}catch(c){}}return function(c,d,e,f,g,h,i,j,k,l){switch(c){case 1:if(0===k&&64===d.charCodeAt(0))return a(d+";"),"";break;case 2:if(0===j)return d+"/*|*/";break;case 3:switch(j){case 102:case 112:return a(e[0]+d),"";default:return d+(0===l?"/*|*/":"")}case -2:d.split("/*|*/}").forEach(b)}}}(function(a){l.push(a)}),n=function(a,d,f){return 0===d&& -1!==_.indexOf(f[c.length])||f.match(e)?a:"."+b};function o(a,f,g,h){void 0===h&&(h="&");var i=a.replace($,"");return b=h,d=RegExp("\\"+(c=f)+"\\b","g"),e=RegExp("(\\"+c+"\\b){2,}"),k(g||!f?"":f,f&&g?g+" "+f+" { "+i+" }":i)}return k.use([].concat(j,[function(a,b,e){2===a&&e.length&&e[0].lastIndexOf(c)>0&&(e[0]=e[0].replace(d,n))},m,function(a){if(-2===a){var b=l;return l=[],b}}])),o.hash=j.length?j.reduce(function(a,b){return b.name||z(15),V(a,b.name)},5381).toString():"",o}var ab=e.createContext(),ac=(ab.Consumer,e.createContext()),ad=(ac.Consumer,new R),ae=aa();function af(){return(0,e.useContext)(ab)||ad}function ag(a){var b=(0,e.useState)(a.stylisPlugins),c=b[0],d=b[1],f=af(),h=(0,e.useMemo)(function(){var b=f;return a.sheet?b=a.sheet:a.target&&(b=b.reconstructWithOptions({target:a.target},!1)),a.disableCSSOMInjection&&(b=b.reconstructWithOptions({useCSSOMInjection:!1})),b},[a.disableCSSOMInjection,a.sheet,a.target]),i=(0,e.useMemo)(function(){return aa({options:{prefix:!a.disableVendorPrefixes},plugins:c})},[a.disableVendorPrefixes,c]);return(0,e.useEffect)(function(){g()(c,a.stylisPlugins)||d(a.stylisPlugins)},[a.stylisPlugins]),e.createElement(ab.Provider,{value:h},e.createElement(ac.Provider,{value:i},a.children))}var ah=function(){function a(a,b){var c=this;this.inject=function(a,b){void 0===b&&(b=ae);var d=c.name+b.hash;a.hasNameForId(c.id,d)||a.insertRules(c.id,d,b(c.rules,d,"@keyframes"))},this.toString=function(){return z(12,String(c.name))},this.name=a,this.id="sc-keyframes-"+a,this.rules=b}return a.prototype.getName=function(a){return void 0===a&&(a=ae),this.name+a.hash},a}(),ai=/([A-Z])/,aj=/([A-Z])/g,ak=/^ms-/,al=function(a){return"-"+a.toLowerCase()};function am(a){return ai.test(a)?a.replace(aj,al).replace(ak,"-ms-"):a}var an=function(a){return null==a|| !1===a||""===a};function ao(a,b,c,d){if(Array.isArray(a)){for(var e,f,g=[],h=0,j=a.length;h<j;h+=1)""!==(f=ao(a[h],b,c,d))&&(Array.isArray(f)?g.push.apply(g,f):g.push(f));return g}if(an(a))return"";if(v(a))return"."+a.styledComponentId;if(t(a))return"function"!=typeof(e=a)||e.prototype&&e.prototype.isReactComponent||!b?a:ao(a(b),b,c,d);return a instanceof ah?c?(a.inject(c,d),a.getName(d)):a:q(a)?function a(b,c){var d,e,f=[];for(var g in b)b.hasOwnProperty(g)&&!an(b[g])&&(Array.isArray(b[g])&&b[g].isCss||t(b[g])?f.push(am(g)+":",b[g],";"):q(b[g])?f.push.apply(f,a(b[g],g)):f.push(am(g)+": "+(d=g,null==(e=b[g])||"boolean"==typeof e||""===e?"":"number"!=typeof e||0===e||d in i?String(e).trim():e+"px")+";"));return c?[c+" {"].concat(f,["}"]):f}(a):a.toString()}var ap=function(a){return Array.isArray(a)&&(a.isCss=!0),a};function aq(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return t(a)||q(a)?ap(ao(p(r,[a].concat(c)))):0===c.length&&1===a.length&&"string"==typeof a[0]?a:ap(ao(p(a,c)))}var ar=function(a,b,c){return void 0===c&&(c=s),a.theme!==c.theme&&a.theme||b||c.theme},as=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,at=/(^-|-$)/g;function au(a){return a.replace(as,"-").replace(at,"")}var av=function(a){return U(W(a)>>>0)};function aw(a){return"string"==typeof a}var ax=function(a){return"function"==typeof a||"object"==typeof a&&null!==a&&!Array.isArray(a)};function ay(a,b,c){var d=a[c];ax(b)&&ax(d)?az(d,b):a[c]=b}function az(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];for(var e=0,f=c;e<f.length;e++){var g,h=f[e];if(ax(h))for(var i in h)"__proto__"!==(g=i)&&"constructor"!==g&&"prototype"!==g&&ay(a,h[i],i)}return a}var aA=e.createContext();aA.Consumer;var aB={};function aC(a,b,c){var d,f,g,h,i,j=v(a),l=!aw(a),n=b.attrs,p=void 0===n?r:n,q=b.componentId,w=void 0===q?(d=b.displayName,f=b.parentComponentId,g="string"!=typeof d?"sc":au(d),aB[g]=(aB[g]||0)+1,h=g+"-"+av("5.3.5"+g+aB[g]),f?f+"-"+h:h):q,x=b.displayName,y=void 0===x?aw(i=a)?"styled."+i:"Styled("+u(i)+")":x,z=b.displayName&&b.componentId?au(b.displayName)+"-"+b.componentId:b.componentId||w,A=j&&a.attrs?Array.prototype.concat(a.attrs,p).filter(Boolean):p,B=b.shouldForwardProp;j&&a.shouldForwardProp&&(B=b.shouldForwardProp?function(c,d,e){return a.shouldForwardProp(c,d,e)&&b.shouldForwardProp(c,d,e)}:a.shouldForwardProp);var C,D=new Z(c,z,j?a.componentStyle:void 0),E=D.isStatic&&0===p.length,F=function(a,b){return function(a,b,c,d){var f,g,h,i,j,l,m,n,p,q,r,u=a.attrs,v=a.componentStyle,w=a.defaultProps,x=a.foldedComponentIds,y=a.shouldForwardProp,z=a.styledComponentId,A=a.target,B=(f=ar(b,(0,e.useContext)(aA),w)||s,g=b,h=u,void 0===f&&(f=s),i=o({},g,{theme:f}),j={},h.forEach(function(a){var b,c,d,e=a;for(b in t(e)&&(e=e(i)),e)i[b]=j[b]="className"===b?(c=j[b],d=e[b],c&&d?c+" "+d:c||d):e[b]}),[i,j]),C=B[0],D=B[1],E=(l=v,m=d,n=C,q=af(),r=(0,e.useContext)(ac)||ae,m?l.generateAndInjectStyles(s,q,r):l.generateAndInjectStyles(n,q,r)),F=D.$as||b.$as||D.as||b.as||A,G=aw(F),H=D!==b?o({},b,{},D):b,I={};for(var J in H)"$"!==J[0]&&"as"!==J&&("forwardedAs"===J?I.as=H[J]:(y?y(J,k,F):!G||k(J))&&(I[J]=H[J]));return b.style&&D.style!==b.style&&(I.style=o({},b.style,{},D.style)),I.className=Array.prototype.concat(x,z,E!==z?E:null,b.className,D.className).filter(Boolean).join(" "),I.ref=c,(0,e.createElement)(F,I)}(C,a,b,E)};return F.displayName=y,(C=e.forwardRef(F)).attrs=A,C.componentStyle=D,C.displayName=y,C.shouldForwardProp=B,C.foldedComponentIds=j?Array.prototype.concat(a.foldedComponentIds,a.styledComponentId):r,C.styledComponentId=z,C.target=j?a.target:a,C.withComponent=function(a){var d=b.componentId,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(b,["componentId"]),f=d&&d+"-"+(aw(a)?a:au(u(a)));return aC(a,o({},e,{attrs:A,componentId:f}),c)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=j?az({},a.defaultProps,b):b}}),C.toString=function(){return"."+C.styledComponentId},l&&m()(C,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var aD,aE=function(a){return function a(b,c,e){if(void 0===e&&(e=s),!(0,d.isValidElementType)(c))return z(1,String(c));var f=function(){return b(c,e,aq.apply(void 0,arguments))};return f.withConfig=function(d){return a(b,c,o({},e,{},d))},f.attrs=function(d){return a(b,c,o({},e,{attrs:Array.prototype.concat(e.attrs,d).filter(Boolean)}))},f}(aC,a)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(a){aE[a]=aE(a)}),function(){function a(a,b){this.rules=a,this.componentId=b,this.isStatic=X(a),R.registerId(this.componentId+1)}var b=a.prototype;b.createStyles=function(a,b,c,d){var e=d(ao(this.rules,b,c,d).join(""),""),f=this.componentId+a;c.insertRules(f,f,e)},b.removeStyles=function(a,b){b.clearRules(this.componentId+a)},b.renderStyles=function(a,b,c,d){a>2&&R.registerId(this.componentId+a),this.removeStyles(a,c),this.createStyles(a,b,c,d)}}(),aD=(function a(){var b=this;this._emitSheetCSS=function(){var a=b.instance.toString();if(!a)return"";var c=K();return"<style "+[c&&'nonce="'+c+'"',w+'="true"','data-styled-version="5.3.5"'].filter(Boolean).join(" ")+">"+a+"</style>"},this.getStyleTags=function(){return b.sealed?z(2):b._emitSheetCSS()},this.getStyleElement=function(){if(b.sealed)return z(2);var a,c=((a={})[w]="",a["data-styled-version"]="5.3.5",a.dangerouslySetInnerHTML={__html:b.instance.toString()},a),d=K();return d&&(c.nonce=d),[e.createElement("style",o({},c,{key:"sc-0-0"}))]},this.seal=function(){b.sealed=!0},this.instance=new R({isServer:!0}),this.sealed=!1}).prototype,aD.collectStyles=function(a){return this.sealed?z(2):e.createElement(ag,{sheet:this.instance},a)},aD.interleaveWithNodeStream=function(a){return z(3)};var aF=aE},5816:function(a,b,c){"use strict";c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(3333),g=c(4444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.7.31",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.9.3";function L(a,b={}){if("object"!=typeof b){let c=b;b={name:c}}let d=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),f=d.name;if("string"!=typeof f||!f)throw I.create("bad-app-name",{appName:String(f)});let h=D.get(f);if(h){if((0,g.vZ)(a,h.options)&&(0,g.vZ)(d,h.config))return h;throw I.create("duplicate-app",{appName:f})}let i=new e.H0(f);for(let j of E.values())i.addComponent(j);let k=new J(a,d,i);return D.set(f,k),k}function M(a=B){let b=D.get(a);if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){var b;try{let c=await Q();return c.transaction(O).objectStore(O).get(T(a))}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null===(b=d)|| void 0===b?void 0:b.message});A.warn(e.message)}}}async function S(a,b){var c;try{let d=await Q(),e=d.transaction(O,"readwrite"),f=e.objectStore(O);return await f.put(b,T(a)),e.done}catch(h){if(h instanceof g.ZR)A.warn(h.message);else{let i=I.create("idb-set",{originalErrorMessage:null===(c=h)|| void 0===c?void 0:c.message});A.warn(i.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){"use strict";c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(4444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},3333:function(a,b,c){"use strict";var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})},7297:function(a,b,c){"use strict";function d(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}c.d(b,{Z:function(){return d}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])