(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),c=a.n(l),r=(a(13),a(1));a(15);function s(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," ")},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"})),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/"}))),o.a.createElement("div",{className:"btn-toolbar  mx-4",role:"toolbar","aria-label":"Toolbar with button groups"},o.a.createElement("div",{className:"btn-group me-2",role:"group","aria-label":"First group"},o.a.createElement("button",{type:"button",className:"btn btn-light",onClick:e.toggleModeLight},"Light"),o.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:e.toggleModeDark},"Dark"),o.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.toggleModeDanger},"Danger"),o.a.createElement("button",{type:"button",className:"btn btn-success",onClick:e.toggleModeSuccess},"Success"),o.a.createElement("button",{type:"button",className:"btn btn-info",onClick:e.toggleModeSky},"Sky"))),o.a.createElement("form",{className:"d-flex",role:"search"},o.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," text-").concat("light"===e.mode?"dark":"light"),type:"submit"},"Search")))))}function m(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h1",null,e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){console.log("On change"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),o.a.createElement("button",{className:"btn btn-".concat(e.mode," mx-1"),onClick:function(){console.log("Uppercase was clicked");var e=l.toUpperCase();c(e)}},"Convert to Uppercase"),o.a.createElement("button",{className:"btn btn-".concat(e.mode," mx-1"),onClick:function(){console.log("Lowercase was clicked");var e=l.toLowerCase();c(e)}},"Convert to Lowercase"),o.a.createElement("button",{className:"btn btn-".concat(e.mode," mx-1"),onClick:function(){c("")}},"Clear the text"),o.a.createElement("button",{className:"btn btn-".concat(e.mode," mx-1"),onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")}},"Copy to clipboard")),o.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h2",null,"Yor text Summary"),o.a.createElement("p",null,l.split(" ").filter(function(e){return""!==e}).length," Words ",l.length," Characters"),o.a.createElement("p",null,.008*l.split(" ").length," Minutes read"),o.a.createElement("h2",null,"Yor text Summary"),o.a.createElement("p",null,l.length>0?l:"Enter something in the textbox above for preview")))}s.defaultProps={title:"set title here",abouttext:"set about here"};var i=function(e){return e.alert&&o.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,e.alert.msg))};var u=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),u=Object(r.a)(c,2),b=u[0],d=u[1],g=function(e,t){d({msg:e,type:t}),setTimeout(function(){d(null)},1500)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{title:"TextUtils",mode:a,toggleModeDark:function(){l("dark"),document.body.style.backgroundColor="#153462",g("Dark mode has been enabled","success")},toggleModeLight:function(){l("info"),document.body.style.backgroundColor="white",g("Light mode has been enabled","success")},toggleModeDanger:function(){l("danger"),document.body.style.backgroundColor="#FFD4D4",g("Danger mode has been enabled","success")},toggleModeSuccess:function(){l("success"),document.body.style.backgroundColor="#9DF1DF",g("Success mode has been enabled","success")},toggleModeSky:function(){l("primary"),document.body.style.backgroundColor="#BCCEF8",g("Sky mode has been enabled","success")},abouttext:"About"}),o.a.createElement(i,{alert:b}),o.a.createElement("div",{className:"Container my-3 mx-5"},o.a.createElement(m,{showAlert:g,heading:"Enter the text to analyze",mode:a})))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})};a(17);c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null))),b()},4:function(e,t,a){e.exports=a(19)}},[[4,3,2]]]);
//# sourceMappingURL=main.edc50a97.chunk.js.map