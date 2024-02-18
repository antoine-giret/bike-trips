import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export default theme;
