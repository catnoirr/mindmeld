'use client'

import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

const Office = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-0">
          <div className="bg-white lg:rounded-tl-lg lg:rounded-bl-lg  overflow-hidden h-[600px]">
            <div className="relative h-full">
              <Image
                src="/team1.png"
                alt="Professional team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="bg-indigo-800 text-white  lg:h-[600px] h-[700px] lg:rounded-tr-lg lg:rounded-br-lg">
            <div className="h-[300px] relative lg:rounded-tr-lg  overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.7183526665837!2d75.84183573066603!3d30.929799399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8362c97c0aed%3A0xfb030198961bfc2c!2sMindmeld%20Management%20Consulting%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710401459831!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <div className="p-8 py-16">
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>
              <div className="space-y-4">
                <p className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>
                    Mindmeld Management Consulting Private Limited
                    Old GT Road, Near Jalandhar Byepass,
                    Opposite Old Sabzi Mandi,
                    Ludhiana, Punjab, 141001
                  </span>
                </p>
                <div className="flex items-center font-medium">
                    <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span>mindmeld@gmail.com</span>
                </div>
                <div className=" flex  gap-6 items-center ">
                  <p className="flex items-center font-medium">
                    <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span>+918872304094</span>
                  </p>
                  <p className="flex items-center font-medium">
                    <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span>+919815081610</span>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Office
