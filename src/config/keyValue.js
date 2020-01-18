const keyValue = {
  // 过滤器方法 eg: {keyFilter(this.detailData.processState, 'purchase', 'processState').name}
  keyFilter: function (val, container, node, attr = 'id') {
    const param = keyValue[container][node].find((element) => {
      return element[attr] === val
    })
    return param
  },
  recordStatus: {
    '-1': '待审核',
    '0': '待处理',
    '1': '已完成',
    '2': '已取消',
    '3': '处理中',
    '4': '系统错误',
    '5': '已发送',
    '6': '地址错误',
    '7': '提现金额太小'
  },
  // 投资周期类型
  investType: {
    '1': '3',
    '2': '7',
    '3': '15'
  }
}
export default keyValue