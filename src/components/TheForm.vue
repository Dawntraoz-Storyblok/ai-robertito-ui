<template>
  <form class="container mx-auto max-w-4xl" @submit.prevent="aiQuestion">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-4xl mx-auto py-10">
      <img src="../assets/ai_robertito.png" class="max-w-sm rounded-full shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">AI Robertito</h1>
        <div class="form-control">
          <label class="label" for="question">
            <span class="label-text text-md">Ask your question to the master.</span>
          </label>
          <input id="question" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
            v-model="question" />
        </div>
      </div>
    </div>
  </form>
  <div v-if="results" class="max-w-2xl mx-auto rounded-xl bg-primary base-300 text-primary-content h-96 p-8">
    {{ results }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const question = ref();
const results = ref();

const aiQuestion = () => {
  fetch(
    `http://localhost:3000/question?question=${question.value}`,
    { headers: { 'Content-Type': 'application/json' } },
  )
    .then(async response => {
      results.value = (await response.json()).answer
    });
}
</script>

<style lang="scss" scoped>

</style>