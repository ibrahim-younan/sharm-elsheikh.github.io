// home.js
export default {
  name: "home",

  i18n: {
    messages: {
      en: { hii: 'hello ibrahim world', price: 33 },
      fr: { hii: 'Bonjour le monde', price: 44 },
      pl: { hii: 'Привет мир', price: 55 },
      ar: { hii: 'مرحبا بالعالم', price: 66 },
    }
  },
  template: `
    <div>
      <h1>price</h1>





{{$t('hii')}}
  <p v-t="'hello'"></p>


    </div>

<br />
<br />
<br />

<i18n-n tag="span" :value="$tm('price')" format="currency" ></i18n-n>




  `
};
