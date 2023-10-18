import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";

const TwoColorDiv = () => {
  return (
    <div
      className="p-4"
      style={{
        height: "80vh",
        position: "relative",
        backgroundColor: "#f6f9fc",
        fill: "#425466",
      }}
    >
      <div
        className="bg-gray-light"
        style={{ width: "100%", height: "200px", position: "relative" }}
      >
        <h1 className="text-center uppercase text-2xl py-8">Choose a plan</h1>
        <div className="absolute w-full h-1/2 flex py-6 gap-2 bottom-7">
          <div
            className="p-4 h-96  shadow-custom rounded border-t-4 border-red-300"
            style={{ backgroundColor: "" }}
          >
            <div className="flex flex-col items-center justify-center">
              <PaymentIcon style={{ fontSize: 40 }} />
              <h2 className="text-xl font-semibold ml-3 text-green-500">
                Freemium Plan
              </h2>
            </div>
            <h2 className="text-center text-2xl mt-2">Kshs 0</h2>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <button className="bg-black text-white p-2 rounded hover:bg-secondary-orange transition-colors delay-300 w-[250px] outline-none shadow-custom mt-5">
              start
            </button>
          </div>
          <div className="p-4 h-96 shadow-custom rounded h-96 rounded border-t-4 border-green-300">
            <div className="flex flex-col items-center justify-center">
              <PaymentIcon style={{ fontSize: 48 }} />
              <h2 className="text-2xl font-semibold ml-3">Basic plan</h2>
            </div>
            <h2 className="text-center text-2xl mt-2">Kshs 0</h2>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <button className="bg-black text-white p-2 rounded hover-bg-secondary-orange transition-colors delay-300 w-[250px] outline-none shadow-custom mt-5">
              start
            </button>
          </div>
          <div className="p-4 h-96 shadow-custom rounded border-t-4 border-black">
            <div className="flex flex-col items-center justify-center">
              <PaymentIcon style={{ fontSize: 48 }} />
              <h2 className="text-2xl font-semibold ml-3">Freemium Payment</h2>
            </div>
            <h2 className="text-center text-2xl mt-2">Kshs 0</h2>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <button className="bg-black text-white p-2 rounded hover:bg-secondary-orange transition-colors delay-300 w-[250px] outline-none shadow-custom mt-5">
              start
            </button>
          </div>
          <div className="p-4 h-96 shadow-custom rounded border-t-4 border-gray-300">
            <div className="flex flex-col items-center justify-center">
              <PaymentIcon style={{ fontSize: 48 }} />
              <h2 className="text-2xl font-semibold ml-3">Freemium Payment</h2>
            </div>
            <h2 className="text-center text-2xl mt-2">Kshs 0</h2>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <p className="mt-4">
              Start with our Freemium plan today and enjoy up to 5Ads per month.
            </p>
            <button className="bg-black text-white p-2 rounded hover:bg-secondary-orange transition-colors delay-300 w-[250px] outline-none shadow-custom mt-5">
              start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColorDiv;
