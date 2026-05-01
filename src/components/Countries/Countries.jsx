import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);          // country object
    const countries = countriesData.countries;             // array of countries

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleVisitedCountries = (country) => {
        setVisitedCountries(prev => {
        const existed = prev.find(
            c => c.ccn3.ccn3 === country.ccn3.ccn3
        );
       
        if (existed) {
            return prev.filter(
            c => c.ccn3.ccn3 !== country.ccn3.ccn3        // .filter to remove the matching
         );
        } else {
            return [...prev, country];
        }
        });
    };
    
    // when country is clicked it takes the currency of this country and process further to the converter with it
    const handleCurrencyClick = (country) => {
        const currencyCode = country.currencies?.[0]?.toLowerCase();
        if(currencyCode) {
            navigate(`/converter/${currencyCode}`);
        }
    };

    const filtered = countries.filter(c =>
        c.name?.common?.toLowerCase().includes(search.toLowerCase())                 //.includes(checks whether a string is present in another string,returns true or false)
    );



    return (
        <div className="p-4">
            <h1 className="text-lg font-bold text-slate-100 m-2">In the World of {countries.length} Countries..</h1>
            <h3 className="text-md font-bold text-slate-400 m-2">Visited Destinations : {visitedCountries.length}</h3>

            <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 outline-none border border-slate-600 focus:border-indigo-500"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {
                filtered
                .map((country) => (
                    <Country 
                        key={country.ccn3.ccn3} 
                        country = {country}  
                        handleVisitedCountries = {handleVisitedCountries}
                        handleCurrencyClick = {handleCurrencyClick}
                        isVisited={visitedCountries.some(c => c.ccn3 === country.ccn3)}
                    />
                ))

                }

            </div>
            
            
        </div>
    );
};

export default Countries;