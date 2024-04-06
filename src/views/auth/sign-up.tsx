import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SignUpState } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignupSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.')
})

interface SignUpFormProps {
  moveState: (state: SignUpState) => void
}

const SignUpForm = memo(({ moveState }: SignUpFormProps) => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstname: '',
      lastname: ''
    }
  })
  const onSubmit = useCallback((data: z.infer<typeof SignupSchema>) => {
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
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
            <FormField
              control={form.control}
              name='firstname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='firstname'>First name</FormLabel>
                  <FormControl>
                    <Input id='firstname' placeholder='Phong' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='lastname'>Last name</FormLabel>
                  <FormControl>
                    <Input id='lastname' placeholder='Vu' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
          <Button type='submit' className='w-full mt-8'>
            <span>Sign up &rarr;</span>
          </Button>
          <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

          <div className='flex flex-col space-y-4'>
            <Button type='submit' className='w-full'>
              <span className='ml-2'>Google</span>
            </Button>
            <p className='text-center text-base text-muted-foreground max-w-md'>
              Already have an account?{' '}
              <Link
                to='/sign-in'
                className='text-blue-500 cursor-pointer underline underline-offset-4 hover:text-primary'
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Form>
  )
})

export default SignUpForm
