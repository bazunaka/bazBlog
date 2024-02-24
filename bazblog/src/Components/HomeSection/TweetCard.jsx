import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TweetCard = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatIcon />
                <p>You Retweet</p>
            </div>
            <div className='flex space-x-5'>
                <Avatar className='cursor-pointer' alt='' src='' onClick={() => navigate(`/profile/${6}`)} />
            </div>
        </div>
    )
}

export default TweetCard