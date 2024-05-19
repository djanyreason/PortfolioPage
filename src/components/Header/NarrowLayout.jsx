import { Grid } from '@mui/material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLink from './HeaderLink';

const NarrowLayout = () => {
  return (
    <Grid container spacing={2} direction={'row'}>
      <Grid item xs={12}>
        <Name variant={'h2'} />
      </Grid>
      <Grid item xs={6}>
        <Selfie />
      </Grid>
      <Grid
        container
        item
        xs={6}
        direction={'column'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        sx={{ pr: 2 }}
      >
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

export default NarrowLayout;
