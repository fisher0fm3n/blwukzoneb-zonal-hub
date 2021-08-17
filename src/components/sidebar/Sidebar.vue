<template lang="html">
<div class="sidebar"  :style="{ width: sidebarWidth }">
  <h1>
    <span v-if="collapsed">
      <img class="sidebar-logo" src="../../assets/images/icons/spades.svg" />
    </span>

    <span v-else>
      BLW UK Zone B
    </span>
  </h1>

  <SidebarLink to="/" icon="fas fa-th-large">Dashboard</SidebarLink>
  <SidebarLink to="/inventory" icon="fas fa-boxes">Inventory</SidebarLink>
  <SidebarLink to="/content" icon="fas fa-sd-card">Content Records</SidebarLink>
  <SidebarLink to="/registration" icon="fas fa-users">Attendance</SidebarLink>
  <SidebarLink to="/settings" icon="fas fa-cog">Settings</SidebarLink>
  <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
  <i class="fas fa-sign-out-alt fa-flip-horizontal"></i>
</span>

</div>
</template>

<script>
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from '../../assets/js/state';

export default {
  name: 'Sidebar',
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style lang="css">
:root{
  --sidebar-bg-color: #FF9A22;
  --sidebar-item-hover: rgba(0,0,0,0.2);
  --sidebar-item-active: rgba(0,0,0,0.2);
}
</style>

<style scoped>
  .sidebar{
    color: #fff;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    position: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
  }

  .sidebar-logo{
    width: 1.8rem;
  }

  .collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    cursor: pointer;

    color: rgba(255, 255,255, 0.7);

    transition: 0.2s linear;
  }

  .rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
/*
.tooltip:hover {
  text-decoration: none;
}

.tooltip:hover:after {
  background: #111;
  background: rgba(0, 0, 0, .8);
  border-radius: .5em;
  bottom: 1.35em;
  color: #fff;
  content: attr(data-title);
  display: block;
  left: 10rem;
  padding: .3em 1em;
  position: absolute;
  text-shadow: 0 1px 0 #000;
  white-space: nowrap;
  z-index: 98;
}

.tooltip:hover:before {
  border: solid;
  border-color: #111 transparent;
  border-color: rgba(0, 0, 0, .8) transparent;
  border-width: .4em .4em 0 .4em;
  bottom: 2.1em;
  content: "";
  display: block;
  left: 4rem;
  transform: rotate(90deg);
  position: absolute;
  z-index: 99;
} */
</style>
