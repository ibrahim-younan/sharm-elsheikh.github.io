// home.js
export default {
  name: "tag",
  i18n: {
    // This allows local translations just for this file
    messages: {
      en: { hii: 'hello ibrahim world' },
      fr: { hii: 'Bonjour le monde' }
    }
  },
template: `
  
<h1>hima tag</h1>


 <RouterLink class='link' to="/tag/hima?lang=en">tag</RouterLink>
 <br />

{{ $route.params.tag }}
{{ $route.query.lang}}



<router-link :to="{ path: '/', query: { ...$route.query } }">
  Go to home
</router-link>



`//template
};
