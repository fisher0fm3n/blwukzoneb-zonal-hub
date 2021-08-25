<template>
  <tr>
    <th scope="row">{{ item.itemID }}</th>
    <td>{{ item.itemBarcode }}</td>
    <td>
      <div class="item-cat" v-if="item.itemCategory === 'camera'">
        <i class="fas fa-camera"></i>
      </div>
    </td>
    <td>{{ item.itemName }}</td>
    <td>{{ item.itemCondition }}</td>
    <td>{{ item.ownerName }}</td>
    <td>{{ item.itemDate }}</td>
    <td>
      <router-link
        class="item d-flex"
        :to="{ name: 'Item', params: { itemID: item.itemID } }"
      >
        View
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      category: null,
    };
  },
  props: ["item"],
};
</script>

<style lang="scss" scoped>
td {
  font-weight: 500;
  text-align: left;
}

th {
  text-align: left;
}

.item-cat {
  text-align: center;
  width: 2rem;
  height: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: #ff9a22;
    z-index: -1;
  }
}
</style>
