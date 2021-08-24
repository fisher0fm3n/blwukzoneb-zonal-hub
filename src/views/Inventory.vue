<template lang="html">
  <div class="inventory container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1 class="page-header">Inventory</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="d-flex">
          <div
            @click="toggleFilterMenu"
            class="filter d-flex align-items-center"
            ref="filter"
          >
            <span>Filter by: Category<i class="fas fa-angle-down"></i></span>

            <ul v-show="filterMenu" class="filter-menu">
              <li @click="filteredMenu">Draft</li>
              <li @click="filteredMenu">Pending</li>
              <li @click="filteredMenu">Paid</li>
              <li @click="filteredMenu">Clear</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center justify-content-right">
        <div @click="newItem" class="add-button d-flex align-items-center">
          <div
            class="inner-button d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-plus"></i>
          </div>
          <span>New item</span>
        </div>
      </div>
    </div>
    <!-- Items -->
    <div class="row">
      <div class="col-md-12">
        <div v-if="itemData.length > 0">
          <table class="table mt-5 table-hover">
            <thead>
              <tr>
                <th scope="col">Item #</th>
                <th scope="col">Barcode</th>
                <th scope="col">Category</th>
                <th scope="col">Name</th>
                <th scope="col">Item Condition</th>
                <th scope="col">Item Owner</th>
                <th scope="col">Created</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <Item
                v-for="(item, index) in itemData"
                :item="item"
                :key="index"
              />
            </tbody>
          </table>
        </div>
        <div v-else class="d-flex flex-column">
          <img src="../assets/images/undraw_empty_xct9.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Item from "../components/Item.vue";
export default {
  name: "Inventory",
  data() {
    return {
      filterMenu: null,
      filteredMenu: null,
    };
  },
  components: {
    Item,
  },
  methods: {
    ...mapMutations(["TOGGLE_ITEM"]),
    newItem() {
      this.TOGGLE_ITEM();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
  computed: {
    ...mapState(["itemData"]),
  },
};
</script>

<style lang="scss" scoped>
thead {
  background: rgba(255, 154, 34, 0.8);
  color: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

tr {
  font-size: 0.9rem;
}
td {
  font-size: 0.8rem;
}
th {
  text-align: left;
}

.inventory {
  padding: 0 2rem;
  margin-top: 4rem;
  color: #131313;
  .page-header {
    font-weight: bold;
    text-align: left;
    margin-bottom: 3rem;
  }
  .filter {
    cursor: pointer;
    span {
      font-size: 0.9rem;
      font-weight: 400;
      border-radius: 0.2rem;
      padding: 0.6rem 1.2rem;
      background-color: #ff9a22;
      color: #fff;
      svg {
        margin-left: 0.4rem;
      }
    }
  }

  .filter-menu {
    width: 11.5rem;
    position: absolute;
    top: 13.6rem;
    padding: 0;
    list-style: none;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    text-align: left;
    li {
      cursor: pointer;
      font-size: 12px;
      padding: 10px 20px;
      transition: color 250ms;

      &:hover {
        color: #fff;
        background-color: #ff9a22;
      }
    }
  }

  .system-record {
    margin-right: 1rem;
  }
}
</style>
