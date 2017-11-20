import VueRouter from 'vue-router'

import HomeView from "./views/HomeView.vue"
import ListView from "./views/ListView.vue"
import AddView from "./views/AddView.vue"


const routes = [
   { path: '/', component: HomeView },
   { path: '/users', component: ListView },
   { path: '/add', component: AddView }
];

const router = new VueRouter({
   routes
});

export default router
