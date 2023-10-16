import { useRef, useEffect, useState } from "react";
import { Categories } from "../../data/categories";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Category } from "@mui/icons-material";

function AnotherSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null); // Explicitly specify the type
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      const firstChild = slider.firstElementChild as HTMLElement;
      const itemWidth = firstChild.offsetWidth + 16; // Adjust 16 to match your margin or padding
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + Categories.length) % Categories.length
      );
      slider.scrollLeft -= itemWidth;
    }
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      const firstChild = slider.firstElementChild as HTMLElement;
      const itemWidth = firstChild.offsetWidth + 16; // Adjust 16 to match your margin or padding
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Categories.length);
      slider.scrollLeft += itemWidth;
    }
  };

  const autoSlide = () => {
    slideRight();
  };

  useEffect(() => {
    // Automatically slide every 2 seconds
    const intervalId = setInterval(autoSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Clone categories to create the effect of an infinite loop
  const clonedCategories = [...Categories, ...Categories, ...Categories];

  return (
    <div className="relative flex items-center mt-10">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
        size={40}
      />
      <div
        ref={sliderRef}
        className="w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
        style={{
          display: "flex",
        }}
      >
        {clonedCategories.map((item, index) => (
          <div
            key={index}
            className="flex bg-primary-orange text-white rounded shadow-custom p-4 gap-3"
            style={{
              flex: "0 0 auto",
              margin: "0 8px",
              display:
                index >= currentIndex &&
                index < currentIndex + Categories.length
                  ? "block"
                  : "none",
            }}
          >
            <Category />
            <p className="text-sm truncate">{item.name}</p>
          </div>
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideRight}
        size={40}
      />
    </div>
  );
}

export default AnotherSlider;
