<template>
  <div v-if="currentItem" class="item-view container">
    <router-link class="nav-link d-flex" :to="{ name: 'Inventory' }">
      <i class="fas fa-hand-point-left"></i> Go back
    </router-link>
    <p>{{ currentItem.itemID }}</p>
    <p>{{ currentItem.itemCategory }}</p>
    <h2>{{ currentItem.itemName }}</h2>
    <p>{{ currentItem.itemCondition }}</p>
    <p>{{ currentItem.itemDescription }}</p>
    <p>{{ currentItem.itemOwner }}</p>

    <div>
      <button @click="toggleEditItem()" class="edit">
        Edit
      </button>
      <button @click="deleteItem(currentItem.docID)" class="delete">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

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
    ...mapActions(["DELETE_ITEM"]),

    getCurrentItem() {
      this.SET_CURRENT_ITEM(this.$route.params.itemID);
      this.currentItem = this.currentItemArray[0];
    },

    toggleEditItem() {
      this.TOGGLE_EDIT_ITEM();
      this.TOGGLE_ITEM();
    },

    async deleteItem(docID) {
      await this.DELETE_ITEM(docID);
      this.$router.push({ name: "Inventory" });
    },
  },
  computed: {
    ...mapState(["currentItemArray", "editItem"]),
  },

  watch: {
    editItem() {
      if (!this.editItem) {
        this.currentItem = this.currentItemArray[0];
      }
    },
  },
};
</script>

<style></style>
