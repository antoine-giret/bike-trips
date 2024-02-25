export type TTripTheme = 'gastronomy' | 'heritage' | 'littoral' | 'nature';

export const tripThemesMap: { [key in TTripTheme]: { label: string; color: string } } = {
  gastronomy: { label: 'Gastronomie', color: 'pink.500' },
  heritage: { label: 'Patrimoine', color: 'gray.500' },
  littoral: { label: 'Littoral', color: 'blue.500' },
  nature: { label: 'Nature', color: 'green.500' },
};

export type TTripStep = {
  date: Date;
};

export type TTrip = {
  color: string;
  coverImage: string;
  description: string;
  key: string;
  title: string;
  simplifiedGeometry: GeoJSON.Feature<GeoJSON.LineString>;
  steps: TTripStep[];
  themes: TTripTheme[];
};
