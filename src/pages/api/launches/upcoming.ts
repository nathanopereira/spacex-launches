import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../config/spacexApi'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await api.post('/launches/query', {
    query: {
      upcoming: true
    },
    options: {
      sort: { date_utc: -1 },
      pagination: false
    }
  })

  return res.json(data);
}
