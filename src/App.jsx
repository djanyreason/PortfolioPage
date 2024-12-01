import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '@mui/material';

import { initializePortfolio } from './reducers/projectReducer';
import { setDisplay } from './reducers/displayReducer';

import Header from './components/Header';
import PersonalDetail from './components/PersonalDetail';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePortfolio());
    dispatch(setDisplay(window.innerWidth));
    window.onresize = () => {
      dispatch(setDisplay(window.innerWidth));
    };
  }, [dispatch]);

  return (
    <Container sx={{ px: 3 }} maxWidth='lg'>
      <Header />
      <PersonalDetail />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default App;
