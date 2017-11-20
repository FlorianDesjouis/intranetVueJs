<template>
  <main id="list">
  	<h1>Ajouter des collabos</h1>
  	<hr>
  	
    <user-form @send="addUser" ></user-form>

  </main>
</template>
<script type="text/javascript" src="main.js"></script>
<script>

    import UserCard from '../components/UserCard.vue';
    import users from '../../src/data/_users.json';
    import UserForm from '../components/UserForm.vue';
    import axios from 'axios';


export default {
  components: {UserForm},
  component: {UserForm},
  name: 'add-view',
  data () {
            return {
                user : {},
            }
        },
        methods:{
            addUser(user){
                    console.log(user);
                axios.post('http://localhost:1337/collaborateur', user)
                    .then(function(response){
                        console.log(`response : ${response.message}`);
                        console.log(response);
                        
                        if(response.statusText === "OK"){
                        }
                    }).catch(function(err){
                        console.error(err);
                });
                location.reload();
            }
        },
        filters:{
        },
    }
</script>