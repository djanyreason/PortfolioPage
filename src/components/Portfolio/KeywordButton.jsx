import { useDispatch, useSelector } from 'react-redux';

import { selectKeyword } from '../../reducers/filterReducer';

const KeywordButton = ({ kword }) => {
  const dispatch = useDispatch();
  const exclusive = useSelector(({ filter }) => filter.exact);

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(selectKeyword(kword));
  };

  return (
    <button onClick={handleClick} disabled={exclusive}>
      {kword}
    </button>
  );
};

export default KeywordButton;
