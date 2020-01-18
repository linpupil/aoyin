<template>
  <div class="topup-wrapper" ref="topUpWrapper">
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
      <div class="qr-code-img-wrapper">
        <!-- <qrcode-vue :value="address" :size="200" level="M"></qrcode-vue> -->
        <canvas id="mycanvas" ref="mycanvas" height="200" width="200"></canvas>
        <div id="qrCode" class="qrconde" v-if="address" ref="qrCodeDiv" style="width: 200px;height: 200px"></div>
      </div>
      <div @click="saveToAlbum" class="custom-block-btn">
        保存二维码至相册
        <i class="custom-block-btn-bg"><img id="img" src="~@/assets/image/img/block-btn-bg@2x.png"></i>
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
import QRCode from 'qrcodejs2'
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
      address: 'reading...',
      imgData: ''
    };
  },
  created() {
  },
  watch: {
  },
  computed: {
  },
  mounted() {
    this.getTopUpAddress()
  },
  methods: {
    onClickLeft () {
      this.$router.goBack();
    },
    onClickRight () {
      this.$router.togo(`/my/record/${this.$route.params.id}/1/topUp`)
    },
    topup () {},
    copyText () {
      var clipboard = new Clipboard('.code-button');

      clipboard.on('success', function(e) {
          e.clearSelection();
      });

      // window.clipboardData.setData("Text", this.address);
      Toast('已复制到剪贴板，粘贴可用！')
    },
    // 生成二维码
    bindQRCode () {
      // let t = this
      // console.log(t.userInfo.account)
      new QRCode(this.$refs.qrCodeDiv, {
        text: this.address,
        width: 200,
        height: 200,
        colorDark: '#333333', // 二维码颜色
        colorLight: '#ffffff', // 二维码背景色
        correctLevel: QRCode.CorrectLevel.L// 容错率，L/M/H
      })
      
      // let a = this.$refs.qrCodeDiv.getElementsByTagName('img')
      // console.log(a[0].getAttribute('src'))
       // 二维码生成后，执行生成图片
      this.createPicture()
    },
    // 生成图片
    createPicture () {
			var mycanvas = this.$refs.mycanvas
			var ctx = mycanvas.getContext('2d')
      const img = this.$refs.qrCodeDiv.getElementsByTagName('img')[0]
      ctx.drawImage(img, 0, 0);
      this.imgData = mycanvas.toDataURL('image/jpeg')
      mycanvas.style.display = 'none'
    },
    // 保存图片
    saveToAlbum () {
      var a = document.createElement('a')
      a.setAttribute('href', this.imgData)
      a.setAttribute('download', 'kiwiQrCode')
      a.setAttribute('target','_blank')
      let clickEvent = document.createEvent('MouseEvents')
      clickEvent.initEvent('click', true, true)
      a.dispatchEvent(clickEvent);
    },
    async getTopUpAddress () {
      const res = await this.$api.user.getTopUpAddress({symbol: this.$route.params.id, coin_label_id: 2})
      this.address = res.data.result.a_address
      this.bindQRCode()
    }
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
      min-height: 150px;
      // background-color: #afafaf;
      margin: 0 auto 10px;
      // padding: 3px 3px 1px 3px;
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