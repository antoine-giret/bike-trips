import { type TTrip } from '../trip';

import step1 from './step-1';
import step2 from './step-2';
import step3 from './step-3';
import step4 from './step-4';
import step5 from './step-5';

export const velodyssee23Trip: TTrip = {
  key: 'velodyssee23',
  title: 'La Vélodyssée',
  coverImage: 'trips/23-velodyssee/cover.jpg',
  color: '#f59c00',
  themes: ['nature', 'littoral'],
  from: 'Luçon',
  to: 'Saint Nazaire',
  description:
    "Lorsque nous partons en Vendée, nos balades à vélo empruntent souvent une portion de la Vélodyssée. C'est donc tout naturellement que nous avons eu envie de faire un voyage en la suivant plus longuement. Nous somme partis de La Rochelle et avons roulé jusqu'à Saint Nazaire, en passant par l'île de Noirmoutier et son fameux passage du Gois. L'itinéraire quitte de temps à autre le littoral pour traverser des forêts ou les marais salants.",
  steps: [
    {
      date: new Date('2023-05-26'),
      distance: 40.5,
      geometry: step1,
      from: 'Luçon',
      to: 'Jard-sur-Mer',
    },
    {
      date: new Date('2023-05-30'),
      distance: 65.4,
      geometry: step2,
      from: 'Jard-sur-Mer',
      to: 'Saint-Hilaire-de-Riez',
    },
    {
      date: new Date('2023-05-31'),
      distance: 50.5,
      geometry: step3,
      from: 'Saint-Hilaire-de-Riez',
      to: 'La Guérinière',
    },
    {
      date: new Date('2023-06-01'),
      distance: 60.1,
      geometry: step4,
      from: 'La Guérinière',
      to: 'Pornic',
    },
    {
      date: new Date('2023-06-02'),
      distance: 39.7,
      geometry: step5,
      from: 'Pornic',
      to: 'Saint Nazaire',
    },
  ],
};
