import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

function NotFoundPage(_: PageProps): JSX.Element {
  return <>404 page not found</>;
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page non trouvée</title>;
