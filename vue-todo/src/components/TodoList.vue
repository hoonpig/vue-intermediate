<template>
  <div>
    <ul>
      <li v-for="(todoItem , index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i 
          class="checkBtn fas fa-check" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="this.toggleOneItem({todoItem, index})"
        >
          check
        </i>&nbsp;&nbsp;
        <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn"  v-on:click="this.removeOneItem({todoItem, index})">
          <i class="fa-solid fa-trash-alt">delete</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  computed :{
    ...mapGetters(['storedTodoItems'])
  }
  ,methods:{
    ...mapMutations(['removeOneItem','toggleOneItem'])
  }

}
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding:0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn{
    line-height: 45px;
    color:#62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted{
    color:#b3adad;
  }
  .removeBtn{
    margin-left: auto;
    color:#de4343;
  }
  .textCompleted{
    text-decoration: line-through;
    color:#b3adad
  }
</style>