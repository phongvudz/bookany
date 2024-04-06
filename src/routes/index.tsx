import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({ context: { auth } }) => {
    if (!auth.isAuthenticated) {
      throw redirect({
        to: '/sign-in'
      })
    }
  },
  component: Home
})

function Home() {
  return (
    <div>
      <h3>Phong Vu dep trai</h3>
    </div>
  )
}
