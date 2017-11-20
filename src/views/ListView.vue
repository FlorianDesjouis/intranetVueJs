<template>
 <div id="listView">
   <h1>Liste des collaborateurs</h1>
     <hr class="hrWelcom">
    <input type="text" placeholder="rechercher ..." v-model="wordSearch" @input="filterSearch">
     filtrer par :filtrer par :
     <select name="filterSearch" v-model="filterBy" @change="filterSearch">
     <option value="name">Nom</option>
     <option value="localization">Localization</option>
 </select>
     <ul>

         <li v-for="user in filteredUsers">
             <user-card :user="user" v-if="user" @remove="removeUser"></user-card>
         </li>
     </ul>
 </div>
</template>


<script>
    import UserCard from "../components/UserCard.vue";
    import axios from "axios"
    import UserService from "../services/UserService";

    export default {
        components: {UserCard},
        name: 'listView',
        data () {
            return {
                users: null, //init users list
                filteredUsers : this.users, //filter list
                wordSearch: "",
                filterBy : 'name'
            }
        },
        methods:{
            removeUser(user){
                console.log("remove");
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
            filterSearch() {
                this.filteredUsers = this.users.filter( this.filterBy === 'localisation' ? filterByLocalisation.bind(this) : filterByName.bind(this) );
            },
        },
        computed: {
        },
        filters:{
        },
        created(){ 
            axios.get('http://localhost:1337/collaborateurs')
                .then(users => {
                    console.log(users);
                    this.users = users.data;
                    this.filteredUsers = users.data;
                });
        }
    }
    function filterByName(user) {
        return user.firstname.toLowerCase().includes(this.wordSearch.toLowerCase()) ||
            user.lastname.toLowerCase().includes(this.wordSearch.toLowerCase())
    }
    function filterByLocalisation(user) {
        return user.city.toLowerCase().includes(this.wordSearch.toLowerCase()) ||
            user.country.toLowerCase().includes(this.wordSearch.toLowerCase())
    }
</script>