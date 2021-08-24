<template>
  <tr>
    <th scope="row">{{ item.itemID }}</th>
    <td>{{ item.itemBarcode }}</td>
    <td>{{ item.itemCategory }}</td>
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
</style>
