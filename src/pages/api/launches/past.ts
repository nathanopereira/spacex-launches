import type { NextApiRequest, NextApiResponse } from 'next'

import api from '../../../config/spacexApi'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await api.post(`/launches/query`, {
    options: {
      page: req.query.page || 1,
      sort: { date_utc: -1 }
    }
  })

  return res.json(data);
}
