<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="curso in cursos" :key="curso.id">
          <Card :curso="curso"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


// Components

import Card from '@/components/Card.vue'
import { mapState } from 'vuex'
export default({
  name: 'HomeView',

  computed:{
    ...mapState(['cursos'])
  },
  components: {
    Card
  },
});
</script>
