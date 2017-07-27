import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div className="header_container">
      <h1 className="header_title">{ props.title }</h1>
      <h2 className="header_legend">{ props.legend }</h2>
    </div>
  );
}

Header.prototypes = {
  title: PropTypes.string,
  legend: PropTypes.string
};

Header.defaultProps = {
  title: 'Hader Title',
  legend: ' Header legend'
}

export default Header;
