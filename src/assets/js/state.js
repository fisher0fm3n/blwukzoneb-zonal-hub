/* eslint-disable */

import { ref, computed } from 'vue';

export const collapsed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SIDE_WIDTH = 180;
export const SIDE_WIDTH_COLLAPSED = 61;

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDE_WIDTH_COLLAPSED : SIDE_WIDTH}px`,
);
