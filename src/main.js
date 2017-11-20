import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Vue.component('user', {
//   template: 
//   `
//     <article class="userCard">
//       <img class="imgSize" src="">
//       <div class="infoUser">
//         <span>Nom prénom</span><br>
//         <span>Adresse email</span><br>
//         <span>Téléphone</span><br>
//         <span>Date de naissance + age</span><br>
//         <span>Adresse</span>
//       </div>
//     </article>
//   `
// })