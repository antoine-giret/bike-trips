import { Box, Tag } from '@chakra-ui/react';
import React from 'react';

import { TTripTheme, tripThemesMap } from '../../fixtures';

function TripThemes({ themes }: { themes: TTripTheme[] }): JSX.Element {
  if (themes.length === 0) return <></>;

  return (
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
  );
}

export default TripThemes;
