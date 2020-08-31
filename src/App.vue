<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './TodoList/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
#app .container{
padding:10px;
}
</style>
