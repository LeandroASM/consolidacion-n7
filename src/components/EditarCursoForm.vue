<template>
  <v-container class="mx-auto px-6 py-8" min-width="600">
    <v-form >
      <v-text-field
        v-model="nombre"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="img"
        type="text"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Url de la imagen"
        placeholder="ingrese url imagen"
      ></v-text-field>

      <v-text-field
        v-model="cupos"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Cupos del curso"
      ></v-text-field>
      <v-text-field
        v-model="inscritos"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="inscritos en el curso"
      ></v-text-field>
      <v-text-field
        v-model="duracion"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Duración del curso"
      ></v-text-field>
      <v-text-field
        v-model="registro"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Fecha de Registro"
      ></v-text-field>
      <v-text-field
        v-model="costo"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Costo del curso"
      ></v-text-field>
      <v-textarea label="Descripción" v-model="descripcion"> </v-textarea>
      <v-switch
        v-model="completado"
        :label="completado ? 'completado' : 'no completado'"
        color="red"
      
        hide-details
      ></v-switch>
      <div>
        <v-btn
          color="warning"
          variant="elevated"
          class="mr-4"
          @click="editarCurso()"
        >
          Editar
        </v-btn>

        <v-btn color="error" @click="cancelar()"> Cancelar </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "form-edit-component",
  props: ["id"],
  data: function () {
    return {
      nombre: "",
      img: "",
      cupos: undefined,
      inscritos: undefined,
      duracion: "",
      registro: "",
      costo: undefined,
      completado: "false",
      descripcion: "",
      loading: false,
      form: false,
    };
  },
  computed: {
    ...mapGetters(["getCursoById"]),
  },
  methods: {
    // onSubmit() {
    //   if (!this.form) return;
    //   this.loading = true;
    //   this.editarCurso();
    // },
    getCursoByID() {
      let curso = this.getCursoById(this.id);
      this.nombre = curso.nombre;
      this.img = curso.img;
      this.cupos = curso.cupos;
      this.inscritos = curso.inscritos;
      this.duracion = curso.duracion;
      this.registro = curso.fecha_registro;
      this.costo = curso.costo;
      this.completado = curso.completado;
      this.descripcion = curso.descripcion;
    },
    editarCurso() {
      let cursoEditado = {
        id: this.id,
        nombre: this.nombre,
        img: this.img,
        cupos: parseInt(this.cupos),
        duracion: this.duracion,
        inscritos: this.completado ? 0 : parseInt(this.inscritos),
        completado: this.completado,
        fecha_registro: this.registro,
        costo: parseInt(this.costo),
        descripcion: this.descripcion,
        
        
      };
      
      this.$emit("cursoEditado", cursoEditado);
    },
    required(v) {
      return !!v || "Campo es requerido";
    },
    cancelar(){
      this.$emit('cancelarEdit')
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.getCursoByID();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>