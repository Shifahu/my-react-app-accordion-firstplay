import React, { useState } from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import logo from './utils/logo.png';
import video from './utils/dayor-mood.mp4';


const App = () => {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
    console.log(openKey);
  };

  return (
    <div>

<video className='videoTag'  autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>
      <img src={logo} alt="logo"></img>
      <div className="info">
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion
            title={title}
            content={content}
            open={openKey}
            toggle={handleToggle}
          />
        ))}
      </div>
      <div className="trademark">
        © 2022 &nbsp;<strong>First Play</strong>
      </div>
      </div>
    </div>
  );
};

export default App;