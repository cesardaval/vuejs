(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,h=[];l<i.length;l++)s=i[l],r[s]&&h.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},o=[];function i(t){return c.p+"src/assets/js/"+({}[t]||t)+"."+{"chunk-083a9a81":"402ad18e","chunk-1b5ca2a9":"5b8f2832","chunk-2012530c":"0fa85b49","chunk-2d0ccb5d":"843c5bfd","chunk-9f398ebe":"2bf46908","chunk-b78463f4":"69f5766f"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-083a9a81":1,"chunk-1b5ca2a9":1,"chunk-2012530c":1,"chunk-b78463f4":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="src/assets/css/"+({}[t]||t)+"."+{"chunk-083a9a81":"33c9e8cb","chunk-1b5ca2a9":"3ad0560d","chunk-2012530c":"42eac91c","chunk-2d0ccb5d":"31d6cfe0","chunk-9f398ebe":"31d6cfe0","chunk-b78463f4":"eeac6e00"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===s))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],u=i.getAttribute("data-href");if(u===n||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,a(r)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=o);var u,l=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,c.nc&&h.setAttribute("nonce",c.nc),h.src=i(t),u=function(e){h.onerror=h.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,a[1](o)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:h})},12e4);h.onerror=h.onload=u,l.appendChild(h)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuejs/vuespotify/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"159f":function(t,e,a){"use strict";var n=a("55a3"),s=a.n(n);s.a},"55a3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("a026"),s=a("fb9a"),r=a.n(s),o=(a("04f2"),a("c789"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vs-navbar",{staticClass:"myNavbar",attrs:{color:t.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)"},model:{value:t.indexActive,callback:function(e){t.indexActive=e},expression:"indexActive"}},[a("vs-navbar-title",[t._v("\n      Vue Spotify\n    ")]),a("vs-navbar-item",{attrs:{index:0}},[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Artistas\n      ")])],1),a("vs-navbar-item",{attrs:{index:1}},[a("router-link",{attrs:{to:"/albums"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Álbums\n      ")])],1),a("vs-navbar-item",{attrs:{index:2}},[a("router-link",{attrs:{to:"/musicas"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Músicas\n      ")])],1),a("vs-navbar-item",{attrs:{index:3}},[a("router-link",{attrs:{to:"/favoritos/vazio"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Favoritos\n      ")])],1),a("vs-spacer"),3!==t.indexActive?a("vs-input",{attrs:{value:t.search,color:t.colorx,icon:"search","label-placeholder":"Busca"},on:{input:t.debounce_search}}):t._e()],1),a("router-view")],1)}),i=[],c=(a("386d"),a("28a5"),a("b047")),u=a.n(c),l={data:function(){return{colorx:"#4fc08d",indexActive:0,search:"",sParams:{},myRoute:""}},computed:{myRoutes:function(){return this.$route.fullPath}},watch:{search:function(){this.checkUrl()},myRoutes:function(t){this.myRoute=t,this.checkUrl()}},methods:{checkUrl:function(){var t=this.myRoute.split("/"),e=t.length<=3?1:3;switch(t[e]){case"albums":this.indexActive=1,this.sParams.q=this.search,this.sParams.type="album";break;case"musicas":this.indexActive=2,this.sParams.q=this.search,this.sParams.type="track";break;case"favoritos":this.indexActive=3,this.sParams.q="",this.sParams.type="";break;default:this.indexActive=0,this.sParams.q=this.search,this.sParams.type="artist"}if(""!==this.sParams.q)this.$store.dispatch("search",this.sParams);else{var a={index:"searched",value:[]};this.$store.dispatch("changeData",a)}},debounce_search:u()(function(t){this.search=t},1e3),debounce_check:u()(function(){this.checkUrl()},1e3)}},h=l,d=(a("5c0b"),a("2877")),p=Object(d["a"])(h,o,i,!1,null,null,null);p.options.__file="App.vue";var f=p.exports,m=(a("7f7f"),{filters:{implode:function(t){return t.join(", ")},popColor:function(t){var e;switch(!0){case t>79:e="success";break;case t>59&&t<80:e="primary";break;case t>29&&t<60:e="warning";break;default:e=""}return e},popIcon:function(t){var e;switch(!0){case t>79:e="grade";break;case t>59&&t<80:e="language";break;case t>29&&t<60:e="group_work";break;default:e=""}return e},popText:function(t){var e;switch(!0){case t>79:e="Top";break;case t>59&&t<80:e="Legal";break;case t>29&&t<60:e="Bom";break;default:e="Desconhecido"}return e},showAlbum:function(t){var e=t.data.album?"".concat(t.names," | Álbum ").concat(t.data.album.name):"";return e},showArtistC:function(t){var e=t.map(function(t){return t.name});return e.join(", ")},showArtistD:function(t){var e=[];return t.artists&&(e=t.artists.map(function(t){return t.name})),{data:t,names:e.join(", ")}},showArtistMA:function(t){var e;if(t.length<3){var a=t.map(function(t){return t.name});e=a.join(" e ")}else e="Vários Artistas";return e}},methods:{msToMnSec:function(t){var e=Math.floor(t/6e4),a=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(a<10?"0":"").concat(a)},test:function(){alert("Ops! Este é apenas um teste, não vai rolar ouvir musica por aqui! Desculpe :(")}}}),v={utils:m},g=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-container"},[t.msg?a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[a("vs-alert",{attrs:{active:"true",color:"#842993"}},[t._v("\n        "+t._s(t.msg)+"\n      ")])],1)],1):a("span",t._l(t.myData,function(e,n){return a("vs-row",{key:n},t._l(e,function(e,n){return a("vs-col",{key:n,attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-xs":"6","vs-sm":"4","vs-lg":"2"}},[e?a("div",{staticClass:"avatar",on:{click:function(a){t.enter(e.id)}}},[e.images&&e.images[2]?a("vs-avatar",{attrs:{src:e.images[2].url,size:"120px"}}):a("vs-avatar",{attrs:{color:"success",icon:"music_video",size:"120px"}}),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[a("h4",[t._v(t._s(e.name))])])],1),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[e.genres&&e.genres[0]?a("vs-tooltip",{attrs:{text:t._f("implode")(e.genres),title:"Gêneros",position:"right"}},[t._v("\n                "+t._s(e.genres[0])+"\n              ")]):a("span",[t._v("\n                N/A\n              ")])],1)],1),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[a("vs-chip",{attrs:{color:t._f("popColor")(e.popularity)}},[a("vs-avatar",{attrs:{icon:t._f("popIcon")(e.popularity)}}),t._v("\n                "+t._s(t._f("popText")(e.popularity))+"\n              ")],1)],1)],1),a("div",{staticClass:"middle"},[a("vs-button",{attrs:{radius:"",color:"dark",type:"filled",icon:"play_arrow"}})],1)],1):t._e()])}))}))],1)},k=[],A=a("be94"),y=a("2f62"),w={name:"Artistas",props:{favoritos:{default:!1,type:Boolean}},computed:Object(A["a"])({},Object(y["c"])("Artistas",{dados:"artistas"}),Object(y["c"])(["msg","searched"]),{myData:function(){return 0===this.searched.length?this.dados:this.searched}}),created:function(){this.favoritos||this.getArtistas()},methods:Object(A["a"])({},Object(y["b"])({getArtistas:"Artistas/getList"}),{enter:function(t){this.$router.push({path:"/artista/".concat(t)})}})},_=w,x=(a("159f"),Object(d["a"])(_,b,k,!1,null,"9de990d8",null));x.options.__file="Artistas.vue";var M=x.exports;n["default"].use(g["a"]);var j,O,S,C=new g["a"]({mode:"hash",base:"/vuejs/vuespotify/",routes:[{path:"/",name:"artistas",component:M},{path:"/artista/:id",name:"artista",component:function(){return a.e("chunk-1b5ca2a9").then(a.bind(null,"d38d"))}},{path:"/artista/:id/album/:id2",name:"album",component:function(){return a.e("chunk-2012530c").then(a.bind(null,"33c4"))}},{path:"/albums",name:"albums",component:function(){return a.e("chunk-b78463f4").then(a.bind(null,"be55"))}},{path:"/musicas",name:"musicas",component:function(){return a.e("chunk-9f398ebe").then(a.bind(null,"f4de"))}},{path:"/favoritos/",name:"favoritos",component:function(){return a.e("chunk-083a9a81").then(a.bind(null,"5628"))},children:[{path:"artistas",component:M,props:{favoritos:!0}},{path:"albums",component:function(){return a.e("chunk-b78463f4").then(a.bind(null,"be55"))},props:{favoritos:!0}},{path:"musicas",component:function(){return a.e("chunk-9f398ebe").then(a.bind(null,"f4de"))},props:{favoritos:!0}},{path:"vazio",component:function(){return a.e("chunk-2d0ccb5d").then(a.bind(null,"4ea7"))}}]}]}),E=a("ade3"),P=a("bc3a"),N=a.n(P),I=a("6cd4"),T=a.n(I),G="CHANGE_AUTH",R="CHANGE_ALBUM",z="CHANGE_ALBUMS",B="CHANGE_ARTISTAS",D="CHANGE_ARTISTAS_ALBUM",q="CHANGE_MUSICAS",H="CHANGE_MSG",U="CHANGE_SEARCH",F={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;s("changeMsg","Carregando.... Aguarde!",{root:!0});var r=[],o=e||["5FwdSSQrDlVvGQ14hpPO9S","0tbu4twiafAbrakCB3mxz4","7z7bTIHtSNmuIX0yWTimZ7","5lPYUxk21ijQNVA0r1wPhk","1XdmakXviDcpmNrl5mNMrt","5oohuDD9sE7C1MxwA8uzHe","7vDirGAUVrYMQc7G3sDxfQ","2Wz4oDBOPs3hYkb3eUtsNd","7CB9ERpNXGxnCgRxQt94CH","5V6r9gmQXxfSQ4gzSxYEx6","6EtAuxIwZCEuUZEqn2DwII","1CqADkcK8HJY1ss4i3cJqU"],i={headers:a.auth.headers,params:{ids:o.join(",")}};a.http.get("/albums",i).then(function(t){if(204===t.status)s("changeMsg","Ainda não há albums para exibir!",{root:!0});else{var e=[];T()(t.data.albums,function(t,a){a>0&&a%6===0&&(r.push(e),e=[]),e.push(t)}),e.length>0&&r.push(e),n(z,r),s("changeMsg","",{root:!0})}},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Albums/getList"},{root:!0})),console.log(t)})},getAlbum:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;s("changeMsg","Carregando.... Aguarde!",{root:!0});var r={headers:a.auth.headers};a.http.get("/albums/".concat(e),r).then(function(t){204===t.status?s("changeMsg","Ainda não há albums deste artista para exibir!",{root:!0}):(n(R,t.data),s("changeMsg","",{root:!0}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Albums/getAlbum",id:e},{root:!0})),console.log(t)})}},L=(j={},Object(E["a"])(j,R,function(t,e){t.album=e}),Object(E["a"])(j,z,function(t,e){t.albums=e}),j),J={albums:function(t){return t.albums},album:function(t){return t.album}},V={albums:[],album:{}},X={namespaced:!0,state:V,actions:F,mutations:L,getters:J},Q={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;s("changeMsg","Carregando.... Aguarde!",{root:!0});var r=[],o=e||["4cn4gMq0KXORHeYA45PcBi","10naVTwNjE50daQVrN0bXh","7uPgOaM3jjmkwuua1RgZHg","7n1XMwvxPf10t4OX6h6Ufy","1zWJTFpRoMlT21OaXniRsb","7gRwkRxJz1ilKcYkeqhmEz","6O67GI6ayhWHyFmOOJRLEq","6ODCVWBfGNFUf1bpo0c2Ge","6wd8OZcCaRQNDIMz6SPNGN","4EUuQxMNowMUEs5gu4BzBX","5rTjH3aABAmPM5B6DZebZ7","6TYimByryGphZCtwYopH0y"],i={headers:a.auth.headers,params:{ids:o.join(",")}};a.http.get("/artists",i).then(function(t){var e=[];204===t.status?s("changeMsg","Ainda não há artistas para exibir!",{root:!0}):(T()(t.data.artists,function(t,a){a>0&&a%6===0&&(r.push(e),e=[]),e.push(t)}),e.length>0&&r.push(e),n(B,r),s("changeMsg","",{root:!0}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Artistas/getList"},{root:!0})),console.log(t)})},getArtistAlbums:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;s("changeMsg","Carregando.... Aguarde!",{root:!0});var r={headers:a.auth.headers},o={};a.http.get("/artists/".concat(e),r).then(function(t){204===t.status?s("changeMsg","Ainda não há detalhes deste artista para exibir!",{root:!0}):(o.id=t.data.id,o.nome=t.data.name,o.imagem=t.data.images[0].url)}),r.params={limit:5},a.http.get("/artists/".concat(e,"/albums"),r).then(function(t){204===t.status?s("changeMsg","Ainda não há albums deste artista para exibir!",{root:!0}):(n(D,{artista:o,albums:t.data.items}),s("changeMsg","",{root:!0}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Artistas/getArtistAlbums",id:e},{root:!0})),console.log(t)})}},Z=(O={},Object(E["a"])(O,B,function(t,e){t.artistas=e}),Object(E["a"])(O,D,function(t,e){t.artista_albums=e}),O),Y={artistas:function(t){return t.artistas},albums:function(t){return t.artista_albums}},K={artistas:[],artista_albums:{}},W={namespaced:!0,state:K,actions:Q,mutations:Z,getters:Y},$={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;s("changeMsg","Carregando.... Aguarde!",{root:!0});var r=e||["2AXmPzar7HNqI6ksI562UX","7KCOMlNvjtkaQVBWwq3rd8","548AxnT5rmzjT1AUpxgCoM","0CpIVOnfJTu99vr0uQARPD","3qK4cPOkKJ00tAWeFBFMXm","1VwyjcpwWGMMXDe1xGnRyx","0zBbyR1llVe56n9P28dv2m","0zRzJU415EsEQ3NOjZj6Lu","3VTaBE3DsiREAxFtp6hREj","4NV9CHd1KRZ7dCySTtATey","5MY8WIRTMZ5uHEKSFJ4ZRP","2hGsyzJD1GiYlOD4bEb7KD"],o={headers:a.auth.headers,params:{ids:r.join(",")}};a.http.get("/tracks",o).then(function(t){204===t.status?s("changeMsg","Ainda não há músicas para exibir!",{root:!0}):(n(q,t.data.tracks),s("changeMsg","",{root:!0}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Musicas/getList"},{root:!0})),console.log(t)})}},tt=Object(E["a"])({},q,function(t,e){t.musicas=e}),et={musicas:function(t){return t.musicas}},at={musicas:[]},nt={namespaced:!0,state:at,actions:$,mutations:tt,getters:et};if(!localStorage.getItem("vueSpotifyFavorites")){var st={artists:[],albums:[],tracks:[]};localStorage.setItem("vueSpotifyFavorites",JSON.stringify(st))}var rt="";if(sessionStorage.getItem("valid"))rt=JSON.parse(sessionStorage.getItem("token"));else var ot=window.open("https://accounts.spotify.com/authorize?client_id=da18b610d64c4573be48c92fe8ae8eee&response_type=token&redirect_uri=https:%2F%2Fwww.eleganciachick.com.br%2Fgtoken.php","gtoken"),it=function(){ot.closed&&N.a.get("https://www.eleganciachick.com.br/spot.php").then(function(t){sessionStorage.setItem("token",t.request.response),sessionStorage.setItem("valid",!0),clearInterval(ct),window.location.reload()})},ct=setInterval(it,1e3);var ut={headers:{Authorization:"".concat(rt.token_type," ").concat(rt.access_token)}},lt=N.a.create({baseURL:"https://api.spotify.com/v1"});n["default"].use(y["a"]);var ht=new y["a"].Store({state:{auth:ut,http:lt,msg:"",searched:[]},actions:{authAgain:function(t,e){var a=t.commit,n=t.dispatch,s=window.open("https://accounts.spotify.com/authorize?client_id=da18b610d64c4573be48c92fe8ae8eee&response_type=token&redirect_uri=https:%2F%2Fwww.eleganciachick.com.br%2Fgtoken.php","gtoken"),r=function(){s.closed&&N.a.get("https://www.eleganciachick.com.br/spot.php").then(function(t){sessionStorage.setItem("token",t.request.response),sessionStorage.setItem("valid",!0),rt=JSON.parse(t.request.response),ut={headers:{Authorization:"".concat(rt.token_type," ").concat(rt.access_token)}},a(G,ut),void 0!==e.id?n(e.action,e.id):n(e.action),clearInterval(o)})},o=setInterval(r,1e3)},changeMsg:function(t,e){var a=t.commit;a(H,e)},search:function(t,e){var a=t.getters,n=t.commit,s=t.dispatch;s("changeMsg","Pesquisando.... Aguarde!");var r=[],o={headers:a.auth.headers,params:{q:e.q,type:e.type}};a.http.get("/search",o).then(function(t){if(204===t.status)s("changeMsg","Não há dados para exibir!");else{var a=[];T()(t.data["".concat(e.type,"s")].items,function(t,e){e>0&&e%6===0&&(r.push(a),a=[]),a.push(t)}),a.length>0&&r.push(a);var o="track"!==e.type?r:t.data["".concat(e.type,"s")].items;n(U,o),s("changeMsg","")}},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"search",obj:e})),console.log(t)})}},mutations:(S={},Object(E["a"])(S,G,function(t,e){t.auth=e}),Object(E["a"])(S,H,function(t,e){t.msg=e}),Object(E["a"])(S,U,function(t,e){t.searched=e}),S),getters:{auth:function(t){return t.auth},http:function(t){return t.http},msg:function(t){return t.msg},searched:function(t){return t.searched}},modules:{Albums:X,Artistas:W,Musicas:nt}});n["default"].use(r.a),n["default"].mixin(v.utils),n["default"].config.productionTip=!1,new n["default"]({router:C,store:ht,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){}});
//# sourceMappingURL=app.061976dc.js.map