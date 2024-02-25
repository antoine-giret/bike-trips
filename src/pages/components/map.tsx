import { Box, Text } from '@chakra-ui/react';
import { LngLatBounds, Map as MaplibreMap, NavigationControl } from 'maplibre-gl';
import React, { useEffect, useState } from 'react';

import { trips } from '../../fixtures/trips';

const mapId = 'trips-map';

function Map(): JSX.Element {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      const positions = trips.flatMap(
        ({
          simplifiedGeometry: {
            geometry: { coordinates },
          },
        }) => coordinates.flatMap(([lng, lat]) => ({ lat, lng })),
      );
      const bounds = positions.slice(1).reduce(
        (res, position) => {
          return res.extend(position);
        },
        new LngLatBounds(positions[0], positions[0]),
      );

      const map = new MaplibreMap({
        container: mapId,
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=86zpcoLHulCFmgXh2OLu',
        bounds,
        fitBoundsOptions: { padding: 50 },
        scrollZoom: false,
        pitchWithRotate: false,
      });

      map.addControl(new NavigationControl({ showZoom: true }));

      map.on('load', () => {
        map.addSource('trips', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: trips.map(({ simplifiedGeometry: { geometry }, color }) => ({
              type: 'Feature',
              geometry,
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
