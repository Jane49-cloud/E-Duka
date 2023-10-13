import { Categories } from "../../data/categories";
import { Dashboard } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Minslider = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <div className="m-20">
        <Slider {...settings}>
          {Categories.map((c) => (
            <div
              key={c.id}
              className=" bg-primary-orange text-white rounded shadow-custom p-4"
              style={{ height: "100px", width: "100px" }}
            >
              <div className="text-center">
                <Dashboard style={{ fontSize: "24px" }} />
                <div className="text-sm truncate">{c.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Minslider;
