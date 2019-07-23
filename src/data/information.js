import { faGithub, faFacebook, faInstagram, faLinkedinIn, faStackOverflow, faChrome } from '@fortawesome/free-brands-svg-icons';

export const Introduction = {
	name: 'M. Asad Shah Jahan',
	email: 'm.asad.s94@gmail.com',
	website: 'asadshahjahan.github.io',
	social_icons: [
		{
			link: 'https://github.com/asadshahjahan',
			label: 'Github',
			icon: faGithub,
		},
		{
			link: 'https://www.facebook.com/asadshahjahan',
			label: 'Facebook',
			icon: faFacebook,
		},
		{
			link: 'https://www.instagram.com/masadshahjahan/',
			label: 'Instagram',
			icon: faInstagram,
		},
		{
			link: 'https://pk.linkedin.com/in/asadshahjahan',
			label: 'LinkedIn',
			icon: faLinkedinIn,
		},
		{
			link: 'https://stackoverflow.com/users/11384368/m-asad-shah-jahan',
			label: 'StackOverFlow',
			icon: faStackOverflow,
		}
	]
}

export const WhatsNewAboutExperienceEducationSkills = [
  {
    title: "Whats New",
		details: [
			{
				logo: faGithub,
				name: "asadshahjahan/software-engineer-personal-website",
				web_url: 'https://github.com/asadshahjahan/software-engineer-website',
				detail: "I have developed a REACT template that can be used by developers for " + 
								"creating their personal websites. Just update information.js and all of the latest data will be updated.",
				reference_links: [
					{
							link:"https://asadshahjahan.github.io",
							logo: faChrome
					}
				]
			}
		]
	},
	{
		title: 'About',
		details: [
			{
					major: "Hi, I am Asad. I love to build softwares and my area of interest is Web software development. I am a FAST-NU graduate and Senior Software Engineer at Arbisoft. Before Arbisoft, I was at Khaleef Technologies Pvt. Ltd."
			}
		]
	},
	{
		title: "Experience",
		details: [
			{
				name: "Arbisoft Pvt. Ltd.",
				web_url: 'https://arbisoft.com/',
				major: "Senior Software Engineer",
				date: 'Aug 2018 - present',
				detail: null,
			},
			{
				name: "Khaleef Technologies Pvt. Ltd.",
				web_url: 'http://khaleef.com/',
				major: "Software Engineer",
				date: 'July 2015 - Aug 2018 (3.1 years)',
				detail: null,
			}
		]
	},
  {
    title: "Education",
		details: [
			{
				name: "National University of Computers and Emerging Sciences - FAST",
				web_url: 'http://nu.edu.pk',
				major: "BS(Computer Sciences) - Major in Web Software Development",
				date: '2010 - 2015',
				detail: null,
			}
		]
  },
  {
    title: "Skills, Technologies & Tools",
    skills: true
  }  
]

export const Skills = [
	'devicon-python-plain-wordmark colored',
	'devicon-pycharm-plain-wordmark colored',
	'devicon-rails-plain-wordmark colored',
	'devicon-redis-plain-wordmark colored',
	'devicon-ruby-plain-wordmark colored',
	'devicon-django-plain colored',
	'devicon-react-original-wordmark colored',
	'devicon-amazonwebservices-plain-wordmark colored',
	'devicon-bootstrap-plain-wordmark colored',
	'devicon-git-plain-wordmark colored',
	'devicon-mysql-plain-wordmark colored',
	'devicon-postgresql-plain-wordmark colored',
	'devicon-ubuntu-plain-wordmark colored',
	'devicon-javascript-plain colored',
]
