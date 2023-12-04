import {createStore} from 'vuex';
import todoApp  from './modules/todoApp'

export default createStore({
  modules :{
    todoApp
  }
}) 
