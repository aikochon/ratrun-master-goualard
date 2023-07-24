<template>
  <div>
    <h2>新規会員登録</h2>
    <BasicInput
      @inputValue="inputvalue($event)"
      title="メールアドレス"
      type="email"
      name="email"
      :value="user.email"
    />
    <BasicInput
      @inputValue="inputvalue($event)"
      title="パスワード"
      type="password"
      name="password"
      :value="user.password"
    />
    <LinkButton
      @clickSubmit="clickbutton"
      text="同意して新規登録する(無料)"
      href="#"
      class="button"
    />
  </div>
</template>
  
<script setup>
import { LinkButton } from "@/components/atoms/Buttons";
import { BasicInput } from "@/components/atoms/Inputs";
const user = reactive({
  email: "",
  password: "",
});
const clickbutton = () => {
  console.log(user);
};
const inputvalue = (data) => {
  user[data.name] = data.value;
  // if (data.name == "email") {
  //   user.email = data.value;
  // } else {
  //   user.password = data.value;
  // }
  console.log(data);
};
</script>
  
<style lang="scss" scoped>
div {
  justify-content: center;
  border: solid 1px lightgray;
  width: 700px;
  height: 400px;
  margin: 200px auto;
  padding: 20px;
}
div h2 {
  padding: 0 20px;
}
.button {
  width: 60%;
  height: 15%;
  text-align: center;
  margin: 50px auto;
  padding: 0;
  line-height: 20px;
  border-radius: 10px;
  border-color: palevioletred;
  font-size: 20px;
  background-color: palevioletred;
}
</style>