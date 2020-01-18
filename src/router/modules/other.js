export default [
  {
    path: '/other/iframe',
    name: 'other/iframe',
    meta: {
      title: ''
    },
    component: () => import('@/views/other/iframe')
  },
  {
    path: '/other/mpay',
    name: 'other/mpay',
    meta: {
      title: 'kiwi孵化器'
    },
    component: () => import('@/views/other/mpay_payment')
  }
];
