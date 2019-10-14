<template>
  <!-- 展示学生信息 -->
  <div class="stu-list content-main" id="stu-list">

    <content-header />
    <TableList />

    <page />
    <transition>
      <Modal  v-show="showModal"/>
    </transition>
    
  </div>
</template>

<script>

import contentHeader from "@/components/stuList/ContentHeader.vue";
import Page from "@/components/stuList/Page.vue";
import Modal from "@/components/stuList/Modal.vue";
import TableList from "@/components/stuList/TableList.vue";
export default {
  components:{
      contentHeader,
      Page,
      Modal,
      TableList
  },
  computed:{
    showModal(){
      return this.$store.state.other.showModal;
    }
  },
  created(){
    this.$store.commit("page/setKeyword","");
  }
};
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
  transition: all 0.4s;
}
</style>