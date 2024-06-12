"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[204],{364:function(e,t,r){r.d(t,{Z:function(){return p}});r(791);var n=r(689),a=r(87),u="moviesList_moviesContainer__v6cpJ",c="moviesList_movieListItem__+6GIp",s="moviesList_movieListImage__S8kuH",o="moviesList_movieListName__2EKsN",i=r(184),p=function(e){var t=e.movies,r=(0,n.TH)();return(0,i.jsx)("div",{className:u,children:t.map((function(e){return(0,i.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},className:c,children:[(0,i.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path):"https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg",alt:e.title,className:s}),(0,i.jsx)("div",{className:o,children:(0,i.jsx)("h3",{children:e.title})})]},e.id)}))})}},204:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),o=r(689),i=r(390),p=r(364),h=r(87),l={searchInput:"searchForm_searchInput__u0Pc-",searchButton:"searchForm_searchButton__l411k"},f=r(184),v=function(){var e=(0,h.lr)(),t=(0,a.Z)(e,2),r=t[0],n=t[1],u=(0,s.useState)(r.get("query")||""),c=(0,a.Z)(u,2),o=c[0],i=c[1];(0,s.useEffect)((function(){i("")}),[]);return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value;n({query:t.trim()})},className:l.searchForm,children:[(0,f.jsx)("input",{className:l.searchInput,type:"text",name:"query",placeholder:"Enter movie name",value:o,onChange:function(e){return i(e.target.value)}}),(0,f.jsx)("button",{type:"submit",className:l.searchButton,children:"Search"})]})},m="movies_moviesContainer__ghJBh",d=function(){var e=(0,o.TH)(),t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],h=r[1];return(0,s.useEffect)((function(){var t=new URLSearchParams(e.search).get("query");if(t){var r=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.gH)(t);case 2:r=e.sent,h(r.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r()}}),[e.search]),(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("h1",{children:"Search movies"}),(0,f.jsx)(v,{}),(0,f.jsx)(p.Z,{movies:u})]})}},390:function(e,t,r){r.d(t,{BC:function(){return s},S:function(){return h},SM:function(){return i},gH:function(){return m},mU:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ4ZDQ4YjE5YmVjZjZhNGVlZTUzNzI0OTA4Yjg2OCIsInN1YiI6IjY2Njk2ODA4MjI0ZTEzNDkwZmE2ZGM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoNeggAP416o4W5fv3XRosj8CdkiGHB1pOYxJ8029hw"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),c);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,t,r){function n(e,t,r,n,a,u,c){try{var s=e[u](c),o=s.value}catch(i){return void r(i)}s.done?t(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var c=e.apply(t,r);function s(e){n(c,a,u,s,o,"next",e)}function o(e){n(c,a,u,s,o,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=204.5431e32a.chunk.js.map