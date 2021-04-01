import { MutationTree } from "vuex";
import { User, MUTATION } from "../user/user_type";

export const mutations: MutationTree<User> = {
  [MUTATION.CHANGE_NAME](state, payload) {
    state.name = "XXX";
  },
};
