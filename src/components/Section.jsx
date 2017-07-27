import React from 'react';
import SectionItem from './SectionItem';

function Section(props) {
  return (
    <div className="section_container">
      <h3 className="section_title">{ props.title }</h3>
      <div className="section_items">
        {
          props.items.map(function(item, index) {
            return (
              <SectionItem title={item.title} description={item.description} key={index} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Section;
