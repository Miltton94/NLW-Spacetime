import Link from 'next/link'
import Copyright from './Copyright'

const EmptyMemories = () => {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center p-16">
      <p className="max-w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          criar agora
        </Link>
        !
      </p>

      <div className="absolute bottom-6 hidden lx:flex">
        <Copyright />
      </div>
    </div>
  )
}

export default EmptyMemories
