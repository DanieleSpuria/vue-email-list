const {createApp} = Vue;

createApp({
  data(){
    return{
     url: 'https://flynn.boolean.careers/exercises/api/random/mail',
     mail: '',
     arrayMail: [],
     load: false
    }
  },

  methods: {
    apiLoop() {
      for(let i = 0; i < 10; i++) {
        axios.get(this.url)
        .then (result => {
          this.mail = result.data.response;
          this.arrayMail.push(this.mail);
        })
        .catch (error => {
           console.log(error);
        })
      };
    },

    apiLoad() {
      axios.get(this.url)
      .then (result => {
        this.load = true;
      })
      .catch (error => {
        console.log(error);
      })
    }
  },

  mounted() {  
    this.apiLoop();  
    this.apiLoad()
  }
}).mount('#app')