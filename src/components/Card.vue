<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="300px">
        <v-img height="200" :src="curso.img" cover class="text-white"> </v-img>

        <v-card-title class="text-center">{{ curso.nombre }}</v-card-title>
        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Información</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item :dot-color="colors[0]" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">Costo: ${{ curso.costo.toLocaleString('es', 'CL') }}</div>
                <div>Duración: {{ curso.duracion }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item :dot-color="colors[1]" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">Cupos: {{ curso.cupos }}</div>
                <div>Completado: {{ curso.completado }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item :dot-color="colors[0]" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">Fecha de Registro: {{ curso.fecha_registro }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item :dot-color="colors[1]" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">Descripción: {{ curso.descripcion }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "card-component",
  props: {
    curso: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      colors: ["purple-darken-1", "green-darken-1"],
    };
  },
  // computed: {},
  //methods: {}
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