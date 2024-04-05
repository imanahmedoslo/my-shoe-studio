<template>
  <Content :isBackgroundWhite="true">
    <div class="px-4 sm:px-6 lg:px-12 py-12">
      <h1 class="text-2xl font-semibold leading-6 mb-7 text-gray-900">Order Search</h1>
      <div class="flex flex-col gap-3 border justify-between w-full bg-gray-50 rounded-lg mb-7 px-7 py-6 border-gray-300">
        <div class="flex gap-2 items-center w-full mb-3 border-b pb-3 border-gray-300">
          <p class="  text-sm font-semibold text-gray-900">Add Advanced Search</p>
          <ToggleButton /> 
          <Button :text="'Search'" class="w-32 ml-auto"/>
          <Button :text="'clear'" class="w-32 "/>
        </div>

        <div class="flex gap-3 justify-between w-full">
          <InputText class="w-1/5" />
          <InputText class="w-1/5" />
          <InputText class="w-1/5" />
          <InputText class="w-1/5" />
        </div>
      </div>
  
      <div class="sm:flex sm:items-center">  
        <div class="sm:flex-auto">
          <h1 class="text-2xl font-semibold leading-6 mb-12 text-gray-900">OrderList</h1>
          <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, items, email and role.</p> -->
        </div>
        
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create New Order</button>
        </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="cursor-pointer flex gap-1 items-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Order Number
                    <ArrowsUpDownIcon class="opacity-85 h-4 w-4"/>
                  </th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Created</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Items</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone Number</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cost</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Profit</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Order Status</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in people" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.orderNumber }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.name }}</td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.created }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.items }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.phoneNumber }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.price }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.cost }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.profit }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.orderStatus }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
  // More people...
]

</script>
