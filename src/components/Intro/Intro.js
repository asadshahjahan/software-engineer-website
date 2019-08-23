import React from 'react';
import Picture from '../../static/profile_picture.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Introduction } from '../../data/information';

import './Intro.css';

const Intro = () => {
	return (
		<div className="intro">
			<header>
				<div className="profile-picture">
					<img src={Picture}  alt="profile_picture"/>
				</div>
				<h2 className="name">{Introduction['name']}</h2>
				<p className="email"><a href={"mailto:"+Introduction['email']}>{Introduction['email']}</a></p>
				<div className="main-hr"><hr/></div>
			</header>
			<section id="footer">
				<ul className="icons">
					{Introduction['social_icons'].map(socialIcon => (
						<li key={socialIcon.label}>
							<a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={socialIcon.icon} />
							</a>
						</li>
					))}
				</ul>
				<p className="copyright">&copy; {Introduction['name']} <a href="/">{Introduction['website']}</a>.</p>
			</section>
		</div>
	);
}


export default Intro;
