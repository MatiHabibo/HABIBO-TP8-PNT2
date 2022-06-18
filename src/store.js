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
        async guardar(ingreso){
        try{
            await this.axios.post(this.url, ingreso, {'content-type' : 'application/json'})
             return true
        }catch(error){
      //       console.error(error)
             return false
        }        
    },
    async obtenerIngresos({commit}){
        try{
             const {ingre} = await axios(this.url);
             commit('postIngreso', ingre);
             }catch(e){
                console.log(e.message);
             }

        }   
    },
    mutations : {
        postIngreso(state, ingresos){
            // let { data: ingresos } = await this.axios(this.url)
            state.ingresos = ingresos
        },
        // mostrarIngresos(){
        //     let ing = this.$store.state.ingresos
        //     // console.error('mostrarContadorVuex ', contador )
        //     return ing
        //   },
    },

})