import axios from "axios"

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1/"
})

//HTTP GET METHOD 

export const getCountryData=()=>{
    return api.get("all?fields=name,flags,population,region,capital")
}

//http get method for the individual country name

export const getCountryIndData = (name) => {
  return api.get(
    `name/${name}?fullText=true&fields=name,flags,population,region,languages,currencies,tld,subregion,borders,capital`
  );
};
