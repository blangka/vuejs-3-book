<template>
  <label for="userName">이름 : </label>
  <input type="text" name="userName" v-model="result.name" placeholder="이름" />
  <br />
  <label>나이 : </label>
  <input type="text" name="age" v-model="result.age" placeholder="나이" />
  <br />
  <label>성별 : </label>
  <label>남성</label>
  <input type="radio" name="gender" v-model="result.gender" value="male" />
  <label>여성</label>
  <input type="radio" name="gender" v-model="result.gender" value="female" />
  <br />
  <span v-for="hobby in hobbyOptions" :key="hobby">
    <label>{{ hobby }}</label>
    <input type="checkbox" v-model="result.hobby" :value="hobby" />
  </span>
  <br />
  <label>국가 : </label>
  <select v-model="result.country">
    <option v-for="country in countryOptions" :key="country" :value="country">
      {{ country }}
    </option>
  </select>
  <br />
  <!-- 실전 Prcatice 해답 -->
  날짜 : <input type="date" v-model="result.date" /><br />
  시간 : <input type="time" v-model="result.time" /><br />
  색깔 : <input type="color" v-model="result.color" /><br />
  범위 : <input type="range" min="1" max="100" v-model="result.range" /><br />
  <br />
  <div>
    <h3>결과</h3>
    <hr />
    {{ result }}
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const name = "";
    const age = 0;
    const gender = "male";
    const hobby = ["스포츠"];
    const password = "";
    const country = "한국";
    const countryOptions = ["한국", "미국", "중국", "일본", "기타"];
    const hobbyOptions = ["스포츠", "음악감상", "영화감상", "독서", "여행"];

    // Practice를 위한 변수 선언
    const date = "";
    const time = "";
    const color = "#ffffff";
    const range = 1;

    const result = reactive({
      name,
      age,
      gender,
      hobby,
      password,
      country,
      date,
      time,
      color,
      range,
    });
    return {
      result,
      countryOptions,
      hobbyOptions,
    };
  },
};
</script>

<style scoped></style>
