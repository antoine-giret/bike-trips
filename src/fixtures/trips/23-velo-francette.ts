import { type TTrip } from './trip';

export const veloFrancette23Trip: TTrip = {
  key: 'veloFrancette23',
  title: 'Vélo Francette',
  coverImage: 'trips/23-velo-francette/cover.jpg',
  color: '#e5004b',
  themes: ['nature'],
  description:
    "Pour rejoindre La Rochelle depuis Tours il est possible d'emprunter la Vélo Francette. L'itinéraire est moins bien balisé, plus vallonné et traverse moins de villes que celui de la Loire à Vélo, mais il offre des paysages plus variés. Nous avons particulièrement apprécié la ville de Parthenay et la traversée du Marais Poitevin !",
  steps: [
    { date: new Date('2023-05-20') },
    { date: new Date('2023-05-21') },
    { date: new Date('2023-05-22') },
    { date: new Date('2023-05-23') },
    { date: new Date('2023-05-24') },
  ],
  simplifiedGeometry: {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [0.23796, 47.16612],
        [-0.21497, 46.97933],
        [-0.24703, 46.64738],
        [-0.46338, 46.32124],
        [-0.99192, 46.31006],
        [-1.15164, 46.15943],
      ],
    },
    properties: {},
  },
};
