import { useState } from "react";
import { jweldata } from "../../utils/data/JwellData";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";
import { Form } from "react-bootstrap";

function Ck() {
  const dispach = useDispatch();
  function HandleAdd(items) {
    dispach(addItem(items));
  }
  let data = jweldata;

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((option) => option !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const filteredData = data.filter((item) => {
    if (selectedOptions.length === 0) {
      return true;
    } else {
      return selectedOptions.includes(item.name);
    }
  });

  return (
    <div className=" flex-col sm:flex-row flex justify-center sm:items-start items-center w-[100vw] ">
      <div className="w-full sm:w-1/5 border checkbox-group flex flex-col items-start ">
        <label className="checkbox-label ">
          <input
            type="checkbox"
            value="Diamond Richcut"
            checked={selectedOptions.includes("Diamond Richcut")}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Diamond Richcut
        </label>
        <br />
        <label className="checkbox-label">
          <input
            type="checkbox"
            value="necklace"
            checked={selectedOptions.includes("necklace")}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          necklace
        </label>
        <br />
        <label className="checkbox-label">
          <input
            type="checkbox"
            value="Bracelet"
            checked={selectedOptions.includes("Bracelet")}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Bracelet
        </label>
        <br />
        <label className="checkbox-label">
          <input
            type="checkbox"
            value="Ring"
            checked={selectedOptions.includes("Ring")}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Ring
        </label>
        <br />
      </div>
      <div className="w-4/5 flex flex-wrap gap-5  ">
        {filteredData.map((list) => (
          <div className=" rounded-md cursor-pointer relative   flex flex-col   max-lg:w-48 w-60 h-80 max-lg:h-60 hover:border  hover:shadow-2xl shadow-xl  justify-center items-center">
            <div className="absolute right-0 top-2 w-14 h-28 flex flex-col text-black  justify-center gap-1 text-4xl items-center">
              <FaRegHeart
                onClick={HandleAdd}
                className="border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg "
              />
              <PiShoppingCartSimpleBold className="border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg " />
              <FaRegEye className="border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg " />
            </div>
            <div className="w-48 h-52 relative p-5 hover:p-3  flex justify-center items-center">
              <Link to={"/jewel/" + list.id} key={list.id}>
                <img
                  src={list.image}
                  alt=""
                  className="
                    w-full max-lg:h-48 max-lg:36  h-full p-8  duration-700    "
                />
              </Link>
            </div>
            <h1>{list.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Ck;
