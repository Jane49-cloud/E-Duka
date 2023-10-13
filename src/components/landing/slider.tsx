import { useEffect, useState } from "react";
import { Accordions } from "../../data/slider";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Accordions.length);
    console.log(Accordions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Accordions.length) % Accordions.length);
  };

  useEffect(() => {
    if (currentSlide === Accordions.length) {
      setCurrentSlide(0);
    }
  }, [Accordions, currentSlide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(currentSlide + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [currentSlide]);
  return (
    <div
      className="relative h-72 bg-gray-200"
      style={{ width: "100%", borderRadius: "1rem" }}
    >
      {Accordions.map((image, index) => (
        <div
          key={image.id}
          className={`absolute transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="" style={{ width: "100%", height: "100%" }}>
            <img
              src={image.img}
              alt={`Image ${index + 1}`}
              className="object-cover h-72  rounded w-full p-0 m-0"
              style={{
                objectFit: "cover",
                width: "100vw",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <div
            className="absolute top-0 left-0 p-4 text-white hidden"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "1rem",
              width: "85%",
              textAlign: "center",
              borderRadius: "1rem",
            }}
          >
            <h2 className="text-2xl font-bold">{image.tagline}</h2>
            <form action="">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="text"
                  placeholder=""
                  className="p-1 rounded text-dark"
                />
                <button className="bg-primary-orange p-2 rounded cursor-pointer hover:bg-secondary-orange font-semibold text-white text-lg">
                  Search
                </button>
              </div>
            </form>
            <button className="border-secondary-orange border-spacing-1 bg-secondary-orange rounded p-2 capitalize m-2 font-normal text-sm hover:bg-primary-orange cursor-pointer">
              {image.navigate}
            </button>
          </div>
        </div>
      ))}
      <div
        className="flex items-center  justify-between px-3"
        style={{ height: "100%", width: "100%" }}
      >
        <IconButton
          className=" prev"
          onClick={prevSlide}
          style={{ color: "#991b1b", backgroundColor: "#eee" }}
        >
          <ChevronLeft />
        </IconButton>

        {/* Next button */}
        <IconButton
          className=" next"
          onClick={nextSlide}
          style={{ color: "#991b1b", backgroundColor: "#eee" }}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageSlider;
