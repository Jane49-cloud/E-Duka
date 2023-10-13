import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import UserDashboard from "../pages/userDash/Dashboard";
import MyAds from "../pages/userDash/MyAds";
import Pending from "../pages/userDash/Pending";
import Declined from "../pages/userDash/Declined";
import Closed from "../pages/userDash/Closed";
import Drafts from "../pages/userDash/Drafts";
import Pricing from "../pages/Pricing";
import CreateAds from "../pages/CreateAds";
import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import AdsForm from "../components/Ad/AdForm";
import Footer from "../constants/footer";
import Contact from "../pages/Contact";
import Services from "../pages/services";
// import { ToastContainer } from "react-toastify";
import AdInfo from "../pages/AdInfo";
import Terms from "../pages/Terms";
import Navbar from "../constants/navbar";

const Index = () => {
  const [ShowLogin, setShowLogin] = useState<boolean>(false);
  const [ShowRegister, setShowRegister] = useState<boolean>(false);
  const [showAdsForm, setShowAdsForm] = useState<boolean>(false);
  return (
    <div className="" style={{ maxWidth: "100vw" }}>
      <Navbar SetShowLogin={setShowLogin} SetShowAdsForm={setShowAdsForm} />
      <LoginForm
        showLogin={ShowLogin}
        SetShowLogin={setShowLogin}
        showRegister={ShowRegister}
        SetShowRegister={setShowRegister}
      />
      <RegisterForm
        // showLogin={ShowLogin}
        SetShowLogin={setShowLogin}
        showRegister={ShowRegister}
        SetShowRegister={setShowRegister}
      />
      {/* <ToastContainer /> */}
      <AdsForm showAdsForm={showAdsForm} setShowAdsForm={setShowAdsForm} />
      <div className="mt-40">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dashboard" element={<UserDashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms_and_conditions" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ad_info/:id" element={<AdInfo />} />
          <Route path="/profile/myads" element={<MyAds />} />
          <Route path="/profile/pending" element={<Pending />} />
          <Route path="/profile/declined" element={<Declined />} />
          <Route path="/new-ad" element={<CreateAds />} />
          <Route path="/profile/closed" element={<Closed />} />
          <Route path="/profile/drafts" element={<Drafts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
