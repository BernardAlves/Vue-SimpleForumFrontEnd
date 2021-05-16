<template>
    <v-container>
        <NewPost fixed/>
        <!--  
        RETORNA UNDEFINED (OBJECT.length=undefined , como transformar em ARRAY?)
        <h2 v-if="qtdPosts">Qtd de posts: {{qtdPosts}}</h2> 
        <h2 v-else> Nenhum post :(</h2> 
        -->
        <v-card v-for="(post,i) in posts" :key="i" class="mt-5" color="#0006da21">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-row>                    
                        <v-list-item-subtitle class="ml-3">
                            criado por: <strong>{{post.byUser}}</strong> --- ({{post.date}})
                        </v-list-item-subtitle>                           
                        <v-list-item-subtitle :class="post.tag" class="ml-3 mr-1 mt-3 mb-0">
                            {{post.tag}}
                        </v-list-item-subtitle>                 
                    </v-row>
                    <v-list-item-title class="headline mb-6 mt-3">
                        {{post.title}}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                        {{post.text}}
                    </v-list-item-subtitle>

                </v-list-item-content>
            </v-list-item>
            <!-- BOTOES EDIT/EXCLUIR -->
            <v-row>
                <v-col class="ml-4">
                    <router-link :to="{name:'posts', params:{ i:i , post:post }}">
                        <v-btn x-small >
                            <v-icon left >
                                mdi-pencil
                            </v-icon>
                        EDIT 
                        </v-btn>
                    </router-link>
                    <v-btn
                        class="ml-2"
                        x-small
                        @click="excluir(i)"
                        >
                            <v-icon left>
                                mdi-trash-can
                            </v-icon>
                        DELETE
                    </v-btn>
                </v-col>              
            </v-row>
        </v-card>
        <!-- SNACK BAR -->        
        <div class="text-center">
            <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            color="red"
            rounded="pill"
            text
            outlined
            min-height="1111"
            >
            {{ aviso }}
            </v-snackbar>
          </div>

    </v-container>
</template>

<script>
import NewPost from './NewPost.vue'

export default {
  components: { NewPost },
    name: "home",
    data(){       
        return{
            snackbar: false,
            aviso: 'Post deleted',
            timeout: 1200,
        }
    },
    computed:{ 
        posts(){
            console.log("Home.vue / Computed: 'posts'", this.$store.state.posts)
            return this.$store.state.posts
        },
        qtdPosts(){
            console.log("Home.vue / Computed: 'qtdPosts' >>>", this.$store.getters.qtdPosts)
            return this.$store.getters.qtdPosts
        },

    },
    methods:{
        excluir(i){
            console.log("--------- BTN EXCLUIR --------")
            this.$http.delete(`/posts/${i}.json`)
            .then(()=>this.$store.dispatch('loadPosts'))
            .then(this.snackbar=true)          
        },
        
    },
    created() {
        console.log("Home.vue / created(): dispatch action > mutation > loadPosts")
        this.$store.dispatch('loadPosts');
  }
}
</script>

<style>
.Assuntos.Gerais{
    border-radius: 0 15px 15px 0;
    background-color: rgb(170, 211, 169);
    color: rgb(13, 117, 9) !important;
    padding:3px;
    max-width: fit-content;  
    padding-left: 20px;
    padding-right: 20px;
}
.Dúvidas{
    border-radius: 0 15px 15px 0;
    background-color: rgb(233, 240, 133);
    color: rgb(177, 112, 15) !important;
    padding:3px;
    max-width: fit-content;  
    padding-left: 20px;
    padding-right: 20px;
}
.Avisos{
    border-radius: 0 15px 15px 0;
    background-color: rgb(245, 118, 118);
    color: rgb(161, 17, 17) !important;
    padding:3px;
    max-width: fit-content;   
    padding-left: 20px;
    padding-right: 20px;
}

</style>