import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import logo from './utils/logo.png';

const App = () => {
  return (
    <div>
      <img src={logo} alt='logo'></img>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <div className="trademark">© 2022 <strong>First Play</strong></div>
    </div>
  );
};

export default App;