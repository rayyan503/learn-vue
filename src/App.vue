<script setup lang="ts">
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import CardView from './views/CardView.vue'
import CrudView from './views/CrudView.vue'
import TestimoniView from './views/TestimoniView.vue'
import DigiView from './views/DigiView.vue'
</script>

<template>
  <v-app>
    <NavbarItem />
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <section id="home">
            <HomeView />
          </section>
          <section id="about">
            <AboutView />
          </section>
          <section id="card">
            <CardView />
          </section>
          <section id="testimoni">
            <TestimoniView />
          </section>
          <section id="crud">
            <CrudView />
          </section>
          <section id="digi">
            <DigiView />
          </section>
        </v-col>
      </v-row>
    </v-container>
    <FooterItem />
  </v-app>
</template>
