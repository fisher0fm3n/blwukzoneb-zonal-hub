<template>
  <div v-if="!mobile">
    <Sidebar />
    <div class="app-content" :style="{ 'margin-left': sidebarWidth }">
      <ItemModal />
      <router-view />
    </div>
  </div>

  <div v-else class="mobile-message flex flex-column">
    <h2>Sorry, this app is not supported on Mobile Devices</h2>
    <p>To use this app please use a computer or tablet</p>
  </div>
</template>

<script type="text/javascript">
import Sidebar from "@/components/sidebar/Sidebar.vue";
import ItemModal from "@/components/ItemModal.vue";
import { sidebarWidth } from "@/assets/js/state";

export default {
  data() {
    return {
      mobile: null,
    };
  },
  components: {
    Sidebar,
    ItemModal,
  },
  setup() {
    return { sidebarWidth };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap");

body {
  padding: 0;
  margin: 0;
}
* {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-content {
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ff9a22;
  color: #fff;

  p {
    margin-top: 16px;
  }
}
</style>
