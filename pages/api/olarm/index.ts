import { NextApiRequest, NextApiResponse } from "next";
import { olarmImages } from "../../../data/olarmImages";

export default function handler(
    req: NextApiRequest,
    res:NextApiResponse
) {
  res.status(200).json(olarmImages)      
}