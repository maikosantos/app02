import React from 'react'
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:60px;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  input{
    flex: 1;
    height: 55PX;
    padding: 0 20PX;
    background: #FFF;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button{
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:houver{
      background: #52D89f;
    }
  }
`;

const Main = () => (
  <container>
    <img src="{logo}" alt="Github Compare"/>

    <form>
      <imput type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </form>
  </container>
);

export default Main;
