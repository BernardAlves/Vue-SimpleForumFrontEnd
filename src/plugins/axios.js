import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'https://vue-at-2020dez-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})

//esse arquivo está fazendo nada, nao dei import 