// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  let app; 
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyB42LDrxMLiB6RSK7gLYCesYeXfT8NM5U0",
    authDomain: "yogamouvement-4c327.firebaseapp.com",
    databaseURL: "https://yogamouvement-4c327.firebaseio.com",
    projectId: "yogamouvement-4c327",
    storageBucket: "yogamouvement-4c327.appspot.com",
    messagingSenderId: "682316798563"
  };
  
  firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

