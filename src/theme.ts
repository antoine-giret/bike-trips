import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react';

const { Avatar, Button, Card, Divider, List, Tag } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Avatar,
    Button,
    Card,
    Divider,
    List,
    Tag,
  },
});

export default theme;
