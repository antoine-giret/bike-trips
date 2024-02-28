import { Box, Card, CardBody, Heading, Tag, Text } from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';

import { Trip, tripThemesMap } from '../../fixtures/trips/trip';

function TripCard({
  trip: { title, steps, themes, isLoop, from, to, description },
  image,
}: {
  image: IGatsbyImageData | undefined;
  trip: Trip;
}): JSX.Element {
  const stepsItems: string[] = isLoop ? [`${from} <> ${from}`] : [`${from} > ${to}`];
  if (steps.length > 0) {
    stepsItems.push(
      steps.length > 1 ? `${steps.length} étapes` : '1 étape',
      `${Math.round(
        steps.reduce((res, { distance }) => res + distance, 0) / steps.length,
      )} kms / jour en moyenne`,
    );
  }

  return (
    <Card direction={['column', 'column', 'row']} overflow="hidden" variant="outline">
      <Box flexShrink={0} height={[300, 300, 'auto']} width={['100%', '100%', 200]}>
        {image && <GatsbyImage alt={title} image={image} style={{ height: '100%' }} />}
      </Box>
      <Box flexGrow={1}>
        <CardBody display="flex" flexDirection="column" gap={3} padding={4}>
          <Box display="flex" flexDirection="column">
            <Heading as="h2" fontSize="1.15rem" fontWeight={700}>
              {title}
            </Heading>
            <Text
              color="gray.500"
              fontSize="0.9rem"
              sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
            >
              {new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(
                steps[0].date,
              )}
            </Text>
            <Text color="gray.500" fontSize="0.9rem">
              {stepsItems.map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && <> &bull; </>}
                  {item}
                </Fragment>
              ))}
            </Text>
          </Box>
          {themes.length > 0 && (
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
              {themes.map((theme) => {
                const { color, label } = tripThemesMap[theme];
                return (
                  <Tag color={color} key={theme}>
                    {label}
                  </Tag>
                );
              })}
            </Box>
          )}
          <Text>{description}</Text>
        </CardBody>
      </Box>
    </Card>
  );
}

export default TripCard;
