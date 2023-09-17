import { footers, socialmedia } from '@/constants'
import Image from 'next/image'
import React from 'react'

import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';
const font = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={cn("py-10 lg:py-20 section__padding", font.className)}>
      <div className="xl:container mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
          <li>
            <ul className="columns-1 space-y-4">
              <li>
                <Image src="/assets/logo2.png" alt="Team Flow" width={202} height={45} />
              </li>
              <ul className="columns-1 space-y-8">
                <li>All Rights Reserved © teamflow.com</li>
                <ul className="columns-1 space-y-2">
                  <li className="font-medium text-blue-400 text-xl">Address</li>
                  <li>26 W 12th St. New York, NY 10342, NYC</li>
                </ul>
                <ul className="columns-1 space-y-2">
                  <li className="font-medium text-blue-400 text-xl">Social Media</li>
                  <ul className="flex gap-x-4">
                    {socialmedia.map(social => (
                      <li key={social.alt} className="cursor-pointer">
                        <Image src={social.src} alt={social.alt} width={42} height={42} />
                      </li>
                    ))}
                  </ul>
                </ul>
              </ul>
            </ul>
          </li>
          {footers.map(footer => (
            <li key={footer.title}>
              <ul className="columns-1 space-y-8">
                <li className="text-blue-400 font-medium text-xl">{footer.title}</li>
                <ul className="columns-1 space-y-4">
                  {footer.children.map(children => (
                    <li key={children.title} className="font-normal text-lg text-blue-200 cursor-pointer">{children.title}</li>
                  ))}
                </ul>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer