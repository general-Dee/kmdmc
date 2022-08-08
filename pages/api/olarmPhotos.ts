import type { NextApiRequest, NextApiResponse } from 'next'
import { olarmImages } from "../../data/olarmImages"

type Data = {
  name: string
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(olarmImages)
}