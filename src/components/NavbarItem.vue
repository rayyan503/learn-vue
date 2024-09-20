<template>
  <v-app style="height: 20vh">
    <v-app-bar app color="black" dark>
      <v-toolbar-title>My Website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>

      <!-- Buttons with scroll behavior -->
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('home')">Home</v-btn>
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('about')">About</v-btn>
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('card')">Card</v-btn>
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('testimoni')"
        >Testimonial</v-btn
      >
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('crud')">CRUD</v-btn>
      <v-btn text class="nav-btn d-none d-md-flex" @click="scrollToSection('digi')">Digimon</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary class="d-md-none">
      <v-list dense>
        <v-list-item @click="scrollToSection('home')">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('about')">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('card')">
          <v-list-item-title>Card</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('testimoni')">
          <v-list-item-title>Testimonials</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('digi')">
          <v-list-item-title>Digimon</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    // Scroll to the target section
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.nav-btn {
  transition:
    background-color 0.3s,
    color 0.3s;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
</style>
