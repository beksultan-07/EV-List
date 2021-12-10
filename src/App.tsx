import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Container } from './components/simple_styles';
import List from './components/List';



const App:React.FC = () => {
  return (
    <Container>
      <List/>
    </Container>
  );
}

export default App;
