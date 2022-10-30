import { inject } from "vue";

/*
 * 데이터를 필터링 하는 것이 필요하다.
 * 꼭 필요하다고 생각하는 4가지 필터를 구성한다.
 * 1. 날짜가 지났지만 완료하지 않은 작업들
 * 2. 오늘 해야 할 작업들
 * 3. 오늘 해야 할 일들 중 완료한 작업들
 * 4. 모든 날을 아우르는 상태와 상관 없는 작업들
 *
 * 다음과 같은 방법으로 정렬 될것이다.
 * 1. 최근 날짜의 데이터가 더 위에 나온다
 * 2. 같은 날이라면 뒤 늦게 입력한 데이터가 더 위에 나온다.
 * */
export const useFilter = () => {
  const today = inject("today");

  // 정렬 함수
  const fnSort = (a, b) => {
    const aDate = Date.parse(a.date);
    const bDate = Date.parse(b.date);
    if (aDate > bDate) return 1;
    if (aDate < bDate) return 0;
    return a.id - b.id;
  };

  const getPendingTodos = (todos) => todos.value
    .filter((todo) => todo.date < today && !todo.completed)
    .slice()
    .sort(fnSort);

  const getActiveTodayTodos = (todos) => todos.value
    .filter((todo) => todo.date === today && !todo.completed)
    .slice()
    .sort(fnSort);

  const getCompletedTodayTodos = (todos) => todos.value
    .filter((todo) => todo.date === today && todo.completed)
    .slice()
    .sort(fnSort);

  const getAllTodayTodos = (todos) => getActiveTodayTodos(todos).concat(getCompletedTodayTodos(todos)).slice().sort(fnSort);

  // slice를 사용하는 이유는 배열을 복제하기 위해서이다. 원본 데이터에 영향을 주지 않기 위함이다.
  const getAllTodos = (todos) => todos.value.slice().sort(fnSort);

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  };
};
