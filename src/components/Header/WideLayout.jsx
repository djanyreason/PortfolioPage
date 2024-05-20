import { Grid } from '@mui/material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLink from './HeaderLink';

const WideLayout = () => {
  return (
    <Grid container spacing={2} direction={'row'}>
      <Grid item xs={4}>
        <Selfie />
      </Grid>
      <Grid
        container
        item
        xs={8}
        direction={'column'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        sx={{ pr: 1.5 }}
      >
        <Grid item>
          <Name variant={'h1'} />
        </Grid>
        <Grid item>
          <HeaderLink
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            label='LinkedIn'
          />
        </Grid>
        <Grid item>
          <HeaderLink url='https://github.com/djanyreason' label='GitHub' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WideLayout;
