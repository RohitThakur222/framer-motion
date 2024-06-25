import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
   <>
          <motion.div drag dragConstraints={reference} className=' relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
          <FaRegFileAlt/>
          <p className='text-sm mt-5 leading-tight  font-semibold'>{data.desc}</p>
          <div className='footer absolute bottom-0 w-full   left-0 '>
            <div className='flex items-center justify-between mb-3 p-3'>
                <h4>{data.filesize}</h4>
                <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseCircle />:<FiDownload  size=".8em" color='#fff'/>}

                    

                </span>
                

            </div>
            {data.tag.isOpen && ( 
                <div className={`tag w-full py-4 ${ data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600"}`}>
                 <h3 className='text-md font-semibold flex justify-center'>Download Now</h3>
                </div>
            )} 
           
               
          </div>

          </motion.div>
    

   </>
  )
}

export default Card
