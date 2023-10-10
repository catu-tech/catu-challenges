import { Stack, Typography } from '@mui/material';

const Pedido = () => {
  function fetchPedido() {
    // O que será que vai aqui...🤔🤔🤔
  }

  return (
    <Stack gap={2}>
      <Typography variant={'h5'}>
        Pedido: <Typography fontWeight={'700'}>NomeDoPedido</Typography>
      </Typography>
      <Typography variant={'h6'}>
        Porções: <Typography fontWeight={'700'}>X</Typography>
      </Typography>
    </Stack>
  );
};

export default Pedido;
