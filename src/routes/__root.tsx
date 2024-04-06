import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import { AuthContext } from '@/auth/useAuth'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: AuthContext
}>()({
  component: RootComponent
})

function RootComponent() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Outlet />
      <ReactQueryDevtools buttonPosition='bottom-left' />
      <TanStackRouterDevtools position='bottom-right' />
    </Suspense>
  )
}
