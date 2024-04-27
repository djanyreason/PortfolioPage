import { useSelector } from 'react-redux';

import KeywordButton from './KeywordButton';

const KeywordButtonList = () => {
  const keywordList = useSelector(({ portfolio, filter }) =>
    portfolio.keywords.filter(
      (kword) => kword.toLowerCase().search(filter.text.toLowerCase()) >= 0
    )
  );

  if (keywordList.length > 10) return null;

  return (
    <div>
      {keywordList.map((kword) => (
        <KeywordButton key={kword} kword={kword} />
      ))}
    </div>
  );
};

export default KeywordButtonList;
