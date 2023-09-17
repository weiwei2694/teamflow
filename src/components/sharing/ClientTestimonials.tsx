"use client";
import React from 'react'
import MainHeading from '../sub-component/MainHeading'
import Image from 'next/image'
import { testimonials } from '@/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ClientTestimonials = () => {
  return (
    <div className="py-10 lg:py-20 section__padding">
      <div className="text-center">
        <MainHeading title="Client" highlightedTitle="Testimonials" isFront />
      </div>

      <div className="mt-8 sm:mt-16">
        <div className="flex justify-center">
          <Swiper
            rewind={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map(testimoni => (
              <SwiperSlide key={testimoni.name}>
                <Card className="select-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-x-4">
                      <Image src={testimoni.image} alt={testimoni.name} width={100} height={100} className='object-contain' />
                      <div className='flex flex-col -space-y-1'>
                        <h4 className="font-bold text-2xl text-blue-500">{testimoni.name}</h4>
                        <span className="text-muted-foreground tracking-wide text-sm">Unknown</span>
                      </div>
                    </CardTitle>
                    <CardDescription className="font-normal text-xl leading-[160%]">
                      “The features on monday.com make our team work faster and easier to organize”
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default ClientTestimonials