(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6616)}])},6616:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var r=i(85893),n=i(67294);i(9008);var s=i(204),a=i(95518),o=i(87793),u=i(75639);function h(){(0,u.k9e)(),(0,u.pX8)(),(0,u.SFn)();let[e,t]=(0,n.useState)(!0),[i,h]=(0,n.useState)(null),f=e=>{h(e)},d=()=>{h(null)};return(0,r.jsx)(u.wyl,{activeChain:"arbitrum-goerli",supportedWallets:[(0,u.k9e)()],children:(0,r.jsx)("div",{className:"moving-background",children:(0,r.jsxs)(s.k,{className:"BagelFatOne",justify:"space-between",align:"center",padding:"30px",children:[(0,r.jsx)(a.r,{href:"/",children:(0,r.jsx)(o.E,{src:"/images/LOGO.png",width:"175px",margin:"0 100px"})}),(0,r.jsx)(s.k,{justify:"space-between",align:"center",padding:"30px",children:[{name:"About",href:"/about"},{name:"Mint",href:"/mint"},{name:"Game",href:"/game"}].map((e,t)=>(0,r.jsx)("a",{href:e.href,style:{margin:"0 8px",padding:"10px 30px",backgroundColor:i===t?"#b1b8f2":"#929bed",color:i===t?"black":"white",cursor:"pointer",textDecoration:"none",borderRadius:"10%",fontSize:"20px",lineHeight:"0.75"},onMouseEnter:()=>f(t),onMouseLeave:d,children:e.name},t))})]})})})}i(44720),i(9669),i(57460)},57460:function(e,t){var i,r;void 0!==(r="function"==typeof(i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},i=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(i,r){var o,u=(r=r||{}).dynamicTyping||!1;if(b(u)&&(r.dynamicTypingFunction=u,u={}),r.dynamicTyping=u,r.transform=!!b(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var c=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,r,o=(i=t.URL||t.webkitURL||null,r=e.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=_,u.id=s++,n[u.id]=u}();return c.userStep=r.step,c.userChunk=r.chunk,c.userComplete=r.complete,c.userError=r.error,r.step=b(r.step),r.chunk=b(r.chunk),r.complete=b(r.complete),r.error=b(r.error),delete r.worker,void c.postMessage({input:i,config:r,workerId:c.id})}var p=null;return a.NODE_STREAM_INPUT,"string"==typeof i?(i=65279===(o=i).charCodeAt(0)?o.slice(1):o,p=r.download?new h(r):new d(r)):!0===i.readable&&b(i.read)&&b(i.on)?p=new l(r):(t.File&&i instanceof File||i instanceof Object)&&(p=new f(r)),p.stream(i)},unparse:function(e,t){var i=!1,r=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,f=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(d=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var l=RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return c(null,e,h);if("object"==typeof e[0])return c(f||Object.keys(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||f),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),c(e.fields||[],e.data||[],h);throw Error("Unable to serialize unrecognized input");function c(e,t,i){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&r){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=g(e[h],h);0<t.length&&(a+=s)}for(var f=0;f<t.length;f++){var d=o?e.length:t[f].length,l=!1,c=o?0===Object.keys(t[f]).length:0===t[f].length;if(i&&!o&&(l="greedy"===i?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===i&&o){for(var p=[],_=0;_<d;_++){var m=u?e[_]:_;p.push(t[f][m])}l=""===p.join("").trim()}if(!l){for(var y=0;y<d;y++){0<y&&!c&&(a+=n);var v=o&&u?e[y]:y;a+=g(t[f][v],y)}f<t.length-1&&(!i||0<d&&!c)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;d&&"string"==typeof e&&d.test(e)&&(e="'"+e,r=!0);var s=e.toString().replace(l,u);return(r=r||!0===i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP="\x1e",a.UNIT_SEP="\x1f",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=c,a.NetworkStreamer=h,a.FileStreamer=f,a.StringStreamer=d,a.ReadableStreamStreamer=l,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var i=e.config||{},r=[];return this.each(function(e){if(!("INPUT"===o(this).prop("tagName").toUpperCase()&&"file"===o(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)r.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},i)})}),n(),this;function n(){if(0!==r.length){var t,i,n,u=r[0];if(b(e.before)){var h=e.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return t=u.file,i=u.inputElem,n=h.reason,void(b(e.error)&&e.error({name:"AbortError"},t,i,n));if("skip"===h.action)return void s();"object"==typeof h.config&&(u.instanceConfig=o.extend(u.instanceConfig,h.config))}else if("skip"===h)return void s()}var f=u.instanceConfig.complete;u.instanceConfig.complete=function(e){b(f)&&f(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else b(e.complete)&&e.complete()}function s(){r.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,i){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substring(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var i=t.statusText||e;this._sendError(Error(i))}}function f(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var t,i,r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,i=this._config.chunkSize;return i?(e=t.substring(0,i),t=t.substring(i)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=k(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=k(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=k(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=k(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function c(e){var t,i,r,n=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,s=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,o=this,u=0,h=0,f=!1,d=!1,l=[],c={data:[],errors:[],meta:{}};if(b(e.step)){var _=e.step;e.step=function(t){if(c=t,k())y();else{if(y(),0===c.data.length)return;u+=t.data.length,e.preview&&u>e.preview?i.abort():(c.data=c.data[0],_(c,o))}}}function m(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function y(){return c&&r&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(c.data=c.data.filter(function(e){return!m(e)})),k()&&function(){if(c){if(Array.isArray(c.data[0])){for(var t=0;k()&&t<c.data.length;t++)c.data[t].forEach(i);c.data.splice(0,1)}else c.data.forEach(i)}function i(t,i){b(e.transformHeader)&&(t=e.transformHeader(t,i)),l.push(t)}}(),function(){if(!c||!e.header&&!e.dynamicTyping&&!e.transform)return c;function t(t,i){var r,a=e.header?{}:[];for(r=0;r<t.length;r++){var o,u,f=r,d=t[r];e.header&&(f=r>=l.length?"__parsed_extra":l[r]),e.transform&&(d=e.transform(d,f)),o=f,u=d,e.dynamicTypingFunction&&void 0===e.dynamicTyping[o]&&(e.dynamicTyping[o]=e.dynamicTypingFunction(o)),d=!0===(e.dynamicTyping[o]||e.dynamicTyping)?"true"===u||"TRUE"===u||"false"!==u&&"FALSE"!==u&&(!function(e){if(n.test(e)){var t=parseFloat(e);if(-9007199254740992<t&&t<9007199254740992)return!0}return!1}(u)?s.test(u)?new Date(u):""===u?null:u:parseFloat(u)):u,"__parsed_extra"===f?(a[f]=a[f]||[],a[f].push(d)):a[f]=d}return e.header&&(r>l.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,h+i):r<l.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,h+i)),a}var i=1;return!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(t),i=c.data.length):c.data=t(c.data,0),e.header&&c.meta&&(c.meta.fields=l),h+=i,c}()}function k(){return e.header&&0===l.length}function E(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(n,u)),r=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(n),c.meta.delimiter=e.delimiter);else{var h=function(t,i,r,n,s){var o,u,h,f;s=s||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var l=s[d],c=0,p=0,_=0;h=void 0;for(var y=new g({comments:n,delimiter:l,newline:i,preview:10}).parse(t),v=0;v<y.data.length;v++)if(r&&m(y.data[v]))_++;else{var k=y.data[v].length;p+=k,void 0!==h?0<k&&(c+=Math.abs(k-h),h=k):h=k}0<y.data.length&&(p/=y.data.length-_),(void 0===u||c<=u)&&(void 0===f||f<p)&&1.99<p&&(u=c,o=l,f=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(r=!0,e.delimiter=a.DefaultDelimiter),c.meta.delimiter=e.delimiter}var d=v(e);return e.preview&&e.header&&d.preview++,t=n,c=(i=new g(d)).parse(t,s,o),y(),f?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,i.abort(),t=b(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){o.streamer._halted?(f=!1,o.streamer.parseChunk(t,!0)):setTimeout(o.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,i.abort(),c.meta.aborted=!0,b(e.complete)&&e.complete(c),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,i=(e=e||{}).delimiter,r=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=","),n===i)throw Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var f=0,d=!1;this.parse=function(a,l,c){if("string"!=typeof a)throw Error("Input must be a string");var g=a.length,_=i.length,m=r.length,y=n.length,v=b(s),k=[],E=[],w=[],R=f=0;if(!a)return Q();if(e.header&&!l){var C=a.split(r)[0].split(i),x=[],S={},O=!1;for(var A in C){var I=C[A];b(e.transformHeader)&&(I=e.transformHeader(I,A));var T=I,D=S[I]||0;for(0<D&&(O=!0,T=I+"_"+D),S[I]=D+1;x.includes(T);)T=T+"_"+D;x.push(T)}if(O){var L=a.split(r);L[0]=x.join(i),a=L.join(r)}}if(u||!1!==u&&-1===a.indexOf(t)){for(var F=a.split(r),j=0;j<F.length;j++){if(f+=(w=F[j]).length,j!==F.length-1)f+=r.length;else if(c)break;if(!n||w.substring(0,y)!==n){if(v){if(k=[],B(w.split(i)),J(),d)return Q()}else B(w.split(i));if(o&&o<=j)return k=k.slice(0,o),Q(!0)}}return Q()}for(var z=a.indexOf(i,f),M=a.indexOf(r,f),N=RegExp(p(h)+p(t),"g"),P=a.indexOf(t,f);;)if(a[f]!==t){if(n&&0===w.length&&a.substring(f,f+y)===n){if(-1===M)return Q();f=M+m,M=a.indexOf(r,f),z=a.indexOf(i,f)}else if(-1!==z&&(z<M||-1===M))w.push(a.substring(f,z)),f=z+_,z=a.indexOf(i,f);else{if(-1===M)break;if(w.push(a.substring(f,M)),H(M+m),v&&(J(),d))return Q();if(o&&k.length>=o)return Q(!0)}}else for(P=f,f++;;){if(-1===(P=a.indexOf(t,P+1)))return c||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:f}),K();if(P===g-1)return K(a.substring(f,P).replace(N,t));if(t!==h||a[P+1]!==h){if(t===h||0===P||a[P-1]!==h){-1!==z&&z<P+1&&(z=a.indexOf(i,P+1)),-1!==M&&M<P+1&&(M=a.indexOf(r,P+1));var U=W(-1===M?z:Math.min(z,M));if(a.substr(P+1+U,_)===i){w.push(a.substring(f,P).replace(N,t)),a[f=P+1+U+_]!==t&&(P=a.indexOf(t,f)),z=a.indexOf(i,f),M=a.indexOf(r,f);break}var q=W(M);if(a.substring(P+1+q,P+1+q+m)===r){if(w.push(a.substring(f,P).replace(N,t)),H(P+1+q+m),z=a.indexOf(i,f),P=a.indexOf(t,f),v&&(J(),d))return Q();if(o&&k.length>=o)return Q(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:f}),P++}}else P++}return K();function B(e){k.push(e),R=f}function W(e){var t=0;if(-1!==e){var i=a.substring(P+1,e);i&&""===i.trim()&&(t=i.length)}return t}function K(e){return c||(void 0===e&&(e=a.substring(f)),w.push(e),f=g,B(w),v&&J()),Q()}function H(e){f=e,B(w),w=[],M=a.indexOf(r,f)}function Q(e){return{data:k,errors:E,meta:{delimiter:i,linebreak:r,aborted:d,truncated:!!e,cursor:R+(l||0)}}}function J(){s(Q()),k=[],E=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return f}}function _(e){var t=e.data,i=n[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(i.userStep)){for(var a=0;a<t.results.data.length&&(i.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!r);a++);delete t.results}else b(i.userChunk)&&(i.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&m(t.workerId,t.results)}function m(e,t){var i=n[e];b(i.userComplete)&&i.userComplete(t),i.terminate(),delete n[e]}function y(){throw Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=v(e[i]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var i=e.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(t.File&&i.input instanceof File||i.input instanceof Object){var r=a.parse(i.input,i.config);r&&t.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(f.prototype=Object.create(u.prototype)).constructor=f,(d.prototype=Object.create(d.prototype)).constructor=d,(l.prototype=Object.create(u.prototype)).constructor=l,a})?i.apply(t,[]):i)&&(e.exports=r)}},function(e){e.O(0,[5904,9774,2888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);