import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material'

const Profile = () => {

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }

    const handleFollowUser = () => {
        console.log("follow user")
    }
    return (
        <div>
            <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code with Bazunaka</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src={require('./../../img/0bb51823-25ca-43d6-93f9-23ca920a920c.jpg')} alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='transform -translate-y-24' alt="code with Bazunaka" src=""
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }} />
                </div>
                {true ? <Button className='rounded-full' variant='contained'
                    onClick={handleOpenProfileModel}
                    sx={{ borderRadius: "20px" }} >
                    Редактировать профиль
                </Button> : <Button className='rounded-full' variant='contained'
                    onClick={handleFollowUser}
                    sx={{ borderRadius: "20px" }} >
                    {true ? "Подписаться" : "Отписаться"}
                </Button>}

            </section>
        </div>
    )
}

export default Profile