<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default {
  computed: {
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchItems']),

  },
  

}

</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-danger p-2 bg-opacity-10">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2">
        <img src="https://www.clipartkey.com/mpngs/m/84-843531_svg-icon-free-download-inventory-icon-png-black.png"
          height="26" alt="Inventory" />
      </a>

      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars">test</i>
      </button>



      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/SaleList" style="text-decoration: none;color:darkslateblue"> Sale Page</router-link>
          </li>
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">


          <RouterLink to="/ItemList">
            <button type="button" class="btn btn-primary me-3">
              Items
            </button>
          </RouterLink>
          <div>
          </div>
          <RouterLink to="/CustomerList">
            <button type="button" class="btn btn-primary me-3 mx-2">
              Customers
            </button>
          </RouterLink>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>