import Image from "next/image"
import Line from "../sub-component/Line"
import MainHeading from "../sub-component/MainHeading"
import SubHeading from "../sub-component/SubHeading"
import Paragraph from "../sub-component/Paragraph"

const OurFeatures = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="text-center">
        <MainHeading title="Our" highlightedTitle="Features" isFront />
      </div>

    <div className="mt-8 sm:mt-16 lg:mt-32">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex justify-center lg:justify-start">
            <Image src="/assets/features.png" alt="Our Features" width={732} height={678} className="object-contain" />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="flex flex-col gap-y-3 sm:gap-y-5">
              <SubHeading title="Manage everythingin one workspace" />
              <Line color="bg-yellow-100" />
              <Paragraph content="Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurFeatures