import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { setLoader } from "../../Redux/slices/LoaderSlice";
import { getSingleProduct } from "../../Redux/hooks/Ads.actions";
import { ProductData } from "../../interface/common";
import { Facebook, Phone, WhatsApp, YouTube } from "@mui/icons-material";

const ProductInfo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState<ProductData>();
  const [productImages, setProducImages] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await getSingleProduct(id);
      dispatch(setLoader(false));
      toast.success(response.message);
      setProduct(response.productdata);
      setProducImages(response.images);
    } catch (error: any) {
      toast.error(error);
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-2">
      <div className=" flex-wrap flex gap-5 w-full ">
        {/* Images */}
        {/*info div  */}
        <div
          className="flex bg-white shadow-custom gap-2 p-5  border-t border-red-500 rounded "
          style={{
            flex: "70vw",
            margin: "auto",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <div className="flex flex-col gap-4 ">
            <div className=" ">
              <img
                src={`data:image/jpeg;base64, ${productImages[selectedImageIndex]}`}
                className="h-96 w-full object-cover rounded-md border border-red-500"
                alt=""
              />
            </div>
            <div className="flex gap-4">
              {productImages?.map((image: any, index: number) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64, ${image}`}
                  className={
                    "h-16 w-16 object-cover rounded-md bg-gray-100 cursor-pointer" +
                    (index === selectedImageIndex
                      ? " border-2 border-secondary-orange"
                      : "")
                  }
                  alt=""
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4  " style={{ width: "750px" }}>
            <div>
              <p className="text-2xl font-semibold text-primary-orange capitalize">
                {product?.productname}
              </p>
              <p className="text-2xl font-semibold text-gray-500 capitalize">
                Ksh {product?.productprice}
              </p>
              <span className="text-gray-500 h-full">
                {product?.productdescription}
              </span>
            </div>
            <hr />
            <div className="flex flex-col">
              <p className="text-xl text-secondary-800">Product Details</p>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <span>Category</span>
                <span> product category</span>
                <span>subcategory</span>
                <span>product-subcategory</span>
                <span>Price Negotiable</span>
                <span> No</span>
                <span>Warrant Available</span>
                <span> No</span>
                <span>Total reviews</span>
                <span> 53</span>
              </div>
            </div>
            <hr />
          </div>
          {/* seller was here */}
          {/* Add your additional div here */}
          <hr />
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Additional content */}
            </div>
          </div>
        </div>
        {/* Your additional div goes here */}
        <div style={{ flex: "20vw" }}>
          <div className="flex flex-col  px-2 shadow-custom rounded h-fit py-10 border-t border-secondary-orange ">
            <p className="text-2xl  text-secondary-800">Seller Information</p>
            <hr />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <span>Name</span>
              <span>John Doe</span>
              <span>Location</span>
              <span>Nairobi</span>
              <span>Contact</span>
              <span> seller@gmail.com</span>
              {/* <span>Phone</span>
              <span> 0712345678</span> */}
            </div>

            {/* <div className="flex justify-between pr-2">
            <p className="text-xl  text-secondary-500 ">Interested?</p>
            <button className="bg-primary-orange capitalize p-2 rounded text-white">
              call seller
            </button>
          </div> */}
            <div className="flex flex-wrap gap-2 justify-center items-center py-2">
              <button className="p-2 rounded-full bg-gray-200">
                {" "}
                <WhatsApp className="text-green-500" />{" "}
              </button>
              <button className="p-2 rounded-full bg-gray-200 ">
                {" "}
                <Facebook className="text-blue-500" />{" "}
              </button>
              <button className="p-2 rounded-full bg-gray-200">
                {" "}
                <YouTube className="text-red-500" />{" "}
              </button>
              <button className="p-2 rounded-full bg-gray-200">
                {" "}
                <Phone />{" "}
              </button>
            </div>
            <button className="bg-green-400 p-2 rounded mt-2 text-white">
              0712345678
            </button>

            {/* additional div ends here */}
          </div>
        </div>
      </div>
      {/* more details */}
      <h3 className="text-center capitalize text-2xl font-semibold text-gray-800 mt-10 ">
        Similar products
      </h3>
    </div>
  );
};

export default ProductInfo;
