const {
  createApp
} = Vue

createApp({
  data() { //reaktywność delarujemy różne funckje później łączymy je z template
    return {
      name: 'Adam',
    }
  },

  // template: ` // używamy Puga do template
  //       <h1>Start Program</h1> 

  // `,

  methods: {



  },
  computed: {

  },

  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}).mount('#app')