(this.webpackJsonpabz_agency=this.webpackJsonpabz_agency||[]).push([[0],{102:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),s=n.n(o),l=n(6),i=n(13),u=n(46),c=n(1),m={show_header_open_menu:!1,users:null,users_count:6,total_users:null,positions:[],user_position:"",user_position_valid:!1,user_position_errors:"",user_position_touched:!1,user_name:"",user_name_errors:"",user_name_valid:!1,user_name_touched:!1,user_email:"",user_email_errors:"",user_email_valid:!1,user_email_touched:!1,user_phone:"",user_phone_errors:"",user_phone_valid:!1,user_phone_touched:!1,user_photo:void 0,user_photo_errors:"",user_photo_valid:!1,user_token:null,modalIsOpen:!1,modalTitle:""},p=Object(i.c)({usersReduser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"TOGGLE_OPEN_MENU":return Object(c.a)({},e,{show_header_open_menu:!e.show_header_open_menu});case"SET_USERS":return Object(c.a)({},e,{users:a.data,total_users:a.total_users});case"SET_MORE_USERS":return Object(c.a)({},e,{users:a});case"SET_USERS_COUNT":return Object(c.a)({},e,{users_count:e.users_count+3});case"SET_MODAL_IS_OPEN":return a?Object(c.a)({},e,{modalIsOpen:a}):Object(c.a)({},e,{modalIsOpen:a,modalTitle:""});case"SET_MODAL_TITLE":return Object(c.a)({},e,{modalTitle:a});case"RESET_FORM_INPUTS":return Object(c.a)({},e,{user_position:"",user_name:"",user_email:"",user_phone:"",user_photo:void 0,user_token:null,user_position_touched:!1,user_name_touched:!1,user_email_touched:!1,user_position_valid:!1,user_name_valid:!1,user_email_valid:!1,user_phone_valid:!1,user_photo_valid:!1,users_page:1});case"SET_POSITIONS":return Object(c.a)({},e,{positions:a});case"SET_TOKEN":return Object(c.a)({},e,{user_token:a});case"GET_NAME_VALUE":return Object(c.a)({},e,{user_name:a});case"GET_EMAIL_VALUE":return Object(c.a)({},e,{user_email:a});case"GET_PHONE_VALUE":return Object(c.a)({},e,{user_phone:a});case"GET_USER_POSITION":return Object(c.a)({},e,{user_position:a});case"GET_USER_PHOTO":return Object(c.a)({},e,{user_photo:a});case"USER_NAME_VALID":return Object(c.a)({},e,{user_name_valid:!0,user_name_errors:"",user_name_touched:!1});case"USER_NAME_INVALID":return Object(c.a)({},e,{user_name_valid:!1,user_name_errors:a});case"USER_NAME_TOUCHED":return Object(c.a)({},e,{user_name_touched:!0});case"USER_NAME_UNTOUCHED":return Object(c.a)({},e,{user_name_touched:!1});case"EMAIL_VALID":return Object(c.a)({},e,{user_email_valid:!0,user_email_errors:"",user_email_touched:!1});case"EMAIL_INVALID":return Object(c.a)({},e,{user_email_valid:!1,user_email_errors:a});case"EMAIL_TOUCHED":return Object(c.a)({},e,{user_email_touched:!0});case"EMAIL_UNTOUCHED":return Object(c.a)({},e,{user_email_touched:!1});case"PHONE_VALID":return Object(c.a)({},e,{user_phone_valid:!0,user_phone_errors:"",user_phone_touched:!1});case"PHONE_INVALID":return Object(c.a)({},e,{user_phone_valid:!1,user_phone_errors:a});case"PHONE_TOUCHED":return Object(c.a)({},e,{user_phone_touched:!0});case"PHONE_UNTOUCHED":return Object(c.a)({},e,{user_phone_touched:!1});case"POSITION_VALID":return Object(c.a)({},e,{user_position_valid:!0,user_position_errors:""});case"POSITION_INVALID":return Object(c.a)({},e,{user_position_valid:!1,user_position_errors:a});case"POSITION_TOUCHED":return Object(c.a)({},e,{user_position_touched:!0});case"POSITION_UNTOUCHED":return Object(c.a)({},e,{user_position_touched:!1});case"PHOTO_VALID":return Object(c.a)({},e,{user_photo_valid:!0,user_photo_errors:""});case"PHOTO_INVALID":return Object(c.a)({},e,{user_photo_valid:!1,user_photo_errors:a});default:return e}}}),_=Object(i.d)(p,Object(i.a)(u.a)),d=n(2),f=n(3),h=n.n(f),E=(n(68),n(18)),b=n.n(E),g=n(47),v=n.n(g),O=function(e){var t=e.show_header_open_menu,n=e.toggleOpenMenu;return r.a.createElement("header",{className:"header",id:"header"},r.a.createElement("div",{className:"page_container"},r.a.createElement(h.a,{top:!0},r.a.createElement("div",{className:"header__open-menu"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(d.Link,{to:"banner",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("img",{src:b.a,alt:"logotip"}),r.a.createElement("span",null,"testtask"))),r.a.createElement("img",{src:v.a,alt:"open menu",onClick:n,className:"open-menu-icon"})),r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(d.Link,{to:"banner",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("img",{src:b.a,alt:"logotip"}),r.a.createElement("span",null,"testtask"))),r.a.createElement("nav",{className:"header__navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"banner",spy:!0,smooth:!0,offset:-70,duration:500},"About me")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Relationships")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"about-me",spy:!0,smooth:!0,offset:-110,duration:500},"Requirements")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"users",spy:!0,smooth:!0,offset:-50,duration:500},"Users")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"register-form",spy:!0,smooth:!0,offset:-150,duration:500},"Sign Up"))))),r.a.createElement("div",{className:"open-menu"},r.a.createElement("div",{className:t?"header-container-open-menu":"header-container-open-menu--hide"},r.a.createElement("div",{className:"open-menu__logo"},r.a.createElement(d.Link,{to:"banner",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("img",{src:b.a,alt:"logotip"}),r.a.createElement("span",null,"testtask"))),r.a.createElement("nav",{className:"open-menu__navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"banner",spy:!0,smooth:!0,offset:-70,duration:500},"About me")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Relationships")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"about-me",spy:!0,smooth:!0,offset:-110,duration:500},"Requirements")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"users",spy:!0,smooth:!0,offset:-50,duration:500},"Users")),r.a.createElement("li",null,r.a.createElement(d.Link,{activeClass:"active",to:"register-form",spy:!0,smooth:!0,offset:-150,duration:500},"Sign Up")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Terms and Conditions"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.Link,null,"How it works")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Partnership")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Help")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Leave testimonial")),r.a.createElement("li",null,r.a.createElement(d.Link,null,"Contact us")))))))))},N=(n(69),function(e){return r.a.createElement("section",{className:"banner",id:"banner"},r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"banner-container"},r.a.createElement(h.a,{left:!0},r.a.createElement("h2",{className:"banner__title title"},"Test assignment for Frontend Developer position")),r.a.createElement(h.a,{left:!0},r.a.createElement("p",{className:"banner__text"},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")),r.a.createElement(h.a,{left:!0},r.a.createElement("button",{className:"banner__button"},r.a.createElement(d.Link,{activeClass:"active",to:"register-form",spy:!0,smooth:!0,offset:-150,duration:500},"Sing up now"))))))}),S=(n(70),n(48)),I=n.n(S),y=function(){return r.a.createElement("section",{className:"about-me",id:"about-me"},r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"about-me__container"},r.a.createElement(h.a,{top:!0},r.a.createElement("h2",{className:"aboute-me__title title"},"Let's get acquainted")),r.a.createElement("div",{className:"about-me__content"},r.a.createElement(h.a,{left:!0},r.a.createElement("div",{className:"about-me__content__pikchure"},r.a.createElement("img",{src:I.a,alt:"about me pikchure"}))),r.a.createElement(h.a,{right:!0},r.a.createElement("div",{className:"about-me__content__information"},r.a.createElement("h3",{className:"information__title"},"I am cool frontend developer"),r.a.createElement("p",{className:"information__text"},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.",r.a.createElement("br",null),r.a.createElement("br",null),"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."),r.a.createElement("button",{className:"information__button"},r.a.createElement(d.Link,{activeClass:"active",to:"register-form",spy:!0,smooth:!0,offset:-150,duration:500},"Sing up now"))))))))},x=(n(71),function(e){var t=e.users,n=e.showMoreUsers,a=e.total_users;return r.a.createElement("section",{className:"users",id:"users"},r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"users-container"},r.a.createElement(h.a,{top:!0},r.a.createElement("h2",{className:"users__title title"},"Our cheerful users"),r.a.createElement("h4",{className:"users__info"},"Attention! Sorting users by registration date")),r.a.createElement("div",{className:"users__list"},null===t?r.a.createElement("div",{className:"users__list__loading"},"Loading..."):t.map((function(e){return r.a.createElement(T,{user:e,key:e.id})}))),r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"users__button"},r.a.createElement("button",{onClick:n,className:null!==t&&t.length>=a?"users__button--hide":"users__button"},"Show more"))))))}),T=(n(72),function(e){var t=e.user;return r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"full-user"},r.a.createElement("img",{className:"full-user__photo",src:t.photo,alt:t.name,title:t.name}),r.a.createElement("h3",{className:"full-user__name",title:t.name},t.name),r.a.createElement("span",{className:"full-user__position",title:t.position},t.position),r.a.createElement("span",{className:"full-user__email",title:t.email},t.email),r.a.createElement("span",{className:"full-user__phone",title:t.phone},t.phone)))}),U=n(14),R=n.n(U),k=(n(73),function(e){e.users;var t=e.user_name,n=e.user_name_errors,a=e.user_name_touched,o=e.getUserNameValue,s=e.usernameValidatorOnBlur,l=e.usernameValidatorOnChange,i=e.user_email,u=e.user_email_errors,c=e.user_email_touched,m=e.getUserEmailValue,p=e.emailValidatorOnBlur,_=e.emailValidatorOnChange,d=e.user_phone,f=e.user_phone_errors,E=e.user_phone_touched,b=e.getUserPhoneValue,g=e.phoneValidatorOnBlur,v=e.phoneValidatorOnChange,O=e.user_position,N=e.user_position_errors,S=(e.getUserPositionValue,e.positionValidatorOnChange),I=e.user_photo,y=e.user_photo_errors,x=e.photoValidatorOnChange,T=e.positions,U=(e.user_token,e.onSubmitRegisterForm);return r.a.createElement("section",{className:"register-form",id:"register-form"},r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"register-form__container"},r.a.createElement(h.a,{top:!0},r.a.createElement("h2",{className:"register-form__title title"},"Register to get a work")),r.a.createElement(h.a,{left:!0},r.a.createElement("form",{className:"register-form__form",onSubmit:function(e){return U(e)}},r.a.createElement("h3",{className:"register-form__form__info"},"Attention! After successful registration and alert, update the list of users in the block from the top"),r.a.createElement("label",{className:"register-form__form__name"},r.a.createElement("span",null,"Name"),r.a.createElement("input",{type:"text",placeholder:"Your name",value:t,onChange:a?function(e){return l(e.target.value)}:function(e){return o(e.target.value)},onBlur:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"register-form__form__errors"},""===n?r.a.createElement("span",null,n):r.a.createElement(R.a,null,n)),r.a.createElement("label",{className:"register-form__form__email"},r.a.createElement("span",null,"Email"),r.a.createElement("input",{type:"text",placeholder:"Your email",value:i,onChange:c?function(e){return _(e.target.value.toLowerCase())}:function(e){return m(e.target.value.toLowerCase())},onBlur:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"register-form__form__errors"},""===u?r.a.createElement("span",null,u):r.a.createElement(R.a,null,u)),r.a.createElement("label",{className:"register-form__form__phone"},r.a.createElement("span",null,"Phone number"),r.a.createElement("input",{type:"phone",placeholder:"+380 XX XXX XX XX",value:d,onChange:E?function(e){return v(e.target.value)}:function(e){return b(e.target.value)},onBlur:function(e){return g(e.target.value)}})),r.a.createElement("div",{className:"register-form__form__errors"},""===f?r.a.createElement("span",null,f):r.a.createElement(R.a,null,f)),r.a.createElement("div",{className:"register-form__form__position"},r.a.createElement("span",null,"Select your position"),T.map((function(e){return r.a.createElement("label",{key:e.id},r.a.createElement("input",{type:"radio",name:"position",value:e.name,onChange:function(e){return S(e.target)},checked:e.name===O}),e.name)}))),r.a.createElement("div",{className:"register-form__form__errors"},""===N?r.a.createElement("span",null,N):r.a.createElement(R.a,null,N)),r.a.createElement("div",{className:"register-form__form__photo"},r.a.createElement("span",null,"Photo"),r.a.createElement("div",null,r.a.createElement("input",{disabled:!0,value:void 0!==I?I.name:"",placeholder:"Upload your photo"}),r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){return x(e.target.files[0])},className:"photo"}),r.a.createElement("span",{className:"browse-button"},"Browse")))),r.a.createElement("div",{className:"register-form__form__errors"},""===y?r.a.createElement("span",null,y):r.a.createElement(R.a,null,y)),r.a.createElement("div",{className:"register-form__form__button"},r.a.createElement("button",null,"Sing up now")))))))}),z=(n(74),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"footer-container"},r.a.createElement(h.a,{bottom:!0},"\xa9 abz.agency specially for the test task"))))}),L=n(28),V=n.n(L),j=n(49),C=n.n(j);n(84);V.a.setAppElement("#root");var P=function(e){var t=e.modalIsOpen,n=e.setModalIsOpen,a=e.modalTitle;return r.a.createElement(V.a,{isOpen:t,onRequestClose:function(){return n(!1)},className:"Modal"},r.a.createElement("div",{className:"Modal__body"},r.a.createElement("button",{onClick:function(){return n(!1)},className:"Modal__button"},"\xd7"),r.a.createElement(C.a,null,r.a.createElement("h2",{className:"Modal__title"},a))))},A=n(7),M=n(8),D=n(10),H=n(9),w=n(11),B=n(50),G=n.n(B).a,q=function(e){return G.get("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=".concat(e||6))},F=function(){return G.get("http://frontend-test-assignment-api.abz.agency/api/v1/positions")},X=function(e,t){return G.post("http://frontend-test-assignment-api.abz.agency/api/v1/users",e,{headers:{Token:t}})},$=function(){return G.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")},J={toggleOpenMenu:function(){return{type:"TOGGLE_OPEN_MENU"}},setUsers:function(e,t){return{type:"SET_USERS",payload:{data:e,total_users:t}}},fetchUsers:function(){return function(e){q().then((function(t){var n=t.data;e(J.setUsers(n.users,n.total_users))}))}},showMoreUsers:function(){return function(e,t){e(J.setUsersCount()),q(t().usersReduser.users_count).then((function(t){var n=t.data;e(J.setMoreUsers(n.users))}))}},setMoreUsers:function(e){return{type:"SET_MORE_USERS",payload:e}},setUsersCount:function(){return{type:"SET_USERS_COUNT"}},setModalIsOpen:function(e){return{type:"SET_MODAL_IS_OPEN",payload:e}},setModalTitle:function(e){return{type:"SET_MODAL_TITLE",payload:e}},setPositions:function(e){return{type:"SET_POSITIONS",payload:e}},fetchPositions:function(){return function(e){F().then((function(t){var n=t.data;e(J.setPositions(n.positions))})).catch((function(e){return console.log(e)}))}},getUserNameValue:function(e){return{type:"GET_NAME_VALUE",payload:e}},getUserEmailValue:function(e){return{type:"GET_EMAIL_VALUE",payload:e}},getUserPhoneValue:function(e){return{type:"GET_PHONE_VALUE",payload:e}},getUserPositionValue:function(e){return{type:"GET_USER_POSITION",payload:e.value}},getUserPhoto:function(e){return{type:"GET_USER_PHOTO",payload:e}},usernameValidatorOnChange:function(e){return function(t){t(J.getUserNameValue(e)),e.length>=2&&e.length<=60?t(J.usernameValid()):0!==e.length?(e.length<2&&t(J.usernameInvalid("Min length 2 charaters")),e.length>60&&t(J.usernameInvalid("Max length 60 charaters"))):(t(J.usernameInvalid("")),t(J.usernameUntouched()))}},usernameValidatorOnBlur:function(e){return function(t){e.length>=2&&e.length<=60?t(J.usernameValid()):0!==e.length&&(e.length<2&&(t(J.usernameInvalid("Min length 2 charaters")),t(J.usernameTouched())),e.length>60&&(t(J.usernameInvalid("Max length 60 charaters")),t(J.usernameTouched())))}},usernameValid:function(){return{type:"USER_NAME_VALID"}},usernameInvalid:function(e){return{type:"USER_NAME_INVALID",payload:e}},usernameTouched:function(){return{type:"USER_NAME_TOUCHED"}},usernameUntouched:function(){return{type:"USER_NAME_UNTOUCHED"}},emailValidatorOnChange:function(e){return function(t){t(J.getUserEmailValue(e)),/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)?t(J.emailValid()):0!==e.length?t(J.emailInvalid("Invalid Email")):(t(J.emailInvalid("")),t(J.emailUntouched()))}},emailValidatorOnBlur:function(e){return function(t){/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(e)?t(J.emailValid()):0!==e.length&&(t(J.emailInvalid("Invalid Email")),t(J.emailTouched()))}},emailValid:function(){return{type:"EMAIL_VALID"}},emailInvalid:function(e){return{type:"EMAIL_INVALID",payload:e}},emailTouched:function(){return{type:"EMAIL_TOUCHED"}},emailUntouched:function(){return{type:"EMAIL_UNTOUCHED"}},phoneValidatorOnChange:function(e){return function(t){t(J.getUserPhoneValue(e)),/^[\+]{0,1}380([0-9]{9})$/.test(e)?t(J.phoneValid()):0!==e.length?"380"!==e.slice(1,4)?t(J.phoneInvalid("Invalid Phone, Ukraine code +380")):9!==/^\\d{9}$/.test(e.slice(5)).length&&t(J.phoneInvalid("Invalid Phone, after code +380 must be 9 charaters")):(t(J.phoneInvalid("")),t(J.phoneUntouched()))}},phoneValidatorOnBlur:function(e){return function(t){/^\+?3?8?(0\d{9})$/.test(e)?t(J.phoneValid()):0!==e.length&&("380"!==e.slice(1,4)?(t(J.phoneInvalid("Invalid Phone, Ukraine code +380")),t(J.phoneTouched())):9!==/^\\d{9}$/.test(e.slice(5)).length&&(t(J.phoneInvalid("Invalid Phone, after code +380 must be 9 charaters")),t(J.phoneTouched())))}},phoneValid:function(){return{type:"PHONE_VALID"}},phoneInvalid:function(e){return{type:"PHONE_INVALID",payload:e}},phoneTouched:function(){return{type:"PHONE_TOUCHED"}},phoneUntouched:function(){return{type:"PHONE_UNTOUCHED"}},positionValid:function(){return{type:"POSITION_VALID"}},positionInvalid:function(e){return{type:"POSITION_INVALID",payload:e}},positionTouched:function(){return{type:"POSITION_TOUCHED"}},positionUntouched:function(){return{type:"POSITION_UNTOUCHED"}},positionValidatorOnChange:function(e){return function(t,n){t(J.getUserPositionValue(e)),0!==n().usersReduser.user_position?(t(J.positionValid()),t(J.positionUntouched())):t(J.positionInvalid("Position field is required"))}},photoValid:function(){return{type:"PHOTO_VALID"}},photoInvalid:function(e){return{type:"PHOTO_INVALID",payload:e}},photoValidatorOnChange:function(e){return function(t,n){t(J.photoInvalid("")),t(J.getUserPhoto(e)),void 0!==n().usersReduser.user_photo&&("image/jpeg"===n().usersReduser.user_photo.type||"image/jpg"===n().usersReduser.user_photo.type?n().usersReduser.user_photo.size<5e6?t(J.photoValid()):t(J.photoInvalid("The photo size must not be greater than 5 Mb")):t(J.photoInvalid("The photo format must be jpeg/jpg type")))}},resetFormInputs:function(){return{type:"RESET_FORM_INPUTS"}},setToken:function(e){return{type:"SET_TOKEN",payload:e}},onSubmitRegisterForm:function(e){return function(t,n){e.preventDefault(),n().usersReduser.user_name_valid&&n().usersReduser.user_email_valid&&n().usersReduser.user_phone_valid&&n().usersReduser.user_position_valid&&n().usersReduser.user_photo_valid?$().then((function(e){var n=e.data;t(J.setToken(n.token))})).then((function(){if(null!==n().usersReduser.user_token){var e=new FormData;e.append("position_id",n().usersReduser.positions.find((function(e){return e.name===n().usersReduser.user_position})).id),e.append("name",n().usersReduser.user_name),e.append("email",n().usersReduser.user_email),e.append("phone",n().usersReduser.user_phone),e.append("photo",n().usersReduser.user_photo),X(e,n().usersReduser.user_token).then((function(e){var n=e.data;console.log(n),n.success&&(t(J.setModalTitle(n.message)),t(J.setModalIsOpen(!0)),t(J.fetchUsers()),t(J.resetFormInputs()))})).catch((function(e){}))}})):(n().usersReduser.user_name_valid||(0!==n().usersReduser.user_name.length?J.usernameValidatorOnBlur(n().usersReduser.user_name):t(J.usernameInvalid("Name field is required"))),n().usersReduser.user_email_valid||(0!==n().usersReduser.user_email.length?J.emailValidatorOnBlur(n().usersReduser.user_email):t(J.emailInvalid("Email field is required"))),n().usersReduser.user_phone_valid||(0!==n().usersReduser.user_phone.length?J.phoneValidatorOnBlur(n().usersReduser.user_phone):t(J.phoneInvalid("Phone field is required"))),n().usersReduser.user_position_valid||(t(J.positionTouched()),0===n().usersReduser.user_position.length&&t(J.positionInvalid("Position field is required"))),n().usersReduser.user_photo_valid||void 0===n().usersReduser.user_photo&&t(J.photoInvalid("Photo field is required")))}}},W=J,Y=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchUsers)()}},{key:"render",value:function(){return r.a.createElement(x,this.props)}}]),t}(a.Component),K=Object(l.b)((function(e){return e.usersReduser}),W)(Y),Q=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchPositions)()}},{key:"render",value:function(){return r.a.createElement(k,this.props)}}]),t}(a.Component),Z=Object(l.b)((function(e){return e.usersReduser}),W)(Q),ee=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(P,this.props)}}]),t}(a.Component),te=Object(l.b)((function(e){return e.usersReduser}),W)(ee),ne=function(e){function t(){return Object(A.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(O,this.props)}}]),t}(a.Component),ae=Object(l.b)((function(e){return e.usersReduser}),W)(ne);var re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement("main",null,r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement(K,null),r.a.createElement(Z,null)),r.a.createElement(z,null),r.a.createElement(te,null))};n(102);s.a.render(r.a.createElement(l.a,{store:_},r.a.createElement(re,null)),document.getElementById("root"))},18:function(e,t,n){e.exports=n.p+"static/media/logo.ee15e9f1.svg"},47:function(e,t,n){e.exports=n.p+"static/media/open-menu.ab4b9750.svg"},48:function(e,t,n){e.exports=n.p+"static/media/about-me_pikchure.561fe7db.svg"},51:function(e,t,n){e.exports=n(103)},68:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},69:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},70:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},71:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},72:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},73:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},74:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}},84:function(e,t,n){e.exports={"main-color-black":"#212529","main-color-light":"#fff","main-color-dim":"#4c4b4b","main-button-color":"#fefefe","main-font-openSans-regular":'"OpenSans-Regular"',"main-font-openSans-semibold":'"OpenSans-SemiBold"',"main-font-size":"16px","logo-font-size":"16px","nav_bar-font-size":"14px","title-font-size":"50px","users-bg-color":"#f9f9f3","users-name-font-size":"24px"}}},[[51,1,2]]]);
//# sourceMappingURL=main.0c95f8b8.chunk.js.map