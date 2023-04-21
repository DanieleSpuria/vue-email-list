const {createApp} = Vue;

createApp({
  data(){
    return{
     url: 'https://flynn.boolean.careers/exercises/api/random/mail' 
    }
  },

  methods: {
    api() {
      axios.get(url)
      .then (result => {
        console.log(result.data);
      })
    }
  },

  mounted() {
    api()
  }
}).mount('#app')