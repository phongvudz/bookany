import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-term-policy/terms')({
  component: Terms
})

function Terms() {
  return (
    <div className='mx-auto max-w-2xl space-y-4'>
      <header className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>Terms and Conditions</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Please read these terms and conditions carefully before using our website.
        </p>
      </header>
      <div className='prose max-w-none space-y-8'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>1. Terms</h2>
          <p>
            By accessing the website at , you are agreeing to be bound by these terms of service, all applicable laws
            and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do
            not agree with any of these terms, you are prohibited from using or accessing this site. The materials
            contained in this website are protected by applicable copyright and trademark law.
          </p>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>2. Use License</h2>
          <ol>
            <li>
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Shadcn's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
              a transfer of title, and under this license you may not:
              <ol>
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any public display (commercial or
                  non-commercial);
                </li>
                <li>attempt to decompile or reverse engineer any software contained on Shadcn's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ol>
            </li>
          </ol>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>3. Disclaimer</h2>
          <p>
            The materials on Shadcn's website are provided on an 'as is' basis. Shadcn makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </div>
      </div>
    </div>
  )
}
