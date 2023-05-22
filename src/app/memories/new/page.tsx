import Copyright from '@/components/Copyright'
import NewMemoryForm from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const newMemory = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col gap-4 p-16 pb-10">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />

      <div className="mt-6 hidden self-center lx:flex">
        <Copyright />
      </div>
    </div>
  )
}

export default newMemory
