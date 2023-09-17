import { whatYouCanDo } from "@/constants"
import MainHeading from "../sub-component/MainHeading"
import Image from "next/image"
import { cn } from "@/lib/utils"

const WhatYouCanDo = () => {
  return (
    <div className="section__padding py-10 lg:py-20">
      <div className="text-center">
        <MainHeading title="What you" highlightedTitle="can do?" isFront />
      </div>

      <div className="mt-8 sm:mt-16 lg:mt-32">
        <ul className="columns-1 md:columns-2 lg:columns-3 space-y-6">
          {whatYouCanDo.map(data => (
            <li key={data.title} className="flex flex-col items-center text-center space-y-3 break-inside-avoid">
              <div className={cn("w-[70px] h-[70px] p-4 grid place-items-center rounded-lg", data.backgroundColor)}>
                <Image src={data.src} alt={data.title} width={49} height={49} />
              </div>
              <h4 className="text-blue-400 font-bold text-2xl leading-[147%] tracking-[2%]">
                {data.title}
              </h4>
              <p className="tracking-[2%] leading-[34px] text-xl">
                {data.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhatYouCanDo