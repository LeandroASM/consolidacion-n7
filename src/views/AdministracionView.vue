<template>
  <div>
    <div>
      <v-row justify="center" class="mt-7">
        <v-col cols="auto">
          <div>
            <v-btn variant="tonal" class="items-center" @click="openDialog()"
              >Agregar Curso</v-btn
            >
          </div>
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="700px"
            v-model="dialog"
          >
            <template v-slot>
              <v-card>
                <FormEdit
                  v-if="edit"
                  :id="idEdit"
                  @cursoEditado="cursoEditado"
                  @cancelarEdit="cancelarEdit"
                ></FormEdit>
                <Form
                  v-else
                  @agregarCurso="addCourse"
                  @cancelarAdd="cancelarAdd"
                ></Form>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
    <div>
      <TablaCursos
        :listaCursos="cursos"
        @editarCurso="editCurso"
        @borrarCurso="confirmDeleteCurso"
      ></TablaCursos>
    </div>

    <div>
      <v-row justify="center">
        <v-dialog v-model="dialogDelete" persistent width="auto">
          <v-card>
            <v-card-title class="text-h5"> Confirmación </v-card-title>
            <v-card-text>¿Desea eliminar este curso?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="dialogDelete = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="deleteCurso()"
              >
                Confirmo
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <v-row v-for="alert in alerts" :key="alert.color">
      <TablaAlert :alert="alert" />
    </v-row>
  </div>
</template>

<script>
import Form from "@/components/AgregarCursoForm.vue";
import FormEdit from "@/components/EditarCursoForm.vue";
import TablaCursos from "@/components/TablaCursos.vue";
import TablaAlert from '@/components/TablaAlert.vue';
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Administracion-view",
  // props: {},
  data: function () {
    return {
      dialog: false,
      dialogDelete: false,
      id: null,
      edit: false,
      idEdit: null,
    };
  },
  computed: {
    ...mapState(["cursos"]),
    ...mapGetters(["alumnosPermitidos"]),
    ...mapGetters(["alumnosInscritos"]),
    ...mapGetters(["cursosTerminados"]),
    ...mapGetters(["totalCursos"]),

    cuposRestantes() {
      return this.alumnosPermitidos - this.alumnosInscritos;
    },
    cursosActivos() {
      return this.totalCursos - this.cursosTerminados;
    },
    alerts() {
      return [
        {
          color: "purple",
          icon: "mdi-account-multiple",
          title: `cantidad total de alumnos Permitidos: ${this.alumnosPermitidos} alumnos.`,
        },
        {
          color: "blue",
          icon: "mdi-account-check",
          title: `Cantidada total de alumnos inscritos: ${this.alumnosInscritos} alumnos.`,
        },
        {
          color: "red",
          icon: "mdi-account-plus",
          title: `Cantidad total de cupos restantes: ${this.cuposRestantes} alumnos.`,
        },
        {
          color: "purple-accent-3",
          icon: "mdi-cancel",
          title: `Cantidad de cursos terminados: ${this.cursosTerminados} cursos.`,
        },
        {
          color: "light-green-darken-2",
          icon: "mdi-bell-ring-outline",
          title: `Cantidad total de cursos activos: ${this.cursosActivos} cursos.`,
        },
        {
          color: "orange",
          icon: "mdi-bell-ring-outline",
          title: `Cantidad total de cursos: ${this.totalCursos} cursos.`,
        },
      ];
    },
  },
  methods: {
    ...mapActions(["createCourse", "deleteCourse", "editarCurso"]),
    ...mapActions(["deleteCourse"]),
    addCourse(nuevoCurso) {
      this.createCourse(nuevoCurso);
    },
    openDialog() {
      this.dialog = true;
    },
    confirmDeleteCurso(id) {
      this.dialogDelete = true;
      this.id = id;
    },
    deleteCurso() {
      this.deleteCourse(this.id);
      this.dialogDelete = false;
    },
    editCurso(id) {
      this.dialog = true;
      this.edit = true;
      this.idEdit = id;
    },
    cursoEditado(nuevoCurso) {
      this.editarCurso(nuevoCurso);
      this.dialog = false;
      this.idEdit = false;
    },
    cancelarEdit() {
      this.dialog = false;
      this.edit = false;
      this.idEdit = null;
    },
    cancelarAdd() {
      this.dialog = false;
    },
  },
  // watch: {},
  components: {
    Form,
    TablaCursos,
    FormEdit,
    TablaAlert
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>