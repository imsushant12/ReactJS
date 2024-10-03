import { useState } from "react";
import InputBox from "./Components/InputBox"; 
import useCurrency from "./Hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);  // Amount from input
  const [from, setFrom] = useState("usd");  // From currency
  const [to, setTo] = useState("inr");      // To currency
  const [result, setResult] = useState(0);  // Conversion result

  const currency = useCurrency(from);       // Fetch currency rates
  const options = Object.keys(currency);    // Currency options

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    const rate = currency[to];
    setResult(amount * rate);                 // Set the result using the conversion rate
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/digital-glowing-currency-sign-background-with-text-space_1017-52412.jpg?t=st=1727850327~exp=1727853927~hmac=87c7db40b26a836c58875e5b818d256dc2dc0a81f3011a380031a7cca635f1d7&w=2000')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}                                     // Amount input for "From"
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}  // Handle "From" currency change
                selectCurrency={from}
                onAmountChange={(amt) => setAmount(amt)}            // Update amount
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={result}                                   // Display the converted result
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}  // Handle "To" currency change
                selectCurrency={to}
                onAmountChange={() => {}}                         // No change needed on amount for "To"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
