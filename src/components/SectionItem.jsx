import React from 'react';


function SectionItem(props) {
  return (
    <div className="section_item_container">
      <h4 className="section_item_title">{ props.title }</h4>
      <p className="section_item_description">{ props.description }</p>
    </div>
  );
}

export default SectionItem;
