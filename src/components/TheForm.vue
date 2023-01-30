<template>
  <form type="submit" class="container mx-auto max-w-4xl" @submit.prevent="aiQuestion">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-4xl mx-auto py-6 md:py-10">
      <img src="../assets/ai_robertito.png" class="mx-auto w-64 md:w-auto max-w-full rounded-full shadow-2xl" />
      <div class="text-center md:text-start">
        <h1 class="text-5xl font-bold">AI Robertito</h1>
        <label for="question" class="block py-3">
          <span class="text-md">Ask your question to the master.</span>
        </label>
        <input id="question" name="question" type="search" placeholder="Type here" class="input input-bordered w-full max-w-xs" autocomplete="on" v-model="question" />
        <button type="submit" class="btn btn-ghost btn-circle -translate-x-12 translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  </form>
  <Markdown v-if="results" :source="results" class="w-full max-w-4xl mx-auto rounded-xl bg-primary-focus text-white p-8 prose prose-xl" />
</template>

<script setup>
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';

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