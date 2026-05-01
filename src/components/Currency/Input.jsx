
function Input({
    label, 
    amount,
    className = "",
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",

}) {


  return (
    <div className={`bg-slate-700 p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label className='text-slate-400 mb-2 inline-block'>
                {label}
            </label>
            <input 
                className='outline-none w-full bg-transparent py-1.5 text-white text-lg'
                type="number"
                placeholder='Amount'
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}   
            />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-slate-400 mb-2 w-full'>
                Currency Type
            </p>
            <select 
                className='rounded-lg px-2 py-1 bg-slate-600 text-white cursor-pointer outline-none border border-slate-500'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOption.map((cur) => (
                    <option key={cur} value={cur}>
                        {cur.toUpperCase()}
                    </option>    
                ))}
               
            </select>

        </div>

      
    </div>
  )
}

export default Input;

