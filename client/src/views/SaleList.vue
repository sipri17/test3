<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import TableSalesRow from '../components/TableSalesRow.vue'



export default {
  components: {
    TableSalesRow
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchSales']),
  },
  async created() {
    await this.fetchSales()

  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataSale'])
  },
}
</script>

<template>
 <div class="d-flex justify-content-center">
        <div>
        

            <div  class="d-flex justify-content-center">
                <h1>Sales</h1>
            </div>

            <div class="d-flex justify-content-center">
                <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr  class="text-center">
                        <th >Kode Transaksi</th>
                        <th >Tanggal Transaksi</th>
                        <th >Nama Pelanggan</th>
                        <th >Item</th>
                        <th >Quantity</th>
                        <th >Total Diskon</th>
                        <th >Total Harga</th>
                        <th >Total Bayar</th>
                    </tr>

                    

                </thead>
                <tbody>
                    <TableSalesRow v-for="sale in dataSale" :key="sale.id"  :sale="sale" />
                    <!-- <p>{{ dataSale }}</p> -->
                </tbody>
            </table>
            </div>

            <div class="d-flex flex-row-reverse">

            </div>
        </div>

    </div>
</template>

<style></style>