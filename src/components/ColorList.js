import React from "react";

function ColorList({color}) {
  
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorRender = colors.map(color => {
    return <li style={{color: color}} key={color}>{color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorRender}
      </ol>
    </div>
  );
}

export default ColorList;
