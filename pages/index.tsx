import React from "react";
import { HERO_BACKGROUND } from "@/constants/images";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
