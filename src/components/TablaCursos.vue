<template>
  <v-container>
    <v-table fixed-header height="400px">
      <thead>
        <tr>
          <th>Curso</th>
          <th>Cupos</th>
          <th>Inscritos</th>
          <th>Duración</th>
          <th>Costo</th>
          <th>Terminado</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="curso in listaCursos" :key="curso.id">
          <td>{{ curso.nombre }}</td>
          <td>{{ curso.cupos }}</td>
          <td>{{ curso.inscritos }}</td>
          <td>{{ curso.duracion }}</td>
          <td class="text-center">
            <p class="bg-green rounded-pill pa-2">${{ curso.costo.toLocaleString('es-CL') }}</p>
          </td>
          <td v-if="curso.completado == true" class="text-center"><p class="bg-info rounded-pill pa-2">Si</p></td>
          <td v-else class="text-center"><p class="bg-blue-grey-lighten-3 rounded-pill pa-2">No</p></td>
          <td class="text-center"><p class="bg-green rounded-pill pa-2">{{ curso.fecha_registro }}</p></td>
          <td>
            <div class="d-flex justify-space-around">
              <v-icon color="yellow" @click="editCourse(curso.id)">mdi-pencil</v-icon>
              <v-icon color="red" @click="confirmDeleteCourse(curso.id)">mdi-delete</v-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  name: "dataTable-component",
  props: {
    listaCursos: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  // computed: {},
  methods: {
    editCourse(id){
      this.$emit('editarCurso', id)
      
    },
    confirmDeleteCourse(id){
      this.$emit('borrarCurso', id)
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