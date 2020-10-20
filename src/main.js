import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false;
let app = "";

firebase.initializeApp( {
  apiKey: "AIzaSyATWUU9K7X1aXKpf6z37700lGzFIvfj6as",
  authDomain: "vue-auth-system-ea23e.firebaseapp.com",
  databaseURL: "https://vue-auth-system-ea23e.firebaseio.com",
  projectId: "vue-auth-system-ea23e",
  storageBucket: "vue-auth-system-ea23e.appspot.com",
  messagingSenderId: "554038240117",
  appId: "1:554038240117:web:5207c462aaef304d21e93c"
});
// Initialize Firebase

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')

  }
})
