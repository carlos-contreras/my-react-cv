import React from 'react';

function Header(props) {
  return (
    <div className="header_container">
      <h1 className="header_title">{ props.title }</h1>
      <h2 className="header_legend">{ props.legend }</h2>
    </div>
  );
}

export default Header;
