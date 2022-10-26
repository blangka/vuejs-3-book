<template>
  <InputTest
    v-model="input"
    placeholder="Type and press ENTER"
    test="testInput"
  />
</template>

<script lang="ts">
import InputTest from "@/components/InputTest.vue";
import { ref } from "vue";

export default {
  components: {
    InputTest,
  },
  setup() {
    const input = ref("");
    return {
      input,
    };
  },
};
</script>

<style lang="scss" scoped></style>
