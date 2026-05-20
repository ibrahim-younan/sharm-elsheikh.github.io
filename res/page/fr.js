export default {
data() {return {

  navLinks:[
    {name: "Home", icon: "home", url: "/fr/home"},
    {name: "Tours", icon: "sailing", url: "/"},
    {name: "Contact", icon: "call", url: "/fr/contact"},
  
  ]

}},

watch: {},
computed: {},
methods: {},
created() {},
mounted() {},

template: `

<appHeader :links="navLinks"></appHeader>

<main class="responsive"> 
<RouterView />
</main>

<appNav :links="navLinks"></appNav>

  `
};

