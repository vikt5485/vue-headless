export const state = () => ({
  wpBikes: [],
  homePage: [],
})

export const mutations = {
  updatewpBikes: (state, payload) => {
    state.wpBikes = payload
  },
  updateHome: (state, payload) => {
    state.homePage = payload
  },
}
