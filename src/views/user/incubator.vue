<template>
  <div class="incubator-wrapper">
    <van-nav-bar
      :title="headerObj.title"
      :leftText="headerObj.leftText"
      :fixed="headerObj.fixed"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    
    <div class="incubator-block" v-for="(item, index) in incubatorList" :key="index">
      <p class="block-title">{{item.name}}</p>
      <van-row class="block-row">
        <van-col :span="12">{{item.progress}}</van-col>
        <van-col class="text-right" :span="12">
          <span class="incubator-status" :class="!item.active && 'color-unactive'">{{item.leftTime}}</span>
        </van-col>
      </van-row>
      <p class="incubator-value">{{item.value}}kv</p>
      <van-slider
        v-model="item.value"
        bar-height="7px"
        :step="10"
        :max="2000"
        :min="310"
        :disabled="!item.active"
      />
      <van-row class="block-row value-wrapper">
        <van-col :span="12">{{item.minVal}}</van-col>
        <van-col class="text-right" :span="12">{{item.maxVal}}</van-col>
      </van-row>
      <div @click="incubator" class="custom-block-btn" :class="item.btn === '已激活' ? 'btn-active': item.btn === '不可激活' ? 'disabled-active' : ''">
        {{item.btn}}
        <i class="custom-block-btn-bg">
          <img v-if="item.btn === '已激活'" src="~@/assets/image/img/block-btn-bg@2x-active.png">
          <img v-else-if="item.btn === '立即激活'" src="~@/assets/image/img/block-btn-bg@2x.png">
          <img v-else src="~@/assets/image/img/block-btn-bg@2x-disabled.png">
          </i>
      </div>
    </div>

    <!--激活弹窗-->
    <van-dialog
      v-model="showDialog"
      @confirm="dialogConfirm"
      confirmButtonText="激活"
      show-cancel-button>
      <div class="incubator-dialog-wrapper">
        <p class="dialog-title">本次投资冻结</p>
        <p class="dialog-title">900 kv + 100 ceo</p>
        <van-field v-model="password" type="password" placeholder="请输入资金密码" />
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { Toast, Row, Col, Slider, NavBar, Dialog, Field } from 'vant';
// import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'incubator',
  components: {
    [Toast.name]: Toast,
    [Row.name]: Row,
    [Col.name]: Col,
    [Slider.name]: Slider,
    [NavBar.name]: NavBar,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      headerObj: {
        title: '旗舰版孵化器',
        fixed: true,
        leftText: '返回首页'
      },
      showDialog: false,
      password: '',
      incubatorList: [
        {
          name: '初级孵化',
          progress: '0.5% / 天 共15天',
          leftTime: '剩余13天',
          value: 1260,
          active: true,
          minVal: '310kv',
          maxVal: '2000kv',
          btn: '已激活'
        },
        {
          name: '中级孵化',
          progress: '0.5% / 天 共15天',
          leftTime: '剩余13天',
          value: 1260,
          active: true,
          minVal: '310kv',
          maxVal: '2000kv',
          btn: '立即激活'
        },
        {
          name: '高级孵化',
          progress: '0.5% / 天 共15天',
          leftTime: '未激活',
          value: 1260,
          active: false,
          minVal: '310kv',
          maxVal: '2000kv',
          btn: '不可激活'
        },
      ]
    };
  },
  created() {
  },
  watch: {
  },
  computed: {
  },
  mounted() {
    this.init()
  },
  methods: {
    onClickLeft () {
      this.$router.goBack();
    },
    onClickRight () {},
    init () {
      // experience 体验版 flag旗舰版
      if (this.$route.params.type === 'experience') {
        // this.$router
      } else {
        //
      }
    },
    incubator (val) {
      this.showDialog = true
    },
    dialogConfirm () {
      console.log('confirm')
    },
  }
};
</script>

<style lang="less" scoped>
.incubator-wrapper {
  padding-top: 36px;
  
  .incubator-block {
    position: relative;
    padding: 10px 15px;
    background-color: #15283a;
    margin-top: 10px;

    .block-title {
      font-size: 16px;
      font-weight: bold;
    }

    .incubator-status {
      position: absolute;
      right: 15px;
      top: 17px;
    }
  }

  .incubator-value {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .van-slider {
    margin: 10px 0;
  }

  .block-row {
    line-height: 30px;
  }

  .value-wrapper {
    color: #d1d3d4;
    margin-bottom: 8px;
  }

  .btn-active {
    // background-color: #1859c5;
    color: #fff;
    // color: #5bf36f;
  }

  .disabled-active {
    // background-color: #919294;
    color: #fff;
  }

  .incubator-dialog-wrapper {
    padding: 20px;

    .dialog-title {
      line-height: 30px;
      text-align: center;
    }

    .van-field {
      margin-top: 10px;
      border: solid 1px #096183;
    }
  }
}
.text-right {
  text-align: right;
}
.color-unactive {
  color: #828282;
}
</style>