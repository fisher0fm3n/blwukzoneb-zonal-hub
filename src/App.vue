<template>
  <div v-if="!mobile">
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
  <router-view />
</div>
</div>
</template>

<script type="text/javascript">
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { sidebarWidth } from '@/assets/js/state';

export default {
  data() {
    return {
      mobile: null,
    };
  },
  components: {
    Sidebar,
  },
  setup() {
    return { sidebarWidth };
  },
  created() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
