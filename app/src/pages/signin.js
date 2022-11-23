import { useState } from 'react'
import axios from 'axios'
import config from '../config'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signinRedux } from '../slices/authSlice'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const signin = () => {
    // check if user has really entered any value
    if (email.length === 0) {
      alert('please enter email')
    } else if (password.length === 0) {
      alert('please enter password')
    } else {
      axios
        .post(config.serverURL + '/signin', {
          email,
          password,
        })
        .then((response) => {
          const result = response.data
          if (result['status'] === 'error') {
            alert('invalid email or password')
          } else {
            const user = result['data']
            dispatch(signinRedux(user))
            alert('******** welcome to Mobigic TEST *******')
            navigate('/home')
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
      <a href='/signup'>Don't have an account. SIGN UP</a>
    </div>
  )
}
export default Signin
