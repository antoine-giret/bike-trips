import { type TTrip } from './trip';

export const lav22Trip: TTrip = {
  key: 'lav22',
  title: 'Loire à Vélo 2022',
  simplifiedGeometry: {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [0.68957, 47.38846],
        [0.29859, 47.25216],
        [-0.07936, 47.25972],
        [-0.55325, 47.47069],
        [-1.18879, 47.37648],
        [-1.55302, 47.21811],
      ],
    },
    properties: { color: '#174589' },
  },
};
