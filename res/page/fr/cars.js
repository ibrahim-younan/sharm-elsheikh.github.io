export default {
  
name: "cars",

data() {return {

cars: [
			
			{
				"id": "001",
				"model": "toyota",	"description": "2010",
				"img": "/res/pics/cars/car1.JPG",
				"size": {"p": "4", "b": "2"},
				"prices":{"W": 15, "WW": 25, "H": 25, "HH": 5}
  },
			{
				"id": "002",
				"model": "mercedes",	"description": "S class",
				"img": "/res/pics/cars/car2.JPG",
				"size": {"p": "4", "b": "2"},
				"prices":{"W": 25, "WW": 45, "H": 100, "HH": 200}
  },
			{
				"id": "003",
				"model": "sedan",	"description": "2017",
				"img": "/res/pics/cars/car3.JPG",
				"size": {"p": "2", "b": "2"},
				"prices":{"W": 15, "WW": 25, "H": 100, "HH": 200}
  },
			{
				"id": "004",
				"model": "mini bus",	"description": "up to 12 people",
				"img": "/res/pics/cars/mini_bus.JPG",
				"size": {"p": "13", "b": "12"},
				"prices":{"W": 25, "WW": 35, "H": 100, "HH": 200}
	},
			{
				"id": "005",
				"model": "bus",	"description": "up to 17 people",
				"img": "/res/pics/cars/bus.JPG",
				"size": {"p": "20", "b": "30"},
				"prices":{"W": 150, "WW": 250, "H": 200, "HH": 400}
  }
  
  ],

}}, // data





mounted() {


}, //mounted
  
  


i18n: {messages: {
      en: { 
        cars: 'cars',
        way: 'Per Way',
        hour: 'Per Hour',
        tours: 'Tours',
        },
      
      fr: { 
        cars: 'السيارات المتاحة',
        way: 'بالتوصيلة',
        hour: 'بالساعة',
        tours: 'رحلات',
        
        
        },
      
}},


template: `


<h2 class="center-align">Cars</h2>

<div class="grid">

<div class="s12 m6 l4" v-for="(c,x) in cars" :key="c.id" data-aos="fade-right">
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






<template v-for="(c,x) in cars" :key="c.id" >
  <dialog :class="['modal', {'top': $store.Device.display === 'small'}]"  :id="'car' + x">

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



<router-link class="button responsive" to="/tours" exact>
  <i>link</i> <span>available tours</span>
</router-link>

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
