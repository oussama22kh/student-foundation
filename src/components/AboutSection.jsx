import React from 'react'

const AboutSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'دعم الطلاب',
      description: 'موارد شاملة وتوجيه لمساعدة الطلاب على النجاح في مسيرتهم الأكاديمية.',
      stat: '1000+',
      statLabel: 'طالب جزائري',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'مركز البحث',
      description: 'الوصول إلى أرشيف واسع من الأطروحات والبحوث الأكاديمية من مختلف التخصصات.',
      stat: '500+',
      statLabel: 'أطروحة',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'المجتمع',
      description: 'تواصل مع طلاب وباحثين وأعضاء هيئة التدريس للتعلم التعاوني.',
      stat: '50+',
      statLabel: 'جامعة جزائرية',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-algeria-gold/10 text-algeria-blue text-sm font-medium mb-4">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-algeria-dark mb-4">
            عن مؤسسة الطلاب
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن ملتزمون بتعزيز التميز الأكاديمي ودعم الطلاب الجزائريين في مساعيهم البحثية. 
            توفر منصتنا الوصول إلى موارد قيمة، وتربط الطلاب بالمرشدين، وتخلق فرص التعلم التعاوني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group card relative overflow-hidden"
            >
              <div className="absolute top-0 end-0 w-24 h-24 bg-gradient-to-bl from-algeria-gold/5 to-transparent"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-algeria-blue/10 text-algeria-blue mb-6 group-hover:bg-algeria-blue group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-algeria-dark mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-algeria-blue">{feature.stat}</span>
                  <span className="text-sm text-gray-500">{feature.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-l from-algeria-blue to-algeria-teal p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 end-0 w-64 h-64 bg-white/5 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 start-0 w-48 h-48 bg-algeria-gold/10 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              انضم إلى مجتمعنا الأكاديمي
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              آلاف الطلاب والباحثين يستفيدون من منصتنا. انضم إلينا في بناء مستقبل البحث الأكاديمي الجزائري.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold">
                ابدأ الآن
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 font-medium hover:bg-white/20 transition-all duration-200 border border-white/20">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
