import Image from 'next/image'
import Link from 'next/link'

import { cookies } from 'next/headers'

import nlwLogo from '../assets/spacetime-logo.svg'
import SignIn from './SignIn'
import Profile from './Profile'
import Copyright from './Copyright'

const Hero = () => {
  const isAuthenticated = cookies().has('token')

  return (
    <div className=" flex max-h-screen w-full flex-col items-start justify-between lx:items-center">
      <div className="flex w-full justify-between gap-4 sm:flex-col lx:mb-16">
        <Image src={nlwLogo} alt="NLW Spacetime" className="hidden lx:flex" />
        {!isAuthenticated ? <SignIn /> : <Profile />}
      </div>

      <div className="flex max-h-[500px]  flex-col space-y-5 lx:flex-1  lx:justify-between">
        <Image src={nlwLogo} alt="NLW Spacetime" className="flex lx:hidden" />

        <div>
          <h1 className="mb-1 text-5xl font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p className="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
        </div>

        <Link
          href="/memories/new"
          className="inline-block rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600 lx:w-full lx:py-6 "
        >
          CADASTRAR LEMBRANÇA
        </Link>
      </div>

      <div className=" lx:hidden">
        <Copyright />
      </div>
    </div>
  )
}

export default Hero
