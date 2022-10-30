<template></template>

<script>
import { ref, readonly, provide } from "vue";

export default {
  name: "TodoListContainer",
  setup() {
    const todos = ref([]);
    provide("todos", readonly(todos));
    const initTodos = (initTodos) => {
      todos.value = initTodos;
    };

    const addTodo = (todo, date) => {};
    const removeTodo = (id) => {};
    const completeTodo = (id) => {};

    provide("addTodo", addTodo);
    provide("removeTodo", removeTodo);
    provide("completeTodo", completeTodo);
  },
};
</script>

<style scoped></style>
