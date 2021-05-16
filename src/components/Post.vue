<template>
  <v-container>
    <v-col>
      <h2>Edit post: /{{ i }}</h2>
    </v-col>
    <!----------------------formulario de edit------------------------>
    <v-card class="mt-5" max-width="900" color="#0006da21">
      <v-list-item three-line>
        <v-list-item-content>
          <v-row>
            <div :class="post.tag">
              <v-list-item-subtitle class="ml-3 mr-1">
              by: {{post.byUser}} ---  ( {{post.date}} ) ---> {{post.tag}}
              </v-list-item-subtitle>
            </div>
          </v-row>

          <v-list-item-title class="headline mb-3 mt-3 ml-1">
            {{ post.title }}
          </v-list-item-title>

          <v-textarea v-model="post.text" outlined class="mb-0"> </v-textarea>

        </v-list-item-content>
      </v-list-item>
      <!--------------------------------------------------------------->
      <v-card-actions>
        <v-btn class="ml-2 mb-2" small @click="editPost(i, post)">
          <v-icon left> mdi-pencil </v-icon>
          edit post
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      post: this.$route.params.post,
      i: this.$route.params.i,
    };
  },
  methods: {
    /*ao invés de dar um call na API e depois dar um dispatch nos action para um refresh do state,
      eu deveria dar um dispatch pra um action pra call na API ?*/
    editPost(i, post) {
      post.date = "Editado em: "+new Date().getDate() +"/"+ (new Date().getMonth()+1) +"/"+ new Date().getFullYear() +" - "+ new Date().getHours() +":"+ (new Date().getMinutes()<10? "0"+new Date().getMinutes():new Date().getMinutes())
      console.log("EDIT POST --->", post.date)
      this.$http.put(`/posts/${i}.json`, post)
      .then(() => this.$store.dispatch("loadPosts"))
      .then(this.$router.replace({ name: "Home" }))
    },
  },
}
</script>

<style>
</style>