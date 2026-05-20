export default {
  
name: "flight",


data() {return {

view: 0,


from: "ssh",
to: "cai",
way: "one",
flightType: "",

date: "",
returnDate: "",

dests: [
{name: "sharm", value: "ssh"},
{name: "cairo", value: "cai"},
{name: "Others", value: ""},
],


adult: 1,
child: 0,
infant: 0,


service : "wego",

services : [
{name: "WeGo.com", value: "wego"},
{name: "cairo", value: "cai"},
{name: "Others", value: ""},
],


}}, // data



computed: {


wego() { 
  if(this.way === "one"){ return `https://eg.wego.com/en/flights/searches/${this.from}-${this.to}-${this.date}/economy/${this.adult}a:${this.child}c:${this.infant}i`} 
  
  else if (this.way === "two"){ return `https://eg.wego.com/en/flights/searches/${this.from}-${this.to}-${this.date}:${this.to}-${this.from}-${this.returnDate}/economy/${this.adult}a:${this.child}c:${this.infant}i` }

  else if (!this.from || !this.to){ return `https://eg.wego.com/en/flights/searches/` }  
  
  
},
    
  link() { return `https://someurl.com/?from=${this.from}&to=${this.to}&date=${this.date}`; }

},//computed





/*
${new Date(this.date).getDate()}
${new Date(this.date).getMonth() + 1}
${new Date(this.date).getFullYear()}
*/



methods: {

count_up(value,max){if (this[value] < max){this[value]++}},
count_down(value,min){if (this[value] > min){this[value]--}},


submit(){ window.open(this.wego) },
},//methods





mounted() {


}, //mounted



i18n: {
  messages: {
      en: { name: 'hello english' },
      it: { name: 'hello cio' },
      ru: { name: 'hello russian' },
      ar: { name: 'مرحبا' },
  }
},


template: `


{{wego}}



<template v-if="view === 0">
<div class="row medium-height middle-align center-align">

  <article class="small-width border" @click="view = 1">
    <h5 class="link">Tracking </h5>
    <p>track flight times</p>
  </article>
  
  
  <article class="small-width border" @click="view = 2">
    <h5 class="link">Booking</h5>
    <p>search flight prices</p>
  </article>
  
  </div>
</template>





<template v-else-if="view === 1">
tracking
</template>









<template v-else-if="view === 2">

<form @submit.prevent="submit()" class="">

<fieldset>
  <legend>Destination</legend>
  
  <div class="row">
  
    <div class="max">
      <div class="field border label">
        <select v-model="from" required>
        
    <template v-for="d in dests">
      <option v-if="d.value != to" :value="d.value" v-text="d.name"></option>
    </template>
        
        </select>
        <label>from</label>
      </div>
    </div>
    
    <div class="max">
      <div class="field border label">
        <select v-model="to" required>
        
  <template v-for="d in dests">
    <option v-if="d.value != from" :value="d.value" v-text="d.name"></option>
  </template>
        
        </select>
        <label>to</label>
      </div>
    </div>
    
  </div>
</fieldset>

  
 <template v-if="to && from">
 
 
<fieldset>
  <legend>Select</legend>

  
<label class="radio">
<input type="radio" v-model="way" value="one" />
<span>One Way</span>
</label>

<label class="radio">
<input type="radio" v-model="way" value="two" />
<span>Two Ways</span>
</label>

</fieldset>




<fieldset>
  <legend>Select</legend>

  
<label class="radio">
<input type="radio" v-model="flightType" value="one" />
<span>econ</span>
</label>

<label class="radio">
<input type="radio" v-model="flightType" value="two" />
<span>first class</span>
</label>

</fieldset>

  
 <fieldset>
  <legend>Count</legend> 
  
  
<div class="row">
  
<button @click="count_down('adult',1)" type="button" class="chip circle transparent extra"><i>person_remove</i></button>

<span class="bold large-text" v-text="adult"></span>
<span v-if="adult === 1">Person</span>
<span v-else>People</span>

<button @click="count_up('adult',9)" type="button" class="chip circle transparent extra"><i>person_add</i></button> 

</div>



<div class="row">
  
<button @click="count_down('child',0)" type="button" class="chip circle transparent extra"><i>person_remove</i></button>

<span class="bold large-text" v-text="child"></span>
<span v-if="child <= 1">child</span>
<span v-else>childeren</span>

<button @click="count_up('child',9)" type="button" class="chip circle transparent extra"><i>person_add</i></button> 

</div>




<div class="row">
  
<button @click="count_down('infant',0)" type="button" class="chip circle transparent extra"><i>person_remove</i></button>

<span class="bold large-text" v-text="infant"></span>
<span v-if="infant <= 1">infant</span> 
<span v-else>infants</span>

<button @click="count_up('infant',9)" type="button" class="chip circle transparent extra"><i>person_add</i></button> 

</div>
 
 
 </fieldset>
 
 
  



<div class="field label prefix border">
  <i>today</i>
  <input type="date" v-model="date" required>
  <label>Flight Date</label>
</div>




<div class="field label prefix border" v-show="way === 'two'">
  <i>today</i>
  <input  type="date" v-model="returnDate" :required="way === 'two'">
  <label>Return Date</label>
</div>






</template>


<div class="row center-align">


<div class="field border label suffix small">
<select v-model="service" required>
<option v-for="s in services" :value="s.value" v-text="s.name"></option>
</select>
<label>Service</label>
<i>link</i>
</div>





<button type="submit" value="submit" class="border round max primary">
<i>search</i> <span>Search</span>
</button> 

</div>
  
 


</form>




<div class="scroll row">


<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border round  ">button</button>
<button class="border   ">button</button>

</div>



</template>










`, //template


}



