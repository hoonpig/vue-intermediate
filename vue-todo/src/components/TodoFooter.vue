<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn"  v-on:click="clearTodo(todoItem, index)">
      <i class="fa-solid fa-trash-alt">all clear</i>
    </span>
  </div>
</template>

<script>
export default {
  methods : {
    clearTodo : function(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width:8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: pink ;
  border-radius: 5px;
  margin:0 auto;
}
.clearAllBtn{
  color:#e20303;
  display: block;
}
</style>