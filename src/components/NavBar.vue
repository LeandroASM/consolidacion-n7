<template>
    
    <v-app-bar color="#8E24AA">
      

      <v-app-bar-title class="text-white">Cursos AlfaWeb</v-app-bar-title>
      
      <template v-slot:append>
        <v-btn class="text-white" to="/" icon="mdi mdi-home"></v-btn>

        <v-btn class="text-white" to="/administracion" icon="mdi mdi-cog"></v-btn>

        
      </template>
    </v-app-bar>
 
</template>

<script>
export default {
  name: "NavBar-component",
  // props: {},
  data: function () {
    return {
      
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