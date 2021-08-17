<template>
  <div class="home">
    <h1>Hi</h1>
    <Sidebar />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/sidebar/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
  },
};
</script>
