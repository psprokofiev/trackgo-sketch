(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{24:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mb-4"},[t._m(0),t._v(" "),a("div",{staticClass:"col-lg-8 col-xl-9 order-lg-1"},[a("div",{staticClass:"card my-nav"},[a("div",{staticClass:"card-body py-0 px-3 px-lg-4"},[a("ul",{staticClass:"nav d-lg-none"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link font-weight-bold active",attrs:{href:"#"},domProps:{innerHTML:t._s(t.active||"Активные")}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("ul",{staticClass:"nav d-none d-lg-flex"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:!t.active},attrs:{href:"#"}},[t._v("Мои посылки")])]),t._v(" "),t._m(3),t._v(" "),t._l(t.vendors,(function(s,i){return a("li",{key:i,staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.active===s},attrs:{href:"#"},domProps:{innerHTML:t._s(s)}})])}))],2)])])]),t._v(" "),t._m(4)])};i._withStripped=!0;var l={name:"MyNav",data:()=>({vendors:["AliExpress","JD.com","Почта России","Grearbest","Wish"]}),props:["active"]},e=a(0),c=Object(e.a)(l,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg order-lg-2 mb-4 mb-lg-0"},[s("button",{staticClass:"btn btn-lg btn-block btn-cashback text-gray",attrs:{type:"button"}},[this._v("\n\t\t\tВернуть 3% кэшбеком\n\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link font-weight-bold",attrs:{href:"#"}},[this._v("Архив")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item ml-auto"},[s("a",{staticClass:"nav-link",attrs:{href:"#","data-toggle":"collapse","data-target":"#add-post-col"}},[this._v("\n\t\t\t\t\tДобавить посылку\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[this._v("\n\t\t\t\t\tВыгрузить из:\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 order-lg-0 mt-4 mt-lg-0 pb-lg-5 collapse",attrs:{id:"add-post-col"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 offset-lg-2"},[s("form",[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg mb-2 mb-lg-0"},[s("label",{staticClass:"sr-only",attrs:{for:"post-label"}},[this._v("Трек-код")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"post-label",name:"label",placeholder:"Название...",required:""}})]),this._v(" "),s("div",{staticClass:"col-lg px-lg-0 mb-2 mb-lg-0"},[s("label",{staticClass:"sr-only",attrs:{for:"post-track-code"}},[this._v("Трек-код")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"post-track-code",name:"code",placeholder:"Трек-код...",required:""}})]),this._v(" "),s("div",{staticClass:"col-lg-auto"},[s("button",{staticClass:"btn btn-secondary btn-block text-lg",attrs:{type:"submit"}},[this._v("\n\t\t\t\t\t\t\t\tДобавить посылку\n\t\t\t\t\t\t\t")])])])])])])])}],!1,null,null,null);c.options.__file="src/js/components/MyNav.vue";s.a=c.exports},25:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-info mb-4"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 mb-2 mb-lg-0 px-0 px-lg-3"},[a("div",{staticClass:"card delivery-items-card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"delivery-items"},t._l(5,(function(t){return a("PostInfoLogItem",{key:t,attrs:{active:1===t}})})),1),t._v(" "),t._m(1)])]),t._v(" "),a("div",{staticClass:"d-none d-lg-block mt-4"},[a("PostInfoCards")],1)]),t._v(" "),a("div",{staticClass:"col-lg"},[a("div",{staticClass:"list-group delivery-meta"},[a("div",{staticClass:"list-group-item"},[a("div",{staticClass:"row align-items-center"},[t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"col-auto align-self-start"},[a("LangSwitch")],1)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)]),t._v(" "),a("div",{staticClass:"d-lg-none"},[a("PostInfoCards")],1),t._v(" "),t._m(7),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"text-lg mb-2"},[t._v("Ссылка для отслеживания")]),t._v(" "),t._m(8),t._v(" "),a("div",{staticClass:"text-lg mb-2"},[t._v("Поделиться ссылкой")]),t._v(" "),a("SocialButtons")],1)])])])])};i._withStripped=!0;var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"delivery-item",class:{"map-opened":t.expandMap}},[a("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),a("div",{staticClass:"col-lg"},[a("div",{staticClass:"delivery-data row align-items-center"},[a("div",{staticClass:"col-auto pr-0 pr-lg-3"},[a("div",{staticClass:"circle"},[t.active?a("i"):t._e()])]),t._v(" "),a("div",{staticClass:"col py-2"},[a("div",{staticClass:"label font-weight-bold text-lg"},[t._v("Покинуло сортировочный центр")]),t._v(" "),a("div",{staticClass:"text-gray"},[a("a",{staticClass:"text-clear show-map mr-2",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.expandMap=!t.expandMap}}},[t._v("Посмотреть на карте "),a("i",{staticClass:"fas fa-angle-down ease"})]),t._v(" "),a("span",{staticClass:"delivery-type"},[t._v("Международная обработка")])])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"delivery-map box-shadow-md ease"},[t.expandMap?a("iframe",{attrs:{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A4a269e577e3556bc1efae57decf54d56e629352e49f375d567bd4f5ffebd0b5b&source=constructor",width:"100%",height:"150",frameborder:"0"}}):t._e()])])};l._withStripped=!0;var e={name:"PostInfoLogItem",data:()=>({expandMap:!1}),props:["active"]},c=a(0),n=Object(c.a)(e,l,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-2 delivery-dates"},[s("div",{staticClass:"row align-items-center line-height-1"},[s("div",{staticClass:"col-auto col-lg-12 pr-2 delivery-date"},[s("strong",[this._v("29 Янв.")]),this._v(" "),s("span",[this._v("14:25")])]),this._v(" "),s("div",{staticClass:"col col-lg-auto pl-0 pl-lg-3 pr-2 delivery-year"},[s("small",{staticClass:"text-gray"},[this._v("2020")])]),this._v(" "),s("div",{staticClass:"col-auto pl-0 delivery-timeout"},[s("span",{staticClass:"small"},[s("strong",{staticClass:"text-gray"},[this._v("18 дней")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-auto d-none d-lg-block"},[s("button",{staticClass:"btn btn-xs btn-outline-secondary",attrs:{type:"button"}},[this._v("\n\t\t\t\t\t\t\tПочта России\n\t\t\t\t\t\t")])])}],!1,null,null,null);n.options.__file="src/js/components/PostInfoLogItem.vue";var r=n.exports,o=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row mt-2 mt-lg-0 text-center delivery-cards"},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("div",{staticClass:"col-12 col-lg mt-2 mt-lg-0 px-lg-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"caption text-gray caption mb-2"},[this._v("\n\t\t\t\t\tЕсли вы часто просматривайте посылки с телефона,\n\t\t\t\t\tустановите удобнее приложение\n\t\t\t\t")]),this._v(" "),s("a",{staticClass:"google-play-badge btn btn-outline-light bg-white p-0 border-0",attrs:{href:"#"}},[s("svg",[s("use",{attrs:{"xlink:href":"svg/google-play-badge-light.svg#google-play-badge-light"}})])])])])])])};o._withStripped=!0;var v={name:"PostInfoCards"},d=Object(c.a)(v,o,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-lg pr-1 pr-lg-2 h-100"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"caption text-gray caption mb-2"},[this._v("\n\t\t\t\t\tИспользуйте личный кабинет,\n\t\t\t\t\tчтобы сохранять и отслеживать все ваши посылки\n\t\t\t\t")]),this._v(" "),s("a",{staticClass:"btn btn-sm btn-outline-primary",attrs:{href:"#"}},[this._v("\n\t\t\t\t\tВойти\n\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-lg pl-1 pl-lg-2 order-lg-last"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"caption text-gray caption mb-2"},[this._v("\n\t\t\t\t\tЕсли вы много времени проводите\n\t\t\t\t\tв мессенджерах, используйте нашего телеграм бота\n\t\t\t\t")]),this._v(" "),s("a",{staticClass:"btn btn-sm btn-outline-secondary font-weight-normal",attrs:{href:"#"}},[this._v("\n\t\t\t\t\t@TrackGoBot\n\t\t\t\t")])])])])}],!1,null,null,null);d.options.__file="src/js/components/PostInfoCards.vue";var _=d.exports,p=a(1),m={name:"PostInfo",components:{LangSwitch:a(5).a,SocialButtons:p.a,PostInfoCards:_,PostInfoLogItem:r}},u=Object(c.a)(m,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col col-lg-auto pr-0"},[s("a",{staticClass:"btn btn-link btn-sm text-sm text-gray",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-redo"}),this._v(" "),s("span",{staticClass:"pl-1"},[this._v("Обновить")])])]),this._v(" "),s("div",{staticClass:"col-auto pl-0"},[s("small",{staticClass:"text-gray"},[this._v("Последнее обновление: 2 часа")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-center pt-3 d-lg-none"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[this._v("\n\t\t\t\t\t\t\tПоказать все события\n\t\t\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-auto py-3"},[s("div",{staticClass:"text-gray"},[s("i",{staticClass:"fas fa-barcode fa-2x"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col delivery-meta-code pl-0 py-3"},[s("span",{staticClass:"text-gray"},[this._v("80110944330814")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col text-gray"},[this._v("Страна отправки")]),this._v(" "),s("div",{staticClass:"col-auto"},[s("span",[this._v("Россия")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col text-gray"},[this._v("Страна получатель")]),this._v(" "),s("div",{staticClass:"col-auto"},[s("span",[this._v("Россия")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col text-gray"},[this._v("Адрес получения")]),this._v(" "),s("div",{staticClass:"col-auto"},[s("span",[this._v("Москва 19")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card mt-4 d-none d-lg-flex"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"custom-control custom-switch"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch2"}}),this._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch2"}})])]),this._v(" "),s("div",{staticClass:"col"},[this._v("\n\t\t\t\t\t\t\tВключите уведомления чтобы моментально\n\t\t\t\t\t\t\tполучать уведомление об изменении статуса\n\t\t\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group input-group-sm mb-3"},[s("label",{staticClass:"sr-only",attrs:{for:"track-link"}},[this._v("Ссылка для отслеживания")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"track-link",value:"https://trackgo.ru/?1234567890",readonly:""}}),this._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-link"})])])])}],!1,null,null,null);u.options.__file="src/js/components/PostInfo.vue";s.a=u.exports},7:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("section",{staticClass:"bg-light-gray pt-4 pt-lg-5",attrs:{id:"my-posts"}},[s("div",{staticClass:"container"},[s("MyNav"),this._v(" "),s("div",{staticClass:"my-post-cards"},this._l(5,(function(t){return s("MyPostItem",{key:t,attrs:{active:2===t}})})),1),this._v(" "),this._m(0)],1)])])};i._withStripped=!0;var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-post-card",class:{active:t.isActive}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 py-lg-0"},[a("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"col col-lg-auto order-lg-4"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("a",{staticClass:"text-sm",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.isActive=!t.isActive}}},[a("span",{staticClass:"d-lg-none"},[t._v("Посмотреть детали")]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])])]),t._v(" "),a("div",{staticClass:"my-post-card-info"},[t.isActive?a("PostInfo",{staticClass:"animated slideInUp fast mt-3"}):t._e()],1)])};l._withStripped=!0;var e={name:"MyPostItem",components:{PostInfo:a(25).a},data(){return{isActive:this.active}},props:["active"]},c=a(0),n=Object(c.a)(e,l,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-4 col-lg-auto py-lg-2 post-avatar-col order-lg-0"},[s("div",{staticClass:"post-avatar text-center"},[s("img",{staticClass:" mx-auto",attrs:{src:"img/post-avatar.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-8 col-lg-2 order-lg-2"},[s("div",{staticClass:"post-code text-gray"},[s("i",{staticClass:"fas fa-barcode"}),this._v(" "),s("span",[this._v("RA250251554FI")])]),this._v(" "),s("div",{staticClass:"post-vendor text-gray"},[s("img",{attrs:{src:"img/ali.png",alt:""}}),this._v(" "),s("span",[this._v("Aliexpress")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg order-lg-1"},[s("div",{staticClass:"post-info pt-3 pt-lg-0"},[s("span",{staticClass:"d-xl-block"},[this._v("Смартфон Xiaomi Redmi RU 7A RU 32ГБ, Доп. скидка 2% от 4шт.")]),this._v(" "),s("span",{staticClass:"d-xl-block"},[this._v("[Официальная гарантия, быстрая доставка]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-auto order-lg-3 pr-xl-4"},[s("div",{staticClass:"text-sm pt-3 pt-lg-0"},[s("span",{staticClass:"text-gray"},[this._v("Последнее изменение:")]),this._v(" "),s("span",[this._v("18 февр. 13:34")])]),this._v(" "),s("div",{staticClass:"text-sm pb-3 pb-lg-0"},[s("span",{staticClass:"text-primary font-weight-bold"},[this._v("Покинуло сортировочный центр")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"expand ease"},[s("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-auto"},[s("ul",{staticClass:"list-inline mb-0"},[s("li",{staticClass:"list-inline-item"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-link text-gray px-1",attrs:{type:"button","data-toggle":"dropdown","data-display":"static","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-pen"})]),this._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right edit-post-dropdown py-0"},[s("form",{staticClass:"p-3"},[s("div",{staticClass:"form-group mb-2"},[s("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",name:"label",placeholder:"Название отправления...",required:""}})]),this._v(" "),s("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"submit"}},[this._v("Сохранить")])])])])]),this._v(" "),s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-link text-gray px-1",attrs:{type:"button"}},[s("i",{staticClass:"far fa-trash-alt"})])])])])}],!1,null,null,null);n.options.__file="src/js/components/MyPostItem.vue";var r=n.exports,o={name:"Page2",components:{MyNav:a(24).a,MyPostItem:r}},v=Object(c.a)(o,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pt-4"},[s("a",{staticClass:"text-lg text-gray",attrs:{href:"#"}},[this._v("Посмотреть архив")])])}],!1,null,null,null);v.options.__file="src/js/pages/Page2.vue";s.default=v.exports}}]);
//# sourceMappingURL=2.app.js.map