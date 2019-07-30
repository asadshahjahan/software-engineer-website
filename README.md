# Software Engineer Website (React)
Software Engineer Website SPA built with react.
## Upcoming features
- Projects showcase
- Portfolio with interactive icons for tools that are used in the project
- Show more if there are more then `x` entries
- Client/Customer/Manager/Peer Feedbacks
- Achievements
## Installation Guide
- Click on fork and star.
- Follow this [link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) for downloading `nodejs` and `npm`.
- `git clone https://github.com/asadshahjahan/software-engineer-website.git`
- `cd software-engineer-website`
- `npm install`
- `npm start`
## Altering repo according to your data
### Project Structure
```
public/
src/
  components/
  data/
    information.js
  static/
    profile_picture.jpg
```
### Steps to update code
- Get a picture `profile_picture.jpg` and copy it to `src/static/` folder.
- Open `src/data/information.js` in any editor
- Find a code with `export const Introduction`
- Add `name`, `email`, `website`.
- Now, find `social_icons` and update links of your Github, Facebook or StackOverflow accounts.
- Now, find `export const Skills` and add your skills using reference of css classes from `https://konpa.github.io/devicon/`.
- Now, update `Whats New`, `About`, `Experience` and `Education`.

## Hall of Fame
I have used ReactJS(create-react-app) for making this interactive webpage. Other then that, I have used following packages:
- https://konpa.github.io/devicon/
- https://github.com/FortAwesome/Font-Awesome
- https://github.com/reactstrap/reactstrap
- https://github.com/ntkme/react-github-btn
- https://github.com/twbs/bootstrap
