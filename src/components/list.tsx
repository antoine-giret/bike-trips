import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { Trip, trips } from '../fixtures';

import { TripCard } from './card';

export function TripsList(): JSX.Element {
  const [initialized, setInitialized] = useState(false);
  const [sortedBy, sortBy] = useState<'date' | '-date'>('-date');
  const [sortedTrips, sortTrips] = useState<Trip[]>(getTrips());
  const { allFile } = useStaticQuery<Queries.HomeListQuery>(graphql`
    query HomeList {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) sortTrips(getTrips());
  }, [initialized, sortedBy]);

  function getTrips(): Trip[] {
    const _trips = [...trips];

    _trips.sort((a, b) => {
      if (sortedBy === 'date') return a.steps[0]?.date.getTime() - b.steps[0]?.date.getTime();
      else if (sortedBy === '-date') return b.steps[0]?.date.getTime() - a.steps[0]?.date.getTime();

      return 0;
    });

    return _trips;
  }

  return (
    <Box alignSelf="stretch" display="flex" flexDirection="column" gap={4}>
      <Box
        alignItems={['flex-start', 'flex-start', 'center']}
        display="flex"
        flexDirection={['column', 'column', 'row']}
        gap={[2, 2, 4]}
      >
        <Text color="gray.700">Trier par</Text>
        <ButtonGroup flexWrap="wrap" gap={2} size="sm" spacing={0}>
          <Button
            colorScheme="green"
            onClick={() => sortBy('-date')}
            variant={sortedBy === '-date' ? 'solid' : 'outline'}
          >
            Plus récent au plus ancien
          </Button>
          <Button
            colorScheme="green"
            onClick={() => sortBy('date')}
            variant={sortedBy === 'date' ? 'solid' : 'outline'}
          >
            Plus ancien au au plus récent
          </Button>
        </ButtonGroup>
      </Box>
      <Box alignSelf="stretch" display="flex" flexDirection="column" gap={4}>
        {sortedTrips?.map((trip) => {
          const { key, coverImage } = trip;
          const image = allFile.nodes.find(({ relativePath }) => relativePath === coverImage)
            ?.childImageSharp?.gatsbyImageData;

          return <TripCard image={image} key={key} trip={trip} />;
        })}
      </Box>
    </Box>
  );
}
