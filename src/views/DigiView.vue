<template>
  <v-container class="py-8" style="margin-top: 30vh">
    <h1 class="text-center mb-5">List Digimons</h1>
    <!-- Search Bar -->
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-text-field
          v-model="localSearchList"
          @input="updateSearch"
          label="Search Digimon..."
          outlined
          clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Loading Indicator -->
    <v-row justify="center" v-if="loading">
      <v-col cols="12" sm="8">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>

    <!-- Error Message -->
    <v-row justify="center" v-if="error">
      <v-col cols="12" sm="8" class="text-center">
        <v-alert type="error">{{ error }}</v-alert>
      </v-col>
    </v-row>

    <!-- Digimon Cards -->
    <v-row v-if="filteredDigimons.length" class="my-4" dense>
      <v-col
        v-for="digimon in filteredDigimons"
        :key="digimon.name"
        cols="12"
        sm="6"
        lg="4"
        class="d-flex justify-center"
      >
        <v-card class="text-center" elevation="3" width="100%">
          <v-img :src="digimon.img" :alt="digimon.name" max-height="300px" class="mb-4"></v-img>
          <v-card-title class="text-h5">{{ digimon.name }}</v-card-title>
          <v-card-subtitle>Level: {{ digimon.level }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- No Digimon Found Message -->
    <v-row justify="center" v-else>
      <v-col cols="12" sm="8" class="text-center">
        <v-alert type="info">No Digimons found.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      localSearchList: ''
    }
  },

  computed: {
    ...mapState(['loading', 'error']),
    ...mapGetters(['filteredDigimons'])
  },

  methods: {
    ...mapActions(['fetchDigimons', 'updateSearchList']),

    updateSearch() {
      this.updateSearchList(this.localSearchList)
    }
  },

  created() {
    this.fetchDigimons()
  }
}
</script>
