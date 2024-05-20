import { IconButton } from '@mui/material';

const HeaderIconButton = ({ url, image }) => {
  return (
    <IconButton color='primary' href={url} target='_blank' rel='noreferrer'>
      {image}
    </IconButton>
  );
};

export default HeaderIconButton;
