(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/a9y":function(e,t,n){"use strict";var r=n("pbKT"),i=n("/HRN"),a=n("WaGi"),l=n("ZDA2"),o=n("/+P4"),u=n("N9n2");var s=n("KI45");t.__esModule=!0,t.default=void 0;var d=s(n("q1tI")),c=s(n("8Kt/")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){u(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(r(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=o(e);if(t()){var a=o(this).constructor;n=r(i,arguments,a)}else n=i.apply(this,arguments);return l(this,n)}}(n);function n(){return i(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:h.error},d.default.createElement(c.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:h.h1},e):null,d.default.createElement("div",{style:h.desc},d.default.createElement("h2",{style:h.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),n}(d.default.Component);t.default=p,p.displayName="ErrorPage";var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])}},[["04ac",1,0]]]);