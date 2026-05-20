export default {
  
name: "cars",

data() {return {



}}, // data


computed: {

cars() { return this.$store.cars },

},


watch: {
  
cars(newValue){
	sessionStorage.setItem("cars", JSON.stringify(newValue)) 
},

'$store.favorite.cars'(newValue){ 
	localStorage.setItem("fav-cars", JSON.stringify(newValue))
},

},//watch


methods: {

async fetchData() {if (this.cars.length === 0){
this.$store.cars = await (await fetch("/res/content/json/cars.json")).json()
}},




}, //methods


created() {

this.fetchData();


},//created


mounted() {




}, //mounted
  
  


components: {

"appN": { template: ` <h1>title</h1> `},

}, //components



template: `



<h2 class="center-align">Cars</h2>

<div class="grid">

<div class="s12 m6 l4" v-for="(c,x) in cars" data-aos="fade-right">
  <article class="no-padding medium-elevate">
  
   <div class="grid no-space">
    <div class="s6">
     <img class="responsive" :src="c.img">
     <div class="absolute top left right padding top-shadow white-text">
      <h5 v-text="c.model"></h5>
      <p v-text="c.description"></p>
     </div>
    </div>
    <div class="s6">
     <div class="padding">
      <strong class="large-text right-align top-align" v-text="c.prices.W"></strong>
      <div>
       <a><i>person</i>
        <div class="badge border" v-text="c.size.p"></div>
       </a>
       <a><i>trip</i>
        <div class="badge border" v-text="c.size.b"></div>
       </a>
      </div>

      <div class="space"></div>

      <nav>
       <button class="border round absolute right" :data-ui="'#car' + x">details</button>
      </nav>
     </div>
    </div>
   </div>
  </article>
</div>


</div>






<template v-for = "(c,x) in cars": key = "c.model" >
  <dialog :class="['modal', {'top': $store.view === 's'}]" :id="'car' + x">

   <header class="fixed">
    <nav class="right-align no-space">
     <button :data-ui="'#car' + x" class="border"><i>close</i></button>
    </nav>
   </header>


   <div>
<div class="tabs">
  <a :data-ui="'#tA_car' + x" class="active"><i>add_road</i> per way </a>
  <a :data-ui="'#tB_car' + x"><i>schedule</i> per hour </a>
  <a :data-ui="'#tC_car' + x"><i>sailing</i> Tours </a>
</div>

<div :id="'tA_car' + x" class="page padding active top scroll">
<table>
 <thead>
  <tr><th>dest</th><th>one Way</th><th>two Ways</th></tr>
 </thead>
 <tbody>
  <tr>
   <td>airport</td><td v-text="c.prices.W"></td><td v-text="c.prices.WW"></td>
  </tr>
  <tr>
   <td>old market</td><td v-text="c.prices.W"></td><td v-text="c.prices.WW"></td></tr>
  <tr>
   <td>hadaba</td> <td v-text="c.prices.W"></td> <td v-text="c.prices.WW"></td>
  </tr>
 </tbody>
</table>
</div>




<div :id="'tB_car' + x" class="page padding top">
<table>
  
 <thead>
  <tr><th>one Hour</th><th>two Hour</th></tr>
 </thead>
 <tbody>
  <tr>
   <td v-text="c.prices.H"></td> <td v-text="c.prices.HH"></td>
  </tr>
 </tbody>
 </table>
</div>

<div :id="'tC_car' + x" class="page padding top">
<a class="button responsive" href="/en/tours.html" exact>
  <i>link</i> <span>available tours</span>
</a>
</div>

   </div>


<footer class="bottom fixed">
    <nav class="left-align no-space">
     
  <a href="https://wa.me/201550579981">
  <button :data-ui="'#car' + x" class="border round"> <i>phone</i><span>book now</span></button>
      
     </a>

    </nav>
   </footer>



</dialog>

</template>



`, //template

}
