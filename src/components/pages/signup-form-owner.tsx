'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { signupOwner } from '@/app/actions/auth'
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'

const initialState = {
  error: null,
  success: false,
}

export const SignUpFormOwner = () => {
  const router = useRouter()
  const [state, formAction] = useActionState(signupOwner, initialState)

  if (state.success) {
    router.push('/auth/owner/login')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Create Restaurant Owner Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              aria-label="Full Name"
            />
            {state?.error?.name && (
              <p className="text-sm text-red-500">{state.error.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Restaurant Name</Label>
            <Input
              id="restaurantName"
              name="restaurantName"
              type="text"
              placeholder="My Restaurant"
              required
              aria-label="Restaurant Name"
            />
            {state?.error?.restaurantName && (
              <p className="text-sm text-red-500">
                {state.error.restaurantName}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              aria-label="Email Address"
            />
            {state?.error?.email && (
              <p className="text-sm text-red-500">{state.error.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              aria-label="Password"
            />
            {state?.error?.password && (
              <p className="text-sm text-red-500">{state.error.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              aria-label="Confirm Password"
            />
            {state?.error?.confirmPassword && (
              <p className="text-sm text-red-500">
                {state.error.confirmPassword}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/auth/owner/login"
              className="text-blue-600 hover:underline"
              tabIndex={0}
            >
              Login here
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
