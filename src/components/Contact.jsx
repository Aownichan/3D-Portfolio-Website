import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Contact = () => {
  
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const handleSnackOpen = () => {
    setOpenSnack(true);
  };
  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value})

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setMessage("Please fill all the fields.")
      setSeverity("error")
      handleSnackOpen()
      return
    }
    
    setLoading(true)

    emailjs.send('service_v1rw10h', 'template_i3c96sc', {form_name: form.name, to_name: 'Aown Raza', from_email: form.email, to_email: 'Aown.Raza963@gmail.com', message: form.message}, 'hd5F31lWX3RZM0bKN')
      .then(() => {
        setMessage("Your message has been sent successfully. I will get back to you soon.")
        setSeverity("success")
        handleSnackOpen()
        setLoading(false)
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        console.log(error.text);
        setLoading(false)
        setMessage("Something went wrong. Please try again.")
        setSeverity("error")
        handleSnackOpen()
      });

  }

  return (
    <>      
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleSnackClose}>
        <MuiAlert onClose={handleSnackClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </MuiAlert>
      </Snackbar>
    </Stack>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.4, 0.3)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea style={{ resize: 'none' }} rows='7' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <button type='submit' disabled={loading} className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.4, 0.3)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")