<template>
  <div>
    <h1>Hello {{ name }} Dashboard</h1>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import firebase from "firebase";

export default {
  name: "Dashboard",

  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;

      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
  },
};
</script>

<style></style>
