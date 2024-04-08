import { z } from 'zod'

const SignUpState = z.enum(['signup', 'verifycation'])

export type SignUpState = z.infer<typeof SignUpState>

const TypeMerchant = z.enum(['Merchant', 'Customer'])

const SignInBody = z.object({
  email: z.string(),
  password: z.string(),
  type: TypeMerchant.optional()
})

export type SignInBody = z.infer<typeof SignInBody>

const SignInResponse = z.object({
  sessionId: z.string()
})

export type SignInResponse = z.infer<typeof SignInResponse>

const SignUpBody = SignInBody.omit({ password: true })

export type SignUpBody = z.infer<typeof SignUpBody>

export const SignUpVerificationBody = z.object({
  token: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  type: TypeMerchant.optional()
})

export type SignUpVerificationBody = z.infer<typeof SignUpVerificationBody>
