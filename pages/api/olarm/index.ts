import { NextApiRequest, NextApiResponse } from "next";
import { olarm } from "../../../data/projectPhotos";

export default function handler(
    req: NextApiRequest,
    res:NextApiResponse
) {
  res.status(200).json(olarm)      
}