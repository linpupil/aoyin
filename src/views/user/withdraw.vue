<template>
  <div class="withdraw-wrapper">
    <van-nav-bar
      :title="headerObj.title"
      :rightText="headerObj.rightText"
      :fixed="headerObj.fixed"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="withdraw-warning-wrapper">温馨提示</div>
    <div class="withdraw-input-wrapper">
      <van-field v-model="input.address" placeholder="输入或长按粘贴地址" />
      <div class="input-limit-wrapper">
        <van-field v-model="input.number" class="input-limit" placeholder="最小提币数量   2.00000000" />
        <span class="input-unit">USDT</span>
        <span class="input-all">全部</span>
      </div>
    </div>
    <div class="withdraw-input-wrapper">
      <van-field v-model="input.password" type="password" placeholder="请输入资金密码" />
    </div>
    <p class="withdraw-mark">提现手续费1.000000 USDT   实际到账 1.000000USDT</p>
    
    <div class="btn-wrapper">
      <div @click="withdraw" class="custom-block-btn">
        提币
        <i class="custom-block-btn-bg"><img src="~@/assets/image/img/block-btn-bg@2x.png"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, NavBar, Field } from 'vant';
// import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'withdraw',
  components: {
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Field.name]: Field,
  },
  data() {
    return {
      headerObj: {
        title: '代币提现',
        rightText: '提现记录',
        fixed: true
      },
      input: {
        address: '',
        number: '',
        password: '',
      }
    };
  },
  created() {
  },
  watch: {
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    onClickLeft () {
      this.$router.goBack();
    },
    onClickRight () {},
    withdraw () {},
  }
};
</script>

<style lang="less" scoped>
.withdraw-wrapper {
  padding-top: 46px;
}
.withdraw-warning-wrapper {
  padding: 15px;
  line-height: 100px;
  background-color: #12202d;
}
.withdraw-input-wrapper {
  margin-top: 10px;
  background-color: #12202d;

  .van-field {
    height: 50px;
    line-height: 50px;
    padding-top: 16px;
  }

  .input-limit-wrapper {
    position: relative;
  }
  .input-limit {
    width: 220px;
    display: inline-block;
  }
  .input-limit::after {
    border-bottom: none!important;
  }
  .input-unit, .input-all {
    line-height: 50px;
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
    font-size: 16px;
    color: #fff;
  }
  .input-all {
    position: absolute;
    right: 15px;
    top: 0;
    color: #29B8ED;
  }

}
.withdraw-mark {
  padding: 15px;
}
.btn-wrapper {
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
}
</style>