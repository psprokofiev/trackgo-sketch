(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{24:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mb-4"},[t._m(0),t._v(" "),a("div",{staticClass:"col-lg-8 col-xl-9 order-lg-1"},[a("div",{staticClass:"card my-nav"},[a("div",{staticClass:"card-body py-0 px-3 px-lg-4"},[a("ul",{staticClass:"nav d-lg-none"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link font-weight-bold active",attrs:{href:"#"},domProps:{innerHTML:t._s(t.active||"Активные")}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("ul",{staticClass:"nav d-none d-lg-flex"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:!t.active},attrs:{href:"#"}},[t._v("Мои посылки")])]),t._v(" "),t._m(3),t._v(" "),t._l(t.vendors,(function(s,e){return a("li",{key:e,staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.active===s},attrs:{href:"#"},domProps:{innerHTML:t._s(s)}})])}))],2)])])]),t._v(" "),t._m(4)])};e._withStripped=!0;var i={name:"MyNav",data:()=>({vendors:["AliExpress","JD.com","Почта России","Grearbest","Wish"]}),props:["active"]},l=a(0),n=Object(l.a)(i,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg order-lg-2 mb-4 mb-lg-0"},[s("button",{staticClass:"btn btn-lg btn-block btn-cashback text-gray",attrs:{type:"button"}},[this._v("\n\t\t\tВернуть 3% кэшбеком\n\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link font-weight-bold",attrs:{href:"#"}},[this._v("Архив")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item ml-auto"},[s("a",{staticClass:"nav-link",attrs:{href:"#","data-toggle":"collapse","data-target":"#add-post-col"}},[this._v("\n\t\t\t\t\tДобавить посылку\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[this._v("\n\t\t\t\t\tВыгрузить из:\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 order-lg-0 mt-4 mt-lg-0 pb-lg-5 collapse",attrs:{id:"add-post-col"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 offset-lg-2"},[s("form",[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg mb-2 mb-lg-0"},[s("label",{staticClass:"sr-only",attrs:{for:"post-label"}},[this._v("Трек-код")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"post-label",name:"label",placeholder:"Название...",required:""}})]),this._v(" "),s("div",{staticClass:"col-lg px-lg-0 mb-2 mb-lg-0"},[s("label",{staticClass:"sr-only",attrs:{for:"post-track-code"}},[this._v("Трек-код")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"post-track-code",name:"code",placeholder:"Трек-код...",required:""}})]),this._v(" "),s("div",{staticClass:"col-lg-auto"},[s("button",{staticClass:"btn btn-secondary btn-block text-lg",attrs:{type:"submit"}},[this._v("\n\t\t\t\t\t\t\t\tДобавить посылку\n\t\t\t\t\t\t\t")])])])])])])])}],!1,null,null,null);n.options.__file="src/js/components/MyNav.vue";s.a=n.exports},27:function(t,s,a){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var i={name:"ChromeExtButton"},l=a(0),n=Object(l.a)(i,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-lg btn-primary btn-chrome",attrs:{type:"button"}},[this._v("\n\tУстановить для Google Chrome\n\t"),s("span",[s("img",{attrs:{src:"img/chrome.png",alt:"Установите расшрение и импортируйте товары из AliExpress"}})])])}],!1,null,null,null);n.options.__file="src/js/components/ChromeExtButton.vue";s.a=n.exports},9:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("section",{staticClass:"bg-light-gray pt-4 pt-lg-5",attrs:{id:"my-posts"}},[s("div",{staticClass:"container"},[s("MyNav",{attrs:{active:"AliExpress"}}),this._v(" "),this._m(0),this._v(" "),s("ChromeExtButton",{staticClass:"my-4"}),this._v(" "),this._m(1)],1)])])};e._withStripped=!0;var i=a(24),l={name:"Page4",components:{ChromeExtButton:a(27).a,MyNav:i.a}},n=a(0),r=Object(n.a)(l,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"text-xxl font-weight-bold"},[this._v("Установите расшрение "),s("br"),this._v("\n\t\t\t\tи импортируйте товары из AliExpress")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-gray"},[this._v("\n\t\t\t\tМы бережно импортируем все Ваши посылки в личный кабинет и будем "),s("br"),this._v("\n\t\t\t\tследить за их статусами, чтобы Вы ничего не пропустили.\n\t\t\t")])}],!1,null,null,null);r.options.__file="src/js/pages/Page4.vue";s.default=r.exports}}]);
//# sourceMappingURL=1.app.js.map