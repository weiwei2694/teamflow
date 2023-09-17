// "use client";
import { ads } from '@/constants'
import Line from '../sub-component/Line'
import Image from 'next/image'

const Ads = () => {
  return (
    <div className="section__padding py-10 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <Line color="bg-yellow-100" />
          <h4 className="mt-5 text-dark-300 text-xl sm:text-2xl md:text-3xl font-bold tracking-[2%]">
            See why over 100,000 teams choose TeamFlow.com
          </h4>
        </div>
        <div className="w-full overflow-x-auto">
          <ul className="flex justify-start lg:justify-end min-w-[700px] gap-x-8 whitespace-nowrap">
            {ads.map(ad => (
              <Image key={ad.alt} src={ad.src} alt={ad.alt} width={ad.width} height={ad.height} className="object-contain" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ads