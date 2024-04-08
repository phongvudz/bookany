import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast: 'bg-blue-400',
          title: 'text-red-400 text-2xl',
          description: 'text-red-400',
          actionButton: 'bg-zinc-400',
          cancelButton: 'bg-orange-400',
          closeButton: 'bg-lime-400'
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
