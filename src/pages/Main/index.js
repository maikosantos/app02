import React, { Component } from 'react';
import api from '../../services/api';
import monent from 'moment';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/compareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = monent(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
      // console.log(response);
    } catch (err) {
      this.setState({ repositoryError: true });
      // console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
