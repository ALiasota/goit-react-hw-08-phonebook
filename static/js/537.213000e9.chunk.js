"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{3537:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(885),r=t(2791),s=t(3027),i=t(6157),l=t(2411),c=t(184),o=function(e){var n=e.btn,t=void 0===n?"Add contact":n,o=e.changedName,u=void 0===o?"":o,d=e.changedNumber,m=void 0===d?"":d,h=e.changedId,x=void 0===h?null:h,f=e.closeModal,j=void 0===f?null:f,b=(0,r.useState)(u),g=(0,a.Z)(b,2),p=g[0],v=g[1],Z=(0,r.useState)(m),C=(0,a.Z)(Z,2),N=C[0],y=C[1],w=(0,l.Tn)(),L=(0,a.Z)(w,2),k=L[0],_=L[1].isLoading,I=(0,l.Cq)(),S=(0,a.Z)(I,2),D=S[0],E=S[1].isLoading,F=(0,l.Jx)().data;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.Z,{className:"mt-4",onSubmit:function(e){if(e.preventDefault(),""!==p&&""!==N){if("Add contact"===t){if(F.some((function(e){return e.name.toLowerCase()===p.toLowerCase()})))return void alert("".concat(p," is already in contacts"));k({name:p,number:N})}else D({changedId:x,name:p,number:N}),j();v(""),y("")}else alert("Please fill all fields")},children:[(0,c.jsxs)(s.Z.Group,{className:"mb-3",children:[(0,c.jsx)(s.Z.Label,{children:"Name"}),(0,c.jsx)(s.Z.Control,{name:"name",value:p,onChange:function(e){v(e.target.value)},type:"text",placeholder:"Enter name"})]}),(0,c.jsxs)(s.Z.Group,{className:"mb-3",children:[(0,c.jsx)(s.Z.Label,{children:"Number"}),(0,c.jsx)(s.Z.Control,{name:"number",value:N,onChange:function(e){y(e.target.value)},type:"tel",placeholder:"Enter number"})]}),(0,c.jsx)(i.Z,{variant:"primary",type:"submit",children:_||E?"Procesing...":"".concat(t)})]})})},u=t(5048),d=t(3268),m=function(e){return e.filter},h=function(){var e=(0,u.v9)(m),n=(0,u.I0)();return(0,c.jsxs)(s.Z.Group,{className:"mb-3 mt-3",children:[(0,c.jsx)(s.Z.Label,{children:"Find contacts by name"}),(0,c.jsx)(s.Z.Control,{name:"filter",value:e,onChange:function(e){return n((0,d.M)(e.target.value))},type:"text",placeholder:"Enter name"})]})},x=t(24),f=t(6547),j=function(e){var n=e.name,t=e.number,s=e.id,l=(0,r.useState)(!1),u=(0,a.Z)(l,2),d=u[0],m=u[1],h=function(){return m(!1)},j=(0,x._6)(),b=(0,a.Z)(j,2),g=b[0],p=b[1].isLoading;return(0,c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[(0,c.jsxs)("span",{children:[n,": ",t]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{className:"btn-sm",type:"button",onClick:function(){return m(!0)},children:"Change"}),(0,c.jsx)("span",{children:" "}),(0,c.jsx)(i.Z,{className:"btn-sm",type:"button",onClick:function(){return g(s)},children:p?"isDeliting...":"Delete"})]}),(0,c.jsxs)(f.Z,{show:d,onHide:h,children:[(0,c.jsx)(f.Z.Header,{closeButton:!0,children:(0,c.jsx)(f.Z.Title,{children:"Change contact"})}),(0,c.jsx)(f.Z.Body,{children:(0,c.jsx)(o,{btn:"Change contact",changedName:n,changedNumber:t,changedId:s,closeModal:h})})]})]})},b=function(){var e=(0,x.Jx)(),n=e.data,t=e.isLoading,a=(0,u.v9)(m);if(n){var r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t?(0,c.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:(0,c.jsx)("span",{className:"sr-only"})}):(0,c.jsx)("ul",{className:"list-group",children:r.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,c.jsx)(j,{id:n,name:t,number:a},n)}))})}},g=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{}),(0,c.jsx)(h,{}),(0,c.jsx)("h1",{className:"text-primary",children:"Contacts"}),(0,c.jsx)(b,{})]})}}}]);
//# sourceMappingURL=537.213000e9.chunk.js.map