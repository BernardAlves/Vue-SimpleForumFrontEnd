<template>
  <v-container >
    <v-expansion-panels >
      <v-expansion-panel >
        <v-expansion-panel-header class="title" color="#0006da21">
          Sumbit a new post!
        </v-expansion-panel-header>

        <v-expansion-panel-content color="#0006da21">
          <v-form>
            
          <v-col>
            <v-text-field v-model="post.byUser" filled Label="Name" placeholder="Name (required)" dense outlined required counter="15">
            </v-text-field>
            
            <v-text-field v-model="post.title" filled Label="Title" placeholder="Post Title  (required)" outlined required counter="50">
            </v-text-field>
          </v-col>

          <v-col>
            <v-select
            filled
            v-model="post.tag"
            :items="post.tags"
            label="choose a post tag"
            outlined
          ></v-select>
          </v-col>
          

          <v-col>
            <v-textarea
            filled
              v-model="post.text"
              counter="250"
              placeholder="post text (optional)"
              outlined
            ></v-textarea>
          </v-col>

          <v-row v-if="post.errors.length" class="ml-5">
            <ul>
              <li v-for="error in post.errors" :key="error" class="avisoform">{{error}}</li>
            </ul>

          </v-row>

          <v-row class="ml-3">
            <v-col>
              <v-btn @click="validarPost" width="140px">OK</v-btn>
              <v-btn @click="mostrarConsole" class="ml-2">console.log</v-btn>
            </v-col>
          </v-row>

          <div class="text-center">
            <!-- <v-btn
            dark
            color="blue"
            @click="snackbar = true"
            >
            sumbit
            </v-btn> -->

            <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            color="green"
            rounded="pill"
            text
            outlined
            min-height="1111"
            >
            {{ aviso }}
            </v-snackbar>
          </div>

          </v-form>      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>

export default {
  
  data(){
    return{
      post:{
        byUser:'',
        title:'',
        text:'',
        date:'',
        tag: null,
        tags: [
          'Assuntos Gerais',
          'Dúvidas',
          'Avisos',
        ],
        errors:[],
      },
      snackbar: false,
      aviso: 'Post submited!',
      timeout: 2000,
    }
  },
  methods:{
    submitpost(){
      this.post.date = new Date().getDate() +"/"+ (new Date().getMonth()+1) +"/"+ new Date().getFullYear() +" - "+ new Date().getHours() +":"+ (new Date().getMinutes()<10? "0"+new Date().getMinutes():new Date().getMinutes())
      console.log("------SUBMIT POST------")
      console.log("INFO DO POST |Título: ",this.post.title,"/ Texto: ",this.post.text,"/ Data: ",this.post.date,"/ Tag: ",this.post.tag)
      this.$http.post('posts.json', this.post)
      .then(()=>this.$store.dispatch('loadPosts'))
      .then(()=>
        this.post.byUser='',
        this.post.title='',
        this.post.text='',
        this.post.date='',
        this.post.tag= null,
        this.snackbar=true
      )
    },
    mostrarConsole(){
      console.log("-------BOTÃO MOSTRAR CONSOLE------");
      this.snackbar=true
      console.log(typeof(this.post),"|| Título do post:",this.post.title,"/ Texto:", this.post.text, "/ Data:",this.post.date, "/ Tag:",this.post.tag)
    },
    validarPost(){
      this.post.errors=[];
      if (this.post.byUser == ""){
        this.post.errors.push('O nome é obrigatório.');
      }
      else if(this.post.byUser.length<5){
        this.post.errors.push('O nome deve ter no mínimo 5 letras.');
      }
      else if(this.post.byUser.length>15){
        this.post.errors.push('O nome deve ter no máximo 15 letras.');
      }
      if (this.post.title == ""){
        this.post.errors.push('O título do post é obrigatório.');
      }
      else if(this.post.title.length<5){
        this.post.errors.push('O título do post deve ter no mínimo 5 letras.');
      }
      else if(this.post.title.length>50){
        this.post.errors.push('O título do post deve ter no máximo 50 letras.');
      }
      if (this.post.tag == null){
        this.post.errors.push('Por favor escolha uma tag.');
      }
      if (!this.post.errors.length) {
        this.submitpost()
      }
      
    }
  },
}
</script>

<style scoped>
.v-expansion-panel-header{
  color:#202c44;
}
.avisoform{
  color: rgb(185, 16, 16);
}
</style>