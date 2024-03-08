/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import path from 'path';

import { CreatePagesArgs } from 'gatsby';

import { trips } from './src/fixtures/trips';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data } = await graphql<Queries.CreatePagesQuery>(`
    query CreatePages {
      allFile {
        nodes {
          id
          relativePath
        }
      }
    }
  `);

  trips.forEach(({ key, coverImage, steps }, tripIndex) => {
    const stepPhotosPaths = steps.flatMap(({ photos }) => photos.flatMap(({ path }) => path));
    const files =
      data?.allFile.nodes.filter(
        ({ relativePath }) => relativePath === coverImage || stepPhotosPaths.includes(relativePath),
      ) || [];

    createPage({
      path: `/${key}`,
      component: path.resolve(`src/pages/trip/index.tsx`),
      context: {
        tripIndex,
        queryImages: files.length > 0,
        imageIds: files.map(({ id }) => id),
      },
    });
  });
}
