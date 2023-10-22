import { Avatar } from "antd";
import { DashboardLinks } from "../../data/links";
import Image from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="px-6 bg-gray-light m-3 overflow-y-auto pt-10"
        style={{
          width: "22vw",
          height: "100vh",
          borderRadius: "2px",
          position: "sticky",
          top: "0",
        }}
      >
        <ul className="pt-6">
          {DashboardLinks.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-primary-orange hover:text-white text-sm items-center gap-4 bg-white ${"mt-2"} ${
                index === 0 && "bg-light-white"
              }`}
              onClick={() => navigate(`/${Menu.url}`)}
            >
              <img src={Menu.icon} className="h-8 object-cover" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Sidebar Footer */}
        <div className="flex items-center  mt-10 flex-col">
          <Avatar
            alt="Jane Doe"
            src={Image}
            className="h-24 w-24 border-4 border-primary-orange "
          />
          <span className="text mt-5">Jane Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
