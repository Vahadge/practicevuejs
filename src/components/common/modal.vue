<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="static-modal"  class="justify-center 
bg-gray-900 bg-opacity-50
items-center fixed top-0 left-0 right-0 overflow-y-auto overflow-x-hidden z-50 max-h-full h-full" :class="!props.showModal ? 'hidden' : ''">
    <div class="relative p-4 w-full max-w max-h-full lg:mt-40 mt-20">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    <slot name="title"></slot>
                </h3>
                <button type="button" 
                @click="toggleModal()"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <slot name="body"></slot>
            </div>
            <!-- Modal footer -->
            <div class="justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <slot name="footer"></slot> 
            </div>
        </div>
    </div>
</div>
</template>
<script setup>

import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['some-event'])
const props = defineProps(["title", "body", "footer", "showModal"]);

function toggleModal()
{
  emit('some-event', 'toggle');
}


</script>