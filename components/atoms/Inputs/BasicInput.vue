<template>
  <div class="basicinput">
    <label>
      {{ title }}
    </label>
    <input
      @input="$emit('inputValue', { name: name, value: $event.target.value })"
      :type="type"
      :name="name"
      :value="value"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: "",
  },
});
const emits = defineEmits(["inputValue"]);
</script>

<style lang="scss" scoped>
.basicinput {
  width: 100%;
  height: 60px;
  border: none;
  margin: 10px auto;
}
label {
  font-size: 20px;
  font-weight: bold;
}
input {
  width: 95%;
  height: 40px;
  border-radius: 10px;
  margin: 10px auto;
  border: solid 1px lightgray;
  background-color: lightblue;
}
</style>