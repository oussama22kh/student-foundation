import React from 'react'
import { useParams, Link } from 'react-router-dom'

const thesisData = {
  1: {
    id: 1,
    title: 'تطبيقات التعلم الآلي في تشخيصات الرعاية الصحية',
    studentName: 'أحمد محمد',
    supervisor: 'د. كريم',
    department: 'علوم الحاسب',
    year: 2024,
    abstract: `تستكشف هذه الأطروحة تنفيذ خوارزميات التعلم الآلي في تشخيصات الرعاية الصحية، مع التركيز على الكشف المبكر عن الأمراض المزمنة. يبحث البحث في تقنيات التعلم المختلفة سواء الخاضعة للإشراف أو غير الخاضعة للإشراف المطبقة على الصور الطبية وتحليل بيانات المرضى.

توضح الدراسة تحسنات كبيرة في دقة التشخيص من خلال استخدام الشبكات العصبية العميقة، خاصة في تحديد المراحل المبكرة من الحالات التي غالباً ما تفوت الطرق التقليدية. تشير النتائج إلى أن التشخيص بمساعدة التعلم الآلي يمكن أن يقلل النتائج السلبية الكاذبة بنسبة تصل إلى 35% مع الحفاظ على دقة عالية.

تشمل المساهمات الرئيسية خط معالجة مبتكر للصور الطبية، وتحليل مقارن لهياكل التعلم الآلي المختلفة، وتوصيات لدمج هذه الأنظمة في سير العمل السريري.`,
    keywords: ['التعلم الآلي', 'الرعاية الصحية', 'التشخيص', 'التعلم العميق', 'الصور الطبية'],
  },
  2: {
    id: 2,
    title: 'التخطيط العمراني المستدام: دراسة حالة المدن الجزائرية',
    studentName: 'فاطمة علي',
    supervisor: 'أ.د. محمد',
    department: 'التخطيط العمراني',
    year: 2024,
    abstract: `تحليل معمق للممارسات المستدامة في التطوير الحضري، مع دراسات حالة من المدن الجزائرية الكبرى. يقيم هذا البحث فعالية البنية التحتية الخضراء وتقنيات المدن الذكية والمشاركة المجتمعية في خلق بيئات حضرية مرنة.

يقدم الأطروحة إطاراً شاملاً لتقييم الاستدامة الحضرية عبر أبعاد متعددة بما في ذلك الأثر البيئي والجدوى الاقتصادية والعدالة الاجتماعية. تكشف النتائج أن المقاربات المتكاملة التي تجمع بين الحلول التكنولوجية والمبادرات القائمة على المجتمع تحقق أكثر النتائج نجاحاً.

تقدم توصيات لصانعي السياسات والمخططين الحضريين في الجزائر، مع التأكيد على أهمية استراتيجيات الإدارة التكيفية والتعاون بين أصحاب المصلحة في تحقيق أهداف الاستدامة طويلة المدى.`,
    keywords: ['التخطيط العمراني', 'الاستدامة', 'المدن الذكية', 'البنية التحتية الخضراء'],
  },
  3: {
    id: 3,
    title: 'أثر وسائل التواصل الاجتماعي على الشباب الجزائري',
    studentName: 'ياسين Boulahia',
    supervisor: 'د. نور الدين',
    department: 'العلوم السياسية',
    year: 2023,
    abstract: `يفحص هذا البحث كيفية تأثير منصات وسائل التواصل الاجتماعي على سلوك الشباب الجزائري سياسياً واجتماعياً. من خلال التحليل المختلط الذي يجمع بين استخراج البيانات الكمي والمقابلات النوعية، يكشف الدراسة عن علاقات معقدة بين خوارزميات المنصات والمشاركة المدنية.

تشير النتائج الرئيسية إلى أن وسائل التواصل الاجتماعي لعبت دوراً مهماً في توعية الشباب الجزائري بالقضايا السياسية والاجتماعية. كما أسهمت في تعزيز المشاركة المدنية لكن مع بعض التحديات المتعلقة بنشر المعلومات المضللة.

تنتهي الأطروحة بتوصيات مبنية على الأدلة لمصممي المنصات وصانعي السياسات لتعزيز الاستخدام الإيجابي لوسائل التواصل الاجتماعي بين الشباب.`,
    keywords: ['وسائل التواصل الاجتماعي', 'الشباب', 'الجزائر', 'المشاركة المدنية'],
  },
}

const ThesisDetails = () => {
  const { id } = useParams()
  const thesis = thesisData[id] || thesisData[1]

  return (
    <div className="py-12 bg-algeria-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/archive" 
          className="inline-flex items-center text-algeria-blue hover:text-algeria-gold mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          العودة للأرشيف
        </Link>

        <article className="bg-white shadow-soft overflow-hidden">
          <div className="bg-gradient-to-l from-algeria-blue to-algeria-teal p-8 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
              {thesis.department}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">
              {thesis.title}
            </h1>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-100">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">الطالب</p>
                <p className="font-bold text-algeria-dark">{thesis.studentName}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">المشرف</p>
                <p className="font-bold text-algeria-dark">{thesis.supervisor}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">القسم</p>
                <p className="font-bold text-algeria-dark">{thesis.department}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">السنة</p>
                <p className="font-bold text-algeria-dark">{thesis.year}</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-algeria-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-algeria-gold"></span>
                الملخص
              </h2>
              <div className="text-gray-600 leading-loose whitespace-pre-line bg-algeria-cream p-6">
                {thesis.abstract}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-algeria-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-algeria-gold"></span>
                الكلمات المفتاحية
              </h2>
              <div className="flex flex-wrap gap-2">
                {thesis.keywords.map((keyword, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-algeria-blue/5 text-algeria-blue text-sm font-medium hover:bg-algeria-blue hover:text-white transition-colors cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-algeria-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-algeria-gold"></span>
                معاينة المستند
              </h2>
              <div className="bg-algeria-cream p-8 text-center min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                <div className="w-20 h-20 bg-algeria-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-algeria-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 mb-2">سيتم عرض ملف PDF هنا</p>
                <p className="text-sm text-gray-400">
                  thesis_{thesis.id}_{thesis.studentName.toLowerCase().replace(' ', '_')}.pdf
                </p>
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2 flex-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                تحميل PDF
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 flex-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                مشاركة
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ThesisDetails
