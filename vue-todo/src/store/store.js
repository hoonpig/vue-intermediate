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
  , mutations :{
    addOneItem(state, todoItem){
      const obj = {completed : false, item : todoItem}; 
      localStorage.setItem(todoItem , JSON.stringify(obj));
      state.todoItems.push(obj);
    }
    , removeOneItem(state,  todoItem, index){
      localStorage.removeItem(todoItem);
      state.todoItems.splice(index,1);
    }
    , toggleOneItem(state, todoItem, index){
        console.log('remove : ' , index , " value : " , todoItem) ;
        state.todoItems[index].completed = !state.todoItems[index].completed
        localStorage.removeItem(todoItem);
        localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    }
    , clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  }
})
