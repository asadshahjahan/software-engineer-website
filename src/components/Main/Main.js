import React from 'react';
import Skills from '../Skills/Skills';
import Section from '../Section/Section';
import { WhatsNewAboutExperienceEducationSkills } from '../../data/information';

import './Main.css';

const Main = () => {
	return (
		<div className="main">
			{WhatsNewAboutExperienceEducationSkills.map(main =>(
				<div className="article" key={main.title}>
					<div className="post">
						<header><div className="title"><h2>{main.title}</h2></div></header>
						{main.skills && <Skills/>}
						{main.details && main.details.map(section => ( <Section section={section} /> ))}
					</div>
				</div>
			))}
		</div>
	);
}


export default Main;
