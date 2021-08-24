<template>
  <div @click="checkClick" ref="itemWrap" class="item-wrap d-flex flex-column">
    <form @submit.prevent="submitForm" class="item-content">
      <Loading v-show="loading" />
      <h1 v-if="!editItem">New Item</h1>
      <h1 v-else>Edit Item</h1>

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
              <option value="device">Device</option>
              <option value="computer">Computer</option>
              <option value="peripheral">Peripheral</option>
              <option value="tape">Tape</option>
              <option value="add_on">Add-On</option>
              <option value="other">Other</option>
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
        <div class="input d-flex flex-column">
          <label for="itemCondition">Item Condition</label>
          <select id="itemCondition" v-model="itemCondition">
            <option value="new">New</option>
            <option value="very_good">Very Good</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="very_bad">Very Bad</option>
            <option value="faulty">Faulty</option>
          </select>
        </div>
      </div>

      <!-- Item Admin -->
      <div class="item-admin d-flex flex-column">
        <div class="item-admin-details d-flex justify-content-between">
          <div class="input d-flex flex-column">
            <label for="itemDate">Item Date</label>
            <input disabled type="text" id="itemDate" v-model="itemDate" />
          </div>
        </div>
      </div>

      <!-- Save/Exit Buttons -->
      <div class="save d-flex">
        <button type="button" @click="uploadItem" class="add-button">
          Add item
        </button>
      </div>

      <div class="canel d-flex">
        <button type="button" @click="closeAddItem" class="add-button">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "../firebase/firebaseinit";
import firebase from "firebase";
import Loading from "../components/Loading.vue";
import { uid } from "uid";
import { mapMutations, mapState } from "vuex";

export default {
  name: "itemModal",
  components: {
    Loading,
  },
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      loading: null,
      itemName: null,
      itemBarcode: null,
      itemCategory: null,
      itemCondition: null,
      itemDescription: null,
      itemDate: null,
      itemDateUnix: null,
      itemImages: [],
      ownerName: null,
      adminID: null,
    };
  },
  created() {
    this.itemDateUnix = Date.now();
    this.itemDate = new Date(this.itemDateUnix).toLocaleDateString(
      "en-us",
      this.dateOptions
    );
  },
  methods: {
    ...mapMutations(["TOGGLE_ITEM", "TOGGLE_MODAL"]),

    checkClick(e) {
      if (e.target === this.$refs.itemWrap) {
        this.TOGGLE_MODAL();
        console.log("Hi");
      }
    },

    closeAddItem() {
      this.TOGGLE_ITEM();
    },

    async uploadItem() {
      // if (this.itemImages.length <= 0) {
      //   alert("Please upload images of the item");
      //   return;
      // }

      this.loading = true;
      const dataBase = db.collection("items").doc();

      await dataBase.set({
        itemID: uid(6),
        itemName: this.itemName,
        itemBarcode: this.itemBarcode,
        itemCategory: this.itemCategory,
        itemCondition: this.itemCondition,
        itemDescription: this.itemDescription,
        itemDate: this.itemDate,
        itemImages: this.itemImages,
        ownerName: this.ownerName,
      });

      this.loading = false;
      this.TOGGLE_ITEM();
    },

    submitForm() {
      this.uploadItem();
    },
  },
  computed: {
    ...mapState(["editItem"]),
  },
};
</script>

<style lang="scss" scoped>
.item-wrap {
  position: fixed;
  top: 0;
  background-color: transparent;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  width: 100%;
  &::-webkit-scrollbar {
    display: none !important;
  }

  .item-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    height: 100vh;
    width: 100%;
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
