import { Box, Stack, Avatar, Typography } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Logo from 'assets/cilo-logo-light.png';
import { Menu } from '.';

const Nav = (): JSX.Element => {
  return (
    <Box component='div' sx={{ width: '17.8%', minWidth: 230, maxWidth: 256, height: '100vh', borderRight: '1px solid #e5e5e5' }}>
      <Box
        component='img'
        sx={{
          width: 100,
          height: 25.82,
          margin: '43px 0 0 18px',
        }}
        alt='CILO digital custody service logo'
        src={Logo}
      />
      <Box sx={{ width: '100%', height: 134, padding: '43px 0 0 10px', borderBottom: '1px solid #e5e5e5' }}>
        <Avatar alt='user profile' src='https://mui.com/static/images/avatar/3.jpg' sx={{ marginLeft: '20px' }} />
        <Stack direction='row' justifyContent='space-between' sx={{ margin: '9px 0 0 20px' }}>
          <Typography component='h2' sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 18 }}>
            김민수
          </Typography>
          <PowerSettingsNewIcon sx={{ color: '#898888', marginRight: '17px' }} />
        </Stack>
      </Box>
      <Menu />
    </Box>
  );
};

export default Nav;
