"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{548:function(n,e,t){t.d(e,{HI:function(){return s},Ku:function(){return p},Pg:function(){return u},Wf:function(){return l},fI:function(){return d}});var r=t(861),a=t(757),i=t.n(a),o=t(243),c=new URLSearchParams({api_key:"c8fbf26aaf1719f4073eb2d835a7332f"});o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},257:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,o,c,s,u,p,d,l,f,x,h,m,v,g=t(861),Z=t(439),b=t(757),w=t.n(b),j=t(689),k=t(87),P=t(791),y=t(548),z=t(168),_=t(444),S=(0,_.ZP)(k.rU)(r||(r=(0,z.Z)(["\n  display: inline-block;\n  padding: 3px 10px;\n  margin-left: 3px;\n  margin-bottom: 2px;\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  color: black;\n  font-size: 12px;\n  text-decoration: none;\n"]))),U=_.ZP.div(a||(a=(0,z.Z)(["\n  display: flex;\n  padding-bottom: 5px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ccc;\n"]))),R=_.ZP.div(i||(i=(0,z.Z)(["\n  padding: 2px;\n  width: 30vw;\n"]))),C=_.ZP.img(o||(o=(0,z.Z)(["\n  display: block;\n  width: 100%;\n"]))),I=_.ZP.div(c||(c=(0,z.Z)(["\n  padding: 10px;\n  width: 70vw;\n"]))),L=_.ZP.p(s||(s=(0,z.Z)(["\n  margin-bottom: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]))),F=_.ZP.p(u||(u=(0,z.Z)(["\n  margin-bottom: 15px;\n  font-size: 14px;\n"]))),G=_.ZP.p(p||(p=(0,z.Z)(["\n  margin-bottom: 15px;\n  font-size: 14px;\n  font-weight: bold;\n"]))),H=_.ZP.p(d||(d=(0,z.Z)(["\n  margin-bottom: 15px;\n  font-size: 14px;\n"]))),O=_.ZP.p(l||(l=(0,z.Z)(["\n  margin-bottom: 15px;\n  font-size: 14px;\n  font-weight: bold;\n"]))),q=_.ZP.ul(f||(f=(0,z.Z)(["\n  display: flex;\n  list-style: none;\n"]))),A=_.ZP.li(x||(x=(0,z.Z)(["\n  margin-right: 5px;\n  font-size: 14px;\n"]))),E=_.ZP.p(h||(h=(0,z.Z)(["\n  margin-bottom: 15px;\n  margin-left: 5px;\n  font-size: 14px;\n"]))),K=_.ZP.ul(m||(m=(0,z.Z)(["\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n"]))),T=_.ZP.li(v||(v=(0,z.Z)(["\n  margin-left: 25px;\n  font-size: 14px;\n  margin-bottom: 5px;\n"]))),W=t(184),B=function(){var n,e,t=(0,P.useState)({}),r=(0,Z.Z)(t,2),a=r[0],i=r[1],o=(0,P.useState)(""),c=(0,Z.Z)(o,2),s=c[0],u=c[1],p=(0,P.useState)(null),d=(0,Z.Z)(p,2),l=d[0],f=d[1],x=(0,P.useState)(""),h=(0,Z.Z)(x,2),m=h[0],v=h[1],b=(0,j.UO)().movieId,z=(0,j.TH)(),_=(0,P.useRef)(null!==(n=null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,P.useEffect)((function(){function n(){return(n=(0,g.Z)(w().mark((function n(){var e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.Pg(b);case 3:e=n.sent,i(e),u("resolved"),null!==e.poster_path&&v("http://image.tmdb.org/t/p/w780/".concat(e.poster_path)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),f(n.t0.message),u("rejected");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}u("pending"),function(){n.apply(this,arguments)}()}),[b]),(0,W.jsxs)(W.Fragment,{children:["rejected"===s&&(0,W.jsx)("h3",{children:l}),"resolved"===s&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(S,{to:_.current,children:"Go back"}),(0,W.jsxs)(U,{children:[(0,W.jsx)(R,{children:(0,W.jsx)(C,{src:"".concat(m),alt:"poster"})}),(0,W.jsxs)(I,{children:[(0,W.jsx)(L,{children:a.title}),(0,W.jsxs)(F,{children:["Use Score: ",a.vote_average]}),(0,W.jsx)(G,{children:"Overview"}),(0,W.jsx)(H,{children:a.overview}),(0,W.jsx)(O,{children:"Genres"}),(0,W.jsx)(q,{children:a.genres.map((function(n){var e=n.id,t=n.name;return(0,W.jsx)(A,{children:t},e)}))})]})]}),(0,W.jsx)(E,{children:"Additional information"}),(0,W.jsxs)(K,{children:[(0,W.jsx)(T,{children:(0,W.jsx)(k.rU,{to:"cast",children:"Cast"})}),(0,W.jsx)(T,{children:(0,W.jsx)(k.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,W.jsx)(P.Suspense,{fallback:(0,W.jsx)("div",{children:"Loading subpage..."}),children:(0,W.jsx)(j.j3,{})})]})}}}]);
//# sourceMappingURL=257.657968e7.chunk.js.map