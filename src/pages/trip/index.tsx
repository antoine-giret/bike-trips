import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { Fragment, useState } from 'react';

import { trips } from '../../fixtures';
import PageBreadcrumb from '../../layout/breadcrumb';
import TripThemes from '../components/themes';

import TripMap from './map';
import Step from './step';

type TTripPageContext = { tripIndex: number };

function TripPage({
  data: { allFile },
  pageContext: { tripIndex },
}: PageProps<Queries.TripQuery, TTripPageContext>): JSX.Element {
  const [trip] = useState(trips[tripIndex]);
  const [coverImage] = useState(
    allFile?.nodes.find(({ relativePath }) => relativePath === trip.coverImage)?.childImageSharp
      ?.gatsbyImageData,
  );

  const {
    key,
    coverImageDescription,
    title,
    strStartDate,
    stepsItems,
    themes,
    description,
    steps,
  } = trip;

  return (
    <>
      <PageBreadcrumb items={[{ key: key, label: title, isCurrentPage: true }]} />
      <Box display="flex" flexDirection="column" gap={8}>
        <Heading as="h1" color="green.500" fontSize="1.75rem" fontWeight={700}>
          {title}
        </Heading>
        <Box as="figure" width="100%">
          <Box aspectRatio={2} borderRadius={16} overflow="hidden" width="100%">
            {coverImage && (
              <GatsbyImage alt={title} image={coverImage} style={{ height: '100%' }} />
            )}
          </Box>
          <Box as="figcaption" paddingY={1}>
            <Text color="gray.600" fontSize="0.9rem">
              {coverImageDescription}
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={4}>
          <Heading as="h2" color="green.500" fontSize="1.5rem" fontWeight={700} id="resume">
            Résumé
          </Heading>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" flexDirection="column">
              <Text color="gray.500" sx={{ '&:first-letter': { textTransform: 'uppercase' } }}>
                {strStartDate}
              </Text>
              <Text color="gray.500">
                {stepsItems.map((item, index) => (
                  <Fragment key={index}>
                    {index > 0 && <> &bull; </>}
                    {item}
                  </Fragment>
                ))}
              </Text>
            </Box>
            <TripThemes themes={themes} />
            <Box maxWidth="80ch">
              <Text>{description}</Text>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={8}>
          <Heading as="h2" color="green.500" fontSize="1.5rem" fontWeight={700} id="itineraire">
            Itinéraire
          </Heading>
          <TripMap trip={trip} />
        </Box>
        <Box display="flex" flexDirection="column" gap={8}>
          <Heading as="h2" color="green.500" fontSize="1.5rem" fontWeight={700} id="etapes">
            Étapes
          </Heading>
          {steps.map((step, index) => (
            <Fragment key={index}>
              {index > 0 && <Divider />}
              <Step files={allFile?.nodes || []} step={step} stepIndex={index + 1} />
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}

export function Head({ pageContext: { tripIndex } }: PageProps<unknown, TTripPageContext>) {
  const trip = trips[tripIndex];
  const { title, description } = trip;

  return (
    <>
      <title>{title} | Nos voyages à vélo</title>
      <meta content={description} name="description" />
    </>
  );
}

export const query = graphql`
  fragment TripStepFile on File {
    relativePath
    childImageSharp {
      gatsbyImageData(width: 800, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
    }
  }
  query Trip($queryImages: Boolean!, $imageIds: [String]) {
    allFile(filter: { id: { in: $imageIds } }) @include(if: $queryImages) {
      nodes {
        ...TripStepFile
      }
    }
  }
`;

export default TripPage;
