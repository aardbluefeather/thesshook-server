(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2549c4c8"],{7496:function(t,e,n){"use strict";var a=n("5530"),i=(n("df86"),n("7560")),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},aea0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("private-app-bar",{model:{value:t.expandOnHover,callback:function(e){t.expandOnHover=e},expression:"expandOnHover"}}),n("private-drawer",{attrs:{"expand-on-hover":t.expandOnHover},on:{"update:expandOnHover":function(e){t.expandOnHover=e},"update:expand-on-hover":function(e){t.expandOnHover=e}}}),n("private-view")],1)},i=[],r=(n("d3b7"),{name:"PrivateLayout",components:{PrivateAppBar:function(){return Promise.all([n.e("chunk-0ba37652"),n.e("chunk-c8400cfc")]).then(n.bind(null,"b567"))},PrivateDrawer:function(){return n.e("chunk-4f538fe2").then(n.bind(null,"b9d7"))},PrivateView:function(){return n.e("chunk-070bb618").then(n.bind(null,"b405"))}},data:function(){return{expandOnHover:!1}}}),o=r,p=n("2877"),u=n("6544"),s=n.n(u),c=n("7496"),d=Object(p["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports;s()(d,{VApp:c["a"]})},df86:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2549c4c8.ac6e09c9.js.map