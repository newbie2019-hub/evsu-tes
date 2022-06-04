(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5cb1f40"],{"56a4":function(e,t,a){"use strict";a("a9e3"),a("d3b7"),a("25f0");var s=a("9d26"),i=a("a9ad"),n=a("3206"),r=a("5607"),l=a("58df"),o=Object(l["a"])(i["a"],Object(n["a"])("stepper","v-stepper-step","v-stepper"));t["a"]=o.extend().extend({name:"v-stepper-step",directives:{ripple:r["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(s["a"],e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},"7e85":function(e,t,a){"use strict";var s=a("5530"),i=(a("0481"),a("a9e3"),a("b0c0"),a("4de4"),a("8836"),a("10d2")),n=a("3206"),r=a("a452"),l=a("58df"),o=a("d9bd"),c=Object(l["a"])(i["a"],Object(n["b"])("stepper"),r["a"]);t["a"]=c.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var e={isBooted:!1,steps:[],content:[],isReverse:!1};return e.internalLazyValue=null!=this.value?this.value:(e[0]||{}).step||1,e},computed:{classes:function(){return Object(s["a"])({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},i["a"].options.computed.classes.call(this))},styles:function(){return Object(s["a"])({},i["a"].options.computed.styles.call(this))}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(o["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(t){return t!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(t){return t!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},8836:function(e,t,a){},"935e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{staticClass:"h-100"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"pa-1",attrs:{sm:"10",md:"10",lg:"7"}},[a("v-btn",{staticClass:"mt-5",attrs:{text:""},on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[a("v-icon",[e._v(" mdi-arrow-left ")]),e._v(" Return ")],1),a("v-layout",{staticClass:"pl-6 mt-5"},[a("p",{staticClass:"headline"},[e._v("Account Registration")])]),a("v-layout",{staticClass:"pl-6 pr-5"},[a("p",{staticClass:"subtitle-2"},[e._v("The SASO office would like you to submit some of your informations. Please fill out the fields below")])]),a("v-layout",{staticClass:"pl-6 pr-5"},[e.isValid?e._e():a("p",{staticClass:"subtitle-2 mt-4 red--text"},[e._v("All fields are required!")])]),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.apply.apply(null,arguments)}}},[a("v-stepper",{staticClass:"mt-2",attrs:{flat:"",vertical:"","non-linear":""},model:{value:e.currentStep,callback:function(t){e.currentStep=t},expression:"currentStep"}},[a("v-stepper-step",{attrs:{editable:"",step:"1"}},[e._v(" Student Data ")]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-file-input",{staticClass:"pt-3",attrs:{type:"file","hide-details":"auto",outlined:"",dense:"","show-size":"",accept:".png,.jpg,.jpeg.,.webp,.svg ",label:"Upload Image","truncate-length":"25"},model:{value:e.data.profileimg,callback:function(t){e.$set(e.data,"profileimg",t)},expression:"data.profileimg"}}),a("v-text-field",{staticClass:"pt-3",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Student ID"},model:{value:e.data.student_id,callback:function(t){e.$set(e.data,"student_id",t)},expression:"data.student_id"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"First Name"},model:{value:e.data.first_name,callback:function(t){e.$set(e.data,"first_name",t)},expression:"data.first_name"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",outlined:"",dense:"",label:"Middle Name"},model:{value:e.data.middle_name,callback:function(t){e.$set(e.data,"middle_name",t)},expression:"data.middle_name"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Last Name"},model:{value:e.data.last_name,callback:function(t){e.$set(e.data,"last_name",t)},expression:"data.last_name"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Ext. Name"},model:{value:e.data.ext_name,callback:function(t){e.$set(e.data,"ext_name",t)},expression:"data.ext_name"}}),a("v-select",{staticClass:"pt-2",attrs:{items:e.gender,"hide-details":"auto",rules:[e.rules.required],outlined:"",label:"Gender",dense:""},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}}),a("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"300px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"pt-2",attrs:{label:"Date of Birth",readonly:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.data.birthday,callback:function(t){e.$set(e.data,"birthday",t)},expression:"data.birthday"}},"v-text-field",i,!1),s))]}}]),model:{value:e.birthdayModal,callback:function(t){e.birthdayModal=t},expression:"birthdayModal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:e.data.birthday,callback:function(t){e.$set(e.data,"birthday",t)},expression:"data.birthday"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.birthdayModal=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.date)}}},[e._v(" OK ")])],1)],1),a("v-select",{staticClass:"pt-2",attrs:{items:e.programs,"hide-details":"auto",rules:[e.rules.required],outlined:"",label:"Program Name",dense:""},model:{value:e.data.program,callback:function(t){e.$set(e.data,"program",t)},expression:"data.program"}}),a("v-select",{staticClass:"pt-2",attrs:{items:e.yearlevel,"hide-details":"auto",rules:[e.rules.required],outlined:"",label:"Year Level",dense:""},model:{value:e.data.year_level,callback:function(t){e.$set(e.data,"year_level",t)},expression:"data.year_level"}}),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:function(t){e.currentStep=2}}},[e._v(" Next ")])],1),a("v-stepper-step",{attrs:{editable:"",step:"2"}},[e._v(" School Information ")]),a("v-stepper-content",{attrs:{step:"2"}},[e._l(e.data.schoolyearinfo,(function(t,s){return a("div",{key:s},[a("p",{staticClass:"mt-2"},[e._v("Please fill-in this data accurately")]),a("v-divider",{staticClass:"mt-2 mb-2"}),a("v-select",{staticClass:"pt-2",attrs:{items:e.schoolyear,"hide-details":"auto",rules:[e.rules.required],outlined:"",label:"School Year",dense:""},model:{value:t.schoolyear,callback:function(a){e.$set(t,"schoolyear",a)},expression:"data.schoolyear"}}),a("v-select",{staticClass:"pt-2",attrs:{items:e.semester,"hide-details":"auto",rules:[e.rules.required],outlined:"",label:"Semester",dense:""},model:{value:t.semester,callback:function(a){e.$set(t,"semester",a)},expression:"data.semester"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",outlined:"",dense:"",label:"GWA"},model:{value:t.gwa,callback:function(a){e.$set(t,"gwa",a)},expression:"data.gwa"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"number","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Units Enrolled"},model:{value:t.units,callback:function(a){e.$set(t,"units",a)},expression:"data.units"}}),s>0?a("v-btn",{staticClass:"mt-3 mr-2",attrs:{color:"error"},on:{click:function(t){return e.removeFields(s)}}},[e._v(" Remove Fields ")]):e._e()],1)})),a("v-btn",{staticClass:"mt-3 mr-2",attrs:{color:"primary"},on:{click:e.addFields}},[e._v(" Add Fields ")]),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:function(t){e.currentStep=3}}},[e._v(" Next ")])],2),a("v-stepper-step",{attrs:{editable:"",step:"3"}},[e._v(" Address Information ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("v-text-field",{staticClass:"pt-1",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Street"},model:{value:e.data.street,callback:function(t){e.$set(e.data,"street",t)},expression:"data.street"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Barangay"},model:{value:e.data.barangay,callback:function(t){e.$set(e.data,"barangay",t)},expression:"data.barangay"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Town"},model:{value:e.data.town,callback:function(t){e.$set(e.data,"town",t)},expression:"data.town"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Province"},model:{value:e.data.province,callback:function(t){e.$set(e.data,"province",t)},expression:"data.province"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required],outlined:"",dense:"",label:"Zip Code"},model:{value:e.data.zipcode,callback:function(t){e.$set(e.data,"zipcode",t)},expression:"data.zipcode"}}),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:function(t){e.currentStep=4}}},[e._v(" Next ")])],1),a("v-stepper-step",{attrs:{editable:"",step:"4"}},[e._v(" TES Grant Info ")]),a("v-stepper-content",{attrs:{step:"4"}},[a("p",[e._v("Leave blank as the admin will input this fields.")]),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",outlined:"",dense:"",label:"TES Award Number"},model:{value:e.data.tes_award,callback:function(t){e.$set(e.data,"tes_award",t)},expression:"data.tes_award"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",outlined:"",dense:"",label:"Application Number"},model:{value:e.data.tes_application_number,callback:function(t){e.$set(e.data,"tes_application_number",t)},expression:"data.tes_application_number"}}),a("v-select",{staticClass:"pt-2",attrs:{items:e.testype,"hide-details":"auto",outlined:"",label:"Type of TES Grant",dense:""},model:{value:e.data.tes_grant_type,callback:function(t){e.$set(e.data,"tes_grant_type",t)},expression:"data.tes_grant_type"}}),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:function(t){e.currentStep=5}}},[e._v(" Next ")])],1),a("v-stepper-step",{attrs:{step:"5",editable:""}},[e._v(" Contact and Email Information ")]),a("v-stepper-content",{attrs:{step:"5"}},[a("p",{staticClass:"grey--text"},[e._v("A confirmation email will be sent to your account. Please verify both of your emails as this will be used to send you updates.")]),a("v-text-field",{staticClass:"pt-2",attrs:{type:"email",rules:[e.rules.required,e.rules.email],"hide-details":"auto",outlined:"",dense:"",label:"Email Address"},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"password",rules:[e.rules.required],"hide-details":"auto",outlined:"",dense:"",label:"Password"},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"password",rules:[e.rules.required],"hide-details":"auto",outlined:"",dense:"",label:"Confirm Password"},model:{value:e.data.confirm_password,callback:function(t){e.$set(e.data,"confirm_password",t)},expression:"data.confirm_password"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required,e.rules.mobile],outlined:"",dense:"",label:"Primary Contact Number"},model:{value:e.data.contact_number1,callback:function(t){e.$set(e.data,"contact_number1",t)},expression:"data.contact_number1"}}),a("v-text-field",{staticClass:"pt-2",attrs:{type:"text","hide-details":"auto",rules:[e.rules.required,e.rules.mobile],outlined:"",dense:"",label:"Secondary Contact Number"},model:{value:e.data.contact_number2,callback:function(t){e.$set(e.data,"contact_number2",t)},expression:"data.contact_number2"}}),a("v-btn",{staticClass:"mt-3 mr-2",attrs:{type:"submit",color:"primary",loading:e.isLoading}},[e._v(" Submit ")]),a("v-btn",{staticClass:"mt-3",attrs:{type:"button",color:"grey"},on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)],1)],1)},i=[],n=a("1da1"),r=(a("96cf"),a("a434"),a("09ab")),l={data:function(){return{birthdayModal:!1,rules:{required:function(e){return!!e||"Required."},mobile:function(e){return e.length>10&&e.length<12||"Invalid Mobile Number"},email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}},schoolyear:[{value:"2016-2017",text:"2016-2017"},{value:"2017-2018",text:"2017-2018"},{value:"2018-2019",text:"2018-2019"},{value:"2019-2020",text:"2019-2020"},{value:"2020-2021",text:"2020-2021"},{value:"2021-2022",text:"2021-2022"},{value:"2022-2023",text:"2022-2023"},{value:"2023-2024",text:"2023-2024"},{value:"2024-2025",text:"2024-2025"},{value:"2025-2026",text:"2025-2026"},{value:"2026-2027",text:"2026-2027"},{value:"2027-2028",text:"2027-2028"},{value:"2028-2029",text:"2028-2029"},{value:"2029-2030",text:"2029-2030"},{value:"2030-2031",text:"2030-2031"},{value:"2031-2032",text:"2031-2032"},{value:"2032-2033",text:"2032-2033"},{value:"2033-2034",text:"2033-2034"},{value:"2034-2035",text:"2034-2035"},{value:"2035-2036",text:"2035-2036"},{value:"2036-2037",text:"2036-2037"},{value:"2037-2038",text:"2037-2038"},{value:"2038-2039",text:"2038-2039"},{value:"2039-2040",text:"2039-2040"},{value:"2040-2041",text:"2040-2041"},{value:"2041-2042",text:"2042-2042"}],semester:[{value:"1st Semester",text:"1st Semester"},{value:"2nd Semester",text:"2nd Semester"}],currentStep:1,isValid:!1,date:"",data:{profileimg:null,first_name:"",middle_name:"",birthday:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),last_name:"",gender:"",contact_number:"",year_level:"",email:"",password:"",tes_application_number:"",confirm_password:"",street:"",barangay:"",town:"",program:"",province:"",filenames:[],zipcode:"",gwa:"",academic_units:"",schoolyearinfo:[{units:"",gwa:"",schoolyear:"",semester:""}]},gender:[{value:"Male",text:"Male"},{value:"Female",text:"Female"}],status:[{value:"Single",text:"Single"},{value:"Married",text:"Married"},{value:"Widowed",text:"Widowed"},{value:"Divorced",text:"Divorced"}],testype:[{value:"Listahanan",text:"Listahanan"},{value:"4Ps",text:"4Ps"},{value:"SWDI",text:"SWDI"},{value:"ESGPPA",text:"ESGPPA"}],yearlevel:[{value:"I",text:"I"},{value:"II",text:"II"},{value:"III",text:"III"},{value:"IV",text:"IV"},{value:"V",text:"V"}],programs:[{value:"(BEEd) - Bachelor of Elementary Education ",text:"(BEEd) - Bachelor of Elementary Education"},{value:"(BECEd) - Bachelor of Early Childhood Education",text:"(BECEd) - Bachelor of Early Childhood Education"},{value:"(BSNEd) - Bachelor of Special Needs Education",text:"(BSNEd) - Bachelor of Special Needs Education"},{value:"(BPEd) - Bachelor of Physical Education",text:"(BPEd) - Bachelor of Physical Education"},{value:"(BTLEd) - Bachelor of Technology and Livelihood Education",text:"(BTLEd) - Bachelor of Technology and Livelihood Education"},{value:"(BSEd ENGLISH) - Bachelor of Secondary Education Major in English",text:"(BSEd ENGLISH) - Bachelor of Secondary Education Major in English"},{value:"(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino",text:"(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino"},{value:"(BSEd MATH) - Bachelor of Secondary Education Major in Math",text:"(BSEd MATH) - Bachelor of Secondary Education Major in Math"},{value:"(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies",text:"(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies"},{value:"(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science",text:"(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science"},{value:"(BSA) - Bachelor of Science in Accountancy",text:"(BSA) - Bachelor of Science in Accountancy"},{value:"(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management",text:"(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management"},{value:"(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management",text:"(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management"},{value:"(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management",text:"(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management"},{value:"(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management",text:"(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management"},{value:"(BSOA) - Bachelor of Science in Office Administration",text:"(BSOA) - Bachelor of Science in Office Administration"},{value:"(BSHM) - Bachelor of Science in Hospitality Management",text:"(BSHM) - Bachelor of Science in Hospitality Management"},{value:"(BS TM) - Bachelor of Science in Tourism Management",text:"(BS TM) - Bachelor of Science in Tourism Management"},{value:"(BS PSYCH) - Bachelor of Science in Psychology",text:"(BS PSYCH) - Bachelor of Science in Psychology"},{value:"(BSIT) - Bachelor of Science in Information Technology",text:"(BSIT) - Bachelor of Science in Information Technology"},{value:"Technology",text:"(BLIS) - Bachelor of Library and Information Science"}]}},mounted:function(){document.title="Create Account"},created:function(){},methods:{removeFields:function(e){this.data.schoolyearinfo.splice(e,1)},addFields:function(){this.data.schoolyearinfo.push({units:"",gwa:"",schoolyear:"",semester:""})},apply:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isValid=e.$refs.form.validate(),!e.isValid){t.next=15;break}return e.isLoading=!0,a=new FormData,a.append("img",e.data.profileimg),t.next=7,r["a"].post("user/upload-files/profile",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t.data),e.data["img"]=t.data})).catch((function(e){console.log({error:e})}));case 7:return t.next=9,e.$store.dispatch("auth/registerAccount",e.data);case 9:s=t.sent,i=s.status,n=s.data,422==i?e.UnprocEntity(n):200==i?(e.$toast.success("An email verification has been sent to your email. Please check your email"),e.successResponse(n),e.$router.back()):e.errResponse(n),t.next=17;break;case 15:e.$toast.error("Please fill in all the fields"),e.isLoading=!0;case 17:e.isLoading=!1;case 18:case"end":return t.stop()}}),t)})))()},clearData:function(){this.data={first_name:"",middle_name:"",birthday:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),last_name:"",gender:"",contact_number:"",year_level:"",email:"",password:"",confirm_password:"",street:"",barangay:"",town:"",province:"",zipcode:"",house_member:"",household_number:""}}}},o=l,c=a("2877"),d=a("6544"),u=a.n(d),p=a("8336"),v=a("62ad"),h=a("a523"),m=a("2e4b"),f=a("169a"),b=a("ce7e"),x=a("23a7"),y=a("4bd4"),g=a("132d"),S=a("a722"),_=a("0fd9"),B=a("b974"),C=a("2fa4"),E=a("7e85"),w=a("e516"),k=a("56a4"),I=a("8654"),M=Object(c["a"])(o,s,i,!1,null,null,null);t["default"]=M.exports;u()(M,{VBtn:p["a"],VCol:v["a"],VContainer:h["a"],VDatePicker:m["a"],VDialog:f["a"],VDivider:b["a"],VFileInput:x["a"],VForm:y["a"],VIcon:g["a"],VLayout:S["a"],VRow:_["a"],VSelect:B["a"],VSpacer:C["a"],VStepper:E["a"],VStepperContent:w["a"],VStepperStep:k["a"],VTextField:I["a"]})},e516:function(e,t,a){"use strict";a("a9e3"),a("d3b7"),a("25f0");var s=a("0789"),i=a("3206"),n=a("80d2"),r=a("58df"),l=Object(r["a"])(Object(i["a"])("stepper","v-stepper-content","v-stepper"));t["a"]=l.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var e=this.$vuetify.rtl?!this.isReverse:this.isReverse;return e?s["f"]:s["g"]},styles:function(){return this.isVertical?{height:Object(n["h"])(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},a={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var s=e("div",a,[this.$slots.default]),i=e("div",t,[s]);return e(this.computedTransition,{on:this.$listeners},[i])}})}}]);
//# sourceMappingURL=chunk-b5cb1f40.6d9363e9.js.map