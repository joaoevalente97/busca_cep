(this["webpackJsonpbusca-cep"]=this["webpackJsonpbusca-cep"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(11),o=c.n(i),s=c(18),r=c.n(s),j=c(21),A=c(8),d=(c(34),c(42)),l=c(19),I=c(26),u=c(14),v=c(15),b=c(12),h=c(22),E=c(13),O=c(5);var S=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),o=Object(A.a)(i,2),s=o[0],S=o[1],R=Object(a.useState)(""),x=Object(A.a)(R,2),g=x[0],C=x[1],p=Object(a.useState)(""),Z=Object(A.a)(p,2),k=Z[0],m=Z[1],q=Object(a.useState)(""),N=Object(A.a)(q,2),F=N[0],U=N[1],H=Object(a.useState)(""),J=Object(A.a)(H,2),G=J[0],y=J[1],K=Object(a.useState)(""),B=Object(A.a)(K,2),P=B[0],Y=B[1],L=Object(a.useState)(""),f=Object(A.a)(L,2),D=f[0],Q=f[1],V=Object(a.useState)(""),W=Object(A.a)(V,2),M=W[0],T=W[1];function w(){return(w=Object(j.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://viacep.com.br/ws/".concat(t,"/json/"),e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){S(e.cep),C(e.logradouro),U(e.bairro),y(e.localidade),Y(e.uf),Q(e.ddd),n(""),e.complemento?m(e.complemento):m("N\xe3o tem."),e.erro&&T("CEP n\xe3o encontrado, verifique a digita\xe7\xe3o!")})).catch((function(e){console.error("Erro ao obter o endere\xe7o: ".concat(e.message)),T("CEP n\xe3o encontrado, verifique a digita\xe7\xe3o!"),S(""),n("")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsxs)(E.a,{children:[Object(O.jsx)(d.a,{className:"justify-content-md-center",children:Object(O.jsx)("img",{alt:"logo",src:"data:image/png;base64,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"})}),Object(O.jsx)(d.a,{className:"justify-content-md-center",children:Object(O.jsx)("h1",{children:"Busca CEP"})}),Object(O.jsx)(d.a,{className:"justify-content-md-center",children:Object(O.jsxs)(I.a,{inline:!0,children:[Object(O.jsx)(u.a,{type:"text",value:c,onChange:function(e){return n(e.target.value)},placeholder:"Digite o CEP..."}),"\xa0",Object(O.jsx)(l.a,{variant:"info",onClick:function(){return function(e){return w.apply(this,arguments)}(c)},children:"Buscar CEP"})]})}),Object(O.jsx)(d.a,{children:"\xa0"}),isNaN(c)&&n(""),Object(O.jsx)(d.a,{className:"justify-content-md-center",children:M&&Object(O.jsxs)(v.a,{onClose:function(){return T(null)},delay:3e3,autohide:!0,className:"bg-danger",children:[Object(O.jsx)(v.a.Header,{children:Object(O.jsx)("strong",{className:"mr-auto",children:"Erro"})}),Object(O.jsx)(v.a.Body,{className:"bg-white text-danger",children:M})]})}),s&&Object(O.jsx)(b.a,{variant:"info",children:Object(O.jsxs)(b.a.Body,{children:[Object(O.jsxs)(b.a.Title,{children:["CEP: ",s]}),Object(O.jsxs)(b.a.Text,{children:[Object(O.jsxs)("h4",{children:["Rua: ",g]}),Object(O.jsxs)("h4",{children:["Complemento: ",k]}),Object(O.jsxs)("h4",{children:["Bairro: ",F]}),Object(O.jsxs)("h4",{children:["Cidade: ",G]}),Object(O.jsxs)("h4",{children:["Estado: ",P]}),Object(O.jsxs)("h4",{children:["DDD: ",D]})]}),Object(O.jsx)(d.a,{className:"justify-content-md-center",children:Object(O.jsx)(l.a,{variant:"dark",onClick:function(){return S("")},children:"Limpar"})})]})})]})})})};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.01683a8e.chunk.js.map