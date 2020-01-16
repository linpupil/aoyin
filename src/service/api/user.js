/**
 * otc模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例

const otc = {
  /**
   * 获取资产
   * @param {String} params 
   * /币种：全部(all)
   */
  getAssets (params) {
    return axios.get(`${base.yunc2c}/wealth/countbalance/${params}`);
  },
  /**
   * 获取行情
   * @param {Object} params
   * btc_usdt,kv_usdt  ...   多个逗号隔开
   */
  market(params) {
    return axios.get(`${base.yunc2c}/wealth/huobi/price/${params}`);
  },
  /**
   * 获取充值地址
   * @param {Object} params
   * symbol 币种，coin_label_id 填 2
   */
  getTopUpAddress(params) {
    return axios.get(`${base.yunc2c}/wealth/deposit/addrs/${params.symbol}/${params.coin_label_id}`);
  },
  // 其他接口…………
};

// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);

export default otc;
