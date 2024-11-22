import { Grid2 } from '@mui/material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLink from './HeaderLink';

const WideLayout = () => {
  return (
    <Grid2 container spacing={2} direction={'row'}>
      <Grid2 size={4}>
        <Selfie />
      </Grid2>
      <Grid2
        container
        size={8}
        direction={'column'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        sx={{ pr: 1.5 }}
      >
        <Grid2>
          <Name variant={'h1'} />
        </Grid2>
        <Grid2>
          <HeaderLink
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            label='LinkedIn'
          />
        </Grid2>
        <Grid2>
          <HeaderLink url='https://github.com/djanyreason' label='GitHub' />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WideLayout;
