import { useState } from 'react'
import axios from 'axios'
import config from '../config'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signinRedux } from '../slices/authSlice'

const Signin = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const signin = () => {
    // check if user has really entered any value
    if (Email.length === 0) {
      alert('please enter email')
    } else if (Password.length === 0) {
      alert('please enter password')
    } else {
      axios
        .post(config.serverURL + '/signin', {
          Email,
          Password,
        })
        .then((response) => {
          const result = response.data
          // console.log(result['staus'])
          if (result['status'] === 'error') {
            alert(result['error'])
          } else {
            const user = result['data']
            dispatch(signinRedux(user))
            alert('Hello ' + user['First_name'] + ', welcome to Mobigic')
            navigate('/file')
          }
        })
    }
  }
  return (
    <div
      style={{
        width: 500,
        height: 300,
        position: 'relative',
        top: 100,
        left: 0,
        bottom: 0,
        margin: 'auto',
        borderStyle: 'solid',
        borderColor: 'lightblue',
        borderRadius: 20,
        padding: 30,
      }}>
      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-control'
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <button onClick={signin} className='btn btn-success'>
        <i class="fas fa-sign-in-alt"></i> Sign-In
        </button>
      </div>
      <br />
      <Link to='/signup' style={{ textAlign: 'center' }}>
          Don't have an account. SIGN UP
        </Link>
    </div>
  )
}
export default Signin
