import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionLink = (props) => {
  return (
    <a className="section-link" href={props.link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={props.logo}/>
    </a>
  )
}

export default SectionLink;