import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import { TripStep } from '../../fixtures';

import Cons from './cons';
import Pros from './pros';

function Step({
  stepIndex,
  step: { title, distance, photos, pros, cons },
  files,
}: {
  files: readonly Queries.TripStepFileFragment[];
  step: TripStep;
  stepIndex: number;
}): JSX.Element {
  const [images] = useState(
    photos.reduce<Array<{ description: string; image: IGatsbyImageData }>>(
      (res, { path, description }) => {
        const file = files.find(({ relativePath }) => relativePath === path);
        if (file?.childImageSharp?.gatsbyImageData) {
          res.push({ image: file.childImageSharp.gatsbyImageData, description });
        }

        return res;
      },
      [],
    ),
  );

  return (
    <Box display="flex" flexDirection="column" gap={6}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Box alignItems="center" display="flex" flexDirection="row" gap={2}>
          <Avatar bgColor="green.500" name={`${stepIndex}`} size="xs" />
          <Heading as="h3" color="green.500" fontSize="1.15rem" fontWeight={700}>
            {title}
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column" gap={4} paddingLeft="calc(24px + 0.5rem)">
          <Text color="gray.700" fontSize="0.9rem">
            {distance} kms
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={6}
        paddingLeft={[0, 0, 'calc(24px + 0.5rem)']}
      >
        {images.length > 0 && (
          <Box display="flex" flexDirection="column" gap={2}>
            <Heading as="h4" color="gray.700" fontSize="1rem" fontWeight={700}>
              Photos
            </Heading>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
              {images.map(({ image, description }, index) => (
                <Box
                  aspectRatio={4 / 3}
                  borderRadius={16}
                  key={index}
                  overflow="hidden"
                  width={['100%', 'calc((100% - 0.5rem) / 2)', 'calc((100% - 1.5rem) / 4)']}
                >
                  <GatsbyImage
                    alt={description}
                    image={image}
                    style={{ height: '100%', width: '100%' }}
                    title={description}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
        <Pros items={pros} />
        <Cons items={cons} />
      </Box>
    </Box>
  );
}

export default Step;
