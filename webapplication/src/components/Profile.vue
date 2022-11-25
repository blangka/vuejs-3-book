<template>
  <div class="container pt-5">
    <div>
      <p class="fs-1 mb-0">{{ user_data.name }}</p>
    </div>
    <div>
      <p class="fs-4">{{ user_data.email }}</p>
    </div>

    <div
      class="row no-gutters"
      v-for="(d, index) in user_data.resume"
      :key="index"
    >
      <Card :top="!index" :resume="d" :show="index % 2 == 1" />
      <div class="col-sm-2 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col" :class="[index ? 'border-right' : '']" />
          <div class="col" />
        </div>
        <h1>
          <span
            class="badge badge-pill border"
            :class="[!index ? 'bg-primary text-light' : 'bg-light text-dark']"
            >{{ new Date(d.date).getFullYear() }}</span
          >
        </h1>
        <div class="row h-50">
          <div
            class="col"
            :class="[
              index != user_data.resume.length - 1 ? 'border-right' : '',
            ]"
          />
          <div class="col" />
        </div>
      </div>
      <Card :top="!index" :resume="d" :show="index % 2 == 0" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import useAxios from "@/modules/axios.js";
import Card from "@/components/Card.vue";

export default {
  name: "Profile",
  setup() {
    const store = useStore();
    const { axiosGet } = useAxios();

    const onSuccess = (data) => {
      store.dispatch("about_me/setAboutMeData", data.data);
    };
    axiosGet("/db/about-me", onSuccess);

    const user_data = computed(() => store.getters["about_me/user_data"]);

    return {
      user_data,
    };
  },
  components: {
    Card,
  },
};
</script>
