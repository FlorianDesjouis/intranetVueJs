<template>
	<div>
		<div>
		  <h1>Bienvenue Bro'</h1>

		  <p>Tu es sur l'intranet de Sup'Internet, on l'a appelé... Sup'Intranet, mdr on est trop drole tmtc</p>
		</div>
		<hr>

		<user-card :user="user" v-if="user" />

		<div>As-tu dis <strong>Bonjour</strong> à ton <strong>ami</strong> collabos ?</div>
		<div class="sayHello"><a @click="randomUser()">Dire <strong>bonjour</strong> à un autre <strong>ami</strong> collabos</a></div>
	</div>
</template>
<script>

import UserCard from "../components/UserCard.vue"
import axios from "axios"
import UserService from "../services/UserService.js"


export default {
  name: 'home-view',

  components: { UserCard },

  data () {
    return {
      users: [],
      user: null
    }
  },

  methods: {
    removeUser(user){
                //console.log(`user to remove ${user.lastname}`);
                console.log("delete user");
                axios.delete(`http://localhost:1337/collaborateur/${user._id}`, user)
                    .then(function(response){
                        console.log(`response : ${response.message}`);
                        console.log(response);
                        //console google => application => xhr => response / header
                        if(response.statusText === "OK"){
                            console.log("user deleted");
                        }
                    }).catch(function(err){
                    console.error(err);
                });
                location.reload();
            },
    randomUser() {
      this.user = this.users[Math.floor(Math.random() * (this.users.length))]
    },
    changeUser: function(){
        this.user = this.randomUser();
    }
  },

  created(){
    axios.get('http://localhost:1337/collaborateurs')
      .then(users => {
          console.log(users);
          this.users = users.data;
          this.randomUser();
      })
  }
}
</script>