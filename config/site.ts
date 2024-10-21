import type { NavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Room Booking System',
  description: 'An internal room blocking system used by MIT Bengaluru.',
  institute: 'Manipal Institute of Technology, Bengaluru',

  navLinks: [
    {
      title: 'One',
      href: '/one',
      requiredRoles: ['ADMIN'],
    },
    {
      title: 'Two',
      href: '/two',
      requiredRoles: ['ADMIN'],
    },
    {
      title: 'Three',
      href: '/three',
      requiredRoles: ['ADMIN'],
    },
  ] satisfies NavItem[],
};
