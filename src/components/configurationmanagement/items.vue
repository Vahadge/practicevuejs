<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="lg:m-10 lg:p-5">
  <custommodal title="Add Items" :showModal="toggleModal" @some-event="ToggleModal">
    <template v-slot:body>
      <div class="form mt-5">
        <h1
          class="justify-center flex text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Add Items
        </h1>
        <form class="max-w-md mx-auto">
          <textbox
            type="text"
            name="itemname"
            id="itemname"
            placeholder=""
            required
            labeltext="Item Name"
          ></textbox>
          <dropdown
            id="category"
            labeltext="Category"
            :options="categories"
            class="mt-5"
          ></dropdown>
          <dropdown id="unit" labeltext="unit" :options="units" class="mt-5"></dropdown>
          <textbox
            type="number"
            name="baseprice"
            id="baseprice"
            placeholder=""
            required
            labeltext="Base price"
          ></textbox>
        </form>
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex justify-center">
        <custombutton class="m-1 text-white bg-blue-700 hover:bg-blue-800"> Save </custombutton>
        <custombutton class="m-1 text-white bg-gray-700 hover:bg-blue-800"> close </custombutton>
      </div>
    </template>
  </custommodal>
  <div class="z-40 border-solid border-2 border-indigo-300 p-5 m-2 rounded-lg">
    <h1 class="flex text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white p-2">Search</h1>
    <div class="box mt-4 border-red-200 grid lg:grid-flow-col lg:grid-cols-4 sm:grid-flow-row">
      <textbox
        id="search_id"
        placeholder="search by Id"
        type="number"
        value=""
        class="searchinput"
      />
      <textbox id="search_name" placeholder="name" type="text" value="" class="searchinput" />
      <textbox
        id="search_category"
        placeholder="Category"
        type="text"
        value=""
        class="searchinput"
      />
      <textbox
        id="search_id"
        placeholder="search by Id"
        type="number"
        value=""
        class="searchinput"
      />
    </div>
    <div class="">
      <custombutton class="m-1 max-w-20 text-white bg-blue-700 hover:bg-blue-800"
        >Search</custombutton
      >
      <custombutton
        class="m-1 max-w-sm text-white bg-blue-700 hover:bg-blue-800"
        @click="ToggleModal"
        >Add new</custombutton
      >
    </div>
  </div>

  <div class="listview m-2 border-solid border-2 border-indigo-300 rounded-lg">
    <h1 class="flex text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white p-2">Existing items</h1>
    <vue3-datatable
      :rows="rows"
      :columns="cols"
      :loading="loading"
      :totalRows="total_rows"
      :isServerMode="true"
      :pageSize="params.pagesize"
      @change="changeServer"
    >
    <template #id="data">
                <strong>{{ data.value.id }}</strong>
            </template>
            <template #name="data">
                <strong>{{ data.value.name }}</strong>
            </template>
            <template #actions="data">
                <div class="flex gap-4">
                    <button type="button" class="btn btn-success !py-1" @click="viewUser(data.value)">View</button>
                    <button type="button" class="btn btn-danger !py-1" @click="deleteUser(data.value)">Delete</button>
                </div>
            </template>
    </vue3-datatable>
  </div>
</div>
</template>
<script setup>
import textbox from '../common/textbox.vue'
import custombutton from '../common/button.vue'
import dropdown from '../common/dropdown.vue'
import custommodal from '../common/modal.vue'

import Vue3Datatable from '@bhplugin/vue3-datatable'
import obj from '@/dummyproductdata.json'
import '@bhplugin/vue3-datatable/dist/style.css'

import { ref, reactive, onMounted } from 'vue'

let toggleModal = ref(false)
const categories = ref([
  {
    value: '1',
    text: 'Category 1'
  },
  {
    value: '2',
    text: 'Category 2'
  },
  {
    value: '3',
    text: 'Category 3'
  }
])

const units = ref([
  {
    value: 'kg',
    text: 'kg',
    value: 'l',
    text: 'l'
  },
  {
    value: 'ml',
    text: 'ml'
  },
  {
    value: 'g',
    text: 'g'
  },
  {
    value: 'pcs',
    text: 'pcs'
  }
])

const loading = ref(true)
const total_rows = ref(0)

const params = reactive({ current_page: 1, pagesize: 10 })
const rows = ref(null)

const cols = ref([
  { field: 'value', title: 'Id' },
  { field: 'text', title: 'name' },
  { field: 'price', title: 'price' },
  { field: 'quantity', title: 'quantity' },
  { field: 'actions', title: 'actions' },
])

function ToggleModal(name) {
  console.log(name)
  toggleModal.value = !toggleModal.value
}

function getproducts() {
  loading.value = true
  setTimeout(() => {
    rows.value = obj.products
    total_rows.value = obj.products.length
    loading.value = false
  }, 1000)
}

function changeServer() {
  loading.value = true
  setTimeout(() => {
    rows.value = obj.products
    total_rows.value = obj.products.length
    loading.value = false
  }, 1000)
}

onMounted(() => {
  getproducts()
})
</script>
<style>
.searchinput {
  @apply p-5;
}
</style>
