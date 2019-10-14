<template>
    <div class="search">
                <label for="search-word">关键字搜索:</label>&nbsp;
                <input type="text" id="search-word" v-model="keyword" @keyup.enter="search">&nbsp;
                <button id="search-submit" @click="search">搜索</button>
    </div>

</template>

<script>
export default {
    data(){
        return {
            keyword:""
        }
    },
    methods:{
        
        search(){
            this.$store.commit('page/setKeyword',this.keyword);
            if(!this.keyword){
                this.$store.dispatch('page/getPage',1);
                this.$store.dispatch('page/getStuList',{page:1,size:this.$store.state.page.size});
            }else{
                this.$store.dispatch('page/getPage',1);
                this.$store.dispatch('page/searchKeywords',{
                    sex:-1,
                    search:this.keyword,
                    page:1,
                    size:this.$store.state.page.size
                });
            }
        }
    }
}
</script>
