// home.js
export default {
  name: "contact",

  i18n: {
    messages: {
      en: { hi: 'hello ibrahim world', price: 33 },
      fr: { hi: 'Bonjour le monde', price: 44 },
      pl: { hi: 'Привет мир', price: 55 },
      ar: { hi: 'مرحبا بالعالم', price: 66 },
    }
  },
  template: `
<h2>contact Us</h2>

 <nav class="">   
 <a class="button border" :href="'tel:' + $store.WAnumber"><i>phone</i></a>
 <a class="button border" :href="'whatsapp://send?phone=' + $store.WAnumber"><i><img src="/res/pics/svg/whatsapp.svg" alt="icon"></i></a>
 <a class="button border" href=""><i>mail</i><span>Email</span></a>
</nav>

<br />





<h2 class="h3">Contact Our Team:</h2>

<div class="grid">
<team v-for="t in 7" img="res/pics/pic.svg" name="Younan" description="english" phone="01550579981" whatsapp="201550579981"></team>
</div>





  `
};
