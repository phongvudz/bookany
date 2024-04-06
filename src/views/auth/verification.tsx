import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SignUpState } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Link } from '@tanstack/react-router'

const VerifySchema = z
  .object({
    code: z.string().min(6, {
      message: 'Your one-time password must be 6 characters.'
    }),
    password: z.string().min(8, {
      message: 'Your password must be at least 8 characters.'
    }),
    confirmPassword: z.string().min(8, {
      message: 'Your password must be at least 8 characters.'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirm']
  })

interface VerificationFormProps {
  moveState: (state: SignUpState) => void
}

const VerificationForm = memo(({ moveState }: VerificationFormProps) => {
  const form = useForm<z.infer<typeof VerifySchema>>({
    resolver: zodResolver(VerifySchema),
    defaultValues: {
      code: ''
    }
  })
  const onSubmit = useCallback((data: z.infer<typeof VerifySchema>) => {
    console.log(data)
  }, [])

  return (
    <Form {...form}>
      <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Welcome to Bookany</h2>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Verify your account to get access to all the features of Bookany.
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code verify</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className='w-1/2'>
                        <InputOTPSlot index={0} className='h-20 w-1/3' />
                        <InputOTPSlot index={1} className='h-20 w-1/3' />
                        <InputOTPSlot index={2} className='h-20 w-1/3' />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup className='w-1/2'>
                        <InputOTPSlot index={3} className='h-20 w-1/3' />
                        <InputOTPSlot index={4} className='h-20 w-1/3' />
                        <InputOTPSlot index={5} className='h-20 w-1/3' />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>Please enter the code we sent to your email to verify your account.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormControl>
                  <Input id='password' placeholder='********' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
                <FormControl>
                  <Input id='confirmPassword' placeholder='********' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full mt-8'>
            <span>Verify &rarr;</span>
          </Button>

          <p className='px-8 text-center text-base text-muted-foreground mt-8 max-w-md'>
            Already have an account?{' '}
            <Link
              to='/sign-in'
              className='text-blue-500 cursor-pointer underline underline-offset-4 hover:text-primary'
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
})

export default VerificationForm
