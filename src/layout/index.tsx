import { Box, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

function Layout({ element }: { element: ReactElement }): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ minHeight: '100vh', '&': { minHeight: '100dvh' } }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        flexShrink={0}
        gap={2}
        minHeight="56px"
        paddingX={8}
        paddingY={3}
      >
        <Text fontSize="lg">Nos voyages à vélo</Text>
      </Box>
      <Box flexGrow={1} paddingX={4} paddingY={8}>
        <Box marginX="auto" maxWidth="100%" width="1000px">
          {element}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
