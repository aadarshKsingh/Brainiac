import React from 'react'
import { Leaderboard } from 'flywheel-leaderboard'
import { LeaderboardRounded } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
export const LeaderboardMini = () => {
    const data = [
        {
          name: 'defalco64',
          score: 69
        },
        {
          name: 'adgamerx',
          score: 42
        },
        {
          name: 'galactron',
          score: 63
        },
        {
          name: 'lapsus$',
          score: 96
        },
        {
          name: 'rhysida',
          score: 40
        }
      ]
  return (
    <div className="flex flex-col mx-9">
            <p className='font-monserrat text-3xl font-medium pb-2'>Leaderboard</p>
            <div className='card-body bg-[#FCFAF6] rounded-lg py-5  h-48 shadow-lg'>
            <Leaderboard
            className=' rounded-lg bg-[#FCFAF6] border-2 border-[#4361EE]'
            theme='black'
            scoringMetric='score'
            id='name'
            cell1='score'
            items={data}>

            </Leaderboard>
            <div className='flex justify-end'>
                <NavLink to="/lboard">
                  <LeaderboardRounded/>
                  View Leaderboard
                </NavLink>
              </div>
              </div>
          </div>)
}
