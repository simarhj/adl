import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tu Organizador',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'TUS PRODUCTOS',
    group: true,
  },
  {
    title: 'TUS PRODUCTOS',
    icon: 'layout-outline',
    children: [
      {
        title: 'Tu organizador',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Pagos',
        link: '/pages/layout/list',
      },
      {
        title: 'Transferencias',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Certificados',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Seguridad',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
