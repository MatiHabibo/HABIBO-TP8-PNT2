import Vue from 'vue' 

const miMixinGlobal = {

    methods : {
        cargarIngreso() {
            //this.contador++;
              this.$store.dispatch('guardar', 1)
          },
    },
    computed : {
        //   mostrarPosts(){
        //     let posts = this.$store.state.posts
        //     // console.error('mostrarContadorVuex ', contador )
        //     return posts
        //   },
    }
}

Vue.mixin(miMixinGlobal)