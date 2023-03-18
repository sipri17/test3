<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import CustomerCard from '../components/CustomerCard.vue'



export default {
  components: {
    CustomerCard
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchCustomers']),
  },
  async created() {
    await this.fetchCustomers()

  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataCustomer'])
  },
}
</script>

<template>
  <main>
    <h1 class="text-center my-3">Customer List</h1>
    <router-link to="/AddCustomer">
      <button type="button" class="btn btn-info px-3 me-2 my-3 mx-2">
        Add Customer
      </button> </router-link>
    <div class="container">
      <div class="row">
        <CustomerCard v-for="customer in dataCustomer" :key="customer.id" :customer="customer" />
        <!-- <p>{{ dataCustomer }}</p> -->

      </div>
     
    </div>


  </main>
</template>

<style></style>