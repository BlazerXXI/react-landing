import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            magni repudiandae dolАoribus adipisci et libero laudantium iusto
            itaque aut laboriosam, tempora qui? Ratione rerum porro quam,
            consectetur harum delectus repellendus.
          </p>
          <button className="text-[#00df9a] active:bg-opacity-40 hover:bg-opacity-80 duration-300 ease-in-out w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
