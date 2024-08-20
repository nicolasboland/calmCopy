import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from 'next';
import client from "@/utils/apolloClient";
import { getHygraphId } from "@/utils/hygraphIds";

export const runtime = 'edge';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
try {
    const { data } = await client.query({
        query: gql`
            query getLandingSEO {
                landingSEOs(where: { OR: [{ id: "${getHygraphId('cancelar-compra')}" }, { id: "${getHygraphId('compromiso-descansados')}" }, { id: "${getHygraphId('localm')}" }, { id: "${getHygraphId('opiniones-reales')}" }, { id: "${getHygraphId('pick-up')}" }, { id: "${getHygraphId('faq')}" }, { id: "${getHygraphId('quienes-somos')}" }, { id: "${getHygraphId('tyc-landing')}" }] }) {
                    id
                    title
                    description
                    image
                    url
                }
          }
        `,
      });
      return new Response(
        JSON.stringify({
          data
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        },
      ) 
 } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
}
};