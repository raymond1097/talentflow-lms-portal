import PropTypes from 'prop-types';

const AuthPage = ({ sectionImage, sectionImageAlt = 'Authentication illustration', children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {sectionImage && (
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-50 overflow-hidden">
          <img
            src={sectionImage}
            alt={sectionImageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  sectionImage: PropTypes.string,
  sectionImageAlt: PropTypes.string,
  children: PropTypes.node,
};

AuthPage.defaultProps = {
  sectionImageAlt: 'Authentication illustration',
};

export default AuthPage;
