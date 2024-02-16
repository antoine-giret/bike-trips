import { Heading } from '@chakra-ui/react';
import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

function IndexPage({}: PageProps): JSX.Element {
  return (
    <Heading as="h1" fontSize="1.5rem" fontWeight={700} sx={{ textAlign: 'center' }}>
      Découvrez nos voyages à vélo
    </Heading>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Voyages à vélo</title>;
