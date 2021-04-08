import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    count: 0,
    name: 'hello world',
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    },
  },
  actions: {
    reset() {
      this.count = 0
    },
    addCount(count: number) {
      this.count += count
    },
    changeName(name: string) {
      this.name = name
    },
  },
})
