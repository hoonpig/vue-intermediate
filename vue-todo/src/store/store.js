import {createStore} from 'vuex';


const storage = {
  fetch(){
    const arr = [];

    if(localStorage.length>0){
      for(let i = 0 ; i < localStorage.length ; i++){
        console.log(localStorage.key(i));
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){          
          arr.push( JSON.parse(localStorage.getItem( localStorage.key(i))) );
        }
      }
    }
    return arr;
  }
}

export default createStore({
  state :{
      headerText : 'TODO IT!'
      , todoItems : storage.fetch()
  }
  , getters :{
    storedTodoItems(state){
      return state.todoItems;
    }
  }  
  , mutations :{
    addOneItem(state, todoItem){
      const obj = {completed : false, item : todoItem}; 
      state.todoItems.push(obj);
    }
    , removeOneItem(state,  payload){
      state.todoItems.splice(payload.index,1);
    }
    , toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    }
    , clearAllItems(state){
      state.todoItems = [];
    }
  }
}) 
