import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repositoty => (
      <Repository key={repositoty.id}>
        <header>
          <img src={repositoty.owner.avatar_url} alt={repositoty.owner.login} />
          <strong>{repositoty.owner.name}</strong>
          <small>{repositoty.owner.login}</small>
        </header>

        <ul>
          <li>
            {repositoty.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repositoty.forks_count} <small>forks</small>
          </li>
          <li>
            {repositoty.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repositoty.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    pushed_at: PropTypes.string,
  })).isRequired,
};

export default CompareList;
