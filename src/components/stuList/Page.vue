<template>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="cont"
      :current-page="this.page"
      :page-size="this.size"
      @next-click="nextPage"
      @prev-click="prevPage"
      @current-change="curPage"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("page", ["cont", "size", "page", "keyword"])
  },
  methods: {
    nextPage(num) {
      this.turnPage(num);
    },
    prevPage(num) {
      this.turnPage(num);
    },
    curPage(num) {
      this.turnPage(num);
    },
    turnPage(num) {
      this.getPage(num);
      if (this.keyword) {
        this.searchKeywords({
          sex: -1,
          search: this.keyword,
          page: num,
          size: this.size
        });
      } else {
        this.getStuList({ page: this.page, size: this.size });
      }
    },
    ...mapActions("page", ["getStuList", "getPage", "searchKeywords"])
  }
};
</script>