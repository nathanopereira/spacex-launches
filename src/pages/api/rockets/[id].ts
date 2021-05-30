import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../config/spacexApi'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await api.get(`/rockets/${req.query.id}`)

  return res.json(data);
}
