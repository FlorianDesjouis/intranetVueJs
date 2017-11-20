<template>
	<article class="userCard">
	  <img class="imgSize" :src="user.photo">
	  <div class="infoUser">
	    <span></span><br>
	    <span>{{user.firstname}} {{user.lastname}}</span><br>
	    <span>{{user.phone}}</span><br>
	    <span>{{user.birthdate}} ({{user.birthdate | computeAge}}ans)</span><br>
	    <span>{{user.city}}, {{user.country}}</span>
	  </div>
	</article>
</template>
<script>

import users from '../data/_users.json'


export default {
  name: 'user-card',

  props: {
  	user: {
  		type: Object,
  		required: true
  	}
  },

  filters: {
    computeAge(birthdate){
      let [day, month, year] = birthdate.split('/');

      let dateTime = new Date(year, month, day).getTime();

      return Math.floor(
        (Date.now() - dateTime) / (365.25 * 24 * 60 * 60 * 1000))
    }
  }
}
</script>
<style>
body {
  margin: 0;
}
.sayHello{
  margin-top: 10px;
}
.infoUser{
  margin-top: 5px;
  margin-left: 5px;
  line-height: 30px;
  float: left;
  text-align: left;
}
.imgSize{
  height: 170px;
  width: 170px;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.userCard{
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  height: 180px;
  width: 500px;
  border: solid 1px #909090;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #888888;
}
</style>