import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

interface VersionResponse {
  version: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VersionResponse>
) {
  const { publicRuntimeConfig } = getConfig();
  const version = publicRuntimeConfig.version || 'version not set';

  res.status(200).json({ version });
}
