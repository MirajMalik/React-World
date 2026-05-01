// import { useState } from "react";
// import CurrencyConverter from "../Currency/CurrencyConverter";

import { useNavigate } from "react-router-dom";


const Country = ({ country, handleVisitedCountries, handleCurrencyClick, isVisited }) => {
    // const [visited,setVisited] = useState(false);


    // const handleVisited = () => {
    //     setVisited(visited ? false : true)
    //     // setVisited(!visited)

    //     handleVisitedCountries(country)
    // }

    const navigate = useNavigate();

    const currencyCode = Object.keys(
        country.currencies?.currencies || {}
    )[0]?.toLowerCase();


    return (
        <div className="bg-slate-800 rounded-xl border border-slate-600 shadow-md p-4 grid gap-3 m-2">
            <img 
                src = {country.flags?.flags?.svg} 
                alt={country.flag?.flags?.alt || `${country.name} flag`}
                className="w-full h-32 object-cover rounded-md"
             />
            <h2 className="text-lg text-slate-100 font-bold">{country.name.common}</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                <span className="text-slate-500">Capital:</span>
                <span>{country.capital?.capital}</span>

                <span className="text-slate-500">Region:</span>
                <span>{country.region?.region}</span>

                <span className="text-slate-500">Population:</span>
                <span>{country.population?.population}</span>

                <span className="text-slate-500">Currency:</span>
                <span>
                    {
                        Object.keys(country.currencies?.currencies || {})[0]
                    }
                    <button
                        onClick={() => navigate(`/converter?from=${currencyCode}`)}
                        className="bg-slate-500 text-red-200 text-bold mt-1 ml-2 p-1 cursor-pointer hover:bg-slate-600 text-red-950" 
                    >
                        Convert Currency
                    </button>
                </span>


                <div>
                    <button 
                        className={`flex-1 rounded-md text-sm font-bold cursor-pointer p-2 transition-colors ${
                        isVisited
                        ? 'bg-red-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                        onClick={() => handleVisitedCountries(country)}
                    >
                        {isVisited ? "Visited" : "Not Visited"}
                    </button>
                </div>

                {country.currencies?.[0] && (
                    <button
                        className="flex-1 rounded-md text-sm font-bold cursor-pointer p-2 bg-indigo-700 text-white hover:bg-indigo-600 transition-colors"
                        onClick={() => handleCurrencyClick(country)}
                    >
                        {country.currencies[0].toUpperCase()}
                    </button>
                )}

            </div>
            
        </div>
    );
};

export default Country;