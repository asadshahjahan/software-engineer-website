import React from 'react';
import './Skills.css';
import {Skills as skillsData} from '../../data/information';

const Skills = () => {
	return (
		<section id="skills">
			<ul className="skill-icons">
				{skillsData.map(s => ( <li key={s}><i className={s}></i></li> ))}
			</ul>
		</section>
	)
}

export default Skills;