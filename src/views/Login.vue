<template>
  <div class="login">
    <div class="email">
      <input type="email" v-model="email" placeholder="email" />
    </div>
    <div class="password">
      <input type="password" v-model="password" placeholder="password" />
    </div>

    <button @click="login">Login</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log("Success");
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
