<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'



export default {
  props: ["customer"],
  computed: {
    ...mapWritableState(useCounterStore,['baseUrl'])
  }
}
</script>

<template>
   <div  class="card mx-3 my-3" style="width: 18rem;">
        <div class="d-flex flex-column">
            <img :src="baseUrl+'/'+customer.ktp" class="card-img-top" style="height: 300px; object-fit:cover;" />
            <div class="card-body text-dark">
                <h5 class="card-title">{{customer.nama}}</h5>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4"> email : {{customer.email}}</li>
                <li class="list-group-item px-4"> contact : {{customer.contact}}</li>
                <li class="list-group-item px-4"> alamat : {{ customer.alamat }}</li>                
                <li class="list-group-item px-4"> diskon : {{ customer.diskon }} ({{ customer.tipe_diskon }})</li>                
            </ul>
            
        </div>
    </div>
</template>

<style></style>