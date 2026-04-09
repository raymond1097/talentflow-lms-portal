import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { forwardRef, useId } from "react";

const Input = forwardRef(({
  label,
  type,
  placeholder,
  inputLength,
  showPassword,
  setShowPassword,
  action,
  error,
  icon,
  ...props
}, ref) => {
  const hasError = !!error;
  const inputOnChange = action ?? props.onChange;
  const id = props.id || useId();
  const inputProps = {
    ...props,
    onChange: inputOnChange,
    readOnly: props.readOnly ?? (props.value !== undefined && inputOnChange == null ? true : undefined),
  };

  return (
    <div className="relative" style={{width: inputLength ? `${inputLength}%` : '100%'}}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-navy-900 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword !== undefined && type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          ref={ref}
          id={id}
          icon={icon}
          className={`w-full relative px-4 py-3 rounded-lg border-1 transition outline-none ${
            hasError
              ? 'border-red-300 focus:ring-red-500'
              : 'border-gray-300'
          }`}
          {...inputProps}
        />
        {type === "password" && setShowPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-[#000066]" />
            ) : (
              <Eye className="h-5 w-5 text-[#000066]" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {hasError && (
        <div className="flex items-center space-x-1 mt-1">
          <AlertCircle size={14} className="text-red-500" />
          <span className="text-sm text-red-600">{error}</span>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
