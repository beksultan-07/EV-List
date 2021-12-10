import React from 'react';
import './App.css';
import { Container } from './components/FarmList/simple_styles';
import List from './components/FarmList/List';



const App:React.FC = () => {
  return (
    <Container>
      <List/>
    </Container>
  );
}

export default App;
