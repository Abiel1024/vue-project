// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './main.less'
import request from './util/request'
import {
  Button,
  Icon,
  Input,
  Checkbox,
  Switch,
  Table,
  Select,
  Option,
  DatePicker,
  Cascader,
  InputNumber,
  Message,
  Modal
} from 'iview'

Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('i-Input', Input)
Vue.component('Input', Input)
Vue.component('Checkbox', Checkbox)
Vue.component('i-Switch', Switch)
Vue.component('Table', Table)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('DatePicker', DatePicker)
Vue.component('Cascader', Cascader)
Vue.component('InputNumber', InputNumber)
Vue.component('Modal', Modal)
Message.config({top: 24, duration: 3})
Vue.prototype.$Message = Message
Vue.prototype.$http = request
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
