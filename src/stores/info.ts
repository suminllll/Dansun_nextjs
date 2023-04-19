import { atom } from "recoil";

export const writingInfo = atom({
  key: "writing_info",
  default: {
    no: 0,
    name: "",
    pw: "",
    title: "",
    contents: "",
  },
});
