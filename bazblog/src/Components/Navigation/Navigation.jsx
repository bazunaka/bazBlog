import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Navigation = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <img src='' alt='Тут картинка' />
                </div>
                <div className='space-y-6'>
                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3
                    items-center' onClick={() => item.title==="Profile"?navigate(`/profile/${5}`)
                    :navigate(item.path)}>
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
                </div>
                <div className='py-10'>
                    <Button sx={{width:"100%", borderRadius:"29px", py:"15px",
                    bgcolor:"#0F4C75", color:"#BBE1FA"}}
                    variant='contained'>
                        Написать
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt='username' src='' />
                    <div>
                        <span>Bazunaka</span><br />
                        <span className='opacity-70'>@Bazunaka</span>
                    </div>
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}

export default Navigation