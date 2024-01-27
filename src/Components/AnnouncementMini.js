import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { AnnouncementRounded } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
export const AnnouncementMini = () => {
  return (
    <div className=" p-11 flex flex-col">
        <Typography variant='h5' className=' text-black' sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Announcements</Typography>
    <div className='card shadow-lg rounded-lg'>
    <div className='px-10 h-96 overflow-auto font-montserrat'>
        <ul>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row '>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row '>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row '>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row'>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row'>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
            <li className='my-2 bg-[#EDEFFF] text-black'>
                <div className='flex flex-row'>
                    <Avatar className='m-2' sx={{width:'50px',height:'50px'}}/>
                    <div className='flex flex-col'>
                        <Typography variant='h6' className='leading-none'>Faculty 1</Typography>
                        <Typography variant='p' className='leading-none'>Message</Typography>
                    </div>
                </div>
            </li>
           
        </ul>
        
    </div>
    <div className='flex w-screen/2 p-7 justify-end'>
                <NavLink to="/announcements">
                  <AnnouncementRounded/>
                  View All Announcements
                </NavLink>
            </div>
    </div>
           
  </div>
  )
}
