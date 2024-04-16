import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type User = {
  name: string;
  age: number;
  userTypes: 'admin' | 'customer' | 'guest';
};

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    name: 'Eduardo',
    age: 18,
    userTypes: 'admin',
  });
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { user, count, doubleCount, increment };
});


