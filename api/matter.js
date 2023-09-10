import { Get, Post } from "./api";

export const getMattersTotalCount = () => {
  return Get(null, "/mattersTotalCount");
};

export const getMattersKeyword = () => {
  return Get(null, "/mattersKeyword");
};

export const getMattersProgrammingLanguage = () => {
  return Get(null, "/mattersProgrammingLanguage");
};
