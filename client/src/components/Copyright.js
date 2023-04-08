import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
    <Typography
      style={{ fontFamily: 'Gummy' }}
      variant="h6"
      color="black"
      align="center"
      {...props}
    >
      {' © '}
      <Link
        underline="none"
        style={{ color: 'black', fontFamily: 'Gummy' }}
        href="/"
      >
        BRANE_Enterprises
      </Link>{' '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}
