// import {
//   LayoutDashboard,
//   UtensilsCrossed,
//   ShoppingCart,
//   Settings,
//   Users,
//   BarChart,
//   Package,
// } from 'lucide-react'
import { type Link } from '@/types'

export const ownerLinks: Link[] = [
  {
    label: 'Dashboard',
    href: '/owner/dashboard',
    // icon: LayoutDashboard,
  },
  {
    label: 'Orders',
    href: '/owner/orders',
    // icon: ShoppingCart,
  },
  {
    label: 'Menu',
    href: '/owner/menu',
    // icon: UtensilsCrossed,
  },
  {
    label: 'Restaurant Details',
    href: '/owner/restaurant',
    // icon: Settings,
  },
  {
    label: 'Staff',
    href: '/owner/staff',
    // icon: Users,
  },
  {
    label: 'Analytics',
    href: '/owner/analytics',
    // icon: BarChart,
  },
  {
    label: 'Inventory',
    href: '/owner/inventory',
    // icon: Package,
  },
]
