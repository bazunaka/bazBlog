import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);
    return (
        <div>
            <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code with Bazunaka</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src={require('./../../img/0bb51823-25ca-43d6-93f9-23ca920a920c.jpg')} alt="" />
            </section>
        </div>
    )
}

export default Profile