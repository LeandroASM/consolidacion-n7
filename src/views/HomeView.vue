<template>
  <div>
    <NavBar/>
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
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue'
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'
export default defineComponent({
  name: 'HomeView',

  computed:{
    ...mapState(['cursos'])
  },
  components: {
    NavBar,
    Card
  },
});
</script>
