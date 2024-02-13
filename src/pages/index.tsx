import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

function IndexPage({}: PageProps): JSX.Element {
  return <>Hello World</>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Voyages à vélo</title>;
