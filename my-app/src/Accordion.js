import React from "react";

const Accordion = ({ title, content, toggle, open }) => {
return (
<div className="accordion-item">
<div className="accordion-title" onClick={() => toggle(title)}>
<div>{open !== title ? "+" : "-"}</div>
<div>&nbsp;{title}</div>
</div>
{open === title && title !== "Clients" && (
<div className="accordion-content">{content}</div>
)}

{open === title && title === "Clients" &&
content.map((artist) => (
<a
href={artist[1]}
rel="noopener noreferrer"
target="_blank"
className="accordion-content"
>
{artist[0]}
</a>
))}

</div>
);
};

export default Accordion;
