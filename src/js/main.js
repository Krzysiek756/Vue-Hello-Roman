const {
  createApp
} = Vue

const NewComponent = {
  name: 'NewComponent',
  data() {

    return {
      myColor: {
        color: 'green',
      },
    }

  },

  template: `
  <div>
  <h2 :style="myColor">Best It vlog on youtube</h2>
  <label for='color'>Change Color</label>
  <input name="color" id="color" v-model="myColor.color">
  </div>
  `,
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
    handleClick() {
      alert('Hello Roman')
    }


  },
  computed: {

  },
  components: {
    NewComponent
  },

  mounted() {

  }
}).mount('#app')


// v-bind łączy data z templaitem v-bind:style="myColor" === :style="myColor"
// v-on === @click 
// v-model spina input z innym elementem i łączy ja zmienna















// //Podstawy

// const {
//   createApp
// } = Vue

// const NewComponent = {
//   name: 'NewComponent',
//   data() {

//     return {
//       myColor: {
//         color: 'green',
//       },
//     }

//   },

//   template: `
//   <div>
//   <h2 :style="myColor">Best It vlog on youtube</h2>
//   <label for='color'>Change Color</label>
//   <input name="color" id="color" v-model="myColor.color">
//   </div>
//   `,
// }

// createApp({
//   data() { //reaktywność delarujemy różne funckje później łączymy je z template
//     return {
//       name: 'Adam',

//       style: {
//         color: '#fab',
//       }

//     }
//   },

//   // template: ` 
//   //         <div>
//   //         <h1>Start Program</h1> 
//   //         <NewComponent />
//   //         </div>


//   // `,

//   methods: {
//     handleClick() {
//       alert('Hello Roman')
//     }


//   },
//   computed: {

//   },
//   components: {
//     NewComponent
//   },

//   mounted() {

//   }
// }).mount('#app')


// // v-bind łączy data z templaitem v-bind:style="myColor" === :style="myColor"
// // v-on === @click 
// // v-model spina input z innym elementem i łączy ja zmienna