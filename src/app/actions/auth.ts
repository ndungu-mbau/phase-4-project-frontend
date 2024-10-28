'use server'

import { z } from 'zod'
import { SignUpResponse } from '@/types'

const baseSignupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
})

const signupSchema = baseSignupSchema.refine(
  data => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  },
)

const ownerSignupSchema = baseSignupSchema
  .extend({
    restaurantName: z
      .string()
      .min(2, 'Restaurant name must be at least 2 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignupFormData = z.infer<typeof signupSchema>
export type OwnerSignupFormData = z.infer<typeof ownerSignupSchema>

export async function signupClient(
  _prevState: unknown,
  formData: FormData,
): Promise<SignUpResponse> {
  const validatedFields = signupSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  try {
    // Add your authentication logic here
    // For example: await createUser(validatedFields.data)
    return { success: true }
  } catch (error) {
    return {
      error: {
        _form: `Something went wrong. Please try again. ${
          error instanceof Error ? error.message : ''
        }`,
      },
    }
  }
}

export async function signupOwner(
  _prevState: unknown,
  formData: FormData,
): Promise<SignUpResponse> {
  const validatedFields = ownerSignupSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    restaurantName: formData.get('restaurantName'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  try {
    // Add your authentication logic here
    // For example: await createRestaurantOwner(validatedFields.data)
    return { success: true }
  } catch (error) {
    return {
      error: {
        _form: `Something went wrong. Please try again. ${
          error instanceof Error ? error.message : ''
        }`,
      },
    }
  }
}
