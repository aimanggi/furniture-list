(this["webpackJsonpfurniture-list"]=this["webpackJsonpfurniture-list"]||[]).push([[0],{42:function(e,t,r){e.exports=r(69)},47:function(e,t,r){},49:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),l=r(18),c=r.n(l),i=(r(47),r(28)),u=r(27),o=r.n(u),s=r(15),m=r(38),d=r(23),f=(r(49),r(21)),v=r(5),p=r(41),h={option:function(e,t){return Object(s.a)({},e,{backgroundColor:t.isFocused?"#f2f2f2 !important":"#fff !important"})}},y=function(e){return n.a.createElement("div",null,n.a.createElement(v.z.Option,e,n.a.createElement("div",{style:{color:"#2a2a2a",display:"flex",justifyContent:"space-between"}},n.a.createElement("div",null,e.data.label),n.a.createElement("div",null,e.isSelected?n.a.createElement("i",{className:"material-icons",style:{color:"#d98100"}},"check_box"):n.a.createElement("i",{className:"material-icons"},"check_box_outline_blank")))))},E=function(e){return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:e.label,className:"furniture-select-label"},e.label),n.a.createElement(p.a,{value:e.value,components:{Option:y},options:e.options,placeholder:e.placeholder,onChange:function(t){return e.onChange(t)},styles:h,isMulti:!0,hideSelectedOptions:!1,closeMenuOnSelect:!1}))},b=function(e){var t=Object(a.useState)({searchTerm:"",furnitureStyle:null,deliveryTime:null,name:""}),r=Object(d.a)(t,2),l=r[0],c=r[1];Object(a.useEffect)((function(){e.filterProduct("filter",{furnitureStyle:l.furnitureStyle?l.furnitureStyle.map((function(e){return e.value})):[],deliveryTime:l.deliveryTime?l.deliveryTime.map((function(e){return e.value})):[]}),l.searchTerm&&e.filterProduct("search",l.searchTerm)}),[l.furnitureStyle,l.deliveryTime,l.searchTerm]);var i=function(e,t){c(Object(s.a)({},l,Object(f.a)({},t,e)))};return n.a.createElement("div",{className:"furniture-filter"},n.a.createElement("div",{className:"furniture-container"},n.a.createElement("input",{placeholder:"Search Furniture",className:"furniture-input",value:l.searchTerm,onChange:function(e){return i(e.target.value,"searchTerm")}}),n.a.createElement("div",{className:"furniture-row",style:{padding:"32px 0px"}},n.a.createElement("div",{className:"furniture-col",style:{marginBottom:16}},n.a.createElement(E,{placeholder:"Furniture Style",options:e.filterStyle,onChange:function(e){return i(e,"furnitureStyle")}})),n.a.createElement("div",{className:"furniture-col"},n.a.createElement(E,{placeholder:"Delivery Time",options:[{label:"1 Week",value:7},{label:"2 Weeks",value:14},{label:"1 Month",value:30},{label:"More",value:31}],onChange:function(e){return i(e,"deliveryTime")}})))))},g=r(40),N=r.n(g),w=function(e){return parseFloat(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},S=function(){return n.a.createElement("div",{className:"furniture-container"},n.a.createElement("div",{className:"furniture-row",style:{margin:"16px 0px"}},n.a.createElement("div",{className:"furniture-col"},n.a.createElement("div",{style:{height:229},className:"content-loader"})),n.a.createElement("div",{className:"furniture-col"},n.a.createElement("div",{style:{height:229},className:"content-loader"}))),n.a.createElement("div",{className:"furniture-row"},n.a.createElement("div",{className:"furniture-col"},n.a.createElement("div",{style:{height:229},className:"content-loader"})),n.a.createElement("div",{className:"furniture-col"},n.a.createElement("div",{style:{height:229},className:"content-loader"}))))};var _=function(){var e=Object(a.useState)({filterStyle:[],product:[],allProducts:[],searchTerm:"",loading:!0}),t=Object(d.a)(e,2),r=t[0],l=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("http://www.mocky.io/v2/5c9105cb330000112b649af8");case 3:if(!(t=e.sent)){e.next=9;break}console.log(t),l(Object(s.a)({},r,{filterStyle:t.data.furniture_styles.map((function(e){return{label:e,value:e}})),loading:!1,product:t.data.products,allProducts:t.data.products})),e.next=11;break;case 9:throw"Internal Server Error. Please Try Again.","Internal Server Error. Please Try Again.";case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("app state",r),n.a.createElement("div",{className:""},n.a.createElement(b,{filterStyle:r.filterStyle,filterProduct:function(e,t){if("filter"===e||"search"===e&&""===t)t.deliveryTime.length||t.furnitureStyle.length?function(e,t){var a=[],n=[];t.map((function(t){return t.furniture_style.map((function(r){return e.furnitureStyle.includes(r)?a.push(t):null}))}));(a.length?a:r.allProducts).map((function(t){var r=parseInt(t.delivery_time);return e.deliveryTime.map((function(e){return console.log("f",e),7===e?8>r&&(r<7||7===r):14===e?15>r&&r>7&&(r<14||14===r):30===e?31>r&&r>14&&(r<30||30===r):e>30&&(r>30&&29<r)})).filter((function(e){return!0===e})).length?n.push(t):null})),l(Object(s.a)({},r,{product:e.deliveryTime.length?Object(i.a)(new Set(n)):Object(i.a)(new Set(a))}))}(t,r.allProducts):l(Object(s.a)({},r,{product:r.allProducts}));else if(r.allProducts.length!==r.product){var a=r.product.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));l(Object(s.a)({},r,{searchTerm:t,product:a}))}else{var n=r.product.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));l(Object(s.a)({},r,{searchTerm:t,product:n}))}}}),r.loading?n.a.createElement(S,null):n.a.createElement("div",{className:"furniture-container",style:{paddingTop:32}},n.a.createElement("div",{className:"furniture-row"},r.product.map((function(e){return n.a.createElement("div",{className:"furniture-col ",key:e.name,style:{marginBottom:16}},n.a.createElement("div",{className:"furniture-card"},n.a.createElement("div",{className:"furniture-card__title"},n.a.createElement("div",{className:"furniture-card__name"},e.name),n.a.createElement("div",{className:"furniture-card__price"},w(e.price))),n.a.createElement("div",{className:"furniture-card__description"},e.description.length>144?"".concat(e.description.substring(0,144),"..."):e.description),n.a.createElement("div",{className:"furniture-card__style"},n.a.createElement("i",{className:"material-icons"},"local_offer"),e.furniture_style.join(", ")),n.a.createElement("div",{className:"furniture-card__delivery"},n.a.createElement("i",{className:"material-icons"},"access_time"),e.delivery_time," hari pengiriman")))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.2976d4f3.chunk.js.map