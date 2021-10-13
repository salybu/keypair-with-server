import { Container, Box, Button, Typography, TextField, FormControlLabel, Checkbox, Stack } from '@mui/material';
import Logo from 'assets/cilo-logo-light.png';
import { useLogin } from 'components/login';

const Login = (): JSX.Element => {
  const { values, handleChange, handleLogin } = useLogin();

  return (
    <Container fixed sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <Box
        sx={{
          width: 456,
          height: 524,
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          border: '1px solid #e5e5e5',
          boxShadow: '0px 0px 14px rgba(53, 64, 82, 0.05)',
          padding: '0 40px',
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          sx={{
            width: 172,
            height: 44.41,
            margin: '62px 0 41.59px 0',
          }}
          alt='CILO digital custody service logo'
          src={Logo}
        />
        <Typography component='h1' sx={{ fontWeight: 600, fontSize: 20, lineHeight: '24px', marginBottom: '8px' }}>
          사일로 디지털 자산 수탁 서비스입니다.
        </Typography>
        <Typography component='h2' sx={{ fontWeight: 'normal', fontSize: 14, lineHeight: '21px', marginBottom: '20px' }}>
          아이디와 비밀번호를 입력해 주세요.
        </Typography>
        <TextField label='아이디' variant='standard' sx={{ width: '100%', marginBottom: '10px' }} onChange={handleChange('userName')} value={values.userName} />
        <TextField label='비밀번호' variant='standard' sx={{ width: '100%' }} onChange={handleChange('password')} value={values.password} type='password' />
        <FormControlLabel
          control={<Checkbox />}
          label='비밀번호 기억하기'
          sx={{ '& .MuiTypography-root': { fontSize: 14 }, display: 'block', textAlign: 'left', padding: '10px 0 15px 0' }}
        />
        <Button
          variant='contained'
          disableElevation
          sx={{ width: '100%', backgroundColor: '#00D67E', borderRadius: '4px', letterSpacing: '0.3px', '& :hover': { backgroundColor: '#00d67e' } }}
          onClick={handleLogin}
        >
          로그인
        </Button>
        <Stack direction='row' justifyContent='space-between' sx={{ marginTop: '22px' }}>
          <Button variant='text' sx={{ color: '#00D67E', fontWeight: 600, lineHeight: '24px', padding: 0 }}>
            비밀번호 찾기
          </Button>
          <Button variant='text' sx={{ color: '#00D67E', fontWeight: 600, lineHeight: '24px', padding: 0 }}>
            회원가입
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
