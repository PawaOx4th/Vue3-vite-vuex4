import { Module } from "vuex";
import { Rootstate } from "../../type";
import { actions } from "./actions";
import { mutations } from "./mutation";
import { User, MUTATION } from "./user_type";

export const user: Module<User, Rootstate> = {
  state: {
    name: "Hello World",
  },
  mutations,
  // : {
  //   [MUTATION.CHANGE_NAME](state, payload) {
  //     state.name = "xxx";
  //   },
  // },
  // actions,
};
