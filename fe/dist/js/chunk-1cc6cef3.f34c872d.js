(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc6cef3"],{"25b7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"mr-6 ml-6",attrs:{cols:"12",sm:"10",md:"10",lg:"10"}},[n("v-app-bar-nav-icon",{staticClass:"mt-6",on:{click:function(t){return t.stopPropagation(),e.setDrawerState.apply(null,arguments)}}}),n("section",[n("main",[e._l(e.messages,(function(t,a){return n("div",{key:"index-"+a,class:["message",e.sentOrReceived(t.userUID)]},[n("p",[e._v(e._s(t.text))])])})),n("div",{ref:"scrollable"})],2),n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Enter your message!"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{staticClass:"btn-send",attrs:{disabled:!e.message,type:"submit"}},[e._v("📩")])])])],1)],1)],1)},r=[],s=n("5530"),c=n("1da1"),u=(n("96cf"),n("d81d"),n("159b"),n("2f62")),o=n("8aa50"),i=n.n(o),d={mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Chat Application - Evsu-TES",t.next=3,e.$store.dispatch("auth/checkAuthUser");case 3:return n=i.a.firestore().collection("messages"),n=n.where("chatID","==",e.user.student_number),n=n.orderBy("createdAt"),n.onSnapshot((function(t){e.messages=t.docs.map((function(e){return e.data()}))})),t.next=9,e.updateUnread();case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{db:i.a.firestore(),message:"",messages:[],chatID:""}},computed:Object(s["a"])({},Object(u["c"])("auth",["user"])),methods:{setDrawerState:function(){this.$store.commit("updates/SET_DRAWER_STATE")},sentOrReceived:function(e){return e===this.user.student_number?"sent":"received"},updateUnread:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=i.a.firestore().collection("messages"),n=n.where("chatID","==",e.user.student_number),n=n.orderBy("createdAt"),n.get().then((function(t){t.forEach((function(t){t.data().userUID!=e.user.student_number&&t.ref.update({seen:!0})}))}));case 4:case"end":return t.stop()}}),t)})))()},sendMessage:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={userUID:e.user.student_number,displayName:e.user.info.first_name+" "+e.user.info.last_name,text:e.message,createdAt:Date.now(),chatID:e.user.student_number,seen:!1},t.next=3,e.db.collection("messages").add(n);case 3:return t.next=5,e.updateUnread();case 5:e.message="",e.$refs["scrollable"].scrollIntoView({behavior:"smooth"});case 7:case"end":return t.stop()}}),t)})))()}}},l=d,m=(n("ba7d"),n("2877")),p=n("6544"),f=n.n(p),v=n("5bc1"),b=n("62ad"),h=n("a523"),g=n("0fd9"),w=Object(m["a"])(l,a,r,!1,null,"50711382",null);t["default"]=w.exports;f()(w,{VAppBarNavIcon:v["a"],VCol:b["a"],VContainer:h["a"],VRow:g["a"]})},5823:function(e,t,n){},"5bc1":function(e,t,n){"use strict";var a=n("5530"),r=(n("498a"),n("9d26")),s=n("8336"),c=n("2b0e");t["a"]=c["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(e,t){var n=t.slots,c=t.listeners,u=t.props,o=t.data,i=Object.assign(o,{staticClass:"v-app-bar__nav-icon ".concat(o.staticClass||"").trim(),props:Object(a["a"])(Object(a["a"])({},u),{},{icon:!0}),on:c}),d=n().default;return e(s["a"],i,d||[e(r["a"],"$menu")])}})},ba7d:function(e,t,n){"use strict";n("5823")}}]);
//# sourceMappingURL=chunk-1cc6cef3.f34c872d.js.map