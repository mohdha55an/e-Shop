import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const products = useSelector((state) => state.product);
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1 className="text-xl font-bold">e-SHOP</h1>
      <div>
        <h4 className="text-center">customer care no :</h4>
        <p className="font-semibold ml-4"> +9199999999 </p>
        <h4 className="text-center">Email :</h4>
        <p className="font-semibold ml-2"> e-Shop@gmail.com </p>
      </div>

      <br />
      <p className="text-center">
        Your one-step for all your needs. Shop with us and experience the best
        online shopping experiences. We ensuring seamless experiences and
        trust-building for a great shopping experience with us."
      </p>
    </div>
  );
};

export default Contact;
