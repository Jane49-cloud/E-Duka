import Sidebar from "../constants/sidebar";
import PricingComponent from "../components/Pricing";

const Landing = () => {
  return (
    <div className="flex pt-20">
      <Sidebar />
      <div className="flex-1 p-5 mx-auto">
        <PricingComponent />
      </div>
    </div>
  );
};

export default Landing;
