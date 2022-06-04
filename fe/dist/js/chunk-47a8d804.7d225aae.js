(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47a8d804"],{"1efd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"8"}},[t.hasSelected?t._e():a("v-app-bar-nav-icon",{staticClass:"mt-6",on:{click:function(e){return e.stopPropagation(),t.setDrawerState.apply(null,arguments)}}}),t.hasSelected?a("section",[a("v-layout",[a("v-btn",{staticClass:"mt-4 mb-2",attrs:{text:""},on:{click:function(e){e.preventDefault(),t.hasSelected=!1,t.chatID=""}}},[a("v-icon",[t._v(" mdi-arrow-left ")]),a("span",{},[t._v(t._s(t.chatUserName))])],1)],1),a("main",[t._l(t.messages,(function(e,s){return a("div",{key:"index-"+s,class:["message",t.sentOrReceived(e.userUID)]},[a("p",[t._v(t._s(e.text))])])})),a("div",{ref:"scrollable"})],2),a("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"Enter your message!"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("button",{staticClass:"btn-send",attrs:{disabled:!t.message,type:"submit"}},[t._v("📩")])])],1):a("v-layout",{staticClass:"mt-7",attrs:{column:""}},[a("v-card-title",[a("v-text-field",{staticClass:"pt-0",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-card-title",[a("v-select",{attrs:{items:t.filterStatus,label:"Status",outlined:""},on:{change:t.getAccounts},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("h4",{staticClass:"mt-3 mb-3 ml-4 font-weight-regular"},[t._v("Select a user to start a chat")]),a("v-data-iterator",{attrs:{"sort-by":"",items:t.accounts,loading:t.initialLoading},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.items;return t._l(s,(function(e){return a("v-card",{key:e.id,staticClass:"mt-4",attrs:{flat:""},on:{click:function(a){return t.retrieveMessages(e)}}},[a("v-list-item",{staticClass:"grow"},[a("v-layout",{attrs:{"align-center":"","justify-space-around":""}},[a("v-layout",[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[e.info.image?a("img",{attrs:{src:"http://127.0.0.1:8000/images/"+e.info.image,height:"90",width:"90",alt:"Profile Image"}}):a("span",{staticClass:"white--text text-h6"},[t._v(t._s(e.info.first_name[0])+t._s(e.info.last_name[0]))])]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.info.first_name)+" "+t._s(e.info.last_name))]),a("v-list-item-subtitle",[t._v(t._s(e.email))]),a("v-layout",[a("v-chip",{staticClass:"white--text mt-1",attrs:{color:"Pending"==e.status?"red darken-2":"green darken-2","x-small":""}},[t._v(t._s(e.status))])],1)],1)],1),a("div",[a("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.unreadCount>0,expression:"item.unreadCount > 0"}],staticClass:"white--text mt-1",attrs:{color:"green darken-1","x-small":""}},[t._v(t._s(e.unreadCount))])],1)],1)],1)],1)}))}}],null,!1,2830298557)})],1)],1)],1)],1)},n=[],r=a("5530"),i=a("1da1"),c=(a("d81d"),a("ac1f"),a("841c"),a("159b"),a("96cf"),a("2f62")),o=a("8aa50"),u=a.n(o),l={mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Chat Application - Evsu-TES",e.next=3,t.$store.dispatch("auth/checkUser");case 3:return e.next=5,t.getAccounts();case 5:t.getUnreadCount();case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{db:u.a.firestore(),message:"",messages:[],chatID:"",search:"",hasSelected:!1,chatUserName:"",filterStatus:["Officially Enrolled","Unofficial","All Records"],selectedStatus:"All Records"}},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("auth",["accounts"])),methods:{getUnreadCount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:0!=t.accounts.length&&t.accounts.map((function(e){var a=u.a.firestore().collection("messages");a=a.where("chatID","==",e.student_number),a=a.where("seen","==",!1),a.onSnapshot((function(a){var s=0;a.docs.map((function(e){e.data().userUID!=t.user.id&&s++})),e.unreadCount=s}))}));case 1:case"end":return e.stop()}}),e)})))()},getAccounts:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/getAccounts",{search:t.search,status:t.selectedStatus});case 2:case"end":return e.stop()}}),e)})))()},retrieveMessages:function(t){var e=this;this.hasSelected=!0,this.chatID=t.student_number,this.chatUserName=t.info.first_name+" "+t.info.last_name;var a=u.a.firestore().collection("messages");a=a.where("chatID","==",t.student_number),a=a.orderBy("createdAt"),a.get().then((function(t){t.forEach((function(t){t.data().userUID!=e.user.id&&t.ref.update({seen:!0})}))}));var s=u.a.firestore().collection("messages");s=s.where("chatID","==",t.student_number),s=s.orderBy("createdAt"),s.onSnapshot((function(t){e.messages=t.docs.map((function(t){return t.data()}))}))},setDrawerState:function(){this.$store.commit("updates/SET_DRAWER_STATE")},sentOrReceived:function(t){return t===this.user.id?"sent":"received"},sendMessage:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={userUID:t.user.id,displayName:t.user.info.first_name+" "+t.user.info.last_name,text:t.message,createdAt:Date.now(),chatID:t.chatID,seen:!1},e.next=3,t.db.collection("messages").add(a);case 3:t.message="",t.$refs["scrollable"].scrollIntoView({behavior:"smooth"});case 5:case"end":return e.stop()}}),e)})))()}},watch:{search:function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.getAccounts()}),900)}}},d=l,m=(a("7b42"),a("2877")),h=a("6544"),f=a.n(h),v=a("5bc1"),p=a("8336"),g=a("b0af"),b=a("99d9"),_=a("cc20"),w=a("62ad"),x=a("a523"),C=a("c377"),y=a("132d"),k=a("a722"),S=a("da13"),j=a("8270"),O=a("5d23"),I=a("0fd9"),D=a("b974"),V=a("8654"),R=Object(m["a"])(d,s,n,!1,null,"35b8add7",null);e["default"]=R.exports;f()(R,{VAppBarNavIcon:v["a"],VBtn:p["a"],VCard:g["a"],VCardTitle:b["c"],VChip:_["a"],VCol:w["a"],VContainer:x["a"],VDataIterator:C["a"],VIcon:y["a"],VLayout:k["a"],VListItem:S["a"],VListItemAvatar:j["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:I["a"],VSelect:D["a"],VTextField:V["a"]})},"3d9f":function(t,e,a){},"5bc1":function(t,e,a){"use strict";var s=a("5530"),n=(a("498a"),a("9d26")),r=a("8336"),i=a("2b0e");e["a"]=i["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var a=e.slots,i=e.listeners,c=e.props,o=e.data,u=Object.assign(o,{staticClass:"v-app-bar__nav-icon ".concat(o.staticClass||"").trim(),props:Object(s["a"])(Object(s["a"])({},c),{},{icon:!0}),on:i}),l=a().default;return t(r["a"],u,l||[t(n["a"],"$menu")])}})},"615b":function(t,e,a){},"7b42":function(t,e,a){"use strict";a("3d9f")},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return o}));var s=a("b0af"),n=a("80d2"),r=Object(n["j"])("v-card__actions"),i=Object(n["j"])("v-card__subtitle"),c=Object(n["j"])("v-card__text"),o=Object(n["j"])("v-card__title");s["a"]},b0af:function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("0481"),a("615b"),a("10d2")),r=a("297c"),i=a("1c87"),c=a("58df");e["a"]=Object(c["a"])(r["a"],i["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-47a8d804.7d225aae.js.map