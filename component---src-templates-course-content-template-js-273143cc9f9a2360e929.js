(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{e4kf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W})),n.d(t,"pageQuery",(function(){return q}));n("5s+n"),n("07d7"),n("EnZy"),n("UxlC");var o=n("kD0k"),r=n.n(o),a=(n("ls82"),n("q1tI")),i=n.n(a),c=n("vOnD"),l=n("2dtT"),u=n.n(l),p=n("Wbzz"),s=n("qhky"),m=n("RJaA"),d=n("cNV/"),f=n("P9PZ"),h=n("pg4K");var b=c.b.footer.withConfig({displayName:"CoursePageFooter__CoursePageFooterWrapper",componentId:"sc-1wp274x-0"})(["background-color:white;color:black;padding:3rem;"]),g=c.b.div.withConfig({displayName:"CoursePageFooter__CoursePageFooterContent",componentId:"sc-1wp274x-1"})(["display:flex;justify-content:center;max-width:960px;margin:0 auto;"]),v=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return i.a.createElement(b,null,i.a.createElement(g,null,i.a.createElement(f.a,{style:{width:"400px",fontSize:"0.8rem",margin:0}})))},o}(i.a.Component),w=Object(h.a)(v),y=n("uVck"),C=(n("iQdD"),n("zgqS")),E=n("eczs"),_=n("VUD3"),k=n("Xs5t"),x=n("IP2g"),O=n("wHSu"),j=(n("LKBx"),n("ToJy"),n("LCzB"));var P=Object(c.b)(p.Link).withConfig({displayName:"EndOfSubSection__StyledLink",componentId:"ees48a-0"})(["color:black;text-decoration:none;padding:1rem;border-radius:0.25rem;margin:1rem 0;display:inline-block;width:100%;border-radius:10px;transition:background-color 0.2s;&:hover{text-decoration:none;color:black;background-color:#eeeeee;}"]),I=Object(c.b)(x.a).withConfig({displayName:"EndOfSubSection__StyledIcon",componentId:"ees48a-1"})(["vertical-align:middle;margin-right:1rem;margin-left:0.5rem;color:var(--color);font-size:1.5em;"]),S=c.b.div.withConfig({displayName:"EndOfSubSection__ButtonWrapper",componentId:"ees48a-2"})(["display:flex;align-items:center;"]),T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this;return i.a.createElement(C.a.Consumer,null,(function(t){var n=t.current.frontmatter.path,o=n,r=Object(k.d)(n,"/",2);-1!==r&&(o=n.substr(0,r));var c=t.all.filter((function(e){return e.path.startsWith(o+"/")})).sort((function(e,t){return(e=e.path.toLowerCase())>(t=t.path.toLowerCase())?1:t>e?-1:0})),l=null;c.forEach((function(e,t){e.path===n&&(l=t)}));var u=null;return null!==l&&l!==c.length-1&&(u=c[l+1]),i.a.createElement("div",null,e.props.t("endReached")," ",u&&i.a.createElement(a.Fragment,null,e.props.t("continueToNext")," ",i.a.createElement(S,null,i.a.createElement(P,{to:u.path},i.a.createElement(I,{icon:O.c}),l+2,". ",u.title))),i.a.createElement("p",null,e.props.t("rememberToCheckPoints")))}))},o}(i.a.Component),N=Object(j.a)("common")(Object(h.a)(T));function z(e){if("undefined"!=typeof window)try{var t=document.querySelector(e);if(!t)return void console.warn("Could not find the element to scroll to.");t.scrollIntoView()}catch(n){console.warn("Could not scroll element into view",n)}}function L(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(o,r)}var F=Object(c.b)(x.a).withConfig({displayName:"CourseContentTemplate__StyledIcon",componentId:"sc-1m06ow0-0"})(["margin-right:0.25rem;font-size:1em;"]),A=c.b.article.withConfig({displayName:"CourseContentTemplate__ContentWrapper",componentId:"sc-1m06ow0-1"})([""]),D=Object(c.b)(p.Link).withConfig({displayName:"CourseContentTemplate__UpLink",componentId:"sc-1m06ow0-2"})(["color:#332c2cb3 !important;font-weight:bold;margin-bottom:1rem !important;display:block;:hover{text-decoration:none;color:#805050b3 !important;}"]),W=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=o.prototype;return c.componentDidMount=function(){var e,t=(e=r.a.mark((function e(){var t,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window&&window.location.hash&&(n=window.location.hash,setTimeout((function(){z(n)}),100),setTimeout((function(){z(n)}),500),setTimeout((function(){z(n)}),1e3),setTimeout((function(){z(n)}),2e3)),Object(y.j)()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(y.h)();case 5:void 0===(null==(o=e.sent)||null===(t=o.extra_fields)||void 0===t?void 0:t.research)&&Object(p.navigate)("/missing-info");case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){L(a,o,r,i,c,"next",e)}function c(e){L(a,o,r,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),c.render=function(){var e=this.props.data,t=e.page,n=t.frontmatter,o=t.htmlAst,r=e.allPages.edges.map((function(e){var t;return null===(t=e.node)||void 0===t?void 0:t.frontmatter})),c=Object(d.a)(),l=new u.a({createElement:i.a.createElement,components:c}).Compiler,p=Object(k.a)(""+n.path.split(/\//g)[1].replace(/-/g," ")),f="/"+n.path.split(/\//g)[1],h=e.page.fileAbsolutePath.substring(e.page.fileAbsolutePath.lastIndexOf("/data/"),e.page.fileAbsolutePath.length);return i.a.createElement(a.Fragment,null,i.a.createElement(s.a,{title:n.title}),i.a.createElement(C.a.Provider,{value:{all:r,current:{frontmatter:n,filePath:h}}},i.a.createElement(E.a,null,i.a.createElement(m.a,null,i.a.createElement(a.Fragment,null,i.a.createElement(_.a,null,i.a.createElement(A,null,i.a.createElement(D,{to:f},i.a.createElement(F,{icon:O.b}),p),i.a.createElement("h1",null,n.title),l(o),i.a.createElement(N,null))),i.a.createElement(w,null))))))},o}(i.a.Component);W.contextType=E.b;var q="1191092361"}}]);
//# sourceMappingURL=component---src-templates-course-content-template-js-273143cc9f9a2360e929.js.map