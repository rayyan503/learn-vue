export default {
  allItems: (state) => state.items,
  getItemById: (state) => (id) => state.items.find((item) => item.id === id),
  allDigimons: (state) => state.digimons,
  filteredDigimons: (state) => {
    if (!state.searchList) return state.digimons
    return state.digimons.filter((digimon) =>
      digimon.name.toLowerCase().includes(state.searchList.toLowerCase())
    )
  }
}
