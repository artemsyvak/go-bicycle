webpackJsonp([0],{"+rug":function(e,n){},"4P5E":function(e,n){},"5AqT":function(e,n){},D4uH:function(e,n,t){"use strict";var i={},a={name:"icon",props:{name:{type:String,validator:function(e){return e?e in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,n=e.width,t=e.height;return Math.max(n,t)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,n={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,t,i){var a="fa-"+(r++).toString(16);return n[i]=a,' id="'+a+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,t,i,a){var r=t||a;return r&&n[r]?"#"+n[r]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=e.normalizedScale});var n=0,t=0;this.$children.forEach(function(e){n=Math.max(n,e.width),t=Math.max(t,e.height)}),this.childrenWidth=n,this.childrenHeight=t,this.$children.forEach(function(e){e.x=(n-e.width)/2,e.y=(t-e.height)/2})}},register:function(e){for(var n in e){var t=e[n];t.paths||(t.paths=[]),t.d&&t.paths.push({d:t.d}),t.polygons||(t.polygons=[]),t.points&&t.polygons.push({points:t.points}),i[n]=t}},icons:i},r=870711;var o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(n,i){return t("path",e._b({key:"path-"+i},"path",n,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(n,i){return t("polygon",e._b({key:"polygon-"+i},"polygon",n,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[t("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var s=t("VU/8")(a,o,!1,function(e){t("5AqT")},null,null);n.a=s.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("7+uW"),a=(t("D/PP"),t("D4uH")),r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"dropdown-menu"}},[t("ul",{staticClass:"dropdown-menu-list"},[t("li",{staticClass:"dropdown-menu-item"},[t("label",{attrs:{for:"parking"}},[e._v("Parking")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"parking",value:"Parking"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Parking")>-1:e.checkedNames},on:{change:function(n){var t=e.checkedNames,i=n.target,a=!!i.checked;if(Array.isArray(t)){var r=e._i(t,"Parking");i.checked?r<0&&(e.checkedNames=t.concat(["Parking"])):r>-1&&(e.checkedNames=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedNames=a}}})]),e._v(" "),t("li",{staticClass:"dropdown-menu-item"},[t("label",{attrs:{for:"rental"}},[e._v("Rentals")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"rental",value:"Rental"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Rental")>-1:e.checkedNames},on:{change:function(n){var t=e.checkedNames,i=n.target,a=!!i.checked;if(Array.isArray(t)){var r=e._i(t,"Rental");i.checked?r<0&&(e.checkedNames=t.concat(["Rental"])):r>-1&&(e.checkedNames=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedNames=a}}})]),e._v(" "),t("li",{staticClass:"dropdown-menu-item"},[t("label",{attrs:{for:"shop"}},[e._v("Shops  ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"shop",value:"Shops"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Shops")>-1:e.checkedNames},on:{change:function(n){var t=e.checkedNames,i=n.target,a=!!i.checked;if(Array.isArray(t)){var r=e._i(t,"Shops");i.checked?r<0&&(e.checkedNames=t.concat(["Shops"])):r>-1&&(e.checkedNames=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedNames=a}}})])]),e._v(" "),t("br"),e._v(" "),t("span",[e._v("Checked flags: "+e._s(e.checkedNames))])])},staticRenderFns:[]};var o=t("VU/8")({name:"dropdown-menu",data:function(){return{checkedNames:[]}}},r,!1,function(e){t("4P5E")},null,null).exports,s={name:"Menu",components:{Icon:a.a,DropdownMenu:o},methods:{showMenu:function(){$("#dropdown-menu").hide("slow")}}},c={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"menu"}},[t("ul",{attrs:{id:"bottom-menu"}},[t("li",{staticClass:"menu-item"},[t("a",{staticClass:"menu-link",attrs:{href:"#"},on:{click:function(n){e.showMenu()}}},[t("icon",{attrs:{name:"align-justify"}})],1)]),e._v(" "),t("li",{staticClass:"menu-item"},[t("a",{staticClass:"menu-link",attrs:{href:"#"}},[t("icon",{attrs:{name:"location-arrow"}})],1)]),e._v(" "),t("li",{staticClass:"menu-item"},[t("a",{staticClass:"menu-link",attrs:{href:"#"}},[t("icon",{attrs:{name:"search"}})],1)])]),e._v(" "),t("div",{staticClass:"container"},[t("DropdownMenu")],1)])},staticRenderFns:[]};var l={name:"App",components:{Menu:t("VU/8")(s,c,!1,function(e){t("+rug")},"data-v-2b28801a",null).exports}},h={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("Menu")],1)},staticRenderFns:[]};t("VU/8")(l,h,!1,function(e){t("lugF")},null,null).exports;var d=t("/ocq"),u=this,m={name:"Map",mounted:function(){this.createMap(),this.logging()},methods:{createMap:function(){var e=t("1e2d");e.accessToken="pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA",u.map=new e.Map({container:"map",center:[24.0336551,49.8368523],zoom:14,hash:!0,style:"mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i"}),u.map.addControl(new e.NavigationControl),u.map.addControl(new e.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}))},logging:function(){console.log("Hello from Map vue!!!")}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"map"}})},staticRenderFns:[]};var f=t("VU/8")(m,p,!1,function(e){t("VQ2w")},"data-v-3b120e8a",null).exports;i.a.use(d.a);new d.a({routes:[{path:"/",name:"Map",component:f}]});throw new Error('Cannot find module "../node_modules/vue-jquery"')},VQ2w:function(e,n){},lugF:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.c0d32d584a56e21c9ff7.js.map