module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("/HRN")),c=n(r("WaGi")),u=n(r("ZDA2")),i=n(r("/+P4")),s=n(r("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=l(r("cDcd")),d=f(r("rf6O")),y=f(r("2mql")),m=r("p8BD");t.default=function(e){var t=m.getDisplayName(e),r=function(t){function r(){return(0,a.default)(this,r),(0,u.default)(this,(0,i.default)(r).apply(this,arguments))}return(0,s.default)(r,t),(0,c.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),y.default(r,e)}},1:function(e,t,r){e.exports=r("RNiq")},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={};c[n.ForwardRef]={$$typeof:!0,render:!0};var u=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=f(r);d&&d!==p&&e(t,d,n)}var y=i(r);s&&(y=y.concat(s(r)));for(var m=c[t.$$typeof]||o,h=c[r.$$typeof]||o,v=0;v<y.length;++v){var b=y[v];if(!(a[b]||n&&n[b]||h&&h[b]||m&&m[b])){var x=l(r,b);try{u(t,b,x)}catch(e){}}}return t}return t}},"5NG/":function(e,t){e.exports=require("contentful")},"85/3":function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),a=r("YFqc"),c=r.n(a),u={marginRight:15},i=function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-primary mb-4"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Stena Recycling"),o.a.createElement("div",{className:"collapse navbar-collapse"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.a,{href:"/"},o.a.createElement("a",{style:u,className:"nav-link"},"Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.a,{href:"/about"},o.a.createElement("a",{className:"nav-link"},"About")))))))},s=r("U7sd"),l=r.n(s);t.a=function(e){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,"NextJs"),o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"}),o.a.createElement("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"}),o.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),o.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"})),o.a.createElement(i,null),o.a.createElement("div",{className:"container"},e.children))}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("ln6h"),o=r.n(n),a=r("eVuF"),c=r.n(a);function u(e,t,r,n,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void r(e)}i.done?t(s):c.a.resolve(s).then(n,o)}var i=r("hfKm"),s=r.n(i);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),s()(e,n.key,n)}}var f=r("XVgq"),p=r.n(f),d=r("Z7t5"),y=r.n(d);function m(e){return(m="function"==typeof y.a&&"symbol"==typeof p.a?function(e){return typeof e}:function(e){return e&&"function"==typeof y.a&&e.constructor===y.a&&e!==y.a.prototype?"symbol":typeof e})(e)}function h(e){return(h="function"==typeof y.a&&"symbol"===m(p.a)?function(e){return m(e)}:function(e){return e&&"function"==typeof y.a&&e.constructor===y.a&&e!==y.a.prototype?"symbol":m(e)})(e)}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=r("Bhuq"),x=r.n(b),g=r("TRZx"),E=r.n(g);function _(e){return(_=E.a?x.a:function(e){return e.__proto__||x()(e)})(e)}var j=r("SqZg"),w=r.n(j);function N(e,t){return(N=E.a||function(e,t){return e.__proto__=t,e})(e,t)}var k=r("85/3"),C=(r("YFqc"),r("5NG/")),q={CTF_SPACE_ID:"ig0j56pj0q4k",CTF_CDA_TOKEN:"00246c7456ee6c07144796a9cc4f03245716a92390404a8f76a00f2f80ca6c92",CTF_CPA_TOKEN:"469f4b393b4cd0588cd553fd41af6538c53ae51217c9be6aba391e6ded7b8eb9"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t={host:"preview.contentful.com",space:e.CTF_SPACE_ID,accessToken:e.CTF_CPA_TOKEN};return process.env.STAGING||(t.host="cdn.contentful.com",t.accessToken=e.CTF_CDA_TOKEN),console.log(t),Object(C.createClient)(t)},O=r("cDcd"),P=r.n(O),D=r("jle/");r.d(t,"default",function(){return S});var A=function(e){var t=e.data;return P.a.createElement("div",{className:"col-4 mb-3"},P.a.createElement("div",{className:"card text-white bg-primary mb-3"},P.a.createElement("div",{className:"card-title text-muted"},P.a.createElement("h3",{key:"{data.fields.title}"},t.fields.title)),P.a.createElement("div",{className:"card-body"},P.a.createElement("h5",{className:"card-title"},"Special title treatment"),P.a.createElement("h4",{className:"card-subtitle text-muted",key:"{data.fields.slug}"},t.fields.slug)),t.fields.media?P.a.createElement("div",{className:"card-body"},P.a.createElement("p",{className:"card-text",key:"{data.fields.content}"},t.fields.content),P.a.createElement("img",{src:t.fields.media&&t.fields.media.fields.file.url,key:"{data.fields.media}",className:"card-link",style:R})):P.a.createElement("div",{className:"card-body"},P.a.createElement("p",{className:"card-text",key:"{data.fields.content}"},t.fields.content),P.a.createElement("div",{width:"200",height:"345",key:"{data.fields.embedLink}",dangerouslySetInnerHTML:{__html:t.fields.embedLink}}))))},S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,_(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=w()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,P.a.Component),r=t,n=[{key:"render",value:function(){return P.a.createElement(k.a,null,P.a.createElement("h1",null,"My Blog"),P.a.createElement("div",{className:"row"},this.props.someEntryAsProp.map(function(e){return P.a.createElement(A,{key:e.id,data:e})})))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,r,n,a,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=T(),e.next=3,t.getEntries({content_type:D.type,include:1});case 3:for(r=e.sent,n=r.items,a=0;a<n.length;a++)c=r.items[a],console.log("entries111",c.fields.media);return console.log("> Content gotten and written for"),e.abrupt("return",{someEntryAsProp:n});case 8:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new c.a(function(n,o){var a=e.apply(t,r);function c(e){u(a,n,o,c,i,"next",e)}function i(e){u(a,n,o,c,i,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()}],n&&l(r.prototype,n),a&&l(r,a),t}(),R={width:"100%"}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function a(t,r,c){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}:e.exports=a=n,a.apply(null,arguments)}e.exports=a},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("iZP3")),c=n(r("/HRN")),u=n(r("WaGi")),i=n(r("ZDA2")),s=n(r("/+P4")),l=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),y=f(r("cDcd")),m=(p(r("rf6O")),f(r("20a2"))),h=r("p8BD");var v=function(e){function t(){var e,r,n,o,u;return(0,c.default)(this,t),(e=(0,i.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?h.formatWithValidation(e):e,as:t&&"object"===(0,a.default)(t)?h.formatWithValidation(t):t}},n=null,o=null,u=null,function(e,t){if(e===n&&t===o)return u;var a=r(e,t);return n=e,o=t,u=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),c=a.href,u=a.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(h.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var i=window.location.pathname;c=d.resolve(i,c),u=u?d.resolve(i,u):c,t.preventDefault();var s=e.props.scroll;null==s&&(s=u.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](c,u,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);m.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=y.default.createElement("a",null,t));var a=y.Children.only(t),c={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||n),c.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=m.Router._rewriteUrlForNextExport(c.href)),y.default.cloneElement(a,c)}}]),t}(y.Component);t.default=v},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},eVuF:function(e,t,r){e.exports=r("aC71")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function c(t){return"function"==typeof o&&"symbol"===a(n)?e.exports=c=function(e){return a(e)}:e.exports=c=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},c(t)}e.exports=c},"jle/":function(e,t){e.exports=require("os")},ln6h:function(e,t,r){e.exports=r("cu1A")},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("iZP3")),c=n(r("b3CU")),u=n(r("hfKm")),i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r("qxCs")),l={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function y(){if(!l.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(l,"events",{get:function(){return s.default.events}}),p.concat(f).forEach(function(e){(0,u.default)(l,e,{get:function(){return y(),l.router[e]}})}),d.forEach(function(e){l[e]=function(){var t;return y(),(t=l.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){l.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(l[t])try{l[t].apply(l,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=l;var m=r("0Bsm");t.withRouter=m.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return l.router=(0,c.default)(s.default,t),l.readyCallbacks.forEach(function(e){return e()}),l.readyCallbacks=[],l.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<f.length;r++){var n=f[r];"object"!==(0,a.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=s.default.events,p.forEach(function(r){(0,u.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});