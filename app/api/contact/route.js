import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const dataDir = path.join(process.cwd(), 'contactData');
    const body = await req.json();
    const files = fs.readdirSync(dataDir);
    const res = fs.appendFileSync(`${dataDir}/query${(files.length)+1}.json`, JSON.stringify(body));
    console.log(res);

    return NextResponse.json({Response:"thanks for contacting our team will reach out to you soon"},{status: 200});
  } catch (error) {
    console.error('Error reading data directory:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

