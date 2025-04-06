const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyles = "transition-all font-semibold px-6 py-3 rounded-full text-lg";
  const variants = {
    default: "bg-accent text-white",
    outline: "border border-accent text-black bg-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;