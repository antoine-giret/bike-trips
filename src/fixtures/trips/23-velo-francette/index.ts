import { type TTrip } from '../trip';

import step1 from './step-1';
import step2 from './step-2';
import step3 from './step-3';
import step4 from './step-4';
import step5 from './step-5';

export const veloFrancette23Trip: TTrip = {
  key: 'veloFrancette23',
  title: 'Vélo Francette',
  coverImage: 'trips/23-velo-francette/cover.jpg',
  color: '#e5004b',
  themes: ['nature'],
  from: 'Chinon',
  to: 'La Rochelle',
  description:
    "Pour rejoindre La Rochelle depuis Tours il est possible d'emprunter la Vélo Francette. L'itinéraire est moins bien balisé, plus vallonné et traverse moins de villes que celui de la Loire à Vélo, mais il offre des paysages plus variés. Nous avons particulièrement apprécié la ville de Parthenay et la traversée du Marais Poitevin !",
  steps: [
    {
      date: new Date('2023-05-20'),
      distance: 54.6,
      geometry: step1,
      from: 'Chinon',
      to: 'Thouars',
    },
    {
      date: new Date('2023-05-21'),
      distance: 47.7,
      geometry: step2,
      from: 'Thouars',
      to: 'Parthenay',
    },
    {
      date: new Date('2023-05-22'),
      distance: 55.8,
      geometry: step3,
      from: 'Parthenay',
      to: 'Niort',
    },
    { date: new Date('2023-05-23'), distance: 65, geometry: step4, from: 'Niort', to: 'Marans' },
    {
      date: new Date('2023-05-24'),
      distance: 27.6,
      geometry: step5,
      from: 'Marans',
      to: 'La Rochelle',
    },
  ],
};
