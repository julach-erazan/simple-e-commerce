import React from 'react'
import LoginForm from '../../../components/LoginForm/LoginForm'
import './Login.css'

const Login = () => {
  return (
    <div className='loginPage'>
      <div className='loginWrapper'>
        <div className='loginImage_div'>
          <img src={require('../../../assests/images/19199299.png')} alt="loginImage" width={'300px'}/>
        </div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
