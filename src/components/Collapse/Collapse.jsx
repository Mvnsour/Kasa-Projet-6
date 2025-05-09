import { useState } from 'react';
import './Collapse.scss';

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
          <i className="fa-solid fa-chevron-up collapse__icon"></i> 
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