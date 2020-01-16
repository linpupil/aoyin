export default [
  {
    path: '/user/withdraw',
    name: 'withdraw',
    meta: {
      title: '提现',
      // requireAuth: true
    },
    component: () => import('@/views/user/withdraw')
  },
  {
    path: '/user/topUp',
    name: 'topUp',
    meta: {
      title: '充值',
      // requireAuth: true
    },
    component: () => import('@/views/user/top_up')
  },
  {
    path: '/user/incubator/:type',
    name: 'incubator',
    meta: {
      title: '孵化器',
      // requireAuth: true
    },
    component: () => import('@/views/user/incubator')
  },
];
