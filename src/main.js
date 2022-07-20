import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  data(){
    return{
      productos: [{ id:0, producto: "Manzana", Precio: "8$", img:'assets/melon' },
            { id: 1, producto: "Pera", Precio: "7$", },
            { id: 2, producto: "Naranja", Precio: "3$", },
            { id: 3, producto: "Bananas", Precio: "6$", },
            { id: 4, producto: "Mango", Precio: "10$", },
            { id: 5 ,producto: "Melon", Precio: "9$", }
            ]
    }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
