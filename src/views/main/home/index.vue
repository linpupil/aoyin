<template>
  <div class="home-wrapper">
    <div class="home-top-block">欢迎来到KV 澳银孵化器</div>
    <div class="home-top-price">{{currentPrice}}</div>
    <van-row class="home-version-wrapper">
      <van-col :span="12" class="version-block">
        <span class="version-title-wrapper">
          <p class="version-title font16">投资体验版</p>
          <p class="version-subtitle">50~300 起投</p>
        </span>
      </van-col>
      <van-col :span="12" class="version-block">
        <span class="version-title-wrapper">
          <p class="version-title font16">投资旗舰版</p>
          <p class="version-subtitle">310~2000 起投</p>
        </span>
      </van-col>
    </van-row>
    <div class="home-property-wrapper">
      <div class="property-title font16">我的资产</div>
      <div class="property-list-block" v-for="(item, index) in propertyList" :key="index">
        <span class="property-list-icon">{{item.name}}币</span>
        <span class="property-balance">
          <p>可用：xxx</p>
          <p>冻结：xxx</p>
        </span>
        <span class="property-button-wrapper">
          <van-button class="home-button topup">充值</van-button>
          <van-button class="home-button">提现</van-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import { Row, Col, Button } from 'vant';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button
  },
  data() {
    return {
      currentPrice: '当前 kv / usdt 币价',
      propertyList: [
        { name: 'KV' },
        { name: 'CEO' },
      ]
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    
  },
  destroyed() {}
};
</script>

<style lang="less" scoped>
.font16 {
  font-size: 16px;
}
.home-top-block {
  height: 150px;
  line-height: 150px;
  text-align: center;
  color: #fff;
}
.home-top-price {
  border-top: 1px solid #073547;
  line-height: 45px;
  text-align: center;
  background-color: #12202d;
}
.home-version-wrapper {
  border-top: 1px solid #073547;
  background-color: #12202d;

  .version-block {
    padding: 20px;
    text-align: center;
  }

  .version-title-wrapper {
    display: inline-block;
    text-align: left;
  }
  .version-subtitle {
    line-height: 20px;
    font-size: 13px;
    color: #ccccce;
  }
  .version-block:nth-child(1) {
    border-right: 1px solid #073547;
  }
}
.home-property-wrapper {
  margin-top: 10px;
  background-color: #12202d;

  .property-title {
    line-height: 50px;
    text-indent: 15px;
  }

  .property-list-block {
    position: relative;
    border-top: solid 1px #073547;
    padding: 15px;
  }

  .property-balance {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    padding-top: 5px;

    p {
      line-height: 30px;
    }
  }

  .property-list-icon {
    display: inline-block;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: solid 1px #073547;
    line-height: 70px;
    text-align: center;
  }
  .home-button {
    display: inline-block;
    background-color: #224754;
    width: 80px;
    // padding: 10px 0;
    height: 35px;
    line-height: 35px;
    border: none!important;
    color: #29B8ED!important;
    border-radius: 0;
  }
  .property-button-wrapper {
    position: absolute;
    right: 17px;
    top: 17px;
    width: 80px;
  }
  .topup {
    background-color: #0b0f21;
    // color: #fff!important;
  }
}
</style>
