<template>
  <div>
    <div>
      <v-row justify="center" class="mt-7">
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" max-width="700px">
            <template v-slot:activator="{ props }">
              <v-btn variant="tonal" class="items-center" v-bind="props"
                >Agregar Curso</v-btn
              >
            </template>
            <template v-slot>
              <v-card>
                <Form></Form>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
    <div>
      
        <TablaCursos :listaCursos="cursos"></TablaCursos>
      
    </div>
  </div>
</template>

<script>
import Form from "@/components/AgregarCursoForm.vue";
import TablaCursos from '@/components/TablaCursos.vue'
import { mapState } from "vuex";
export default {
  name: "Administracion-view",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(['cursos']),
  },
  //methods: {}
  // watch: {},
  components: {
    Form,
    TablaCursos,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>