const {createApp} = Vue;

createApp({
  data(){
    return{
     url: 'https://flynn.boolean.careers/exercises/api/random/mail',
     mail: ''
    }
  },

  methods: {
    api() {
      axios.get(this.url)
      .then (result => {
        this.mail = result.data.response;
      })
    },

  },

  mounted() {
    this.api()
  }
}).mount('#app')