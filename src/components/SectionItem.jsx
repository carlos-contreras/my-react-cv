import React from 'react';
import PropTypes from 'prop-types';


function SectionItem(props) {
  return (
    <div className="section_item_container">
      <h4 className="section_item_title">{ props.title }</h4>
      <p className="section_item_description">{ props.description }</p>
    </div>
  );
}

SectionItem.prototypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SectionItem.defaultProps = {
  title: 'Item Title',
  description: 'Item description'
}

export default SectionItem;
