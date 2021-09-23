import React from "react";

const Title = ({ title, style }) => {
  return (
    <div className="section-title" style={style ? style : null}>
      <h4>{title}</h4>
    </div>
  );
};

export default Title;
