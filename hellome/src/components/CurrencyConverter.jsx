import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { getCurrencyByCountryCode } from "iso-country-currency";

const CurrencyConverter = () => {
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
    <div className="flex items-center mb-4">
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="border border-gray-300 rounded-md py-1 px-2 mr-2"
      />
      <ReactFlagsSelect
        selected={selectedCountry}
        onSelect={onSelect}
        countries={["NG", "GB", "US", "CA"]}
        customLabels={{
          NG: "🇳🇬",
          GB: "🇬🇧",
          US: "🇺🇸",
          CA: "🇨🇦",
        }}
        className="react-flags-select"
      />
    </div>
  );
};

export default CurrencyConverter;
