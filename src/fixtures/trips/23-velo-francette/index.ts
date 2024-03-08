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
  coverImageDescription: 'Le Marais Poitevin ou coulée verte',
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
      photos: [
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_102916760.jpg',
          description: 'Notre chargement avant le départ',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_120447928.jpg',
          description: 'Des vignes près de Chinon',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_140619639.jpg',
          description: 'La ville de Thouars et son château',
        },
      ],
    },
    {
      date: new Date('2023-05-21'),
      distance: 47.7,
      geometry: step2,
      from: 'Thouars',
      to: 'Parthenay',
      photos: [
        {
          path: 'trips/23-velo-francette/step-2/PXL_20230521_124858869.MP.jpg',
          description: 'Une voie verte entre Thouars et Parthenay',
        },
        {
          path: 'trips/23-velo-francette/step-2/PXL_20230521_132328075.jpg',
          description: 'Une rue de la ville de Parthenay',
        },
        {
          path: 'trips/23-velo-francette/step-2/PXL_20230521_134522260.jpg',
          description: 'Vue sur Parthenay depuis son château',
        },
        {
          path: 'trips/23-velo-francette/step-2/PXL_20230521_141818306.jpg',
          description: 'La ville de Parthenay et ses ruines',
        },
      ],
    },
    {
      date: new Date('2023-05-22'),
      distance: 55.8,
      geometry: step3,
      from: 'Parthenay',
      to: 'Niort',
      photos: [
        {
          path: 'trips/23-velo-francette/step-3/PXL_20230522_082022913.jpg',
          description: 'Passage sur un ponton',
        },
        {
          path: 'trips/23-velo-francette/step-3/PXL_20230522_092527795.MP.jpg',
          description: 'Une voie verte entre Parthenay et Niort',
        },
      ],
    },
    {
      date: new Date('2023-05-23'),
      distance: 65,
      geometry: step4,
      from: 'Niort',
      to: 'Marans',
      photos: [
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_101540418.jpg',
          description: 'Pont étroit en sortie de Niort',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_125411619.MP.jpg',
          description: 'La Sèvre Niortaise, au cœur du Marais Poitevin ou coulée verte',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_130558353.jpg',
          description: 'Une écluse sur la Sèvre Niortaise',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_130843494.jpg',
          description: 'La Sèvre Niortaise, au cœur du Marais Poitevin ou coulée verte',
        },
      ],
    },
    {
      date: new Date('2023-05-24'),
      distance: 27.6,
      geometry: step5,
      from: 'Marans',
      to: 'La Rochelle',
      photos: [
        {
          path: 'trips/23-velo-francette/step-5/PXL_20230524_085147080.jpg',
          description: 'La ville de Marans',
        },
        {
          path: 'trips/23-velo-francette/step-5/PXL_20230524_124556478.jpg',
          description: 'Les tours sur le port de La Rochelle',
        },
        {
          path: 'trips/23-velo-francette/step-5/PXL_20230526_094008720.jpg',
          description: "Reconstitution d'un bateau d'époque coloniale sur le port de La Rochelle",
        },
      ],
    },
  ],
};
