import { Box, Icon, Link, Text } from '@chakra-ui/react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';

function Layout({ element }: WrapPageElementBrowserArgs): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        minHeight: '100vh',
        '&': { minHeight: '100dvh' },
        overflowX: 'hidden',
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        flexGrow={1}
        gap={8}
        marginX="auto"
        maxWidth="calc(100% - 4rem)"
        paddingY={8}
        width="800px"
      >
        {element}
      </Box>
      <Box
        alignItems="center"
        bgColor="gray.800"
        color="#fff"
        display="flex"
        fontSize="0.9rem"
        gap={3}
        justifyContent="center"
        padding={3}
        width="100%"
      >
        <Text>&copy; Antoine Giret 2024</Text>
        <Text>|</Text>
        <Text>
          Créé avec{' '}
          <Link color="green.500" href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </Link>
        </Text>
        <Text>|</Text>
        <Link
          height="16px"
          href="https://github.com/antoine-giret/bike-trips"
          target="_blank"
          title="Github"
        >
          <Icon as={IoLogoGithub} boxSize={4} />
        </Link>
      </Box>
    </Box>
  );
}

export default Layout;
