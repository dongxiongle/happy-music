const state: UserState = {
  loginType: '',
  account: {},
  token: '',
  profile: {},
  bindings: [],
  loginStatus: false
};

const getters = {};

const mutations = {
  SETLOGINTYPE(state: UserState, loginType: UserState['loginType']) {
    state.loginType = loginType;
  },
  SETACCOUNT(state: UserState, account: UserState['account']) {
    state.account = account;
  },
  SETTOKEN(state: UserState, token: UserState['token']) {
    state.token = token;
  },
  SETPROFILE(state: UserState, profile: UserState['token']) {
    state.profile = profile;
  },
  SETBINDINGS(state: UserState, bindings: UserState['bindings']) {
    state.bindings = bindings;
  },
  SETLOGINSTATUS(state: UserState, loginStatus: UserState['loginStatus']) {
    state.loginStatus = loginStatus;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
