<template>
    <v-container>
      <v-row  justify="space-around">
        <v-card v-for="curso in cursos" :key="curso.id" width="400px">
          <v-img
            height="200"
            :src="curso.img"
            cover
            class="text-white"
          >
            
          </v-img>
  
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline density="compact" align="start">
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    Costo: {{ curso.costo }}
                  </div>
                  <div>Duración: {{ curso.duracion}}</div>
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
    name: 'component-name',
    props: {
        cursos: {
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>