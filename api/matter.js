import { Get, Post } from "./api";

export const getMattersTotalCount = () => {
  return Get(null, "/mattersTotalCount");
};
