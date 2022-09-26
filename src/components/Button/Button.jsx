const Button = ({ children, onClickEv, disabledCond, typeBtn }) => {
  return (
    <button
      type={typeBtn}
      className="btn btn-primary m-2"
      disabled={disabledCond}
      onClick={onClickEv}
    >
      {children}
    </button>
  );
};

export default Button;
