"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2693],{12693:function(e,s,a){a.r(s);var l=a(85893),r=a(67294),n=a(19663),t=a(9669),c=a.n(t),o=a(11163);s.default=function(e){var s=e.old_address,a=e.token,t=void 0===a?null:a,d=(0,o.useRouter)();(0,r.useEffect)((function(){t?c().defaults.headers.common.Authorization="Bearer ".concat(t||""):d.push("/login")}),[]);var i=(0,r.useState)(s.fname),u=i[0],m=i[1],h=(0,r.useState)(s.lname),x=h[0],p=h[1],f=(0,r.useState)(s.country),v=f[0],j=f[1],N=(0,r.useState)(s.address),g=N[0],y=N[1],b=(0,r.useState)(s.city),C=b[0],k=b[1],S=(0,r.useState)(s.postCode),w=S[0],F=S[1],q=(0,r.useState)(s.isDefault),A=q[0],_=q[1],T=(0,r.useState)(s.phoneNumber),E=T[0],P=T[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Edit Address"}),(0,l.jsx)("hr",{}),s&&(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(0,n.yf)(E)&&c().post("/api/account/setAddress?id=".concat(s._id),{fname:u,lname:x,country:v,address:g,city:C,postCode:w,isDefault:A,phoneNumber:E,addressType:s.addressType}).then((function(e){"success"==e.data&&d.push("/profile/addressbook")})).catch((function(e){console.log(e)}))},children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"fname",children:"First Name"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"fname",required:!0,name:"fname",placeholder:"first name...",value:u,onChange:function(e){return m(e.target.value)}})]})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"lname",children:"Last Name"}),(0,l.jsx)("input",{type:"text",required:!0,className:"form-control",id:"lname",name:"lname",placeholder:"Last name...",value:x,onChange:function(e){return p(e.target.value)}})]})})]}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"telephone",children:"Telephone"}),(0,l.jsx)(n.ZP,{international:!0,defaultCountry:"QA",value:E,onChange:function(e){P(e)},autoComplete:"none",error:E?(0,n.yf)(E)?void 0:"Invalid phone number":"Phone number required"}),(0,n.yf)(E)?null:(0,l.jsx)("div",{className:"ml-4 text-danger",children:"Valid phone number required"})]})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Country"}),(0,l.jsx)("select",{value:v,name:"country",className:"form-control",onChange:function(e){return j(e.target.value)},children:(0,l.jsx)("option",{value:"Qatar",children:"Qatar"})})]})})]}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"address1",children:"Address"}),(0,l.jsx)("input",{type:"text",required:!0,className:"form-control",id:"address",placeholder:"Address line one...",value:g,onChange:function(e){return y(e.target.value)}})]})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"city",children:"City"}),(0,l.jsx)("input",{type:"text",required:!0,className:"form-control",id:"city",placeholder:"city...",value:C,onChange:function(e){return k(e.target.value)}})]})})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"postcode",children:"Post Code/Zip"}),(0,l.jsx)("input",{required:!0,type:"text",className:"form-control",id:"postcode",placeholder:"Post Code/Zip",value:w,onChange:function(e){return F(e.target.value)}})]})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsxs)("div",{className:"custom-control custom-checkbox mr-sm-2",children:[(0,l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"dbilling",name:"dbilling",checked:A,onChange:function(e){return _(e.currentTarget.checked)}}),(0,l.jsxs)("label",{className:"custom-control-label",htmlFor:"dbilling",children:["Use as my default ",s.addressType," address"]})]})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("input",{type:"submit",className:"saveBtn",value:"Save New Address"})})})]})]})}}}]);