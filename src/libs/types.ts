type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Currency = {
  name: string;
  symbol: string;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Translation = {
  official: string;
  common: string;
};

type Demonym = {
  f: string;
  m: string;
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};

type CoatOfArms = {
  png: string;
  svg: string;
};

type CapitalInfo = {
  latlng: number[];
};

type PostalCode = {
  format: string;
  regex: string;
};

type Countries = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    [key: string]: Translation;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc: string;
  independent: boolean;
};

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: Translation;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: Demonym;
    fra: Demonym;
  };
  flag: string;
  maps: Maps;
  population: number;
  gini: {
    [key: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};
