import simplify from '@turf/simplify';

export type TTripTheme = 'gastronomy' | 'heritage' | 'littoral' | 'nature';

export const tripThemesMap: { [key in TTripTheme]: { label: string; color: string } } = {
  gastronomy: { label: 'Gastronomie', color: 'pink.500' },
  heritage: { label: 'Patrimoine', color: 'gray.500' },
  littoral: { label: 'Littoral', color: 'blue.500' },
  nature: { label: 'Nature', color: 'green.500' },
};

export type TTripStep = {
  date: Date;
  distance: number;
  from: string;
  geometry: GeoJSON.LineString;
} & ({ to: string } | { isLoop: boolean });

export type TTrip = {
  color: string;
  coverImage: string;
  description: string;
  from: string;
  key: string;
  title: string;
  steps: TTripStep[];
  themes: TTripTheme[];
} & ({ to: string } | { isLoop: boolean });

export class Trip {
  public readonly color: string;
  public readonly coverImage: string;
  public readonly description: string;
  public readonly from: string;
  public readonly isLoop: boolean;
  public readonly key: string;
  public readonly title: string;
  public readonly to: string;
  public readonly simplifiedGeometry: GeoJSON.LineString;
  public readonly steps: TTripStep[];
  public readonly themes: TTripTheme[];

  constructor({
    color,
    coverImage,
    description,
    from,
    key,
    title,
    steps,
    themes,
    ...props
  }: TTrip) {
    this.color = color;
    this.coverImage = coverImage;
    this.description = description;
    this.from = from;
    this.isLoop = 'isLoop' in props && props.isLoop;
    this.key = key;
    this.title = title;
    this.to = 'to' in props ? props.to : this.from;
    this.steps = steps;
    this.themes = themes;

    this.simplifiedGeometry = simplify(
      { type: 'LineString', coordinates: steps.flatMap(({ geometry }) => geometry.coordinates) },
      { tolerance: 0.01, highQuality: false },
    );
  }
}
