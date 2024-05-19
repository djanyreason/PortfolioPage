import { Box } from '@mui/material';

import HeaderLink from './HeaderLink';

const HeaderLinksLayout = () => {
  return (
    <Box>
      <HeaderLink
        url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
        label='LinkedIn'
      />
      <HeaderLink url='https://github.com/djanyreason' label='GitHub' />
    </Box>
  );
};

export default HeaderLinksLayout;
