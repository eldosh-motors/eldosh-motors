export type Language = 'ru' | 'uz';

export interface ModelSpec {
  engineVolume: string;
  engineType: string;
  power: string;
  payload: string;
  maxSpeed: string;
  fuelConsumption: string;
  tankCapacity: string;
  cargoBedSize: string;
  dimensions: string;
  curbWeight: string;
  coolingSystem: string;
  transmission: string;
  brakeSystem: string;
}

export interface ModelGalleryItem {
  id: string;
  label: { ru: string; uz: string };
  url: string;
  tag: string;
}

export interface MotorcycleModel {
  id: string;
  slug: string;
  name: string;
  category: 'heavy' | 'universal' | 'cabin' | 'agro' | 'electric';
  tagline: { ru: string; uz: string };
  description: { ru: string; uz: string };
  primaryImage: string;
  gallery: ModelGalleryItem[];
  highlightSpecs: {
    payload: string;
    power: string;
    speed: string;
    engine: string;
  };
  specs: ModelSpec;
  keyFeatures: { ru: string[]; uz: string[] };
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Dealer {
  id: string;
  number: number;
  region: string;
  city: { ru: string; uz: string };
  name: { ru: string; uz: string };
  address: { ru: string; uz: string };
  phone: string;
  phones: string[];
  workingHours: { ru: string; uz: string };
  lat: number;
  lng: number;
  services: { ru: string[]; uz: string[] };
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: { ru: string; uz: string };
  excerpt: { ru: string; uz: string };
  content: { ru: string[]; uz: string[] };
  date: string;
  category: { ru: string; uz: string };
  image: string;
  readTime: { ru: string; uz: string };
}

export interface TechHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: { ru: string; uz: string };
  description: { ru: string; uz: string };
  spec: { ru: string; uz: string };
}
