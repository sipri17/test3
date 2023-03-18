// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: "http://localhost:3000",
    dataItem: [],
    inputItem: {},
    dataCustomer: [],
    inputCustomer:{},
    dataSale: ""

  }),
  actions: {
   
    handleError(error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`
      })
    }, 
    async fetchSales() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/sale'
        })

        this.dataSale = data
        console.log(data, "<<<");

      } catch (error) {
        this.handleError(error)
      }
    }, 
    async fetchItems() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/item'
        })

        this.dataItem = data
        console.log(data, "<<<");

      } catch (error) {
        this.handleError(error)
      }
    },
    async fetchCustomers() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/customer'
        })

        this.dataCustomer = data
        console.log(data, "<<<");

      } catch (error) {
        this.handleError(error)
      }
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    async addItem() {
      try {
        const formData = new FormData();
        for (let prop in this.inputItem) {
          formData.append(prop, this.inputItem[prop]);
        }
        formData.append('image', this.selectedFile);
        console.log(formData,"<<<inputItem");
        axios.post(this.baseUrl + '/item', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

      } catch (error) {
        this.handleError(error)
      }
    },
    handleFileUploadKTP(event) {
      this.selectedFileKTP = event.target.files[0];
    },
    async addCustomer() {
      try {
        const formData = new FormData();
        for (let prop in this.inputCustomer) {
          formData.append(prop, this.inputCustomer[prop]);
        }
        formData.append('image', this.selectedFileKTP);
        console.log(formData,"<<<inputItem");
        axios.post(this.baseUrl + '/customer', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

      } catch (error) {
        this.handleError(error)
      }
    }
   


  },
  getters: {}
}

)