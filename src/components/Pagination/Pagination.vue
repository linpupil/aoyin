<!--
  vant分页组件 二次封装
  props:
  finishedText{
    type: String,
    default: '没有更多了'
  },
  data: {
    default: Object
  },

  调用：
  <pagination :data="tableData" @getList="getList" @returnList="returnList">
    内容...
  </pagination>
  data： 接口返回的对象数据，data.data包含属性
    pageNum 页码，
    pageSize 页条数，
    list 当前页面数据，
    total 总条数
  getList：请求分页数据函数 getList({pageSize: x, pageNum: x}),
  returnList： 返回请求过的总数据
-->
<template>
  <van-pull-refresh v-model="loading" @refresh="getData(-1)">
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="finishedText"
      @load="getData"
    >
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>
<script>
import { List } from 'vant';
import { PullRefresh } from 'vant';

export default {
  name: 'Pagination',
  props: {
    finishedText: {
      type: String,
      default: '没有更多了'
    },
    data: {
      default: Object
    },
  },
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      loading: true,
      // 数据加载结束 到底了
      finished: false,
      pageNum: 0,
      pageSize: 10,
      list: []
    };
  },
  watch: {
    data: {
      handler (data) {
        if (data && data.pageSize) {
          this.loading = false
          this.pageNum = data.pageNum
          this.pageSize = data.pageSize
          if (data.pageNum > 1) {
            this.list = this.list.concat(data.list)
          } else {
            // 请求第0页 下拉刷新
            this.list = data.list
            this.finished = false
          }
          // 末页
          if ((data.pageNum) * data.pageSize >= data.total) {
            this.finished = true
          }
          this.$emit('returnList', this.list)
        }
      },
      deep: true
    },
  },
  mounted () {
  },
  methods: {
    // 获取数据
    getData (pageNum) {
      if (pageNum) {
        this.pageNum = pageNum
      }
      this.loading = true
      // 异步更新数据
      this.$emit('getList', {
        pageSize: this.pageSize,
        pageNum: this.pageNum + 1
      })
    }
  }
}
</script>
