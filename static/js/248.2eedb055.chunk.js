"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[248],{248:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(413),a=t(861),i=t(439),s=t(757),c=t.n(s),o=t(87),u="ButtonBack_btnBack__oR6TV",d="ButtonBack_btnLink__czJof",l=t(184),v=function(e){var n=e.goBackLink;return(0,l.jsx)("button",{className:u,type:"button",children:(0,l.jsx)(o.rU,{className:d,to:n,children:"Go Back"})})},p={addInfoWrapper:"MovieDetailsLink_addInfoWrapper__eTaV0",solidLine:"MovieDetailsLink_solidLine__cKNLv",listAdd:"MovieDetailsLink_listAdd__OzYde",linkAdd:"MovieDetailsLink_linkAdd__X8dPH",active:"MovieDetailsLink_active__tXlev"},f=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:p.solidLine}),(0,l.jsxs)("div",{className:p.addInfoWrapper,children:[(0,l.jsx)("h3",{children:"Additional Information"}),(0,l.jsxs)("ul",{className:p.listAdd,children:[(0,l.jsx)("li",{className:p.itemAdd,children:(0,l.jsx)(o.OL,{className:function(e){return[e.isActive?p.active:"",p.linkAdd].join(" ")},to:"cast",children:"Cast"})}),(0,l.jsx)("li",{className:p.itemAdd,children:(0,l.jsx)(o.OL,{className:function(e){return[e.isActive?p.active:"",p.linkAdd].join(" ")},to:"reviews",children:"Revievs"})})]})]}),(0,l.jsx)("div",{className:p.solidLine})]})},h="MovieInfo_infoWrapper__nA98P",x="MovieInfo_infoImgWrapper__M2EBT",_="MovieInfo_infoDescrWrapper__H0P+e",m=t(682),j=function(e){var n=e.title,t=e.vote_average,r=e.overview,a=e.genres,i=e.backdrop_path;return(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("div",{className:x,children:(0,l.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300/".concat(i):m,alt:"title"})}),(0,l.jsxs)("div",{className:_,children:[(0,l.jsx)("h2",{children:n}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"User Score:"})," ",Math.round(10*t),"%"]}),(0,l.jsxs)("p",{children:[(0,l.jsxs)("b",{children:["Overview",(0,l.jsx)("br",{})]}),r]}),(0,l.jsx)("p",{children:(0,l.jsx)("b",{children:"Genres"})}),a&&(0,l.jsx)("ul",{children:a.map((function(e){var n=e.id,t=e.name;return(0,l.jsx)("li",{children:t},n)}))})]})]})},k=t(791),b=t(689),g=t(180),w=function(){var e,n,t=(0,b.TH)(),s=(0,k.useRef)(null!==(e=null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),o=(0,b.UO)().movieId,u=(0,k.useState)(null),d=(0,i.Z)(u,2),p=d[0],h=d[1];if((0,k.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.TP)(o);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),p)return(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{goBackLink:s.current}),(0,l.jsx)(j,(0,r.Z)({},p)),(0,l.jsx)(f,{}),(0,l.jsx)(k.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(b.j3,{})})]})}},180:function(e,n,t){t.d(n,{Df:function(){return o},M1:function(){return l},TP:function(){return d},V0:function(){return u},tx:function(){return v}});var r=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="1bb674914a73bcdd70cc8fd8d868be33",o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"?language=en-US&api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?language=en-US&api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},682:function(e,n,t){e.exports=t.p+"static/media/no-photo.06bd94b497c8a6d2ab55.png"}}]);
//# sourceMappingURL=248.2eedb055.chunk.js.map