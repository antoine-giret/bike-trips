import { Box, Text } from '@chakra-ui/react';
import { Map as MaplibreMap, NavigationControl } from 'maplibre-gl';
import React, { useEffect, useState } from 'react';

import { Trip } from '../../fixtures';

const mapId = 'trip-map';

function TripMap({ trip: { color, bounds, title, steps } }: { trip: Trip }): JSX.Element {
  const [initialized, setInitialized] = useState(false);
  const isDisplayingInBrowser =
    typeof navigator !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);

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
        dragPan: isDisplayingInBrowser,
        pitchWithRotate: false,
      });

      map.addControl(new NavigationControl({ showZoom: true }));

      map.on('load', () => {
        map.addSource('trip-steps', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:
              steps.length > 0
                ? steps.reduce<GeoJSON.Feature<GeoJSON.Point>[]>(
                    (res, { simplifiedGeometry }) => {
                      res.push({
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates:
                            simplifiedGeometry.coordinates[
                              simplifiedGeometry.coordinates.length - 1
                            ],
                        },
                        properties: { color },
                      });

                      return res;
                    },
                    [
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: steps[0].simplifiedGeometry.coordinates[0],
                        },
                        properties: { color },
                      },
                    ],
                  )
                : [],
          },
        });

        map.addSource('trip', {
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
            id: 'trip-steps',
            type: 'circle',
            source: 'trip-steps',
            paint: {
              'circle-color': ['get', 'color'],
              'circle-radius': 5,
              'circle-stroke-width': 2,
              'circle-stroke-color': '#fff',
            },
          },
          'Ocean labels',
        );

        map.addLayer(
          {
            id: 'trip',
            type: 'line',
            source: 'trip',
            paint: {
              'line-color': ['get', 'color'],
              'line-width': 5,
            },
          },
          'trip-steps',
        );

        map.addLayer(
          {
            id: 'trip-border',
            type: 'line',
            source: 'trip',
            paint: {
              'line-color': '#fff',
              'line-width': 9,
            },
          },
          'trip',
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
