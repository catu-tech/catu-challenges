import { NextApiRequest, NextApiResponse } from 'next';

const requestHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    now: Date.now()
  });
};

export default requestHandler;
