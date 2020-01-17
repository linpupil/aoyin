<template>
  <div>
    <van-nav-bar
      :title="headerObj.title"
      left-arrow
      :fixed="headerObj.fixed"
      @click-left="back"
    />
    <van-row class="nav-top table-title">
      <van-col span="6">投资天数</van-col>
      <van-col span="6">使用kv</van-col>
      <van-col span="6">使用ceo</van-col>
      <van-col span="6">时间</van-col>
    </van-row>
    
    <van-row class="table-row">
      <van-col span="6">15天</van-col>
      <van-col span="6">90</van-col>
      <van-col span="6">10</van-col>
      <van-col span="6">2020.01.13 14:30:00</van-col>
    </van-row>
    <van-row class="table-row">
      <van-col span="6">15天</van-col>
      <van-col span="6">90</van-col>
      <van-col span="6">10</van-col>
      <van-col span="6">2020.01.13 14:30:00</van-col>
    </van-row>
    <van-row class="table-row">
      <van-col span="6">15天</van-col>
      <van-col span="6">90</van-col>
      <van-col span="6">10</van-col>
      <van-col span="6">2020.01.13 14:30:00</van-col>
    </van-row>
  </div>
</template>

<script>
import { NavBar, Row, Col } from 'vant';

export default {
  name: '',
  components: {
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      headerObj: {
        fixed: true,
        title: '投资记录'
      }
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    back() {
      this.$router.goBack();
    }
  },
  destroyed() {}
};
</script>

<style lang="less" scoped>
.table-title,.table-row{
  padding: 0 10px;
}
.table-title{
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #273338;
}
.table-row{
  padding: 5px 0;
  text-align: center;
  border-bottom: 1px solid #152b33;
  .van-col{
    line-height: 1.5;
  }
}
</style>

<style lang="less">
</style>
