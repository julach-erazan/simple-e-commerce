import React from 'react'
import RegisterForm from '../../../components/RegisterForm/RegisterForm'
import './Register.css'

const Register = () => {
  return (
    <div className='registerPage'>
      <div className='registerWrapper'>
      <div className='registerImage_div'>
          <img src={require('../../../assests/images/db7f28daaf986fc1328c697ce9b02ce5-2.png')} alt="loginImage" width={'250px'}/>
        </div>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
