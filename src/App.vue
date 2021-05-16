<template>
    <v-app>
      <Header></Header>
      <v-main>
          <v-container>
              <router-view></router-view>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  components: {Header}
}
</script>

<style>
main{
  margin-top: 45px;
  /* background-color: rgb(187, 204, 240); */
  background-color: rgb(203, 209, 241);
}

</style>
