(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(e,t,i){var a=i("da84"),o=i("e8b5"),n=i("68ee"),l=i("861d"),s=i("b622"),r=s("species"),c=a.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,n(t)&&(t===c||o(t.prototype))?t=void 0:l(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?c:t}},"159b":function(e,t,i){var a=i("da84"),o=i("fdbc"),n=i("785a"),l=i("17c2"),s=i("9112"),r=function(e){if(e&&e.forEach!==l)try{s(e,"forEach",l)}catch(t){e.forEach=l}};for(var c in o)o[c]&&r(a[c]&&a[c].prototype);r(n)},"17c2":function(e,t,i){"use strict";var a=i("b727").forEach,o=i("a640"),n=o("forEach");e.exports=n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"65f0":function(e,t,i){var a=i("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},"6bd2":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),i("label",[e._v("Employee ID#")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("label",[e._v("Name")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),i("label",[e._v("Department")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),i("label",[e._v("Position")])])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},o=[],n=(i("b0c0"),i("56d7")),l={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;n["default"].collection("employee").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then((function(t){e.$router.push("/"),console.log(t)})).catch((function(e){return console.log(e)}))}}},s=l,r=i("2877"),c=Object(r["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports},7277:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,(function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(" "+e._s(t.employee_id)+":"+e._s(t.name)+" "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"View-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)}))],2),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"collection-header"},[i("h4",[e._v("Employees")])])}],n=(i("d3b7"),i("159b"),i("b0c0"),i("56d7")),l={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;n["default"].collection("employee").orderBy("dept").get().then((function(t){t.forEach((function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)}))}))}},s=l,r=i("2877"),c=Object(r["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports},a640:function(e,t,i){"use strict";var a=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&a((function(){i.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,i){var a=i("83ab"),o=i("5e77").EXISTS,n=i("e330"),l=i("9bf2").f,s=Function.prototype,r=n(s.toString),c=/^\s*function ([^ (]*)/,u=n(c.exec),d="name";a&&!o&&l(s,d,{configurable:!0,get:function(){try{return u(c,r(this))[1]}catch(e){return""}}})},b727:function(e,t,i){var a=i("0366"),o=i("e330"),n=i("44ad"),l=i("7b0b"),s=i("07fa"),r=i("65f0"),c=o([].push),u=function(e){var t=1==e,i=2==e,o=3==e,u=4==e,d=6==e,p=7==e,m=5==e||d;return function(f,v,y,h){for(var _,b,w=l(f),C=n(w),g=a(v,y),E=s(C),x=0,$=h||r,k=t?$(f,E):i||p?$(f,0):void 0;E>x;x++)if((m||x in C)&&(_=C[x],b=g(_,x,w),e))if(t)k[x]=b;else if(b)switch(e){case 3:return!0;case 5:return _;case 6:return x;case 2:c(k,_)}else switch(e){case 4:return!1;case 7:c(k,_)}return d?-1:o||u?u:k}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},cc39:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-employee"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),i("li",{staticClass:"collection-item"},[e._v("Employee ID#:"+e._s(e.employee_id))]),i("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),i("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),i("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"Edit-employee",params:{employee_id:e.employee_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},o=[],n=(i("d3b7"),i("159b"),i("b0c0"),i("56d7")),l={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){n["default"].collection("employee").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){i((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;n["default"].collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}))}))},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&n["default"].collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push("/")}))}))}}},s=l,r=i("2877"),c=Object(r["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports},e6c2:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",disabled:"",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},o=[],n=(i("d3b7"),i("159b"),i("b0c0"),i("56d7")),l={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){n["default"].collection("employee").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){i((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;n["default"].collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}))}))},updateEmployee:function(){var e=this;n["default"].collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then((function(){e.$router.push({name:"View-employee",params:{employee_id:e.employee_id}})}))}))}))}}},s=l,r=i("2877"),c=Object(r["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports},e8b5:function(e,t,i){var a=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},f820:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("This is an about page")])])}],n=i("2877"),l={},s=Object(n["a"])(l,a,o,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.b74766a9.js.map