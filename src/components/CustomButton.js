{/*CustomButton recibe un texto y una ruta de enlace*/}

function CustomButton({ buttonLabel, buttonUrl, onClick, className }) {
  return (
    <div>
      {onClick ? (
        <button onClick={onClick} className={`btn btn-primary ${className}`}>
          {buttonLabel}
        </button>
      ) : (
        <a href={buttonUrl} className={`btn btn-primary ${className}`}>
          {buttonLabel}
        </a>
      )}
    </div>
  );
}

export default CustomButton;