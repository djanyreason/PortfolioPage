import { Grid } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderIconButton from './HeaderIconButton';

const MobileLayout = () => {
  return (
    <Grid container spacing={1.5} direction={'column'}>
      <Grid item xs={12}>
        <Name variant={'h2'} />
      </Grid>
      <Grid item xs={12}>
        <Selfie />
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Grid item>
          <HeaderIconButton
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            image={<LinkedIn sx={{ fontSize: '4rem' }} />}
          />
        </Grid>
        <Grid item>
          <HeaderIconButton
            url='https://github.com/djanyreason'
            image={<GitHub sx={{ fontSize: '3.5rem' }} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileLayout;
