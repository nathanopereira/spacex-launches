import api from '../../../config/spacexApi'

export default async (req, res) => {
  const { data } = await api.get(`/rockets/${req.params.id}`)

  return res.json(data);
}
