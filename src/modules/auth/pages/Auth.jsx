import PropTypes from 'prop-types';

const AuthPage = ({sectionImage, altText = 'Authentication illustration', children}) => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Side: Image Section */}
      <div className="hidden md:block md:w-1/2 lg:w-2/5 relative">
        {sectionImage && (
          <img src={sectionImage} loading="lazy" alt={altText}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full md:w-1/2 lg:w-3/5 flex items-center justify-center p-8 md:p-16">
        {children}
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  sectionImage: PropTypes.string,
  altText: PropTypes.string,
  children: PropTypes.node,
};

AuthPage.defaultProps = {
  altText: 'Authentication illustration',
};

export default AuthPage;