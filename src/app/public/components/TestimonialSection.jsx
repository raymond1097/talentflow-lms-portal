const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ada Okonkwo',
      role: 'UI/UX Design Intern',
      image: "/ada.jpg",
      quote: '“TalentFlow made it so much easier to stay on top of all my courses. I used to miss deadlines because everything was scattered. Not anymore.”',
    },
    {
      name: 'Mr. Emeka',
      role: 'Instructor - UI/UX Lead',
      image: '/emeka.jpg',
      quote: '“Grading submissions used to take forever. Now I can see all pending work in one place and give feedback directly. It\'s a huge time saver.”',
    },
    {
      name: 'Ms. Ngozi',
      role: 'Program Administrator',
      image: '/ngozi.jpg',
      quote: '“Managing 52 interns across 6 disciplines was chaotic before. TalentFlow gives us a clear view of everything happening across all teams.”',
    },
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">TESTIMONIALS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 tracking-tight sm:text-4xl">What every role is saying</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 flex flex-col">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;