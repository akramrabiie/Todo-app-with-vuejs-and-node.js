<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item v-on:click="loadNotes">Load todos </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container style="height:100%">
      <b-card
        header="Todo List"
        header-tag="header"
        style="height:100%;ovrflow:auto"
      >
        <div role="group">
          <b-form-input
            id="input-live"
            v-model="newTodoText"
            :state="textState"
            @keyup.enter.native="addNew"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter new to do then press Enter"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 10 letters
          </b-form-invalid-feedback>
        </div>
        <hr />
        <div
          v-if="todos.length"
          class="overflow-auto mt-2"
          style="height:600px;"
        >
          <div v-for="(todo, index) in todos" :key="todo.id" :todo="todo">
            {{ index + 1 }} -
            <TodoItem :todo="todo" @remove="removeTodo"></TodoItem>
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import TodoItem from "./TodoItem/TodoItem";
import api from "./Api";
export default {
  name: "TodoList",
  components: { TodoItem },
  data: () => {
    return {
      todos: [],
      newTodoText: "",
      nextTodoId: 0,
      textState: null
    };
  },
  computed: {},
  methods: {
    loadNotes() {
      api.getAll().then(response => {
        this.todos = JSON.parse(response.data);
        this.nextTodoId = this.todos.length;
      });
    },
    removeTodo(todo) {
      alert('remove todo "' + todo.title + '" ?');
      let $this = this;

      api.removeForId(todo.id).then(() => {
        //Instead of this, we can refetch data from server here
        $this.todos.map((todoItem, i) => {
          if (todoItem.id === todo.id) {
            $this.todos.splice(i, 1);
          }
        });
      });
    },
    addNew() {
      const trimmedText = this.newTodoText.trim();
      this.textState = trimmedText.length > 10 ? true : false;
      if (this.textState) {
        this.todos.push({
          id: this.nextTodoId++,
          title: trimmedText
        });
        this.newTodoText = "";
        this.textState = null;
      }
    }
  },
  mounted() {
    this.loadNotes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
