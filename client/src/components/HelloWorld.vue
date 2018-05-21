<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import http from '../services/http';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your MEVN App'
    }
  },
  methods: {
    async loadApiData(){
      try{
        const result = await http.get('https://jsonplaceholder.typicode.com/posts');
        console.log('API results', result);
      }catch(err){ 
        console.log('Error', err);
      }
    }
  },
  created() {
    console.log('Created hook was called');
    this.loadApiData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
