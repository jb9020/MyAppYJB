import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppHeader from './components/component/Header.vue'

Vue.component('AppHeader', AppHeader);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
