import { lav22Trip } from './22-lav';
import { veloFrancette23Trip } from './23-velo-francette';
import { velodyssee23Trip } from './23-velodyssee';
import { Trip } from './trip';

export const trips: Trip[] = [
  new Trip(lav22Trip),
  new Trip(veloFrancette23Trip),
  new Trip(velodyssee23Trip),
];
