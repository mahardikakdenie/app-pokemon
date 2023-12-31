const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/index.vue"),
      },
      {
        path: "/detail/:name",
        name: "detail",
        component: () => import("@/views/detail.vue"),
      },
      {
        path: '/favorite',
        name: 'favorite',
        component: () => import('@/views/favorite.vue')
      },
    ],
  },
];

export default routes;
