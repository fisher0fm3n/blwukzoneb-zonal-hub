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
              <li>Draft</li>
              <li>Pending</li>
              <li>Paid</li>
              <li>Clear</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <span class="system-record">There 10 items logged into the system</span>
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
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Inventory",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {},
  methods: {
    ...mapMutations(["TOGGLE_ITEM"]),
    newItem() {
      this.TOGGLE_ITEM();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory {
  padding: 0 4rem;
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
