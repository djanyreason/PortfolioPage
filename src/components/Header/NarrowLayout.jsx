import { Grid2 } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

import Selfie from './Selfie';
import Name from './Name';
import HeaderLinkButton from './HeaderLinkButton';

const NarrowLayout = () => {
  return (
    <Grid2 container spacing={1.5} direction={'row'}>
      <Grid2 size={12}>
        <Name variant={'h2'} />
      </Grid2>
      <Grid2 size={6}>
        <Selfie />
      </Grid2>
      <Grid2
        container
        size={6}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Grid2>
          <HeaderLinkButton
            url='https://www.linkedin.com/in/jay-anderson-052b5b25/'
            label='LinkedIn'
            image={
              <LinkedIn
                style={{ fontSize: '2.0rem', paddingBottom: '0.25rem' }}
              />
            }
          />
        </Grid2>
        <Grid2>
          <HeaderLinkButton
            url='https://github.com/djanyreason'
            label='GitHub'
            image={
              <GitHub
                style={{ fontSize: '1.8rem', paddingBottom: '0.25rem' }}
              />
            }
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NarrowLayout;
