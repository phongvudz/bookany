import { Link, Outlet, createRootRouteWithContext, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import { AuthContext } from '@/auth/useAuth'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: AuthContext
}>()({
  component: RootComponent,
  notFoundComponent
})

function RootComponent() {
  return (
    <Suspense fallback={<>Loading</>}>
      <div className='h-screen w-screen'>
        <Outlet />
        <Toaster />
      </div>
      <ReactQueryDevtools buttonPosition='bottom-left' />
      <TanStackRouterDevtools position='bottom-right' />
    </Suspense>
  )
}

function notFoundComponent() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full min-h-[400px] gap-2 text-center'>
      <img
        className='aspect-[1/1] overflow-hidden rounded  object-fill object-center'
        height='250'
        src='/src/assets/image/not-found-2.jpeg'
        width='350'
      />
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>Lost your nail?</h1>
        <p className='max-w-[400px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <Link to='/' className={cn(buttonVariants({ variant: 'default' }))}>
        Go back home
      </Link>
    </div>
  )
}
