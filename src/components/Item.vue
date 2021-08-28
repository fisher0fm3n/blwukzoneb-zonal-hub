<template>
  <tr>
    <th scope="row">{{ item.itemID }}</th>
    <td>{{ item.itemBarcode }}</td>
    <td>
      <div class="item-cat" v-if="item.itemCategory === 'camera'">
        <i class="fas fa-camera"></i>
      </div>
      <div class="item-cat" v-if="item.itemCategory === 'light'">
        <i class="fas fa-lightbulb"></i>
      </div>
      <div class="item-cat" v-if="item.itemCategory === 'device'">
        <i class="fas fa-laptop"></i>
      </div>
      <div class="item-cat" v-if="item.itemCategory === 'cable'">
        <i class="fas fa-plug"></i>
      </div>
      <div class="item-cat" v-if="item.itemCategory === 'add_on'">
        <i class="fas fa-puzzle-piece"></i>
      </div>
      <div class="item-cat" v-if="item.itemCategory === 'other'">
        <i class="fas fa-random"></i>
      </div>
    </td>
    <td>{{ item.itemName }}</td>
    <td>{{ item.itemCondition }}</td>
    <td>{{ item.ownerName }}</td>
    <td>{{ item.itemDate }}</td>
    <td>
      <router-link
        class="item btn btn-info"
        :to="{ name: 'Item', params: { itemID: item.itemID } }"
      >
        View
      </router-link>
      <a class="item btn btn-success" @click="addItem">
        Add
      </a>
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "item",
  data() {
    return {
      category: null,
      itemBasket: this.itemBasket,
    };
  },
  props: ["item"],
  computed: {
    ...mapState(["itemBasket"]),
  },
  methods: {
    addItem() {
      this.itemBasket.push(this.item.itemID);
      console.log(this.itemBasket);
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  font-weight: 500;
  text-align: left;
  line-height: 3rem;
  position: relative;
}

th {
  line-height: 3rem;
  text-align: left;
}

.item-cat {
  text-align: center;
  width: 2rem;
  height: 2rem;
  position: relative;

  &::before {
    content: "";
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: #ff9a22;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  svg {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.item {
  color: #fff;
  font-size: 0.9rem;
}

.item-cat {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn-success {
  margin-left: 0.3rem;
}
</style>
