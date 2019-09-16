(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,a){e.exports='<svg viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg"><path className="moon-svg" d="M17.5567 9.03438C17.5567 5.82785 18.2029 2.77981 19.3733 0C8.25408 2.69446 0 12.7042 0 24.6403C0 38.6369 11.3631 50 25.3597 50C37.2958 50 47.3055 41.7459 50 30.6267C47.2202 31.7971 44.16 32.4433 40.9656 32.4433C28.0419 32.4433 17.5567 21.9581 17.5567 9.03438Z" fill="white"></path></svg>'},101:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i={tour1:{name:"Bay Area Tour",price:79.99,duration:"2 hours",description:"Our Bay Area Tours explores the local bay with great views                         of the surrounding mountains and city skyline.",tags:null},tour2:{name:"Lighthouse Tour",price:89.99,duration:"2 hours",description:"The Lighthouse Tour takes a trip back in history to our                         very own Trine Lighthouse. See the historic building and learn about its rich history!",tags:["family favorite"]},tour3:{name:"3-Hour Night Tour",price:99.99,duration:"3 hours",description:"For our night owls we offer a 3 hour night time kayak tour which features                      unique views of the city and surrounding landmarks during the late hours of the night.",tags:["sunset"]},tour4:{name:"3-Hour Sunset Tour",price:79.99,duration:"3 hours",description:"An explorer favorite! The Sunset Tour offers beautiful views of the landscape as the sun descends behind the mountains and                         paints the sky with purples, pinks, and oranges",tags:["most popular"]},tour5:{name:"2-Day Park Tour",price:129.99,duration:"4 hours",description:"Our most adventurous tour offers a 2 day trip into Mantoa Park.                         We'll kayak during the day and camp at night in this thrilling and momentous trip.",tags:["multiple days","guide favorite"]}},o=t(49),l={kayaks:{hourly_price:20,daily_price:60,extra_day_price:40,msg:"The gold standard of water travel... explore the ocean on a kayak!"},sup:{hourly_price:20,daily_price:60,extra_day_price:40,msg:"Feeling a little more chill, want to get in touch with the ocean,         grab a SUP and get out there!"},canoes:{hourly_price:18,daily_price:50,extra_day_price:30,msg:"Canoes are great for longer trips or for bringing snacks on the ride!"},bikes:{hourly_price:12,daily_price:null,extra_day_price:null,msg:"Take one of our bikes on the trail and checkout some amazing views!"}};var s=function(e){var a={background:"linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(".concat(t(93)("./"+e.rental+"-bg.jpg"),")"),backgroundSize:"cover",backgroundPosition:"top"};return n.a.createElement("div",{className:"tile-container tile-container--".concat(e.rental),style:a},n.a.createElement("h2",{className:"tile__title"},e.rental[0].toUpperCase().concat(e.rental.slice(1))),n.a.createElement("div",{className:"tile__price-container tile__price-container--".concat(e.rental)},n.a.createElement("div",{className:"price-container price-container--hourly"},n.a.createElement("h4",{className:"price__title"},"Hourly"),n.a.createElement("p",null,"$",l[e.rental].hourly_price.toFixed(2),"/hr")),"bikes"!==e.rental&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"vertical-line"}),n.a.createElement("div",{className:"price-container price-container--daily"},n.a.createElement("h4",{className:"price__title"},"Daily"),n.a.createElement("p",null,"$",l[e.rental].daily_price.toFixed(2),"/day"),n.a.createElement("p",{style:{fontSize:"0.8em"}},n.a.createElement("i",null,"($",l[e.rental].extra_day_price.toFixed(2)," per additional day)"))))),n.a.createElement("p",{className:"tile__msg"},l[e.rental].msg),n.a.createElement("img",{className:"tile__icon",src:t(94)("./".concat(e.rental,"-icon.png")),alt:e.rental}))},c=t(55),u=t(3),p=t.n(u);var d=function(){return n.a.createElement("div",{className:"explore-msg-container"},n.a.createElement("h1",null,"Last Rentals and Reservations"),n.a.createElement("div",{className:"flex-container d-flex justify-content-between"},n.a.createElement("p",null,"The last rental of the day is available 1 hour before closing and all rentals must be returned before closing hour."),n.a.createElement(p.a,{className:"explore-msg__svg",src:t(22),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}})),n.a.createElement("div",{className:"flex-container d-flex justify-content-between"},n.a.createElement(p.a,{className:"explore-msg__svg",src:t(99),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}}),n.a.createElement("p",null,"Reservations are only abailable for guided tours. Rentals are ron on a first-come, first-serve basis")),n.a.createElement("div",{className:"flex-container d-flex justify-content-between"},n.a.createElement("p",null,"If you're interested in staying out later, check out some of our sunset and late night tours!"),n.a.createElement(p.a,{className:"explore-msg__svg",src:t(100),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="white"')}})),n.a.createElement("div",{className:"explore-msg__sun-container"},n.a.createElement("div",{className:"explore-msg__sun"})))};t(101);a.default=function(){window.scrollTo(0,0);var e=[];return Object.keys(i).forEach((function(a){console.log(a),e.push(n.a.createElement(c.a,{key:a,type:"detail",price:i[a].price,bg:a,cardTitle:i[a].name,detailTxt:i[a].description}))})),n.a.createElement("div",null,n.a.createElement(o.a,{page:"explore",title:"Explore",text:"- Grab Your Gear And Explore The Sites -"}),n.a.createElement("div",{className:"rental-tiles-container"},n.a.createElement(s,{rental:"kayaks"}),n.a.createElement(s,{rental:"sup"}),n.a.createElement(s,{rental:"canoes"}),n.a.createElement(s,{rental:"bikes"})),n.a.createElement("div",{className:"tour-cards-container"},e),n.a.createElement(d,null))}},93:function(e,a,t){var r={"./bikes-bg.jpg":66,"./canoes-bg.jpg":67,"./kayaks-bg.jpg":68,"./sup-bg.jpg":69};function n(e){var a=i(e);return t(a)}function i(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=93},94:function(e,a,t){var r={"./bikes-icon.png":95,"./canoes-icon.png":96,"./kayaks-icon.png":97,"./sup-icon.png":98};function n(e){var a=i(e);return t(a)}function i(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=94},95:function(e,a,t){e.exports=t.p+"images/rentals/bikes-icon.2b6553a326b38ef826cd6d75ad8b20b6.png"},96:function(e,a,t){e.exports=t.p+"images/rentals/canoes-icon.b207e1615a52afeeab52c6a93a8fe377.png"},97:function(e,a,t){e.exports=t.p+"images/rentals/kayaks-icon.c5870a91264934e250dcb6297078e6df.png"},98:function(e,a,t){e.exports=t.p+"images/rentals/sup-icon.4a35dccf97df9f935b5abd4fc4f27379.png"},99:function(e,a){e.exports='<svg viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="bell-svg" d="M28.125 6.49805V4.6875H29.6875C30.5508 4.6875 31.25 3.98828 31.25 3.125V1.5625C31.25 0.699219 30.5508 0 29.6875 0H20.3125C19.4492 0 18.75 0.699219 18.75 1.5625V3.125C18.75 3.98828 19.4492 4.6875 20.3125 4.6875H21.875V6.49805C11.2783 8.01855 3.125 17.1074 3.125 28.125H46.875C46.875 17.1074 38.7217 8.01855 28.125 6.49805ZM48.4375 31.25H1.5625C0.699219 31.25 0 31.9492 0 32.8125V35.9375C0 36.8008 0.699219 37.5 1.5625 37.5H48.4375C49.3008 37.5 50 36.8008 50 35.9375V32.8125C50 31.9492 49.3008 31.25 48.4375 31.25Z" fill="white"></path></svg>'}}]);