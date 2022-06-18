<template>

  <section class="src-components-vista">
    <h1>VISTA DE LOS INGRESOS</h1>
     <!-- <button class="btn btn-success mr-2 mb-3" @click="getIngresos()">Ver ingresos</button> -->
     

      <div v-show="!ingresos.length">
        <div class="alert alert-warning">
        <p>No hay usuarios para mostrar</p>
        </div>
      </div>
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
    beforeMount(){
      this.$store.dispatch('obtenerIngresos');
    },
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {
      ingresos(){
        return this.$store.state.ingresos;
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-vista {

  }
</style>
