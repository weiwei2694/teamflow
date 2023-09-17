import React from 'react'
import Image from 'next/image'
import SubHeading from '../sub-component/SubHeading'
import Line from '../sub-component/Line'
import Paragraph from '../sub-component/Paragraph'

const SaveTimeWithAutomations = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex justify-center lg:justify-start">
          <Image src="/assets/save-time-with-automations.png" alt="Save Time With Automations" width={689} height={680} className="object-contain" />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex flex-col gap-y-3 sm:gap-y-5">
            <SubHeading title="Save time with Automations" />
            <Line color="bg-yellow-100" />
            <Paragraph content="Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveTimeWithAutomations