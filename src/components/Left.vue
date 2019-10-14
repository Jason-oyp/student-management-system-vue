<template>
    <div class="left-list">
        <dl class="menu-list">
            <dt>学生管理</dt>
            <router-link tag="dd" @click.native="changeClass(1)" class="list" :class="{active: acFlag}" data-id='stu-list' :to="{name:'stuList'}">学生列表</router-link>
            <router-link tag="dd" @click.native="changeClass(2)" class="add" :class="{active: !acFlag}" data-id='add-stu' :to="{name:'addStu'}">新增学生</router-link>
        </dl>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed:{
        ...mapState('other',['acFlag'])
    },
    methods:{
        changeClass(e){
            if(e === 1){
                this.$store.commit('other/setAcFlag',true);
            }else{
                this.$store.commit('other/setAcFlag',false);
            }
        }
    }
}
</script>