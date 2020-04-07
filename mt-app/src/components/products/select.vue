<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
          {{title}}
            <i class="el-icon-caret-bottom"/>
      </dt>
      <dd>
          <h3>{{title}}</h3>
          <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>


<script>
export default {
  created() {
    // console.log(this.title);
    // console.log(this.list);
  },
  props: ["title", "list"]
};
</script>