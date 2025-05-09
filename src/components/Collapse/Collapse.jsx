import { useState } from 'react';
import './Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) { 
  const [showContent, setShowContent] = useState(false); 

  const displayContent = () => { 
    setShowContent(!showContent); 
  };
  
  return (
    <section 
    className={`collapse-container${showContent ? ' expand' : ' collapsed'}`}
    onClick={displayContent} 
    >
      <h2 className="collapse__title"> 
        {title} 
        <span> 
        <FontAwesomeIcon icon={faChevronUp} className="collapse__icon" /> 
        </span> 
      </h2>
      <div className="collapse__content"> 
        {typeof content === 'string' ? ( 
          <p>{content}</p> 
        ) : ( 
          <ul> 
            {content.map((item, index) => ( 
              <li key={index}>{item}</li> 
            ))} 
          </ul> 
        )} 
      </div>
    </section>
  )
}
export default Collapse;