import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react';

const { Button, Card, Tag } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    Tag,
  },
});

export default theme;
