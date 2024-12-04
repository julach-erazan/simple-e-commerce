import React, { useEffect } from "react";
import girlsImg from '../../assests/images/girl.jpg'
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProductListAction } from "../../redux/actions/productActions";
import { resetProductList } from "../../redux/slices/productSlice";
import Footer from '../../components/Footer/Footer'

const Newarrivals = () => {
  
  const productState = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadProductListAction());

      return () => {
        dispatch(resetProductList());
      }
  },[])

  return (
    <div className="w-full min-w-[350px] flex flex-col justify-center items-center pt-[100px]">
      <div className="lg:w-[1000px] lg:h-[400px] flex flex-wrap justify-evenly items-center mb-[25px]">
        <img
          src={girlsImg}
          alt="banner"
          className="w-[90%] lg:w-[600px] h-full"
        />
        <div className="w-[90%] lg:w-[400px] h-full text-[#fff] bg-[#2F3C7E] flex flex-col justify-center items-start p-[50px]">
          <h1 className="text-[30px] font-bold">New arrivals</h1>
          <h2>
            Designed in France and produced in Europe: our collections are of
            timeless elegance with a modern and original twist. Renewed every
            season, these staple pieces of the male wardrobe are of
            irreproachable quality which only specific, traditional know-how and
            meticulous care can provide.
          </h2>
        </div>
      </div>
      <ul className="w-full flex justify-evenly items-center flex-wrap">
        {productState.productList.map((data) => (
          <li key={data.id} className="mb-[20px]">
            <ProductCard data={data}/>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default Newarrivals;
