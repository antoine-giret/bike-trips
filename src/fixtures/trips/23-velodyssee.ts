import { type TTrip } from './trip';

export const velodyssee23Trip: TTrip = {
  key: 'velodyssee23',
  title: 'La Vélodyssée',
  coverImage: 'trips/23-velodyssee/cover.jpg',
  color: '#f59c00',
  themes: ['nature', 'littoral'],
  description:
    "Lorsque nous partons en Vendée, nos balades à vélo empruntent souvent une portion de la Vélodyssée. C'est donc tout naturellement que nous avons eu envie de faire un voyage en la suivant plus longuement. Nous somme partis de La Rochelle et avons roulé jusqu'à Saint Nazaire, en passant par l'île de Noirmoutier et son fameux passage du Gois. L'itinéraire quitte de temps à autre le littoral pour traverser des forêts ou les marais salants.",
  steps: [
    { date: new Date('2023-05-26') },
    { date: new Date('2023-05-30') },
    { date: new Date('2023-05-31') },
    { date: new Date('2023-06-01') },
    { date: new Date('2023-06-02') },
  ],
  simplifiedGeometry: {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-1.16658, 46.45497],
        [-1.57687, 46.41494],
        [-1.94685, 46.72274],
        [-2.23782, 46.96751],
        [-2.09944, 47.11574],
        [-2.21393, 47.27436],
      ],
    },
    properties: {},
  },
};
