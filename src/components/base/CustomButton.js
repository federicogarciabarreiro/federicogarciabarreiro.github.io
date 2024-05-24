import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CustomButton({ buttonLabel, buttonUrl, onClickNavigate, customClasName }) {

  const navigate = useNavigate();

  return (
    <>
     <div className='width-full'> 
     {onClickNavigate ? (
        <Button onClick={()=>navigate(onClickNavigate)} className={`btn btn-primary ${customClasName}`}>
          {buttonLabel}
        </Button>
      ) : (
        <a href={buttonUrl} className={`btn btn-primary ${customClasName}`}>
          {buttonLabel}
        </a>
      )}
     </div>
    </>
  );
}

export default CustomButton;