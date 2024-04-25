/*
This project is set up to mimic the structure of the front-end of a Full
Stack React web application using axios for communications with the back-end.
However, there is no back-end API service anywhere supplying the data.

Instead, this file acts as if it were the service to communicate with the back
end. It has functions that mimic the functionality of an axios-based API
communication, but instead just imports data from another file and returns it
as if it were the data returned from an axios.get().
*/

import portfolioData from './data/portfolioData';

const getAll = async () => {
  return portfolioData;
};

export default { getAll };
