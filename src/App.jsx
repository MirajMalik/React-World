import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Countries from './components/Countries/Countries'
import CurrencyConverter from './components/Currency/CurrencyConverter'
import Navbar from './components/Navbar'

const countriesPromise = fetch(`https://openapi.programming-hero.com/api/all`)
                        .then(res => res.json())


function App() {
  
  return (
    <div className='min-h-screen bg-slate-900'>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element = {
              <Suspense fallback = {
                <p className="text-white text-center mt-10 text-lg">
                  Loading countries...
                </p>
              }>
                <Countries countriesPromise={countriesPromise} />
              </Suspense>
          }
        />

        <Route 
          path='/converter'
          element = {<CurrencyConverter />}
        />

        {/* <Route 
          path="/converter/:fromCurrency" 
          element={<CurrencyConverter />} 
        /> */}

      </Routes>
    
    </div>
    
  )
}

export default App
