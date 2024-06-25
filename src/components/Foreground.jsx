import React, { useState,useRef } from 'react'
import Card from './Card'

 

function Foreground() {

    const ref = useRef(null);

    const data=[
        //icon,description ,fileSize,closeOrDownload,tadDetails

        {desc: "this is going to display",
            filesize:".9mb",
            close: true,
            tag: {isOpen: true, tagTiltle:"Download Nmow", tagColor:'green'}
        },
        {desc: "this is going to display",
            filesize:".9mb",
            close: true,
            tag: {isOpen: true, tagTiltle:"Download Nmow", tagColor:'blue'}
        },
        {desc: "this is going to display",
            filesize:".9mb",
            close: false,
            tag: {isOpen: false, tagTiltle:"Download Nmow", tagColor:'green'}
        },
        {desc: "this is going to display",
            filesize:".9mb",
            close: true,
            tag: {isOpen: true, tagTiltle:"Download Nmow", tagColor:'blue'}
        },
    ]
  return (
   <>
        <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-5 flex-wrap '>
            {data.map((iteam, index)=>(
                <Card data={iteam} reference={ref}/>
            ))}
          
          
        </div>

   </>
  )
}

export default Foreground
