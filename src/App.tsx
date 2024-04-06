import Router from './Router'
import { AuthProvider } from './auth/useAuth'

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
