import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const state = ref(0)

    return () => (
      <div class={'flex items-center flex-col justify-center'}>
        <p>hello world!</p>
        <h1>{state.value} </h1>
        <button onClick={() => state.value++}>点击+ </button>
      </div>
    )
  },
})
