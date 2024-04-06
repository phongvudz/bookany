import { z } from 'zod'

const SignUpState = z.enum(['signup', 'verifycation'])

export type SignUpState = z.infer<typeof SignUpState>
