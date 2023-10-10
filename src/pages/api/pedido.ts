import { NextApiRequest, NextApiResponse } from 'next';

const requestHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (Math.random() < 0.3) {
    res.status(500).json({
      message: 'Ops! Algo deu errado por aqui!'
    });
    return;
  }

  if (Math.random() > 0.75) {
    res.status(404).json({
      message: 'Pedido não encontrado!'
    });
  }

  res.status(200).json({
    dish: 'Spaghetti Carbonara',
    servings: 1,
    extras: ['Extra bacon', 'Extra parmesan cheese']
  });
};

export default requestHandler;
