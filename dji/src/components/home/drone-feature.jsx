import React from 'react'
import { CiCamera, CiVideoOn } from 'react-icons/ci';
import { PiBatteryChargingLight, PiDroneLight } from 'react-icons/pi';
import { RxCaretRight } from "react-icons/rx";

const DroneFeatures = () => {
  return (
    <>
      <div className='my-20 text-center'>
        <div className='font-medium text-3xl my-2'>Best Features Of Our Drones</div>
        <div className='lg:w-[50%] m-auto text-gray-800'>Our drones combine a high-resolution camera, long flight times, and obstacle avoidance in a lightweight, foldable design for safe and easy flying.</div>

        <img src='images/drone.png' alt='drone' className='m-auto'></img>
        <div className='grid grid-cols-4'>
            <div className='p-5 border-light border-r border-gray-300'>
                <CiCamera className='text-3xl m-auto' />
                <div className='text-gray-700 my-3'>Camrea Quality</div>
                <div className='text-lg font-medium'>48 MP</div>
            </div>
            <div className='p-5 border-light border-r border-gray-300'>
                <CiVideoOn className='text-3xl m-auto' />
                <div className='text-gray-700 my-3'>Frame Rates</div>
                <div className='text-lg font-medium'>4K, 120Fps</div>
            </div>
            <div className='p-5 border-light border-r border-gray-300'>
                <PiBatteryChargingLight className='text-3xl m-auto' />
                <div className='text-gray-700 my-3'>Battery Capacity</div>
                <div className='text-lg font-medium'>5600mAh</div>
            </div>
            <div className='p-5'>
                <PiDroneLight className='text-3xl m-auto' />
                <div className='text-gray-700 my-3'>Battery Capacity</div>
                <div className='text-lg font-medium'>5600mAh</div>
            </div>
        </div>
      </div>

      <div className='my-20 text-center'>
        <div className='lg:w-[30%] m-auto font-medium text-3xl my-2'>Standing at the Forefront of Innovation</div>
        <div className='lg:w-[50%] m-auto text-gray-800'>As we explore new technology, we push the capabilities of what is possible, driving progress through continuous innovation.</div>
         <div className="px-5 py-5">
              <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-1 xl:gap-5">
               
                  <div  className="relative">
                    <img src="images/min-bann5.jpg" alt="heroproduct" className="h-screen bg-cover w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-items-start mt-12">
                      <div className="text-gray-600">Engineering, Science & Technology</div>
                      <div className="text-4xl text-black my-2">
                       DJI Ronin Series Wins 2024 
                        Emmy® Award
                      </div>
                      <div className="flex gap-4"><a href="#"
                            className="hover:underline transition-all text-lg font-thin h-10 cutsom-pointer flex items-center justify-content-center w-auto"
                          >
                            Learn More <RxCaretRight className="text-xl mt-1" />
                          </a>
                       
                      </div>
                    </div>
                  </div>
                  <div  className="relative">
                    <img src="images/min-bann6.jpg" alt="heroproduct" className="h-screen bg-cover w-full"  />
                    <div className="absolute inset-0 flex flex-col items-center justify-items-start mt-12">
                      <div className="text-gray-600">Industry Insight Report</div>
                      <div className="text-4xl text-black my-2">
                      DJI Agriculture Annual Report
                      </div>
                      <div className="flex gap-4"><a href="#"
                            className="hover:underline transition-all text-lg font-thin h-10 cutsom-pointer flex items-center justify-content-center w-auto"
                          >
                            Learn More <RxCaretRight className="text-xl mt-1" />
                          </a>
                       
                      </div>
                    </div>
                  </div>
               
              </div>
            </div>
    </div>

    </>
  )
}

export default DroneFeatures;
