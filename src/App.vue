<template>
  <main id="app">
    <nav>
      <ul class="menu">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/users">Liste des collabos</router-link></li>
        <li class="rightPosition"><router-link to="/add">Ajouter des collabos</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </main>
</template>
<script type="text/javascript" src="main.js"></script>
<script>

import HomeView from "./views/HomeView.vue"
import ListView from "./views/ListView.vue"
import AddView from "./views/AddView.vue"
import EditView from "./views/EditView.vue"

export default {
  name: 'app',
  
  components : { HomeView, ListView, AddView, EditView }
}
</script>

<style>
body {
  margin: 0;
}
.sayHello{
  margin-top: 10px;
}
.menu{
  color: #ffffff;
}
nav{
  width: 100%;
  height: 50px;
  display: flex;
  top: 0;
  background-color: #696969;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  cursor: pointer;
}
a:hover {
  color: #A2C0A2;
}
</style>
