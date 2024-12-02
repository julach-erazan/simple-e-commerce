import React from 'react'
import { Link } from 'react-router-dom';
import './LoginForm.css'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, ArrowRightOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Space, Button } from "antd";

const LoginForm = () => {
  return (
    <form className='loginForm'>
      <div>
        <h2>Log in</h2>
        <h3>Sign in to your account</h3>
      </div>
      <div>
        <Input placeholder="username" prefix={<UserOutlined />} />
      </div>
      <div>
        <Space direction="vertical">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>
      </div>
      <a href="/">forgot password?</a>
      <Button style={{width: '50%'}} type="primary">Login <ArrowRightOutlined /></Button>

      <p>Not registered? <Link to="/register">Signup</Link></p>
    </form>
  )
}

export default LoginForm
