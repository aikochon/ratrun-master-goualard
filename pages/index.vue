<template>
  <div>
    <div class="title-area">
      <img src="@/assets/img/rocket.png" alt="rocket" />
      <h2>フリーランススタート</h2>
    </div>
    <div class="main-area">
      <p>案件・求人数 {{ totalCount }} 件</p>
      <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
      <div class="search-area">
        <BasicInput
          @inputValue="inputvalue($event)"
          title="フリーワードで案件検索"
          type="email"
          name="email"
          :value="user.email"
        />
        <LinkButton
          @clickSubmit="clickbutton"
          text="案件を検索"
          href="#"
          class="button"
        />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { LinkButton } from "@/components/atoms/Buttons";
import { BasicInput } from "@/components/atoms/Inputs";
import { postRegistration } from "@/api/user";
import { getMattersTotalCount } from "@/api/matter";
const user = reactive({
  email: "",
  password: "",
});
const totalCount = ref(0);
const updatedDate = ref("");
(async () => {
  try {
    const countData = await getMattersTotalCount();
    totalCount.value = countData.total_count;
    updatedDate.value = countData.date;
    console.log(totalCount.value);
    console.log(updatedDate.value);
  } catch (error) {}
})();
//即時関数
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
  margin: 0 auto;
  padding: 20px;
}
.title-area {
  display: flex;
  justify-content: center;
  width: 700px;
  height: 30px;
  margin: 0 auto;
  padding: 20px;
}
.title-area h2 {
  padding: 0 40px;
}
.title-area img {
  width: 32px;
  height: 32px;
}
div div p {
  text-align: center;
}
.search-area {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 100px;
  margin: 0 auto;
  padding: 20px;
}
.button {
  width: 150px;
  height: 30px;
  text-align: center;
  margin: 50px auto;
  padding-top: 15px;
  line-height: 30px;
  border-radius: 10px;
  border-color: black;
  font-size: 20px;
  background-color: palevioletred;
}
</style>