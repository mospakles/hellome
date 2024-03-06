import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ options, placeholder, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-3 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled hidden>
          {placeholder || "Bank"}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
