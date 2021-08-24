<template>
  <!-- Add loading animations -->
  <div v-if="itemsLoaded">
    <div v-if="!mobile">
      <Sidebar />
      <div class="app-content" :style="{ 'margin-left': sidebarWidth }">
        <Modal v-if="modalActive" />
        <transition name="item">
          <ItemModal v-if="itemModal" />
        </transition>
        <router-view />
      </div>
    </div>
  </div>

  <div v-else class="mobile-message flex flex-column">
    <h2>Sorry, this app is not supported on Mobile Devices</h2>
    <p>To use this app please use a computer or tablet</p>
  </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from "vuex";
import firebase from "firebase";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import ItemModal from "@/components/ItemModal.vue";
import Modal from "@/components/Modal.vue";
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
    Modal,
  },
  setup() {
    return { sidebarWidth };
  },
  created() {
    this.GET_ITEMS();
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    ...mapActions(["GET_ITEMS"]),

    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  computed: {
    ...mapState(["itemModal", "modalActive", "itemsLoaded"]),
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
  transition: 0.3s ease;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  transition: opacity 0;
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

.add-button {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 3rem;
  border: 0;
  padding: 0.6rem 1.2rem;
  background-color: #ff9a22;
  color: #fff;
  .inner-button {
    color: #ff9a22;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 0.6rem;
    min-width: 2rem;
    min-height: 2rem;
  }
}

.ace-orange {
  background-color: #ff9a22;
}

.ace-blue {
  background-color: #00b1ff;
}
</style>

<style lang="scss" scoped>
.item-enter-active,
.item-leave-active {
  transition: 0.8s ease all;
}

.item-enter-from,
.item-leave-to {
  transform: translateX(-700px);
}
</style>
