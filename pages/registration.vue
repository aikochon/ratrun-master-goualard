<template>
  <div>
    <h2>新規会員登録</h2>
    <BasicInput
      @inputValue="inputvalue($event)"
      title="メールアドレス"
      type="email"
      name="email"
      :value="user.email"
      class="inputbox"
    />
    <BasicInput
      @inputValue="inputvalue($event)"
      title="パスワード"
      type="password"
      name="password"
      :value="user.password"
      class="inputbox"
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
import { postRegistration } from "@/api/user";
const user = reactive({
  email: "",
  password: "",
});
const clickbutton = async () => {
  try {
    const res = await postRegistration(user);
    alert("新規登録に成功しました。画面を遷移します。");
    router.push("/login");
  } catch (error) {
    //
    alert("新規登録に失敗しました。");
  }
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
  height: 450px;
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
  margin: 10% auto;
  padding: 0;
  line-height: 20px;
  border-radius: 10px;
  border-color: palevioletred;
  font-size: 20px;
  background-color: palevioletred;
}
.inputbox {
  height: 10%;
  margin: 5% auto;
}
</style>