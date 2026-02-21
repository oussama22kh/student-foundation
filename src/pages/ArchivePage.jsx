import React, { useState, useMemo } from 'react'
import ThesisCard from '../components/ThesisCard'

const allTheses = [
  {
    id: 1,
    title: 'تطبيقات التعلم الآلي في تشخيصات الرعاية الصحية',
    studentName: 'أحمد محمد',
    supervisor: 'د. كريم',
    department: 'علوم الحاسب',
    year: 2024,
  },
  {
    id: 2,
    title: 'التخطيط العمراني المستدام: دراسة حالة المدن الجزائرية',
    studentName: 'فاطمة علي',
    supervisor: 'أ.د. محمد',
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
  {
    id: 4,
    title: 'حلول الطاقة المتجددة للمجتمعات الريفية في الجزائر',
    studentName: 'عمر سعيدي',
    supervisor: 'د. lisa',
    department: 'العلوم البيئية',
    year: 2024,
  },
  {
    id: 5,
    title: 'الاقتصاد الجزئي في السوق الجزائري',
    studentName: 'خالد بلقاسم',
    supervisor: 'أ.د. رشيد',
    department: 'الاقتصاد',
    year: 2023,
  },
  {
    id: 6,
    title: 'الحوسبة السحابية في المؤسسات الجزائرية',
    studentName: 'منصور Martin',
    supervisor: 'د. Patricia',
    department: 'علوم الحاسب',
    year: 2024,
  },
  {
    id: 7,
    title: 'التكيف مع تغير المناخ في منطقة البحر المتوسط',
    studentName: 'سارة زروقي',
    supervisor: 'د. أحمد',
    department: 'العلوم البيئية',
    year: 2023,
  },
  {
    id: 8,
    title: 'التسويق الرقمي في الاقتصاد الجزائري',
    studentName: 'نور الدين',
    supervisor: 'أ.د. Amanda',
    department: 'الأعمال',
    year: 2024,
  },
  {
    id: 9,
    title: 'علم النفس التربوي في المدارس الجزائرية',
    studentName: 'مريم عبادي',
    supervisor: 'د. Kevin',
    department: 'العلوم النفسية',
    year: 2023,
  },
]

const departments = [
  'جميع الأقسام',
  'علوم الحاسب',
  'التخطيط العمراني',
  'العلوم السياسية',
  'العلوم البيئية',
  'الاقتصاد',
  'الأعمال',
  'العلوم النفسية',
]

const years = ['جميع السنوات', '2024', '2023', '2022', '2021', '2020']

const ArchivePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('جميع الأقسام')
  const [selectedYear, setSelectedYear] = useState('جميع السنوات')

  const filteredTheses = useMemo(() => {
    return allTheses.filter((thesis) => {
      const matchesSearch =
        thesis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        thesis.studentName.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDepartment =
        selectedDepartment === 'جميع الأقسام' || thesis.department === selectedDepartment
      const matchesYear =
        selectedYear === 'جميع السنوات' || thesis.year.toString() === selectedYear

      return matchesSearch && matchesDepartment && matchesYear
    })
  }, [searchTerm, selectedDepartment, selectedYear])

  return (
    <div className="py-12 bg-algeria-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-algeria-gold/10 text-algeria-blue text-sm font-medium mb-3">
            الأرشيف الأكاديمي
          </span>
          <h1 className="text-4xl font-bold text-algeria-dark mb-3">أرشيف الأطروحات</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تصفح مجموعة الأبحاث والأعمال الأكاديمية من طلابنا وباحثينا الجزائريين
          </p>
        </div>

        <div className="bg-white shadow-soft p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">بحث</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث بالعنوان أو اسم الطالب..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field ps-10"
                />
                <svg className="absolute end-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="input-field"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">السنة</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="input-field"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            عرض <span className="font-bold text-algeria-blue">{filteredTheses.length}</span> أطروحة
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>ترتيب حسب:</span>
            <select className="bg-transparent font-medium text-algeria-dark focus:outline-none">
              <option>الأحدث</option>
              <option>الأقدم</option>
              <option>العنوان</option>
            </select>
          </div>
        </div>

        {filteredTheses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTheses.map((thesis) => (
              <ThesisCard key={thesis.id} thesis={thesis} showFull />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white">
            <div className="w-20 h-20 bg-algeria-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-algeria-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-algeria-dark mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث أو الفلترة</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArchivePage
