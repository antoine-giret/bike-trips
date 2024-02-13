import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

function IndexPage(_: PageProps): JSX.Element {
  return <>Hello World</>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Voyages à vélo</title>;
