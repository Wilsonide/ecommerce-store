"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { FaUser } from "react-icons/fa"
import { useCurrentUser } from "@/hooks/useCurrentUser"

const reviews = [
  {
    name: "Chinwe Okafor",
    review:
      "Icheku Wood & Sons Upholstery transformed my living room. The sofa is not only stylish but also super comfortable. Excellent craftsmanship!",
    rating: 5,
    image: "/images/reviewer1.jpg",
  },
  {
    name: "Emeka Johnson",
    review:
      "They restored my old chairs and made them look brand new. I couldn’t be happier. Their attention to detail is amazing.",
    rating: 4,
    image: "/images/reviewer2.jpg",
  },
  {
    name: "Ngozi Adeyemi",
    review:
      "Professional service and timely delivery. The custom bedframe they built for us is simply stunning.",
    rating: 5,
    image: "/images/reviewer3.jpg",
  },
  {
    name: "Blessing Uzo",
    review:
      "From consultation to delivery, everything was smooth. Their customer service is top-notch!",
    rating: 5,
    image: "/images/reviewer4.jpg",
  },
]

function Reviews() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition h-full">
                <Avatar className='mr-2 rounded-full mb-4 object-cover'>
                  <AvatarImage src={""}/>
                  <AvatarFallback className='bg-sky-500'>
                    <FaUser className='text-white'/>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <div className="flex justify-center mt-2 mb-4 text-yellow-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Reviews