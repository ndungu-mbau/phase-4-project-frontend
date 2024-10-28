export type SignUpResponse = {
  success?: boolean
  error?: {
    [key: string]: string[] | undefined
  }
}
