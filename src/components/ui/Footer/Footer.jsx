import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack component="footer" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography>
        &copy; {new Date().getFullYear()} &laquo;Divan&raquo; 18+ <br />
        Данный сайт создан исключительно в обучающих целях.
        <br />
        Все права принадлежат правооблодателям.
      </Typography>
      <Typography>Divan</Typography>
    </Stack>
  );
}
