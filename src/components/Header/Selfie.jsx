import { Card, CardMedia } from '@mui/material';

import picture from '../../images/picture.jpg';

const Selfie = () => {
  return (
    <Card>
      <CardMedia component='img' sx={{ maxWidth: '100%' }} image={picture} />
    </Card>
  );
};

export default Selfie;
