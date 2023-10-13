import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { setLoader } from "../../Redux/slices/LoaderSlice";
import { getSingleProduct } from "../../Redux/hooks/Ads.actions";
import { ProductData } from "../../interface/common";

const ProductInfo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState<ProductData>();
  const [productImages, setProducImages] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  // const images = [
  //   "https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?size=626&ext=jpg&uid=R78813795&semt=sph",
  //   "https://img.freepik.com/free-photo/smartphone-screen-showing-lockscreen-with-design-space_53876-105167.jpg?size=626&ext=jpg&uid=R78813795&semt=sph",
  //   "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?size=626&ext=jpg&uid=R78813795&semt=sph",
  //   "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?size=626&ext=jpg&uid=R78813795&semt=sph",
  // ];

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await getSingleProduct(id);
      dispatch(setLoader(false));
      toast.success(response.message);
      setProduct(response.productdata);
      setProducImages(response.images);
      console.log(productImages);
      console.log(response);
    } catch (error: any) {
      toast.error(error);
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getData();
    // console.log(product?.productdata.mainimage);
  }, []);

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2  p-6">
        {/* Images */}
        <div className="flex flex-col gap-4 h-auto px-20  ">
          <div>
            <img
              // src={images[selectedImageIndex]}
              src={`data:image/jpeg;base64, ${productImages[selectedImageIndex]}`}
              className="h-96 w-full object-cover rounded-md border border-red-500"
              alt=""
            />
          </div>
          <div className="flex gap-4 ">
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
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-semibold text-gray-800">
              product name comes here
            </p>
            <span>the product description</span>
          </div>
          <hr />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-secondary-800">
              Product Details
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <span>{product?.productprice}</span>
              <span>ksh 2000</span>
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
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-secondary-800">
              Seller Details
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <span>Name</span>
              <span>John Doe</span>
              <span>Contact</span>
              <span> seller@gmail.com</span>
              <span>Phone</span>
              <span> 0712345678</span>
            </div>
          </div>
          {/*  */}
          <hr />
          <div className="flex flex-col">
            <div className="flex justify-between pr-2">
              <p className="text-2xl font-semibold text-secondary-800 ">
                Interested?
              </p>
              <button className="bg-primary-orange capitalize  p-2 rounded text-white">
                call seller
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* <span>Name</span>
              <span>
                {product?.seller.firstName} {product?.seller.lastName}
              </span>
              <span>Contact</span>
              <span> {product?.seller.email}</span> */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* more details */}
    </div>
  );
};

export default ProductInfo;
