"use client";
import React from 'react'
import { delay, motion } from 'framer-motion'
import { HeroContents } from '@/Contents/HeroContents';

function Hero() {
  return (
    <div className="flex justify-center h-[84dvh] items-center">
      <div className="container">
        <div className="flex flex-col justify-evenly h-[50dvh]">
          <div className=" w-full overflow-hidden space-y-6" >
            {
              HeroContents.map((item) => {
                return (
                  <div className="overflow-hidden h-fit">
                    <motion.h1
                      className="p-2 font-bold text-7xl text-center h-fit "
                      initial={{ y: 200 }}
                      animate={{ y: 0 }}
                      // exit={{
                      //   y:-100
                      // }}
                      transition={{
                        duration: `${item.duration}`,
                        delay: `${item.delay}`
                      }}
                    >{item.staticText} <span className="text-red-600">{item.dynamicText}</span> {item.stateText2}
                    </motion.h1>
                  </div>
                )
              })
            }
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: '1', delay: '2' }}
              className="text-2xl font-medium text-center">
              UI/UX Design, Web Development, Mobile Application, Website/E-Commerce, Lead Generation
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero