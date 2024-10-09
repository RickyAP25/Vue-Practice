<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import { ref } from 'vue'

const counter = ref(0)
const message = ref('Hello World!')
const titleClass = ref('title')

const text = ref('')

const awesome = ref(true)

let id = 0;
const newTodo = ref('')
const todos = ref([
  {id: id++, text: 'Learn HTML', done: true},
  {id: id++, text: 'Learn JavaScript', done: true},
  {id: id++, text: 'Learn Vue', done: false}
])

function increment(){
  counter.value++
}

// function onInput(e){
//   text.value = e.target.value
// }

function toogle(){
  awesome.value = !awesome.value
}

function addTodo(){
  todos.value.push({id: id++, text: newTodo.value})
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <h1 :class="titleClass">{{ message }}</h1>
    <button @click="increment">Count is: {{ counter }}</button>
    <!-- <input type="text" :value="text" v-on:input="onInput" placeholder="Input text"> -->
    <input type="text" v-model="text" placeholder="Input text">
    <p>{{ text }}</p>

    <button @click="toogle">Toogle</button>
    <h1 v-if="awesome">Vue is awesome</h1>
    <h1 v-else>Oh no 😢</h1>

    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="New Todo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>

  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
} */
/* 
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

 .title{
  color: blue;
 }

 input{
  margin-top: 30px;
  display: block;
 }
</style>
