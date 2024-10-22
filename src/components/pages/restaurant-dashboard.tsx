'use client'

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ArrowRightIcon,
  CheckCircledIcon,
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const popularItems = [
  {
    name: 'Pizza Margherita',
    total: 2795,
  },
  {
    name: 'Spaghetti Carbonara',
    total: 1945,
  },
  {
    name: 'Caesar Salad',
    total: 1800,
  },
  {
    name: 'Chicken Parmesan',
    total: 1650,
  },
  {
    name: 'Tiramisu',
    total: 1550,
  },
]

const recentOrders = [
  {
    id: 'ORD001',
    customer: 'Alice Johnson',
    status: 'delivered',
    total: '$35.50',
  },
  {
    id: 'ORD002',
    customer: 'Bob Smith',
    status: 'preparing',
    total: '$42.75',
  },
  {
    id: 'ORD003',
    customer: 'Charlie Brown',
    status: 'in-transit',
    total: '$28.99',
  },
  {
    id: 'ORD004',
    customer: 'Diana Prince',
    status: 'pending',
    total: '$55.20',
  },
  {
    id: 'ORD005',
    customer: 'Ethan Hunt',
    status: 'delivered',
    total: '$39.95',
  },
]

export function RestaurantDashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 7h5a3.5 1 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
            >
              <path d="M16 21v-2a4 4 0 0-4-4H6a4 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0-3-3.87M16 3.13a4 1 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              +19% from last hour
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Delivery Time
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              -2 min from last week
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <OrderStatus status={order.status} />
                    </TableCell>
                    <TableCell className="text-right">{order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Popular Items</CardTitle>
            <CardDescription>
              Top 5 most ordered items this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={popularItems}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={value => `${value}`}
                />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function OrderStatus({ status }: { status: string }) {
  const statusMap: Record<string, { label: string; icon: React.ReactNode }> = {
    pending: {
      label: 'Pending',
      icon: (
        <CircleIcon className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      ),
    },
    preparing: {
      label: 'Preparing',
      icon: <StopwatchIcon className="mr-2 h-4 w-4 text-blue-500" />,
    },
    'in-transit': {
      label: 'In Transit',
      icon: <ArrowRightIcon className="mr-2 h-4 w-4 text-orange-500" />,
    },
    delivered: {
      label: 'Delivered',
      icon: <CheckCircledIcon className="mr-2 h-4 w-4 text-green-500" />,
    },
  }

  const { label, icon } = statusMap[status] || {
    label: 'Unknown',
    icon: (
      <QuestionMarkCircledIcon className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
    ),
  }

  return (
    <div className="flex items-center">
      {icon}
      {label}
    </div>
  )
}
