(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{110:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(56),i=t(49);t(75);var l=function(e){return n.a.createElement("div",{className:"category-container"},n.a.createElement("h2",{className:"category__title"},"Categories"),n.a.createElement("div",{className:"category-cards-container"},n.a.createElement(i.a,{type:"category",cardTitle:"Rentals",bg:"rentals/kayaks"}),n.a.createElement(i.a,{type:"category",cardTitle:"Tours",bg:"tour1"})))},s=t(2),c=t.n(s),u=t(3),d=t(67),m=t.n(d);var g=function(){return n.a.createElement("div",{className:"blurb-container"},n.a.createElement(c.a,{className:"blurb__logo-bg",src:t(13),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="black"')}}),n.a.createElement(m.a,{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},n.a.createElement("div",null,n.a.createElement("img",{src:t(57),alt:"slide"})),n.a.createElement("div",null,n.a.createElement("img",{src:t(91),alt:"slide"})),n.a.createElement("div",null,n.a.createElement("img",{src:t(92),alt:"slide"}))),n.a.createElement("p",null,"Our mission is to provide people with a means to experience the natural wonders of our wonderful little corner of the world while prioritizing safety and fun. Environmental protection and education are very important to us and so we incorporate teachings about the local ecology and offering simple ways to positively impact the shoreline and waterways, like picking up trash and minimizing harmful runoff.",n.a.createElement("br",null),n.a.createElement("br",null),"We offer only the highest quality tours with our attention to detail and sites, the highest rated customer service, and a fantastically amazing staff at your service. Just checkout our ratings and reviews online!"),n.a.createElement(u.b,{className:"blurb__btn btn",to:"/explore"},"Check it Out!"))};var p=function(){return n.a.createElement("div",{className:"tours-container"},n.a.createElement("h2",{className:"tours__title"},"Tours"),n.a.createElement("div",{className:"tours-cards-container"},n.a.createElement(i.a,{type:"tour",price:60,cardTitle:"Bay Area Tour",bg:"tour1"}),n.a.createElement(i.a,{type:"tour",price:80,cardTitle:"LightHouse Tour",bg:"tour2"}),n.a.createElement(i.a,{type:"tour",price:120,cardTitle:"3-Hour Night Tour",bg:"tour3"})),n.a.createElement(u.b,{className:"tours__btn btn",to:"/tours"},"More Tours..."))};var f=function(){return n.a.createElement("div",{className:"review-container"},n.a.createElement(m.a,{dots:!0,arrows:!1,infinite:!0,autoplay:!1,autoplaySpeed:8e3,speed:500,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:1}},{breakpoint:1481,settings:{slidesToShow:2}},{breakpoint:9999,settings:{slidesToShow:3}}]},n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"Great Staff and Great Gear!",reviewTxt:"This place is great! Aside from renting anything you need, even wetsuits and PFD's alone, \r they are super helpful and I actually bought my wetsuit and booties from these guys who  \r beat REI on the prices. Beautiful location and a must if you're looking to rent SUP's or kayaks!",userName:"Jack Martin"})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"What an Experience!",reviewTxt:" Had a great experience this Sunday at Outdoor Adventures!   \r Location is excellent and staff is kind and courteous.    \r I would definitely recommend this place if you are looking  \r to get on the water.",userName:"Kimberly Adams"})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"Great Fun and Learned A Lot Too!",reviewTxt:" Our guide Travis was great!!!  \r He was knowledgeable and made sure  \r that our safety was his number one priority!  \r He gave us a bunch of fun facts and was always  \r positive! Great staff, great tour! Worth the trip!",userName:"Alan Taylor"})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"Great Staff and Views!",reviewTxt:" We Had a great time. The two girls who took us on  \r the tour were awesome and knowledgeable. We got to see two seals.  \r The weather was warm. Definitely recommend this to all. We are newbies  \r to the kayaking and they gave us a good class and we felt very safe on the water.",userName:"Marlie Mata"})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"Quick, Easy, and Fun",reviewTxt:"Super efficient staff and a great place to go on hot day!! \r Rented a double kayak and had an hour to roam around the water!! \r Would definitely recommend this place if you are wanting to get out \r on the water and for a good price!! Will be back!!",userName:"Kyle Lawson"})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"review",cardTitle:"Pet and People Friendly",reviewTxt:"Called ahead about bringing my dog out on the SUP's for her first time and  \r didn't have a bit of trouble. Staff was at tentative and helpful, and I was  \r there on a busy Saturday morning. Equipment was great too, I'll definitely be back!",userName:"Jake Mercer"}))),n.a.createElement("div",{className:"review-extra-bg"}))};t(93);a.default=function(e){return window.scrollTo(0,0),n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{page:"home",text:"Come On In The Water's Fine!"}),n.a.createElement(l,null),n.a.createElement(g,null),n.a.createElement(p,null),n.a.createElement(f,null))}},49:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(2),i=t.n(o),l=t(3);a.a=function(e){return n.a.createElement("div",{className:"card-container card-container--".concat(e.type)},n.a.createElement("div",{className:"card__top card__top--".concat(e.type),style:{background:"".concat("review"!==e.type?"linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("+t(65)("./"+e.bg+"-bg.jpg")+")":"white"),backgroundSize:"cover",backgroundPosition:"top"}},"review"===e.type&&n.a.createElement(i.a,{className:"card__site-logo",src:t(13),preProcessor:function(e){return e.replace(/fill=".*?"/g,'fill="black"')}}),n.a.createElement("div",{className:"card__top-txt"},e.price&&n.a.createElement("p",null,"$",e.price),n.a.createElement("h4",{className:"card__title"},e.cardTitle)),"review"!==e.type?n.a.createElement(l.b,{className:"card__btn card__btn--".concat(e.type," btn"),to:"/explore?category=tours"},"Learn More"):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"review-txt"},e.reviewTxt),n.a.createElement("p",{className:"review-name"},"-",e.userName))),"detail"===e.type&&n.a.createElement("div",{className:"card__bottom card__bottom--".concat(e.type)},n.a.createElement("p",null,e.detailTxt)))}},50:function(e,a,t){e.exports=t.p+"images/story-bg.7ca8f0a16696f16fd1394a7331febf3f.jpg"},51:function(e,a,t){e.exports=t.p+"images/tour1-bg.0babd24e5bab7040f0a54938a8f90233.jpg"},52:function(e,a,t){e.exports=t.p+"images/tour2-bg.0b2db65bc500c689b7f2e87aa67c9073.jpg"},53:function(e,a,t){e.exports=t.p+"images/tour3-bg.590e66020ca37fad68a137f839094f6b.jpg"},54:function(e,a,t){e.exports=t.p+"images/tour4-bg.4fdf2cde168253be69775e8474cf1ec9.jpg"},55:function(e,a,t){e.exports=t.p+"images/tour5-bg.f3f2376c301228d94d296c63aaaf73b5.jpg"},57:function(e,a,t){e.exports=t.p+"images/hero-bg.9b641b0303d9e71bc4144ef67a631f48.jpg"},58:function(e,a,t){e.exports=t.p+"images/rentals/bikes-bg.e3a7fa6cb0bea49c4ddf5268a8680955.jpg"},59:function(e,a,t){e.exports=t.p+"images/rentals/canoes-bg.b09dcb7ec9ba08d864931a3ffb0e7a4f.jpg"},60:function(e,a,t){e.exports=t.p+"images/rentals/kayaks-bg.9b641b0303d9e71bc4144ef67a631f48.jpg"},61:function(e,a,t){e.exports=t.p+"images/rentals/sup-bg.49da1c2a05d70caf138f1018e78d117d.jpg"},65:function(e,a,t){var r={"./hero-bg.jpg":57,"./hero-home-bg.jpg":66,"./rentals/bikes-bg.jpg":58,"./rentals/canoes-bg.jpg":59,"./rentals/kayaks-bg.jpg":60,"./rentals/sup-bg.jpg":61,"./story-bg.jpg":50,"./tour1-bg.jpg":51,"./tour2-bg.jpg":52,"./tour3-bg.jpg":53,"./tour4-bg.jpg":54,"./tour5-bg.jpg":55};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=65},66:function(e,a,t){e.exports=t.p+"images/hero-home-bg.ff70f9cd297bc7d3e18c48371b50900a.jpg"},75:function(e,a,t){},91:function(e,a,t){e.exports=t.p+"images/slide-2.f5abdfe29e658421490a4a2f55242d56.jpg"},92:function(e,a,t){e.exports=t.p+"images/slide-3.67a5d4698331f4af3bab51fc57d82602.jpg"},93:function(e,a,t){}}]);