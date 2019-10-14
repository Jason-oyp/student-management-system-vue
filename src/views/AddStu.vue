<template>
  <!-- 新增学生信息 -->
  <div class="add-stu content-main" id="add-stu">
    <form class="form-mes">
      <div>
        <label for="name">姓名：</label>
        <input type="text" id="name" name="name" v-model="addStuInfor.name" />
      </div>
      <div>
        <label for>性别：</label>
        <input type="radio" checked id="male" name="sex" value="0" @change="changeValue('sex',0)" />
        <label for="male" class="sex">男</label>
        <input type="radio" id="female" name="sex" value="1" @change="changeValue('sex',1)" />
        <label for="female" class="sex">女</label>
      </div>
      <div>
        <label for="id-card">学号：</label>
        <input type="text" id="id-card" name="sNo" v-model="addStuInfor.sNo" />
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input type="text" id="email" name="email" v-model="addStuInfor.email" />
      </div>
      <div>
        <label for="born">出生年：</label>
        <input type="text" id="born" name="birth" v-model="addStuInfor.birth" />
      </div>
      <div>
        <label for="phone">手机号码：</label>
        <input type="text" id="phone" name="phone" v-model="addStuInfor.phone" />
      </div>
      <div>
        <label for="address">地址：</label>
        <input type="text" id="address" name="address" v-model="addStuInfor.address" />
      </div>
      <div class="button">
        <input type="button" class="submit" value="提交" @click="addStudent" />
        <input type="reset" />
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/api/index.js";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      addStuInfor: {
        sex: 0,
        name: "",
        phone: "",
        email: "",
        address: "",
        birth: "",
        sNo: ""
      }
    };
  },
  computed: {
    ...mapState('page',["page", "size"])
  },
  methods: {
    ...mapActions('other',["addStu"]),
    ...mapActions('page',['getStuList']),
    addStudent() {
      // console.log(this.addStuInfor);
      this.addStu(this.addStuInfor).then(res => {
        if (res === "添加成功") {
          Object.assign(this.addStuInfor, {
            sex: 0,
            name: "",
            phone: "",
            email: "",
            address: "",
            birth: "",
            sNo: ""
          });
          this.$router.push("/stuList");
          this.getStuList({ page: this.page, size: this.size });
        }
      });
    },
    changeValue(key, value) {
      this.addStuInfor[key] = value;
    }
  }
};
</script>
