import Image from 'next/image'
import React from 'react'
import SubHeading from '../sub-component/SubHeading'
import Line from '../sub-component/Line'
import Paragraph from '../sub-component/Paragraph'

const VisualizeWorkWithViews = () => {
  return (
    <div className="bg-light-300">
      <div className="xl:container mx-auto py-10 lg:py-20 section__padding">
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-8">
          <div className="flex justify-center lg:justify-start">
            <Image src="/assets/visualize-work-with-views.png" alt="Visualize Work With Views" width={629} height={651} className="object-contain" />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="flex flex-col gap-y-3 sm:gap-y-5">
              <SubHeading title="Visualize work with Views" />
              <Line color="bg-blue-300" />
              <Paragraph content="View data as a map, calendar, timeline, kanban, and more
  The easy-to-use, visual interface lets any team member jump in and get started, no training required." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisualizeWorkWithViews