export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     { name: '登录', path: '/user/login', component: './user/Login' },
  //     { component: './404' },
  //   ],
  // },
  { path: '/upload', name: '大文件上传', icon: 'smile', component: './Uploader' },
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
  //     { component: './404' },
  //   ],
  // },
  // { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/upload' },
  { component: './404' },
];
