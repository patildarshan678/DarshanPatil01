import React, { useEffect } from 'react'
import './Home.css'
import { Button } from 'react-bootstrap';
import sessions from './apis/sessions';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailForms from './Forms/DetailForms';

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    let token = sessionStorage.getItem('token')
    if (token) {
      navigate('/forms')

    }
    else {
      navigate('/home')
    }

  }, [])

  async function start_handler() {
    let session_resp = await sessions.start_session()
    let token = session_resp.data.token
    sessionStorage.setItem('token', token)
    navigate('/forms')

  }
  return (
    <div className='home_container'>

      <Button className='start_btn' onClick={start_handler}> Start</Button>
    </div>
  )
}

export default Home