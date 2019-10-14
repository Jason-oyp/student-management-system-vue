<template>
  <div class="mask">
  <div class="clickModal" @click="changeShowModal"></div>
      <div class="edit-content">
        <h3>
          编辑信息
          <span class="close" @click="changeShowModal">x</span>
        </h3>
        <form class="edit-form">
          <div>
            <label for="name">姓名：</label>
            <input type="text" id="name" name="name" :value="editInfor.name" @input="changeValue('name',$event.target.value)" />
          </div>
          <div>
            <label for>性别：</label>
            <input type="radio" :checked="editInfor.sex === 0" id="male" name="sex" value="0" @change="changeValue('sex',0)"/>
            <label for="male" class="sex">男</label>
            <input type="radio" :checked="editInfor.sex === 1" id="female" name="sex" value="1" @change="changeValue('sex',1)"/>
            <label for="female" class="sex">女</label>
          </div>
          <div>
            <label for="id-card">学号：</label>
            <input type="text" id="id-card" name="sNo" :value="editInfor.sNo" disabled/>
          </div>
          <div>
            <label for="email">邮箱：</label>
            <input type="text" id="email" name="email" :value="editInfor.email" @input="changeValue('email',$event.target.value)"/>
          </div>
          <div>
            <label for="born">出生年：</label>
            <input type="text" id="born" name="birth" :value="editInfor.birth" @input="changeValue('birth',$event.target.value)"/>
          </div>
          <div>
            <label for="phone">手机号码：</label>
            <input type="text" id="phone" name="phone" :value="editInfor.phone" @input="changeValue('phone',$event.target.value)"/>
          </div>
          <div>
            <label for="address">地址：</label>
            <input type="text" id="address" name="address" :value="editInfor.address" @input="changeValue('address',$event.target.value)"/>
          </div>
          <div class="button">
            <input type="submit" class="edit-submit" @click="submit"/>
            <input type="reset" />
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  data(){
    return {
      stuInfor:{}
    }
  },
  methods:{
    changeShowModal(){
      this.$store.commit("other/setShowModal",false);
    },
    submit(e){
      e.preventDefault();
      let stuData = Object.assign({},this.editInfor,this.stuInfor);
       this.updateStu(stuData).then(()=>{
         this.getStuList({page:this.page,size:this.size});
       });
    },
    changeValue(key,value){
      this.stuInfor[key] = value;
    },
    ...mapActions('other',['updateStu']),
  ...mapActions('page',['getStuList'])
  },
  computed:{
    ...mapState('page',["size","page"]),
    ...mapState('other',["editInfor"])
  }
}
</script>

<style>

</style>