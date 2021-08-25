<template lang="html">
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.8rem 0;
  padding: 1.3rem 0.6rem;
  border-radius: 0.25em;
  height: 1.5em;

  color: #fff;
  text-decoration: none;
  transition: background-color ease-out 250ms;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  font-size: 1.2rem;
  width: 25px;
  margin-right: 10px;
}
</style>

<script type="text/javascript">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "../../assets/js/state";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>
