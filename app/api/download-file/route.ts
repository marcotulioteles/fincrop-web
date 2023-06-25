import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('[LOG] req: ', req)
  
  const fileName = 'contract_working_faking_NDA.pdf';
  const filePath = '/home/marcotulioteles/Documents/dev/projects/poc-bunge-ey-spring-boot/target/classes/poc-documents/contract_working_faking_NDA.pdf';

  if (!filePath || Array.isArray(filePath)) {
    res.status(400).end('Invalid file path');
    return;
  }

  const file = path.resolve(filePath);

  if (fs.existsSync(file)) {
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; ${fileName}`);

    const stream = fs.createReadStream(file);
    stream.pipe(res);
  } else {
    res.status(404).end('File not found');
  }
}

