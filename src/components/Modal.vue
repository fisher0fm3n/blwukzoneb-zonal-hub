<template>
  <div class="ace-modal">
    <div class="ace-modal-content">
      <p>Are you sure you want to exit? Your changes will not be saved?</p>
      <div class="actions d-flex">
        <button @click="closeModal" class="purple">Return</button>
        <button @click="closeItem" class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_ITEM", "TOGGLE_EDIT_ITEM"]),
    closeModal() {
      this.TOGGLE_MODAL();
    },
    closeItem() {
      this.TOGGLE_MODAL();
      this.TOGGLE_ITEM();
      if (this.editItem) {
        this.TOGGLE_EDIT_ITEM();
      }
    },
  },
  computed: {
    ...mapState(["editItem"]),
  },
};
</script>

<style lang="scss" scoped>
.ace-modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .ace-modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;
    p {
      text-align: center;
    }
    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
