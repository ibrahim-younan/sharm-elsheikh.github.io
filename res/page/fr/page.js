export default {
  
name: "page",

data() {return {

url: "http://iniy.blogspot.com/feeds/posts/default?alt=json-in-script&callback=fetchData",

content:"",

}}, // data




methods: {

async fetchData() {
this.content = await (await fetch(this.url)).json()
},




}, //methods


mounted() {


this.fetchData();


}, //mounted
  
  



template: `

{{content}}



test

`, //template

}
