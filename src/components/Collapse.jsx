import { useState } from 'react';
import '../components/Collapse.scss';

function Collapse({ title, content }) { 
  const [showContent, setShowContent] = useState(false); 

  const displayContent = () => { 
    setShowContent(!showContent); 
  };
  return (
    <div className={`collapse-container${showContent ? ' expand' : ' collapsed'}`}>
      <h2 className="collapse-title"> 
        {title} 
        <span> 
          <i 
            className="fa-solid fa-chevron-up collapse-icon" 
            style={{ color: 'white' }} 
            onClick={displayContent} 
          ></i> 
        </span> 
      </h2>
      <div className="collapse-content"> 
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
    </div>
  )
}
export default Collapse;