import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

function NotFoundPage({}: PageProps): JSX.Element {
  return <>404 page not found</>;
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page non trouvée</title>;
