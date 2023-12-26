import React from 'react'
import { Typography } from '@mui/material'
import { Leaderboard } from 'flywheel-leaderboard'
import { LeaderboardRounded } from '@mui/icons-material'
export const LeaderboardMini = () => {
    const data = [
        {
          name: 'dylan',
          twitter_handle: '@dxlantxch',
          github_username: '@dylanintech',
          users: 40,
          twitter_followers: 1055,
          github_stars: 5,
        },
        {
          name: 'arib',
          twitter_handle: '@aribk24',
          github_username: '@Aribk7',
          users: 105000,
          twitter_followers: 4949,
          github_stars: 4,
        },
        {
          name: 'aleem',
          twitter_handle: '@aleemrehmtulla',
          github_username: '@aleemrehmtulla',
          users: 50000,
          twitter_followers: 4107,
          github_stars: 200,
        },
        {
          name: 'rochan',
          twitter_handle: '@0xSxlty',
          github_username: '@0xSxlty',
          users: 40000,
          twitter_followers: 2226,
          github_stars: 4,
        }
      ]
  return (
    <div className="  ml-16 px-10 w-10/12 flex flex-col">
         <Typography variant="h5" sx={{color:'black',fontFamily:'montserrat',fontWeight:'bolder',padding:'5px'}}>
              Leaderboard
            </Typography>
            <div className='card p-10 shadow-lg rounded-lg'>
            <Leaderboard
            className='card shadow-lg w-11/12 px-10 rounded-lg bg-[#f2f0ec]'
            theme='red'
            scoringMetric='users'
            id='name'
            cell1='Name'
            cell2='Score'
            items={data}>

            </Leaderboard>
            <div className='flex w-screen/2 p-3 justify-end'>
                <button>
                  <LeaderboardRounded/>
                  View Leaderboard
                </button>
              </div>\
              </div>
          </div>)
}
