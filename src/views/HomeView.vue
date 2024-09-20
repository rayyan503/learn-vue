<template>
  <v-container fluid fill-height class="banner">
    <v-row align="center" justify="space-between">
      <v-col class="text-center" cols="12" md="6">
        <div class="banner-content">
          <h1 class="title">Welcome to My Website</h1>
          <p class="subtitle">Explore amazing content and features!</p>
        </div>
      </v-col>
      <v-col class="image-column" cols="12" md="6">
        <img src="../assets/cobacoba.png" class="banner-image" contain aspect-ratio="16/9" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.banner {
  color: black; /* Text color */
  padding: 20px; /* Add padding for mobile */
}

.banner-content {
  backdrop-filter: blur(5px); /* Optional: adds a blur effect behind the text */
  color: black; /* Change text color for contrast if needed */
}

.title {
  font-size: 2.5rem; /* Responsive font size */
}

.subtitle {
  font-size: 1.25rem; /* Responsive font size */
}

/* Responsive styles */
@media (max-width: 600px) {
  .title {
    font-size: 2rem; /* Smaller font size on mobile */
  }
  .subtitle {
    font-size: 1rem; /* Smaller font size on mobile */
  }
}

.banner-image {
  height: auto; /* Allow the height to adjust automatically */
  max-height: 400px; /* Prevent image from getting too tall */
  width: 100%; /* Ensure the image takes full width of the column */
}
</style>
