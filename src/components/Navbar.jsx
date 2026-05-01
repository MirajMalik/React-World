import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <span className="text-white font-bold text-xl">React World</span>
      <div className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>                                                                // isActive(true/false) gives by react router automatically
            `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`
          }
        >
          Countries
        </NavLink>

        <NavLink
          to="/converter"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`
          }
        >
           Currency Converter
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar