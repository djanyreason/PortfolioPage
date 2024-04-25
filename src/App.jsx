import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initializePortfolio } from './reducers/projectReducer';

import Footer from './components/Footer';
import Header from './components/Header';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePortfolio());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Bio />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
