import { Button } from '@mui/material';

const HeaderLinkButton = ({ label, url, image }) => {
  const HLBStyle = {
    textTransform: 'none',
    fontSize: '1.25rem',
    width: '160px',
    px: 0,
    mx: 0,
  };

  return (
    <Button
      variant='contained'
      endIcon={image}
      color='primary'
      size='large'
      sx={HLBStyle}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {label}
    </Button>
  );
};

export default HeaderLinkButton;
