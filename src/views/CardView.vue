<template>
  <v-container style="margin-top: 30vh">
    <h1 style="text-align: center; margin-bottom: 20px">Explore Our Cards</h1>
    <v-row justify="center">
      <!-- Cards -->
      <v-col v-for="(item, index) in cards" :key="index" cols="12" md="4">
        <v-card class="mx-auto" max-width="344" elevation="5">
          <!-- Tambahkan shadow dengan elevation -->
          <v-img height="200px" :src="item.image" cover></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange-lighten-2" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="toggleShow(index)"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show[index]">
              <v-divider></v-divider>
              <v-card-text>{{ item.description }}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gambarJalan from '../assets/alam1.jpg'
import gambarLaut from '../assets/alam2.jpg'

export default {
  data: () => ({
    show: [false, false, false], // Array to track visibility of each card's details
    cards: [
      {
        title: 'Top Western Road Trips',
        subtitle: '1,000 miles of wonder',
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        description:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing."
      },
      {
        title: 'Scenic Mountain Drives',
        subtitle: 'Breathtaking views',
        image: gambarJalan,
        description:
          'Enjoy the crisp mountain air and stunning vistas as you navigate the winding roads.'
      },
      {
        title: 'Coastal Adventures',
        subtitle: 'Ocean breeze and waves',
        image: gambarLaut,
        description:
          'Experience the thrill of the ocean waves while driving along the beautiful coastline.'
      }
    ]
  }),
  methods: {
    toggleShow(index) {
      this.show[index] = !this.show[index] // Toggle visibility for specific card
    }
  }
}
</script>
