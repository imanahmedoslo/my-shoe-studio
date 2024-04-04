<template>
  <Content :isBackgroundWhite="true">
    <div class="px-4 sm:px-6 lg:px-12 py-12">
      <h1 class="text-2xl font-semibold leading-6 mb-7 text-gray-900">Order Number: 123123123</h1>
      <div class="flex flex-col gap-3 border justify-between w-full bg-gray-50 rounded-lg mb-7 px-7 py-6 border-gray-300">
        <div class="flex gap-2 items-center w-full mb-3 border-b pb-3 border-gray-300">
          <p class="  text-sm font-semibold text-gray-900">Add Advanced Search</p>
          <ToggleButton /> 
          <Button :text="'Search'" class="w-32 ml-auto"/>
          <Button :text="'clear'" class="w-32 "/>
        </div>
        <!-- TODO: if this white background style is used many times, consider creating a new component for it -->
        <div class="bg-white p-4 rounded-md border">
          <p class="font-medium text-lg border-b border-black pb-3">Order Status</p>


        </div>
        <div class="bg-white p-4 rounded-md border grid grid-cols-2 gap-y-3">
          <p class="font-medium text-lg border-b border-black pb-3 col-span-2">Customer Information</p>
          <p class="font-medium text-lg text-gray-900">Name</p>
          <p class="text-lg text-gray-900">Ahmed Dahir Ahmed</p>
          <p class="font-medium text-lg text-gray-900">Email</p>
          <p class="text-lg text-gray-900">noe@noe.no</p>
          <p class="font-medium text-lg text-gray-900">PhoneNumber</p>
          <p class="text-lg text-gray-900">41414141</p>
          <p class="font-medium text-lg text-gray-900">Adress</p>
          <p class="text-lg text-gray-900">chillern veien grilleren 64</p>
        </div>

        <div class="bg-white p-4 rounded-md border">
          <p class="font-medium text-lg border-b border-black pb-3">Order Summery</p>
          <CartProductCard :hideRemoveButton="true"/>
          <CartTotalPrice :hideButtons="true" :isShippingPrice="true"/>
        </div>
      </div>
  </div>
  </Content>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import { ArrowsUpDownIcon} from '@heroicons/vue/24/outline'
import InputText from '@/components/Inputs/InputText.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import Button from '@/components/Buttons/Button.vue'
import CartProductCard from '@/components/Cart/CartProductCard.vue';
import CartTotalPrice from '@/components/Cart/CartTotalPrice.vue'


// TODO: 
//  Add tabel component and send data as a prop to the tabel component
//  Add pagination to the tabel component
//  Add search to the tabel component
//  Add sorting to the tabel component
//  Add filter to the tabel component

const people = [
  { orderNumber: '2398628', name: 'Lindsay Walton', created: '20.06.2024', items: 'Front-end Developer', email: 'lindsay.walton@example.com', phoneNumber: '41414141', price: '1999kr', cost: '500kr', profit: '1499kr', orderStatus: 'Completed' },
  { orderNumber: '2398628', name: 'Lindsay Walton', created: '20.06.2024', items: 'Front-end Developer', email: 'lindsay.walton@example.com', phoneNumber: '41414141', price: '1999kr', cost: '500kr', profit: '1499kr', orderStatus: 'Completed' },
  { orderNumber: '2398628', name: 'Lindsay Walton', created: '20.06.2024', items: 'Front-end Developer', email: 'lindsay.walton@example.com', phoneNumber: '41414141', price: '1999kr', cost: '500kr', profit: '1499kr', orderStatus: 'Completed' },
  { orderNumber: '2398628', name: 'Lindsay Walton', created: '20.06.2024', items: 'Front-end Developer', email: 'lindsay.walton@example.com', phoneNumber: '41414141', price: '1999kr', cost: '500kr', profit: '1499kr', orderStatus: 'Completed' },
  { orderNumber: '2398628', name: 'Lindsay Walton', created: '20.06.2024', items: 'Front-end Developer', email: 'lindsay.walton@example.com', phoneNumber: '41414141', price: '1999kr', cost: '500kr', profit: '1499kr', orderStatus: 'Completed' },
]

</script>
