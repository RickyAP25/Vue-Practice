// const head = document.querySelector("#heading")
// const text = document.querySelector("#text-input");
// // const btn = document.querySelector("#button");

// function change(){
//     head.innerHTML = text.value;
// }

// // btn.addEventListener("click", change)
// text.addEventListener("input", change);


// JQuery
$(document).ready(function() {
    $('#text-input').on('input', function() {
        const kalimat = $(this).val()
        $("#heading").text(kalimat);
    });
});

// GPT Vue
// new Vue({
//     el: '#app',
//     data: {
//       headingText: ''  // Model untuk mengikat data input ke heading
//     }
//   });

// Vue
const { createApp } = Vue.createApp({
    data() {
      return {
        message: '',
        isVisible: false,
        // isVisible2: false
      }
    },
    methods: {
        toogleBox(){
            this.isVisible = !this.isVisible
        },
        greet(){
            console.log(this.message)
        }
    }
  })
  .component('login-form', {
    template: `
        <form @submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <button>Log In</button>
        </form>
    `,
    data(){
        return {
            title: 'Login Form',
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.email, this.password)
        }
    }
  })
  .mount('#app')