import React from 'react'
import { Link } from 'react-router-dom'
import ThesisCard from '../components/ThesisCard'

const sampleTheses = [
  {
    id: 1,
    title: 'تطبيقات التعلم الآلي في تشخيصات الرعاية الصحية',
    studentName: 'أحمد محمد',
    supervisor: 'د. كريم人性的',
    department: 'علوم الحاسب',
    year: 2024,
  },
  {
    id: 2,
    title: 'التخطيط العمراني المستدام: دراسة حالة المدن الجزائرية',
    studentName: 'فاطمة علي',
    supervisor: 'أ.د. محمد 그린',
    department: 'التخطيط العمراني',
    year: 2024,
  },
  {
    id: 3,
    title: 'أثر وسائل التواصل الاجتماعي على الشباب الجزائري',
    studentName: 'ياسين Boulahia',
    supervisor: 'د. نور الدين',
    department: 'العلوم السياسية',
    year: 2023,
  },
]

const LatestTheses = () => {
  return (
    <section className="py-20 bg-algeria-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-algeria-gold/10 text-algeria-blue text-sm font-medium mb-3">
              أحدث الإضافات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-algeria-dark">
              أحدث الأطروحات
            </h2>
          </div>
          
          <Link 
            to="/archive" 
            className="inline-flex items-center text-algeria-blue font-medium hover:text-algeria-gold transition-colors duration-200"
          >
            عرض جميع الأطروحات
            <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleTheses.map((thesis) => (
            <ThesisCard key={thesis.id} thesis={thesis} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestTheses
