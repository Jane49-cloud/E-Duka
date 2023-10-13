import { BsSearch } from "react-icons/bs";
import { Shortcuts } from "../data/links";

function Searchbar() {
  return (
    <div className="bg-stone-200 py-2 px-5 w-full flex flex-row items-center justify-center gap-5">
      <div className=" flex flex-row gap-3 text-stone-500 italic text-sm">
        {Shortcuts.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="bg-stone-100 p-2 rounded-[5px] text-sm text-stone-500 flex flex-row gap-2 items-center">
        <input
          className="mr-3"
          type="text"
          placeholder="product, seller, price, location?"
        />
        <BsSearch className="cursor-pointer hover:text-green-500" />
      </div>
    </div>
  );
}

export default Searchbar;
