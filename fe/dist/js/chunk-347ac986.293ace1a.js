(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347ac986"],{"09b3":function(e,t,a){},"23d9":function(e,t,a){"use strict";a("09b3")},"3db0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{staticClass:"mt-4 mb-15"},[a("v-btn",{attrs:{text:""},on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[a("v-icon",[e._v(" mdi-arrow-left ")]),e._v(" Return ")],1),a("p",{staticClass:"headline pl-6 mt-5 font-weight-bold"},[e._v("Edit Update")]),a("p",{staticClass:"caption red--text pl-6"},[e._v("** All fields are required.")]),a("v-form",{ref:"form",staticClass:"pr-6 pl-6",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[a("v-text-field",{attrs:{type:"text",label:"Title"},model:{value:e.data.title,callback:function(t){e.$set(e.data,"title",t)},expression:"data.title"}}),a("v-textarea",{attrs:{label:"Post Excerpt","auto-grow":"",clearable:"",counter:"125",rows:"1",rules:e.rules,"row-height":"15","clear-icon":"mdi-close-circle",hint:"A small content from your post"},model:{value:e.data.post_excerpt,callback:function(t){e.$set(e.data,"post_excerpt",t)},expression:"data.post_excerpt"}}),a("p",{staticClass:"grey--text darken-3 mt-3"},[e._v("Post Content")]),a("vue-editor",{attrs:{id:"editor",customModules:e.customModulesForEditor,editorOptions:e.editorSettings,editorToolbar:e.customToolbar,useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.data.post_content,callback:function(t){e.$set(e.data,"post_content",t)},expression:"data.post_content"}}),a("v-btn",{staticClass:"mt-4",attrs:{depressed:"",type:"submit",color:"primary",loading:e.isLoading}},[e._v(" Update ")])],1)],1)],1)},o=[],i=a("1da1"),n=a("5530"),s=(a("4de4"),a("99af"),a("a434"),a("96cf"),a("5873")),c=a("a60e"),d=a.n(c),l=a("2a19"),u=a("2f62"),p={components:{VueEditor:s["a"]},data:function(){return{rules:[function(e){return e.length<=125||"Max 125 characters"}],data:{title:"",post_content:"",post_excerpt:""},customModulesForEditor:[{alias:"imageDrop",module:l["a"]},{alias:"imageResize",module:d.a}],fileRecords:[],fileRecordsForUpload:[],editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customToolbar:[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["code-block"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{script:"sub"},{script:"super"}],["link","image"],["clean"]]}},computed:Object(n["a"])(Object(n["a"])({},Object(u["c"])("auth",["user"])),Object(u["c"])("updates",["edit_update"])),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.data={id:e.edit_update.id,title:e.edit_update.title,post_content:e.edit_update.post_content,post_excerpt:e.edit_update.post_excerpt};case 1:case"end":return t.stop()}}),t)})))()},methods:{filesSelected:function(e){var t=e.filter((function(e){return!e.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(t)},fileDeleted:function(e){var t=this.fileRecordsForUpload.indexOf(e);-1!==t&&this.fileRecordsForUpload.splice(t,1)},onBeforeDelete:function(e){console.log(e);var t=this.fileRecordsForUpload.indexOf(e);if(-1!==t){this.fileRecordsForUpload.splice(t,1);var a=this.fileRecords.indexOf(e);-1!==a&&this.fileRecords.splice(a,1)}},handleImageAdded:function(e){var t=new FormData;t.append("image",e)},save:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$store.dispatch("updates/editUpdate",e.data);case 3:a=t.sent,r=a.status,o=a.data,e.checkStatus(o,r,"","updates/getUpdates"),e.isLoading=!1,e.$router.back();case 9:case"end":return t.stop()}}),t)})))()}}},f=p,m=(a("23d9"),a("2877")),b=a("6544"),v=a.n(b),h=a("8336"),g=a("a523"),x=a("4bd4"),_=a("132d"),w=a("8654"),k=a("a844"),R=Object(m["a"])(f,r,o,!1,null,null,null);t["default"]=R.exports;v()(R,{VBtn:h["a"],VContainer:g["a"],VForm:x["a"],VIcon:_["a"],VTextField:w["a"],VTextarea:k["a"]})}}]);
//# sourceMappingURL=chunk-347ac986.293ace1a.js.map