import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_auth')({
  component: LayoutAuth
})

function LayoutAuth() {
  return (
    <div className='h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white md:[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]'></div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <Outlet />
        <p className='px-8 text-center text-base text-muted-foreground mt-8 max-w-md'>
          By clicking continue, you agree to our{' '}
          <span>
            <Link to='/terms' className='text-blue-500 underline underline-offset-4 hover:text-primary'>
              Terms of Service
            </Link>
          </span>{' '}
          and{' '}
          <span>
            <Link to='/privacy-policy' className='text-blue-500 underline underline-offset-4 hover:text-primary'>
              Privacy Policy
            </Link>
          </span>
        </p>
      </motion.div>
    </div>
  )
}
