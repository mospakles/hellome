import { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black px-4 py-2 font-clash-variable cursor-pointer">
      <div className="flex justify-between items-center px-4 md:px-10">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="./images/Logo.png"
              alt="logo"
              className="object-scale-down h-12 w-50"
            />
          </Link>
          <div className="hidden md:flex justify-center items-center gap-14 text-white ml-8">
            <div className="hover:p-2 hover:bg-[#444444] rounded-xl tracking-wider">
              Personal Account
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="focus:bg-gray focus:p-2 flex items-center hover:p-2 hover:bg-[#444444] rounded-xl tracking-wider"
              >
                Business Account
                <FaAngleDown className="ml-2 text-xl" />
              </button>
              {isOpen && (
                <div className="absolute z-10 left-0 mt-2 bg-black rounded shadow-md w-[50vw] flex justify-center p-3">
                  <div className="py-2">
                    <div className="px-4 py-2 text-lg font-bold">
                      Multi Currency Account
                    </div>
                    <div className="px-4 py-2">
                      SME (Small and Medium Enterprises)
                    </div>
                    <div className="px-4 py-2">Sole Trader</div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="py-2">
                    <div className="px-4 py-2 text-lg font-bold">Exchange</div>
                    <div className="px-4 py-2">
                      Currency Exchange(FX at Your Fingertips)
                    </div>
                    <div className="px-4 py-2">Crypto Exchange</div>
                    <div className="px-4 py-2">Remittance</div>
                    <div className="px-4 py-2">Marketplace</div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="py-2">
                    <div className="px-4 py-2 text-lg font-bold">
                      Instruments
                    </div>
                    <div className="px-4 py-2">Invoicing</div>
                    <div className="px-4 py-2">Expenses</div>
                    <div className="px-4 py-2">Accounting / Budgeting API</div>
                    <div className="px-4 py-2">Payroll</div>
                    <div className="px-4 py-2">Track Spending</div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="py-2">
                    <div className="px-4 py-2 text-lg font-bold">
                      Enterprise
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="hover:p-2 hover:bg-[#444444] rounded-xl tracking-wider">
              Company
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center gap-5 p-3">
          <Link to="/login">
            <div className="text-white border-2 rounded-full py-2 text-center px-4 hover:bg-[#444444] tracking-wider">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="text-white border-2 rounded-full py-2 px-4 hover:bg-[#444444] tracking-wider">
              Sign up
            </div>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute left-0 top-16 w-full bg-black py-2">
          <div className="text-white text-center p-2 hover:p-2 hover:bg-[#444444] rounded-xl">
            Personal Account
          </div>
          <div className="text-white text-center p-2 hover:p-2 hover:bg-[#444444] rounded-xl">
            Business Account
          </div>
          <div className="text-white text-center p-2 hover:p-2 hover:bg-[#444444] rounded-xl">
            Company
          </div>
          <Link to="/login">
            <div className="text-white text-center border-t border-gray-200 py-2 hover:p-2 hover:bg-[#444444] rounded-xl">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="text-white text-center hover:p-2 hover:bg-[#444444] rounded-xl">
              Sign Up
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
