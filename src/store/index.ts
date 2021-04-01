import { InjectionKey } from "@vue/runtime-core";
import {
  createLogger,
  createStore,
  StoreOptions,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { user } from "./modules/user/user";
import { Rootstate } from "./type";

// export interface State {
//   count: number;
//   user: string;
// }

export enum MUTATION {
  INCREMENT = "INCREMENT",
}

export const key: InjectionKey<Store<Rootstate>> = Symbol();

const mainStore: StoreOptions<any> = {
  state: {
    count: 0,
  },
  mutations: {
    [MUTATION.INCREMENT](state, payload) {
      state.count++;
    },
  },
  actions: {
    setIncrement({ commit }) {
      commit(MUTATION.INCREMENT);
    },
  },
  modules: {
    user: {
      namespaced: true,
      ...user,
    },
  },
  plugins: [createLogger()],
};

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore(mainStore);
