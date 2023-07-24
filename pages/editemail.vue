<template>
  <div>
    <h2>メールアドレス変更</h2>
    <BasicInput
      @inputValue="inputvalue($event)"
      title="新しいメールアドレス"
      type="email"
      name="email"
      :value="user.email"
    />
    <BasicInput
      @inputValue="inputvalue($event)"
      title="現在のパスワード"
      type="password"
      name="password"
      :value="user.password"
    />
    <div class="button">
      <LinkButton text="キャンセル" href="#" class="button-cancel" />
      <LinkButton
        @clickSubmit="clickbutton"
        text="保存する"
        href="#"
        class="button-save"
      />
    </div>
  </div>
</template>
      
<script setup>
import { LinkButton } from "../components/atoms/Buttons";
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
  display: flex;
  height: 20px;
  margin: 0 auto;
  padding: 0;
  border: none;
  justify-content: center;
  vertical-align: middle;
}
.button-cancel {
  width: 45%;
  height: 280%;
  text-align: center;
  margin: 30px auto;
  padding: 0;
  line-height: 20px;
  font-size: 20px;
  border-radius: 10px;
  border-color: lightgray;
  background-color: lightgray;
}
.button-save {
  width: 45%;
  height: 280%;
  text-align: center;
  margin: 30px auto;
  padding: 0;
  line-height: 20px;
  border-radius: 10px;
  font-size: 20px;
  border-color: palevioletred;
  background-color: palevioletred;
}
</style>