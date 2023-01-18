const {
  createApp
} = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!!22',
      title: 'titrle22222222222',
      test: 'test1222',
      image1: './src/img/1.jpg',
      image2: './src/img/2.jpg',

      zmiennaX: false,
      activeIndex: 0,
      number1: 0,
      items: [{
          title: 'item 1',
          id: 1,
          image: './src/img/1.jpg',
        },
        {
          title: 'item 2',
          id: 2,
          image: './src/img/2.jpg',
        },
        {
          title: 'item 3',
          id: 3,
          image: './src/img/3.jpg',
        },
        {
          title: 'item 4',
          id: 4,
          image: './src/img/4.jpg',
        },

      ]

    }
  },
  methods: {

    inkrement() {
      this.number1++;
    }

  },
  computed: {
    fullTitle() {
      return this.message + ' ' + this.title
    },
    image() {
      return this.items[this.activeIndex].image
    }
  },
  mounted() {

  }
}).mount('#app')



const panels = document.querySelectorAll('.panel');


console.log(panels)



panels.forEach((panel) => {


  panel.addEventListener('click', () => {

    removeClassActive();
    panel.classList.add('active');

  })



})


function removeClassActive() {


  panels.forEach(panel => {


    panel.classList.remove('active');

  })
}