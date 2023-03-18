import { createRouter, createWebHistory } from 'vue-router'
import ItemList from '../views/ItemList.vue'
import AddItem from '../views/AddItem.vue'
import CustomerList from '../views/CustomerList.vue'
import AddCustomer from '../views/AddCustomer.vue'
import SaleList from '../views/SaleList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ItemList',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/AddItem',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/CustomerList',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/AddCustomer',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/SaleList',
      name: 'SaleList',
      component: SaleList
    }
  ]
})

export default router
