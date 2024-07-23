export async function getCountry(name: string) {
  "use server";
  try {
    const url = "https://restcountries.com/v3.1/name/";
    const res = await fetch(`${url}${name}`);
    const data = (await res.json()) as Country[];
    //some typescript fix to have only strings
    //probably better way to do this
    const curr = data[0].currencies;
    const currKey = Object.keys(curr)[0];
    const currVal = curr[currKey].name;

    const nat = data[0].name.nativeName;
    const natKey = Object.keys(nat)[0];
    const natVal = nat[natKey].common;

    const lang = data[0].languages;
    const langKey = Object.keys(lang)[0];
    const langVal = lang[langKey];

    const country = {
      name: data[0].name.common,
      borders: data[0].borders,
      flag: data[0].flags.svg,
      altFlag: data[0].flags.alt,
      main: {
        nativeName: natVal,
        population: data[0].population,
        region: data[0].region,
        subRegion: data[0].subregion,
        capital: data[0].capital[0],
      },
      sub: {
        domain: data[0].tld[0],
        currency: currVal,
        languages: langVal,
      },
    };

    return country;
  } catch (error) {
    console.log(error);
  }
}
