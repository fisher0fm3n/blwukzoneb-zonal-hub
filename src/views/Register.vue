<template>
  <div class="login">
    <div class="email">
      <input type="email" v-model="email" placeholder="email" />
    </div>
    <div class="password">
      <input type="password" v-model="password" placeholder="password" />
    </div>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.data);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style></style>
