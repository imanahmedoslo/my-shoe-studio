<template>
  <Content>
    <div class="px-4 sm:px-6 lg:px-12 py-12 ">
      <h1 class="text-2xl font-semibold leading-6 mb-7 text-gray-900">Dashboard</h1>
      <div class="flex flex-col gap-3 border justify-between w-full bg-gray-50 rounded-lg mb-7 px-7 py-6 border-gray-300">
        <div class="">
          <p class="text-2xl font-bold">Product Distribution</p>
          <div class="flex items-center justify-center p-3">
            <div class="w-1/2">
              <DoughnutChart :chartData="data" />
            </div>
            <div class="flex flex-col gap-3 w-1/2">
              <div class="flex items-center p-3 text-white font-medium text-2xl bg-[#FF6384] w-full h-20 rounded-xl opacity-75 shadow-xl hover:shadow-2xl cursor-pointer">
                <p class="">Shirts: 322</p>
              </div>
              <div class="flex items-center p-3 text-white font-medium text-2xl bg-[#36A2EB] w-full h-20 rounded-xl opacity-75 shadow-xl hover:shadow-2xl cursor-pointer">
                <p>Pants: 123</p>
              </div>
              <div class="flex items-center p-3 text-white font-medium text-2xl bg-[#FFCE56] w-full h-20 rounded-xl opacity-75 shadow-xl hover:shadow-2xl cursor-pointer">
                <p>Shoes: 100</p>
              </div>
            </div>
          </div>
          <p class="text-2xl font-bold">Monthly Sales Overview</p>
        </div>
        <div class=" flex flex-col gap-28">
          <LineChart :chartData="data" />
          <BarChart :chartData="data" />
        </div>
      </div>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import { DoughnutChart, LineChart, BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: ['Shirts', 'Pants', 'Shoes'],
  datasets: [
    {
      label: 'Sales',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverOffset: 4
    }
  ]
};
</script>
