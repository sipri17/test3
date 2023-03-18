<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'



export default {
  props: ["item"],
  computed: {
    ...mapWritableState(useCounterStore,['baseUrl'])
  }
}
</script>

<template>
   <div  class="card mx-3 my-3" style="width: 18rem;">
        <div class="d-flex flex-column">
            <img :src="baseUrl+'/'+item.barang" class="card-img-top" style="height: 300px; object-fit:cover;" />
            <div class="card-body text-dark">
                <h5 class="card-title">{{item.nama_item}}</h5>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4"> harga : Rp.{{item.harga_satuan}} per {{ item.unit }}</li>
                <li class="list-group-item px-4"> stok : {{ item.stok }}</li>                
            </ul>
            
        </div>
    </div>
</template>

<style></style>