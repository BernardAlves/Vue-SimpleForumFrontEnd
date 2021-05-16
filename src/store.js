import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.$http.defaults.baseURL = "https://vue-at-2020dez-default-rtdb.firebaseio.com/";

export default new Vuex.Store({
    state:{
        posts:[
        ]
    },
    actions: { //actions sao assincronas, chama na API e quando acabar, chama a mutation
        loadPosts({commit}) {
          console.log("Store.js / Actions: 'loadPosts'")
          Vue.$http.get('posts.json').then(result => {
            console.log("Store.js / Actions: 'loadPosts' > CHAMOU API")
              commit('SAVE_POSTS', result.data)
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
        },
    },   
    mutations:{
        SAVE_POSTS(state,posts){
            state.posts = posts;
            console.log("Store.js / Mutations: 'SAVE_POSTS':" , posts )
        }
    },
    getters:{
      qtdPosts: state => {
        // RETORNA UM OBJETO E NAO É POSSÍVEL DAR .LENGTH NELE
        console.log("Store.js / Getters: 'qtdPosts':", state.posts.length)
        return state.posts.length
      }
    }
})
