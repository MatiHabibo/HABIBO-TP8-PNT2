import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'https://62abb0cca62365888bdfdfc6.mockapi.io/ingresos';

export default new Vuex.Store({
    state : {
        ingresos: [],
    },
    actions : {
        async postIngresos({commit},ingreso){
        try{
            await axios.post(URL, ingreso, {'content-type' : 'application/json'})
            console.log('post ingresos de actions y la url es ' + URL + ' y el dato es ' +  ingreso)
            commit('setStatus', true);
        }catch(error){
            console.error(error)

        }        
    },
    async getIngresos({commit}){
        try{
             const {ingre} = await axios(URL);
             commit('setIngresos', ingre);
             }catch(e){
                console.log(e);
             }

        }   
    },
    mutations : {
        setIngresos(state, ingresos){
            state.ingresos = ingresos
        },
        setStatus(state, status) {
            state.status = status;
          },
    },

})