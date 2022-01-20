(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(6),s=n.n(o),l=(n(12),n(7)),r=n(2),i=(n(13),n(0));function u(t){var e=t.value,n=Object(c.useState)(e.quoteText),a=Object(r.a)(n,2),o=a[0],s=a[1],l=Object(c.useState)("ro"),u=Object(r.a)(l,2),j=u[0],h=u[1],b=Object(c.useState)(""),d=Object(r.a)(b,2),f=d[0],O=d[1],p=Object(c.useState)(!1),g=Object(r.a)(p,2),m=g[0],x=g[1],v=Object(c.useState)(e.translations.length>0?e.translations.sort((function(t,e){return new Date(t.createdAt).getTime()>new Date(e.createdAt).getTime()}))[0]:void 0),N=Object(r.a)(v,2),q=N[0],S=N[1],T=function(){x(!1),h("ro"),O("")};return Object(i.jsxs)("li",{className:"quote-item",children:[Object(i.jsxs)("div",{className:"quote-text  ".concat(q?"active":""),title:q?"Click to see last translation":"Missing translation",onClick:function(){return s(o===e.quoteText&&q?q.translationText:e.quoteText)},children:["\u201c",o,"\u201d"]}),Object(i.jsx)("div",{className:"quote-author",children:e.quoteAuthor}),m?null:Object(i.jsxs)("div",{className:"quote-actions",children:[q?null:Object(i.jsx)("button",{className:"btn btn-add-translation",onClick:function(){return x(!0)},children:"Add translation"}),Object(i.jsx)("button",{className:"btn btn-remove",onClick:function(){return t.onRemove(e.id)},children:"Remove"})]}),m?Object(i.jsxs)("div",{className:"quote-translation",children:[Object(i.jsx)("textarea",{value:f,onChange:function(t){return O(t.target.value)},placeholder:"Translation here...",className:"quote-input"}),Object(i.jsxs)("div",{className:"quote-translation-actions",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return T()},children:"Cancel"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return function(){var t={lang:j,text:e.quoteText};fetch("http://localhost:8080/api/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){t.message?alert(t.message):O(t.translation)})).catch((function(t){console.log(t)}))}()},children:"Translate"}),Object(i.jsx)("select",{value:j,onChange:function(t){return h(t.target.value)},children:t.langs.map((function(t){return Object(i.jsx)("option",{value:t,children:t},t)}))}),Object(i.jsx)("button",{className:"btn",onClick:function(){return function(){var t={translation:f,lang:j,source:"auto",quoteId:e.id};fetch("http://localhost:8080/api/quotes/add-translation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){t.message?alert(t.message):(T(),S(t))})).catch((function(t){console.log(t)}))}()},children:"Save"})]})]})]}):null]},e)}function j(t){var e=t.quotes.map((function(e){return Object(i.jsx)(u,{value:e,langs:t.langs,onRemove:function(e){return t.onRemove(e)}},e.id.toString())}));return Object(i.jsx)("ul",{className:"quotes-list",children:e})}function h(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),a=n[0],o=n[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),u=l[0],j=l[1],h=Object(c.useState)("ro"),b=Object(r.a)(h,2),d=b[0],f=b[1],O=Object(c.useState)(""),p=Object(r.a)(O,2),g=p[0],m=p[1],x=function(){o(""),j(""),f("ro"),m("")};return Object(i.jsxs)("form",{onSubmit:function(t){return t.preventDefault()},children:[Object(i.jsx)("p",{style:{marginTop:0},children:Object(i.jsxs)("label",{children:["Quote:",Object(i.jsx)("textarea",{placeholder:"Quote here...",className:"quote-input",value:a,onChange:function(t){return o(t.target.value)}})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:["Author:",Object(i.jsx)("input",{placeholder:"Author here...",className:"quote-input",type:"text",value:u,onChange:function(t){return j(t.target.value)}})]})}),Object(i.jsxs)("div",{className:"quote-translation",style:{marginBottom:"10px",overflow:"auto"},children:[Object(i.jsx)("textarea",{value:g,onChange:function(t){return m(t.target.value)},placeholder:"Translation here...",className:"quote-input"}),Object(i.jsxs)("div",{style:{float:"right"},children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return function(){var t={lang:d,text:a};fetch("http://localhost:8080/api/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){t.message?alert(t.message):m(t.translation)})).catch((function(t){console.log(t)}))}()},children:"Translate"}),Object(i.jsx)("select",{value:d,onChange:function(t){return f(t.target.value)},children:t.langs.map((function(t){return Object(i.jsx)("option",{value:t,children:t},t)}))})]})]}),Object(i.jsxs)("div",{style:{float:"clear"},children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return x()},children:"Reset"}),Object(i.jsx)("button",{className:"btn",style:{float:"right",fontSize:"16px"},onClick:function(e){return function(e){e.preventDefault();var n={quote:a,author:u,translations:g?[{translation:g,lang:d,source:"auto"}]:[]};fetch("http://localhost:8080/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(e){e.message?alert(e.message):(x(),t.onAdd(e))})).catch((function(t){console.log(t)}))}(e)},children:"Save"})]})]})}var b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)([]),s=Object(r.a)(o,2),u=s[0],b=s[1];Object(c.useEffect)((function(){d(),fetch("http://localhost:8080/api/translate/langs",{method:"GET"}).then((function(t){return t.json()})).then((function(t){b(t.languages)})).catch((function(t){console.log(t)}))}),[]);var d=function(){fetch("http://localhost:8080/api/quotes",{method:"GET"}).then((function(t){return t.json()})).then((function(t){a(t)})).catch((function(t){console.log(t)}))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("h1",{children:"Quote Manager"})}),Object(i.jsxs)("section",{className:"App-content",children:[Object(i.jsxs)("div",{className:"App-col App-quotes",children:[Object(i.jsx)("h6",{children:"Quotes"}),Object(i.jsx)(j,{langs:u,quotes:n,onRemove:function(t){return function(t){fetch("http://localhost:8080/api/quotes/".concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){t.message&&alert(t.message),d()})).catch((function(t){console.log(t)}))}(t)}}),","]}),Object(i.jsxs)("div",{className:"App-col App-quote",children:[Object(i.jsx)("h6",{children:"Add quote"}),Object(i.jsx)(h,{langs:u,onAdd:function(t){return function(t){var e=Object(l.a)(n);e.push(t),a(e)}(t)}})]})]})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.860ef876.chunk.js.map