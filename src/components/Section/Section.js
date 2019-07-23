import React from 'react';
import SectionLink from './SectionLink';

const Section = (props) => {
	const reference_links = props.section.reference_links
	return (
		<div className="section" key={props.section.name}>
			<h4>
				<a href={props.section.web_url} target="_blank" rel="noopener noreferrer">
					{props.section.name}
				</a>
			</h4>
			<h6>{props.section.major}</h6>
			<p>{props.section.date}</p>
			{props.section.detail && <p>{props.section.detail}</p>}
			{reference_links && reference_links.map(reference_link => (
				<SectionLink link={reference_link.link} logo={reference_link.logo} />
			))}
			{props.section.logo && <SectionLink link={props.section.web_url} logo={props.section.logo} />}
		</div>
	);
}


export default Section;
