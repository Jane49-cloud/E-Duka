import { useDispatch, useSelector } from "react-redux";
// import { Categories } from "../data/categories";
import { setLoader } from "../Redux/slices/LoaderSlice";
import { useEffect, useState } from "react";
import { fetchCategories } from "../Redux/hooks/categories.actions";
import { setCategories } from "../Redux/slices/categoriesSlice";
import { categoryData, subcategoryData } from "../interface/common";
import { axiosService } from "../Redux/helpers/axios";
import { HiLockClosed } from "react-icons/hi";
import { setOpener } from "../Redux/slices/opener";

const Sidebar = () => {
  const dispatch = useDispatch();
  // const [myCategories, setMyCategories] = useState([]);
  const categories = useSelector((state: any) => state.categories.categories);

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<subcategoryData[]>([]);
  const [loading, setLoading] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const { open } = useSelector((state: any) => state.opener);

  // console.log("Hello", open);

  const tryfetchingSubcategories = async (categoryName: string) => {
    try {
      const response = await axiosService.get(
        `/subcategories/getsubcategories/${categoryName}`
      );
      return response.data.Data;
    } catch (error) {
      // console.error("Error fetching subcategories:", error);
      return [];
    }
  };

  const handleCategoryMouseOver = async (categoryName: string) => {
    if (categoryName === hoveredCategory || loading) return;

    setLoading(true);
    setHoveredCategory(categoryName);

    const subcategoriesData = await tryfetchingSubcategories(categoryName);
    setSubcategories(subcategoriesData);

    setLoading(false);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    dispatch(setLoader(true));
    const response = await fetchCategories();
    dispatch(setCategories(response.data.Data));
    // console.log(response);
    dispatch(setLoader(false));
  };
  useEffect(() => {
    getCategory();
    // console.log(categories);
  }, []);

  return (
    <div className="">
      <div
        className=" px-4  bg-gray-light m-3 overflow-y-auto pt-10 my-sidebar  no-scrollbar"
        style={{
          height: "100vh",
          maxHeight: "100vh",
          position: "sticky",
          top: "0",
        }}
      >
        <ul className="pt-6">
          {categories.map((Menu: categoryData, index: number) => (
            <div>
              <li
                key={index}
                className={`flex  rounded-md p-2  cursor-pointer hover:bg-white  text-sm items-center gap-x-4 
              ${"mt-2"} ${index === 0 && "bg-light-white"} `}
                onMouseOver={() => {
                  handleCategoryMouseOver(Menu.categoryname);
                  setSubmenuOpen(true);
                }}
              >
                {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                <span className={`${!open && ""} origin-left duration-200`}>
                  {Menu.categoryname}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      {submenuOpen && (
        <div
          className="bg-gray-light absolute top-3 h-full w-72 z-20 mt-20 p-20 border-l border-gray-400"
          style={{
            left: "18vw",
            height: "100vh",
            maxHeight: "100vh",
            // position: "sticky",
          }}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          {loading ? (
            <div className="w-8 h-8 flex items-center justify-center animate-spin rounded-full border-t-2 border-primary-orange border-solid "></div>
          ) : (
            <ul>
              {subcategories.map(
                (subcategory: subcategoryData, index: number) => (
                  <li
                    key={index}
                    className={`flex  rounded-md p-2  cursor-pointer hover:bg-white  text-sm items-center gap-x-4 
                  ${"mt-2"} ${index === 0 && "bg-light-white"} `}
                  >
                    {subcategory.subcategoryname}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      )}

      {/* this is where the sidebar menu will sit when on smaller devices */}

      {open && (
        <div
          className="absolute px-4  bg-gray-light m-3 overflow-y-auto pt-10  z-10 no-scrollbar sm:hidden rounded "
          style={{
            height: "80vh",
            maxHeight: "80vh",
            width: "250px",
            // position: "sticky",
          }}
        >
          <div className="w-full flex justify-end">
            <div>
              <HiLockClosed
                size="32"
                onClick={() => {
                  dispatch(setOpener(false));
                }}
              />
            </div>
          </div>
          <ul className="">
            {categories.map((Menu: categoryData, index: number) => (
              <div>
                <li
                  key={index}
                  className={`flex  rounded-md p-2  cursor-pointer hover:bg-white  text-sm items-center gap-x-4 
             ${"mt-2"} ${index === 0 && "bg-light-white"} `}
                  onMouseOver={() => {
                    // handleCategoryMouseOver(Menu.categoryname);
                    // setSubmenuOpen(true);
                  }}
                >
                  {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.categoryname}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
