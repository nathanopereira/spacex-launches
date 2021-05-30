import { isBefore, subHours } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../config/spacexApi'

// TODO move cache for Redis
const cache = {
  rockets: [],
  lastUpdate: new Date()
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(isBefore(cache.lastUpdate, subHours(new Date(), 12))){
    cache.lastUpdate = new Date()
    cache.rockets = []
  }

  const findRocket = cache.rockets.find(r => r.id === req.query.id)
  if(findRocket){
    return res.json(findRocket)
  }

  const { data } = await api.get(`/rockets/${req.query.id}`)
  cache.rockets.push(data);

  return res.json(data);
}
