<template>

  <section class="src-components-formulario">
    <h1>FOMULARIO</h1>
    <vue-form :state="formState" @submit.prevent="enviar()">
    <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo requiere como maximo {{nombreMaxLength}} caracteres.
            </div>
          </field-messages>
        </validate>
    
        <br>

         <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">Debes ser mayor de {{ edadMin }}</div>
            <div slot="max" class="alert alert-danger mt-1">Debes ser menor de {{ edadMax }}</div>
      
          </field-messages>
        </validate>
        <br>

  <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email invalido</div>
      
          </field-messages>
        </validate>
        <br>
  <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
  </vue-form>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {        
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        nombreMaxLength : 15,
        edadMin : 18,
        edadMax : 120,
        // url: 'https://62abb0cca62365888bdfdfc6.mockapi.io/ingresos',
        // ingresos: []
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar() {
        this.cargarIngreso()
        this.formData = this.getInicialData()
        this.formState._reset() 
      },
      //  async postIngreso() {
      //   let ingresoNew = {
      //     nombre: this.formData.nombre,
      //     edad: this.formData.edad,
      //     email: this.formData.email
      //   }

      //   try {
      //     let { data: ingreso } = await this.axios.post(this.url, ingresoNew, {'content-type' : 'application/json'})
      //     this.ingresos.push(ingreso)
      //   }
      //   catch(error) {
      //     console.error('Error en postIngreso()', error.message)
      //   }
      // },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
