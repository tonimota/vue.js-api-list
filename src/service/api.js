import {beers, starwars} from './http'

export const getAllBeers = () => {
  return beers.get('/beers')
}

export const getFindindBeers = (search) => {
  return beers.get(`/beers?${search}`)
}

export const getAllStarwars = () => {
  return starwars.get('')
}
