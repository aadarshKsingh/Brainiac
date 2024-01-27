import React from 'react'
import { Typography } from '@mui/material'
import { AssignmentIndRounded } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
export const AssignmentMini = () => {
  return (
    <div className="px-10 flex flex-col">
        <Typography variant="h5" sx={{color:'black',fontFamily:'montserrat',fontWeight:'bolder',padding:'5px'}}>
              Assignments
        </Typography>
    <div className='card  shadow-lg rounded-lg py-12 px-10'>
        <ul className='card  h-80 overflow-auto'>
            <li className='py-1'>
                <div className='py-4 border-2 border-[#6E44FF] rounded-xl flex flex-row w-full justify-center items-center space-x-80'>
                    <div className='flex flex-col'>
                        <Typography variant='h5'>Subject Name</Typography>
                        <Typography variant='p'>Topic Name</Typography>
                    </div>
                    <Typography variant='p'>Date</Typography>
                </div>
            </li>
            <li  className='py-1'>
                <div className='py-4 border-2 border-[#6E44FF] rounded-xl flex flex-row w-full justify-center items-center space-x-80'>
                    <div className='flex flex-col'>
                        <Typography variant='h5'>Subject Name</Typography>
                        <Typography variant='p'>Topic Name</Typography>
                    </div>
                    <Typography variant='p'>Date</Typography>
                </div>
            </li>
            <li className='py-1'>
                <div className='py-4 border-2 border-[#6E44FF] rounded-xl flex flex-row w-full justify-center items-center space-x-80'>
                    <div className='flex flex-col'>
                        <Typography variant='h5'>Subject Name</Typography>
                        <Typography variant='p'>Topic Name</Typography>
                    </div>
                    <Typography variant='p'>Date</Typography>
                </div>
            </li>
            <li className='py-1'>
                <div className='py-4 border-2 border-[#6E44FF] rounded-xl flex flex-row w-full justify-center items-center space-x-80'>
                    <div className='flex flex-col'>
                        <Typography variant='h5'>Subject Name</Typography>
                        <Typography variant='p'>Topic Name</Typography>
                    </div>
                    <Typography variant='p'>Date</Typography>
                </div>
            </li>
            <li className='py-1'>
                <div className='py-4 border-2 border-[#6E44FF] rounded-xl flex flex-row w-full justify-center items-center space-x-80'>
                    <div className='flex flex-col'>
                        <Typography variant='h5'>Subject Name</Typography>
                        <Typography variant='p'>Topic Name</Typography>
                    </div>
                    <Typography variant='p'>Date</Typography>
                </div>
            </li>
        </ul>
        <div className='flex w-screen/2 p-3 justify-end'>
                <NavLink to="/assignments">
                  <AssignmentIndRounded/>
                  View Assignments
                </NavLink>
              </div>
    </div>
  </div>
  )
}
