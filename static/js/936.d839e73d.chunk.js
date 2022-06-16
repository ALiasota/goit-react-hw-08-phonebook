"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{2936:function(e,a,s){s.d(a,{Z:function(){return ne}});var r=s(1413),i=s(4925),l=s(1694),t=s.n(l),o=s(2007),n=s.n(o),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,o=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,i.Z)(e,f);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:t()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,N=void 0!==u&&u,h=e.as,y=void 0===h?"input":h,Z=(0,i.Z)(e,x),P=(0,c.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},Z),{},{ref:a,type:f,id:s||P,className:t()(o,l,m&&"is-valid",N&&"is-invalid")}))}));N.displayName="FormCheckInput";var h=N,y=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,i.Z)(e,y),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},n),{},{ref:a,htmlFor:o||f,className:t()(l,s)}))}));Z.displayName="FormCheckLabel";var P=Z;var j=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.disabled,m=void 0!==v&&v,x=e.isValid,N=void 0!==x&&x,y=e.isInvalid,Z=void 0!==y&&y,w=e.feedbackTooltip,I=void 0!==w&&w,k=e.feedback,F=e.feedbackType,C=e.className,g=e.style,R=e.title,E=void 0===R?"":R,z=e.type,S=void 0===z?"checkbox":z,T=e.label,V=e.children,L=e.as,O=void 0===L?"input":L,_=(0,i.Z)(e,j);l=(0,b.vE)(l,"form-check"),o=(0,b.vE)(o,"form-switch");var H=(0,c.useContext)(p).controlId,G=(0,c.useMemo)((function(){return{controlId:s||H}}),[H,s]),M=!V&&null!=T&&!1!==T||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,P),U=(0,d.jsx)(h,(0,r.Z)((0,r.Z)({},_),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:N,isInvalid:Z,disabled:m,as:O}));return(0,d.jsx)(p.Provider,{value:G,children:(0,d.jsx)("div",{style:g,className:t()(C,M&&l,f&&"".concat(l,"-inline"),"switch"===S&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[U,M&&(0,d.jsx)(P,{title:E,children:T}),k&&(0,d.jsx)(u,{type:F,tooltip:I,children:k})]})})})}));w.displayName="FormCheck";var I=Object.assign(w,{Input:h,Label:P}),k=s(4942),F=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var s,l,o=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,N=void 0!==x&&x,h=e.isInvalid,y=void 0!==h&&h,Z=e.plaintext,P=e.readOnly,j=e.as,w=void 0===j?"input":j,I=(0,i.Z)(e,F),C=(0,c.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?s=(0,k.Z)({},"".concat(o,"-plaintext"),!0):(l={},(0,k.Z)(l,o,!0),(0,k.Z)(l,"".concat(o,"-").concat(f),f),s=l);return(0,d.jsx)(w,(0,r.Z)((0,r.Z)({},I),{},{type:n,size:v,ref:a,readOnly:P,id:m||C,className:t()(u,s,N&&"is-valid",y&&"is-invalid","color"===n&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var g=Object.assign(C,{Feedback:u}),R=/-(.)/g;var E=["className","bsPrefix","as"],z=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var S=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.displayName,l=void 0===s?z(e):s,o=a.Component,n=a.defaultProps,f=c.forwardRef((function(a,s){var l=a.className,n=a.bsPrefix,c=a.as,f=void 0===c?o||"div":c,v=(0,i.Z)(a,E),m=(0,b.vE)(n,e);return(0,d.jsx)(f,(0,r.Z)({ref:s,className:t()(l,m)},v))}));return f.defaultProps=n,f.displayName=l,f}("form-floating"),T=["controlId","as"],V=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,t=void 0===l?"div":l,o=(0,i.Z)(e,T),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(t,(0,r.Z)((0,r.Z)({},o),{},{ref:a}))})}));V.displayName="FormGroup";var L=V,O=s(885),_=["as","bsPrefix","className"],H=["className"];var G=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,o=(0,i.Z)(e,_);s=(0,b.vE)(s,"col");var n=(0,b.pi)(),c=[],d=[];return n.forEach((function(e){var a,r,i,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,r=l.offset,i=l.order):a=l;var t="xs"!==e?"-".concat(e):"";a&&c.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=i&&d.push("order".concat(t,"-").concat(i)),null!=r&&d.push("offset".concat(t,"-").concat(r))})),[(0,r.Z)((0,r.Z)({},o),{},{className:t().apply(void 0,[l].concat(c,d))}),{as:a,bsPrefix:s,spans:c}]}(e),l=(0,O.Z)(s,2),o=l[0],n=o.className,c=(0,i.Z)(o,H),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:t()(n,!p.length&&u)}))}));G.displayName="Col";var M=G,U=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],A=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,o=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,i.Z)(e,U),x=(0,c.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var N="col-form-label";"string"===typeof n&&(N="".concat(N," ").concat(N,"-").concat(n));var h=t()(v,o,f&&"visually-hidden",n&&N);return m=m||x,n?(0,d.jsx)(M,(0,r.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(l,(0,r.Z)({ref:a,className:h,htmlFor:m},u))}));A.displayName="FormLabel",A.defaultProps={column:!1,visuallyHidden:!1};var q=A,B=["bsPrefix","className","id"],D=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.id,n=(0,i.Z)(e,B),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},n),{},{type:"range",ref:a,className:t()(l,s),id:o||f}))}));D.displayName="FormRange";var J=D,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Q=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,N=(0,i.Z)(e,K),h=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},N),{},{size:o,ref:a,className:t()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));Q.displayName="FormSelect";var W=Q,X=["bsPrefix","className","as","muted"],Y=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,c=e.muted,f=(0,i.Z)(e,X);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:t()(l,s,c&&"text-muted")}))}));Y.displayName="FormText";var $=Y,ee=c.forwardRef((function(e,a){return(0,d.jsx)(I,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));ee.displayName="Switch";var ae=Object.assign(ee,{Input:I.Input,Label:I.Label}),se=["bsPrefix","className","children","controlId","label"],re=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.children,n=e.controlId,c=e.label,f=(0,i.Z)(e,se);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(L,(0,r.Z)((0,r.Z)({ref:a,className:t()(l,s),controlId:n},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));re.displayName="FloatingLabel";var ie=re,le=["className","validated","as"],te={_ref:n().any,validated:n().bool,as:n().elementType},oe=c.forwardRef((function(e,a){var s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,i.Z)(e,le);return(0,d.jsx)(n,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:t()(s,l&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=te;var ne=Object.assign(oe,{Group:L,Control:g,Floating:S,Check:I,Switch:ae,Label:q,Text:$,Range:J,Select:W,FloatingLabel:ie})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=936.d839e73d.chunk.js.map