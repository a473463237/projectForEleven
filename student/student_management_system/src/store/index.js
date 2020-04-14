import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyWrod: "",
    list: [],
    cont: 0, //	一个用户下创建的所有学生数量
    size: 5,//一页放几条数据
    nowPage: 1, //当前页
    totalPage: null,//总页数
    editStu: {},
    dialog: false
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setCount(state, cont) {
      state.cont = cont;//设置总的用户数量
      state.totalPage = Math.ceil(cont / state.size);//设置总的页数
    },
    setEditStu(state, edit) {
      state.editStu = edit;
    },
    setDialog(state, bool) {
      state.dialog = bool;
    },
    setKeyword(state, value) {
      state.keyWrod = value;
    },
    setNowPage(state, n) {
      switch (n) {
        case -1:
          if (state.nowPage > 1) {
            state.nowPage--;
          }
          break;
        case 0:
          if (state.nowPage < state.totalPage) {
            state.nowPage++;
          }
          break;

        default:
          state.nowPage = n;
          break;
      }
    },
  },
  actions: {
    getList(ctx) {
      let obj2 = { page: ctx.state.nowPage, size: ctx.state.size };
      // console.log(obj2)
      api.findByPage({ params: obj2 }).then(res => {
        ctx.commit('setList', res.data.data.findByPage);
        ctx.commit('setCount', res.data.data.cont);
      })
    },
    updateStu({ commit }, stu) {
      return api.updateStudent(stu).then(res => {
        // console.log(res)

        if (res.data.status == "success") {
          commit('setDialog', false);
          Object.assign(this.state.editStu, stu.params);
          console.log(this.state.editStu)

          return {
            msg: res.data.msg,
            status: 'success'
          }
        } else {
          return {
            msg: res.data.msg,
            status: 'fail'
          }
        }
      })
    },
    turnPage({ dispatch, commit, state }, n) {
      commit('setNowPage', n);
      if (state.keyWrod === "") {
        dispatch('getList');
      } else {
        dispatch('search', {
          params: {
            sex: -1,
            page: state.nowPage,
            size: state.size,
            search: state.keyWrod
          }
        })
      }

    },
    // 搜索部分
    searchValue({ dispatch, commit, state }, value) {
      commit('setKeyword', value);
      // 如果没有值
      if (state.keyWrod === '') {
        dispatch('getList');
      } else {
        return dispatch('search', {
          params: {
            sex: -1,
            page: state.nowPage,
            size: state.size,
            search: value
          }
        })
      }
    },
    search({ commit }, data) {
      return api.searchStudent(data).then(res => {
        commit('setList', res.data.data.searchList);
        commit('setCount', res.data.data.cont);
        return {
          status: 'success',
          msg: '查找成功'
        }
      })
    },
    // 删除学生
    delStu({ dispatch, commit, state }, sNo) {
      return api.delBySno(sNo).then(res => {
        if (state.totalPage === Math.ceil((state.cont - 1) / state.size)) {
          // 重新跳转页，并拉取数据
          dispatch('turnPage', state.nowPage);
        } else {
          dispatch('turnPage', -1);
        }
        return {
          status: 'success',
          msg: '删除成功'
        }
      })
    }
  },
  modules: {
  }
})
