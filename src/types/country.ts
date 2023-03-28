export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flag: string;
  language: { [key: string]: string };
}
export interface CountryState {
  countries: Country[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  sort: string[];
  favourites: string[];
  shift: any;
  page: number;
  pageSize: number;
}
