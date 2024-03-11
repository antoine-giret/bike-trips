import { Box, Card, CardBody, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';

import { Trip } from '../fixtures';

import { TripThemes } from './themes';

export function TripCard({
  trip: { key, coverImageDescription, title, strStartDate, stepsItems, themes, description },
  image,
}: {
  image: IGatsbyImageData | undefined;
  trip: Trip;
}): JSX.Element {
  return (
    <LinkBox
      _hover={{ backgroundColor: '#fafafa', img: { transform: 'scale(1.1)' } }}
      as={Card}
      direction={['column', 'column', 'row']}
      overflow="hidden"
      variant="outline"
    >
      <Box flexShrink={0} height={[300, 300, 'auto']} width={['100%', '100%', 200]}>
        {image && (
          <GatsbyImage
            alt={coverImageDescription}
            image={image}
            imgStyle={{ transition: 'all 0.3s' }}
            style={{ height: '100%' }}
          />
        )}
      </Box>
      <Box flexGrow={1}>
        <CardBody display="flex" flexDirection="column" gap={3} padding={4}>
          <Box display="flex" flexDirection="column">
            <Heading as="h2" fontSize="1.15rem" fontWeight={700}>
              <LinkOverlay as={Link} to={`/${key}`}>
                {title}
              </LinkOverlay>
            </Heading>
            <Text
              color="gray.700"
              fontSize="0.9rem"
              sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
            >
              {strStartDate}
            </Text>
            <Text color="gray.700" fontSize="0.9rem">
              {stepsItems.map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && <> &bull; </>}
                  {item}
                </Fragment>
              ))}
            </Text>
          </Box>
          <TripThemes themes={themes} />
          <Text>{description}</Text>
        </CardBody>
      </Box>
    </LinkBox>
  );
}
