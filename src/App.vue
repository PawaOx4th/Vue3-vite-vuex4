<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <pre>{{ count }}</pre>
  <button @click="increment()">Handle in Store</button>
  <hr />
  <pre>{{ userName }}</pre>
  <button @click="changeName()">changeName</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "./store/index";
// import { useStore } from "vuex";
// import { key } from "./store/index";
import { MUTATION } from "./store/index";
import { MUTATION as MUTATION_USER } from "./store/modules/user/user_type";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    const userName = store.state.user;

    function increment() {
      store.commit(MUTATION.INCREMENT);
    }

    function changeName() {
      store.commit(`user/${MUTATION_USER.CHANGE_NAME}`);
    }

    return {
      count,
      userName,
      increment,
      changeName,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 5rem;
}
</style>
