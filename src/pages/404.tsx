import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { type HeadFC, Link, type PageProps } from 'gatsby';
import React from 'react';

function NotFoundPage({}: PageProps): JSX.Element {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      flexGrow={1}
      gap={8}
      justifyContent="center"
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Heading fontSize="3rem" fontWeight={700}>
          404
        </Heading>
        <Text align="center">Voyage pas encore réalisé</Text>
      </Box>
      <Button as={Link} colorScheme="green" to="/" variant="outline">
        Revenir à l'accueil
      </Button>
    </Box>
  );
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 voyage pas trouvé</title>;
