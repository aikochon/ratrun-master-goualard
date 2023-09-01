<template>
  <div>
    <button @click="$emit('clickSubmit')" type="button">{{ text }}</button>
  </div>
</template>
  
  <script setup>
const props = defineProps({
  text: { type: String, default: "ボタン" },
  background: { type: String, default: "white" },
});
const emit = defineEmits(["clickSubmit"]);
</script>
  
  <style lang='scss' scoped>
button {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  font-size: 100%;
  background: v-bind(background);
}
</style>