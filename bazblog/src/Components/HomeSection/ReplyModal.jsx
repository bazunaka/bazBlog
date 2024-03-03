import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4,
};

export default function ReplyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar className='cursor-pointer' alt='' src='' onClick={() => navigate(`/profile/${6}`)} />
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className='flex cursor-pointer items-center space-x-2'>
                                    <span className='font-semibold'>Code with Bazunaka!</span>
                                    <span className='text-gray-600'>@Bazunaka . 2мин</span>
                                    <img className='ml-2 w-5 h-5' src={require('./../../img/verify_icon_227246.png')} alt="" />
                                </div>
                                <div>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                        <MoreHorizIcon />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleDeleteTweet}>Удалить</MenuItem>
                                        <MenuItem onClick={handleDeleteTweet}>Отредектировать</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div onClick={() => navigate(`/tweet/${3}`)} className='cursor-pointer'>
                                    <p className='mb-2 p-0'>Тестовое сообщение!</p>
                                    <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src={require('./../../img/Vw6h8fR2Ic1urCfu.png')} alt="" />
                                </div>
                                <div className='py-5 flex flex-wrap justify-between items-center'>
                                    <div className='space-x-3 flex items-center text-gray-600'>
                                        <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                        <p>43</p>
                                    </div>
                                    <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                        <RepeatIcon
                                            onClick={handleCreateRetweet}
                                            className='cursor-pointer' />
                                        <p>54</p>
                                    </div>
                                    <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                        {true ? <FavoriteIcon className='cursor-pointer'
                                            onClick={handleLiketweet} /> : <FavoriteBorderIcon className='cursor-pointer'
                                                onClick={handleLiketweet} />}
                                        <p>54</p>
                                    </div>
                                    <div className='space-x-3 flex items-center text-gray-600'>
                                        <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                        <p>430</p>
                                    </div>
                                    <div className='space-x-3 flex items-center text-gray-600'>
                                        <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}