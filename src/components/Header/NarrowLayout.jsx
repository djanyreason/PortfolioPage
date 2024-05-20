import { Grid } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLinkButton from './HeaderLinkButton';

const NarrowLayout = () => {
  return (
    <Grid container spacing={1.5} direction={'row'}>
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
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Grid item>
          <HeaderLinkButton
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            label='LinkedIn'
            image={<LinkedIn fontSize='large' />}
          />
        </Grid>
        <Grid item>
          <HeaderLinkButton
            url='https://github.com/djanyreason'
            label='GitHub'
            image={<GitHub fontSize='large' />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NarrowLayout;
