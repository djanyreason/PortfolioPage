import { Grid } from '@mui/material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLinksLayout from './HeaderLinksLayout';

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
        sx={{ pr: 2 }}
      >
        <Grid item>
          <Name variant={'h1'} />
        </Grid>
        <Grid item>
          <HeaderLinksLayout />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WideLayout;
