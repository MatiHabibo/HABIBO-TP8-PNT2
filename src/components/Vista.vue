<template>

  <section class="src-components-vista">
    <h1>VISTA DE LOS INGRESOS</h1>
       <div v-show="!ingresos.length">
        <div class="alert alert-warning">
        <p>No hay usuarios para mostrar</p>
        </div>
      </div>
      <div v-show="ingresos.length">
              <div class="media alert alert-info" v-for="(ingreso,index) in ingresos" :key="index">
          <div class="media-body ml-4">
              <br>
              <p>Nombre: <b>{{ ingreso.nombre }}</b></p>
              <p>Edad: <i>{{ ingreso.edad }}</i></p>
              <p>Mail: {{ ingreso.mail }}</p>
          </div>
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
      beforeMount() {
    this.$store.dispatch("getIngresos");
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
