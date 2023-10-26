<template>
  <div>
    <BasicLoading v-show="isLoading" />
    <div class="title-area">
      <img src="@/assets/img/rocket.png" alt="rocket" />
      <h2>フリーランススタート</h2>
    </div>
    <div class="main-area">
      <div class="search-area">
        <p>案件・求人数 {{ totalCount }} 件 ({{ updatedDate }}) 更新</p>
        <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
        <div class="search-box">
          <BasicInput
            @inputValue="inputvalue($event)"
            title="フリーワードで案件検索"
            type="email"
            name="email"
            :value="user.email"
            class="inputBox"
          />
          <LinkButton
            @clickSubmit="clickbutton"
            text="案件を検索"
            href="#"
            class="searchButton"
          />
        </div>
        <div class="middle-area">
          <h3>おすすめキーワード</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(keyword, key) in keywords"
              :key="key"
              @clickSubmite="clickbutton"
              :text="keyword.name"
              class="button"
            />
          </div>
          <h3>開発言語・環境でフリーランス求人・案件を探す</h3>
          <h3>開発言語</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(develop, key) in languages.develops"
              :key="key"
              @clickSubmite="clickbutton"
              :text="develop.name"
              class="button"
            />
          </div>
          <h3>フレームワーク</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(framework, key) in languages.frameworks"
              :key="key"
              @clickSubmite="clickbutton"
              :text="framework.name"
              class="button"
            />
          </div>
          <h3>インフラ</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(infrastructure, key) in languages.infrastructures"
              :key="key"
              @clickSubmite="clickbutton"
              :text="infrastructure.name"
              class="button"
            />
          </div>
          <h3>デザイン</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(design, key) in languages.designs"
              :key="key"
              @clickSubmite="clickbutton"
              :text="design.name"
              class="button"
            />
          </div>
          <h3>その他</h3>
          <div class="groupOfButtons">
            <Chip
              v-for="(other, key) in languages.others"
              :key="key"
              @clickSubmite="clickbutton"
              :text="other.name"
              class="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { LinkButton } from "@/components/atoms/Buttons";
import { BasicInput } from "@/components/atoms/Inputs";
import { postRegistration } from "@/api/user";
import { BasicLoading } from "@/components/atoms/Loadings";
import {
  getMattersTotalCount,
  getMattersKeyword,
  getMattersProgrammingLanguage,
} from "@/api/matter";
import { Chip } from "@/components/atoms/Chips";
import { ref } from "vue";
// import { ChildProcess } from "child_process";
// import dayjs from "dayjs-nuxt";
// modeuleに書いているのでimport必要なし
const user = reactive({
  email: "",
  password: "",
});
const dayjs = useDayjs();
const totalCount = ref(0);
const updatedDate = ref("");
const keywords = ref({});
const languages = reactive({
  develops: [],
  frameworks: [],
  infrastructures: [],
  designs: [],
  others: [],
});
(async () => {
  try {
    const countData = await getMattersTotalCount();
    totalCount.value = countData.total_count;
    updatedDate.value = dayjs(countData.date).format("MM/DD");
    keywords.value = await getMattersKeyword();
    const programmingLanguageData = await getMattersProgrammingLanguage();
    languages.develops = programmingLanguageData.develops;
    languages.frameworks = programmingLanguageData.frameworks;
    languages.infrastructures = programmingLanguageData.infrastructures;
    languages.designs = programmingLanguageData.designs;
    languages.others = programmingLanguageData.others;

    console.log(totalCount.value);
    console.log(updatedDate.value);
    console.log(keywords.value);
    console.log(languages.develops);
    console.log(languages.frameworks);
    console.log(languages.infrastructures);
    console.log(languages.designs);
    console.log(languages.others);
  } catch {
    alert("error");
  }
})();
//即時関数()

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

.main-area {
  margin: 0 10%;
}
.search-box {
  display: flex;
  justify-content: center;
  height: 10%;
  margin: 0 auto;
}
.inputBox {
  height: 45px;
}
.searchButton {
  width: 150px;
  height: 20px;
  text-align: center;
  margin: 4% 0 0 0;
  padding: 1.5%;
  border-radius: 40px;
  border-color: black;
  font-size: 1em;
  background-color: #66cdaa;
}

h3 {
  margin: 3% 0 0 0;
  padding: 0;
}

.groupOfButtons {
  display: flex;
  padding: 0;
  margin: 1% 0 0 0;
}

.button {
  height: 15px;
  text-align: center;
  line-height: 1%;
  margin: 0 1% 0 0;
  padding: 1.1%;
  border-radius: 40px;
  font-size: 1em;
  border: solid 1px;
}
</style>