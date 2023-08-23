<template>
  <div>
    <NavBar/>
    <v-container>
      <Card :cursos="cursos"/>
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
