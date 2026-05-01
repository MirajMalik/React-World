import { useState, useEffect  } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import Input from "./Input";
import useCurrencyInfo from "./useCurrencyInfo";

export default function CurrencyConverter() {
  const [searchParams] = useSearchParams();
  const fromCurrency = searchParams.get("from");
  // const { fromCurrency } = useParams();         // currency code coming from Country
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState(fromCurrency || "usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);         //  {object}
  const options = Object.keys(currencyInfo);         // [array]

  

//  console.log("FromCurrency : ",fromCurrency)

  useEffect(() => {
  if (!fromCurrency) return;

  const normalized = fromCurrency.toLowerCase();

  // optional validation
  if (normalized.length === 3) {
    setFrom(normalized);
  }
}, [fromCurrency]);

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    setFrom(tempTo);
    setTo(tempFrom);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // console.log("FromCurrency : ",fromCurrency)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl border border-slate-600 p-6 shadow-xl">
        <h2 className="text-white font-bold text-2xl text-center mb-1">
           Currency Converter
        </h2>

        

        {fromCurrency && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-indigo-900 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-600">
              Country Currency: {fromCurrency.toUpperCase()}
            </span>
            <button
              onClick={() => navigate("/")}
              className="text-slate-400 hover:text-white text-xs underline"
            >
              ← Back
            </button>
          </div>
        )}

        <div className="mt-4">
          <Input
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={setAmount}
          />
        </div>

        <div className="flex justify-center my-3">
          <button
            onClick={swap}
            className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-full text-sm border border-slate-500 transition-colors"
          >
            ⇅ Swap
          </button>
        </div>

      <Input
        label="To"
        amount={convertedAmount}
        currencyOption={options}
        onCurrencyChange={setTo}
        selectCurrency={to}
        onAmountChange={() => {}}
      />

      <button
        onClick={convert}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold text-base transition-colors"
      >
        Convert {from.toUpperCase()} → {to.toUpperCase()}
      </button>

      {convertedAmount > 0 && (
          <p className="text-center text-indigo-300 mt-3 text-sm">
            {amount} {from.toUpperCase()} = <strong className="text-white text-lg">{convertedAmount}</strong> {to.toUpperCase()}
          </p>
      )}

  </div>
      
 </div>
  );
}