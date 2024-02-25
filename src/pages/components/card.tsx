import { Box, Card, CardBody, Heading, Tag, Text } from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { type TTrip, tripThemesMap } from '../../fixtures/trips/trip';

function TripCard({
  trip: { title, steps, themes, description },
  image,
}: {
  image: IGatsbyImageData | undefined;
  trip: TTrip;
}): JSX.Element {
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
            {steps.length > 0 && (
              <Text
                color="gray.500"
                fontSize="0.9rem"
                sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
              >
                {new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(
                  steps[0].date,
                )}{' '}
                &bull; {steps.length > 1 ? `${steps.length} étapes` : '1 étape'}
              </Text>
            )}
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
