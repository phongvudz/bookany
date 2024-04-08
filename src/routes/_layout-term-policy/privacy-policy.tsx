import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-term-policy/privacy-policy')({
  component: PrivacyPolicy
})

function PrivacyPolicy() {
  return (
    <>
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Privacy Policy</h1>
        <p className='text-gray-500 dark:text-gray-400'>Last updated: April 7, 2024</p>
        <div className='space-y-4'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Introduction and General Terms</h2>
            <p>
              We are committed to safeguarding the privacy of our users while providing a personalized and valuable
              service. This Privacy Policy explains the data collection, use, and disclosure practices of [Your Website
              Name] and its affiliates.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Information We Collect</h2>
            <p>
              We collect personal information that you provide to us when you register for an account, update your
              profile, or otherwise communicate with us. This information may include your name, email address, and
              other contact information.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to personalize your experience. We may also use your information to send you promotional messages and
              other information that may be of interest to you.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track user activity and collect information about your
              interactions with our website. This information helps us analyze and improve the user experience and
              provide targeted advertising.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Data Security</h2>
            <p>
              We take the security of your information seriously and have implemented technical and organizational
              measures to protect your data against unauthorized access, disclosure, alteration, and destruction.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We encourage you to review this page periodically for the
              latest information on our privacy practices.
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-200 w-full py-4'>
        <div className='container flex flex-col gap-2 text-xs items-center justify-center px-4 md:gap-4 md:flex-row md:px-6'>
          <p className='text-center text-gray-500 dark:text-gray-400'>
            This website is operated by Bookany. All inquiries may be directed to:
          </p>
          <div className='flex flex-col gap-1 md:ml-auto md:gap-2 lg:gap-1'>
            <p className='text-gray-500 dark:text-gray-400'>Email: phongvudz@gmail.com</p>
            <p className='text-gray-500 dark:text-gray-400'>Phone: 0784-249-942</p>
          </div>
        </div>
      </div>
    </>
  )
}
