import axios from 'axios'

export default {
  async fetchItems({ commit }) {
    // Contoh: Ambil data dari API atau server
    const data = [
      {
        id: 1,
        name: 'Rahmat Arayyan',
        email: 'rahmatarayyan26',
        major: 'Rekayasa Perangkat Lunak',
        address: 'Jl.Warakas V Gang III'
      },
      {
        id: 2,
        name: 'Muhammad Zainul Kamal',
        email: 'zainuljamal@gmail.com',
        major: 'Sistem Informasi',
        address: 'Jl. Walang II No.1000'
      }
    ]
    commit('SET_ITEMS', data)
  },
  async addItem({ commit }, newItem) {
    // Tambah item ke daftar
    commit('ADD_ITEM', newItem)
  },
  async updateItem({ commit }, updatedItem) {
    // Update item
    commit('UPDATE_ITEM', updatedItem)
  },
  async deleteItem({ commit }, itemId) {
    // Hapus item
    commit('DELETE_ITEM', itemId)
  },
  async fetchDigimons({ commit }) {
    commit('setLoading', true)
    try {
      const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
      commit('setDigimons', response.data)
      console.log('response ', response)
      commit('setError', null)
    } catch (error) {
      commit('setError', 'Failed to fetch Digimons')
    } finally {
      commit('setLoading', false)
    }
  },
  updateSearchList({ commit }, list) {
    commit('setSearchList', list)
  }
}
