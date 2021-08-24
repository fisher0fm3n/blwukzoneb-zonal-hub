<template>
  <div v-if="currentItem" class="item-view container">
    <router-link class="nav-link d-flex" :to="{ name: 'Inventory' }">
      <i class="fas fa-hand-point-left"></i> Go back
    </router-link>
    {{ currentItem.itemName }}

    <div>
      <button @click="toggleEditItem()" class="edit">
        Edit
      </button>
      <button @click="deleteItem(currentInvoice.docID)" class="delete">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "itemView",
  data() {
    return {
      currentItem: null,
    };
  },
  created() {
    this.getCurrentItem();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_ITEM", "TOGGLE_EDIT_ITEM", "TOGGLE_ITEM"]),

    getCurrentItem() {
      this.SET_CURRENT_ITEM(this.$route.params.itemID);
      this.currentItem = this.currentItemArray[0];
    },

    toggleEditItem() {
      this.TOGGLE_EDIT_ITEM();
      this.TOGGLE_ITEM();
    },
  },
  computed: {
    ...mapState(["currentItemArray"]),
  },
};
</script>

<style></style>
