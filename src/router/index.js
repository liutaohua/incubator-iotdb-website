import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import SystemDesign from '@/views/SystemDesign'
import Community from '@/views/Community'
import Development from '@/views/Development'
import NotFound from "@/views/NotFound"
import Contributor from "@/views/Contributor"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Documents/:version/:chapter?/:section?',
      name: 'UserGuideDocuments',
      component: Documents
    },
    {
      path: '/SystemDesign/:version/:chapter?/:section?',
      name: 'SystemDesignDocuments',
      component: SystemDesign
    },
    {
      path: '/Contributor',
      name: 'Contributor',
      component: Contributor
    },
    {
      path: '/Community/:content',
      name: 'Community',
      component: Community
    },
    {
      path: '/Development/:content',
      name: 'Development',
      component: Development
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      // get Nav bar height
      let yOffset = document.getElementById("bs-example-navbar-collapse-1").clientHeight;
      console.log(yOffset);
      return {
        selector: to.hash,
        offset: {x: 0, y: yOffset}
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
})

/**
 * Rewrite router push method
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};
