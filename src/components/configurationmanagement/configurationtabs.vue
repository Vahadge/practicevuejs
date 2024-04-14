<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="me-2" data-componentid="items" @click="setTab($event)">
        <a
          href="#"
          class="inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          :class="[currenttab == 'items' ? 'text-blue-600 border-b-2 border-blue-600 active' : '']"
          >Items</a
        >
      </li>
      <li class="me-2" data-componentid="products" @click="setTab($event)">
        <a
          href="#"
          class="inline-block p-4  rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
          :class="[currenttab == 'products' ? 'text-blue-600 border-b-2 border-blue-600 active' : '']"
          aria-current="page"
          >Products</a
        >
      </li>
      <li class="me-2" data-componentid="suppliers" @click="setTab($event)">
        <a
          href="#"
          class="inline-block p-4  rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
          :class="[currenttab == 'suppliers' ? 'text-blue-600 border-b-2 border-blue-600 active' : '']"
          aria-current="page"
          >Suppliers</a
        >
      </li>
      <li class="me-2" data-componentid="customers" @click="setTab($event)">
        <a
          href="#"
          class="inline-block p-4  rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
          :class="[currenttab == 'customers' ? 'text-blue-600 border-b-2 border-blue-600 active' : '']"
          aria-current="page"
          >Customers</a
        >
      </li>
      <li>
        <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
          >Item product mapping</a
        >
      </li>
    </ul>
  </div>
  <div class="selectedtabcomponent" v-if="componentLoaded">
      <DynamicComponent />
  </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'
import products from './products.vue'
import items from './items.vue'
const routes = ref([
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Login',
    to: '/login'
  },
  {
    name: 'Configuration',
    to: '/Configurationmanagement'
  }
])

let DynamicComponent = ref(null);
let currenttab = ref('')
const componentLoaded = ref(false);


function setTab(event) {
    
  let tab = event.currentTarget.getAttribute('data-componentid')
  currenttab.value = tab;
  loadComponent(tab);
}


function loadComponent(itm)  {
    componentLoaded.value = false;
      // Use defineAsyncComponent to asynchronously load the component
       DynamicComponent = defineAsyncComponent(() => import('./'+itm+'.vue'));
      // Set componentLoaded to true to render the component
      componentLoaded.value = true;
    };

</script>
