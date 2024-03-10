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
  coverImageDescription: "Le passage du Gois, entre l'île de Noirmoutier et le continent",
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
      pros: [],
      cons: [],
      photos: [
        {
          path: 'trips/23-velodyssee/step-1/PXL_20230526_105648489.jpg',
          description: 'Notre chargement dans le train avant le départ',
        },
        {
          path: 'trips/23-velodyssee/step-1/PXL_20230526_134730054.jpg',
          description: 'Une voie verte entre Luçon et Jard-sur-Mer',
        },
        {
          path: 'trips/23-velodyssee/step-1/PXL_20230526_150931600.jpg',
          description: 'Le port de Saint-Vincent-sur-Jard',
        },
      ],
    },
    {
      date: new Date('2023-05-30'),
      distance: 65.4,
      geometry: step2,
      from: 'Jard-sur-Mer',
      to: 'Saint-Hilaire-de-Riez',
      pros: [
        'La traversée des marais salants',
        'Les chemins traversant des forêts',
        "Les vues sur l'océan",
      ],
      cons: [],
      photos: [
        {
          path: 'trips/23-velodyssee/step-2/PXL_20230530_090827504.jpg',
          description: "Vue sur l'océan entre Jard-sur-Mer et Saint-Hilaire-de-Riez",
        },
        {
          path: 'trips/23-velodyssee/step-2/PXL_20230530_115021575.jpg',
          description: 'Plage entre Jard-sur-Mer et Saint-Hilaire-de-Riez',
        },
      ],
    },
    {
      date: new Date('2023-05-31'),
      distance: 50.5,
      geometry: step3,
      from: 'Saint-Hilaire-de-Riez',
      to: 'La Guérinière',
      pros: ["L'ile de Noirmoutier et sa faune, les passages entre océan et marais salants"],
      cons: ['La ville de Saint-Jean-de-Monts'],
      photos: [
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_133733012.jpg',
          description: 'Voie verte dans une forêt entre Saint-Hilaire-de-Riez et la Guérinière',
        },
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_134247013.jpg',
          description: "Pont de l'île de Noirmoutier",
        },
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_135525145.MP.jpg',
          description: "Traversée du pont de l'île de Noirmoutier",
        },
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_140338874.jpg',
          description: "Un oiseau dans les marais sur l'île de Noirmoutier",
        },
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_141557573.jpg',
          description: "Passage entre océan et marais l'île de Noirmoutier",
        },
        {
          path: 'trips/23-velodyssee/step-3/PXL_20230531_170126479.jpg',
          description: "Marais sur l'île de Noirmoutier",
        },
      ],
    },
    {
      date: new Date('2023-06-01'),
      distance: 60.1,
      geometry: step4,
      from: 'La Guérinière',
      to: 'Pornic',
      pros: [
        'La traversée du passage du Gois',
        "Les ports colorés d'ostréiculteurs",
        'La ville de Pornic et ses pêcheries',
      ],
      cons: [],
      photos: [
        {
          path: 'trips/23-velodyssee/step-4/PXL_20230601_071221189.MP.jpg',
          description: 'Traversée du passage du Gois',
        },
        {
          path: 'trips/23-velodyssee/step-4/PXL_20230601_072115328.jpg',
          description: 'Le passage du Gois',
        },
        {
          path: 'trips/23-velodyssee/step-4/PXL_20230601_084027133.jpg',
          description: "Un port coloré d'ostréiculteurs",
        },
        {
          path: 'trips/23-velodyssee/step-4/PXL_20230601_121210461.jpg',
          description: 'Le port de Pornic',
        },
        {
          path: 'trips/23-velodyssee/step-4/PXL_20230601_171121353.jpg',
          description: 'Une pêcherie près de Pornic',
        },
      ],
    },
    {
      date: new Date('2023-06-02'),
      distance: 39.7,
      geometry: step5,
      from: 'Pornic',
      to: 'Saint Nazaire',
      pros: [],
      cons: ['La traversée du pont de Saint-Nazaire, à proscrire'],
    },
  ],
};
