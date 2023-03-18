<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['inputItem'])
    },
    methods: {
        ...mapActions(useCounterStore, ['addItem', 'handleFileUpload'])
    },
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="container text-c" style="width: 25rem;">
            <h2 class="text-center">Add item</h2>
            <form @submit.prevent="addItem">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example3">Nama Item</label>
                    <input v-model="inputItem.nama_item" type="text" id="form6Example3" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Stok</label>
                    <input v-model="inputItem.stok" type="number" id="form6Example4" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">Unit</label>
                    <select v-model="inputItem.unit" >
                        <option value="pcs" selected>pcs</option>
                        <option value="kg">kg</option>
                    </select>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">Harga Satuan</label>
                    <input v-model="inputItem.harga_satuan" type="number" id="form6Example5" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">Gambar Barang (jpg, png, atau jpeg)</label>
                    <input v-on:change="handleFileUpload" type="file" id="form6Example5" class="form-control" />
                </div>





                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
            </form>
        </div>
    </div>
</template>