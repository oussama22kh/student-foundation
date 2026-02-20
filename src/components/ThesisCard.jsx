import React from 'react'
import { Link } from 'react-router-dom'

const ThesisCard = ({ thesis, showFull = false }) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="inline-flex items-center px-3 py-1.5 bg-algeria-blue/10 text-algeria-blue text-xs font-medium">
          {thesis.department}
        </span>
        <span className="inline-flex items-center px-2 py-1 bg-algeria-gold/10 text-algeria-blue text-xs font-medium">
          {thesis.year}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-algeria-dark mb-3 line-clamp-2 group-hover:text-algeria-blue transition-colors duration-200">
        {thesis.title}
      </h3>
      
      <div className="space-y-2 mb-4 flex-grow">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-algeria-dark">الطالب:</span> {thesis.studentName}
        </p>
        
        {showFull && (
          <>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-algeria-dark">المشرف:</span> {thesis.supervisor}
            </p>
          </>
        )}
      </div>
      
      <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
        <Link
          to={`/thesis/${thesis.id}`}
          className="inline-flex items-center text-sm font-medium text-algeria-blue hover:text-algeria-gold transition-colors duration-200"
        >
          عرض التفاصيل
          <svg className="w-4 h-4 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        {showFull && (
          <button className="text-gray-400 hover:text-algeria-gold transition-colors" title="تحميل">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default ThesisCard
