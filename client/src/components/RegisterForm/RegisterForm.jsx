import React from 'react'
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from "antd";
import './RegisterForm.css'

const RegisterForm = () => {
  return (
    <form className='registerForm'>
      <div>
        <h2>Register</h2>
        <h3>Create an account</h3>
      </div>
      <div>
        <Input placeholder="your name"/>
      </div>
      <div>
        <Input placeholder="your email"/>
      </div>
      <div>
        <Space direction="vertical">
          <Input.Password
            placeholder="new password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />

          <Input.Password
            placeholder="confirm password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>
      </div>
      <Button style={{width: '50%', marginTop: '20px'}} type="primary">Register</Button>

      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
  )
}

export default RegisterForm
