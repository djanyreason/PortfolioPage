import { Button } from '@mui/material';

const HeaderLinkButton = ({ label, url, image }) => {
  const HLBStyle = {
    textTransform: 'none',
    fontSize: '1.5rem',
    width: '10rem',
    px: 0,
    mx: 0,
  };

  return (
    <Button
      variant='contained'
      size='large'
      sx={HLBStyle}
      href={url}
      target='_blank'
      rel='noreferrer'
      endIcon={image}
      color='secondary'
    >
      {label}
    </Button>
  );
};

export default HeaderLinkButton;
