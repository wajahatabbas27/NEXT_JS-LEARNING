// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>)
{

  //api url
  // const API_URL = "https://jsonplaceholder.typicode.com/users"

  //catching id 
  const id = req.query.id;

  //making request using axios
  const userReq = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  res.status(200).json(userReq.data);


}

