<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer"  v-on:click="addTodo">
          <i class="fa-solid fa-plus addBtn">add</i>
      </span>
      <alertModal v-if="showModal" @close="showModal = false">
        <!-- you can use custom content here to overwritedefault content-->
        <template #header>
            경고
            <i class="fa-solid fa-plus" @click="showModal=false">close</i>
        </template>
        <template #body>빈값을 입력 할 수 없습니다.</template>
      </alertModal>
  </div>
</template>

<script>
import alertModal from './common/AlertModal.vue'

export default {
    data(){
        return  {
            newTodoItem : ""
            , showModal : false
        }
    }
    , methods : {
        addTodo(){
            if(this.newTodoItem !== ""){
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }   
        }
        , clearInput(){
            this.newTodoItem = '';
        }
    }
    , components :{
        alertModal
    }
}
</script>

<style scoped>
input:focus{
    outline : none;
}

.inputBox{
    background : pink;
    height : 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    height: 40px;
    width: 80%;
    border-style: none;
    font-size:0.9rem;
}

.addContainer {
    float : right;
    background : linear-gradient(to rigth, #6478FB, #8763FB);
    display: block;
    width : 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color : white;
    width:50px;
    vertical-align: middle;
}
</style>