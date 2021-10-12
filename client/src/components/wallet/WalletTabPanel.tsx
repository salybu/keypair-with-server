import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface IWalletTabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ICreateData {
  type: string;
  date: string;
  address: string;
  amount: string;
  price: string;
  status: string;
}

const createData = (type: string, date: string, address: string, amount: string, price: string, status: string) => {
  return { type, date, address, amount, price, status };
};

const rows = [
  createData('출금', '2021-10-01  15:16', '0xA3Ea799656 ... 7996907B94', '2.071348850123 ETH', '₩ 8,170,000', '완료'),
  createData('출금', '2021-09-30  12:11', '0xB892138D32 ... 99FF3C5A32', '1.028731478998 ETH', '₩ 4,057,615', '완료'),
  createData('입금', '2021-09-27  14:05', '0x69D9186c91 ... 3AE1d21422', '4.026941204356 ETH', '₩ 16,067,495', '완료'),
  createData('입금', '2021-09-23  11:18', '0x8a6f59Aa16 ... 3e36172dD2', '0.313267985175 ETH', '₩ 1,249,939', '완료'),
  createData('출금', '2021-10-01  15:16', '0xA3Ea799656 ... 7996907B94', '2.071348850123 ETH', '₩ 8,170,000', '완료'),
  createData('출금', '2021-09-30  12:11', '0xB892138D32 ... 99FF3C5A32', '1.028731478998 ETH', '₩ 4,057,615', '완료'),
  createData('입금', '2021-09-27  14:05', '0x69D9186c91 ... 3AE1d21422', '4.026941204356 ETH', '₩ 16,067,495', '완료'),
  createData('입금', '2021-09-23  11:18', '0x8a6f59Aa16 ... 3e36172dD2', '0.313267985175 ETH', '₩ 1,249,939', '완료'),
  createData('출금', '2021-10-01  15:16', '0xA3Ea799656 ... 7996907B94', '2.071348850123 ETH', '₩ 8,170,000', '완료'),
  createData('출금', '2021-09-30  12:11', '0xB892138D32 ... 99FF3C5A32', '1.028731478998 ETH', '₩ 4,057,615', '완료'),
];

const WalletTabPanel = ({ children, value, index, ...other }: IWalletTabPanel): JSX.Element => {
  return (
    <div role='tabpanel' hidden={value !== index} id={`tab-panel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ width: '95.6%', minWidth: 1132, height: 628, margin: '20px 0 30px 0', border: '1px solid #e5e5e5', padding: '18px 38px 0 39px' }}>
          {/* <Typography>{children}</Typograp0hy> */}
          <TableContainer component={Paper}>
            <Table aria-label='transaction table'>
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell align='left'>거래일시</TableCell>
                  <TableCell align='left'>주소</TableCell>
                  <TableCell align='left'>수량</TableCell>
                  <TableCell align='left'>금액</TableCell>
                  <TableCell align='left'>상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
};

export default WalletTabPanel;
