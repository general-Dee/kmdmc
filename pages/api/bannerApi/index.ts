// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { bannerImgs } from '../../../data/bannerImages'

type Data = {
  id: number,
  img: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({img: `${}`})
}
