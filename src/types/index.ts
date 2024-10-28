export type Link = {
  href: string
  label: string
}

export type SignUpResponse = {
  error?: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }
  success?: boolean
}
