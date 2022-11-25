<template>
  <NavBar />
  <Profile />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Profile from "@/components/Profile.vue";

export default {
  name: "ProfileView",
  components: {
    NavBar,
    Profile,
  },
};
</script>

<style scoped></style>
