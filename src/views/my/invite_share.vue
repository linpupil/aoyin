<template>
  <div class="invite-share-wrapper" style="visibility:hidden;">
    <van-nav-bar
      :title="headerObj.title"
      left-arrow
      :fixed="headerObj.fixed"
      :z-index="3"
      @click-left="back"
    />
    <div class="content nav-top">
      <div class="invite-url-box">
        <p>邀请链接: {{inviteUri}}</p>
      </div>
      <div @click="copy" class="custom-block-btn copy" :data-clipboard-text="inviteUri">
          复制邀请链接
        <i class="custom-block-btn-bg"><img src="~@/assets/image/img/block-btn-bg@2x.png"></i>
      </div>
      <van-cell-group class="margin-b-15">
        <van-cell @click="copy" class="copy" :data-clipboard-text="secode" :title="secode" value="复制邀请码" />
      </van-cell-group>
      <div class="share-img-box">
        <p class="title">截图保存海报到手机相册</p>
        <div class="img-area">
          <img :src="'data:image/png;base64,'+inviteImg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
import * as BASE from '@/service/base';
import { NavBar, Cell, CellGroup, Button, Toast } from 'vant';
import { mapState } from 'vuex';

export default {
  name: '',
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {
      headerObj: {
        fixed: true,
        title: '分享邀请链接'
      },
      recode: '',
      secode: '',
      inviteUri: '',
      inviteImg: ''
    };
  },
  created() {
    this.recode = this.$route.query.recode;
    this.secode = this.userInfo.secode;
    this.inviteUri = BASE.DomainUrl + '/html/mpay/promotion/register/register.html?recode=' + this.recode;
    this.createInviteImg();
  },
  mounted() {
    this.$el.style.visibility = 'visible';
  },
  watch: {},
  computed: {
    ...mapState('sign', {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    createInviteImg() {
      this.$api.my.inviteImg()
        .then(res => {
          let result = res.data.result;
          this.inviteImg = result;
        });
    },
    // 复制充值地址
    copy() {
      let clipboard = new ClipboardJS('.copy')
        .on('success', e => {
          Toast(e.text + '复制成功');
          e.clearSelection();
          clipboard.destroy();
        });
    },
    back() {
      this.$router.goBack();
    }
  },
  destroyed() {}
};
</script>

<style lang="less" scoped>
.content{
  padding: 10px 16px;
}
.invite-url-box{
  padding: 10px;
  margin-bottom: 30px;
  word-break: break-all;
  border: 1px solid #0094C1;
  color: #0094C1;
  text-align: justify;
  line-height: 1.3;
}
.copy{
  margin-bottom: 30px;
}
.share-img-box{
  .title{
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
    line-height: 1.5;
  }
  .img-area{
    margin-bottom: 20px;
  }
}
</style>

<style lang="less">
.invite-share-wrapper{
  .van-cell{
    padding: 15px 16px;
    font-size: 15px;
  }
  /*分组cell*/
  .van-cell-group{
    background-color: transparent;
  }
  .van-cell-group__title{
    padding: 16px;
  }
  .van-cell{
    background-color: #131F25 !important;
  }
}
</style>
