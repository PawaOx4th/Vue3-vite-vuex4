import { ActionTree } from "vuex";
import { Rootstate } from "../../type";
import { User, MUTATION } from "../user/user_type";

export const actions: ActionTree<User, Rootstate> = {
  changeName({ commit }): any {
    commit(MUTATION.CHANGE_NAME, "123");
  },
};
