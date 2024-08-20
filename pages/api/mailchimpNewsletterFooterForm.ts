// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<{subscribed: boolean, error: boolean}>) {
  if (req.method === 'POST') {
    try {
      const data = {
        EMAIL: req.body.email,
        tags: 203787
      };
      const url = "https://calmessimple.us20.list-manage.com/subscribe/post?u=ba7ac9232d2d88923aa894fdb&id=d1f4951e99&f_id=006e78e0f0";
      const options = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      }

      const response = await axios.post(url, data, options);
      if(response.data.toString().indexOf("Hay errores abajo") != -1) {
        res.status(400).send({subscribed: false, error: true});
      } else {
        res.status(response.status).send({subscribed: true, error: false});
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
      return res.status(400).send({subscribed: false, error: true})
    }

  } else {
    res.status(405).end(); // Método no permitido para esta ruta
  }

}