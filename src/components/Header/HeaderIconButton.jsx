import { IconButton } from '@mui/material';

const HeaderIconButton = ({ url, image }) => {
  return (
    <IconButton
      sx={{ color: '#3e5060' }}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {image}
    </IconButton>
  );
};

export default HeaderIconButton;
