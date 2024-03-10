import { Box, Text } from '@chakra-ui/react';
import { Map as MaplibreMap, NavigationControl } from 'maplibre-gl';
import React, { useEffect, useState } from 'react';

import { Trip } from '../../fixtures';

const mapId = 'trip-map';

function TripMap({ trip: { color, bounds, title, steps } }: { trip: Trip }): JSX.Element {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      const map = new MaplibreMap({
        container: mapId,
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=86zpcoLHulCFmgXh2OLu',
        bounds,
        fitBoundsOptions: { padding: 50 },
        scrollZoom: false,
        dragPan: false,
        pitchWithRotate: false,
      });

      map.addControl(new NavigationControl({ showZoom: true }));

      map.on('load', () => {
        map.addSource('trips', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: steps.map(({ simplifiedGeometry }) => ({
              type: 'Feature',
              geometry: simplifiedGeometry,
              properties: { color },
            })),
          },
        });

        map.addLayer(
          {
            id: 'trips',
            type: 'line',
            source: 'trips',
            paint: {
              'line-color': ['get', 'color'],
              'line-width': 5,
            },
          },
          'Ocean labels',
        );

        map.addLayer(
          {
            id: 'trips-border',
            type: 'line',
            source: 'trips',
            paint: {
              'line-color': '#fff',
              'line-width': 9,
            },
          },
          'trips',
        );
      });
    }
  }, [initialized]);

  return (
    <Box as="figure" width="100%">
      <Box aspectRatio={2} bgColor="#d2e7ea" id={mapId} width="100%" />
      <Box as="figcaption" paddingY={1}>
        <Text color="gray.600" fontSize="0.9rem">
          Itinéraire de l'étape {title}
        </Text>
      </Box>
    </Box>
  );
}

export default TripMap;
