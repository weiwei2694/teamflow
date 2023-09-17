import { integrates } from "@/constants"
import MainHeading from "../sub-component/MainHeading"
import Image from "next/image"
import { Button } from "../ui/button"

const Integrate = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="text-center max-w-4xl mx-auto">
        <MainHeading title="with your existing tools
in a few clicks" highlightedTitle="Integrate" />
      </div>
      <div className="mt-8 sm:mt-16 lg:mt-32">
        <div className="flex flex-col items-center gap-y-12">
          <ul className="flex flex-row flex-wrap gap-6 justify-evenly">
            {integrates.map(integrate => (
              <li key={integrate.alt}>
                <Image
                  src={integrate.src}
                  alt={integrate.alt}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
          <Button variant="primary" size="primary">View All</Button>
        </div>
      </div>
    </div>
  )
}

export default Integrate