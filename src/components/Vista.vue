<template>

  <section class="src-components-vista">
    <h1>VISTA DE LOS INGRESOS</h1>
     <button class="btn btn-success mr-2 mb-3" @click="getIngresos()">Ver ingresos</button>
     
      <div class="media alert alert-info" v-for="(ingreso,index) in ingresos" :key="index">
          <div class="media-body ml-4">
              <br>
              <p>Id: <b>{{ ingreso.id }}</b></p>
              <p>Nombre: <b>{{ ingreso.nombre }}</b></p>
              <p>Edad: <i>{{ ingreso.edad }}</i></p>
              <p>Mail: {{ ingreso.email }}</p>
          </div>
      </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-vista',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://62abb0cca62365888bdfdfc6.mockapi.io/ingresos',
        ingresos: []
      }
    },
    methods: {
      async getIngresos() {
        try {
          let { data: ingresos } = await this.axios(this.url)
          console.log('AXIOS GET ingresos', ingresos)
          this.ingresos = ingresos
        }
        catch(error) {
          console.error('Error en getIngresos()', error.message)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-vista {

  }
</style>
