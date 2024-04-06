import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SigninSchema = z.object({
  email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.'),
  password: z.string().min(8, { message: 'Your password must be at least 8 characters.' })
})

const SignInForm = memo(() => {
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = useCallback((data: z.infer<typeof SigninSchema>) => {
    console.log(data)
  }, [])

  return (
    <Form {...form}>
      <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Welcome to Bookany</h2>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Sign up to get access to all the features of Bookany.
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <FormControl>
                  <Input id='email' placeholder='projectmayhem@gmail.com' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
          <Button type='submit' className='w-full mt-8'>
            <span>Sign in &rarr;</span>
          </Button>
          <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

          <div className='flex flex-col space-y-4'>
            <Button type='submit' className='w-full'>
              <span className='ml-2'>Google</span>
            </Button>

            <p className='text-center text-base text-muted-foreground max-w-md'>
              Don't have an account?{' '}
              <Link
                to='/sign-up'
                className='text-blue-500 cursor-pointer underline underline-offset-4 hover:text-primary'
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Form>
  )
})

export default SignInForm
