import Vue from 'vue'
import './main.less'
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
Message.config({ top: 24, duration: 3 })
Vue.prototype.$Message = Message
