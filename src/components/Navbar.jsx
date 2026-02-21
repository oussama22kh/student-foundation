import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عنّا', path: '/#about' },
    { name: 'الأرشيف', path: '/archive' },
    { name: 'تواصل معنا', path: '#contact' },
  ]

  const isActive = (path) => {
    if (path.includes('#')) return location.pathname === '/'
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50 border-b border-algeria-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-algeria-blue flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-2xl">ط</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-algeria-dark">
                مؤسسة الطلاب
              </span>
              <p className="text-xs text-algeria-blue -mt-1">الجزائر</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-algeria-blue'
                    : 'text-gray-600 hover:text-algeria-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="px-5 py-2 bg-algeria-gold text-algeria-dark text-sm font-medium hover:bg-yellow-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              تسجيل الدخول
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-algeria-cream transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 absolute w-full left-0 bg-white shadow-lg">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium py-3 px-4 rounded-lg ${
                    isActive(link.path) ? 'text-algeria-blue bg-algeria-blue/5' : 'text-gray-600 hover:bg-algeria-cream'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                className="mt-2 px-5 py-3 bg-algeria-gold text-algeria-dark text-base font-medium text-center rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
