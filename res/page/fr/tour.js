export default {
 name: "tour", 

data() {return {

imgIndex: 0,

tours: [
			{
				"id": "001",
				"title": "vist Pyramids",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2278.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25 }
  },
			{
				"id": "002",
				"title": "submarin",
				"category": "diving",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2280.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "003",
				"title": "diving",
				"category": "diving",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2281.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
	},
			{
				"id": "004",
				"title": "pyramids",
				"category": "diving",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2282.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
  			{
  			"id": "005",
				"title": "city tour",
				"category": "car",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2283.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "006",
				"title": "boat",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2284.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "007",
				"title": "submarin",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2285.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "008",
				"title": "diving",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2286.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
	},
			{
				"id": "009",
				"title": "pyramids",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2287.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "010",
				"title": "city tour",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2288.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "011",
				"title": "boat",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2289.JPG",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "012",
				"title": "submarin",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2290.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  },
			{
				"id": "013",
				"title": "diving",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2291.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
	},
			{
				"id": "014",
				"title": "pyramids",
				"category": "safari",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				"imgs": [
					"/res/pics/tours/IMG_2292.WEBP",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250",
					"https://via.placeholder.com/300x250"
					],
				"prices":{"A": 15, "CH": 25}
  }

  
  ]


}}, // data


i18n: {messages: {
    en: { 
      tour: 'tour',
      submarin: 'submarin',
    },
    
    
    it: { 
      tour: 'tour',
      submarin: 'tour',
    },
    
    
    ru: { 
      tour: 'tour',
      submarin: 'tour',
    },
    
    
    ar: {
      tour: 'رحلة',
      submarin: 'الغواصة',
      },
    
}},


template: `


<template v-for="(t,x) in tours">
  

<h1 v-text="$t('tour') +': '+ $t(t.title)"></h1>
  
  
  
<div class="medium-padding">
<img class="responsive" :src="t.imgs[imgIndex]">
</div>

 
<div class="row scroll">
<img v-for="(img,index) in t.imgs" :class="index === imgIndex ? 'no-opacity round extra' : 'extra medium-opacity' " :src="img" @click="imgIndex = index">
 </div>
 
<div class="space"></div>
 
<div><table class="border">
		<tr><td>Header</td><td>Header</td></tr>
		<tr><td>Cell</td><td>Cell</td></tr>
		<tr><td>Cell</td><td>Cell</td></tr>
		<tr><td>Footer</td><td>Footer</td></tr>
</table></div>
  
<div><p v-text="t.description"></p></div>

<div>
	
<a class="row wave"><i class="green-text">check_circle</i>
<div>two way transportation</div></a>

<a class="row wave"><i class="green-text">check_circle</i>
<div>free cancilation</div></a>

<a class="row wave"><i class="green-text">check_circle</i>
<div>free wifi</div></a>

</div>

<nav>

<router-link class="button responsive" to="/booking" exact>
Book now
</router-link>

</nav>

  
  
  
</template>

`, //template

}