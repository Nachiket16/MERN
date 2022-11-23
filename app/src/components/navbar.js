import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signoutRedux } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const signinStatus = useSelector((state) => state.authSlice.status)
  const dispatch = useDispatch()
  

  return (
    <nav className='navbar navbar-expand-lg bg-danger'>

      <div className='container-fluid'>
        <Link className='navbar-brand' to='/home'>
          <h3>🏢Mabigic</h3>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button> 

        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {/* <li className='nav-item'>
             
            </li> */}
          </ul>
          <ul className='navbar-nav navbar-right'>
            <li className='nav-item'>
              {!signinStatus && (
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/signin'>
                  <h4>SignIn</h4>
                </Link>
              )}
            </li>
            <li className='nav-item'>
              {!signinStatus && (
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/signup'>
                  <h4>Signup</h4>
                </Link>
              )}
              {signinStatus && (
                <button
                  className='btn btn-danger'
                  aria-current='page'
                  onClick={() => {
                    navigate('/signin')
                    dispatch(signoutRedux())
                  }}>
                  Signout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
