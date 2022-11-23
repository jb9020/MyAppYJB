import Vue from 'vue'
import Router from 'vue-router'
import Intro from '../components/Intro.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Intro },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
});

export default router;