import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { SparklesIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
  beforeLoad: ({ context: { auth } }) => {
    if (auth.isAuthenticated) {
      throw redirect({
        to: '/merchants'
      })
    }
  },
  component: Home
})

function Home() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col min-h-screen overflow-y-auto overflow-x-hidden h-[100vh]'>
      <header className='relative z-10 py-2'>
        <div className='container flex items-center justify-between px-4 md:px-6'>
          <Link className='flex items-center space-x-2' href='#'>
            <SparklesIcon className='h-6 w-6 text-rose-500' />
            <span className='font-semibold tracking-tighter'>Bookany</span>
          </Link>
          <nav className='hidden space-x-4 text-sm font-medium lg:flex'>
            <Link href='#'>
              <Button className='hidden md:inline-flex' size='sm' variant='link'>
                Features
              </Button>
            </Link>
            <Link href='#'>
              <Button className='hidden md:inline-flex' size='sm' variant='link'>
                Contact
              </Button>
            </Link>
            <Link href='#'>
              <Button className='hidden md:inline-flex' size='sm' variant='link'>
                Pricing
              </Button>
            </Link>
            <Link href='#'>
              <Button className='hidden md:inline-flex' size='sm' variant='link'>
                Sign Up
              </Button>
            </Link>
          </nav>
          <div className='flex items-center space-x-2'>
            <Button
              className='hidden md:inline-flex'
              size='sm'
              variant='outline'
              onClick={() => navigate({ to: '/sign-in' })}
            >
              Sign In
            </Button>
            <Button className='md:hidden' size='sm' variant='outline' onClick={() => navigate({ to: '/sign-in' })}>
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='393'
                src='/src/assets/image/nails-appointment.jpeg'
                width='700'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter lg:text-5xl'>Effortless Nail Appointments</h1>
                  <p className='max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                    Book your next nail appointment with ease. Discover the best nail salons near you.
                  </p>
                </div>
                <form className='grid gap-4 md:gap-0 sm:grid-cols-[1fr_200px] lg:gap-4 lg:grid-cols-[1fr_200px]'>
                  <Input className='w-full' placeholder='Enter your email' />
                  <Button className='w-full md:w-[200px]' size='lg' type='button'>
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-gray-100 py-12 lg:py-24 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='393'
                src='/placeholder.svg'
                width='700'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter lg:text-5xl'>Your Perfect Nail Style</h2>
                  <p className='max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                    Choose from a variety of nail styles and colors. Express your creativity with Bookany.
                  </p>
                </div>
                <Link
                  className='inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
              <div className='flex flex-col space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Easy Appointments</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Bookany makes it simple to book your nail appointments. Find the best nail salons near you and choose
                  your preferred stylist.
                </p>
              </div>
              <div className='flex flex-col space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Beautiful Nails</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Discover the perfect nail style for every occasion. Bookany offers a wide range of designs and colors
                  to match your unique style.
                </p>
              </div>
              <div className='flex flex-col space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Personalized Experience</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  With Bookany, you can save your favorite nail designs and share them with friends. Get personalized
                  recommendations based on your style preferences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>The Best Nail Salons</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  We partner with top-rated nail salons to provide you with a seamless booking experience. Quality
                  service is just a few clicks away.
                </p>
              </div>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Express Your Style</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Bookany offers a variety of nail styles to suit your mood. From classic french tips to trendy nail
                  art, you can find the perfect look for every occasion.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Seamless Booking</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  With Bookany's easy-to-use platform, you can browse nail salons, view available appointments, and book
                  your desired time slot in just a few taps.
                </p>
              </div>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Discover New Trends</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Follow the latest nail trends and get inspiration for your next manicure. Bookany keeps you informed
                  about the hottest styles in the nail industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Your Nail Style, Your Way</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Bookany's platform is designed to give you the freedom to express your unique style. Whether you
                  prefer classic elegance or bold creativity, we help you find the perfect nails to match your
                  personality.
                </p>
              </div>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
            </div>
          </div>
        </section>
        <section className='py-12 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center'
                height='400'
                src='/placeholder.svg'
                width='900'
              />
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter'>Your Perfect Nail Style</h2>
                <p className='text-gray-500 md:w-[600px] dark:text-gray-400'>
                  Choose from a variety of nail styles and colors. Express your creativity with Bookany.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-2 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Get Started with Bookany</h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Book your next nail appointment with ease. Discover the best nail salons near you.
                </p>
              </div>
              <form className='flex flex-col md:flex-row sm:gap-0 min-[400px]:max-w-2xl md:items-center md:space-x-2 space-y-2'>
                <Input className='max-[300px] sm:max-[400px]' placeholder='Enter your email' type='email' />
                <Button className='w-full md:w-auto' size='lg' type='button'>
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-gray-900 py-12 text-gray-50 dark:bg-gray-50 dark:text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-4 md:px-6 space-y-4 text-center'>
          <div className='space-y-2'>
            <h3 className='font-bold tracking-tighter'>Bookany</h3>
            <p className='text-sm tracking-tighter'>Effortless Nail Appointments</p>
          </div>
          <ul className='flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-6'>
            <li>
              <Link className='text-sm underline-offset-4 underline' href='#'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-sm underline-offset-4 underline' href='#'>
                Features
              </Link>
            </li>
            <li>
              <Link className='text-sm underline-offset-4 underline' href='#'>
                Contact
              </Link>
            </li>
            <li>
              <Link className='text-sm underline-offset-4 underline' href='#'>
                Sign Up
              </Link>
            </li>
          </ul>
          <div className='flex justify-center space-x-2'>
            <Link className='text-sm underline-offset-4 underline' href='#'>
              Terms
            </Link>
            <Link className='text-sm underline-offset-4 underline' href='#'>
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
