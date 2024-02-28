import { type TTrip } from '../trip';

import step1 from './step-1';
import step2 from './step-2';
import step3 from './step-3';
import step4 from './step-4';
import step5 from './step-5';

export const lav22Trip: TTrip = {
  key: 'lav22',
  title: 'Loire à Vélo',
  coverImage: 'trips/22-lav/cover.jpg',
  color: '#174589',
  themes: ['nature', 'heritage', 'gastronomy'],
  from: 'Tours',
  to: 'Nantes',
  description:
    "Pour notre premier voyage nous avons choisi d'emprunter la Loire à vélo depuis Tours jusqu'à Nantes. Elle propose un itinéraire idéal pour débuter. Le tracé est relativement plat et traverse de nombreuses villes où il est possible de s'arrêter manger ou dormir. Nous avions le cargo électrique et notre fille qui n'avait pas encore un an, il ne fallait donc pas de trop grosses étapes. Nous n'avons pas été déçus par le côté sauvage et la Faune qu'offre la Loire, ainsi que par les nombreux châteaux que nous avons pû admirer tout le long du chemin.",
  steps: [
    {
      from: 'Tours',
      to: 'Rigny-Ussé',
      date: new Date('2022-06-13'),
      distance: 42.8,
      geometry: step1,
    },
    {
      from: 'Rigny-Ussé',
      to: 'Saumur',
      date: new Date('2022-06-14'),
      distance: 43.7,
      geometry: step2,
    },
    {
      from: 'Saumur',
      to: 'Angers',
      date: new Date('2022-06-15'),
      distance: 59.8,
      geometry: step3,
    },
    {
      from: 'Angers',
      to: 'Ancenis',
      date: new Date('2022-06-16'),
      distance: 70.2,
      geometry: step4,
    },
    {
      from: 'Ancenis',
      to: 'Nantes',
      date: new Date('2022-06-17'),
      distance: 42.8,
      geometry: step5,
    },
  ],
};
