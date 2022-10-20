import Vue from 'vue'
import Vuex from 'vuex'
import randomPokemon from './modules/pokemon'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      randomPokemon
    }
})
