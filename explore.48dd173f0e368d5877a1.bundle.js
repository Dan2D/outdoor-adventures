(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},101:function(e,t,r){var a={"./bikes-bg.jpg":60,"./canoes-bg.jpg":61,"./kayaks-bg.jpg":52,"./sup-bg.jpg":62};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=101},102:function(e,t,r){var a={"./bikes-icon.png":103,"./canoes-icon.png":104,"./kayaks-icon.png":105,"./sup-icon.png":106};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=102},103:function(e,t,r){e.exports=r.p+"images/rentals/bikes-icon.2b6553a326b38ef826cd6d75ad8b20b6.png"},104:function(e,t,r){e.exports=r.p+"images/rentals/canoes-icon.b207e1615a52afeeab52c6a93a8fe377.png"},105:function(e,t,r){e.exports=r.p+"images/rentals/kayaks-icon.c5870a91264934e250dcb6297078e6df.png"},106:function(e,t,r){e.exports=r.p+"images/rentals/sup-icon.4a35dccf97df9f935b5abd4fc4f27379.png"},107:function(e,t){e.exports='<svg viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="bell-svg" d="M28.125 6.49805V4.6875H29.6875C30.5508 4.6875 31.25 3.98828 31.25 3.125V1.5625C31.25 0.699219 30.5508 0 29.6875 0H20.3125C19.4492 0 18.75 0.699219 18.75 1.5625V3.125C18.75 3.98828 19.4492 4.6875 20.3125 4.6875H21.875V6.49805C11.2783 8.01855 3.125 17.1074 3.125 28.125H46.875C46.875 17.1074 38.7217 8.01855 28.125 6.49805ZM48.4375 31.25H1.5625C0.699219 31.25 0 31.9492 0 32.8125V35.9375C0 36.8008 0.699219 37.5 1.5625 37.5H48.4375C49.3008 37.5 50 36.8008 50 35.9375V32.8125C50 31.9492 49.3008 31.25 48.4375 31.25Z" fill="white"></path></svg>'},108:function(e,t){e.exports='<svg viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg"><path className="moon-svg" d="M17.5567 9.03438C17.5567 5.82785 18.2029 2.77981 19.3733 0C8.25408 2.69446 0 12.7042 0 24.6403C0 38.6369 11.3631 50 25.3597 50C37.2958 50 47.3055 41.7459 50 30.6267C47.2202 31.7971 44.16 32.4433 40.9656 32.4433C28.0419 32.4433 17.5567 21.9581 17.5567 9.03438Z" fill="white"></path></svg>'},109:function(e,t,r){},119:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(97),c=r.n(o),i={tour1:{name:"Bay Area Tour",price:79.99,duration:"2 hours",description:"Our Bay Area Tours explores the local bay with great views                         of the surrounding mountains and city skyline.",tags:null},tour2:{name:"Lighthouse Tour",price:89.99,duration:"2 hours",description:"The Lighthouse Tour takes a trip back in history to our                         very own Trine Lighthouse. See the historic building and learn about its rich history!",tags:["family favorite"]},tour3:{name:"3-Hour Night Tour",price:99.99,duration:"3 hours",description:"For our night owls we offer a 3 hour night time kayak tour which features                      unique views of the city and surrounding landmarks during the late hours of the night.",tags:["sunset"]},tour4:{name:"3-Hour Sunset Tour",price:79.99,duration:"3 hours",description:"An explorer favorite! The Sunset Tour offers beautiful views of the landscape as the sun descends behind the mountains and                         paints the sky with purples, pinks, and oranges",tags:["most popular"]},tour5:{name:"2-Day Park Tour",price:129.99,duration:"4 hours",description:"Our most adventurous tour offers a 2 day trip into Mantoa Park.                         We'll kayak during the day and camp at night in this thrilling and momentous trip.",tags:["multiple days","guide favorite"]}},s=r(59),l={kayaks:{hourly_price:20,daily_price:60,extra_day_price:40,msg:"The gold standard of water travel... explore the ocean on a kayak!"},sup:{hourly_price:20,daily_price:60,extra_day_price:40,msg:"Feeling a little more chill, want to get in touch with the ocean,         grab a SUP and get out there!"},canoes:{hourly_price:18,daily_price:50,extra_day_price:30,msg:"Canoes are great for longer trips or for bringing snacks on the ride!"},bikes:{hourly_price:12,daily_price:null,extra_day_price:null,msg:"Take one of our bikes on the trail and checkout some amazing views!"}};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){var t=u(Object(a.useState)(!(window.innerWidth>1280)),2),o=t[0],c=t[1],i={background:"linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(".concat(r(101)("./"+e.rental+"-bg.jpg"),")"),backgroundSize:"cover",backgroundPosition:"top"};function s(){window.innerWidth<1280&&!o?c(!0):window.innerWidth>1280&&o&&c(!1)}return Object(a.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[s]),n.a.createElement("div",{className:"tile-container tile-container--".concat(e.rental),style:o?i:null},n.a.createElement("h2",{className:"tile__title"},e.rental[0].toUpperCase().concat(e.rental.slice(1))),n.a.createElement("div",{className:"tile__price-container tile__price-container--".concat(e.rental)},n.a.createElement("div",{className:"price-container price-container--hourly"},n.a.createElement("h4",{className:"price__title"},"Hourly"),n.a.createElement("p",null,"$",l[e.rental].hourly_price.toFixed(2),"/hr"),"bikes"===e.rental&&n.a.createElement("p",null,n.a.createElement("i",null,"(Bike Rentals only available hourly)"))),"bikes"!==e.rental&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"vertical-line"}),n.a.createElement("div",{className:"price-container price-container--daily"},n.a.createElement("h4",{className:"price__title"},"Daily"),n.a.createElement("p",null,"$",l[e.rental].daily_price.toFixed(2),"/day"),n.a.createElement("p",{style:{fontSize:"0.8em"}},n.a.createElement("i",null,"($",l[e.rental].extra_day_price.toFixed(2)," per additional day)"))))),n.a.createElement("p",{className:"tile__msg"},l[e.rental].msg),n.a.createElement("div",{className:"tile__side-img",style:i}),n.a.createElement("img",{className:"tile__icon",src:r(102)("./".concat(e.rental,"-icon.png")),alt:e.rental}))},d=r(51),g=r(2),f=r.n(g);var m=function(){return n.a.createElement("div",{className:"explore-msg-container"},n.a.createElement("h1",null,"Last Rentals and Reservations"),n.a.createElement("div",{className:"explore-msg__row"},n.a.createElement("p",null,"The last rental of the day is available 1 hour before closing and all rentals must be returned before closing hour."),n.a.createElement(f.a,{className:"explore-msg__svg",src:r(23),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}})),n.a.createElement("div",{className:"explore-msg__row explore-msg__row--reverse"},n.a.createElement(f.a,{className:"explore-msg__svg",src:r(107),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}}),n.a.createElement("p",null,"Reservations are only abailable for guided tours. Rentals are ron on a first-come, first-serve basis")),n.a.createElement("div",{className:"explore-msg__row"},n.a.createElement("p",null,"If you're interested in staying out later, check out some of our sunset and late night tours!"),n.a.createElement(f.a,{className:"explore-msg__svg",src:r(108),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}})),n.a.createElement("div",{className:"explore-msg__sun-container"},n.a.createElement("div",{className:"explore-msg__sun"})))};r(109);t.default=function(e){"tours"===c.a.parse(e.location.search).category?(console.log(document.getElementById("tours")),setTimeout((function(){document.getElementById("tours").scrollIntoView(!0)}),200)):window.scrollTo(0,0);var t=[];return Object.keys(i).forEach((function(e){t.push(n.a.createElement(d.a,{key:e,type:"detail",price:i[e].price,bg:e,cardTitle:i[e].name,detailTxt:i[e].description}))})),n.a.createElement("div",{className:"explore-container"},n.a.createElement(s.a,{page:"explore",title:"Explore",text:"- Grab Your Gear ".concat("\n"," Explore The Sites -")}),n.a.createElement("div",{className:"rental-tiles-container"},n.a.createElement("h2",{className:"rental-tiles__title"},"Rentals"),n.a.createElement(p,{rental:"kayaks"}),n.a.createElement(p,{rental:"sup"}),n.a.createElement(p,{rental:"canoes"}),n.a.createElement(p,{rental:"bikes"})),n.a.createElement("div",{id:"tours",className:"tour-cards-container"},n.a.createElement("h2",{className:"tour-cards__title"},"Tours"),t),n.a.createElement(m,null))}},51:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(2),c=r.n(o),i=r(3);t.a=function(e){return n.a.createElement("div",{className:"card-container card-container--".concat(e.type)},n.a.createElement("div",{className:"card__top card__top--".concat(e.type),style:{background:"".concat("review"!==e.type?"linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("+r(66)("./"+e.bg+"-bg.jpg")+")":"white"),backgroundSize:"cover",backgroundPosition:"top"}},"review"===e.type&&n.a.createElement(c.a,{className:"card__site-logo",src:r(13),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="black"')}}),n.a.createElement("div",{className:"card__top-txt"},e.price&&n.a.createElement("p",null,"$",e.price),n.a.createElement("h4",{className:"card__title"},e.cardTitle[0].toUpperCase().concat(e.cardTitle.slice(1)))),"review"!==e.type?n.a.createElement(i.b,{className:"card__btn card__btn--".concat(e.type," btn"),to:"/explore?category=".concat(e.cardTitle)},"Learn More"):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"review-txt"},e.reviewTxt),n.a.createElement("p",{className:"review-name"},"-",e.userName))),"detail"===e.type&&n.a.createElement("div",{className:"card__bottom card__bottom--".concat(e.type)},n.a.createElement("p",null,e.detailTxt)))}},52:function(e,t,r){e.exports=r.p+"images/rentals/kayaks-bg.5aa4cf167f65509d06c58bfb1a5bb598.jpg"},53:function(e,t,r){e.exports=r.p+"images/story-bg.7ca8f0a16696f16fd1394a7331febf3f.jpg"},54:function(e,t,r){e.exports=r.p+"images/tour1-bg.65f4cbfb9a8dc433bb15ceb65107fed9.jpg"},55:function(e,t,r){e.exports=r.p+"images/tour2-bg.9634e5eee823d5ccbcaceacccef65d8d.jpg"},56:function(e,t,r){e.exports=r.p+"images/tour3-bg.9f72bebc49bfd66761296f9a66adbf68.jpg"},57:function(e,t,r){e.exports=r.p+"images/tour4-bg.4fdf2cde168253be69775e8474cf1ec9.jpg"},58:function(e,t,r){e.exports=r.p+"images/tour5-bg.f3f2376c301228d94d296c63aaaf73b5.jpg"},60:function(e,t,r){e.exports=r.p+"images/rentals/bikes-bg.e3a7fa6cb0bea49c4ddf5268a8680955.jpg"},61:function(e,t,r){e.exports=r.p+"images/rentals/canoes-bg.b09dcb7ec9ba08d864931a3ffb0e7a4f.jpg"},62:function(e,t,r){e.exports=r.p+"images/rentals/sup-bg.49da1c2a05d70caf138f1018e78d117d.jpg"},66:function(e,t,r){var a={"./hero-home-bg.jpg":67,"./rentals/bikes-bg.jpg":60,"./rentals/canoes-bg.jpg":61,"./rentals/kayaks-bg.jpg":52,"./rentals/sup-bg.jpg":62,"./story-bg.jpg":53,"./tour1-bg.jpg":54,"./tour2-bg.jpg":55,"./tour3-bg.jpg":56,"./tour4-bg.jpg":57,"./tour5-bg.jpg":58};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=66},67:function(e,t,r){e.exports=r.p+"images/hero-home-bg.ff70f9cd297bc7d3e18c48371b50900a.jpg"},97:function(e,t,r){"use strict";const a=r(98),n=r(99),o=r(100);function c(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function i(e,t){return t.decode?n(e):e}function s(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=r):a[e]=r};case"bracket":return(e,r,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],r):a[e]=[r]:a[e]=r};case"comma":return(e,t,r)=>{const a="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const n of e.split("&")){let[e,c]=o(n.replace(/\+/g," "),"=");c=void 0===c?null:i(c,t),r(i(e,t),c,a)}for(const e of Object.keys(a)){const r=a[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=u(r[e],t);else a[e]=u(r,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((e,t)=>{const r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=l,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";const r=function(e){switch(e.arrayFormat){case"index":return t=>(r,a)=>{const n=r.length;return void 0===a?r:null===a?[...r,[c(t,e),"[",n,"]"].join("")]:[...r,[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")]};case"bracket":return t=>(r,a)=>void 0===a?r:null===a?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(a,e)].join("")];case"comma":return t=>(r,a,n)=>null==a||0===a.length?r:0===n?[[c(t,e),"=",c(a,e)].join("")]:[[r,c(a,e)].join(",")];default:return t=>(r,a)=>void 0===a?r:null===a?[...r,c(t,e)]:[...r,[c(t,e),"=",c(a,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),a=Object.keys(e);return!1!==t.sort&&a.sort(t.sort),a.map(a=>{const n=e[a];return void 0===n?"":null===n?c(a,t):Array.isArray(n)?n.reduce(r(a),[]).join("&"):c(a,t)+"="+c(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>({url:s(e).split("?")[0]||"",query:p(l(e),t)})},98:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},99:function(e,t,r){"use strict";var a=new RegExp("%[a-f0-9]{2}","gi"),n=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],o(r),o(a))}function c(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(a),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(a);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var a=c(r[0]);a!==r[0]&&(t[r[0]]=a)}r=n.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),i=0;i<o.length;i++){var s=o[i];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}}}]);