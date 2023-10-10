import Usuarios from '@/components/exercicio-02/Usuarios';
import { Divider, Typography } from '@mui/material';
import Head from 'next/head';

/**
 * @/pages/exercicios/02-sort-table
 * ----------------------------------------------------------------------
 * Agora que você já deu uma aquecida sobre como fazer uma requisição,
 * vamos chutar um pouco o balde, ok?
 *
 * Nesta página utilizamos um componente que faz a requisição de uma lista
 * de dados e os exibe em uma tabela.
 *
 * Até lá, tudo bem, certo?
 *
 * Mais ou menos...😅
 *
 * Tem duas coisas que queremos por aqui, você pode fazer uma ou as duas:
 * - Primeiro: **paginação**! 📄 Veja que é uma listagem
 *   de usuários, então pode haver mais do que você está vendo aqui, nesta
 *   tela;
 * - Segundo: ordenação! 📊 Legal que podemos ver e paginar os dados, mas
 *   e se quisermos ordenar por nome ou outro atributo?;
 *
 * Desafio Fullstack:
 * - Que tal adicionar um filtro de busca? 🔍👀;
 * - Você precisará mexer tanto no backend quanto no frontend;
 *
 * No frontend:
 * - Você precisa fazer uma requisição GET para `/api/usuarios`;
 * - Este endpoint aceita os seguintes parâmetros:
 *   - `page`: número da página que você quer ver;
 *   - `order_by`: atributo pelo qual você quer ordenar;
 *   - `order`: `asc` ou `desc`, para ordenação ascendente ou descendente;
 *   - `?????`: ???????? (😱🔍👀);
 *
 * No backend:
 * - Você precisa alterar `/pages/api/usuarios.ts` para alterar a filtragem,
 *   você é livre para escolher qual método utilizar;
 *
 * E aí, topa o desafio? 🤔
 *
 * @returns
 */
const ExercisePage = () => {
  return (
    <>
      <Head>
        <title>Exercício 02 : Sort Table</title>
        <meta
          name="description"
          content="Coloca um pouco de ordem nesta casa, por favor!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Typography variant={'h3'}>Exercício 02</Typography>
      <Typography variant={'h5'}>Quem está dentro?</Typography>

      <Divider sx={{ my: 2 }} />

      <Usuarios />
    </>
  );
};

export default ExercisePage;
