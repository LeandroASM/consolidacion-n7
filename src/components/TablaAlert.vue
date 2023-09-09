<template>
    <v-container>
        <v-alert
      :color="alert.color"
      variant="outlined"
    >
    <div class="d-flex">
        <v-icon class="mr-4">{{ alert.icon }}</v-icon>
        <p>{{ alert.title }}</p>
    </div>
    </v-alert>
    </v-container>
</template>

<script>
export default {
    name: 'tabla-alert-comp',
    props: {
        alert:{
            type:Object,
            required:true,
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