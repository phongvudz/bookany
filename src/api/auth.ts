import axios from '@/lib/axios'
import { IUser } from '@/lib/user'
import { SignInBody, SignInResponse, SignUpBody, SignUpVerificationBody } from '@/types/auth'
import { UseMutationOptions, queryOptions, useMutation } from '@tanstack/react-query'

export const signInApi = async ({ email, password, type }: SignInBody): Promise<SignInResponse> => {
  const body = { email, password, type }

  const res = await axios.post('/auth/sign', body)

  return res.data
}

export function useSignInMutaion(options?: UseMutationOptions<SignInResponse, Error, SignInBody, unknown>) {
  return useMutation({
    mutationFn: signInApi,
    ...options
  })
}

export const signUpApi = async ({ email, type = 'Merchant' }: SignUpBody) => {
  const res = await axios.post('/auth/signup', {
    email,
    type
  })

  return res.data
}

export function useSignUpMutation(options?: UseMutationOptions<unknown, unknown, SignUpBody, unknown>) {
  return useMutation({
    mutationFn: signUpApi,
    ...options
  })
}

export const signUpVerificationApi = async ({
  type = 'Merchant',
  ...rest
}: SignUpVerificationBody): Promise<SignInResponse> => {
  const res = await axios.post('/auth/verification', { ...rest, type })
  return res.data
}

export function useSignUpVerificationMutation(
  options?: UseMutationOptions<SignInResponse, unknown, SignUpVerificationBody, unknown>
) {
  return useMutation({
    mutationFn: signUpVerificationApi,
    ...options
  })
}

const fetchProfileApi = async () => {
  const response = await axios.get('/auth/profile')
  return response.data
}

export const profileQueryOptions = queryOptions<IUser>({
  queryKey: ['profile'],
  queryFn: () => fetchProfileApi()
})
