import Sidebar from "../../components/Dashboard/Sidebar";
import Profile from "../../components/Dashboard/profile";

const profile = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 mx-auto">
        <Profile />
      </div>
    </div>
  );
};

export default profile;
