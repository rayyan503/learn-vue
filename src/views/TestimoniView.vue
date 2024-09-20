<template>
  <v-container class="testimonials-container" fluid style="margin-top: 30vh">
    <h1 class="text-center mb-5">What Our Clients Say</h1>
    <v-row justify="center">
      <!-- Testimonial Card 1 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="testimonial-card" outlined>
          <v-card-text>
            <v-img :src="testimonial1.image" height="200" cover></v-img>
            <v-card-title class="text-center">{{ testimonial1.name }}</v-card-title>
            <v-card-subtitle class="text-center">{{ testimonial1.role }}</v-card-subtitle>
            <v-card-text class="testimonial-text"> "{{ testimonial1.text }}" </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Testimonial Card 2 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="testimonial-card" outlined>
          <v-card-text>
            <v-img :src="testimonial2.image" height="200" cover></v-img>
            <v-card-title class="text-center">{{ testimonial2.name }}</v-card-title>
            <v-card-subtitle class="text-center">{{ testimonial2.role }}</v-card-subtitle>
            <v-card-text class="testimonial-text"> "{{ testimonial2.text }}" </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Testimonial Card 3 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="testimonial-card" outlined>
          <v-card-text>
            <v-img :src="testimonial3.image" height="200" cover></v-img>
            <v-card-title class="text-center">{{ testimonial3.name }}</v-card-title>
            <v-card-subtitle class="text-center">{{ testimonial3.role }}</v-card-subtitle>
            <v-card-text class="testimonial-text"> "{{ testimonial3.text }}" </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import imageSatu from '../assets/orang1.jpg'
import imageDua from '../assets/orang2.jpg'
import imageTiga from '../assets/orang3.jpg'

export default {
  data() {
    return {
      testimonial1: {
        name: 'Juki Alexander',
        role: 'CEO, Company A',
        text: 'This service was amazing! It exceeded all of my expectations.',
        image: imageSatu
      },
      testimonial2: {
        name: 'Anton Bemper',
        role: 'Marketing Director, Company B',
        text: 'Working with this team was a pleasure. Highly recommended!',
        image: imageDua
      },
      testimonial3: {
        name: 'Bayu Ariyanto',
        role: 'Jendral',
        text: 'The quality and attention to detail were superb. I will definitely return.',
        image: imageTiga
      }
    }
  }
}
</script>

<style scoped>
.testimonials-container {
  padding: 50px 20px;
}

.testimonial-card {
  margin-bottom: 30px;
}
.text-center {
  text-align: center;
}

.testimonial-text {
  font-style: italic;
  margin-top: 10px;
}
</style>
