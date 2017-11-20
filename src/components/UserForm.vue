<template>
 <div id="userForm">
  <form method="POST" @submit.prevent="send">
   <div class="form-check">
    <label class="form-check-label">
     Femme : <input type="radio" class="form-check-input" v-model="user.gender" id="girl" value="female">
     Homme : <input type="radio" class="form-check-input" v-model="user.gender" id="man" value="male">
    </label>
    <br>
    <label for="lastname">Nom : </label>
    <input type="text" class="form-check" id="lastname" placeholder="DOE" v-model="user.lastname">
    <br>
    <label for="firstname">Prénom : </label>
    <input type="text" class="form-check" id="firstname" placeholder="John" v-model="user.firstname">
    <br>
    <label for="email">Email : </label>
    <input type="email" class="form-check" id="email" placeholder="John@Doe.com" v-model="user.email">
    <br>
    <label for="phone">Phone : </label>
    <input type="tel" class="form-check" id="phone" placeholder="+0601020304" v-model="user.phone">
    <br>
    <label for="birthdate">Date de naissance : </label>
    <input type="date" class="form-check" id="birthdate" v-model="user.birthdate">
    <br>
    <label for="city">Ville : </label>
    <input type="text" class="form-check" id="city" placeholder="JohnDoeCity" v-model="user.city">
    <br>
    <label for="country">Pays : </label>
    <input type="text" class="form-check" id="country" placeholder="JohnDoeCity" v-model="user.country">
    <br>
    <label for="photo">URL : </label>
    <input type="url" class="form-check" id="photo" placeholder="https://" v-model="user.photo">

    <br>
    <br>
    <input type="submit" value="Envoyez !">
   </div>
  </form>
 </div>
</template>


<script>

    import { required, sameAs, minLength } from 'vuelidate/lib/validators'
    export default {
        name : "user-form",
        props: {

        },
        data () {
            return {
               user : { 
                   gender:"",
                   lastname:'',
                   firstname:'',
                   email:'',
                   phone:'',
                   birthdate:'',
                   city:'',
                   country:'',
                   photo:''
               },
            }
        },
        methods: {
            send() {
                this.$emit("send", this.user) 
            },
        },
        filters:{
        },
        validations: {
            user : {
                lastname:{
                    required,
                    minLength: minLength(2)
                },
                firstname:{
                    required,
                    minLength: minLength(2)
                },
                email:{
                    required
                },
                phone:{
                    required
                },
                birthdate:{
                    required
                },
                city:{
                    required
                },
                country:{
                    required
                }
            }
        },
    }
</script>