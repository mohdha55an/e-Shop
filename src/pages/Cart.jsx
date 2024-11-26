import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartImg from "../assets/images/emptycart.png";
import { FaTrash } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAdd from "../components/ChangeAdd";
import { decrementy,incrementy, removeFromCart } from "../redux/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("X main Road, Hyderabad, TS 50088");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  return (
    <>
     <Toaster position="top-center"reverseOrder={false}/>
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="font-bold text-xl">SHOPPING CART</h3>
          <div className="grid grid-cols- md:grid-cols-2 gap-20 ">
            <div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">
                      Product
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Price
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Quantity
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Subtotal
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product) => (
                    <tr key={product.id}>
                      <td className="border border-gray-300 p-2 flex flex-col items-center gap-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover"
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        ₹{product.price}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <button className="px-2 py-1 bg-gray-200 rounded" 
                          onClick={()=> {
                            if (product.quantity > 1) {
                              dispatch(decrementy(product.id));
                              toast.error(`${product.name} is Removed`)
                            } else {
                              toast.error(`Cannot decrease below 1. Or you can delete ${product.name}`);
                            }
                          }}
                          >  -
                          </button>
                          <span>{product.quantity}</span>
                          <button className="px-2 py-1 bg-gray-200 rounded"
                         onClick={()=> {
                          
                            dispatch(incrementy(product.id));
                            toast.success(`${product.name} is Added`)
                          } 
                        }>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        ₹{product.totalPrice}
                      </td>
                      <td className="border border-gray-300 p-2 text-lg text-center">
                        <button className="text-red-500"
                         onClick={()=> {dispatch(removeFromCart(product.id));
                          toast.error(`${product.name} is Deleted from cart`)
                         }}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" bg-white p-6 min-w-6 max-h-80 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQty}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>shipping:</p>
                <p className="ml-2">
                  shipping to{" "}
                  <span className="text-xs font-bold"> {address}</span>
                </p>
                <button
                 className="text-blue-500 hover:underline mt-1 ml-2 "
                onClick={() => setIsModelOpen(true)}
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>₹{cart.totalPrice}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              onClick={()=> navigate('/checkout')}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Model 
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}>
            <ChangeAdd setAddress={setAddress}
            setIsModelOpen={setIsModelOpen}/>
          </Model>
          
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCartImg} alt="" />
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
