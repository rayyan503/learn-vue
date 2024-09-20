export default {
  SET_ITEMS(state, items) {
    state.items = items
  },
  ADD_ITEM(state, newItem) {
    state.items.push(newItem)
  },
  UPDATE_ITEM(state, updatedItem) {
    const index = state.items.findIndex((item) => item.id === updatedItem.id)
    if (index !== -1) {
      state.items.splice(index, 1, updatedItem)
    }
  },
  DELETE_ITEM(state, itemId) {
    state.items = state.items.filter((item) => item.id !== itemId)
  },
  setDigimons(state, digimons) {
    state.digimons = digimons
  },
  setLoading(state, isLoading) {
    state.loading = isLoading
  },
  setError(state, error) {
    state.error = error
  },
  setSearchList(state, list) {
    state.searchList = list
  }
}
