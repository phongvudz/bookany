import { Outlet, createFileRoute, useRouter } from '@tanstack/react-router'
import { MoveLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_layout-term-policy')({
  component: Layout
})

function Layout() {
  const router = useRouter()
  return (
    <div className='h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  justify-center overflow-y-auto overflow-x-hidden'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute md:left-10 md:top-10 top-5 right-10'>
        <Button variant={'link'} onClick={() => router.history.back()} className='flex items-center gap-2'>
          <MoveLeft className='w-5 h-5' /> Back
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: 'easeInOut'
        }}
        className='grid max-w-3xl px-4 text-sm gap-8 md:gap-12 md:px-6 py-4'
      >
        <Outlet />
      </motion.div>
    </div>
  )
}
