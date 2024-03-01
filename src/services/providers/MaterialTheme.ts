"use client"

import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});