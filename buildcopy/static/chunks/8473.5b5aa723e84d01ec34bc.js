"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8473],{68473:function(e,s,r){r.r(s);var a=r(85893),i=r(41664),l=r(67294),d=r(11163),c=r(12625);s.default=(0,c.withTranslation)("common")((function(e){var s=e.active,r=e.styles,c=e.t,t=(0,d.useRouter)(),o=(0,l.useState)(),n=o[0],h=o[1];return(0,l.useEffect)((function(){var e=t.asPath;h("/profile/addressbook"==e?"addressbook":"/profile/refer"==e?"refer":"/profile/waitlist"==e?"waitlist":"/profile/orders"==e?"orders":"dashboard")}),[t]),(0,a.jsxs)("div",{className:r.side_container,children:[(0,a.jsx)("div",{className:r.side_header,children:c("My Account")}),(0,a.jsxs)("ul",{className:r.side_list,children:[(0,a.jsx)("li",{className:r.side_item,children:(0,a.jsx)(i.default,{href:"/profile",children:(0,a.jsx)("a",{className:"dashboard"==s?r.active:"",children:c("Account Dashboard")})})}),(0,a.jsx)("li",{className:r.side_item,children:(0,a.jsx)(i.default,{href:"/profile/refer",children:(0,a.jsx)("a",{className:"refer"==s?r.active:"",children:c("Refer Friends")})})}),(0,a.jsx)("li",{className:r.side_item,children:(0,a.jsx)(i.default,{href:"/profile/addressbook",children:(0,a.jsx)("a",{className:"addressbook"==s?r.active:"",children:c("Address Book")})})}),(0,a.jsx)("li",{className:r.side_item,children:(0,a.jsx)(i.default,{href:"/profile/orders",children:(0,a.jsx)("a",{className:"orders"==s?r.active:"",children:c("My Orders")})})}),(0,a.jsx)("li",{className:r.side_item,children:(0,a.jsx)(i.default,{href:"/profile/waitlist",children:(0,a.jsx)("a",{className:"waitlist"==s?r.active:"",children:c("WaitList")})})})]}),(0,a.jsxs)("select",{className:" ".concat(r.mb_select," form-control"),onChange:function(e){t.push("/profile/".concat(e.target.value))},value:"dashboard"==n?"/":n,children:[(0,a.jsx)("option",{value:"/",children:c("Account Dashboard")}),(0,a.jsx)("option",{value:"refer",children:c("Refer Friends")}),(0,a.jsx)("option",{value:"addressbook",children:c("Address Book")}),(0,a.jsx)("option",{value:"orders",children:c("My Orders")}),(0,a.jsx)("option",{value:"waitlist",children:c("WaitList")})]})]})}))}}]);