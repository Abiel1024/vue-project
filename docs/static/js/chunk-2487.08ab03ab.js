(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2487"],{"50de":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",{staticClass:"user_name"},[n("span",[t._v("用户姓名：")]),n("span",{domProps:{textContent:t._s(t.userInfo.name)}})]),n("Poptip",{attrs:{trigger:"hover",placement:"bottom"}},[n("Button",{attrs:{type:"primary"},on:{click:t.getUserInfo}},[t._v("获取用户信息")]),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("点击派发一个action，从而修改store中的值。")])],1),n("Button",{attrs:{type:"primary"},on:{click:t.fChangePath}},[t._v("跳转到operation")]),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test_class"},[n("p",[t._v("这里是p标签")]),n("h6",[t._v("这里是h6标签")])])}],a=(n("96cf"),n("3040")),o=n("c93e"),c=n("e69f"),i=c["a"],u=n("2f62"),p={components:{Poptip:i},name:"home",data:function(){return{}},computed:Object(o["a"])({},Object(u["b"])({userInfo:"user/userInfo"})),methods:{fChangePath:function(){this.$router.push({name:"operation"})},getUserInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("user/getUserInfo");case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},f=p,l=(n("dfdc"),n("2877")),h=Object(l["a"])(f,r,s,!1,null,"1b27d815",null);e["default"]=h.exports},"9a8a":function(t,e,n){},dfdc:function(t,e,n){"use strict";var r=n("9a8a"),s=n.n(r);s.a}}]);
//# sourceMappingURL=chunk-2487.08ab03ab.js.map