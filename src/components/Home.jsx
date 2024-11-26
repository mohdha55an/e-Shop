import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/hero-page.png";
import InfoSection from "./InfoSection";
import CategorySection from "./CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  useEffect(()=> {
    dispatch(setProducts(mockData))
  }, [])
  return (
    <div>
    <div className="bg-white mt-2 px-2 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-center">SHOP BY CATEGOIES</div>
           <ul className="space-y-4 bg-gray-100 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
           </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="image" className="h-full w-full" />
          <div className="absolute top-8 left-8" >
            <p className="text-gray-600 mb-4">Your own shop | e-Shop</p>
            <h2 className=" text-l md:text-3xl font-bold">WELCOME TO E-SHOP</h2> 
            <p  className=" text-l md:text-xl mt-2.5 font-bold text-gray-800">MILLION+ PRODUCTS</p>
            <button className="bg-red-500 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform 
            duration-300 hover:scale-105">SHOP NOW </button>
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0,5).map(((product) =>(
            <ProductCard key={product.id} product={product}/>

         )) )}
        </div>
      </div>
    </div>
      <Shop/>
      <About/>
      <Contact/>
    </div>
    
  );
};

export default Home;
