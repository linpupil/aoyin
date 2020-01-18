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
    <div class="withdraw-warning-wrapper">
      <p>温馨提示</p>
      <p>最小转出额度{{min_withdraw}}{{$route.params.id}}</p>
      <p>手续费{{new Decimal(withdraw_fee).mul(100)}}%,至少{{new Decimal(min_withdraw).mul(withdraw_fee)}}</p>
    </div>
    <div class="withdraw-input-wrapper">
      <van-field v-model="submitObj.addr" placeholder="输入或长按粘贴地址" />
      <div class="input-limit-wrapper">
        <van-field v-model="submitObj.amount" class="input-limit" :placeholder="`最小提币数量   ${min_withdraw}`" />
        <span class="input-unit">{{$route.params.id}}</span>
        <span class="input-all" @click="submitObj.amount = available_balance">全部</span>
      </div>
    </div>
    <div class="withdraw-input-wrapper">
      <van-field v-model="submitObj.security_pwd" type="password" placeholder="请输入资金密码" />
    </div>
    <p class="withdraw-mark">提现手续费{{new Decimal(withdraw_fee).mul(100)}}% {{$route.params.id}}   实际到账 {{realAmount}}</p>
    
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
const Decimal = require('decimal.js')

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
      submitObj: {
        currency: '',
        addr: '',
        coin_label_id: '',
        addr_label: '',
        amount: '',
        security_pwd: '',
      },
      // 最小可提
      min_withdraw: 0,
      withdraw_fee: 0,
      available_balance: 0,
      Decimal: Decimal
    };
  },
  created() {
  },
  watch: {
  },
  computed: {
    realAmount () {
      let val = 0
      if (this.submitObj.amount) {
        val = new Decimal(this.submitObj.amount).minus(new Decimal(this.submitObj.amount).mul(this.withdraw_fee))
      }
      return val
    }
  },
  mounted() {
    this.getAssets()
  },
  methods: {
    onClickLeft () {
      this.$router.goBack();
    },
    onClickRight () {
      this.$router.togo(`/my/record/${this.$route.params.id}/2/withdraw`)
    },
    async withdraw () {
      if (!this.submitObj.addr) {
        Toast('请输入提币地址')
        return
      } else if (!this.submitObj.amount) {
        Toast('请输入提币数量')
        return
      } else if (!this.submitObj.security_pwd) {
        Toast('请输入资金密码')
        return
      }

      if (this.submitObj.amount < this.min_withdraw) {
        Toast(`最小提币数量为${this.min_withdraw}`)
        return
      }
      await this.$api.user.toWithdraw(this.submitObj)
      Toast('提币成功')
      this.submitObj.amount = ''
      this.submitObj.security_pwd = ''
      this.submitObj.addr = ''
      this.getAssets()
    },
    async getConfig () {
      // experience 体验版 flag旗舰版
      const res = await this.$api.common.configInfo()
      
    },
    // 获取资产
    async getAssets() {
      const res = await this.$api.user.getAssets(this.$route.params.id)
      this.min_withdraw = res.data.result[0].currencyVO.min_withdraw
      this.withdraw_fee = res.data.result[0].currencyVO.withdraw_fee
      this.available_balance = res.data.result[0].available_balance
      
      this.submitObj.coin_label_id = this.$route.params.id === 'USDT' ? '2' : ''
      this.submitObj.currency = this.$route.params.id
    },
  }
};
</script>

<style lang="less" scoped>
.withdraw-wrapper {
  padding-top: 46px;
}
.withdraw-warning-wrapper {
  padding: 15px;
  background-color: #12202d;

  p {
    line-height: 30px;
  }
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