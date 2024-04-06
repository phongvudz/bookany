import { createFileRoute } from '@tanstack/react-router'
import { SignUpState } from '@/types/auth'
import { useCallback, useState } from 'react'
import VerificationForm from '@/views/auth/verification'
import SignUpForm from '@/views/auth/sign-up'

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignupForm
})

export function SignupForm() {
  const [state, setState] = useState<SignUpState>('signup')

  const moveState = useCallback((state: SignUpState) => {
    setState(state)
  }, [])

  if (state === 'verifycation') return <VerificationForm moveState={moveState} />

  return <SignUpForm moveState={moveState} />
}
