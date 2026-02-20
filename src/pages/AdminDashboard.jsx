import React, { useState } from 'react'

const departments = [
  'علوم الحاسب',
  'التخطيط العمراني',
  'العلوم السياسية',
  'العلوم البيئية',
  'الاقتصاد',
  'الأعمال',
  'العلوم النفسية',
]

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    studentName: '',
    department: departments[0],
    year: new Date().getFullYear(),
    abstract: '',
    pdfFile: null,
  })

  const [theses, setTheses] = useState([
    { id: 1, title: 'تطبيقات التعلم الآلي في الرعاية الصحية', studentName: 'أحمد محمد', department: 'علوم الحاسب', year: 2024 },
    { id: 2, title: 'التخطيط العمراني المستدام', studentName: 'فاطمة علي', department: 'التخطيط العمراني', year: 2024 },
  ])

  const [editingId, setEditingId] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, pdfFile: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      setTheses((prev) => prev.map((t) => (t.id === editingId ? { ...t, ...formData } : t)))
      setEditingId(null)
    } else {
      setTheses((prev) => [...prev, { id: Date.now(), ...formData }])
    }
    setFormData({ title: '', studentName: '', department: departments[0], year: new Date().getFullYear(), abstract: '', pdfFile: null })
  }

  const handleEdit = (thesis) => {
    setFormData({ title: thesis.title, studentName: thesis.studentName, department: thesis.department, year: thesis.year, abstract: thesis.abstract || '', pdfFile: null })
    setEditingId(thesis.id)
  }

  const handleDelete = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الأطروحة؟')) {
      setTheses((prev) => prev.filter((t) => t.id !== id))
    }
  }

  return (
    <div className="py-12 bg-algeria-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 bg-algeria-gold/10 text-algeria-blue text-sm font-medium mb-3">
            لوحة الإدارة
          </span>
          <h1 className="text-3xl font-bold text-algeria-dark">لوحة تحكم الإدارة</h1>
          <p className="text-gray-600 mt-2">إدارة وتقديم الأطروحات الأكاديمية</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-soft p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-algeria-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-algeria-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-algeria-dark">
                {editingId ? 'تعديل الأطروحة' : 'رفع أطروحة جديدة'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الأطروحة</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder="أدخل عنوان الأطروحة" 
                  className="input-field" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم الطالب</label>
                <input 
                  type="text" 
                  name="studentName" 
                  value={formData.studentName} 
                  onChange={handleInputChange} 
                  placeholder="أدخل اسم الطالب" 
                  className="input-field" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
                  <select 
                    name="department" 
                    value={formData.department} 
                    onChange={handleInputChange} 
                    className="input-field" 
                    required
                  >
                    {departments.map((dept) => (<option key={dept} value={dept}>{dept}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">السنة</label>
                  <input 
                    type="number" 
                    name="year" 
                    value={formData.year} 
                    onChange={handleInputChange} 
                    min="2000" 
                    max={new Date().getFullYear() + 1} 
                    className="input-field" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الملخص</label>
                <textarea 
                  name="abstract" 
                  value={formData.abstract} 
                  onChange={handleInputChange} 
                  placeholder="أدخل ملخص الأطروحة..." 
                  rows={4} 
                  className="input-field resize-none" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ملف PDF</label>
                <div className="border-2 border-dashed border-gray-200 p-6 text-center hover:border-algeria-blue hover:bg-algeria-blue/5 transition-all duration-200">
                  <input 
                    type="file" 
                    accept=".pdf" 
                    onChange={handleFileChange} 
                    className="hidden" 
                    id="pdf-upload" 
                  />
                  <label htmlFor="pdf-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-algeria-blue/10 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-algeria-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {formData.pdfFile ? formData.pdfFile.name : 'انقر لرفع ملف PDF'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">الحد الأقصى: 50MB</p>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button type="submit" className="btn-primary flex-1">
                  {editingId ? 'تحديث الأطروحة' : 'رفع الأطروحة'}
                </button>
                {editingId && (
                  <button 
                    type="button" 
                    onClick={() => { 
                      setEditingId(null); 
                      setFormData({ title: '', studentName: '', department: departments[0], year: new Date().getFullYear(), abstract: '', pdfFile: null }) 
                    }} 
                    className="px-6 py-3 border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    إلغاء
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-algeria-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-algeria-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-algeria-dark">
                  الأطروحات المرفوعة
                </h2>
              </div>
              <span className="px-3 py-1 bg-algeria-blue/10 text-algeria-blue text-sm font-medium">
                {theses.length} أطروحة
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-start py-3 px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">العنوان</th>
                    <th className="text-start py-3 px-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">القسم</th>
                    <th className="text-start py-3 px-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">السنة</th>
                    <th className="text-end py-3 px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {theses.map((thesis) => (
                    <tr key={thesis.id} className="hover:bg-algeria-cream/50 transition-colors">
                      <td className="py-4 px-3">
                        <p className="font-medium text-algeria-dark text-sm line-clamp-1">{thesis.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{thesis.studentName}</p>
                      </td>
                      <td className="py-4 px-3 hidden md:table-cell">
                        <span className="px-2 py-1 bg-algeria-blue/5 text-algeria-blue text-xs">{thesis.department}</span>
                      </td>
                      <td className="py-4 px-3 hidden lg:table-cell text-sm text-gray-600">{thesis.year}</td>
                      <td className="py-4 px-3 text-end">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => handleEdit(thesis)} 
                            className="p-2 text-algeria-blue hover:bg-algeria-blue/10 transition-colors" 
                            title="تعديل"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => handleDelete(thesis.id)} 
                            className="p-2 text-red-500 hover:bg-red-50 transition-colors" 
                            title="حذف"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {theses.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">لم يتم رفع أي أطروحات بعد</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
