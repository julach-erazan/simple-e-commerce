import React from 'react'
import { Link } from 'react-router-dom';
import { SearchOutlined, BellOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'> 
        <ul>
          <li className='brandName'><h1><Link to="/">My Shop</Link></h1></li>
          <div>
            <li><Link to="#">All</Link></li>
            <li><Link to="#">Popular Products</Link></li>
            <li><Link to="#">Explore</Link></li>     
          </div>
          <div>
            <li><Link to="/"><SearchOutlined /></Link></li>
            <li><Link to="/"><BellOutlined /></Link></li>
            <li className='cartButton'>
              <h1>1</h1>
              <Link to="/"><ShoppingCartOutlined style={{fontSize: '20px'}}/></Link>
            </li>
            <li className='userButton'><Link to="#"><UserOutlined style={{fontSize: '17px'}}/> My account</Link></li>
          </div>
      </ul>
    </nav>
  )
}

export default Navbar
