import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-algeria-blue text-white py-24 lg:py-36 hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-algeria-dark/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 mb-8 backdrop-blur-sm">
            <span className="text-4xl font-bold">ط</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow">
            مؤسسة الطلاب
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            نسعى لتمكين التميز الأكاديمي من خلال البحث التعاوني ومشاركة المعرفة ودعم مجتمع طلاب الجامعة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/archive" 
              className="btn-gold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              تصفح أرشيف الأطروحات
            </Link>
            <a 
              href="#about" 
              className="btn-secondary border-white/50 text-white hover:bg-white hover:text-algeria-blue text-lg px-8 py-4 backdrop-blur-sm"
            >
              اعرف المزيد
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-algeria-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>تميز أكاديمي</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-algeria-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span>بحث تعاوني</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-algeria-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
            </svg>
            <span>موارد متعددة</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
