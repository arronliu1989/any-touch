(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1e96264"],{"0d21":function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return n}))},"35bd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"p-2"},[r("ButtonLoadFile",{staticClass:"a-button a-button--primary",on:{loaded:t.onImageLoaded}}),r("Crop",{ref:"crop",staticClass:"mt-2",staticStyle:{border:"1px solid #69c"},attrs:{width:t.width,height:t.height,img:t.img,point:t.point,offset:t.offset,org:t.org,scale:t.scale,angle:t.angle},on:{"update:point":function(e){t.point=e},"update:offset":function(e){t.offset=e}}}),r("hr",{staticClass:"mt-2"}),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.point[0],expression:"point[0]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.point[0]},on:{__r:function(e){t.$set(t.point,0,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" 图片顶点X: "+t._s(t.point[0])+" ")]),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.point[1],expression:"point[1]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.point[1]},on:{__r:function(e){t.$set(t.point,1,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" 图片顶点Y: "+t._s(t.point[1])+" ")]),r("hr",{staticClass:"mt-2"}),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.offset[0],expression:"offset[0]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.offset[0]},on:{__r:function(e){t.$set(t.offset,0,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" OffsetX: "+t._s(t.offset[0])+" ")]),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.offset[1],expression:"offset[1]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.offset[1]},on:{__r:function(e){t.$set(t.offset,1,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" OffsetY: "+t._s(t.offset[1])+" ")]),r("hr",{staticClass:"mt-2"}),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.org[0],expression:"org[0]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.org[0]},on:{__r:function(e){t.$set(t.org,0,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" OX:"+t._s(t.org[0])+" ")]),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.org[1],expression:"org[1]",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:t.org[1]},on:{__r:function(e){t.$set(t.org,1,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" OY:"+t._s(t.org[1])+" ")]),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],attrs:{min:"0.1",max:"2",step:"0.1",type:"range"},domProps:{value:t.scale},on:{__r:function(e){t.scale=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" Scale: "+t._s(t.scale)+" ")]),r("label",{staticClass:"a-input"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.angle,expression:"angle",modifiers:{number:!0}}],attrs:{type:"range",max:"360"},domProps:{value:t.angle},on:{__r:function(e){t.angle=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" A:"+t._s(t.angle)+" ")])],1)},i=[],o=r("3835"),a=r("e02c"),s=r.n(a),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"button-load-file"},[r("input",{attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.onChange}}),t._t("default",[t._v("Upload")])],2)},u=[];r("a630"),r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("e6cf");function h(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){h(o,n,i,a,s,"next",t)}function s(t){h(o,n,i,a,s,"throw",t)}a(void 0)}))}}var f={},d=function(t){return new Promise((function(e,r){if(f[t])e(f[t]);else{var n=new Image;n.onload=function(){f[t]=n,e(n)},n.onerror=r,n.src=t}}))},p={name:"ButtonLoadFile",props:{cropSize:{type:Array,default:function(){return[426,269]}}},computed:{cropRate:function(){return this.cropSize[0]/this.cropSize[1]}},data:function(){return{url:""}},methods:{readFile:function(t){var e=this;return new Promise((function(r,n){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){var t=l(regeneratorRuntime.mark((function t(n){var i,o,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(n.target.result);case 2:i=t.sent,o=i.width,a=i.height,s=e.crop(i),r({source:{url:n.target.result,img:i,width:o,height:a},crop:s});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.onerror=n}))},onChange:function(t){var e=this;return l(regeneratorRuntime.mark((function r(){var n,i,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t.target,i=n.files,o=Array.from(i),!(0<o.length)){r.next=10;break}return r.next=6,Promise.all(o.map(function(){var t=l(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.readFile(r));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:a=r.sent,e.$emit("loaded",a),r.next=11;break;case 10:e.$emit("reset");case 11:case"end":return r.stop()}}),r)})))()},crop:function(t){var e=document.createElement("canvas"),r=e.getContext("2d"),n=t.width,i=t.height,o=n/i,a=n,s=i,c=0,u=0,h="x";this.cropRate>o?(h="y",s=a/this.cropRate,c=(i-s)/2):(a=s*this.cropRate,u=(n-a)/2),e.width=this.cropSize[0],e.height=this.cropSize[1];var l=[t,u,c,a,s,0,0,this.cropSize[0],this.cropSize[1]];r.drawImage.apply(r,l);var f=e.toDataURL();return{url:f,x:u,y:c,width:a,height:s,cropAxis:h,cropRate:this.cropRate,args:l}}}},v=p,m=(r("46a8"),r("2877")),g=Object(m["a"])(v,c,u,!1,null,null,null),y=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("canvas",{staticStyle:{width:"100%"},attrs:{width:t.width,height:t.height}})},b=[],x=(r("a9e3"),{name:"Crop",props:{width:{type:Number,default:300},height:{type:Number,default:300},img:{type:Image},scale:{type:Number,default:1},org:{type:Array,default:function(){return[0,0]}},angle:{type:Number,default:0},point:{type:Array,default:function(){return[0,0]}},offset:{type:Array,default:function(){return[0,0]}}},data:function(){return{context:null,imageApexPointInCanvas:null,offsetInCanvas:null,imgWidth:null,imgHeight:null}},computed:{rad:function(){return this.angle*Math.PI/180}},watch:{img:function(t){var e=this.getCenterRect(t.width,t.height,this.width,this.height),r=e.top,n=e.left,i=e.width,o=e.height;this.offsetInCanvas=[n,r],this.imgWidth=i,this.imgHeight=o;var a=this.switchCoordinateToStandard(this.offsetInCanvas);this.$emit("update:offset",a),this.render()},offset:{deep:!0,handler:function(){this.offsetInCanvas=this.swtichCoordinateToCanvas(this.offset),this.render()}},scale:function(){var t=this.switchCoordinateToStandard(this.offsetInCanvas);this.$emit("update:offset",t),this.render()},org:function(){this.imageApexPointInCanvas=this.getPositionInCanvas(this.point),this.render()},angle:function(t){this.render()}},mounted:function(){var t=this;this.context=this.$el.getContext("2d"),this.imageApexPointInCanvas=this.getPositionInCanvas(this.point),this.offsetInCanvas=this.swtichCoordinateToCanvas(this.offset),this.$nextTick((function(){t.render()}))},methods:{getCenterRect:function(t,e,r,n){console.log({viewWidth:r,viewHeight:n,width:t,height:e});var i=[t/r,e/n];if(i[0]>i[1]){var o=Math.floor(r*e/t);return{width:r,height:o,top:(n-o)/2,left:0}}var a=Math.floor(n*t/e);return{width:a,height:n,top:0,left:(r-a)/2}},swtichCoordinateToCanvas:function(t){var e=Object(o["a"])(t,2),r=e[0],n=e[1],i=this.rad;return[(Math.cos(i)*r+Math.sin(i)*n)/this.scale,(-Math.sin(i)*r+Math.cos(i)*n)/this.scale]},switchCoordinateToStandard:function(t){var e=Object(o["a"])(t,2),r=e[0],n=e[1],i=this.rad;return[(Math.cos(i)*r-Math.sin(i)*n)*this.scale,(Math.sin(i)*r+Math.cos(i)*n)*this.scale]},getPositionInCanvas:function(t){var e=Object(o["a"])(t,2),r=e[0],n=e[1],i=r-this.org[0],a=n-this.org[1];return this.swtichCoordinateToCanvas([i,a])},render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.width,t.height;if(this.img){var e=this.context,r=this.rad;e.clearRect(0,0,this.width,this.height),this.drawChessboard(),e.save(),e.translate(this.org[0],this.org[1]),e.scale(this.scale,this.scale),e.rotate(r);var n=Object(o["a"])(this.imageApexPointInCanvas,2),i=n[0],a=n[1],s=this.switchCoordinateToStandard(this.imageApexPointInCanvas),c=[this.org[0]+s[0],this.org[1]+s[1]];this.$emit("update:point",c),console.log(this.offsetInCanvas[0]+i,this.offsetInCanvas[1]+a,this.imgWidth,this.imgHeight),e.drawImage(this.img,0,0,this.img.width,this.img.height,this.offsetInCanvas[0]+i,this.offsetInCanvas[1]+a,this.imgWidth,this.imgHeight),e.fillStyle="#d10",e.fillRect(-10/this.scale,-10/this.scale,20/this.scale,20/this.scale),e.restore()}},drawRect:function(){var t=this.img,e=t.width,r=t.height;this.context.save(),this.context.fillStyle="rgba(0,0,0,0.6)",this.context.fillRect(0,0,e,r),this.context.restore()},drawNineGrid:function(t,e,r,n){var i=this.context,o=3,a=[r/o,n/o];i.save(),i.strokeStyle="#fff";for(var s=0;s<=o;s++){var c=a[0]*s;i.moveTo(t+c,e),i.lineTo(t+c,e+n);var u=a[1]*s;i.moveTo(t,e+u),i.lineTo(t+r,e+u)}i.stroke(),i.restore()},drawChessboard:function(){var t=this.context,e=10,r=[this.width/e,this.height/e],n={"#fff":"#ddd","#ddd":"#fff"};t.save();for(var i="#ddd",o=i,a=0;a<=r[0];a++){for(var s=0;s<r[1];s++){t.fillStyle=i;var c=0+e*a,u=0+e*s;t.fillRect(c,u,e,e),i=n[i]}o=n[o],i=o}t.stroke(),t.restore()},drawChessboard1:function(){var t=this.context,e=[40,Math.ceil(40*this.height/this.width)],r=this.width/e[0],n={"#fff":"#ddd","#ddd":"#fff"};t.save();for(var i="#ddd",o=i,a=0;a<=e[0];a++){for(var s=0;s<e[1];s++){t.fillStyle=i;var c=0+r*a,u=0+r*s;t.fillRect(c,u,r,r),i=n[i]}o=n[o],i=o}t.stroke(),t.restore()}}}),_=x,C=(r("784f"),Object(m["a"])(_,w,b,!1,null,null,null)),L=C.exports,P={name:"DIY",components:{ButtonLoadFile:y,Crop:L},data:function(){return{context:null,img:null,org:[150,150],angle:0,point:[0,0],scale:1,offset:[0,0],width:300,height:300}},computed:{moveRate:function(){var t;return(null===(t=this.$refs.crop.$el)||void 0===t?void 0:t.offsetWidth)/this.width}},methods:{onPanmove:function(t){var e=t.deltaX,r=t.deltaY,n=Object(o["a"])(this.offset,2),i=n[0],a=n[1];this.offset=[i+e/this.moveRate,a+r/this.moveRate]},onRotatemove:function(t){var e=t.deltaAngle;this.angle+=e},onPinchmove:function(t){var e=t.deltaScale;this.scale=Math.round(this.scale*e*100)/100},onImageLoaded:function(t){var e=t[0].source.img;this.img=e},changeOrg:function(t){var e=t.x,r=t.y,n=this.$refs.crop.$el.getBoundingClientRect(),i=[(e-n.left)/this.moveRate,(r-n.top)/this.moveRate];this.org=i}},mounted:function(){var t=new s.a(this.$refs.crop.$el);t.on("panmove",this.onPanmove.bind(this)),t.on("pinchstart",this.changeOrg.bind(this)),t.on("rotatestart",this.changeOrg.bind(this)),t.on("pinchmove",this.onPinchmove.bind(this)),t.on("rotatemove",this.onRotatemove.bind(this)),t.on("tap",this.changeOrg.bind(this))}},R=P,O=(r("7e25"),Object(m["a"])(R,n,i,!1,null,null,null));e["default"]=O.exports},3835:function(t,e,r){"use strict";var n=r("0d21");r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function i(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(c){i=!0,o=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(i)throw o}}return r}}var o=r("3d8c");function a(t,e){return Object(n["a"])(t)||i(t,e)||Object(o["a"])()}r.d(e,"a",(function(){return a}))},"3d8c":function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}r.d(e,"a",(function(){return n}))},"46a8":function(t,e,r){"use strict";var n=r("98b7"),i=r.n(n);i.a},7036:function(t,e,r){},"784f":function(t,e,r){"use strict";var n=r("edde"),i=r.n(n);i.a},"7e25":function(t,e,r){"use strict";var n=r("7036"),i=r.n(n);i.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new I(n||[]);return o._invoke=L(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var h="suspendedStart",l="suspendedYield",f="executing",d="completed",p={};function v(){}function m(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w($([])));b&&b!==r&&n.call(b,o)&&(y=b);var x=g.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(r,i,o,a){var s=u(t[r],t,i);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"===typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(h).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var r;function i(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=h;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return S()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function $(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,i){var o=new C(c(e,r,n,i));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"98b7":function(t,e,r){},edde:function(t,e,r){}}]);
//# sourceMappingURL=chunk-c1e96264.bff566ee.js.map