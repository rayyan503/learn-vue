<template>
  <v-container fluid style="margin-top: 30vh">
    <v-row align="center">
      <v-col class="image-column" cols="12" md="6">
        <img src="../assets/gambar2.png" class="responsive-image" alt="About Image" />
        <!-- Replace with your image path -->
      </v-col>
      <v-col class="text-column" cols="12" md="6">
        <div class="about-content">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio tenetur
            repudiandae reprehenderit dignissimos placeat alias ad aliquam, perspiciatis beatae
            mollitia sed dicta maxime itaque quaerat asperiores, ex eius voluptates.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.image-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-column {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.about-content {
  padding: 20px; /* Add some padding for better spacing */
}

.responsive-image {
  max-width: 100%; /* Prevent the image from exceeding its container */
  height: auto; /* Maintain aspect ratio */
}

@media (max-width: 1024px) {
  .text-column {
    text-align: left; /* Align text left on smaller screens */
  }
}
</style>
