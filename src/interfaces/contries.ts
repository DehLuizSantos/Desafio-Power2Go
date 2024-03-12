interface Name {
  common: string;
  official: string;
  nativeName: {
    ell: { official: string; common: string };
    tur: { official: string; common: string };
  };
}

interface Currencies {
  [currencyCode: string]: { name: string; symbol: string };
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Translations {
  [languageCode: string]: { official: string; common: string };
}

interface Demonyms {
  eng: { f: string; m: string };
  fra: { f: string; m: string };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface FlagUrls {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArmsUrls {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: [number, number];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface CountryData {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [languageCode: string]: string };
  translations: Translations;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: { [year: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: FlagUrls;
  coatOfArms: CoatOfArmsUrls;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
