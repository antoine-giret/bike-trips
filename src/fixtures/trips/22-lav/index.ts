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
  coverImageDescription: 'La Loire, Saumur et son château',
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
      photos: [
        {
          path: 'trips/22-lav/step-1/PXL_20220613_091927509.MP.jpg',
          description: 'Un panneau de direction de la Loire à Vélo',
        },
        {
          path: 'trips/22-lav/step-1/PXL_20220613_093615601.jpg',
          description: 'La confluence de la Loire et du Cher',
        },
        {
          path: 'trips/22-lav/step-1/PXL_20220613_115513025.jpg',
          description: "Petite pause sieste près d'un lac à Langeais",
        },
        {
          path: 'trips/22-lav/step-1/PXL_20220613_162505397.jpg',
          description:
            "Le château d'Ussé, aussi connu comme étant le château de la Belle au Bois Dormant",
        },
      ],
    },
    {
      from: 'Rigny-Ussé',
      to: 'Saumur',
      date: new Date('2022-06-14'),
      distance: 43.7,
      geometry: step2,
      photos: [
        {
          path: 'trips/22-lav/step-2/PXL_20220614_084617076.jpg',
          description: 'Le village de Candes-Saint-Martin, un des plus beaux de France',
        },
        {
          path: 'trips/22-lav/step-2/PXL_20220614_091354350.jpg',
          description: 'La confluence de la Loire et de la Vienne',
        },
        {
          path: 'trips/22-lav/step-2/PXL_20220614_121336592.jpg',
          description: "L'abbaye Royale de Fontevraud",
        },
        {
          path: 'trips/22-lav/step-2/PXL_20220614_135613603.jpg',
          description: 'La Loire et ses larges bandes de sable',
        },
        {
          path: 'trips/22-lav/step-2/PXL_20220614_152957352.jpg',
          description: 'La Loire, Saumur et son château',
        },
      ],
    },
    {
      from: 'Saumur',
      to: 'Angers',
      date: new Date('2022-06-15'),
      distance: 59.8,
      geometry: step3,
      photos: [
        {
          path: 'trips/22-lav/step-3/PXL_20220615_090819541.jpg',
          description: 'Le château de Saumur',
        },
        {
          path: 'trips/22-lav/step-3/PXL_20220615_091223813.MP.jpg',
          description: 'La Loire vue depuis le château de Saumur',
        },
        {
          path: 'trips/22-lav/step-3/PXL_20220615_154149422.MP.jpg',
          description: "Un bac à chaîne sur L'Authion, à Trélazé",
        },
      ],
    },
    {
      from: 'Angers',
      to: 'Ancenis',
      date: new Date('2022-06-16'),
      distance: 70.2,
      geometry: step4,
      photos: [
        {
          path: 'trips/22-lav/step-4/PXL_20220616_075321827.jpg',
          description: 'La Loire, Angers et son château',
        },
        {
          path: 'trips/22-lav/step-4/PXL_20220616_090427991.jpg',
          description: 'Une ruelle du village de Béhuard, classé village de caractère',
        },
        {
          path: 'trips/22-lav/step-4/PXL_20220616_160424769.jpg',
          description: "Le château d'Ancenis",
        },
      ],
    },
    {
      from: 'Ancenis',
      to: 'Nantes',
      date: new Date('2022-06-17'),
      distance: 42.8,
      geometry: step5,
      photos: [
        {
          path: 'trips/22-lav/step-5/PXL_20220617_092234575.MP.jpg',
          description: 'Le château des Ducs de Bretagne à Nantes',
        },
        {
          path: 'trips/22-lav/step-5/PXL_20220617_100633964.MP.jpg',
          description: 'La cour du château des Ducs de Bretagne à Nantes',
        },
      ],
    },
  ],
};
