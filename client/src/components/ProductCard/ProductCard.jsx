import React, { useState } from 'react'
import './ProductCard.css'
import { Button } from 'antd';
import bag2 from '../../assests/images/bag2.jpg';

const ProductCard = () => {

  const [productList, setProductList] = useState([
    {name: "Black School Bag", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "2700.00", imageURL: bag2},
    {name: "Black School Bag", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "2700.00", imageURL: bag2}
  ]);


  return (
    <div className='productCard'>
      <ul>
        {
          productList.map((item, index) => (
            <li key={index}>
              <img src={item.imageURL} alt="Image" />
              <div className="details">
                <h2 className="name">{item.name}</h2>
                <p className="description">{item.description}</p>
                <p className="price">Rs. {item.price}</p>
                <Button type="primary" shape="round">
                    Buy
                </Button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductCard
