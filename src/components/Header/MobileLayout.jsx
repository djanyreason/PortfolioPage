import { Grid2 } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderIconButton from './HeaderIconButton';

const MobileLayout = () => {
  return (
    <Grid2 container spacing={1.5} direction={'column'}>
      <Grid2 size={12}>
        <Name variant={'h2'} />
      </Grid2>
      <Grid2 size={12}>
        <Selfie />
      </Grid2>
      <Grid2
        container
        size={12}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Grid2>
          <HeaderIconButton
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            image={<LinkedIn sx={{ fontSize: '4rem' }} />}
          />
        </Grid2>
        <Grid2>
          <HeaderIconButton
            url='https://github.com/djanyreason'
            image={<GitHub sx={{ fontSize: '3.5rem' }} />}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default MobileLayout;
