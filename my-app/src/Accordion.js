import React from 'react';

const Accordion = ({ title, content, toggle, open }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => toggle(title)}>
        <div>{open !== title ? '+':'-'}</div>
        <div>&nbsp;{title}</div>

      </div>
       {  open === title &&  <div className="accordion-content">
         {content}
         </div>}
    </div>
  );
};

export default Accordion;