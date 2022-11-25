<template>
  <div v-if="show" class="col-sm py-2">
    <div
      class="card"
      :class="{ 'border-primary bg-primary text-light': top, shadow: top }"
    >
      <div class="card-body">
        <h4 class="card-title" :class="[top ? 'text-light' : 'text-muted']">
          {{ resume.title }}
        </h4>
        <hr />
        <p class="card-text">{{ resume.content }}</p>
        <a
          v-if="resume.url != 'null'"
          :href="resume.url"
          target="_blank"
          :class="[top ? 'text-light' : 'text-primary']"
          >link</a
        >
      </div>
    </div>
  </div>
  <div v-if="!show" class="col-sm"></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    top: Boolean,
    resume: Object,
    show: Boolean,
  },
  setup(props) {},
};
</script>

<style scoped></style>
