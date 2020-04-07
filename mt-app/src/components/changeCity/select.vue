<template>
  <div
    :class="['choose-wrap', disabled?'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      {{value}}
      <i class="el-icon-caret-bottom"></i>
      <!-- 展示的省份 -->
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
        <h2>{{title}}</h2>
        <dl :class="['wrapper',className]">
          <dd class="col" v-for="(item,index) in renderList" :key="index">
            <span
              v-for="(v,i) in item"
              :key="v + '_' + i"
              class="mt-item"
              @click="changeValue(v)"
            >{{v.name}}</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "list",
    "value",
    "title",
    "showWrapperActive",
    "disabled",
    "className"
  ],
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();

      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick(e) {
      this.$emit("change_active", false);
    },
    changeValue(v) {
      this.$emit("change", v);
    }
  },
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      // console.log(resultList)
      return resultList;
    }
  }
};
</script>
