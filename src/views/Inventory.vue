<template lang="html">
  <div class="inventory container-fluid">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link to="/checkin" class="link"> Check In </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="page-header">Inventory</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="d-flex">
          <div
            @click="toggleFilterMenu"
            class="filter d-flex align-items-center"
            ref="filter"
          >
            <span
              >Filter by Category:
              <span v-if="filteredItem">{{ filteredItem }}</span
              ><i class="fas fa-angle-down"></i
            ></span>

            <ul v-show="filterMenu" class="filter-menu">
              <li @click="filteredItems">All</li>
              <li @click="filteredItems">Camera</li>
              <li @click="filteredItems">Cable</li>
              <li @click="filteredItems">Light</li>
              <li @click="filteredItems">Device</li>
              <li @click="filteredItems">Add-On</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for items"
            aria-label="Search for items"
            aria-describedby="basic-addon2"
            v-model="search"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              @click="queryItems"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-2 d-flex align-items-center justify-content-right">
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
                v-for="(item, index) in filteredData"
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
import { useRoute } from "vue-router";
import Item from "../components/Item.vue";
export default {
  name: "Inventory",
  data() {
    return {
      search: "",
      filterMenu: null,
      filteredItem: "All",
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

    filteredItems(e) {
      if (e.target.innerText === "All") {
        this.filteredItem = null;
        return;
      }
      this.filteredItem = e.target.innerText;
    },
  },
  computed: {
    ...mapState(["itemData"]),

    filteredData() {
      let a = null;
      return this.itemData.filter((item) => {
        if (this.filteredItem === "Camera") {
          a =
            item.itemCategory === "camera" &&
            item.itemName.toLowerCase().includes(this.search.toLowerCase());

          return a;
        }

        if (this.filteredItem === "Cable") {
          return item.itemCategory === "cable";
        }

        if (this.filteredItem === "Light") {
          return item.itemCategory === "light";
        }

        if (this.filteredItem === "Device") {
          return item.itemCategory === "device";
        }

        return item.itemName.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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

.input-group {
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
