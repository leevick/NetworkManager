import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';

Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);



var app = new Vue({
  el: '#app',
  data:{
    message:'Hello Vue!'
  }
  // render: h => h(App)
})




