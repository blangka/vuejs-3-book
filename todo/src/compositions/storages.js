import { reactive, toRefs } from "vue";

/*
 * localstorage 에서 key를 이용하여 값을 가져오는 함수
 * */
export const useStorage = () => {
  const KEY = "my-todo-list";
  const storageObj = reactive({ storage_id: 0 });
  const loadTodos = (initTodos) => {
    const tempTodos = JSON.parse(localStorage.getItem(KEY) || "[]");
    tempTodos.forEach((todo, idx) => {
      Object.assign(todo, { id: idx });
    });
    storageObj.storage_id = tempTodos.length;
    initTodos(tempTodos);
  };
  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value));
  };
  return {
    ...toRefs(storageObj),
    loadTodos,
    saveTodos,
  };
};
