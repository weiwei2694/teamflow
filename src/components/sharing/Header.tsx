import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from '../ui/button'
import Line from '../sub-component/Line'

const Header = () => {
  return (
    <div className="relative min-h-screen bg-[url(/assets/main-background.png)] bg-no-repeat bg-cover">
      <div className="xl:container mx-auto h-full section__padding">
        <Navbar />
        <div className="flex flex-col-reverse lg:flex-row gap-8 h-full py-10 pt-0 lg:py-20">
          <div className="flex flex-col justify-center gap-y-4 md:gap-y-8">
            <Button className="bg-light-100 hover:bg-light-100/90 text-gray-200 text-lg w-fit">
              👋 Welcome to TeamFlow
            </Button>
            <h1 className="leading-[126%] font-extrabold text-light-100 text-2xl sm:text-4xl md:text-6xl">
              Work the way that works for you
            </h1>
            <Line color="bg-cyan-100" />
            <h5 className="font-normal text-lg sm:text-2xl md:text-3xl leading-[160%] tracking-[2%] text-light-100">
              Create, Build, Collaborate and ship products very faster
            </h5>
            <Button variant="primary" size="primary">Get Started</Button>
          </div>
          <div className="w-full flex items-center">
            <Image
              src="/assets/main-header.png"
              alt="Main Header"
              width={832}
              height={539}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header