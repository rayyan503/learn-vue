<template>
  <v-footer color="black darken-3" padless>
    <v-col class="text-center" cols="12">
      <v-row justify="center">
        <!-- Social Media Icons -->
        <v-btn icon href="https://facebook.com" class="mx-2 mt-5" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/rayyan503" class="mx-2 mt-5" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://www.instagram.com/rahmatarayyan05"
          class="mx-2 mt-5"
          target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://www.linkedin.com/in/rahmat-arayyan-282610221"
          class="mx-2 mt-5"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-row>

      <!-- Footer Text -->
      <div class="footer-text">
        <p>&copy; 2024 Rahmat. All rights reserved.</p>
        <p>Jl. Warakas V GG III No.129</p>
        <p>Email: rahmatarayyan26@gmail.com| Phone: 085798160976</p>
      </div>
    </v-col>
  </v-footer>
</template>

<style scoped>
.footer-text {
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .footer-text p {
    font-size: 12px; /* Make text smaller on mobile */
  }
}
</style>
