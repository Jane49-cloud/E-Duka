import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSellerProducts } from "../Redux/slices/AdsSlice";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../Redux/store";
import Productcard from "./Global/Productcard";
import Loader from "../constants/loader";
import { ProductData } from "../interface/common";

const SellersAdsComp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, Ads } = useSelector((state: any) => state.AllAds);
  console.log(isLoading, Ads);
  const { id } = useParams();

  useEffect(() => {
    dispatch(FetchSellerProducts(id));
  }, []);
  return (
    <div className="flex">
      {/* user Details */}
      <div></div>

      {/* seller's ads */}
      <div>
        <div className="responsive">
          {isLoading ? (
            // Show loading indicator or message
            <div>
              <Loader />
            </div>
          ) : (
            // Render products if not loading
            Ads.map((product: ProductData) => (
              <Productcard
                key={product.producttid}
                image={`data:image/jpeg;base64, ${product.mainimage}`}
                name={product.productname}
                price={product.productprice}
                seller="John Doe"
                id={product.producttid}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SellersAdsComp;
