import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik'
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  borderRadius: 4
};

const handleSubmit = () => {
  console.log("Submitted");
}

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onsubmit: handleSubmit
  })

  const handleImageChange = (event) => {
    setUploading(true);
    const { name } = event.target
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label='close'>
                  <CloseIcon />
                  <p className=''>Редактировать профиль</p>
                </IconButton>
              </div>
              <Button type='submit'>Сохранить</Button>
            </div>
            <div className='overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <div>
                <div className='w-full'>
                  <div className='relative'>
                    <img className='w-full h-[12rem] object-cover object-center' src={require('./../../img/0bb51823-25ca-43d6-93f9-23ca920a920c.jpg')} alt="" />
                    <input type="file" className='absolute top-0 left-0 w-full opacity-0 cursor-pointer' name='backgroundImage' onChange={handleImageChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-3'>
              <TextField
                fullWidth
                id="fullName"
                name='fullname'
                label="Полное имя"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                helperText={formik.touched.fullname && formik.errors.fullname}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                id="bio"
                name='bio'
                label="О себе"
                value={formik.values.bio}
                onChange={formik.handleChange}
                error={formik.touched.bio && Boolean(formik.errors.bio)}
                helperText={formik.touched.bio && formik.errors.bio}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}