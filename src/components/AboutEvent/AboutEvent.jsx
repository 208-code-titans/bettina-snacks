import React from 'react'

const AboutEvent = () => {
  return (
    <div className = 'pb-[300px] pt-[150px]'>
         <h1 className='text-7xl uppercase2 text-red-600 text-center'>EVE<span className='text-black'>NTS</span></h1>
            <div className ='flex flex-row  mx-[100px]'>
                    <div>
                        <ul className = 'list-disc basis-1/4 flex flex-col space-y-[30px]'>
                            <li>Lorem ipsum dolor</li>
                            <li>Consectetur adipiscing </li>
                            <li>Malesuada neque</li>
                        </ul>
                    </div>
                   
                    <div>
                        <ul className = 'list-disc basis-1/4 pl-[650px] flex flex-col space-y-[30px]'>
                            <li>Nullam aliquet</li>
                            <li>Nullam congue</li>
                            <li>Vivamus non</li>
                        </ul>
                    </div>
            </div>
    </div>
  )
}

export default AboutEvent