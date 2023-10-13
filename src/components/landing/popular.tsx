import { useEffect } from "react";
// import { Accordions } from "../../data/slider";
import Productcard from "../Global/Productcard";
import { toast } from "react-toastify";
import { setLoader } from "../../Redux/slices/LoaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../Redux/hooks/Ads.actions";
// import Photo from "../../assets/fotor.jpg";
import { ProductData } from "../../interface/common";
import { setAds } from "../../Redux/slices/AdsSlice";

const Popular = () => {
  const Ads = useSelector((state: any) => state.AllAds.Ads);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await FetchProducts();
      toast.success("ads fetched successfully");
      dispatch(setLoader(false));
      dispatch(setAds(response.Data));
      // console.log(response.Data);
    } catch (error: any) {
      dispatch(setLoader(false));
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
    // console.log(Ads);
    // console.log(Ads.mainimage);
  }, [dispatch]);

  return (
    <div className="">
      <div className="py-3  flex flex-row items-center justify-between px-5">
        <h1 className="text-stone-500">Popular Ads</h1>
        <button className="underline rounded-lg px-2 text-sm py-1 text-slate-500">
          see all
        </button>
      </div>

      <div className="responsive">
        {Ads?.map((product: ProductData) => (
          <Productcard
            key={product.producttid}
            // image={Photo}
            image={`data:image/jpeg;base64, ${product.mainimage}`}
            name={product?.productname}
            price={product.productprice}
            // seller={product.seller}
            seller="John Doe"
            description={product.productdescription}
            id={product.producttid}
          />
          // <div className="responsive-item  " key={image.id}>
          //   <img src={image.img} alt="" className=" img-responsive" />
          //   <div className=" bg-gray-light p-4">
          //     <p>Image name</p>
          //     <p>image Price </p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
