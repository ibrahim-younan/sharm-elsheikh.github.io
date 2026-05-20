
export default {

data() {return {
  booking: { name: "", hotel: "", date: "", adult: 1, child: 0, infant: 0, note: "" },
}},




computed: {

tour() { return this.$store.tours.filter(T => T.id === this.$route.params.id)[0] },


message() { return `
Website_Booking:
Tour:${this.tour.title}
Name:${this.booking.name}
Hotel:${this.booking.hotel}
Checkout:${this.booking.date}
Adults:${this.booking.adult}
Children:${this.booking.child}
Infants:${this.booking.infant}
Notes:${this.booking.note}`
},


}, //computed


methods: {

},//methods



created() {

},//created


mounted() {


},


template: `


<div>

<img class="responsive top-round" :src="$store.pics +'tours/'+ tour.imgs[0]" loading="lazy"/>
<button class="absolute bottom left no-round" data-ui="#gallary"><i>photo_library</i> View all photos</button>

</div>



<div class="fill padding">
   <h3 class="h5 bold" v-text="tour.title"></h3>
   <p><i>timer</i> <span v-text="tour.time"></span></p>
</div>



<dialog :class="$store.device.display !== 'large' ? 'max' : ''" id="gallary">

  <header class="row padding fixed">
   <div class="max"><h5>Gallary</h5></div>
    <button class="border" data-ui="#gallary"><i>close</i></button>
  </header>
 <div>

<div class="grid">
<img class="s12 m6 l12 responsive round" v-for="(i, index) in tour.imgs" :src="$store.pics +'tours/' + i" loading="lazy"/>
</div>
</div>

</dialog>



<h3>What to expect</h3>
<p v-text="tour.description"></p>



<h3>Where / Meeting point:
</h3>
<p>Hotel pick-up service is included. Please provide your hotel information, your email and phone number at the time of booking.</p>




<div class="grid">

<div class="s12 m6 l6">
<h3>included</h3>
<ul class="list border">
  <li v-for="item in tour.included" :key="item">
    <i class="green-text">check_circle</i><h6 v-text="item" class="small"></h6>
  </li>
</ul>
</div>


<div class="s12 m6 l6">
<h3>not included</h3>
<ul class="list border">

 <li v-for="item in tour.notIncluded" :key="item">
    <i class="red-text">cancel</i><h6 v-text="item" class="small"></h6>
  </li>

</ul>
</div>


</div>



<div class="grid center-align">


<article class="s12 m6 l4 no-round no-elevate">
  <div class="row">
    <i>check_circle</i>    
    <div class="max">
      <h5>Provider</h5>
      <div><b>Travco</b> Group for Tourism</div>
    </div>
  </div>
</article>

<article class="s12 m6 l4 no-round no-elevate">
  <div class="row">
    <i>check_circle</i>    
    <div class="max">
      <h5>Booking fees</h5>
      <div>No extra fees are applied to this booking.</div>
    </div>
  </div>
</article>

<article class="s12 m6 l4 no-round no-elevate">
  <div class="row">
    <i>check_circle</i>    
    <div class="max">
      <h5>Cancellation policy</h5>
      <div>Receive a <b>100%</b> refund if you cancel up to <b>24</b> hours before the experience begins.</div>
    </div>
  </div>
</article>

</div>



<div v-if="$store.tours.filter(tourItem => tourItem.id !== tour.id && tourItem.tags?.some(tag => tour.tags?.includes(tag))).length">

<div class="large-space"></div>

<h3 class="small">Related Tours</h3>
<div class="row scroll">

<article class="no-padding no-round small-width no-elevate" v-for="t in $store.tours.filter(tourItem => tourItem.id !== tour.id && tourItem.tags?.some(tag => tour.tags?.includes(tag) ))" :key="t.id">
  <img class="responsive medium" :src="$store.pics +'tours/'+ t.imgs[0]" loading="lazy">
  <div class="padding">
    <RouterLink class="link" :to="'/en/tours/' + t.id">
    <h5 class="medium-text" v-text="t.title"></h5>
    </RouterLink>
  </div>
</article>

</div>
</div>



<nav class="bottom fixed small-padding">
<button data-ui="#booking" class="responsive no-round primary extra small-elevate">
  <i>calendar_today</i><span>book now</span>
</button>
</nav>


<dialog :class="$store.device.display !== 'large' ? 'max' : ''" id="booking">
  <header class="row padding fixed">
   <div class="max"><h5>Booking</h5></div>
    <button class="border" data-ui="#booking"><i>close</i></button>
  </header>
 <div>



<div>
  <div class="tabs">
    <a data-ui="#booking-whatssapp" class="active"> <i><img src="/res/pics/svg/whatsapp.svg" alt="icon"></i> <span>Use whatsapp</span></a>
    <a data-ui="#booking-mail"> <i>mail</i> <span>Use Email</span></a>
  </div>

<div id="booking-whatssapp" class="page padding active">
<form class="padding" :action="$store.device.type === 'mobile' ? 'whatsapp://send' : 'https://wa.me/'" target="_blank">
  	<input name="phone" v-model="$store.WAnumber" type="hidden">
  	<input name="text" v-model="message" type="hidden">

<div class="field label prefix border">
  <i>edit</i>
  	<input required v-model="booking.name" type="text">
  <label>Name</label>
</div>

<div class="field label prefix border">
  <i>hotel</i>
  	<input required v-model="booking.hotel" type="text">
  <label>Hotel</label>
</div>

<div class="field label prefix border">
  <i>today</i>
  <input type="date" v-model="booking.date">
  <label>Date</label>
</div>


<div class="field label prefix border">
  <i>person</i>
  	<input required v-model="booking.adult" type="number">
  <label>Adults</label>
</div>

<div class="field label prefix border">
  <i>boy</i>
  	<input v-model="booking.child" type="number">
  <label>Children</label>
</div>

<div class="field label prefix border">
  <i>breastfeeding</i>
  	<input v-model="booking.infant" type="number">
  <label>Infants</label>
</div>

  <div class="field textarea label border">
	<textarea v-model="booking.note"></textarea>
	<label>Notes</label>
</div>
  
  
  
<div class="row">
<button class="border no-round black-text" type="submit" value="submit"><i><img src="/res/pics/svg/whatsapp.svg" alt="icon"></i>Send</button>
<button type="reset" value="reset" class="border"><i>close</i> clear</button> 
</div>


</form>
</div>

 




<div id="booking-mail" class="page padding">
<form class="padding" :action="'mailto:' + $store.mail" target="_blank">
  	<input name="subject" value="website tour booking" type="hidden">
  	<input name="body" v-model="message" type="hidden">


<div class="field label prefix border">
  <i>edit</i>
  	<input required v-model="booking.name" type="text">
  <label>Name</label>
</div>

<div class="field label prefix border">
  <i>hotel</i>
  	<input required v-model="booking.hotel" type="text">
  <label>Hotel</label>
</div>

<div class="field label prefix border">
  <i>today</i>
  <input type="date" v-model="booking.date">
  <label>Date</label>
</div>


<div class="field label prefix border">
  <i>person</i>
  	<input required v-model="booking.adult" type="number">
  <label>Adults</label>
</div>

<div class="field label prefix border">
  <i>boy</i>
  	<input v-model="booking.child" type="number">
  <label>Children</label>
</div>

<div class="field label prefix border">
  <i>breastfeeding</i>
  	<input v-model="booking.infant" type="number">
  <label>Infants</label>
</div>


  <div class="field textarea label border">
	<textarea v-model="booking.note"></textarea>
	<label>Notes</label>
</div>
  
  
  
<div class="row">
<button class="border no-round black-text"  type="submit" value="submit" class=""><i>mail</i>Send</button>
<button type="reset" value="reset" class="border"><i>close</i> clear</button> 
</div>


</form>
</div>

</div>

<div class="large-space"></div>

</dialog>





<div class="small-space"></div>
<h3>Tours tags:</h3>
<div class="small-padding">
<nav class="wrap">
  <RouterLink v-for="t in $store.tags" class="button chip round medium" :to="'/en/tag/' + t">
    <i>tag</i>
    <span v-text="t"></span>
    <span class="badge none" v-text="$store.tours.filter(tour => tour.tags.some(tag => tag === t)).length"></span>
  </RouterLink>
</nav>
</div>






`, //template

}