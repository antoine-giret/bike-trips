import { Box, Text } from '@chakra-ui/react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';

function Layout({ element }: WrapPageElementBrowserArgs): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        minHeight: 'calc(100vh - 4rem)',
        '&': { minHeight: 'calc(100dvh - 4rem)' },
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
        display="flex"
        justifyContent="center"
        padding={3}
        width="100%"
      >
        <Text color="#fff" fontSize="0.9rem">
          &copy; Antoine Giret 2024
        </Text>
      </Box>
    </Box>
  );
}

export default Layout;
