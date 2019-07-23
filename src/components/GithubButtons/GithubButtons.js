import React from 'react';
import GitHubButton from 'react-github-btn'

const GithubButtons = () => {
  return (
    <div>
      <GitHubButton
        href="https://github.com/asadshahjahan/software-engineer-website"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star asadshahjahan/software-engineer-website on GitHub">
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/asadshahjahan/software-engineer-website/fork"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork asadshahjahan/software-engineer-website on GitHub">
        Fork
      </GitHubButton>
      <GitHubButton
        href="https://github.com/asadshahjahan/software-engineer-website/subscription"
        data-icon="octicon-eye"
        data-size="large"
        data-show-count="true"
        aria-label="Watch asadshahjahan/software-engineer-website on GitHub">
        Watch
      </GitHubButton>
    </div>
  )
}

export default GithubButtons;
