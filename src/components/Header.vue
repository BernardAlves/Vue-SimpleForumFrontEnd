<template>
    <div>
      <!-- atributo src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" -->
    <v-app-bar color="#324a85" fixed dark>

      <v-img
        class="mx-2"
        src="@/assets/logoinfnet.png"
        max-width="170"
        contain 
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title>Fórum/ Vue Framework AT</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon to="/newpost">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>


<script>

</script>

<style>

</style>