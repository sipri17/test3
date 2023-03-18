<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'



export default {
   
    props: ["sale"],
    computed: {
        ...mapWritableState(useCounterStore, ['baseUrl'])
    }
}
</script>

<template>
    <tr>
        <td>{{ sale.code_transaksi }}</td>
        <td>{{ sale.tanggal_transaksi }}</td>
        <td>{{ sale.Customer.nama }}</td>
        <td>
            <ul>
                <li v-for="item in sale.ItemSales" :key="item.id" > {{ item.Item.nama_item }} </li>
            </ul>
        </td>
        <td>
            <ul>
                <li v-for="item in sale.ItemSales" :key="item.id" > {{ item.quantity }} </li>
            </ul>
        </td>
        <td>{{ }}</td>
        <td>{{}}</td>
        <td>

        </td>


    </tr>
</template>

<style></style>