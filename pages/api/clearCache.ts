import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  success: boolean;
  message?: string;
  data?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { urls } = req.body;

    if (!urls || !Array.isArray(urls)) {
      res.status(400).json({ success: false, message: 'Invalid request, URLs must be an array' });
      return;
    }

    try {
      const response = await axios.post(
        'https://api.cloudflare.com/client/v4/zones/89afd5c8713bfbbdd0589108c323667a/purge_cache',
        {
          files: urls
        },
        {
          headers: {
            'X-Auth-Email': process.env.NEXT_PUBLIC_CLOUDFLARE_EMAIL as string,
            'X-Auth-Key': process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN as string,
            'Content-Type': 'application/json'
          }
        }
      );

      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        res.status(error.response.status).json({ success: false, message: error.response.data });
      } else {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default handler;
