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
      pros: ['La traversée des vignes de Chinon'],
      cons: [
        "Il est normalement interdit d'embarquer dans un train régional avec une charette non pliée. C'est très problématique quand on voyage avec des enfants en bas âge !",
        "L'itinéraire n'est pas aussi bien fléché que celui de la Loire à Vélo par exemple",
        "La difficulté de trouver un endroit pour s'arrêter pique-niquer",
        'La ville de Thouars est un peu désertique',
      ],
      photos: [
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_072055163.jpg',
          description: 'La charette pour transporter dans notre fille, dans le train.',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_092729511.jpg',
          description: 'Un château au milieu des champs',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_102916760.jpg',
          description: 'Une aire de jeux où nous avons pû pique-niquer',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_120447928.jpg',
          description: 'Des vignes',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230520_140619639.jpg',
          description: 'La ville de Thouars et son château',
        },
        {
          path: 'trips/23-velo-francette/step-1/PXL_20230521_082144202.jpg',
          description: 'La ville de Thouars',
        },
      ],
    },
    {
      date: new Date('2023-05-21'),
      distance: 47.7,
      geometry: step2,
      from: 'Thouars',
      to: 'Parthenay',
      pros: [
        'Le fait de retrouver les mêmes personnes que la veille sur le trajet',
        'Les voies vertes loin des routes',
        'La ville de Parthenay',
      ],
      cons: [],
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
      pros: ["L'arrivée sur Niort"],
      cons: [],
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
      pros: [
        'Le calme de la coulée verte',
        "Le fait qu'on puisse trouver des lieux pour manger plus facilement",
      ],
      cons: ['Quelques ponts difficilement traversables en vélo avec charette'],
      photos: [
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_082729876.MP.jpg',
          description: 'Voie le long de la Sèvre Niortaise en sortie de Niort',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_101514129.jpg',
          description: 'La Sèvre Niortaise',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_101540418.jpg',
          description: 'Pont étroit difficilement traversable avec une charette',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_125411619.MP.jpg',
          description: 'La Sèvre Niortaise',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_130558353.jpg',
          description: 'Une écluse sur la Sèvre Niortaise',
        },
        {
          path: 'trips/23-velo-francette/step-4/PXL_20230523_130843494.jpg',
          description: 'La Sèvre Niortaise',
        },
      ],
    },
    {
      date: new Date('2023-05-24'),
      distance: 27.6,
      geometry: step5,
      from: 'Marans',
      to: 'La Rochelle',
      pros: ["L'arrivée sur le port de La Rochelle"],
      cons: ['La sortie de Marans', "L'état de la route à certains endroits"],
      photos: [
        {
          path: 'trips/23-velo-francette/step-5/PXL_20230524_085147080.jpg',
          description: 'La ville de Marans',
        },
        {
          path: 'trips/23-velo-francette/step-5/PXL_20230524_112536919.jpg',
          description: 'Une des longues lignes droites entre Marans et La Rochelle',
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
