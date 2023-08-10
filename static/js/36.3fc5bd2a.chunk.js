"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[36],{817:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(689),a=r(87),s={titlePage:"MoviesList_titlePage__nO1-F",moviesList:"MoviesList_moviesList__46PAX",itemMovie:"MoviesList_itemMovie__WehD3",img:"MoviesList_img__XDovE",titleMovie:"MoviesList_titleMovie__nMun3"},c=r(682),i=r(184),u=function(e){var t=e.movies,r=e.title,u=(0,n.TH)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:s.titlePage,children:r}),(0,i.jsx)("ul",{className:s.moviesList,children:t.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return(0,i.jsx)("li",{className:s.itemMovie,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:u},children:(0,i.jsxs)("div",{className:s.link,children:[(0,i.jsx)("img",{className:s.img,src:n?"https://image.tmdb.org/t/p/w300/".concat(n):c,alt:r}),(0,i.jsx)("p",{className:s.titleMovie,children:r})]})})},t)}))})]})}},36:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(174),u=r(817),o=r(135),l="SearchForm_searchForm__Rrjro",p="SearchForm_searchFormButton__q+V9f",f="SearchForm_searchFormButtonLabel__QMEmQ",m="SearchForm_searchFormInput__zLhEH",v=r(791),h=r(184),d=function(e){var t=e.onSubmit,r=(0,v.useState)(""),n=(0,a.Z)(r,2),s=n[0],c=n[1];return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),s.trim()?(t(s),c(""),e.target.reset()):(0,i.Am)("Enter a search query!")},children:[(0,h.jsx)("button",{type:"submit",className:p,children:(0,h.jsx)("span",{className:f,children:(0,h.jsx)(o.U41,{style:{fontSize:"1.4rem"}})})}),(0,h.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",onChange:function(e){c(e.currentTarget.value)}})]})})},_=r(180),x=r(87),g=function(){var e=(0,v.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],o=(0,x.lr)(),l=(0,a.Z)(o,2),p=l[0],f=l[1],m=p.get("query");(0,v.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.V0)(m);case 3:t=e.sent,s(t),0===t.length&&""!==m&&(0,i.Am)("Sorry, there are no images matching your search query. Please try again."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(d,{onSubmit:function(e){m!==e?(f({query:e}),s([])):(0,i.Am)("Please enter a new keyword to search.The result of this query is displayed.")}}),m&&r&&(0,h.jsx)(u.Z,{movies:r,title:"Movies by search query"})]})}},180:function(e,t,r){r.d(t,{Df:function(){return u},M1:function(){return p},TP:function(){return l},V0:function(){return o},tx:function(){return f}});var n=r(861),a=r(757),s=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="1bb674914a73bcdd70cc8fd8d868be33",u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?language=en-US&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},682:function(e,t,r){e.exports=r.p+"static/media/no-photo.06bd94b497c8a6d2ab55.png"}}]);
//# sourceMappingURL=36.3fc5bd2a.chunk.js.map