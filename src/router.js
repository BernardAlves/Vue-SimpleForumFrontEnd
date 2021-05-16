import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'
import NewPost from './components/NewPost.vue'


Vue.use(Router)

export default new Router ({
    mode:'history',
    routes:[
        {name:'Home', path:'/', component:Home },
        {name:'posts', path:'/posts/:i', component:Post },
        {path:'/newpost', component: NewPost},

    ]
})