<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import ItemCard from '../components/ItemCard.vue'



export default {
  components: {
    ItemCard
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchItems']),
  },
  async created() {
    await this.fetchItems()

  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataItem'])
  },
}
</script>

<template>
  <main>
    <h1 class="text-center my-3">Item List</h1>
    <router-link to="/AddItem">
      <button type="button" class="btn btn-info px-3 me-2 my-3 mx-2">
        Add Item
      </button> </router-link>
    <div class="container">
      <div class="row">
        <ItemCard v-for="item in dataItem" :key="item.id" :item="item" />
        <!-- <p>{{ dataItem }}</p> -->

      </div>

    </div>


  </main>
</template>

<style></style>