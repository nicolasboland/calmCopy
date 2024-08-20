
import axios, { AxiosError } from 'axios'
import crypto from 'crypto';

export default async (req: any, res: any) => {
  const { email, tag } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  function generateMd5Hash(data: string) {
    return crypto.createHash('md5').update(data).digest('hex');
  }

  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
  const API_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  interface RequestBody {
    email_address: string;
    tags?: string[];
    status: string;
}

  const data : RequestBody = {
    email_address: email,
    status: 'subscribed'
  }
  if (tag) {
    data['tags'] = [tag];
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }

  try {
    const response = await axios.post(url, data, options)

    if (response.status >= 400) {
      return res.status(200).json({ message: 'success' })

    } else if (response.status > 400) {
      return res.status(400).json({
        error: `Hubo un error`
      })
    }

    return res.status(201).json({ message: 'success' });

  } catch (error: any) {

    const message = (error as AxiosError).response &&
      (error as AxiosError).response?.data &&
      ((error as AxiosError).response?.data as any).title ?
      ((error as AxiosError).response?.data as any).title :
      error.message

    if (message === 'Member Exists') {

      const md5 = generateMd5Hash(email);

      const urlUpd = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${md5}`

      const dataUpd = {
        tags: [tag]
      }

      try {
        const responseUpd = await axios.put(urlUpd, dataUpd, options);

        if (responseUpd.status === 200) {
          return res.status(200).json({ message: 'success' })
        } else {
          return res.status(400).json({
            error: `Hubo un error`
          })
        }

      } catch (err: any) {
        const message = (error as AxiosError).response &&
          (error as AxiosError).response?.data &&
          ((error as AxiosError).response?.data as any).title ?
          ((error as AxiosError).response?.data as any).title :
          error.message
        return res.status(501).json({ error: message })
      }

    }

    return res.status(501).json({ error: message })
  }
}