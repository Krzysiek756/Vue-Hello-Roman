const {
  createApp
} = Vue

const NewComponent = {
  name: 'NewComponent',
  template: `<h2> Best It vlog on youtube</h2>`
}

createApp({
  data() { //reaktywność delarujemy różne funckje później łączymy je z template
    return {
      name: 'Adam',

      style: {
        color: '#fab',
      }
    }
  },

  // template: ` 
  //         <div>
  //         <h1>Start Program</h1> 
  //         <NewComponent />
  //         </div>


  // `,

  methods: {



  },
  computed: {

  },
  components: {
    NewComponent
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}).mount('#app')


// v-bind łączy data z templaitem