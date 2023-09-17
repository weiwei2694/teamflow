import Image from 'next/image'
import React from 'react'
import SubHeading from '../sub-component/SubHeading'
import Line from '../sub-component/Line'
import Paragraph from '../sub-component/Paragraph'
import { Button } from '../ui/button'

const CustomerSupport = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div>
          <Image src="/assets/customer-support.png" alt="Customer Support" width={645} height={704} className="object-contain" />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex flex-col gap-y-3 sm:gap-y-5">
            <SubHeading title="24/7 Customer Support" />
            <Line color="bg-yellow-100" />
            <Paragraph content="Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge 
base" />
            <Button variant="primary" size="primary">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport