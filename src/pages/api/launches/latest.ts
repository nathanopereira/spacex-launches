import { NextApiRequest, NextApiResponse } from 'next';

import api from '../../../config/spacexApi'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await api.get('/launches/latest')

  return res.json(data);
}
