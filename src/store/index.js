import { createStore } from "vuex";
import candosModule from './modules/candos/index.js'
const store= createStore;

export default store({
    modules:{
        candos:candosModule
    }
})