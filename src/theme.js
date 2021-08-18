import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: {
      50: '#f6f4ea',
      100: '#e1ddd0',
      200: '#cdc7b4',
      300: '#b9b095',
      400: '#a59977',
      500: '#8c805e',
      600: '#6d6349',
      700: '#4d4733',
      800: '#2f2b1e',
      900: '#120e03',
    },
    brand: 
    {
      50: '#f2f9e5',
      100: '#deeac4',
      200: '#c9daa3',
      300: '#b4cc80',
      400: '#9ebd5c',
      500: '#85a443',
      600: '#677f33',
      700: '#4a5b24',
      800: '#2b3713',
      900: '#0d1300',
    }
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;