// Import Vue and other necessary modules
import { createApp } from 'vue'
import router from './router'
import store from './store'

// Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css' // Import MDI icons

// Import root component (App.vue)
import App from './App.vue'

// Create Vuetify instance
const vuetify = createVuetify({
  // You can customize the Vuetify theme here
  // theme: {
  //   defaultTheme: 'dark',
  // },
})

// Create Vue app instance
const app = createApp(App)

// Use router, store, and vuetify
app.use(router)
app.use(store)
app.use(vuetify)

// Mount the app to the DOM
app.mount('#app')
