import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate, reset } from '../../reducers/filterReducer';

import KeywordButtonList from './KeywordButtonList';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterText = useSelector(({ filter }) => filter.text);

  const handleFilterInput = (event) => {
    event.preventDefault();

    dispatch(filterUpdate(event.target.value));
  };

  const resetFilter = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  const filterStyle = {
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={filterStyle}>
      <div>
        Filter by Keyword:{' '}
        <input
          name='keywordfilter'
          value={filterText}
          onChange={handleFilterInput}
        />
      </div>
      <KeywordButtonList />
      <div>
        <button onClick={resetFilter} disabled={false}>
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
