import { type TTrip } from './trip';

export const lav22Trip: TTrip = {
  key: 'lav22',
  title: 'Loire à Vélo',
  coverImage: 'trips/22-lav/cover.jpg',
  color: '#174589',
  themes: ['nature', 'heritage', 'gastronomy'],
  description:
    "Pour notre premier voyage nous avons choisi d'emprunter la Loire à vélo depuis Tours jusqu'à Nantes. Elle propose un itinéraire idéal pour débuter. Le tracé est relativement plat et traverse de nombreuses villes où il est possible de s'arrêter manger ou dormir. Nous avions le cargo électrique et notre fille qui n'avait pas encore un an, il ne fallait donc pas de trop grosses étapes. Nous n'avons pas été déçus par le côté sauvage et la Faune qu'offre la Loire, ainsi que par les nombreux châteaux que nous avons pû admirer tout le long du chemin.",
  steps: [
    { date: new Date('2022-06-13') },
    { date: new Date('2022-06-14') },
    { date: new Date('2022-06-15') },
    { date: new Date('2022-06-16') },
    { date: new Date('2022-06-17') },
  ],
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
    properties: {},
  },
};
