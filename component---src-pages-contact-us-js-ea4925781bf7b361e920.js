(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[60],{470:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#586868","images":{"fallback":{"src":"/static/d843fa973079eedd0f6623f60cb83ba7/c65c0/team_01.jpg","srcSet":"/static/d843fa973079eedd0f6623f60cb83ba7/43317/team_01.jpg 93w,\\n/static/d843fa973079eedd0f6623f60cb83ba7/1e247/team_01.jpg 185w,\\n/static/d843fa973079eedd0f6623f60cb83ba7/c65c0/team_01.jpg 370w","sizes":"(min-width: 370px) 370px, 100vw"},"sources":[{"srcSet":"/static/d843fa973079eedd0f6623f60cb83ba7/42c7b/team_01.webp 93w,\\n/static/d843fa973079eedd0f6623f60cb83ba7/b7b2f/team_01.webp 185w,\\n/static/d843fa973079eedd0f6623f60cb83ba7/3217d/team_01.webp 370w","type":"image/webp","sizes":"(min-width: 370px) 370px, 100vw"}]},"width":370,"height":260}')},6633:function(e,t,n){e.exports=n(2465)},3344:function(e,t,n){"use strict";var r=n(1599),a=n(7202),o=n(116),s=n(8710),i=n(3656),c=n(2306),u=n(778),l=n(1191);e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+h)}var v=i(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};a(t,n,o),m=null}},m.onabort=function(){m&&(n(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){n(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in m&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),n(e),m=null)})),f||(f=null),m.send(f)}))}},2465:function(e,t,n){"use strict";var r=n(1599),a=n(6013),o=n(2234),s=n(5469);function i(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=i(n(8943));c.Axios=o,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=n(6114),c.CancelToken=n(4396),c.isCancel=n(7458),c.all=function(e){return Promise.all(e)},c.spread=n(2744),c.isAxiosError=n(6683),e.exports=c,e.exports.default=c},6114:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4396:function(e,t,n){"use strict";var r=n(6114);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,n){"use strict";var r=n(1599),a=n(8710),o=n(5950),s=n(4126),i=n(5469);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=c},5950:function(e,t,n){"use strict";var r=n(1599);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},3656:function(e,t,n){"use strict";var r=n(789),a=n(7020);e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},1191:function(e,t,n){"use strict";var r=n(7822);e.exports=function(e,t,n,a,o){var s=new Error(e);return r(s,t,n,a,o)}},4126:function(e,t,n){"use strict";var r=n(1599),a=n(7989),o=n(7458),s=n(8943);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7822:function(e){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5469:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||{};var n={},a=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(e[a],t[a])}r.forEach(a,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,u),r.forEach(s,(function(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(void 0,t[a])})),r.forEach(i,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=a.concat(o).concat(s).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},7202:function(e,t,n){"use strict";var r=n(1191);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},7989:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},8943:function(e,t,n){"use strict";var r=n(1599),a=n(4188),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(i=n(3344)),i),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8710:function(e,t,n){"use strict";var r=n(1599);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(a(t)+"="+a(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6683:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},778:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},4188:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2306:function(e,t,n){"use strict";var r=n(1599),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&a.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1599:function(e,t,n){"use strict";var r=n(6013),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},4316:function(e,t,n){var r=n(2767),a=n(9056),o=a;o.v1=r,o.v4=a,e.exports=o},2353:function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,a=t;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}},237:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},2767:function(e,t,n){var r,a,o=n(237),s=n(2353),i=0,c=0;e.exports=function(e,t,n){var u=t&&n||0,l=t||[],f=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:a;if(null==f||null==d){var m=o();null==f&&(f=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==d&&(d=a=16383&(m[6]<<8|m[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:c+1,v=p-i+(h-c)/1e4;if(v<0&&void 0===e.clockseq&&(d=d+1&16383),(v<0||p>i)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=p,c=h,a=d;var g=(1e4*(268435455&(p+=122192928e5))+h)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var b=p/4294967296*1e4&268435455;l[u++]=b>>>8&255,l[u++]=255&b,l[u++]=b>>>24&15|16,l[u++]=b>>>16&255,l[u++]=d>>>8|128,l[u++]=255&d;for(var E=0;E<6;++E)l[u+E]=f[E];return t||s(l)}},9056:function(e,t,n){var r=n(237),a=n(2353);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var i=0;i<16;++i)t[o+i]=s[i];return t||a(s)}},9430:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,{default:function(){return d}});var a=n(3552),o=n(7294),s=n(1645),i=n(6802),c=n(5414),u=n(6633),l=n.n(u),f=n(4316),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"",email:"",subject:"",content:"",loading:!1},n.handleInputChange=n.handleInputChange.bind(r(n)),n.handleSubmit=n.handleSubmit.bind(r(n)),n}(0,a.Z)(t,e);var u=t.prototype;return u.handleInputChange=function(e){var t,n=e.target,r=n.name,a=n.value;this.setState(((t={})[r]=a,t))},u.handleSubmit=function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),l().put("https://api.contentful.com/spaces/5jo55pzix7dl/environments/master/entries/"+(0,f.v4)(),{fields:{name:{"en-US":this.state.name},email:{"en-US":this.state.email},subject:{"en-US":this.state.subject},content:{"en-US":this.state.content}}},{headers:{"X-Contentful-Content-Type":"contactForm",Authorization:"Bearer CFPAT--oO7XY1q3w8WNzgSelVpiud4Dpc6cly9oXHDlN26hrs"}}).then((function(e){alert("Thank you for getting in touch!  One of our colleagues will get back in touch with you soon. Have a great day!"),t.setState({name:"",email:"",subject:"",content:"",loading:!1})})).catch((function(e){console.log(e),t.setState({loading:!1})}))},u.render=function(){return o.createElement(s.Z,null,o.createElement(c.q,null,o.createElement("title",null,"Contact us")),o.createElement("div",{className:"page-heading contact-heading header-text"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12"},o.createElement("div",{className:"text-content"},o.createElement("h4",null,"Lorem ipsum dolor"),o.createElement("h2",null,"Contact Us")))))),o.createElement("div",{className:"find-us"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12"},o.createElement("div",{className:"section-heading"},o.createElement("h2",null,"Our Location on Maps"))),o.createElement("div",{className:"col-md-8"},o.createElement("div",{id:"map"},o.createElement("iframe",{title:"Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9406592077976!2d105.85963921528757!3d20.99501568601665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0fd6efffff%3A0xcd0762df50adef3e!2sFFW!5e0!3m2!1sen!2s!4v1626862231828!5m2!1sen!2s",width:"100%",height:"450",allowFullScreen:"",loading:"lazy",frameBorder:"0"}))),o.createElement("div",{className:"col-md-4"},o.createElement("div",{className:"left-content"},o.createElement("h4",null,"About our office"),o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.",o.createElement("br",null),o.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti."),o.createElement("ul",{className:"social-icons"},o.createElement("li",null,o.createElement("a",{href:"https://facebook.com"},o.createElement("i",{className:"fa fa-facebook"}))),o.createElement("li",null,o.createElement("a",{href:"https://facebook.com"},o.createElement("i",{className:"fa fa-twitter"}))),o.createElement("li",null,o.createElement("a",{href:"https://facebook.com"},o.createElement("i",{className:"fa fa-linkedin"}))),o.createElement("li",null,o.createElement("a",{href:"https://facebook.com"},o.createElement("i",{className:"fa fa-behance"}))))))))),o.createElement("div",{className:"send-message"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12"},o.createElement("div",{className:"section-heading"},o.createElement("h2",null,"Send us a Message"))),o.createElement("div",{className:"col-md-8"},o.createElement("div",{className:"contact-form"},o.createElement("form",{id:"contact",action:"",method:"post"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},o.createElement("fieldset",null,o.createElement("input",{name:"name",type:"text",className:"form-control",id:"name",value:this.state.name,placeholder:"Full Name",onChange:this.handleInputChange,required:""}))),o.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},o.createElement("fieldset",null,o.createElement("input",{name:"email",type:"text",value:this.state.email,className:"form-control",onChange:this.handleInputChange,id:"email",placeholder:"E-Mail Address",required:""}))),o.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},o.createElement("fieldset",null,o.createElement("input",{name:"subject",type:"text",value:this.state.subject,className:"form-control",onChange:this.handleInputChange,id:"subject",placeholder:"Subject",required:""}))),o.createElement("div",{className:"col-lg-12"},o.createElement("fieldset",null,o.createElement("textarea",{name:"content",rows:"6",className:"form-control",id:"content",value:this.state.content,placeholder:"Your Message",onChange:this.handleInputChange,required:""}))),o.createElement("div",{className:"col-lg-12"},o.createElement("fieldset",null,o.createElement("button",{type:"submit",id:"form-submit",className:"filled-button",onClick:this.handleSubmit,disabled:this.state.loading},this.state.loading?"Loading":"Send Message"))))))),o.createElement("div",{className:"col-md-4"},o.createElement(i.S,{className:"img-fluid",src:"../assets/images/team_01.jpg",alt:"A dinosaur",__imageData:n(470)}),o.createElement("h5",{className:"text-center"},"John Doe"))))))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-ea4925781bf7b361e920.js.map