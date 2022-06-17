import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url :'https://62abb0cca62365888bdfdfc6.mockapi.io/ingresos',
        ingresos: []
    },
    actions : {
        async guardar({commit}){
        try{
            let {data : ingresos } = await axios(this.url)
            commit('postIngreso', ingresos)

        }catch(error){
            // console.error(error)
        }        
    },
    },
    mutations : {
        postIngreso(state, ingresos){
            state.ingresos = ingresos
        }
    }
})