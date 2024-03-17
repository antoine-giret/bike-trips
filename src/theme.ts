import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react';

const { Avatar, Button, Card, CloseButton, Divider, Modal, List, Tag } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Avatar,
    Button,
    Card,
    CloseButton,
    Divider,
    Modal,
    List,
    Tag,
  },
});

export default theme;
