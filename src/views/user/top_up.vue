<template>
  <div class="topup-wrapper">
    <van-nav-bar
      :title="headerObj.title"
      :rightText="headerObj.rightText"
      :fixed="headerObj.fixed"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="topup-type-wrapper">
      <van-row class="type-wrapper">
        <van-col :span="12">链类型</van-col>
        <van-col :span="12" class="text-right type-color">ERC20</van-col>
      </van-row>
    </div>
    <div class="qr-code-wrapper">
      <div class="qr-code-img-wrapper"></div>
      <div @click="saveToAlbum" class="custom-block-btn">
        保存二维码至相册
        <i class="custom-block-btn-bg"><img src="~@/assets/image/img/block-btn-bg@2x.png"></i>
      </div>
      <p class="code-address" id="foo">{{address}}</p>
      <!-- <van-field v-model="address" id="foo" class="address-input" ref="address"></van-field> -->
      <div class="code-button" @click="copyText" data-clipboard-target="#foo" data-clipboard-action="copy">复制充值地址</div>
    </div>
    <div class="discription">
      <p>该地址仅用于 <span class="color-red">ERC20</span> <span class="color-usdt">代币</span> 收款，</p>
      <p>请勿向该地址转入其它币种！</p>
    </div>
  </div>
</template>

<script>
import { Toast, NavBar, Field, Row, Col } from 'vant'
import Clipboard from 'clipboard'
// import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'top_up',
  components: {
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  data() {
    return {
      headerObj: {
        title: '代币充值',
        rightText: '充值记录',
        fixed: true
      },
      address: '0xdsf8r48ge15ry8h81n8y4y568q15tu1k805p890l9v'
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
    topup () {},
    copyText () {
       console.log(Clipboard)
      // const address = this.$refs.address
      // const address = document.getElementById('address')
      // address.select()
      // document.execCommand("Copy") // 执行浏览器复制命令
      var clipboard = new Clipboard('.code-button');

      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);

          e.clearSelection();
      });

      // window.clipboardData.setData("Text", this.address);
      Toast('已复制到剪贴板，粘贴可用！')

    },
    saveToAlbum () {}
  }
};
</script>

<style lang="less" scoped>
.topup-wrapper {
  padding-top: 46px;

  .type-wrapper {
    background-color: #12202d;
    padding: 20px;
  }

  .type-color {
    color: #c70c0c;
    font-size: 16px;
    font-weight: bold;
  }

  .qr-code-wrapper {
    margin-top: 10px;
    padding: 30px;
    background-color: #12202d;

    .qr-code-img-wrapper {
      width: 200px;
      min-height: 180px;
      background-color: #afafaf;
      margin: 0 auto 10px;
    }
  }

  .code-address {
    color: #afafaf;
    padding: 20px 0 10px 0;
    text-align: center;
  }

  .code-address::after {
    border-bottom: none!important;
  }

  .code-button {
    text-align: center;
    line-height: 30px;
    width: 100px;
    margin: auto;
  }

  .discription {
    margin-top: 10px;
    background-color: #12202d;
    padding: 60px 0;

    p {
      line-height: 20px;
      color: #afafaf;
      text-align: center;

      .color-red {
        color: #c70c0c;
        font-weight: bold;
        margin-right: 5px;
      }
      .color-usdt {
        color: #29B8ED;
        font-weight: bold;
      }
    }
  }

  .text-right {
    text-align: right;
  }
}
</style>