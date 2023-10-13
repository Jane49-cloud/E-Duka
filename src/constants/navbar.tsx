import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links } from "../data/links";
import close from "../assets/close.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import {
  IconButton,
  FormControl,
  Select,
  InputBase,
  MenuItem,
  Typography,
} from "@mui/material";
import { MessageRounded, NotificationsActive } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSolidBellRing } from "react-icons/bi";
import { setOpener } from "../Redux/slices/opener";
import userphoto from "../assets/user.jpeg"
import Searchbar from "./searchbar";

type NavbarProps = {
  SetShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  SetShowAdsForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ SetShowLogin, SetShowAdsForm }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const { open } = useSelector((state: any) => state.opener);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { }, [user]);
  const [userSmallnav, setUserSmallNav] = useState(false)

  return (




    <nav
      className={`w-full  flex flex-col items-center fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-black"
        }`}
      style={{ marginBottom: "2px" }}
    >
      <div className="w-full flex  justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-2 items-center ">
          <AiOutlineMenuUnfold
            size="32"
            className="text-white sm:hidden "
            onClick={() => {
              dispatch(setOpener(!open));
              console.log("hello , this is my", open);
            }}
          />
          <Link
            to="/"
            className="flex flex-col items-center py-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className=" p-0 m-0 object-contain bg-green-500 h-[50px] w-fit" />
            <p className="text-slate-600 text-xs italic">your one stop shop</p>
          </Link>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <div>
            <button
              className="bg-primary-orange text-white p-1 capitalize rounded px-4 hover:bg-secondary-orange"
              onClick={() => SetShowAdsForm(true)}
            >
              Sell
            </button>
          </div>
          {Links.map((nav) => (
            <li
              key={nav.name}
              className={`${active === nav.name ? "text-primary-orange" : "text-white"
                } capitalize hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.name)}
            >
              <Link to={nav.url}>{nav.name}</Link>
            </li>
          ))}
          {user ? (
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {/* <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <IconButton
                    style={{
                      color: "#DC5F00",
                      backgroundColor: "#eee",
                      cursor: "pointer",
                    }}
                  >
                    <MessageRounded />
                  </IconButton>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <IconButton
                    style={{
                      color: "#DC5F00",
                      backgroundColor: "#eee",
                      cursor: "pointer",
                    }}
                  >
                    <NotificationsActive />
                  </IconButton>
                </Link>
              </li> */}
              <div className="h-[50px] w-[50px] rounded-full border border-slate-500 p-1 relative cursor-pointer" onClick={() => { setUserSmallNav(!userSmallnav) }}>
                <div className="h-4 w-4 rounded-full absolute top-0 right-0">
                  <BiSolidBellRing className="text-red-400" />
                </div>
                <div className="h-4 text-center w-4 rounded-full absolute bg-green-400 top-0 left-0 text-[10px]">9+</div>
                <img className=" rounded-full" src={userphoto} alt="" />
                {
                  userSmallnav && <div className=" absolute text-sm flex text-start justify-start items-start text-stone-600  flex-col gap-1 px-3 font-normal py-2 rounded-[3px] bg-gray-200 ">
                    <p className="hover:underline hover:text-green-400 cursor-pointer">profile</p>
                    <p className="hover:underline hover:text-green-400 cursor-pointer">dashboard</p>
                    <p className="hover:underline hover:text-green-400 cursor-pointer">notifications</p>
                    <button className="hover:underline hover:text-green-400 cursor-pointer">log out</button>
                  </div>
                }
              </div>


              {/* <FormControl>
                <Select
                  value={user.username && user.lastname}
                  sx={{
                    backgroundColor: "#eee",
                    width: "150px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: "#eee",
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem
                    value={user.username && user.lastname}
                    onClick={() => {
                      navigate("/profile/myads");
                    }}
                  >
                    <Typography>{user.username && user.lastname}</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Logout
                  </MenuItem>
                </Select>
              </FormControl> */}
            </ul>
          ) : (
            <div>
              <button
                className="bg-primary-orange text-white p-1 rounded px-4 hover:bg-secondary-orange"
                onClick={() => SetShowLogin(true)}
              >
                Signin
              </button>
            </div>
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <IconButton
            style={{
              color: "#991b1b",
              backgroundColor: "#eee",
              cursor: "pointer",
            }}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </IconButton>

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[300px]  text-white capitalize z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <div>
                <button
                  className="bg-primary-orange text-white p-1 capitalize rounded px-4 hover:bg-secondary-orange"
                  onClick={() => SetShowAdsForm(true)}
                >
                  Sell
                </button>
              </div>
              {Links.map((nav) => (
                <li
                  key={nav.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.name
                    ? "text-primary-orange"
                    : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.name);
                  }}
                >
                  <Link to={nav.name}>{nav.name}</Link>
                </li>
              ))}
              {user ? (
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                  <li>
                    <Link
                      to="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <IconButton
                        style={{
                          color: "#DC5F00",
                          backgroundColor: "#eee",
                          cursor: "pointer",
                        }}
                      >
                        <MessageRounded />
                      </IconButton>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <IconButton
                        style={{
                          color: "#DC5F00",
                          backgroundColor: "#eee",
                          cursor: "pointer",
                        }}
                      >
                        <NotificationsActive />
                      </IconButton>
                    </Link>
                  </li>

                  <FormControl>
                    <Select
                      value={user.username && user.lastname}
                      sx={{
                        backgroundColor: "#eee",
                        width: "150px",
                        borderRadius: "0.25rem",
                        p: "0.25rem 1rem",
                        "& .MuiSvgIcon-root": {
                          pr: "0.25rem",
                          width: "3rem",
                        },
                        "& .MuiSelect-select:focus": {
                          backgroundColor: "#eee",
                        },
                      }}
                      input={<InputBase />}
                    >
                      <MenuItem
                        value={user.username && user.lastname}
                        onClick={() => {
                          navigate("/profile/myads");
                        }}
                      >
                        <Typography>
                          {user.username && user.lastname}
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Select>
                  </FormControl>
                </ul>
              ) : (
                <div>
                  <button
                    className="bg-primary-orange text-white p-1 rounded px-4 hover:bg-secondary-orange"
                    onClick={() => SetShowLogin(true)}
                  >
                    Signin
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Searchbar />
    </nav>

  );
};

export default Navbar;
