/**
 * my模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const my = {
  // 邀请好友模块
  /**
   * 获取我的推荐列表
   * @param {Object} params
   * 当前页/页面大小
   */
  recommendlList(params) {
    return axios.get(`${base.yunc2c}/wealth/relevelcount/${params.currPage}/${params.pageSize}`);
  },
  /**
   * 绑定邀请码
   * @param {Object} params
   * 邀请码
   */
  bindCode(params) {
    return axios.get(`${base.yunc2c}/member/bindcode/${params.inviteCode}`);
  },
  /**
   * 获取分享图片
   */
  inviteImg() {
    return axios.get(`${base.yunc2c}/member/qcode`);
  },
  /**
   * 修改用户名 (post请求)
   * @param {Object} data
   */
  updataNickname(data) {
    return axios.post(`${base.yunc2c}/member/updnickname`, data);
  },
  /**
   * 获取提现充值记录
   * @param {Object} params
   */
  getRecord(params) {
    return axios.get(`${base.yunc2c}/wealth/trans/${params.symbol}/${params.type}/${params.page}/${params.pageSize}`);
  },
  /**
   * 获取投资记录
   * @param {Object} params
   */
  getInvestRecord(params) {
    return axios.get(`${base.yunc2c}/invest/rationrecord/${params.page}/${params.pageSize}`);
  },
  /**
   * 查询释放记录
   * @param {Object} params
   */
  getReleaseRecord(params) {
    return axios.get(`${base.yunc2c}/invest/unfrozenrecord/${params.type}/${params.page}/${params.pageSize}`);
  },
  /**
   * 查询收益记录
   * @param {Object} params
   */
  getBenefitRecord(params) {
    return axios.get(`${base.yunc2c}/wealth/separaterecord/${params.type}/${params.page}/${params.pageSize}`);
  },
  // 其他接口…………
};

// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);

export default my;
