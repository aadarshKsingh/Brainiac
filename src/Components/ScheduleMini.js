import React from 'react'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { Datepicker, } from "@meinefinsternis/react-horizontal-date-picker";
import { CalendarMonthRounded} from '@mui/icons-material';
export const ScheduleMini = () => {
    const [date, setDate] = React.useState({
        startValue: null,
        endValue: null,
        rangeDates: []
      })
    
      const handleChange = (d)=> {
        const [startValue, endValue, rangeDates] = d;
        setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
      };
  return (
          <div className=" p-10 flex flex-col font-black">
            <Typography variant="h5" sx={{color:'black',fontFamily:'montserrat',fontWeight:'bolder',padding:'5px'}}>
              Class Schedule
            </Typography>
            <div className='card shadow-lg p-3 rounded-lg'>
              <div className='card-body rounded-md'>
              <Datepicker
              onChange={handleChange}
              //  locale={enUS}
               startValue={date.startValue}
               endValue={date.endValue}
                />
              </div>
              <div className='h-48 overflow-auto'>
                <ul>
                  <li className=' card-actions p-3 mx-10 bg-[#EDEFFF] rounded-md my-1 text-black'>
                    <div className='flex items-center justify-center w-screen space-x-96 font-montserrat'>
                      <Typography variant='p'>class 1</Typography>
                      <Typography variant='p'>time 1</Typography>
                    </div>
                  </li>
                  <li className=' card-actions p-3 mx-10 bg-[#EDEFFF] rounded-md my-1 text-black'>
                    <div className='flex items-center justify-center w-screen space-x-96 font-montserrat'>
                      <Typography variant='p'>class 2</Typography>
                      <Typography variant='p'>time 2</Typography>
                    </div>
                  </li>
                  <li className=' card-actions p-3 mx-10 bg-[#EDEFFF] rounded-md my-1 text-black'>
                    <div className='flex items-center justify-center w-screen space-x-96 font-montserrat'>
                      <Typography variant='p'>class 3</Typography>
                      <Typography variant='p'>time 3</Typography>
                    </div>
                  </li>
                  <li className=' card-actions p-3 mx-10 bg-[#EDEFFF] rounded-md my-1 text-black'>
                    <div className='flex items-center justify-center w-screen space-x-96 font-montserrat'>
                      <Typography variant='p'>class 4</Typography>
                      <Typography variant='p'>time 4</Typography>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='flex w-screen/2 p-3 justify-end'>
                <NavLink to="/schedule">
                  <CalendarMonthRounded/>
                  View Schedule
                </NavLink>
              </div>
            </div>
          </div>
         
  )
}
