<template>
  <div class="turn-page">
    <ul>
      <li @click="turnPage(-1)">上一页</li>
      <template v-if="totalPage <=7">
        <li
          v-for="i in totalPage"
          :key="i"
          :class="{'now-page':i == nowPage}"
          @click="turnPage(i)"
        >{{i}}</li>
      </template>
      <template v-else>
        <template v-if="nowPage<=4">
          <li v-for="i in 6" :key="i" :class="{'now-page':i == nowPage}" @click="turnPage(i)">{{i}}</li>
        </template>
        <!-- 1... -->
        <template v-if="nowPage>4">
          <li @click="turnPage(1)">1</li>
          <li>...</li>
        </template>

        <!-- 中间的5个值 -->
        <template v-if="nowPage>4 && nowPage<=totalPage-4">
          <li
            v-for="i in 5"
            :key="nowPage-3+i"
            @click="turnPage(nowPage-3+i)"
            :class="{'now-page':nowPage == nowPage-3+i}"
          >{{nowPage-3+i}}</li>
        </template>

        <!-- ...100 -->
        <template v-if="nowPage<=totalPage-4">
          <li>...</li>
          <li @click="turnPage(totalPage)" :class="{'now-page':nowPage == totalPage}">{{totalPage}}</li>
        </template>

        <!-- 最后面的几位 -->
        <template v-if="nowPage>totalPage-4">
          <li v-for="i in 6" :key='totalPage-6+i' :class="{'now-page':nowPage == totalPage-6+i}">{{totalPage-6+i}}</li>
        </template>
      </template>
      <li @click="turnPage(0)">下一页</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

  computed:{
    ...mapState(['nowPage', 'totalPage'])
  },
  methods: {
       turnPage(n) {
        this.$store.dispatch('turnPage', n)
    }
  }
};
</script>


<style scoped>
.turn-page li {
  list-style: none;
  display: inline-block;
  padding: 0 5px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
}

.now-page {
  color: #409eef;
}

.turn-page li:hover {
  color: #409eef;
}
</style>