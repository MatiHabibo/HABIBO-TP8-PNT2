import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Vista from './components/Vista.vue'




Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect : '/formulario'},
        {path: '/formulario', component: Formulario},
        {path: '/vista', component: Vista},
        {path: '*', component: Formulario} 

    ]

})