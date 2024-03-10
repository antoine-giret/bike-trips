import simplify from '@turf/simplify';
import { LngLatBounds } from 'maplibre-gl';

export type TTripTheme = 'gastronomy' | 'heritage' | 'littoral' | 'nature';

export const tripThemesMap: { [key in TTripTheme]: { label: string; color: string } } = {
  gastronomy: { label: 'Gastronomie', color: 'pink.500' },
  heritage: { label: 'Patrimoine', color: 'gray.500' },
  littoral: { label: 'Littoral', color: 'blue.500' },
  nature: { label: 'Nature', color: 'green.500' },
};

type TTripStep = {
  cons?: string[];
  date: Date;
  distance: number;
  from: string;
  geometry: GeoJSON.LineString;
  photos?: Array<{ path: string; description: string }>;
  pros?: string[];
} & ({ to: string } | { isLoop: boolean });

export type TTrip = {
  color: string;
  coverImage: string;
  coverImageDescription: string;
  description: string;
  from: string;
  key: string;
  title: string;
  steps: TTripStep[];
  themes: TTripTheme[];
} & ({ to: string } | { isLoop: boolean });

export class TripStep {
  public readonly bounds: LngLatBounds;
  public readonly cons: string[];
  public readonly date: Date;
  public readonly distance: number;
  public readonly from: string;
  public readonly isLoop: boolean;
  public readonly photos: Array<{ path: string; description: string }>;
  public readonly pros: string[];
  public readonly simplifiedGeometry: GeoJSON.LineString;
  public readonly to: string;

  constructor({ cons, date, distance, from, geometry, photos, pros, ...props }: TTripStep) {
    this.date = date;
    this.distance = distance;
    this.from = from;
    this.photos = photos || [];
    this.pros = pros || [];
    this.cons = cons || [];

    this.isLoop = 'isLoop' in props && props.isLoop;
    this.to = 'to' in props ? props.to : this.from;

    this.simplifiedGeometry = simplify(geometry, { tolerance: 0.01, highQuality: false });

    const positions = this.simplifiedGeometry.coordinates.flatMap(([lng, lat]) => ({ lat, lng }));
    this.bounds = positions.slice(1).reduce(
      (res, position) => {
        return res.extend(position);
      },
      new LngLatBounds(positions[0], positions[0]),
    );
  }

  get title(): string {
    return this.isLoop ? `${this.from} <> ${this.from}` : `${this.from} > ${this.to}`;
  }
}

export class Trip {
  public readonly bounds: LngLatBounds;
  public readonly color: string;
  public readonly coverImage: string;
  public readonly coverImageDescription: string;
  public readonly description: string;
  public readonly from: string;
  public readonly isLoop: boolean;
  public readonly key: string;
  public readonly title: string;
  public readonly to: string;
  public readonly simplifiedGeometry: GeoJSON.MultiLineString;
  public readonly steps: TripStep[];
  public readonly themes: TTripTheme[];

  constructor({
    color,
    coverImage,
    coverImageDescription,
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
    this.coverImageDescription = coverImageDescription;
    this.description = description;
    this.from = from;
    this.isLoop = 'isLoop' in props && props.isLoop;
    this.key = key;
    this.title = title;
    this.to = 'to' in props ? props.to : this.from;
    this.steps = steps.map((props) => new TripStep(props));
    this.themes = themes;

    this.simplifiedGeometry = {
      type: 'MultiLineString',
      coordinates: this.steps.map(({ simplifiedGeometry: { coordinates } }) => coordinates),
    };

    this.bounds = this.steps.slice(1).reduce((res, { bounds }) => {
      return res.extend(bounds);
    }, this.steps[0].bounds);
  }

  get strStartDate(): string {
    return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(
      this.steps[0].date,
    );
  }

  get stepsItems(): string[] {
    const items: string[] = this.isLoop
      ? [`${this.from} <> ${this.from}`]
      : [`${this.from} > ${this.to}`];
    if (this.steps.length > 0) {
      items.push(
        this.steps.length > 1 ? `${this.steps.length} étapes` : '1 étape',
        `${Math.round(
          this.steps.reduce((res, { distance }) => res + distance, 0) / this.steps.length,
        )} kms / jour en moyenne`,
      );
    }

    return items;
  }
}
