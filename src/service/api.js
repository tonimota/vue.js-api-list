import {beers, starwars} from './http'

export const getAllBeers = () => {
  return beers.get('/beers')
}

export const getFindindBeers = (search) => {
  return beers.get(`/beers?${search}`)
}

export const getFindindPlanets = (search) => {
  return starwars.get(`?${search}&format=json`)
}

export const getAllStarwars = () => {
  return starwars.get('/?format=json')
}
