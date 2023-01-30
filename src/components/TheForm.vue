<template>
  <form class="mb-10">
    <div class="form-control w-full max-w-xs">
      <label class="label" for="question">
        <span class="label-text">Post your question here</span>
      </label>
      <input id="question" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="question" />
    </div>
  </form>
  <div class="rounded-xl bg-gray-200 h-[100px] p-4">
    {{ question }}: {{ results }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const question = ref();
const results = ref();

const response = ref();

</script>

<style lang="scss" scoped>

</style>