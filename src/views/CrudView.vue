<template>
  <v-container fluid style="margin-top: 30vh">
    <h1 class="text-center mb-5">Students CRUD Operations</h1>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>{{ editMode ? 'Edit Item' : 'Add Item' }}</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="newItem.name" label="Your Name" required></v-text-field>
              <v-text-field v-model="newItem.email" label="Email" required></v-text-field>
              <v-text-field v-model="newItem.major" label="Major" required></v-text-field>
              <v-text-field v-model="newItem.address" label="Address" required></v-text-field>
              <v-btn @click="editMode ? updateItemLocal() : addItemLocal()">
                {{ editMode ? 'Update Item' : 'Add Item' }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Items List</v-card-title>
          <v-list>
            <v-list-item v-for="item in items" :key="item.id" class="mb-2">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ item.major }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
              </v-list-item-content>
              <!-- Tombol Edit -->
              <v-btn icon @click="editItem(item)" class="ml-2 mt-2">
                <v-icon color="blue">mdi-pencil</v-icon>
              </v-btn>
              <!-- Tombol Delete -->
              <v-btn icon @click.stop="deleteItemLocal(item.id)" class="ml-2 mt-2">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      newItem: {
        id: null,
        name: '',
        email: '',
        major: '',
        address: ''
      },
      editMode: false
    }
  },
  computed: {
    ...mapGetters(['allItems']),
    items() {
      return this.allItems
    }
  },
  methods: {
    ...mapActions(['fetchItems', 'addItem', 'updateItem', 'deleteItem']),

    // Method untuk menambahkan item baru
    addItemLocal() {
      if (this.newItem.name && this.newItem.address) {
        this.addItem({ ...this.newItem, id: Date.now() })
        this.resetForm()
      }
    },

    // Method lokal untuk menghapus item
    deleteItemLocal(id) {
      this.deleteItem(id) // Memanggil action Vuex deleteItem
    },

    // Method untuk mengedit item
    editItem(item) {
      this.newItem = { ...item }
      this.editMode = true
    },

    // Method lokal untuk memperbarui item
    updateItemLocal() {
      this.updateItem(this.newItem) // Memanggil action Vuex updateItem
      this.resetForm()
    },

    // Mengosongkan form setelah submit
    resetForm() {
      this.newItem = { id: null, name: '', email: '', major: '', address: '' }
      this.editMode = false
    }
  },
  created() {
    this.fetchItems()
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
