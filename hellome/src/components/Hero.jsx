import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { getCurrencyByCountryCode } from "iso-country-currency";
import { FaArrowDown } from "react-icons/fa6";
import Dropdown from "./Dropdown";

// eslint-disable-next-line react/prop-types
const CurrencyConverter = ({ currencies }) => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState(0);

  const onSelect = (code) => {
    setSelectedCountry(code);
    setSelectedCurrency(getCurrencyByCountryCode(code));
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="flex justify-center items-center divide-x mb-4 border-2 border-[#979797] rounded-2xl">
      <div className="p-3 px-4">{currencies[selectedCountry]}</div>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="outline-none p-1 md:p-3"
      />
      <div className="rounded-full">
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={onSelect}
          countries={Object.keys(currencies)}
          customLabels={currencies}
          className="react-flags-select"
        />
      </div>
    </div>
  );
};

const currencies = {
  NG: "₦",
  GB: "£",
  US: "$",
  CA: "CA$",
};

const Hero = () => {

    const options = ["United Bank of Africa", "First Bank", "Access Bank", "Guarantee Trust Bank", "Standard Chattered Bank"];
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (option) => {
      setSelectedOption(option);
    };

  return (
    <div className="h-full bg-gradient-to-b from-[#195399] to-[#061322] font-clash-variable">
      <div className="flex justify-center items-center p-10">
        <button className="px-6 py-2 text-[#195399] text-center bg-white hover:bg-gray-300 rounded-xl">
          Business Account
        </button>
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-2/3">
          <div className="md:text-8xl text-4xl font-medium text-white p-8">
            <div className="md:mt-7">
              Empowering Your <br />
              <span className="font-extrabold">Financial </span>
              Frontier
            </div>
            <div className="py-1">
              <img src="./images/line1.png" alt="line 1" className="-mb-8" />
              <img src="./images/line2.png" alt="line 2" />
            </div>
          </div>
          <p className="text-white px-10 mb-6 whitespace-normal text-balance leading-loose tracking-widest">
            Unlock the full potential of your business with HelloMe Money
            Business Accounts, where financial empowerment meets seamless
            transactions. Our platform is meticulously crafted to cater to the
            unique needs of businesses, offering a host of features designed to
            simplify, accelerate, and secure your financial operations
          </p>
          <div className="flex flex-col gap-4 px-6 ml-2">
            <button className="px-6 py-3 text-white text-center bg-[#195399] hover:bg-blue-900 md:w-1/3 rounded-xl">
              Get multicurrency account
            </button>
            <button className="px-6 py-3 text-[#195399] text-center bg-white hover:bg-gray-300 md:w-1/3 rounded-xl">
              International payment
            </button>
          </div>
        </div>
        <div className="md:flex mx-auto justify-center items-center h-full p-12">
          <div className="bg-[#D8D8D8] rounded-2xl p-6 relative">
            <div className="bg-[#EDECEC] rounded-2xl p-4">
              <h2 className="text-center text-xl font-medium">Send Money</h2>
              <p className="font-medium text-sm p-2">
                How much do you want to send?
              </p>
              <div className="divide-y divide-slate-400/40 md:p-1">
                <div>
                  <div className="text-sm text-[#979797] py-1">Amount</div>
                  <CurrencyConverter currencies={currencies} />
                </div>
                <div className="bg-[#26278D] p-4 rounded-full text-white mx-auto -mb-4 h-4 w-6">
                  <FaArrowDown className="text-2xl -mt-3 -mx-3" />
                </div>
                <div>
                  <div className="text-sm text-[#979797] py-1 mt-3">
                    Recipient receives
                  </div>
                  <CurrencyConverter currencies={currencies} />
                </div>
              </div>
              <div>
                <div className="p-1">
                  <label className="text-sm font-medium p-1">
                    Delivery Option
                  </label>
                  <Dropdown
                    options={options}
                    placeholder="Bank"
                    onSelect={handleSelect}
                  />
                </div>
              </div>
              <div className="border-2 border-dashed border-[#195399] bg-[#1953991A] rounded-2xl p-3 mt-3 mb-3">
                <div className="flex justify-between">
                  <div>Our Rate:</div>
                  <div className="text-[#195399]">1.00 GBP = 1420.00NGN</div>
                </div>
                <div className="flex justify-between">
                  <div>Transfer fee</div>
                  <div className="text-[#195399]">5GP</div>
                </div>
              </div>
              <div className="flex justify-between p-1">
                <button className="md:px-6 px-3 py-2 text-[#195399] text-center bg-white hover:bg-gray-300 rounded-xl">
                  Compare Price
                </button>
                <button className="md:px-6 px-3 py-2 text-white text-center bg-[#195399] hover:bg-blue-900 rounded-xl">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <img
            src="./images/edge1.png"
            alt="edge"
            className="absolute -bottom-[14rem] left-2/3 -ml-12 md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
