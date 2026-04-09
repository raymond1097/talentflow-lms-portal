const HeroSection = ({
  title,
  highlightedWord,
  description,
  className,
  ctaPrimaryText,
  ctaSecondaryText,
  imageSrc,
  imageAlt,
  stats = [{ label: 'Active Learners', value: '50+' }, { label: 'Disciplines', value: '6' }, { label: 'Courses Available', value: '8' }, { label: 'User Roles', value: '3' }, { label: 'Certificate on Completion', value: '100%' },],
  trustedText = "Trusted by Trueminds Innovations",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="min-h-screen w-full mx-auto px-6 py-20 bg-white text-[#0D1442]">
      
      {/* --- Main Hero Content --- */}
      <div className="max-w-7xl mx-auto px-6 md:py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          <h1 className={className}>
            {title.split(highlightedWord)[0]}
            <span className="text-orange-500">{highlightedWord}</span>
            {title.split(highlightedWord)[1]}
          </h1>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={onPrimaryClick}
              type="button"
              className="bg-[#0D1442] text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
            >
              {ctaPrimaryText}
            </button>

            <button
              onClick={onSecondaryClick}
              type="button"
              className="border-2 border-gray-300 text-[#0D1442] px-5 py-2 rounded-md font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xs">▶</span> {ctaSecondaryText}
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[389px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Stats Section --- */}
      {stats.length > 0 && (
        <div className="w-full mt-12 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between flex-nowrap overflow-x-auto lg:overflow-visible">
            
            <div className="whitespace-nowrap mr-8">
              <p className="text-sm font-medium">{trustedText}</p>
            </div>

            <div className="flex items-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center px-6 text-center ${
                    index !== 0 ? "border-l border-gray-200" : ""
                  }`}
                >
                  <span className="text-2xl font-bold leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] font-medium tracking-widest mt-2 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;