
const addOneItem = (state, todoItem) => {
    const obj = {completed : false, item : todoItem}; 
    state.todoItems.push(obj);
}
const removeOneItem = (state,  payload) => {
    state.todoItems.splice(payload.index,1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
}
const clearAllItems = (state) => {
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}