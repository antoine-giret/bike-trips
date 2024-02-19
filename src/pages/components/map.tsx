import { Box, Text } from '@chakra-ui/react';
import { Map as MaplibreMap, NavigationControl } from 'maplibre-gl';
import React, { useEffect, useState } from 'react';

const mapId = 'trips-map';

function Map(): JSX.Element {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      const map = new MaplibreMap({
        container: mapId,
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=86zpcoLHulCFmgXh2OLu',
        center: [0, 0],
        zoom: 1,
        scrollZoom: false,
        pitchWithRotate: false,
      });

      map.addControl(new NavigationControl({ showZoom: true }));
    }
  }, [initialized]);

  return (
    <Box as="figure" width="100%">
      <Box aspectRatio={1.5} bgColor="#d2e7ea" id={mapId} width="100%" />
      <Box as="figcaption" paddingY={1}>
        <Text color="gray.600" fontSize="0.9rem">
          Carte de nos voyages à vélo
        </Text>
      </Box>
    </Box>
  );
}

export default Map;
