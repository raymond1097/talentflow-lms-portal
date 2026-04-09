const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create your account",
      description: "Sign up with your Talent flow email, choose your role and discipline.",
    },
    {
      number: 2,
      title: "Enroll in courses",
      description: "Browse the catalog and start learning at your own pace.",
    },
    {
      number: 3,
      title: "Submit & collaborate",
      description: "Complete lessons, submit assignments, and work with your team.",
    },
    {
      number: 4,
      title: "Earn your certificate",
      description: "Complete 100% of a course to receive your certificate.",
    },
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-900 uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
            Up and running in minutes
          </h2>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-between md:items-start gap-12 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-sm">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {step.title}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;