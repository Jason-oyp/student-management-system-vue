<template>
    <table>
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>手机号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="item in stuList" :key="item.id">
          <td>{{item.sNo}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex ? "女" : "男"}}</td>
          <td>{{item.email}}</td>
          <td>{{new Date().getFullYear() - item.birth}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>
            <button class="btn edit" @click="editStu(item)">编辑</button>&nbsp;
            <button class="btn delete" @click="deleteStudent(item.sNo)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import api from "@/api/index.js";
import {mapState,mapActions, mapMutations} from 'vuex';
export default {
  mounted() {
    this.getStuList({page:this.page,size:this.size});
  },
  computed:{
    ...mapState('page',['stuList','page','size'])
  },
  methods:{
      editStu(res){
          this.setEditInfor(res);
          this.setShowModal(true);
      },
      deleteStudent(res){
        window.confirm("确定要删除该学生信息吗？") ? this.deleteStu(res).then((res)=>{
          if(res === "删除成功"){
            if(this.stuList.length === 1){
              this.getPage(this.page - 1 ? this.page - 1 : 1);
            }
            this.getStuList({page:this.page,size:this.size});
          }
        }): "";

      },
      ...mapActions('page',['getStuList','getPage']),
      ...mapActions('other',['deleteStu']),
      ...mapMutations('other',['setEditInfor','setShowModal'])
  }
};
</script>

<style>

</style>