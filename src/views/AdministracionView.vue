<template>
  <div>
    <v-row justify="center" class="mt-7">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="700px">
          <template v-slot:activator="{ props }">
            <v-btn variant="tonal" class="items-center" v-bind="props"
              >Agregar Curso</v-btn
            >
          </template>
          <template v-slot:>
            <v-card>
              <Form></Form>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Form from "@/components/AgregarCursoForm.vue";
export default {
  name: "Administracion-view",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    Form,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>