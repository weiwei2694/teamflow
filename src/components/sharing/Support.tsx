import React from 'react';
import Email from '../forms/Email';
import { Mail } from "lucide-react";

const Support = () => {
  return (
    <div className="bg-light-300">
      <div className="xl:container mx-auto py-10 lg:py-20 section__padding ">
        <div className="text-center flex flex-col space-y-4">
          <h3 className="text-orange-200 font-bold leading-[147%] text-xl sm:text-2xl tracking-[2%]">Support</h3>
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl sm:text-4xl leading-[147%] text-blue-500">Subscribe Newsletter & get</h2>
            <h2 className="font-light text-2xl sm:text-4xl leading-[147%] text-blue-500">Company News</h2>
          </div>
        </div>
        <div className="mt-10 max-w-[600px] mx-auto shadow-xl rounded-xl overflow-hidden">
          <div className="p-2 flex items-center bg-light-100">
            <Mail className="w-5 h-5 ml-2 text-gray-200" />
            <Email />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support