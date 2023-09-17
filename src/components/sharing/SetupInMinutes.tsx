import React from 'react'
import SubHeading from '../sub-component/SubHeading'
import Line from '../sub-component/Line'
import Paragraph from '../sub-component/Paragraph'
import Image from 'next/image'

const SetupInMinutes = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          <Image src="/assets/setup-in-minutes.png" alt="Setup In Minutes" width={681} height={658} className="object-contain" />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex flex-col gap-y-3 sm:gap-y-5">
            <SubHeading title="Set up in minutes" />
            <Line color="bg-yellow-100" />
            <Paragraph content="Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.
Choose from hundreds of pre-made templates and tell stories with data
 with our easy drag-and-drop infographic creator." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupInMinutes