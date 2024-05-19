import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '@mui/material';

import { initializePortfolio } from './reducers/projectReducer';
import { setDisplay } from './reducers/displayReducer';

import Footer from './components/Footer';
import Header from './components/Header';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePortfolio());
    dispatch(setDisplay(window.innerWidth));
    window.onresize = () => {
      console.log(window.innerWidth);
      dispatch(setDisplay(window.innerWidth));
    };
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Bio />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default App;
