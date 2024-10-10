import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';

import { useGetGenreAndCountriesQuery } from '../../../services/kinopoiskApi';

export default function SelectMovies() {
  const { data, error, isLoading } = useGetGenreAndCountriesQuery();
  console.log(data);
  return (
    <Stack
      mt={2}
      mb={2}
      sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select label="Age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select label="Age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select label="Age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select label="Age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <Button variant="outlined" startIcon={<CloseIcon />}>
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
}
