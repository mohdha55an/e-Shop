import React from "react";
import { useSelector } from "react-redux";
import hero from '../assets/images/gal4.jpg'
import hero1 from '../assets/images/gal6.png'


const About = () => {
    const products = useSelector(state => state.product)
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-indigo-600">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover who we are and what drives us to bring you the best shopping experience.
          </p>
        </header>

        {/* Mission and Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={hero}
              alt="Our Mission"
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At <span className="font-semibold">e-SHOP</span>, our mission is to
                provide our customers with a seamless and enjoyable shopping experience. We aim to
                bring you high-quality products at affordable prices, ensuring satisfaction every
                time you shop with us.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2024, <span className="font-semibold">e-SHOP</span> began
                with a simple goal: to make online shopping easy, accessible, and fun. Starting as a
                small family business, we've grown into a global brand loved by customers worldwide,
                thanks to our commitment to quality and customer satisfaction.
              </p>
            </div>
            <img
              src={hero1}
              alt="Our Story"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Quality Products</h3>
              <p className="text-gray-600">
                We carefully curate our product catalog to ensure only the best items make it to our
                store.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Affordable Prices</h3>
              <p className="text-gray-600">
                We believe shopping should be enjoyable, not a financial burden. Expect competitive
                prices on every item.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Exceptional Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always ready to help with any questions or concerns
                you may have.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 mb-6">
            Be part of our story. Start shopping with us today and experience the difference!
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-700">
            Shop Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
