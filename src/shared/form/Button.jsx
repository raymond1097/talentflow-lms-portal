import PropTypes from 'prop-types';

const Button = ({
  type = "button",
  action,
  icon,
  btnText,
  iconUrl,
  iconAlt = "",
  className
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#000066] hover:bg-[#000044] py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition shadow-lg cursor-pointer ${className}`}
      onClick={action}
      {...(!btnText && { 'aria-label': iconAlt || 'Button' })}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          loading="lazy"
          alt={iconAlt}
          className="w-5 h-5"
        />
      )}

      <span>{btnText}</span>
      {icon && icon}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
  icon: PropTypes.node,
  btnText: PropTypes.string,
  iconUrl: PropTypes.string,
  iconAlt: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  iconAlt: "",
};

export default Button;
