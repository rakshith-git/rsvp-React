(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),o=(t(13),t(1));t(14);function s(e){var a=e.title,t=e.first,n=e.second,l=e.dropDown,c=void 0===l?"dropDown":l,o=e.dropDownitem1,s=void 0===o?"item-1":o,m=e.dropDownitem2,i=void 0===m?"item-2":m,u=e.dropDownitem3,d=void 0===u?"item-3":u;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},a),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},t)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},n)),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},c),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"#"},s)),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"#"},i)),r.a.createElement("li",null,r.a.createElement("hr",{className:"dropdown-divider"})),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"#"},d)))))))))}function m(e){var a=e.inpFunc;return r.a.createElement("div",null,r.a.createElement("div",{className:"accordion accordion-flush",id:"accordionFlushExample"},r.a.createElement("div",{className:"accordion-item"},r.a.createElement("h2",{className:"accordion-header"},r.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},"Enter input here")),r.a.createElement("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},r.a.createElement("div",{className:"accordion-body"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Input Text"),r.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",onChange:a,rows:3,defaultValue:""})))))))}var i=0;var u=function(){var e=Object(n.useState)(50),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),d=u[0],p=u[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),v=E[0],f=E[1],g=Object(n.useState)(2),N=Object(o.a)(g,2),h=N[0],w=N[1],x=Object(n.useState)(0),O=Object(o.a)(x,2),S=O[0],j=O[1],y=Object(n.useState)("Start"),F=Object(o.a)(y,2),C=F[0],k=F[1],D=Object(n.useState)("Bionic"),I=Object(o.a)(D,2),T=I[0],B=I[1],R=Object(n.useState)(0),P=Object(o.a)(R,2),M=P[0],J=P[1],L=[];return v?L=v.split(" "):f("Enter\xa0text"),Object(n.useEffect)(function(){var e=setInterval(function(){if(0===S||i>=L.length-1)return function(){return clearInterval(e)};J(function(e){return w(function(a){if(e+1<L.length)return Math.floor(L[e+1].length/2)}),e+S}),i++},5e4/t);return function(){return clearInterval(e)}},[t,S]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"RSVP",first:"Home",second:"About",dropDown:"Mode",dropDownitem1:"lmao1",dropDownitem2:"lmao2"}),r.a.createElement(m,{inpFunc:function(e){return f((a=e.target.value,j(0),k("Start"),console.log(a),a?a.replace(/\n/g,"\xa0. ").replace("-"," ").trim():(console.log("null"),f(" "),"Enter\xa0text")));var a}}),r.a.createElement("div",{className:"rsvp"},function(){try{if(v)return console.log(v),!0===d?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"darkertxt",style:{color:"white"}},L[M].slice(0,h)),r.a.createElement("h1",{className:"lightertxt"},L[M].slice(h,L[M].length))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"darkertxt",style:{color:"white"}},L[M]));throw new Error("Text is empty or undefined")}catch(e){console.error(e.message)}}()),r.a.createElement("div",{className:"prog"},r.a.createElement("div",{className:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("div",{className:"progress-bar bg-success","aria-label":"Success example",style:{width:i/(L.length-1)*100+"%"}},parseInt(100*i/(L.length-1))+"%")),r.a.createElement("div",{className:"slider"},r.a.createElement("label",{htmlFor:"customRange1",className:"form-label"},"wpm=",parseInt(1e3/(6e4/t)*60)),r.a.createElement("input",{type:"range",className:"form-range",min:"1",max:"700",value:t,onChange:function(e){return l(e.target.value)},id:"customRange1"})),r.a.createElement("div",{className:"plbButtons"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){0===S?(j(function(){return 1}),k(function(){return"Pause"})):(j(function(){return 0}),k(function(){return"Start"}))}},C),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){i=0,J(function(e){return 0}),j(0),k("Start")}},"Restart"),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){!1===d?(p(!0),B("Normal")):(p(!1),B("Bionic"))}},T))))},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.17d7150c.chunk.js.map