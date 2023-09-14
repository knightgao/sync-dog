<script setup lang="ts">
import {useCanvas} from './hooks/useCanvas.ts';
import {onMounted,onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUnmounted, onUpdated} from "vue";

const {a} = useCanvas();

onBeforeMount(() => {
  console.log("APPonBeforeMount")
})

onBeforeUpdate(() => {
  console.log("APPonBeforeUpdate")
})
onUpdated(() => {
  console.log("APPonUpdated")
})
onBeforeUnmount(() => {
  console.log("APPonBeforeUnmount")
})
onUnmounted(() => {
  console.log("APPonUnmounted")
})


onMounted(() => {
  console.log("APPonMounted")
})
console.log(a);
</script>

<template>
  <div>22</div>
</template>

<style scoped>
</style>
