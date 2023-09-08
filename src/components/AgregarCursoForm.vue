<template>
  <v-container class="mx-auto px-6 py-7">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nombre"
        :counter="10"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="img"
        label="URL de la imagen"
        required
      ></v-text-field>

      <v-text-field
        v-model="cupos"
        label="Cupos del curso"
        required
      ></v-text-field>

      <v-text-field
        v-model="inscritos"
        label="Inscritos en el curso"
        required
      ></v-text-field>

      <v-text-field
        v-model="duracion"
        label="Duración del curso"
        required
      ></v-text-field>

      <v-text-field
        v-model="registro"
        label="Fecha de registro"
        required
      ></v-text-field>

      <v-text-field
        v-model="costo"
        label="Costo del curso"
        required
      ></v-text-field>

      <v-text-field
        v-model="descripcion"
        label="Descripcion del curso"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="addCurso()"> Agregar </v-btn>

      <v-btn color="warning" class="mr-4" @click="reset()">
        Limpiar Formulario
      </v-btn>

      <v-btn color="error" @click="cancelar()"> Cancelar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "form-agregar-curso-component",
  // props: {},
  data: function () {
    return {
      nombre: "",
      img: "",
      cupos: undefined,
      inscritos: undefined,
      duracion: "",
      registro: "",
      costo: undefined,
      completado: false,
      descripcion: "",
    };
  },
  // computed: {},
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    addCurso() {
      let nuevoCurso = {
        nombre: this.nombre,
        img: this.img,
        cupos: parseInt(this.cupos),
        duracion: this.duracion,
        inscritos: parseInt(this.inscritos),
        completado: this.completado,
        fecha_registro: this.registro,
        costo: parseInt(this.costo),
        descripcion: this.descripcion,
      };
      this.$emit("agregarCurso", nuevoCurso);
    },
    cancelar(){
      this.$emit('cancelarAdd')
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>