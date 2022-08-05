import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-red-400 text-black'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
      <div className='containier '>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 text-center sm:px-8 px-5 py-16'>
          {/*Column1 */}
          <div className='col' >
            <h1 className='text-xl'>LOGO</h1> <br /> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non erat ac erat 
                 ultrices vehicula</p>

          </div>
          {/*Column2 */}
          <div className='col font-serif'>
            <ul>
              <br /><li><a href="#">ABOUT</a></li> <br /> <br />
              <li><a href="#">MENU</a></li> <br /> <br />
              <li><a href="#">CONTACT US</a></li> <br /> <br />
              <li><a href="#">HOME</a></li> <br />
            </ul>

          </div>

          {/*Column3 */}
          <div className='col'>
            <h1 className='font-semibold text-xl'>WORKING HOURS</h1> <br />
            <ul>
              <li>MONDAY-FRIDAY <br /> <i>08:00am - 05:00pm</i> </li>
              <br />
              <li>SATURDAY-SUNDAY <br /> <i>07:00am - 11:00pm</i> </li>
            </ul>
            <br />
            <h1 className='font-bold text-xl'>FOLLOW US</h1> <br />
             
           <div className='flex items-center justify-center gap-3'>
             <BsWhatsapp className='cursor-pointer w-10 h-9'/>
             <AiFillInstagram className='cursor-pointer w-12 h-11'/>
             <FaFacebookSquare className='cursor-pointer w-10 h-9'/>
           </div> 

          </div>

        </div>

      </div>


      </div>
      
     
    </footer>
  )
}

export default Footer