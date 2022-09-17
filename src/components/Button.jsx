const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-popping font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
