//attivazione di vue tools web
Vue.config.devtools = true;

//struttura generale vue
var app = new Vue({
  el: '#app',
  data: {
    mails:[]
  },
  mounted(){
    
    for(let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=> {
        this.mails.push(result.data.response);
      });
    }

  }
});
