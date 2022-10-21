 //importer d'abbord le vuex
import{ createApp}from "vue"
// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
  })

  export default store