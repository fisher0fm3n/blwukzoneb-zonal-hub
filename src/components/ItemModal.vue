<template>
  <div @click="checkClick" ref="itemWrap" class="item-wrap d-flex flex-column">
    <form @submit.prevent="submitForm" class="item-content">
      <h1>New Item</h1>

      <!-- Item Info -->
      <div class="item-info d-flex flex-column">
        <div class="input d-flex flex-column">
          <label for="itemName">Item Name</label>
          <input required type="text" id="itemName" v-model="itemName" />
        </div>
        <div class="item-details d-flex justify-content-between">
          <div class="input d-flex flex-column">
            <label for="itemBarcode">barcode</label>
            <input
              required
              type="text"
              id="itemBarcode"
              v-model="itemBarcode"
            />
          </div>
          <div class="input d-flex flex-column">
            <label for="itemCategory">Category</label>
            <select id="itemCategory" v-model="itemCategory">
              <option value="camera">Camera</option>
              <option value="light">Light</option>
              <option value="cable">Cable</option>
              <option value="device">Mobile/Computer Device</option>
              <option value="peripheral">Peripheral</option>
            </select>
          </div>
        </div>
        <div class="item-description">
          <div class="input d-flex flex-column">
            <label for="itemDescription">Description</label>
            <textarea
              required
              id="itemDescription"
              rows="10"
              cols="30"
              v-model="itemDescription"
            ></textarea>
          </div>
        </div>
        <div class="input d-flex flex-column">
          <label for="ownerName">Owner Name</label>
          <input required type="text" id="ownerName" v-model="ownerName" />
        </div>
      </div>

      <!-- Item Admin -->
      <div class="item-admin d-flex flex-column">
        <div class="item-admin-details d-flex justify-content-between">
          <div class="input d-flex flex-column">
            <label for="itemDate">Item Date</label>
            <input disabled type="text" id="itemDate" v-model="itemDate" />
          </div>
          <div class="input d-flex flex-column">
            <label for="adminName">Admin Name</label>
            <input disabled type="text" id="adminName" v-model="adminName" />
          </div>
        </div>
      </div>

      <!-- Save/Exit Buttons -->
      <div class="save d-flex">
        <button class="add-button">Add item</button>
      </div>

      <div class="canel d-flex">
        <button @click="closeAddItem" class="add-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "itemModal",
  data() {
    return {
      itemName: null,
      itemBarcode: null,
      itemCategory: null,
      itemDescription: null,
      itemDate: null,
      itemTime: null,
      itemImages: [],
      ownerName: null,
      adminName: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_ITEM"]),
    closeAddItem() {
      this.TOGGLE_ITEM();
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrap {
  position: fixed;
  top: 0;
  background-color: transparent;
  height: 100%;

  .item-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    height: 100%;
    background-color: #ff9a22;
    color: #fff;

    h1 {
      text-align: left;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #fff;
    }
  }
}
.add-button {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 3rem;
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
</style>
