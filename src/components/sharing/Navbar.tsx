import Image from 'next/image'
import React from 'react'
import { routes } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import MobileNavbar from '../sub-component/MobileNavbar'

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-start sm:justify-between items-center">
      <div className="w-full sm:w-fit flex gap-x-4 sm:flex-row flex-row-reverse justify-between">
        <div className="inline lg:hidden">
          <MobileNavbar />
        </div>
        <Image src="/assets/logo1.png" alt="Team Flow" width={202} height={45} className="object-contain" />
      </div>
      <ul className="hidden lg:flex gap-x-8">
        {routes.map(route => (
          <Link key={route.title} href={route.href} className="text-light-200 font-normal text-xl tracking-wide">{route.title}</Link>
        ))}
      </ul>
      <div className="hidden sm:inline">
        <Button variant="ghost" className="lg:text-light-400">Login</Button>
        <Button variant="primary" size="primary">Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar