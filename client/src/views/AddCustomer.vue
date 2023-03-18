<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['inputCustomer'])
    },
    methods: {
        ...mapActions(useCounterStore, ['addCustomer', 'handleFileUploadKTP'])
    },
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="container text-c" style="width: 25rem;">
            <h2 class="text-center">Add Customer</h2>
            <form @submit.prevent="addCustomer">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example3">Nama</label>
                    <input v-model="inputCustomer.nama" type="text" id="form6Example3" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Email</label>
                    <input v-model="inputCustomer.email" type="email" id="form6Example4" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Alamat</label>
                    <input v-model="inputCustomer.alamat" type="text" id="form6Example4" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">Diskon</label>
                    <input v-model="inputCustomer.diskon" type="number" id="form6Example4" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">Tipe Diskon</label>
                    <select v-model="inputCustomer.tipe_diskon" >
                        <option value="persentase" selected>persentase</option>
                        <option value="fix">fix</option>
                    </select>
                </div>

          

                <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">KTP (jpg, png, atau jpeg)</label>
                    <input v-on:change="handleFileUploadKTP" type="file" id="form6Example5" class="form-control" />
                </div>





                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
            </form>
        </div>
    </div>
</template>